import UTPaperGenerator from "@/components/UTPaperGenerator";

import c6ch1 from "@/data/class6/ch1.json";
import c6ch2 from "@/data/class6/ch2.json";
import c6ch3 from "@/data/class6/ch3.json";
import c6ch4 from "@/data/class6/ch4.json";
import c6ch5 from "@/data/class6/ch5.json";
import c6ch6 from "@/data/class6/ch6.json";
import c7ch1 from "@/data/class7/ch1.json";
import c7ch2 from "@/data/class7/ch2.json";
import c7ch3 from "@/data/class7/ch3.json";
import c7ch4 from "@/data/class7/ch4.json";
import c7ch5 from "@/data/class7/ch5.json";
import c8ch1 from "@/data/class8/ch1.json";
import c8ch2 from "@/data/class8/ch2.json";
import c8ch3 from "@/data/class8/ch3.json";
import c8ch4 from "@/data/class8/ch4.json";
import c8ch5 from "@/data/class8/ch5.json";

interface ChapterData {
  id: string;
  title: { en: string; hi: string };
  quiz: unknown[]; didYouKnow?: unknown[];
}

const raw: Array<[string, ChapterData]> = [
  ["class6", c6ch1], ["class6", c6ch2], ["class6", c6ch3], ["class6", c6ch4], ["class6", c6ch5], ["class6", c6ch6],
  ["class7", c7ch1], ["class7", c7ch2], ["class7", c7ch3], ["class7", c7ch4], ["class7", c7ch5],
  ["class8", c8ch1], ["class8", c8ch2], ["class8", c8ch3], ["class8", c8ch4], ["class8", c8ch5],
];

const chapters = raw.map(([cls, ch]) => ({
  ...ch,
  id: `${cls}-${ch.id}`,
  quiz: ch.quiz ?? [],
})) as unknown as Parameters<typeof UTPaperGenerator>[0]["chapters"];

export default function UTPaperPage() {
  return (
    <div className="min-h-screen bg-ict-50/60 dark:bg-ict-900">
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <UTPaperGenerator chapters={chapters} lang="en" />
      </main>
    </div>
  );
}
