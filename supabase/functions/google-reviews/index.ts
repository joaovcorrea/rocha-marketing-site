const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

const PLACE_ID = "ChIJWc04eVzl3JQRlf3yxOcPa2Y";

// Simple in-memory cache (per function instance) to avoid hammering Google API
let cache: { data: unknown; expiresAt: number } | null = null;
const CACHE_TTL_MS = 1000 * 60 * 60; // 1 hour

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response("ok", { headers: corsHeaders });
  }

  try {
    const apiKey = Deno.env.get("GOOGLE_PLACES_API_KEY");
    if (!apiKey) {
      return new Response(
        JSON.stringify({ error: "GOOGLE_PLACES_API_KEY is not configured" }),
        { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } },
      );
    }

    const now = Date.now();
    if (cache && cache.expiresAt > now) {
      return new Response(JSON.stringify(cache.data), {
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    // Use Places API (New) — v1
    const url = `https://places.googleapis.com/v1/places/${PLACE_ID}?languageCode=pt-BR&regionCode=BR`;
    const response = await fetch(url, {
      headers: {
        "X-Goog-Api-Key": apiKey,
        "X-Goog-FieldMask":
          "id,displayName,rating,userRatingCount,googleMapsUri,reviews",
      },
    });

    if (!response.ok) {
      const errText = await response.text();
      console.error("Google Places error", response.status, errText);
      return new Response(
        JSON.stringify({ error: `Google Places API error [${response.status}]`, details: errText }),
        { status: 502, headers: { ...corsHeaders, "Content-Type": "application/json" } },
      );
    }

    const json = await response.json();

    type GReview = {
      name?: string;
      rating?: number;
      text?: { text?: string };
      originalText?: { text?: string };
      authorAttribution?: { displayName?: string; photoUri?: string; uri?: string };
      relativePublishTimeDescription?: string;
      publishTime?: string;
    };

    const reviews = (json.reviews ?? []) as GReview[];
    const payload = {
      placeId: json.id ?? PLACE_ID,
      name: json.displayName?.text ?? "Rocha Marketing",
      rating: json.rating ?? null,
      userRatingCount: json.userRatingCount ?? 0,
      googleMapsUri: json.googleMapsUri ?? null,
      reviews: reviews.map((r) => ({
        author: r.authorAttribution?.displayName ?? "Cliente Google",
        photo: r.authorAttribution?.photoUri ?? null,
        profileUrl: r.authorAttribution?.uri ?? null,
        rating: r.rating ?? 5,
        text: r.text?.text ?? r.originalText?.text ?? "",
        relativeTime: r.relativePublishTimeDescription ?? "",
        publishTime: r.publishTime ?? null,
      })),
    };

    cache = { data: payload, expiresAt: now + CACHE_TTL_MS };

    return new Response(JSON.stringify(payload), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : "Unknown error";
    console.error("google-reviews error:", message);
    return new Response(JSON.stringify({ error: message }), {
      status: 500,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
});