import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Arash Web Studio",
    short_name: "Arash Studio",
    description:
      "Responsive web design, SEO and development studio serving small and medium-sized businesses worldwide.",
    start_url: "/",
    display: "standalone",
    background_color: "#f4f1e8",
    theme_color: "#4f837b",
    icons: [
      {
        src: "/icon.svg",
        sizes: "any",
        type: "image/svg+xml",
      },
    ],
  };
}
