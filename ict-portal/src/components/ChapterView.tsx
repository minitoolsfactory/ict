"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { t } from "@/lib/i18n";
import { cn } from "@/lib/utils";
import NotesView from "@/components/NotesView";
import QuizView from "@/components/QuizView";
import { Footer, TopBar, useLanguage } from "@/components/Shell";
import type { Chapter } from "@/lib/chapter";
import { ArrowLeft, BookOpen, Lightbulb, BarChart3 } from "lucide-react";

interface ChapterViewProps {
  chapter: Chapter;
  classId: string;
  backHref: string;
}

export default function ChapterView({ chapter, classId, backHref }: ChapterViewProps) {
  const { lang, setLang } = useLanguage();
  const [tab, setTab] = useState<"notes" | "quiz">("notes");
  const chNum = parseInt(chapter.id.replace("ch", ""), 10);

  return (
    <div className="min-h-screen bg-ict-50/60 dark:bg-ict-900 flex flex-col">
      <TopBar lang={lang} onToggleLang={() => setLang(lang === "en" ? "hi" : "en")} />

      <main className="flex-1">
        {/* Chapter banner */}
        <section className="relative">
          <div className="relative h-44 sm:h-56 bg-ict-800">
            <Image
              src={`/books/${classId}/${chapter.id}.png`}
              alt={`${chapter.title[lang]} - page from the textbook`}
              fill
              priority
              sizes="100vw"
              className="object-cover object-top opacity-90"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ict-900 via-ict-900/70 to-ict-900/20" />
          </div>
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 -mt-20 relative z-10 pb-4">
            <div className="bg-white dark:bg-white/5 border border-ict-200 dark:border-ict-800 rounded-3xl p-6 sm:p-8 shadow-lg">
              <Link
                href={backHref}
                className="inline-flex items-center gap-1.5 text-ict-600 dark:text-ict-400 text-sm font-semibold hover:gap-2.5 transition-all hi-font"
              >
                <ArrowLeft className="w-4 h-4" />
                {t("chapter.back", lang)}
              </Link>

              <div className="mt-3 flex flex-wrap items-start justify-between gap-4">
                <div className="flex items-start gap-4">
                  <span className="w-12 h-12 rounded-2xl brand-gradient text-white font-extrabold text-lg flex items-center justify-center shadow shrink-0">
                    {chNum}
                  </span>
                  <div>
                    <h1 className="text-2xl sm:text-3xl font-extrabold text-ict-900 dark:text-white hi-font leading-tight">
                      {chapter.title[lang]}
                    </h1>
                    <div className="mt-2 flex flex-wrap gap-2 text-[11px] font-semibold">
                      <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-ict-50 dark:bg-ict-800/50 border border-ict-100 dark:border-ict-700 text-ict-700 dark:text-ict-200">
                        <BookOpen className="w-3 h-3" /> {chapter.pages} • {t("chapter.source", lang)}
                      </span>
                      <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-accent-500/10 border border-accent-500/25 text-accent-600 dark:text-accent-400">
                        <Lightbulb className="w-3 h-3" /> {chapter.didYouKnow?.length ?? 0} {t("home.stats.facts", lang)}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-5 flex gap-2">
                <button
                  onClick={() => setTab("notes")}
                  className={cn(
                    "flex items-center gap-1.5 px-5 py-2.5 rounded-xl text-sm font-bold transition-colors hi-font",
                    tab === "notes"
                      ? "brand-gradient text-white shadow"
                      : "bg-ict-100 text-ict-700 hover:bg-ict-200 dark:bg-ict-800 dark:text-ict-200"
                  )}
                >
                  <BookOpen className="w-4 h-4" /> {t("chapter.notes", lang)}
                </button>
                <button
                  onClick={() => setTab("quiz")}
                  className={cn(
                    "flex items-center gap-1.5 px-5 py-2.5 rounded-xl text-sm font-bold transition-colors hi-font",
                    tab === "quiz"
                      ? "brand-gradient text-white shadow"
                      : "bg-ict-100 text-ict-700 hover:bg-ict-200 dark:bg-ict-800 dark:text-ict-200"
                  )}
                >
                  <BarChart3 className="w-4 h-4" /> {t("chapter.quiz", lang)}
                </button>
              </div>
            </div>
          </div>
        </section>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 w-full">
          {tab === "notes" ? (
            <NotesView chapter={chapter} lang={lang} />
          ) : (
            <QuizView chapter={chapter} lang={lang} />
          )}
        </div>
      </main>

      <Footer lang={lang} />
    </div>
  );
}
