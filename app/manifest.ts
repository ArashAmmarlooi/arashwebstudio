import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Arash Web Studio",
    short_name: "Arash Studio",
    description:
      "Independent Canadian web design and development studio serving businesses in Canada and worldwide.",
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
