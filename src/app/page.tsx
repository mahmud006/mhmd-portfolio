import AppChrome from "@/components/AppChrome";
import Hero from "@/components/Hero";
import Chapter from "@/components/Chapter";
import Closing from "@/components/Closing";
import { chapters } from "@/lib/chapters";

export default function Home() {
  return (
    <>
      <AppChrome />
      <main className="flex-1">
        <Hero />
        {chapters.map((chapter, i) => {
          const upcoming = chapters[i + 1];
          const next = upcoming
            ? { id: upcoming.id, label: upcoming.title, index: upcoming.index }
            : { id: "now", label: "Now", index: "06" };
          return <Chapter key={chapter.id} chapter={chapter} next={next} />;
        })}
        <Closing />
      </main>
    </>
  );
}
