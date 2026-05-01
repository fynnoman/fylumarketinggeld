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

const nextConfig: NextConfig = {
  async redirects() {
    return [...regionRedirects, ...topicRedirects].map((r) => ({
      ...r,
      permanent: true,
    }));
  },
};

export default nextConfig;
