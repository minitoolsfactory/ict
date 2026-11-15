"use client";

import { useState } from "react";
import { t, type Language } from "@/lib/i18n";
import { BookOpen, Check, ChevronDown, Clock3, KeyRound, Lightbulb, ListChecks } from "lucide-react";
import { cn } from "@/lib/utils";
import { lessonGuides, type LessonGuide, type LocalizedText } from "@/data/lesson-guides";
import LessonArtwork from "@/components/LessonArtwork";

type Block =
  | { type: "definition"; en: string; hi: string }
  | { type: "points"; items: LocalizedText[] }
  | { type: "sub"; title: LocalizedText; items: LocalizedText[] }
  | { type: "num"; title?: LocalizedText; items: { t: LocalizedText; d: LocalizedText }[] }
  | { type: "table"; head: LocalizedText[]; rows: LocalizedText[][] }
  | { type: "remember"; en: string; hi: string };

interface NoteSection {
  id: string;
  title: LocalizedText;
  content?: LocalizedText;
  blocks?: Block[];
}

interface NoteChapter {
  id: string;
  class: number;
  pages: string;
  title: LocalizedText;
  overview: LocalizedText;
  keyTerms: { en: string; hi: string }[];
  sections: NoteSection[];
  didYouKnow?: LocalizedText[];
  quickRevision?: LocalizedText[];
  conclusion?: LocalizedText;
}

interface NotesViewProps {
  chapter: NoteChapter;
  lang: Language;
}

