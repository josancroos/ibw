import { CHAPTERS } from "@/data/chapters";
import PrevNext from "@/components/docs/PrevNext";

export default function Home() {
  const chapter = CHAPTERS[""];
  return (
    <>
      {chapter.render()}
      <PrevNext slug="" />
    </>
  );
}
