export type NavItem = { slug: string; label: string };
export type NavGroup = { group: string; items: NavItem[] };

export const NAV: NavGroup[] = [
  { group: "Start", items: [{ slug: "", label: "Übersicht" }] },
  {
    group: "Grundlagen",
    items: [
      { slug: "ausgangslage", label: "Ausgangslage" },
      { slug: "leitidee", label: "Leitidee" },
      { slug: "headline-prinzip", label: "Headline-Prinzip" },
    ],
  },
  {
    group: "Farben & Schriften",
    items: [
      { slug: "farben", label: "Farben" },
      { slug: "schriften", label: "Schriften" },
      { slug: "textstufen", label: "Textstufen" },
    ],
  },
  {
    group: "Logo & Icons",
    items: [
      { slug: "logo", label: "Logo" },
      { slug: "icons", label: "Icons" },
    ],
  },
  { group: "Gestaltungsraster", items: [{ slug: "gestaltungsraster", label: "Gestaltungsraster" }] },
  {
    group: "Anwendungen",
    items: [
      { slug: "plakate", label: "Plakate" },
      { slug: "digital", label: "Digital" },
      { slug: "bildwelt", label: "Bildwelt" },
      { slug: "testimonial-clips", label: "Testimonial-Clips" },
    ],
  },
  { group: "Regeln", items: [{ slug: "dos-donts", label: "Do's & Don'ts" }] },
  { group: "Kontakt", items: [{ slug: "kontakt", label: "Kontakt" }] },
];

export const ALL_ITEMS: NavItem[] = NAV.flatMap((g) => g.items);

export function siblingSlugs(slug: string): { prev: NavItem | null; next: NavItem | null } {
  const i = ALL_ITEMS.findIndex((it) => it.slug === slug);
  return {
    prev: i > 0 ? ALL_ITEMS[i - 1] : null,
    next: i >= 0 && i < ALL_ITEMS.length - 1 ? ALL_ITEMS[i + 1] : null,
  };
}
