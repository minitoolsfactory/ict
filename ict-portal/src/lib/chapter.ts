export interface BilingualText {
  en: string;
  hi: string;
}

export interface KeyTerm {
  en: string;
  hi: string;
}

export interface QuizQuestion {
  question: BilingualText;
  options: BilingualText[];
  answer: number;
  explanation: BilingualText;
}

export type Block =
  | { type: "definition"; en: string; hi: string }
  | { type: "points"; items: BilingualText[] }
  | { type: "sub"; title: BilingualText; items: BilingualText[] }
  | { type: "num"; title?: BilingualText; items: { t: BilingualText; d: BilingualText }[] }
  | { type: "table"; head: BilingualText[]; rows: BilingualText[][] }
  | { type: "remember"; en: string; hi: string };

export interface ChapterSection {
  id: string;
  title: BilingualText;
  content?: BilingualText;
  blocks?: Block[];
}

export interface Chapter {
  id: string;
  title: BilingualText;
  class: number;
  pages: string;
  overview: BilingualText;
  sections: ChapterSection[];
  keyTerms: KeyTerm[];
  quiz: QuizQuestion[];
  didYouKnow?: BilingualText[];
  quickRevision?: BilingualText[];
  conclusion?: BilingualText;
}
