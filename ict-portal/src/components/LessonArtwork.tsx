import {
  Activity,
  AppWindow,
  BrainCircuit,
  Code2,
  Compass,
  Cpu,
  Globe2,
  HeartPulse,
  Mail,
  Monitor,
  Presentation,
  ShieldCheck,
  Table2,
  type LucideIcon,
} from "lucide-react";
import type { Language } from "@/lib/i18n";
import type { LessonTheme, LocalizedText } from "@/data/lesson-guides";

const themeIcons: Record<LessonTheme, LucideIcon> = {
  systems: Cpu,
  data: Table2,
  writing: Monitor,
  web: Globe2,
  code: Code2,
  future: Compass,
  present: Presentation,
  wellbeing: HeartPulse,
  explore: Activity,
  mobile: AppWindow,
  mail: Mail,
  footprint: ShieldCheck,
  ai: BrainCircuit,
};

const themeStyles: Record<LessonTheme, { panel: string; accent: string; line: string }> = {
  systems: { panel: "bg-sky-50", accent: "text-sky-700 bg-sky-100", line: "#38bdf8" },
  data: { panel: "bg-lime-50", accent: "text-lime-800 bg-lime-100", line: "#84cc16" },
  writing: { panel: "bg-rose-50", accent: "text-rose-700 bg-rose-100", line: "#fb7185" },
  web: { panel: "bg-cyan-50", accent: "text-cyan-800 bg-cyan-100", line: "#06b6d4" },
  code: { panel: "bg-amber-50", accent: "text-amber-800 bg-amber-100", line: "#f59e0b" },
  future: { panel: "bg-emerald-50", accent: "text-emerald-800 bg-emerald-100", line: "#10b981" },
  present: { panel: "bg-orange-50", accent: "text-orange-800 bg-orange-100", line: "#f97316" },
  wellbeing: { panel: "bg-pink-50", accent: "text-pink-800 bg-pink-100", line: "#ec4899" },
  explore: { panel: "bg-teal-50", accent: "text-teal-800 bg-teal-100", line: "#14b8a6" },
  mobile: { panel: "bg-yellow-50", accent: "text-yellow-800 bg-yellow-100", line: "#eab308" },
  mail: { panel: "bg-blue-50", accent: "text-blue-800 bg-blue-100", line: "#3b82f6" },
  footprint: { panel: "bg-red-50", accent: "text-red-800 bg-red-100", line: "#ef4444" },
  ai: { panel: "bg-violet-50", accent: "text-violet-800 bg-violet-100", line: "#8b5cf6" },
};

interface LessonArtworkProps {
  theme: LessonTheme;
  labels: LocalizedText[];
  title: string;
  lang: Language;
}

export default function LessonArtwork({ theme, labels, title, lang }: Readonly<LessonArtworkProps>) {
  const Icon = themeIcons[theme];
  const styles = themeStyles[theme];

  return (
    <figure
      aria-labelledby={`concept-map-${theme}-caption`}
      className={`relative isolate overflow-hidden rounded-xl border border-black/5 ${styles.panel} p-5 sm:p-7`}
    >
      <svg
        aria-hidden="true"
        className="absolute inset-0 -z-10 h-full w-full opacity-40"
        viewBox="0 0 640 300"
        preserveAspectRatio="none"
      >
        <defs>
          <pattern id="lesson-dots" width="18" height="18" patternUnits="userSpaceOnUse">
            <circle cx="2" cy="2" r="1" fill={styles.line} />
          </pattern>
        </defs>
        <rect width="640" height="300" fill="url(#lesson-dots)" />
        <path d="M60 150 H580" stroke={styles.line} strokeWidth="3" strokeDasharray="8 10" />
      </svg>

      <div className="relative grid min-h-52 grid-cols-3 items-center gap-2 sm:min-h-56 sm:gap-4">
        {labels.map((label, index) => (
          <div className="relative z-10 flex min-w-0 flex-col items-center text-center" key={label.en}>
            <div className={`mb-3 flex size-16 items-center justify-center rounded-xl border border-white/80 bg-white shadow-sm sm:size-[76px] ${index === 1 ? "ring-4 ring-white/60" : ""}`}>
              {index === 1 ? (
                <Icon className={`size-8 ${styles.accent.split(" ")[0]}`} strokeWidth={1.8} aria-hidden="true" />
              ) : (
                <span className={`flex size-9 items-center justify-center rounded-lg ${styles.accent}`}>
                  <span className="font-mono text-sm font-bold">0{index + 1}</span>
                </span>
              )}
            </div>
            <span className="max-w-28 text-xs font-semibold leading-snug text-slate-800 sm:max-w-36 sm:text-sm">
              {label[lang]}
            </span>
          </div>
        ))}
      </div>
      <figcaption id={`concept-map-${theme}-caption`} className="mt-5 flex items-center justify-between border-t border-black/10 pt-3 text-xs font-semibold uppercase tracking-wide text-slate-600">
        <span>{lang === "en" ? "Concept map" : "विचार-चित्र"}</span>
        <span>{lang === "en" ? "Follow the path" : "क्रम से समझें"}</span>
        <span className="sr-only">{title}: {labels.map((label) => label[lang]).join(", ")}</span>
      </figcaption>
    </figure>
  );
}