export default function NotesView({ chapter, lang }: Readonly<NotesViewProps>) {
  const facts = chapter.didYouKnow ?? [];
  const guide = lessonGuides[`${chapter.class}-${chapter.id}`];

  return (
    <div className="space-y-9 pb-10">
      <header className="grid items-center gap-5 md:grid-cols-[1fr_0.9fr]">
        <section className="rounded-2xl border border-ict-200 bg-white p-6 shadow-sm dark:border-ict-800 dark:bg-white/5">
          <div className="mb-4 flex flex-wrap items-center gap-3">
            <span className="flex size-10 items-center justify-center rounded-xl brand-gradient text-white shadow-sm">
              <BookOpen className="size-5" aria-hidden="true" />
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-full bg-ict-50 px-3 py-1.5 text-xs font-bold text-ict-700 dark:bg-ict-800/60 dark:text-ict-100">
              <Clock3 className="size-3.5" aria-hidden="true" />
              {lang === "en" ? `${Math.max(4, chapter.sections.length * 2)} min read` : `${Math.max(4, chapter.sections.length * 2)} मिनट`}
            </span>
          </div>
          <p className="mb-2 text-xs font-bold uppercase tracking-[0.12em] text-accent-600 dark:text-accent-400">
            {lang === "en" ? "The field guide" : "अध्ययन मार्गदर्शिका"}
          </p>
          <h2 className="text-xl font-extrabold leading-snug text-ict-950 dark:text-white sm:text-2xl">
            {lang === "en" ? "Understand it. Try it. Remember it." : "समझें। करके देखें। याद रखें।"}
          </h2>
          <p className="mt-4 text-base leading-7 text-ict-700 dark:text-ict-200 hi-font">
            {guide?.lead[lang] ?? chapter.overview[lang]}
          </p>
          <p className="mt-4 text-xs font-semibold text-ict-500 dark:text-ict-300">
            {lang === "en" ? `Textbook reference: pages ${chapter.pages}` : `पुस्तक संदर्भ: पृष्ठ ${chapter.pages}`}
          </p>
        </section>

        {guide && (
          <LessonArtwork
            theme={guide.theme}
            labels={guide.visualLabels}
            title={chapter.title[lang]}
            lang={lang}
          />
        )}
      </header>

      <section className="rounded-2xl border border-ict-200 bg-white p-5 shadow-sm dark:border-ict-800 dark:bg-white/5" aria-labelledby="learning-path-title">
        <div className="mb-3 flex items-center gap-2">
          <ListChecks className="size-5 text-accent-600 dark:text-accent-400" aria-hidden="true" />
          <h3 id="learning-path-title" className="text-sm font-bold text-ict-900 dark:text-white">
            {lang === "en" ? "In this lesson" : "इस पाठ में"}
          </h3>
        </div>
        <nav aria-label={lang === "en" ? "Lesson sections" : "पाठ के भाग"} className="flex flex-wrap gap-2">
          {chapter.sections.map((section, index) => (
            <a
              key={section.id}
              href={`#section-${section.id}`}
              className="inline-flex min-h-10 items-center gap-2 rounded-lg border border-ict-200 bg-ict-50/60 px-3 py-2 text-sm font-semibold text-ict-800 transition-colors hover:border-accent-500 hover:text-accent-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-600 dark:border-ict-700 dark:bg-ict-800/40 dark:text-ict-100"
            >
              <span className="font-mono text-xs text-accent-600 dark:text-accent-400">0{index + 1}</span>
              {section.title[lang]}
            </a>
          ))}
        </nav>
      </section>

      <LessonSectionList sections={chapter.sections} facts={facts} guide={guide} lang={lang} />

      {guide && <PracticeChallenge guide={guide} lang={lang} />}

      {(chapter.quickRevision?.length || chapter.conclusion) && (
        <section className="rounded-2xl border border-ict-200 bg-white p-6 shadow-sm dark:border-ict-800 dark:bg-white/5" aria-labelledby="quickrev-title">
          <div className="mb-4 flex items-center gap-2">
            <ListChecks className="size-5 text-emerald-600 dark:text-emerald-400" aria-hidden="true" />
            <h3 id="quickrev-title" className="text-lg font-extrabold text-ict-950 dark:text-white hi-font">
              {lang === "en" ? "Quick Revision" : "तुरंत दोहराव"}
            </h3>
          </div>
          <ul className="grid gap-2.5 sm:grid-cols-2">
            {(chapter.quickRevision ?? []).map((item, i) => {
              const sep = item[lang].indexOf(":");
              const term = sep > 0 ? item[lang].slice(0, sep) : item[lang];
              const rest = sep > 0 ? item[lang].slice(sep + 1).trim() : "";
              return (
                <li key={i} className="rounded-lg border border-ict-100 bg-ict-50/60 px-3.5 py-2.5 dark:border-ict-700 dark:bg-ict-800/30">
                  <span className="text-sm font-bold text-ict-900 dark:text-white hi-font">{term}</span>
                  {rest && <span className="text-sm text-ict-600 dark:text-ict-300 hi-font">: {rest}</span>}
                </li>
              );
            })}
          </ul>
          {chapter.conclusion && (
            <p className="mt-5 rounded-xl border-l-4 border-emerald-500 bg-emerald-50/70 px-4 py-3 text-sm leading-6 text-ict-800 dark:border-emerald-400 dark:bg-emerald-500/10 dark:text-ict-100 hi-font">
              <strong>{lang === "en" ? "Conclusion: " : "निष्कर्ष: "}</strong>
              {chapter.conclusion[lang]}
            </p>
          )}
        </section>
      )}

      <div className="grid gap-8 md:grid-cols-[0.85fr_1.15fr]">
        {guide && (
          <section className="border-t-4 border-emerald-500 pt-4" aria-labelledby="recap-title">
            <p className="text-xs font-extrabold uppercase tracking-[0.12em] text-emerald-700 dark:text-emerald-300">
              {lang === "en" ? "Keep in mind" : "ध्यान रखें"}
            </p>
            <h3 id="recap-title" className="mt-2 text-xl font-extrabold text-ict-950 dark:text-white">
              {lang === "en" ? "Quick recap" : "झटपट दोहराएँ"}
            </h3>
            <ul className="mt-4 space-y-3">
              {guide.recap.map((item) => (
                <li key={item.en} className="flex gap-3 text-sm leading-6 text-ict-700 dark:text-ict-200">
                  <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-emerald-800">
                    <Check className="size-3" aria-hidden="true" />
                  </span>
                  <span className="hi-font">{item[lang]}</span>
                </li>
              ))}
            </ul>
          </section>
        )}

        <section aria-labelledby="glossary-title">
          <div className="mb-3 flex items-center gap-2">
            <KeyRound className="size-4 text-accent-600 dark:text-accent-400" aria-hidden="true" />
            <h3 id="glossary-title" className="text-sm font-extrabold uppercase tracking-wider text-ict-700 dark:text-ict-200 hi-font">
              {t("chapter.keyTerms", lang)}
            </h3>
          </div>
          <div className="grid gap-2 sm:grid-cols-2">
            {chapter.keyTerms.map((term) => (
              <div key={term.en} className="rounded-lg border border-ict-200 bg-white px-3.5 py-3 dark:border-ict-800 dark:bg-white/5">
                <p className="text-sm font-bold text-ict-800 dark:text-ict-100">{term.en}</p>
                <p className="mt-1 text-xs text-ict-600 dark:text-ict-300 hi-font">{term.hi}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}

function LessonSectionList({
  sections,
  facts,
  guide,
  lang,
}: Readonly<{
  sections: NoteSection[];
  facts: LocalizedText[];
  guide?: LessonGuide;
  lang: Language;
}>) {
  return (
    <article className="space-y-4">
      {sections.map((section, index) => (
        <div key={section.id}>
          <section id={`section-${section.id}`} className="scroll-mt-24 rounded-2xl border border-ict-200 bg-white p-5 shadow-sm dark:border-ict-800 dark:bg-white/5 sm:p-6">
            <div className="mb-4 flex items-start gap-3 border-b border-ict-100 pb-4 dark:border-ict-800">
              <span className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-ict-100 font-mono text-sm font-bold text-ict-700 dark:bg-ict-800 dark:text-ict-100">
                0{index + 1}
              </span>
              <h3 className="pt-1 text-lg font-extrabold leading-snug text-ict-950 dark:text-white sm:text-xl hi-font">
                {section.title[lang]}
              </h3>
            </div>
            {section.blocks ? (
              <div className="space-y-5">
                {section.blocks.map((block, bi) => (
                  <BlockView key={bi} block={block} lang={lang} />
                ))}
              </div>
            ) : (
              <p className="max-w-3xl text-base leading-7 text-ict-700 dark:text-ict-200 hi-font">
                {section.content?.[lang]}
              </p>
            )}
            {guide?.examples[index] && (
              <aside className="mt-5 border-l-4 border-accent-500 bg-accent-500/10 px-4 py-4 dark:bg-accent-500/15">
                <p className="mb-1 flex items-center gap-2 text-xs font-extrabold uppercase tracking-wide text-accent-700 dark:text-accent-300">
                  <Lightbulb className="size-4" aria-hidden="true" />
                  {lang === "en" ? "See it in practice" : "उदाहरण से समझें"}
                </p>
                <p className="text-sm leading-6 text-ict-800 dark:text-ict-100 hi-font">
                  {guide.examples[index][lang]}
                </p>
              </aside>
            )}
          </section>
          {index < facts.length && <FactCard fact={facts[index]} lang={lang} />}
        </div>
      ))}
    </article>
  );
}

function PracticeChallenge({ guide, lang }: Readonly<{ guide: LessonGuide; lang: Language }>) {
  const [practiceOpen, setPracticeOpen] = useState(false);
  const buttonLabels = {
    en: { show: "Show a sample response", hide: "Hide a sample response" },
    hi: { show: "उदाहरण देखें", hide: "उदाहरण छिपाएँ" },
  };
  const buttonLabel = buttonLabels[lang][practiceOpen ? "hide" : "show"];

  return (
    <section className="rounded-2xl border border-ict-200 bg-white p-6 shadow-sm dark:border-ict-800 dark:bg-white/5" aria-labelledby="practice-title">
      <div className="flex items-start gap-4">
        <span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-accent-500/15 text-accent-700 dark:text-accent-300">
          <Check className="size-5" aria-hidden="true" />
        </span>
        <div className="min-w-0">
          <p className="text-xs font-extrabold uppercase tracking-[0.12em] text-accent-700 dark:text-accent-300">
            {lang === "en" ? "Your turn" : "अब आपकी बारी"}
          </p>
          <h3 id="practice-title" className="mt-1 text-xl font-extrabold text-ict-950 dark:text-white">
            {lang === "en" ? "Try a quick challenge" : "छोटी चुनौती हल करें"}
          </h3>
          <p className="mt-3 text-base leading-7 text-ict-700 dark:text-ict-200 hi-font">
            {guide.practice.prompt[lang]}
          </p>
          <button
            type="button"
            aria-expanded={practiceOpen}
            onClick={() => setPracticeOpen((open) => !open)}
            className="mt-4 inline-flex min-h-11 items-center gap-2 rounded-lg border border-ict-300 px-4 py-2 text-sm font-bold text-ict-800 transition-colors hover:border-accent-600 hover:text-accent-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-600 dark:border-ict-700 dark:text-ict-100"
          >
            {buttonLabel}
            <ChevronDown className={`size-4 transition-transform ${practiceOpen ? "rotate-180" : ""}`} aria-hidden="true" />
          </button>
          {practiceOpen && (
            <p className="mt-4 border-l-4 border-emerald-500 bg-emerald-500/10 px-4 py-3 text-sm leading-6 text-ict-800 dark:text-ict-100 hi-font">
              {guide.practice.answer[lang]}
            </p>
          )}
        </div>
      </div>
    </section>
  );
}


function BlockView({ block, lang }: Readonly<{ block: Block; lang: Language }>) {
  switch (block.type) {
    case "definition":
      return (
        <div className="rounded-xl border-l-4 border-ict-600 bg-ict-50/70 px-4 py-3 dark:border-ict-400 dark:bg-ict-800/30">
          <p className="mb-1 text-[11px] font-extrabold uppercase tracking-wider text-ict-600 dark:text-ict-300">
            {lang === "en" ? "Definition" : "परिभाषा"}
          </p>
          <p className="text-sm leading-6 text-ict-800 dark:text-ict-100 hi-font">
            <strong>{lang === "en" ? "Definition: " : "परिभाषा: "}</strong>
            {block[lang]}
          </p>
        </div>
      );
    case "points":
      return (
        <ul className="space-y-1.5">
          {block.items.map((item, i) => (
            <li key={i} className="flex gap-2.5 text-sm leading-6 text-ict-700 dark:text-ict-200">
              <span className="mt-2 size-1.5 shrink-0 rounded-full bg-accent-500" aria-hidden="true" />
              <span className="hi-font">{item[lang]}</span>
            </li>
          ))}
        </ul>
      );
    case "sub":
      return (
        <div>
          <p className="mb-2 text-sm font-extrabold text-ict-900 dark:text-white hi-font">
            {block.title[lang]}
          </p>
          <ul className="space-y-1.5">
            {block.items.map((item, i) => (
              <li key={i} className="flex gap-2.5 text-sm leading-6 text-ict-700 dark:text-ict-200">
                <span className="mt-2 size-1.5 shrink-0 rounded-full bg-ict-400" aria-hidden="true" />
                <span className="hi-font">{item[lang]}</span>
              </li>
            ))}
          </ul>
        </div>
      );
    case "num":
      return (
        <div>
          {block.title && (
            <p className="mb-2 text-sm font-extrabold text-ict-900 dark:text-white hi-font">
              {block.title[lang]}
            </p>
          )}
          <ol className="space-y-2">
            {block.items.map((item, i) => (
              <li key={i} className="flex gap-3">
                <span className="flex size-6 shrink-0 items-center justify-center rounded-md bg-ict-100 text-xs font-bold text-ict-700 dark:bg-ict-800 dark:text-ict-100">
                  {i + 1}
                </span>
                <p className="text-sm leading-6 text-ict-700 dark:text-ict-200 hi-font">
                  <strong className="text-ict-900 dark:text-white">{item.t[lang]}</strong>
                  {": "}
                  {item.d[lang]}
                </p>
              </li>
            ))}
          </ol>
        </div>
      );
    case "table":
      return (
        <div className="overflow-x-auto rounded-xl border border-ict-200 dark:border-ict-700">
          <table className="w-full min-w-[480px] border-collapse text-sm">
            <thead>
              <tr className="brand-gradient text-left text-white">
                {block.head.map((h, i) => (
                  <th key={i} className="px-4 py-2.5 font-bold hi-font">
                    {h[lang]}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {block.rows.map((row, ri) => (
                <tr
                  key={ri}
                  className={ri % 2 === 0 ? "bg-white dark:bg-white/5" : "bg-ict-50/70 dark:bg-ict-800/30"}
                >
                  {row.map((cell, ci) => (
                    <td
                      key={ci}
                      className={cn(
                        "border-t border-ict-100 px-4 py-2.5 align-top leading-6 text-ict-700 dark:border-ict-800 dark:text-ict-200 hi-font",
                        ci === 0 && "font-bold text-ict-900 dark:text-white"
                      )}
                    >
                      {cell[lang]}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
    case "remember":
      return (
        <aside className="rounded-xl border border-accent-500/30 bg-accent-500/10 px-4 py-3">
          <p className="mb-1 flex items-center gap-1.5 text-[11px] font-extrabold uppercase tracking-wider text-accent-700 dark:text-accent-300">
            <Lightbulb className="size-3.5" aria-hidden="true" />
            {lang === "en" ? "Remember!" : "याद रखें!"}
          </p>
          <p className="text-sm leading-6 text-ict-800 dark:text-ict-100 hi-font">{block[lang]}</p>
        </aside>
      );
  }
}

function FactCard({ fact, lang }: Readonly<{ fact: LocalizedText; lang: Language }>) {
  return (
    <aside className="mt-3 flex items-start gap-4 bg-gradient-to-r from-accent-500/10 to-accent-400/5 border border-accent-500/25 rounded-2xl p-5">
      <span className="w-10 h-10 rounded-xl bg-accent-500 text-white flex items-center justify-center shadow shrink-0 animate-floaty">
        <Lightbulb className="w-5 h-5" />
      </span>
      <div>
        <h4 className="font-extrabold text-accent-600 dark:text-accent-400 text-sm uppercase tracking-wide hi-font">
          {t("facts.title", lang)}
        </h4>
        <p className="mt-1 text-sm text-ict-800 dark:text-ict-100 leading-relaxed hi-font">
          {fact[lang]}
        </p>
      </div>
    </aside>
  );
}
