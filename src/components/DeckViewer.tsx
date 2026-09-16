"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { SLIDES } from "@/components/slides";

const DESIGN_W = 1920;
const DESIGN_H = 1080;

export default function DeckViewer() {
  const [index, setIndex] = useState(0);
  const [scale, setScale] = useState(1);
  const stageRef = useRef<HTMLDivElement>(null);
  const total = SLIDES.length;

  const fit = useCallback(() => {
    const stage = stageRef.current;
    if (!stage) return;
    const { clientWidth, clientHeight } = stage;
    setScale(Math.min(clientWidth / DESIGN_W, clientHeight / DESIGN_H));
  }, []);

  useEffect(() => {
    fit();
    window.addEventListener("resize", fit);
    return () => window.removeEventListener("resize", fit);
  }, [fit]);

  const go = useCallback(
    (next: number) => setIndex((i) => Math.min(total - 1, Math.max(0, next))),
    [total]
  );
  const advance = useCallback((delta: number) => go(index + delta), [go, index]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (["ArrowRight", "ArrowDown", "PageDown", " "].includes(e.key)) {
        e.preventDefault();
        advance(1);
      } else if (["ArrowLeft", "ArrowUp", "PageUp"].includes(e.key)) {
        e.preventDefault();
        advance(-1);
      } else if (e.key === "Home") {
        go(0);
      } else if (e.key === "End") {
        go(total - 1);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [advance, go, total]);

  const Active = SLIDES[index].Component;

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        background: "#000",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
      }}
      ref={stageRef}
    >
      <div
        className="dc-canvas"
        style={{
          width: DESIGN_W,
          height: DESIGN_H,
          flexShrink: 0,
          transform: `scale(${scale})`,
          transformOrigin: "center center",
          boxShadow: "0 0 0 1.5px rgba(255,255,255,0.12)",
          background: "#fff",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <Active />
      </div>

      <div
        role="toolbar"
        aria-label="Deck-Steuerung"
        style={{
          position: "fixed",
          left: "50%",
          bottom: 22,
          transform: "translateX(-50%)",
          display: "flex",
          alignItems: "center",
          gap: 4,
          padding: 4,
          background: "#000",
          color: "#fff",
          borderRadius: 999,
          fontSize: 12,
          fontFamily: "ui-monospace, Menlo, monospace",
          zIndex: 1000,
        }}
      >
        <button
          type="button"
          onClick={() => advance(-1)}
          disabled={index === 0}
          aria-label="Vorherige Folie"
          style={navBtnStyle}
        >
          ←
        </button>
        <span style={{ padding: "0 10px", minWidth: 48, textAlign: "center", fontVariantNumeric: "tabular-nums" }}>
          {index + 1}
          <span style={{ color: "rgba(255,255,255,0.45)", margin: "0 3px" }}>/</span>
          <span style={{ color: "rgba(255,255,255,0.55)" }}>{total}</span>
        </span>
        <button
          type="button"
          onClick={() => advance(1)}
          disabled={index === total - 1}
          aria-label="Nächste Folie"
          style={navBtnStyle}
        >
          →
        </button>
        <span style={{ width: 1, height: 14, background: "rgba(255,255,255,0.18)", margin: "0 6px" }} />
        <span style={{ padding: "0 10px 0 0", color: "rgba(255,255,255,0.72)", whiteSpace: "nowrap" }}>
          {SLIDES[index].label}
        </span>
      </div>
    </div>
  );
}

const navBtnStyle: React.CSSProperties = {
  appearance: "none",
  background: "transparent",
  border: 0,
  margin: 0,
  padding: 0,
  color: "rgba(255,255,255,0.85)",
  font: "inherit",
  cursor: "pointer",
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  height: 28,
  minWidth: 28,
  borderRadius: 999,
};
