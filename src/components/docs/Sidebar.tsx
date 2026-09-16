"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useMemo, useState } from "react";
import { NAV } from "@/data/nav";

export default function Sidebar() {
  const pathname = usePathname();
  const activeSlug = pathname === "/" ? "" : pathname.replace(/^\//, "");
  const [query, setQuery] = useState("");

  const groups = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return NAV;
    return NAV.map((g) => ({
      ...g,
      items: g.items.filter((it) => it.label.toLowerCase().includes(q)),
    })).filter((g) => g.items.length > 0);
  }, [query]);

  return (
    <nav className="docs-sidebar">
      <input
        type="search"
        placeholder="Suchen…"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="docs-sidebar-search"
        aria-label="Kapitel durchsuchen"
      />
      {groups.map((g) => (
        <div key={g.group} className="docs-sidebar-group">
          <div className="docs-sidebar-group-label">{g.group}</div>
          {g.items.map((item) => (
            <Link
              key={item.slug}
              href={`/${item.slug}`}
              className={
                "docs-sidebar-link" + (item.slug === activeSlug ? " docs-sidebar-link-active" : "")
              }
            >
              {item.label}
            </Link>
          ))}
        </div>
      ))}
      {groups.length === 0 && <div className="docs-sidebar-empty">Keine Treffer.</div>}
    </nav>
  );
}
