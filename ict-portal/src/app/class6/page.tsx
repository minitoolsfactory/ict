import ClassChaptersView from "@/components/ClassChaptersView";
import ch1 from "@/data/class6/ch1.json";
import ch2 from "@/data/class6/ch2.json";
import ch3 from "@/data/class6/ch3.json";
import ch4 from "@/data/class6/ch4.json";
import ch5 from "@/data/class6/ch5.json";
import ch6 from "@/data/class6/ch6.json";

const chapters = [ch1, ch2, ch3, ch4, ch5, ch6] as unknown as {
  id: string;
  title: { en: string; hi: string };
  didYouKnow?: unknown[];
}[];

const facts = chapters.reduce((sum, ch) => sum + ((ch.didYouKnow as unknown[] | undefined)?.length ?? 0), 0);

export default function Class6Page() {
  return (
    <ClassChaptersView
      classId="class6"
      classLabel={{ en: "Class 6", hi: "कक्षा 6" }}
      cover="/books/class6/cover.png"
      chapters={chapters}
      facts={facts}
    />
  );
}
