import { ImageResponse } from "next/og";

export const alt =
  "Eligent AI: AI services, AI agents, automation and AI receptionist for business";
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
          padding: "80px",
          background: "#04040A",
          backgroundImage:
            "radial-gradient(ellipse 80% 50% at 50% -5%, rgba(34,197,94,0.18) 0%, rgba(77,110,255,0.10) 40%, transparent 70%), linear-gradient(rgba(77,110,255,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(77,110,255,0.06) 1px, transparent 1px)",
          backgroundSize: "100% 100%, 48px 48px, 48px 48px",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "14px",
            marginBottom: "40px",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "56px",
              height: "56px",
              borderRadius: "50%",
              background: "#0A1628",
              border: "2px solid rgba(94,234,212,0.4)",
              color: "#5EEAD4",
              fontSize: "26px",
              fontWeight: 800,
            }}
          >
            EA
          </div>
          <div style={{ display: "flex", fontSize: "34px", fontWeight: 700, color: "#F0F0FF" }}>
            Eligent{" "}
            <span style={{ color: "#22C55E", marginLeft: "10px" }}>AI</span>
          </div>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            fontSize: "64px",
            fontWeight: 800,
            lineHeight: 1.15,
            color: "#F0F0FF",
            letterSpacing: "-2px",
          }}
        >
          <span>AI Systems That Answer,</span>
          <span
            style={{
              backgroundImage: "linear-gradient(135deg, #22C55E 0%, #5080FF 55%, #A855F7 100%)",
              backgroundClip: "text",
              color: "transparent",
            }}
          >
            Automate & Analyze: 24/7
          </span>
        </div>

        <div
          style={{
            display: "flex",
            marginTop: "36px",
            fontSize: "26px",
            color: "#B4B4D0",
          }}
        >
          WhatsApp AI Receptionists · Customer Support AI · Custom AI Agents
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "24px",
            marginTop: "48px",
          }}
        >
          <div
            style={{
              display: "flex",
              padding: "10px 22px",
              borderRadius: "12px",
              background: "rgba(34,197,94,0.12)",
              border: "1px solid rgba(34,197,94,0.4)",
              color: "#22C55E",
              fontSize: "20px",
              fontWeight: 600,
            }}
          >
            Live Demos Inside
          </div>
          <div style={{ display: "flex", fontSize: "22px", color: "#74748C" }}>eligentai.com</div>
        </div>
      </div>
    ),
    { ...size }
  );
}
