"use client";

import { useState, useCallback, useMemo, useRef, useEffect } from "react";
import { t, type Language } from "@/lib/i18n";
import { shuffleArray } from "@/lib/utils";
import type { Chapter, QuizQuestion } from "@/lib/chapter";
import { cn } from "@/lib/utils";
import {
  BarChart3,
  CheckCircle2,
  XCircle,
  ArrowRight,
  Clock,
  Timer,
  ListChecks,
  SkipForward,
} from "lucide-react";

interface QuizViewProps {
  chapter: Chapter;
  lang: Language;
}

const QUESTION_TIME = 20; // seconds allowed per question
const COUNT_CHOICES = [5, 10, 15, 20];

interface QuestionRecord {
  selected: number | null; // null = timed out / skipped
  timeTaken: number; // seconds used on this question
  timedOut: boolean;
}

export default function QuizView({ chapter, lang }: QuizViewProps) {
  const [stage, setStage] = useState<"intro" | "active" | "results">("intro");
  const [chosenCount, setChosenCount] = useState<number>(10);
  const [drawn, setDrawn] = useState<QuizQuestion[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [records, setRecords] = useState<Record<number, QuestionRecord>>({});
  const [submitted, setSubmitted] = useState(false);
  const [secondsLeft, setSecondsLeft] = useState(QUESTION_TIME);
  const startedAtRef = useRef<number>(0);

  const bank = chapter.quiz as QuizQuestion[];
  const currentQuestion = drawn[currentIndex];
  const record = records[currentIndex];
  const isAnswered = record !== undefined; // answered OR timed out
  const selectedAnswer = record?.selected ?? undefined;

  const score = useMemo(
    () =>
      Object.values(records).filter(
        (r, i) => drawn[i] && r.selected !== null && drawn[i].answer === r.selected
      ).length,
    [records, drawn]
  );

  /* ---------------- lifecycle helpers ---------------- */

  const startQuiz = useCallback(() => {
    const session = shuffleArray(bank).slice(0, Math.min(chosenCount, bank.length));
    setDrawn(session);
    setCurrentIndex(0);
    setRecords({});
    setSubmitted(false);
    setSecondsLeft(QUESTION_TIME);
    setStage("active");
  }, [bank, chosenCount]);

  const goToResults = useCallback(() => setStage("results"), []);

  const handleNext = useCallback(() => {
    if (!isAnswered) return;
    if (currentIndex < drawn.length - 1) {
      setCurrentIndex((i) => i + 1);
      setSubmitted(false);
      setSecondsLeft(QUESTION_TIME);
    } else {
      goToResults();
    }
  }, [isAnswered, currentIndex, drawn.length, goToResults]);

  const goPrev = useCallback(() => {
    if (currentIndex === 0) return;
    setCurrentIndex((i) => i - 1);
    // already recorded → show its feedback again, timer paused
    setSubmitted(true);
  }, [currentIndex]);

  const handleRestart = useCallback(() => {
    setStage("intro");
    setCurrentIndex(0);
    setRecords({});
    setSubmitted(false);
  }, []);

  /* ---------------- answering ---------------- */

  const recordAnswer = useCallback(
    (selected: number | null) => {
      const elapsed = Math.min(
        QUESTION_TIME,
        Math.round((Date.now() - startedAtRef.current) / 1000)
      );
      setRecords((prev) => ({
        ...prev,
        [currentIndex]: {
          selected,
          timeTaken: selected === null ? QUESTION_TIME : Math.max(1, elapsed),
          timedOut: selected === null,
        },
      }));
      setSubmitted(true);
    },
    [currentIndex]
  );

  const handleAnswer = useCallback(
    (optionIndex: number) => {
      if (submitted) return;
      recordAnswer(optionIndex);
    },
    [submitted, recordAnswer]
  );

  const handleTimeout = useCallback(() => {
    if (submitted) return;
    recordAnswer(null);
  }, [submitted, recordAnswer]);

  /* ---------------- per-question 20s timer ---------------- */

  useEffect(() => {
    if (stage !== "active" || submitted) return;
    startedAtRef.current = Date.now();
    const id = setInterval(() => {
      setSecondsLeft((s) => {
        if (s <= 1) {
          clearInterval(id);
          handleTimeout();
          return 0;
        }
        return s - 1;
      });
    }, 1000);
    return () => clearInterval(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [stage, submitted, currentIndex]);

  /* ---------------- intro: choose number of questions ---------------- */

  if (stage === "intro") {
    const counts = Array.from(
      new Set([...COUNT_CHOICES.filter((c) => c < bank.length), bank.length])
    ).sort((a, b) => a - b);
    return (
      <div className="bg-white dark:bg-white/5 border border-ict-200 dark:border-ict-800 rounded-3xl p-8 text-center max-w-2xl mx-auto shadow-sm">
        <div className="w-16 h-16 rounded-2xl brand-gradient flex items-center justify-center mx-auto mb-6 shadow animate-floaty">
          <BarChart3 className="w-8 h-8 text-white" />
        </div>
        <h2 className="text-2xl font-bold text-ict-900 dark:text-white mb-2 hi-font">
          {t("chapter.quiz", lang)}
        </h2>
        <p className="text-ict-600 dark:text-ict-300 mb-1 hi-font">{chapter.title[lang]}</p>
        <p className="text-sm text-ict-500 dark:text-ict-400 mb-6 hi-font">
          {lang === "en"
            ? `${bank.length} questions in the bank • ${QUESTION_TIME}s per question`
            : `बैंक में ${bank.length} प्रश्न • प्रति प्रश्न ${QUESTION_TIME} सेकंड`}
        </p>

        <p className="text-sm font-bold text-ict-800 dark:text-ict-100 mb-3 hi-font">
          {lang === "en" ? "How many questions do you want?" : "आप कितने प्रश्न देना चाहते हैं?"}
        </p>
        <div className="flex flex-wrap justify-center gap-2 mb-7">
          {counts.map((c) => (
            <button
              key={c}
              onClick={() => setChosenCount(c)}
              className={cn(
                "w-16 py-2.5 rounded-xl text-sm font-bold transition-colors hi-font",
                chosenCount === c
                  ? "brand-gradient text-white shadow"
                  : "bg-ict-100 text-ict-700 hover:bg-ict-200 dark:bg-ict-800 dark:text-ict-200"
              )}
            >
              {c === bank.length ? `${c} (All)` : c}
            </button>
          ))}
        </div>

        <button
          onClick={startQuiz}
          className="brand-gradient text-white px-8 py-3 rounded-xl font-semibold hover:opacity-95 transition-opacity hi-font"
        >
          {t("quiz.start", lang)}
        </button>
      </div>
    );
  }

  /* ---------------- results: full summary ---------------- */

  if (stage === "results") {
    const attempted = drawn.filter((_, i) => records[i]?.selected !== null && records[i]).length;
    const timedOut = drawn.length - attempted;
    const totalTime = Object.values(records).reduce((s, r) => s + r.timeTaken, 0);
    const avgTime = drawn.length ? Math.round(totalTime / drawn.length) : 0;
    const pct = drawn.length ? Math.round((score / drawn.length) * 100) : 0;

    return (
      <div className="max-w-2xl mx-auto space-y-6">
        {/* Score card */}
        <div className="bg-white dark:bg-white/5 border border-ict-200 dark:border-ict-800 rounded-3xl p-8 text-center shadow-sm">
          <div className="w-20 h-20 rounded-2xl brand-gradient flex items-center justify-center mx-auto mb-6 border-4 border-ict-100 dark:border-ict-800 shadow">
            {pct === 100 ? (
              <CheckCircle2 className="w-10 h-10 text-white" />
            ) : (
              <BarChart3 className="w-10 h-10 text-white" />
            )}
          </div>
          <h2 className="text-2xl font-bold text-ict-900 dark:text-white mb-2 hi-font">
            {t("quiz.score", lang)}
          </h2>
          <p className="text-4xl font-extrabold brand-text mb-1">
            {score} / {drawn.length}
          </p>
          <p className="text-sm font-semibold text-ict-500 dark:text-ict-400 mb-6 hi-font">
            {pct}% {lang === "en" ? "correct" : "सही"}
          </p>

          {/* Stats grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6">
            {[
              {
                icon: ListChecks,
                v: attempted,
                l: lang === "en" ? "Attempted" : "हल किए",
              },
              {
                icon: CheckCircle2,
                v: score,
                l: lang === "en" ? "Correct" : "सही",
              },
              {
                icon: XCircle,
                v: attempted - score,
                l: lang === "en" ? "Wrong" : "गलत",
              },
              {
                icon: SkipForward,
                v: timedOut,
                l: lang === "en" ? "Timed out" : "समय समाप्त",
              },
              {
                icon: Timer,
                v: `${totalTime}s`,
                l: lang === "en" ? "Total time" : "कुल समय",
              },
              {
                icon: Clock,
                v: `${avgTime}s`,
                l: lang === "en" ? "Avg / question" : "औसत / प्रश्न",
              },
            ].map((s) => (
              <div
                key={s.l}
                className="bg-ict-50 dark:bg-ict-800/40 border border-ict-100 dark:border-ict-700 rounded-xl px-3 py-3"
              >
                <s.icon className="w-4 h-4 mx-auto text-ict-500 mb-1" />
                <div className="text-lg font-extrabold text-ict-900 dark:text-white">{s.v}</div>
                <div className="text-[10px] font-semibold text-ict-500 dark:text-ict-400 uppercase hi-font">
                  {s.l}
                </div>
              </div>
            ))}
          </div>

          <p className="text-sm hi-font mb-6">
            {pct === 100 ? (
              <span className="text-green-600 font-semibold">
                {lang === "en" ? "Perfect score! / पूर्ण अंक!" : "पूर्ण अंक! / Perfect score!"}
              </span>
            ) : pct >= 50 ? (
              <span className="text-ict-600 dark:text-ict-300 font-semibold">
                {lang === "en" ? "Good job! / बहुत अच्छे!" : "बहुत अच्छे! / Good job!"}
              </span>
            ) : (
              <span className="text-ict-600 dark:text-ict-300 font-semibold">
                {lang === "en" ? "Keep practicing! / और अभ्यास करें!" : "और अभ्यास करें!"}
              </span>
            )}
          </p>

          <div className="flex justify-center gap-3">
            <button
              onClick={startQuiz}
              className="brand-gradient text-white px-8 py-3 rounded-xl font-semibold hover:opacity-95 transition-opacity hi-font"
            >
              {lang === "en" ? "New Round" : "नया राउंड"}
            </button>
            <button
              onClick={handleRestart}
              className="bg-ict-100 dark:bg-ict-800 text-ict-700 dark:text-ict-200 px-8 py-3 rounded-xl font-semibold hover:bg-ict-200 dark:hover:bg-ict-700 transition-colors hi-font"
            >
              {t("quiz.restart", lang)}
            </button>
          </div>
        </div>

        {/* Per-question review */}
        <div className="bg-white dark:bg-white/5 border border-ict-200 dark:border-ict-800 rounded-3xl p-6 shadow-sm">
          <h3 className="font-bold text-ict-900 dark:text-white mb-4 hi-font">
            {lang === "en" ? "Your Attempt Summary" : "आपका प्रयास विवरण"}
          </h3>
          <ol className="space-y-3">
            {drawn.map((q, i) => {
              const r = records[i];
              const ok = r && r.selected !== null && r.selected === q.answer;
              const skipped = !r || r.selected === null;
              return (
                <li
                  key={i}
                  className={cn(
                    "rounded-xl border p-4",
                    ok
                      ? "bg-green-50 border-green-200"
                      : skipped
                        ? "bg-ict-50 dark:bg-ict-800/40 border-ict-100 dark:border-ict-700"
                        : "bg-red-50 border-red-200"
                  )}
                >
                  <div className="flex items-start justify-between gap-3">
                    <p className="text-sm font-semibold text-ict-900 dark:text-white hi-font">
                      {i + 1}. {q.question[lang]}
                    </p>
                    <span className="flex items-center gap-1 text-[11px] font-bold text-ict-500 shrink-0 hi-font">
                      <Clock className="w-3 h-3" />
                      {r ? `${r.timeTaken}s` : "-"}
                    </span>
                  </div>
                  <div className="mt-2 text-xs space-y-0.5 hi-font">
                    <p className={ok ? "text-green-700" : skipped ? "text-ict-500" : "text-red-700"}>
                      {lang === "en" ? "Your answer: " : "आपका उत्तर: "}
                      {skipped
                        ? lang === "en"
                          ? "Not attempted (time up)"
                          : "हल नहीं किया (समय समाप्त)"
                        : q.options[r!.selected!][lang]}
                    </p>
                    {!ok && (
                      <p className="text-green-700">
                        {lang === "en" ? "Correct answer: " : "सही उत्तर: "}
                        {q.options[q.answer][lang]}
                      </p>
                    )}
                  </div>
                </li>
              );
            })}
          </ol>
        </div>
      </div>
    );
  }

  /* ---------------- active question ---------------- */

  if (!currentQuestion) return null;

  const progress = ((currentIndex + 1) / drawn.length) * 100;
  const isLast = currentIndex === drawn.length - 1;
  const timePct = (secondsLeft / QUESTION_TIME) * 100;
  const timeDanger = secondsLeft <= 5;

  return (
    <div className="max-w-2xl mx-auto space-y-6">
      <div className="bg-white dark:bg-white/5 border border-ict-200 dark:border-ict-800 rounded-3xl p-6 shadow-sm">
        <div className="flex justify-between items-center mb-2">
          <span className="text-sm font-medium text-ict-600 dark:text-ict-400 hi-font">
            {lang === "en" ? "Question" : "प्रश्न"} {currentIndex + 1} / {drawn.length}
          </span>
          <span
            className={cn(
              "flex items-center gap-1.5 text-sm font-bold hi-font px-2.5 py-1 rounded-full",
              timeDanger
                ? "bg-red-100 text-red-600 dark:bg-red-500/15"
                : "bg-ict-50 dark:bg-ict-800/40 text-ict-600 dark:text-ict-300"
            )}
          >
            <Clock className={cn("w-4 h-4", timeDanger && "animate-pulse")} />
            {secondsLeft}s
          </span>
        </div>
        {/* quiz progress */}
        <div className="w-full bg-ict-100 dark:bg-ict-900/30 rounded-full h-2 mb-2 overflow-hidden">
          <div
            className="brand-gradient h-full transition-all duration-300"
            style={{ width: progress + "%" }}
          />
        </div>
        {/* question timer bar */}
        <div className="w-full bg-ict-100 dark:bg-ict-900/30 rounded-full h-1.5 mb-6 overflow-hidden">
          <div
            className={cn(
              "h-full transition-all duration-1000 ease-linear",
              timeDanger ? "bg-red-500" : "bg-accent-500"
            )}
            style={{ width: timePct + "%" }}
          />
        </div>

        <p className="text-lg font-semibold text-ict-900 dark:text-white hi-font mb-6">
          {currentQuestion.question[lang]}
        </p>
        <div className="space-y-2">
          {currentQuestion.options.map((opt, i) => {
            const isSelected = selectedAnswer === i;
            const isCorrectOption = i === currentQuestion.answer;
            return (
              <button
                key={i}
                onClick={() => handleAnswer(i)}
                disabled={submitted}
                className={cn(
                  "w-full text-left px-6 py-4 rounded-xl border transition-all hi-font",
                  submitted
                    ? isCorrectOption
                      ? "bg-green-50 border-green-300 text-green-800"
                      : isSelected
                        ? "bg-red-50 border-red-300 text-red-800"
                        : "bg-white dark:bg-white/5 border-ict-200 dark:border-ict-800 text-ict-800 dark:text-white"
                    : "bg-white dark:bg-white/5 border-ict-200 dark:border-ict-800 text-ict-800 dark:text-white hover:bg-ict-50 dark:hover:bg-ict-800/50 hover:border-ict-400"
                )}
              >
                <div className="flex items-center justify-between">
                  <span
                    className={cn(
                      "font-medium hi-font",
                      submitted && (isCorrectOption || (isSelected && !isCorrectOption)) && "font-bold"
                    )}
                  >
                    {opt[lang]}
                  </span>
                  {submitted && isCorrectOption && (
                    <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0" />
                  )}
                  {submitted && isSelected && !isCorrectOption && (
                    <XCircle className="w-5 h-5 text-red-500 shrink-0" />
                  )}
                  {submitted && timedOutFlag(records, currentIndex) && isCorrectOption && (
                    <span className="text-[10px] font-bold text-green-600 hi-font">
                      {lang === "en" ? "TIME UP" : "समय समाप्त"}
                    </span>
                  )}
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {submitted && currentQuestion && (
        <div className="bg-ict-50 dark:bg-ict-900/20 border border-ict-100 dark:border-ict-800 rounded-2xl p-4">
          <div className="flex items-start gap-3">
            <span
              className={cn(
                "w-6 h-6 rounded-full text-white flex items-center justify-center shrink-0 mt-0.5 text-sm font-bold",
                timedOutFlag(records, currentIndex)
                  ? "bg-ict-400"
                  : selectedAnswer === currentQuestion.answer
                    ? "bg-green-500"
                    : "bg-red-500"
              )}
            >
              {timedOutFlag(records, currentIndex) ? "–" : selectedAnswer === currentQuestion.answer ? "✓" : "✕"}
            </span>
            <div>
              <p className="font-semibold text-ict-900 dark:text-white hi-font">
                {timedOutFlag(records, currentIndex)
                  ? lang === "en"
                    ? "Time up!"
                    : "समय समाप्त!"
                  : selectedAnswer === currentQuestion.answer
                    ? t("quiz.correct", lang)
                    : t("quiz.wrong", lang)}{" "}
                - {t("quiz.explanation", lang)}
              </p>
              <p className="text-ict-600 dark:text-ict-300 hi-font text-sm">
                {currentQuestion.explanation[lang]}
              </p>
            </div>
          </div>
        </div>
      )}

      <div className="flex justify-between">
        <button
          onClick={goPrev}
          disabled={currentIndex === 0}
          className={cn(
            "px-6 py-3 rounded-xl border hi-font transition-colors",
            currentIndex > 0
              ? "border-ict-200 dark:border-ict-800 text-ict-700 dark:text-ict-300 hover:bg-ict-50 dark:hover:bg-ict-800/50"
              : "border-transparent text-ict-300 dark:text-ict-700 cursor-not-allowed"
          )}
        >
          <ArrowRight className="w-4 h-4 mr-2 rotate-180 inline" />
          {t("common.prev", lang)}
        </button>
        <span className="self-center text-xs text-ict-500 dark:text-ict-400 hi-font">
          {lang === "en" ? "Press Next when ready" : "तैयार होने पर Next दबाएँ"}
        </span>
        <button
          onClick={handleNext}
          disabled={!isAnswered}
          className={cn(
            "px-8 py-3 rounded-xl font-semibold transition-colors hi-font",
            isAnswered
              ? "brand-gradient text-white shadow hover:opacity-95"
              : "bg-ict-100 dark:bg-ict-800 text-ict-400 dark:text-ict-500 cursor-not-allowed"
          )}
        >
          {isLast ? t("quiz.submit", lang) : t("quiz.next", lang)}
          {!isLast && <ArrowRight className="w-4 h-4 ml-2 inline" />}
        </button>
      </div>
    </div>
  );
}

function timedOutFlag(
  records: Record<number, QuestionRecord>,
  index: number
): boolean {
  return records[index]?.timedOut ?? false;
}
