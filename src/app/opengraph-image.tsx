import { ImageResponse } from "next/og";
import { personalInfo } from "@/data/social";

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
          justifyContent: "center",
          gap: 24,
          padding: "80px",
          background: "#FAFAF7",
          backgroundImage:
            "radial-gradient(circle at 15% 15%, rgba(82,118,101,0.16), transparent 45%), radial-gradient(circle at 85% 30%, rgba(63,95,82,0.14), transparent 50%)",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: 88,
            height: 88,
            borderRadius: 18,
            background: "linear-gradient(135deg, #527665 0%, #3F5F52 100%)",
            color: "#FFFFFF",
            fontSize: 34,
            fontWeight: 700,
          }}
        >
          {personalInfo.initials}
        </div>
        <div style={{ display: "flex", fontSize: 64, fontWeight: 700, color: "#1F3442" }}>
          {personalInfo.name}
        </div>
        <div style={{ display: "flex", fontSize: 30, fontWeight: 500, color: "#53636B" }}>
          {personalInfo.title} · {personalInfo.subtitle}
        </div>
      </div>
    ),
    { ...size }
  );
}
