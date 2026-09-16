import { notFound } from "next/navigation";
import { CHAPTERS } from "@/data/chapters";
import PrevNext from "@/components/docs/PrevNext";

export function generateStaticParams() {
  return Object.keys(CHAPTERS)
    .filter((slug) => slug !== "")
    .map((slug) => ({ slug }));
}

export default async function ChapterPage(props: PageProps<"/[slug]">) {
  const { slug } = await props.params;
  const chapter = CHAPTERS[slug];
  if (!chapter) notFound();
  return (
    <>
      {chapter.render()}
      <PrevNext slug={slug} />
    </>
  );
}
