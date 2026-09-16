import Link from "next/link";

export default function Topbar() {
  return (
    <header className="docs-topbar">
      <Link href="/" className="docs-topbar-brand">
        <span className="docs-topbar-brand-strong">ibW</span>
        <span className="docs-topbar-brand-sep">/</span>
        <span>Kampagnen-Brandguide</span>
      </Link>
      <span className="docs-topbar-version">Version 1.0 — 2026</span>
    </header>
  );
}
