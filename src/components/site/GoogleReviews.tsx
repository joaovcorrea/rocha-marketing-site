import { useEffect, useState } from "react";
import { Quote, Star } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { Reveal } from "./Reveal";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

type Review = {
  author: string;
  photo: string | null;
  profileUrl: string | null;
  rating: number;
  text: string;
  relativeTime: string;
};

type Payload = {
  name: string;
  rating: number | null;
  userRatingCount: number;
  googleMapsUri: string | null;
  reviews: Review[];
};

const Stars = ({ rating }: { rating: number }) => (
  <div className="flex items-center gap-0.5" aria-label={`${rating} estrelas`}>
    {Array.from({ length: 5 }).map((_, i) => (
      <Star
        key={i}
        className={`h-4 w-4 ${
          i < Math.round(rating)
            ? "fill-primary text-primary"
            : "text-muted-foreground/30"
        }`}
      />
    ))}
  </div>
);

export const GoogleReviews = () => {
  const [data, setData] = useState<Payload | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let active = true;
    (async () => {
      try {
        const { data, error } = await supabase.functions.invoke("google-reviews");
        if (!active) return;
        if (error) throw error;
        setData(data as Payload);
      } catch (err) {
        if (!active) return;
        setError(err instanceof Error ? err.message : "Erro ao carregar avaliações");
      } finally {
        if (active) setLoading(false);
      }
    })();
    return () => {
      active = false;
    };
  }, []);

  return (
    <section className="container py-24">
      <Reveal className="text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-muted-foreground">
          Avaliações verificadas no Google
        </p>
        <h2 className="mt-4 font-display text-3xl font-bold md:text-5xl">
          O que dizem nossos <span className="text-gradient">clientes.</span>
        </h2>
        {data && data.rating !== null && (
          <div className="mt-6 inline-flex items-center gap-3 rounded-full border border-border/70 bg-card/60 px-5 py-2 backdrop-blur">
            <span className="font-display text-2xl font-bold">
              {data.rating.toFixed(1)}
            </span>
            <Stars rating={data.rating} />
            <span className="text-xs text-muted-foreground">
              {data.userRatingCount} avaliações
            </span>
          </div>
        )}
      </Reveal>

      {loading && (
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {Array.from({ length: 4 }).map((_, i) => (
            <div
              key={i}
              className="h-48 animate-pulse rounded-2xl border border-border/70 bg-card/40"
            />
          ))}
        </div>
      )}

      {error && !loading && (
        <p className="mt-12 text-center text-sm text-muted-foreground">
          Não foi possível carregar as avaliações no momento.
        </p>
      )}

      {data && data.reviews.length > 0 && (
        <Reveal className="mt-12">
          <Carousel
            opts={{
              align: "start",
              dragFree: true,
            }}
            className="w-full"
          >
            <CarouselContent>
              {data.reviews.slice(0, 8).map((r, i) => (
                <CarouselItem key={`${r.author}-${i}`} className="basis-full md:basis-1/2 lg:basis-1/3 xl:basis-1/4">
                  <figure className="hover-lift flex h-full flex-col rounded-2xl border border-border/70 bg-card/60 p-6 backdrop-blur">
                    <div className="flex items-center justify-between">
                      <Quote className="h-6 w-6 text-primary/70" />
                      <Stars rating={r.rating} />
                    </div>
                    <blockquote className="mt-3 line-clamp-6 flex-1 text-sm text-muted-foreground">
                      {r.text || "—"}
                    </blockquote>
                    <figcaption className="mt-4 flex items-center gap-3 border-t border-border/60 pt-4">
                      {r.photo ? (
                        <img
                          src={r.photo}
                          alt={r.author}
                          loading="lazy"
                          className="h-9 w-9 rounded-full border border-border/60 object-cover"
                        />
                      ) : (
                        <div className="grid h-9 w-9 place-items-center rounded-full border border-border/60 bg-background-soft text-xs font-bold">
                          {r.author.slice(0, 1)}
                        </div>
                      )}
                      <div className="text-left">
                        <p className="text-xs font-semibold uppercase tracking-widest text-foreground">
                          {r.author}
                        </p>
                      </div>
                    </figcaption>
                  </figure>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-2 h-10 w-10 border-border/70 bg-background/80 backdrop-blur hover:bg-background" />
            <CarouselNext className="right-2 h-10 w-10 border-border/70 bg-background/80 backdrop-blur hover:bg-background" />
          </Carousel>
        </Reveal>
      )}

      {data?.googleMapsUri && (
        <div className="mt-10 text-center">
          <a
            href={data.googleMapsUri}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-accent"
          >
            Ver todas as avaliações no Google →
          </a>
        </div>
      )}
    </section>
  );
};