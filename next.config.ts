import type { NextConfig } from "next";

const regionRedirects = [
  { source: "/webdesign-saarbruecken", destination: "/webdesign/saarbruecken" },
  { source: "/webdesign-saarlouis", destination: "/webdesign/saarlouis" },
  { source: "/webdesigner-saarlouis", destination: "/webdesign/saarlouis" },
  { source: "/webdesign-voelklingen", destination: "/webdesign/voelklingen" },
  { source: "/webdesigner-voelklingen", destination: "/webdesign/voelklingen" },
  { source: "/webdesign-merzig", destination: "/webdesign/merzig" },
  { source: "/webdesigner-merzig", destination: "/webdesign/merzig" },
  { source: "/webdesign-neunkirchen", destination: "/webdesign/neunkirchen" },
  { source: "/webdesigner-neunkirchen", destination: "/webdesign/neunkirchen" },
  { source: "/webdesign-homburg", destination: "/webdesign/homburg" },
  { source: "/webdesigner-homburg", destination: "/webdesign/homburg" },
  { source: "/webdesign-st-ingbert", destination: "/webdesign/st-ingbert" },
  { source: "/webdesigner-dillingen", destination: "/webdesign/dillingen" },
];

const topicRedirects = [
  { source: "/website-fuer-handwerker-saarland", destination: "/leistungen/handwerker" },
  { source: "/website-fuer-restaurant-saarland", destination: "/leistungen/restaurant" },
  { source: "/website-fuer-steuerberater-saarland", destination: "/leistungen/steuerberater" },
  { source: "/webdesigner-guenstig-saarland", destination: "/leistungen/guenstig" },
  { source: "/website-festpreis-saarland", destination: "/leistungen/festpreis" },
  { source: "/website-in-14-tagen-saarland", destination: "/leistungen/in-14-tagen" },
];

const clusterRedirects = [
  { source: "/werbeagentur-saarland", destination: "/marketingagentur-saarland" },
  { source: "/werbe-agentur-saarland", destination: "/marketingagentur-saarland" },
  { source: "/marketing-agentur-saarland", destination: "/marketingagentur-saarland" },
  { source: "/digitalagentur-saarland", destination: "/marketingagentur-saarland" },
  { source: "/kreativagentur-saarland", destination: "/marketingagentur-saarland" },
  { source: "/branding-saarland", destination: "/branding-agentur-saarland" },
  { source: "/markenagentur-saarland", destination: "/branding-agentur-saarland" },
  { source: "/corporate-design-saarland", destination: "/branding-agentur-saarland" },
  { source: "/geo-agentur", destination: "/geo" },
  { source: "/generative-engine-optimization", destination: "/geo" },
];

const nextConfig: NextConfig = {
  compress: true,
  images: {
    formats: ["image/avif", "image/webp"],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    minimumCacheTTL: 2592000,
  },
  async headers() {
    return [
      {
        source: "/:all*(svg|jpg|jpeg|png|webp|avif|ico|woff2)",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
    ];
  },
  async redirects() {
    return [...regionRedirects, ...topicRedirects, ...clusterRedirects].map((r) => ({
      ...r,
      permanent: true,
    }));
  },
};

export default nextConfig;
