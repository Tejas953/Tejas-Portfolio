import { ImageResponse } from "next/og";

import { portfolio } from "@/data/portfolio";

export const alt = "Tejas Pingale — Full-Stack, AI & Forward Deployed Engineer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  const { profile } = portfolio;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 72,
          backgroundColor: "#0b1120",
          backgroundImage:
            "radial-gradient(circle at 15% 10%, #134e4a 0%, #0b1120 55%)",
          color: "#f1f5f9",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 12,
            fontSize: 26,
            color: "#4ade80",
          }}
        >
          <div
            style={{
              width: 14,
              height: 14,
              borderRadius: 999,
              background: "#4ade80",
            }}
          />
          {profile.availability.badge}
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 96, fontWeight: 700, letterSpacing: -2 }}>
            {profile.name}
          </div>
          <div style={{ fontSize: 38, marginTop: 12, color: "#5eead4" }}>
            {profile.roles.join(" · ")}
          </div>
          <div style={{ fontSize: 28, marginTop: 28, color: "#94a3b8", maxWidth: 900 }}>
            React/Next.js · Spring Boot · Headless CMS · Applied AI — Smart India
            Hackathon 2023, All-India Rank 1
          </div>
        </div>
      </div>
    ),
    size,
  );
}
