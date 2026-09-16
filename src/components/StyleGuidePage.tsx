"use client";

import { useCallback, useEffect, useState } from "react";
import { SLIDES } from "@/components/slides";

const DESIGN_W = 1920;
const DESIGN_H = 1080;

function slugify(label: string): string {
  return label
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

export default function StyleGuidePage() {
  const [scale, setScale] = useState(1);

  const fit = useCallback(() => {
    setScale(Math.min(1, window.innerWidth / DESIGN_W));
  }, []);

  useEffect(() => {
    fit();
    window.addEventListener("resize", fit);
    return () => window.removeEventListener("resize", fit);
  }, [fit]);

  const totalHeight = SLIDES.length * DESIGN_H * scale;

  return (
    <div style={{ background: "#000" }}>
      <nav style={navStyle}>
        <span style={brandStyle}>ibW — Kampagnen-Brandguide</span>
        <div style={linksWrapStyle}>
          {SLIDES.map((s) => {
            const slug = slugify(s.label);
            return (
              <a
                key={s.label}
                href={`#${slug}`}
                className="sg-nav-link"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById(slug)?.scrollIntoView({ behavior: "smooth", block: "start" });
                  history.replaceState(null, "", `#${slug}`);
                }}
              >
                {s.label}
              </a>
            );
          })}
        </div>
      </nav>

      <div style={{ position: "relative", width: "100%", height: totalHeight }}>
        <div
          className="dc-canvas-stack"
          style={{
            width: DESIGN_W,
            transform: `scale(${scale})`,
            transformOrigin: "top center",
            position: "absolute",
            top: 0,
            left: "50%",
            marginLeft: -(DESIGN_W / 2),
          }}
        >
          {SLIDES.map(({ label, Component }) => (
            <div
              key={label}
              id={slugify(label)}
              style={{ width: DESIGN_W, height: DESIGN_H, position: "relative", overflow: "hidden" }}
            >
              <Component />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

const navStyle: React.CSSProperties = {
  position: "sticky",
  top: 0,
  zIndex: 50,
  display: "flex",
  alignItems: "center",
  gap: 28,
  padding: "16px 24px",
  background: "#000",
  borderBottom: "1px solid rgba(255,255,255,0.12)",
  fontFamily: "ui-monospace, Menlo, monospace",
  overflowX: "auto",
  whiteSpace: "nowrap",
};

const brandStyle: React.CSSProperties = {
  color: "#FFDC00",
  fontSize: 13,
  fontWeight: 600,
  letterSpacing: "0.08em",
  textTransform: "uppercase",
  flexShrink: 0,
};

const linksWrapStyle: React.CSSProperties = {
  display: "flex",
  gap: 18,
};
