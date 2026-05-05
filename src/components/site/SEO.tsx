import { Helmet } from "react-helmet-async";

export const SITE_URL = "https://rochamarketing.com.br";
export const DEFAULT_OG_IMAGE =
  "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/b884d66c-2878-49ea-b12f-19b86fb1579f/id-preview-d1aa3a55--977bced3-acc6-4eb9-abf7-c6c7348d2588.lovable.app-1777440349454.png";

type SEOProps = {
  title: string;
  description: string;
  path?: string;
  image?: string;
  type?: "website" | "article";
  keywords?: string;
  noindex?: boolean;
  structuredData?: Record<string, unknown> | Array<Record<string, unknown>>;
};

export const SEO = ({
  title,
  description,
  path = "/",
  image = DEFAULT_OG_IMAGE,
  type = "website",
  keywords,
  noindex = false,
  structuredData,
}: SEOProps) => {
  const canonical = `${SITE_URL}${path}`;
  const robots = noindex ? "noindex, nofollow" : "index, follow";
  const schemas = Array.isArray(structuredData)
    ? structuredData
    : structuredData
      ? [structuredData]
      : [];

  return (
    <Helmet prioritizeSeoTags>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="robots" content={robots} />
      {keywords ? <meta name="keywords" content={keywords} /> : null}
      <link rel="canonical" href={canonical} />

      <meta property="og:locale" content="pt_BR" />
      <meta property="og:type" content={type} />
      <meta property="og:site_name" content="Rocha Marketing" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonical} />
      <meta property="og:image" content={image} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {schemas.map((schema, index) => (
        <script key={index} type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      ))}
    </Helmet>
  );
};

export const SEOGlobal = () => {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Rocha Marketing",
    url: SITE_URL,
    logo: `${SITE_URL}/logo.png`,
    sameAs: [
      "https://www.instagram.com",
      "https://www.linkedin.com",
      "https://www.facebook.com",
    ],
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: "+55-41-9679-6939",
        contactType: "customer service",
        areaServed: "BR",
        availableLanguage: "pt-BR",
      },
    ],
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Rocha Marketing",
    url: SITE_URL,
    inLanguage: "pt-BR",
  };

  return (
    <Helmet>
      <meta name="author" content="Rocha Marketing" />
      <meta name="theme-color" content="#070515" />
      <script type="application/ld+json">
        {JSON.stringify(organizationSchema)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(websiteSchema)}
      </script>
    </Helmet>
  );
};
