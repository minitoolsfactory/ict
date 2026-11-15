import { notFound } from "next/navigation";
import type { Chapter } from "@/lib/chapter";
import ChapterView from "@/components/ChapterView";

import ch1 from "@/data/class8/ch1.json";
import ch2 from "@/data/class8/ch2.json";
import ch3 from "@/data/class8/ch3.json";
import ch4 from "@/data/class8/ch4.json";
import ch5 from "@/data/class8/ch5.json";

const chapterMap: Record<string, Chapter> = {ch1: ch1 as unknown as Chapter, ch2: ch2 as unknown as Chapter, ch3: ch3 as unknown as Chapter, ch4: ch4 as unknown as Chapter, ch5: ch5 as unknown as Chapter};

export default async function ChapterPage({
  params,
}: {
  params: Promise<{ chapter: string }>;
}) {
  const { chapter: chapterId } = await params;
  const chapter = chapterMap[chapterId];

  if (!chapter) {
    notFound();
  }

  return <ChapterView chapter={chapter} classId="class8" backHref="/class8" />;
}
