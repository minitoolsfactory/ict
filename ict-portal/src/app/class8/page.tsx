import ClassChaptersView from "@/components/ClassChaptersView";
import ch1 from "@/data/class8/ch1.json";
import ch2 from "@/data/class8/ch2.json";
import ch3 from "@/data/class8/ch3.json";
import ch4 from "@/data/class8/ch4.json";
import ch5 from "@/data/class8/ch5.json";

const chapters = [ch1, ch2, ch3, ch4, ch5] as unknown as {
  id: string;
  title: { en: string; hi: string };
  didYouKnow?: unknown[];
}[];

const facts = chapters.reduce((sum, ch) => sum + ((ch.didYouKnow as unknown[] | undefined)?.length ?? 0), 0);

export default function Class8Page() {
  return (
    <ClassChaptersView
      classId="class8"
      classLabel={{ en: "Class 8", hi: "कक्षा 8" }}
      cover="/books/class8/cover.png"
      chapters={chapters}
      facts={facts}
    />
  );
}
