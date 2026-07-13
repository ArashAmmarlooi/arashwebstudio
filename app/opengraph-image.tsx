import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Arash Web Studio — responsive web design, SEO and development";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px 82px",
          color: "#f4f1e8",
          background:
            "radial-gradient(circle at 82% 18%, #4f837b 0, #284a45 20%, transparent 42%), linear-gradient(135deg, #131a17 0%, #1c2823 100%)",
        }}
      >
        <div
          style={{
            display: "flex",
            fontSize: 30,
            fontWeight: 700,
            letterSpacing: "-0.02em",
          }}
        >
          <span style={{ color: "#9bc4b9" }}>Arash</span>&nbsp;Web Studio
        </div>
        <div style={{ display: "flex", flexDirection: "column", maxWidth: 900 }}>
          <div
            style={{
              display: "flex",
              fontSize: 70,
              lineHeight: 1.05,
              fontWeight: 700,
              letterSpacing: "-0.045em",
            }}
          >
            Websites built for business growth worldwide.
          </div>
          <div
            style={{
              display: "flex",
              marginTop: 28,
              color: "#c8d6d0",
              fontSize: 27,
            }}
          >
            Web design · SEO · E-commerce · Apps
          </div>
        </div>
      </div>
    ),
    size,
  );
}
