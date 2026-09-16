import { Fragment, type CSSProperties, type ReactNode } from "react";

const YELLOW = "#FFDC00";
const BRAND_FONT = "'Nexa Bold','Archivo Black',Helvetica,sans-serif";
const MONO_FONT = "ui-monospace,Menlo,monospace";

export function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <div
      style={{
        fontFamily: MONO_FONT,
        fontSize: 13,
        letterSpacing: "0.1em",
        color: "#8a8a8a",
        marginBottom: 12,
      }}
    >
      {children}
    </div>
  );
}

export function H1({ children }: { children: ReactNode }) {
  return (
    <h1
      style={{
        fontFamily: "'Archivo',Helvetica,sans-serif",
        fontWeight: 800,
        fontSize: "clamp(32px, 4vw, 44px)",
        lineHeight: 1.08,
        letterSpacing: "-0.01em",
        color: "#141414",
        margin: "0 0 28px",
      }}
    >
      {children}
    </h1>
  );
}

export function Lead({ children }: { children: ReactNode }) {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: 40,
        fontSize: 17,
        lineHeight: 1.6,
        color: "#3a3a3a",
        marginBottom: 48,
      }}
      className="docs-lead"
    >
      {children}
    </div>
  );
}

export function Grid({
  columns = 2,
  children,
  style,
}: {
  columns?: number;
  children: ReactNode;
  style?: CSSProperties;
}) {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: `repeat(${columns}, 1fr)`,
        gap: 16,
        ...style,
      }}
      className="docs-grid"
    >
      {children}
    </div>
  );
}

export function Tile({
  bg,
  color,
  children,
  minHeight = 220,
  style,
}: {
  bg: string;
  color: string;
  children: ReactNode;
  minHeight?: number;
  style?: CSSProperties;
}) {
  return (
    <div
      style={{
        background: bg,
        color,
        borderRadius: 10,
        padding: 32,
        minHeight,
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        gap: 16,
        ...style,
      }}
    >
      {children}
    </div>
  );
}

export function TileEyebrow({ children, color = "inherit" }: { children: ReactNode; color?: string }) {
  return <span style={{ fontFamily: MONO_FONT, fontSize: 14, color }}>{children}</span>;
}

export function TileTitle({ children, size = 30 }: { children: ReactNode; size?: number }) {
  return (
    <span
      style={{
        fontFamily: BRAND_FONT,
        fontSize: size,
        lineHeight: 1.02,
        textTransform: "uppercase",
      }}
    >
      {children}
    </span>
  );
}

export function TileBody({ children }: { children: ReactNode }) {
  return <span style={{ fontSize: 16, lineHeight: 1.4, fontWeight: 500 }}>{children}</span>;
}

export function ColorSwatch({
  name,
  bg,
  color,
  border,
  specs,
}: {
  name: string;
  bg: string;
  color: string;
  border?: string;
  specs: [string, string][];
}) {
  return (
    <div
      style={{
        background: bg,
        color,
        border: border ? `1px solid ${border}` : undefined,
        borderRadius: 10,
        padding: 28,
        display: "flex",
        flexDirection: "column",
        gap: 24,
        minHeight: 200,
      }}
    >
      <span style={{ fontFamily: BRAND_FONT, fontSize: 30, textTransform: "uppercase" }}>{name}</span>
      <div style={{ display: "grid", gridTemplateColumns: "auto 1fr", gap: "6px 20px", fontFamily: MONO_FONT, fontSize: 14 }}>
        {specs.map(([k, v]) => (
          <Fragment key={k}>
            <span style={{ opacity: 0.7 }}>{k}</span>
            <span>{v}</span>
          </Fragment>
        ))}
      </div>
    </div>
  );
}

export function TypeSpecimen({
  label,
  name,
  sample,
  weight,
}: {
  label: string;
  name: string;
  sample: string;
  weight: number;
}) {
  return (
    <div
      style={{
        background: "#141414",
        color: "#fff",
        borderRadius: 10,
        padding: 28,
        display: "flex",
        flexDirection: "column",
        gap: 16,
      }}
    >
      <span style={{ fontFamily: MONO_FONT, fontSize: 13, color: YELLOW }}>{label}</span>
      <span style={{ fontWeight: weight, fontSize: 34, lineHeight: 1.1 }}>{name}</span>
      <span style={{ fontWeight: weight, fontSize: 16, lineHeight: 1.4, color: "rgba(255,255,255,0.75)" }}>{sample}</span>
    </div>
  );
}

export function DashList({ items }: { items: ReactNode[] }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
      {items.map((item, i) => (
        <div key={i} style={{ display: "flex", gap: 14 }}>
          <span style={{ color: "#c9a800", fontSize: 16 }}>—</span>
          <span style={{ fontSize: 16, lineHeight: 1.5, color: "#3a3a3a" }}>{item}</span>
        </div>
      ))}
    </div>
  );
}

export function SignList({ sign, items, color }: { sign: string; items: ReactNode[]; color?: string }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
      {items.map((item, i) => (
        <div key={i} style={{ display: "flex", gap: 14 }}>
          <span style={{ color: color ?? "inherit", fontSize: 16, fontWeight: 700 }}>{sign}</span>
          <span style={{ fontSize: 16, lineHeight: 1.5 }}>{item}</span>
        </div>
      ))}
    </div>
  );
}

export function SpecTable({ rows }: { rows: [string, string][] }) {
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      {rows.map(([k, v]) => (
        <div
          key={k}
          style={{
            display: "flex",
            gap: 24,
            padding: "16px 0",
            borderTop: "1px solid #e5e2d8",
            fontSize: 15,
          }}
        >
          <span style={{ fontFamily: MONO_FONT, color: "#8a8a8a", width: 140, flexShrink: 0 }}>{k}</span>
          <span style={{ color: "#3a3a3a" }}>{v}</span>
        </div>
      ))}
    </div>
  );
}

export function Prose({ children }: { children: ReactNode }) {
  return <div style={{ maxWidth: 920 }}>{children}</div>;
}
