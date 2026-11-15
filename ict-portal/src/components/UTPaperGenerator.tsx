"use client";

import { useState } from "react";
import { t, type Language } from "@/lib/i18n";
import { cn, shuffleArray } from "@/lib/utils";
import { FileText, Printer } from "lucide-react";
import {
  DEFAULT_BLUEPRINT,
  QUESTION_KINDS,
  buildQuestionBank,
  preparePaperQuestion,
  type ChapterSource,
  type PaperQuestion,
  type QuestionBlueprint,
  type QuestionKind,
} from "@/lib/question-generator";

interface UTPaperGeneratorProps {
  chapters: ChapterSource[];
  lang: Language;
}

const CLASS_LABELS: Record<string, string> = {
  "6": "Class 6 / कक्षा 6",
  "7": "Class 7 / कक्षा 7",
  "8": "Class 8 / कक्षा 8",
};

export default function UTPaperGenerator({ chapters, lang }: Readonly<UTPaperGeneratorProps>) {
  const [selectedClass, setSelectedClass] = useState<string>("6");
  const [selectedChapterIds, setSelectedChapterIds] = useState<string[]>([]);
  const [blueprint, setBlueprint] = useState<QuestionBlueprint>(() => ({
    mcq: { ...DEFAULT_BLUEPRINT.mcq },
    trueFalse: { ...DEFAULT_BLUEPRINT.trueFalse },
    match: { ...DEFAULT_BLUEPRINT.match },
    short: { ...DEFAULT_BLUEPRINT.short },
    long: { ...DEFAULT_BLUEPRINT.long },
  }));
  const [generated, setGenerated] = useState(false);
  const [paperQuestions, setPaperQuestions] = useState<PaperQuestion[]>([]);
  const [paperChapters, setPaperChapters] = useState<ChapterSource[]>([]);
  const [paperMarks, setPaperMarks] = useState(0);

  const classPrefix = `class${selectedClass}-`;
  const availableChapters = chapters.filter((c) => c.id.startsWith(classPrefix));
  const selectedChapters = availableChapters.filter((chapter) => selectedChapterIds.includes(chapter.id));
  const questionBank = buildQuestionBank(selectedChapters);
  const bankCount = QUESTION_KINDS.reduce((total, kind) => total + questionBank[kind.id].length, 0);
  const totalQuestions = QUESTION_KINDS.reduce((total, kind) => {
    const setting = blueprint[kind.id];
    return total + (setting.enabled ? Math.min(setting.count, questionBank[kind.id].length) : 0);
  }, 0);
  const totalMarks = QUESTION_KINDS.reduce((total, kind) => {
    const setting = blueprint[kind.id];
    const count = setting.enabled ? Math.min(setting.count, questionBank[kind.id].length) : 0;
    return total + count * setting.marksEach;
  }, 0);

  const updateSelectedChapters = (nextIds: string[]) => {
    setSelectedChapterIds(nextIds);
  };

  const updateSetting = (kind: QuestionKind, changes: Partial<QuestionBlueprint[QuestionKind]>) => {
    setBlueprint((current) => ({
      ...current,
      [kind]: { ...current[kind], ...changes },
    }));
  };

  const handleGenerate = () => {
    if (totalQuestions === 0) return;
    const generatedQuestions = QUESTION_KINDS.flatMap((kind) => {
      const setting = blueprint[kind.id];
      if (!setting.enabled) return [];
      const questions = shuffleArray([...questionBank[kind.id]])
        .slice(0, Math.min(setting.count, questionBank[kind.id].length))
        .map((question) => ({
          ...preparePaperQuestion(question),
          marks: setting.marksEach,
        }));
      return questions;
    });
    setPaperQuestions(generatedQuestions.map((question, index) => ({ ...question, number: index + 1 })));
    setPaperChapters(selectedChapters);
    setPaperMarks(generatedQuestions.reduce((total, question) => total + question.marks, 0));
    setGenerated(true);
  };

  const handlePrint = () => window.print();

  if (!generated) {
    return (
      <div className="bg-white dark:bg-white/5 border border-ict-200 dark:border-ict-800 rounded-3xl p-8 max-w-3xl mx-auto shadow-sm">
        <div className="flex items-center gap-3 mb-6">
          <span className="w-11 h-11 rounded-xl brand-gradient flex items-center justify-center shadow">
            <FileText className="w-5 h-5 text-white" />
          </span>
          <div>
            <h2 className="text-xl font-bold text-ict-900 dark:text-white hi-font">
              {t("utpaper.title", lang)}
            </h2>
            <p className="text-sm text-ict-600 dark:text-ict-400 hi-font">{t("home.utpaperDesc", lang)}</p>
          </div>
        </div>

        <div className="space-y-5">
          {/* Class selection */}
          <div>
            <label className="block text-sm font-bold text-ict-800 dark:text-ict-100 mb-2 hi-font">
              {t("utpaper.selectClass", lang)}
            </label>
            <div className="flex gap-2">
              {Object.keys(CLASS_LABELS).map((c) => (
                <button
                  key={c}
                  onClick={() => { setSelectedClass(c); setSelectedChapterIds([]); }}
                  className={cn(
                    "px-5 py-2.5 rounded-xl text-sm font-bold transition-colors hi-font",
                    selectedClass === c
                      ? "brand-gradient text-white shadow"
                      : "bg-ict-100 text-ict-700 hover:bg-ict-200 dark:bg-ict-800 dark:text-ict-200"
                  )}
                >
                  {CLASS_LABELS[c]}
                </button>
              ))}
            </div>
          </div>

          {/* Chapter selection */}
          <div>
            <div className="mb-2 flex items-center justify-between gap-3">
              <label className="text-sm font-bold text-ict-800 dark:text-ict-100 hi-font">
                {t("utpaper.selectChapter", lang)}
              </label>
              <div className="flex gap-3 text-xs font-semibold">
                <button type="button" onClick={() => updateSelectedChapters(availableChapters.map((chapter) => chapter.id))} className="text-ict-600 hover:text-ict-800 dark:text-ict-300">
                  {lang === "en" ? "Select all" : "सभी चुनें"}
                </button>
                <button type="button" onClick={() => updateSelectedChapters([])} className="text-ict-600 hover:text-ict-800 dark:text-ict-300">
                  {lang === "en" ? "Clear" : "हटाएँ"}
                </button>
              </div>
            </div>
            <div className="grid max-h-64 gap-2 overflow-y-auto rounded-xl border border-ict-200 bg-white p-3 dark:border-ict-700 dark:bg-ict-900 sm:grid-cols-2">
              {availableChapters.map((c) => (
                <label key={c.id} htmlFor={`chapter-${c.id}`} className="flex cursor-pointer items-start gap-3 rounded-lg border border-ict-100 p-3 text-sm text-ict-800 hover:border-ict-300 dark:border-ict-800 dark:text-ict-100">
                  <input
                    id={`chapter-${c.id}`}
                    type="checkbox"
                    checked={selectedChapterIds.includes(c.id)}
                    onChange={(event) => {
                      const nextIds = event.target.checked
                        ? [...selectedChapterIds, c.id]
                        : selectedChapterIds.filter((id) => id !== c.id);
                      updateSelectedChapters(nextIds);
                    }}
                    className="mt-0.5 size-4 shrink-0 accent-indigo-600"
                  />
                  <span className="min-w-0 flex-1 hi-font">{c.title.en} / {c.title.hi}</span>
                  <span className="shrink-0 rounded-full bg-ict-100 px-2 py-0.5 text-xs font-bold text-ict-700 dark:bg-ict-800 dark:text-ict-200">{c.quiz.length}</span>
                </label>
              ))}
            </div>
            <p className="mt-2 text-xs text-ict-500 dark:text-ict-400 hi-font" aria-live="polite">
              {bankCount} {lang === "en" ? "question variations available from selected chapters" : "चुने अध्यायों से उपलब्ध प्रश्न-रूप"}
            </p>
          </div>

          <section aria-labelledby="blueprint-title" className="border-t border-ict-200 pt-5 dark:border-ict-800">
            <div className="mb-4 flex flex-wrap items-end justify-between gap-3">
              <div>
                <h3 id="blueprint-title" className="text-lg font-extrabold text-ict-900 dark:text-white">
                  {lang === "en" ? "Question paper blueprint" : "प्रश्न-पत्र रूपरेखा"}
                </h3>
                <p className="mt-1 text-xs text-ict-500 dark:text-ict-400 hi-font">
                  {lang === "en" ? "Choose question types, quantities and marks. The maximum marks update automatically." : "प्रश्न के प्रकार, संख्या और अंक चुनें। कुल अधिकतम अंक अपने-आप बदलेंगे।"}
                </p>
              </div>
              <div className="flex gap-5 rounded-xl bg-ict-50 px-4 py-3 dark:bg-ict-800/50">
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-wide text-ict-500">{lang === "en" ? "Questions" : "प्रश्न"}</p>
                  <p className="text-lg font-extrabold text-ict-900 dark:text-white">{totalQuestions}</p>
                </div>
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-wide text-ict-500">{lang === "en" ? "Max marks" : "अधिकतम अंक"}</p>
                  <p className="text-lg font-extrabold text-ict-900 dark:text-white">{totalMarks}</p>
                </div>
              </div>
            </div>

            <div className="space-y-3">
              {QUESTION_KINDS.map((kind) => {
                const setting = blueprint[kind.id];
                const available = questionBank[kind.id].length;
                const count = Math.min(setting.count, available);
                const countInputId = `count-${kind.id}`;
                const marksInputId = `marks-${kind.id}`;

                return (
                  <fieldset key={kind.id} className="rounded-xl border border-ict-200 p-4 dark:border-ict-700">
                    <div className="flex flex-wrap items-center justify-between gap-4">
                      <label htmlFor={`enable-${kind.id}`} className="flex min-w-0 items-center gap-3">
                        <input
                          id={`enable-${kind.id}`}
                          type="checkbox"
                          checked={setting.enabled}
                          onChange={(event) => updateSetting(kind.id, { enabled: event.target.checked })}
                          className="size-4 accent-indigo-600"
                        />
                        <span className="min-w-0">
                          <span className="block text-sm font-bold text-ict-900 dark:text-white">{kind[lang]}</span>
                          <span className="block text-xs text-ict-500 dark:text-ict-400">
                            {available} {lang === "en" ? "generated prompts available" : "प्रश्न-रूप उपलब्ध"}
                          </span>
                        </span>
                      </label>
                      <div className="flex gap-3">
                        <label htmlFor={countInputId} className="text-xs font-semibold text-ict-700 dark:text-ict-200">
                          {lang === "en" ? "Questions" : "प्रश्न"}
                          <input
                            id={countInputId}
                            type="number"
                            min={0}
                            max={Math.max(available, 0)}
                            step={1}
                            value={count}
                            disabled={!setting.enabled || available === 0}
                            onChange={(event) => {
                              const value = event.currentTarget.valueAsNumber;
                              if (Number.isFinite(value)) updateSetting(kind.id, { count: Math.min(available, Math.max(0, value)) });
                            }}
                            className="mt-1 block w-20 rounded-lg border border-ict-200 bg-white px-2 py-1.5 text-center text-ict-900 disabled:opacity-50 dark:border-ict-700 dark:bg-ict-900 dark:text-white"
                          />
                        </label>
                        <label htmlFor={marksInputId} className="text-xs font-semibold text-ict-700 dark:text-ict-200">
                          {lang === "en" ? "Marks each" : "प्रति प्रश्न अंक"}
                          <input
                            id={marksInputId}
                            type="number"
                            min={1}
                            step={1}
                            value={setting.marksEach}
                            disabled={!setting.enabled}
                            onChange={(event) => {
                              const value = event.currentTarget.valueAsNumber;
                              if (Number.isFinite(value)) updateSetting(kind.id, { marksEach: Math.max(1, value) });
                            }}
                            className="mt-1 block w-24 rounded-lg border border-ict-200 bg-white px-2 py-1.5 text-center text-ict-900 disabled:opacity-50 dark:border-ict-700 dark:bg-ict-900 dark:text-white"
                          />
                        </label>
                      </div>
                    </div>
                    <input
                      type="range"
                      min={0}
                      max={Math.max(available, 0)}
                      step={1}
                      value={count}
                      disabled={!setting.enabled || available === 0}
                      onChange={(event) => updateSetting(kind.id, { count: Number(event.target.value) })}
                      aria-label={`${kind.en} ${lang === "en" ? "question count" : "प्रश्न संख्या"}`}
                      className="mt-3 w-full accent-indigo-600 disabled:opacity-40"
                    />
                  </fieldset>
                );
              })}
            </div>
          </section>

          <button
            onClick={handleGenerate}
            disabled={totalQuestions === 0}
            className={cn(
              "w-full py-3.5 rounded-xl font-bold text-white transition-colors hi-font",
              totalQuestions > 0
                ? "brand-gradient shadow hover:opacity-95"
                : "bg-ict-200 dark:bg-ict-800 text-ict-400 cursor-not-allowed"
            )}
          >
            {t("utpaper.generate", lang)}
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto">
      <div className="no-print mb-4 flex gap-2">
        <button
          onClick={() => setGenerated(false)}
          className="px-4 py-2 rounded-xl bg-ict-100 dark:bg-ict-800 text-ict-700 dark:text-ict-200 text-sm font-bold hi-font"
        >
          ← {t("common.back", lang)}
        </button>
        <button
          onClick={handlePrint}
          className="px-4 py-2 rounded-xl brand-gradient text-white text-sm font-bold flex items-center gap-1.5 hi-font"
        >
          <Printer className="w-4 h-4" /> {t("utpaper.print", lang)}
        </button>
      </div>

      {/* Paper */}
      <div className="bg-white text-black rounded-2xl p-10 shadow print:shadow-none print:rounded-none">
        <div className="ut-paper-header">
          <div className="flex justify-between items-start">
            <div>
              <h2 className="text-2xl font-extrabold hi-font">
                Unit Test Paper
              </h2>
              <p className="text-sm mt-1">Class {selectedClass} • ICT • SCERT Delhi</p>
              <p className="mt-2 max-w-2xl text-xs leading-5">
                Chapters: {paperChapters.map((chapter) => `${chapter.title.en} / ${chapter.title.hi}`).join(" • ")}
              </p>
            </div>
            <div className="text-sm text-right">
              <p>{t("utpaper.marks", lang)}: {paperMarks}</p>
              <p>{lang === "en" ? "Questions" : "प्रश्न"}: {paperQuestions.length}</p>
              <p>{t("utpaper.time", lang)}: {paperQuestions.length * 2} min</p>
            </div>
          </div>
          <div className="mt-4 flex gap-6 text-sm">
            <span>{t("utpaper.name", lang)}: ____________________</span>
            <span>{t("utpaper.rollno", lang)}: __________</span>
            <span>{t("utpaper.date", lang)}: __________</span>
          </div>
        </div>

        <div className="mt-8 space-y-8">
          {QUESTION_KINDS.map((kind) => {
            const questions = paperQuestions.filter((question) => question.kind === kind.id);
            if (questions.length === 0) return null;
            return (
              <section key={kind.id}>
                <h3 className="mb-4 border-b border-black/20 pb-2 text-base font-extrabold uppercase tracking-wide">
                  {kind[lang]} <span className="font-normal">({questions.length})</span>
                </h3>
                <ol className="space-y-5">
                  {questions.map((question) => (
                    <PaperQuestionView key={question.id} question={question} lang={lang} />
                  ))}
                </ol>
              </section>
            );
          })}
        </div>

        {/* Answer key */}
        <div className="mt-10 pt-6 border-t-2 border-dashed border-black/40">
          <h3 className="font-extrabold hi-font mb-2">
            Answer Key / उत्तर कुंजी
          </h3>
          <div className="space-y-4 text-sm">
            {QUESTION_KINDS.map((kind) => {
              const questions = paperQuestions.filter((question) => question.kind === kind.id);
              if (questions.length === 0) return null;
              return (
                <section key={kind.id}>
                  <h4 className="font-bold">{kind[lang]}</h4>
                  <ol className="mt-1 list-decimal space-y-1 pl-5">
                    {questions.map((question) => (
                      <li key={question.id} className="hi-font">
                        <span className="font-semibold">Q{question.number}:</span> {answerFor(question, lang)}
                      </li>
                    ))}
                  </ol>
                </section>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

function PaperQuestionView({ question, lang }: Readonly<{ question: PaperQuestion; lang: Language }>) {
  return (
    <li className="ut-question">
      <p className="font-semibold hi-font">
        {question.number}. {question.prompt[lang]} <span className="font-normal">({question.marks} {lang === "en" ? "marks" : "अंक"})</span>
      </p>
      {question.kind === "mcq" && question.options && (
        <ul className="ut-option mt-2 space-y-1 text-sm">
          {question.options.map((option, index) => (
            <li key={`${question.id}-option-${index}`} className="hi-font">{String.fromCodePoint(65 + index)}) {option[lang]}</li>
          ))}
        </ul>
      )}
      {question.kind === "trueFalse" && (
        <p className="mt-2 text-sm">{lang === "en" ? "True / False" : "सही / गलत"}</p>
      )}
      {question.kind === "match" && question.matchPairs && question.matchOptions && (
        <div className="mt-3 grid grid-cols-2 gap-5 text-sm">
          <div>
            <p className="mb-1 font-bold">{lang === "en" ? "Column A" : "स्तंभ A"}</p>
            <ol className="space-y-1">
              {question.matchPairs.map((pair, index) => <li key={`${question.id}-left-${index}`}>{index + 1}. {pair.left[lang]}</li>)}
            </ol>
          </div>
          <div>
            <p className="mb-1 font-bold">{lang === "en" ? "Column B" : "स्तंभ B"}</p>
            <ol className="space-y-1">
              {question.matchOptions.map((option, index) => <li key={`${question.id}-right-${index}`}>{String.fromCodePoint(65 + index)}. {option[lang]}</li>)}
            </ol>
          </div>
        </div>
      )}
      {(question.kind === "short" || question.kind === "long") && (
        <div className={`mt-4 space-y-5 ${question.kind === "long" ? "py-4" : "py-2"}`} aria-hidden="true">
          {Array.from({ length: question.kind === "long" ? 5 : 2 }, (_, index) => <div key={`${question.id}-line-${index}`} className="border-b border-black/20" />)}
        </div>
      )}
    </li>
  );
}

function answerFor(question: PaperQuestion, lang: Language): string {
  if (question.kind === "mcq" && question.options && question.correctOption !== undefined) {
    return `${String.fromCodePoint(65 + question.correctOption)}. ${question.options[question.correctOption][lang]} - ${question.suggestedAnswer[lang]}`;
  }
  if (question.kind === "match") return question.matchKey ?? question.suggestedAnswer[lang];
  return question.suggestedAnswer[lang];
}
