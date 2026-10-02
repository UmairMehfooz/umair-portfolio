import { ImageResponse } from "next/og";
import { site } from "@/content/site";

// The preview card shown when the site is shared on LinkedIn, WhatsApp, X, etc.
export const alt = `${site.name} | Portfolio`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px 80px",
          background: "#070707",
          backgroundImage: "radial-gradient(rgba(255,255,255,0.12) 1.5px, transparent 1.5px)",
          backgroundSize: "28px 28px",
          color: "#f4f4f4",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 14, fontSize: 26, color: "#9b9b9b" }}>
          <div style={{ width: 14, height: 14, borderRadius: 7, background: "#22c55e" }} />
          {site.availability}
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 96, fontWeight: 700, letterSpacing: -2 }}>{site.name}</div>
          <div style={{ marginTop: 12, fontSize: 40, color: "#cfcfcf" }}>{site.title}</div>
          <div style={{ marginTop: 28, fontSize: 28, color: "#9b9b9b" }}>
            Next.js · Supabase · Python · RAG · Machine Learning
          </div>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between", fontSize: 26, color: "#9b9b9b" }}>
          <span>{site.location}</span>
          <span>{site.url.replace("https://", "")}</span>
        </div>
      </div>
    ),
    size,
  );
}
