"use client";

import Link from "next/link";
import Image from "next/image";
import { t } from "@/lib/i18n";
import { Footer, TopBar, useLanguage } from "@/components/Shell";
import {
  BookOpen,
  LayoutList,
  FileText,
  BarChart3,
  Monitor,
  Bot,
  Lightbulb,
  Printer,
  Languages,
  ShieldCheck,
  Sparkles,
  ArrowRight,
} from "lucide-react";

const classes = [
  {
    id: "class6",
    label: { en: "Class 6", hi: "कक्षा 6" },
    chapters: 6,
    desc: {
      en: "ICT Environment, Spreadsheets, Word Processing, Internet Basics, Coding & Future Skills (AR/VR/AI)",
      hi: "आईसीटी वातावरण, स्प्रेडशीट, वर्ड प्रोसेसिंग, इंटरनेट की मूल बातें, कोडिंग और भविष्य के कौशल (AR/VR/AI)",
    },
    icon: BookOpen,
    cover: "/books/class6/cover.png",
  },
  {
    id: "class7",
    label: { en: "Class 7", hi: "कक्षा 7" },
    chapters: 5,
    desc: {
      en: "Presentation Tool, Coding with Loops, Website Designing, Digital Wellbeing & Software Applications",
      hi: "प्रेजेंटेशन टूल, लूप्स से कोडिंग, वेबसाइट डिज़ाइनिंग, डिजिटल वेलबीइंग और सॉफ्टवेयर एप्लिकेशन",
    },
    icon: LayoutList,
    cover: "/books/class7/cover.png",
  },
  {
    id: "class8",
    label: { en: "Class 8", hi: "कक्षा 8" },
    chapters: 5,
    desc: {
      en: "Advanced Spreadsheets, App Building, Digital Communication, Cyber Safety & Artificial Intelligence",
      hi: "उन्नत स्प्रेडशीट, ऐप निर्माण, डिजिटल संचार, साइबर सुरक्षा और कृत्रिम बुद्धिमत्ता",
    },
    icon: Bot,
    cover: "/books/class8/cover.png",
  },
];

const features = [
  {
    icon: Monitor,
    title: { en: "Chapter Notes", hi: "अध्याय नोट्स" },
    desc: { en: "Clear, bilingual summaries of every textbook chapter", hi: "हर अध्याय के स्पष्ट द्विभाषी सार" },
  },
  {
    icon: BarChart3,
    title: { en: "Interactive Quizzes", hi: "इंटरैक्टिव क्विज़" },
    desc: { en: "Instant scoring with explanations for every answer", hi: "तुरंत स्कोर और हर उत्तर की व्याख्या" },
  },
  {
    icon: Lightbulb,
    title: { en: "Fun Computer Facts", hi: "मज़ेदार कंप्यूटर तथ्य" },
    desc: { en: "Surprising facts about computers between your lessons", hi: "पाठों के बीच कंप्यूटर के रोचक तथ्य" },
  },
  {
    icon: Printer,
    title: { en: "Unit Test Papers", hi: "यूनिट टेस्ट पेपर" },
    desc: { en: "Printable papers with answer keys for teachers", hi: "शिक्षकों के लिए उत्तर-कुंजी सहित पेपर" },
  },
  {
    icon: Languages,
    title: { en: "English + हिंदी", hi: "English + हिंदी" },
    desc: { en: "Switch language anywhere with one click", hi: "एक क्लिक में कहीं भी भाषा बदलें" },
  },
  {
    icon: ShieldCheck,
    title: { en: "Source-Verified", hi: "सत्यापित स्रोत" },
    desc: { en: "Content based only on the SCERT Delhi 2026 textbooks", hi: "सामग्री केवल SCERT दिल्ली 2026 पुस्तकों पर आधारित" },
  },
];

