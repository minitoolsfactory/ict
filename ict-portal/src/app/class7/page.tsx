import ClassChaptersView from "@/components/ClassChaptersView";
import ch1 from "@/data/class7/ch1.json";
import ch2 from "@/data/class7/ch2.json";
import ch3 from "@/data/class7/ch3.json";
import ch4 from "@/data/class7/ch4.json";
import ch5 from "@/data/class7/ch5.json";

const chapters = [ch1, ch2, ch3, ch4, ch5] as unknown as {
  id: string;
  title: { en: string; hi: string };
  didYouKnow?: unknown[];
}[];

const facts = chapters.reduce((sum, ch) => sum + ((ch.didYouKnow as unknown[] | undefined)?.length ?? 0), 0);

export default function Class7Page() {
  return (
    <ClassChaptersView
      classId="class7"
      classLabel={{ en: "Class 7", hi: "कक्षा 7" }}
      cover="/books/class7/cover.png"
      chapters={chapters}
      facts={facts}
    />
  );
}
