import type { CSSProperties } from "react";

function kebabToCamel(prop: string): string {
  return prop.replace(/-([a-z])/g, (_, c: string) => c.toUpperCase());
}

/** Parses a literal `"prop:value;prop:value"` string (as authored in the
 * source .dc.html) into a React style object, so slide markup can be
 * transcribed 1:1 from the design file without manual camelCasing. */
export function css(inline: string): CSSProperties {
  const out: Record<string, string> = {};
  for (const decl of inline.split(";")) {
    const i = decl.indexOf(":");
    if (i < 0) continue;
    const prop = decl.slice(0, i).trim();
    const value = decl.slice(i + 1).trim();
    if (!prop || !value) continue;
    out[prop.startsWith("--") ? prop : kebabToCamel(prop)] = value;
  }
  return out as CSSProperties;
}
