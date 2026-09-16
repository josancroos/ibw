import Link from "next/link";
import { siblingSlugs } from "@/data/nav";

export default function PrevNext({ slug }: { slug: string }) {
  const { prev, next } = siblingSlugs(slug);
  if (!prev && !next) return null;
  return (
    <div className="docs-prevnext">
      {prev ? (
        <Link href={`/${prev.slug}`} className="docs-prevnext-link">
          <span className="docs-prevnext-dir">← Zurück</span>
          <span>{prev.label}</span>
        </Link>
      ) : (
        <span />
      )}
      {next ? (
        <Link href={`/${next.slug}`} className="docs-prevnext-link docs-prevnext-next">
          <span className="docs-prevnext-dir">Weiter →</span>
          <span>{next.label}</span>
        </Link>
      ) : (
        <span />
      )}
    </div>
  );
}