export default function HomePage() {
  const { lang, setLang } = useLanguage();

  return (
    <div className="min-h-screen bg-ict-50/60 dark:bg-ict-900 flex flex-col">
      <TopBar lang={lang} onToggleLang={() => setLang(lang === "en" ? "hi" : "en")} />

      <main className="flex-1">
        {/* Hero */}
        <section className="hero-glow">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12 text-center">
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white dark:bg-ict-800/60 border border-ict-200 dark:border-ict-700 text-xs font-semibold text-ict-700 dark:text-ict-200 shadow-sm">
              <Sparkles className="w-3.5 h-3.5 text-accent-500" />
              {t("home.badge", lang)}
            </span>
            <h1 className="mt-5 text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-ict-900 dark:text-white hi-font">
              {t("home.heroA", lang)}{" "}
              <span className="brand-text">{t("home.heroB", lang)}</span>
            </h1>
            <p className="mt-4 text-ict-600 dark:text-ict-300 text-base sm:text-lg max-w-2xl mx-auto hi-font">
              {t("home.subtitle", lang)}
            </p>

            {/* Stats */}
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              {[
                { v: "3", l: t("home.stats.classes", lang) },
                { v: "16", l: t("home.stats.chapters", lang) },
                { v: "80+", l: t("home.stats.quizzes", lang) },
                { v: "48+", l: t("home.stats.facts", lang) },
              ].map((s) => (
                <div key={s.l} className="bg-white dark:bg-white/5 border border-ict-200 dark:border-ict-800 rounded-xl px-5 py-3 shadow-sm">
                  <div className="text-2xl font-extrabold brand-text">{s.v}</div>
                  <div className="text-xs font-medium text-ict-600 dark:text-ict-400 hi-font">{s.l}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Class cards */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-8">
          <h2 className="text-2xl font-bold text-ict-900 dark:text-white text-center mb-8 hi-font">
            {t("home.selectClass", lang)}
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {classes.map((c) => (
              <Link key={c.id} href={`/${c.id}`} className="group block">
                <article className="lift h-full bg-white dark:bg-white/5 border border-ict-200 dark:border-ict-800 rounded-3xl overflow-hidden shadow-sm hover:border-ict-400 dark:hover:border-ict-500">
                  <div className="relative h-44 bg-ict-100 dark:bg-ict-800">
                    <Image
                      src={c.cover}
                      alt={`${c.label[lang]} textbook cover`}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover object-top"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-ict-900/60 via-transparent to-transparent" />
                    <span className="absolute bottom-3 left-4 flex items-center gap-2 text-white font-bold">
                      <c.icon className="w-5 h-5" />
                      {c.label[lang]}
                    </span>
                    <span className="absolute top-3 right-3 bg-white/90 dark:bg-ict-900/80 text-ict-700 dark:text-ict-200 text-xs font-bold px-2.5 py-1 rounded-full">
                      {c.chapters} {t("home.chapters", lang)}
                    </span>
                  </div>
                  <div className="p-6">
                    <p className="text-sm text-ict-600 dark:text-ict-300 hi-font min-h-[60px]">
                      {c.desc[lang]}
                    </p>
                    <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-ict-600 dark:text-ict-300 group-hover:gap-3 transition-all">
                      {t("home.explore", lang)}
                      <ArrowRight className="w-4 h-4" />
                    </span>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </section>

        {/* Features */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((f) => (
              <div key={f.title.en} className="bg-white dark:bg-white/5 border border-ict-200 dark:border-ict-800 rounded-2xl p-6 shadow-sm">
                <div className="w-11 h-11 rounded-xl brand-gradient flex items-center justify-center mb-4 shadow-sm">
                  <f.icon className="w-5.5 h-5.5 text-white" />
                </div>
                <h3 className="font-bold text-ict-900 dark:text-white hi-font">{f.title[lang]}</h3>
                <p className="mt-1 text-sm text-ict-600 dark:text-ict-400 hi-font">{f.desc[lang]}</p>
              </div>
            ))}
          </div>
        </section>

        {/* UT paper CTA */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
          <Link href="/ut-paper" className="group block">
            <div className="brand-gradient rounded-3xl p-8 sm:p-10 text-white shadow-lg flex flex-col sm:flex-row items-center gap-6">
              <div className="w-16 h-16 rounded-2xl bg-white/15 backdrop-blur flex items-center justify-center shrink-0 animate-floaty">
                <FileText className="w-8 h-8" />
              </div>
              <div className="flex-1 text-center sm:text-left">
                <h3 className="text-2xl font-bold hi-font">{t("nav.utpaper", lang)}</h3>
                <p className="mt-1 text-white/85 hi-font">{t("home.utpaperDesc", lang)}</p>
              </div>
              <span className="inline-flex items-center gap-2 bg-white text-ict-700 font-bold px-6 py-3 rounded-xl shadow hover:bg-ict-50 transition-colors hi-font">
                {t("home.utpaper", lang)}
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </span>
            </div>
          </Link>
        </section>
      </main>

      <Footer lang={lang} />
    </div>
  );
}
