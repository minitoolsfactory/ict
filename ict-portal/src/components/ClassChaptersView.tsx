"use client";

import Link from "next/link";
import Image from "next/image";
import { t } from "@/lib/i18n";
import { Footer, TopBar, useLanguage } from "@/components/Shell";
import { ArrowRight, BookOpen, Lightbulb, BarChart3 } from "lucide-react";

interface ClassChaptersViewProps {
  classId: string;
  classLabel: { en: string; hi: string };
  cover: string;
  chapters: { id: string; title: { en: string; hi: string } }[];
  facts: number;
}

export default function ClassChaptersView({ classId, classLabel, cover, chapters, facts }: Readonly<ClassChaptersViewProps>) {
  const { lang, setLang } = useLanguage();

  return (
    <div className="min-h-screen bg-ict-50/60 dark:bg-ict-900 flex flex-col">
      <TopBar lang={lang} onToggleLang={() => setLang(lang === "en" ? "hi" : "en")} />

      <main className="flex-1">
        {/* Banner */}
        <section className="hero-glow">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 flex flex-col sm:flex-row items-center gap-6">
            <div className="relative w-28 h-36 shrink-0 rounded-2xl overflow-hidden shadow-lg ring-4 ring-white dark:ring-ict-800">
              <Image src={cover} alt={`${classLabel[lang]} textbook`} fill sizes="112px" className="object-cover object-top" />
            </div>
            <div className="text-center sm:text-left">
              <p className="text-xs font-bold uppercase tracking-wider text-ict-500 dark:text-ict-400">
                {t("home.badge", lang)}
              </p>
              <h1 className="text-3xl sm:text-4xl font-extrabold text-ict-900 dark:text-white hi-font">
                {classLabel[lang]}
              </h1>
              <div className="mt-2 flex flex-wrap justify-center sm:justify-start gap-2 text-xs font-semibold">
                <span className="px-3 py-1 rounded-full bg-white dark:bg-ict-800/60 border border-ict-200 dark:border-ict-700 text-ict-700 dark:text-ict-200 hi-font">
                  {chapters.length} {t("home.chapters", lang)}
                </span>
                <span className="px-3 py-1 rounded-full bg-white dark:bg-ict-800/60 border border-ict-200 dark:border-ict-700 text-ict-700 dark:text-ict-200 hi-font">
                  {t("home.quiz", lang)}: {chapters.length * 5}
                </span>
                <span className="px-3 py-1 rounded-full bg-accent-500/10 border border-accent-500/30 text-accent-600 dark:text-accent-400 hi-font">
                  <Lightbulb className="inline w-3 h-3 mr-1 -mt-0.5" />
                  {facts} {t("home.stats.facts", lang)}
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Chapter cards */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {chapters.map((ch, i) => (
              <Link key={ch.id} href={`/class${classId.slice(-1)}/${ch.id}`} className="group block">
                <article className="lift h-full bg-white dark:bg-white/5 border border-ict-200 dark:border-ict-800 rounded-3xl overflow-hidden shadow-sm hover:border-ict-400 dark:hover:border-ict-500">
                  <div className="relative h-36 bg-ict-100 dark:bg-ict-800">
                    <Image
                      src={`/books/class${classId.slice(-1)}/${ch.id}.png`}
                      alt={`Chapter ${i + 1}: ${ch.title[lang]}`}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover object-top opacity-80"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/95 via-slate-950/45 to-slate-950/15" />
                    <span className="absolute top-3 left-3 w-9 h-9 rounded-xl brand-gradient text-white font-extrabold flex items-center justify-center shadow">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <div className="absolute bottom-3 left-4 right-4 flex items-end justify-between gap-2">
                      <div className="min-w-0">
                        <p className="mb-1 text-[10px] font-bold uppercase tracking-[0.12em] text-white/80">
                          {lang === "en" ? "Chapter" : "अध्याय"}
                        </p>
                        <h3 className="font-extrabold text-white text-base leading-snug hi-font drop-shadow-sm">
                          {ch.title[lang]}
                        </h3>
                      </div>
                    </div>
                  </div>
                  <div className="px-5 py-4 flex items-center justify-between">
                    <div className="flex gap-2 text-[11px] font-semibold text-ict-600 dark:text-ict-400 hi-font">
                      <span className="inline-flex items-center gap-1 bg-ict-50 dark:bg-ict-800/50 border border-ict-100 dark:border-ict-700 rounded-full px-2.5 py-1">
                        <BookOpen className="w-3 h-3" /> {t("home.notes", lang)}
                      </span>
                      <span className="inline-flex items-center gap-1 bg-ict-50 dark:bg-ict-800/50 border border-ict-100 dark:border-ict-700 rounded-full px-2.5 py-1">
                        <BarChart3 className="w-3 h-3" /> {t("home.quiz", lang)}
                      </span>
                      <span className="inline-flex items-center gap-1 bg-accent-500/10 border border-accent-500/25 text-accent-600 dark:text-accent-400 rounded-full px-2.5 py-1">
                        <Lightbulb className="w-3 h-3" />
                      </span>
                    </div>
                    <ArrowRight className="w-4 h-4 text-ict-400 group-hover:translate-x-1 group-hover:text-ict-600 dark:group-hover:text-ict-300 transition-all" />
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </section>
      </main>

      <Footer lang={lang} />
    </div>
  );
}
