"use client";

import Link from "next/link";
import { useState, type ReactNode } from "react";
import Logo from "@/components/Logo";
import { t, type Language } from "@/lib/i18n";
import { cn } from "@/lib/utils";
import { FileText, Languages } from "lucide-react";

export function useLanguage() {
  const [lang, setLang] = useState<Language>("en");
  return { lang, setLang };
}

interface TopBarProps {
  lang: Language;
  onToggleLang: () => void;
  children?: ReactNode;
}

export function TopBar({ lang, onToggleLang, children }: TopBarProps) {
  return (
    <nav className="border-b border-ict-200/70 dark:border-ict-800/70 bg-white/70 dark:bg-ict-900/60 backdrop-blur-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" aria-label="ICT Portal home">
            <Logo />
          </Link>
          <div className="flex items-center gap-2 sm:gap-3">
            {children}
            <Link
              href="/ut-paper"
              className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-sm font-medium text-ict-700 dark:text-ict-200 hover:bg-ict-100 dark:hover:bg-ict-800/60 transition-colors"
            >
              <FileText className="w-4 h-4" />
              {t("nav.utpaper", lang)}
            </Link>
            <button
              onClick={onToggleLang}
              className={cn(
                "flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-sm font-semibold transition-colors",
                lang === "en"
                  ? "bg-ict-600 text-white hover:bg-ict-700"
                  : "bg-ict-100 text-ict-700 hover:bg-ict-200 dark:bg-ict-800 dark:text-ict-200"
              )}
            >
              <Languages className="w-4 h-4" />
              {lang === "en" ? "हिंदी" : "English"}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}

export function Footer({ lang }: { lang: Language }) {
  return (
    <footer className="border-t border-ict-200/70 dark:border-ict-800/70 mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 grid gap-8 md:grid-cols-3">
        <div>
          <Logo size={32} />
          <p className="mt-3 text-sm text-ict-600 dark:text-ict-400 max-w-xs hi-font">
            {t("home.subtitle", lang)}
          </p>
        </div>
        <div className="text-sm">
          <p className="font-semibold text-ict-900 dark:text-white mb-3">
            {t("nav.class6", lang)} / {t("nav.class7", lang)} / {t("nav.class8", lang)}
          </p>
          <ul className="space-y-2 text-ict-600 dark:text-ict-400">
            <li><Link className="hover:text-ict-600 dark:hover:text-ict-200" href="/class6">Class 6 - ICT Basics, Internet & Coding</Link></li>
            <li><Link className="hover:text-ict-600 dark:hover:text-ict-200" href="/class7">Class 7 - Presentations, Websites & Wellbeing</Link></li>
            <li><Link className="hover:text-ict-600 dark:hover:text-ict-200" href="/class8">Class 8 - Spreadsheets, Apps & AI</Link></li>
            <li><Link className="hover:text-ict-600 dark:hover:text-ict-200" href="/ut-paper">{t("nav.utpaper", lang)}</Link></li>
          </ul>
        </div>
        <div className="text-sm text-ict-600 dark:text-ict-400 hi-font">
          <p className="font-semibold text-ict-900 dark:text-white mb-3">SCERT Delhi</p>
          <p>{t("chapter.source", lang)}</p>
          <p className="mt-2">
            “ICT in Education” for Grades 6, 7 & 8 - Revised Edition 2026. Content is independently summarised for study purposes.
          </p>
        </div>
      </div>
      <div className="border-t border-ict-100 dark:border-ict-800/70 py-4 text-center text-xs text-ict-500 dark:text-ict-400">
        © {new Date().getFullYear()} ICT Learning Portal • Built for learners, teachers & schools
      </div>
    </footer>
  );
}
