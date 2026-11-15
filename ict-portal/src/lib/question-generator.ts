import { shuffleArray } from "@/lib/utils";

export interface LocalizedText {
  en: string;
  hi: string;
}

export type QuestionKind = "mcq" | "trueFalse" | "match" | "short" | "long";

export const QUESTION_KINDS: { id: QuestionKind; en: string; hi: string }[] = [
  { id: "mcq", en: "Multiple choice", hi: "बहुविकल्पीय" },
  { id: "trueFalse", en: "True / False", hi: "सही / गलत" },
  { id: "match", en: "Match the following", hi: "मिलान कीजिए" },
  { id: "short", en: "Short answer", hi: "लघु उत्तरीय" },
  { id: "long", en: "Long answer", hi: "दीर्घ उत्तरीय" },
];

export interface QuizSource {
  question: LocalizedText;
  options: LocalizedText[];
  answer: number;
  explanation: LocalizedText;
}

export interface ChapterSource {
  id: string;
  title: LocalizedText;
  quiz: QuizSource[];
  keyTerms?: { en: string; hi: string }[];
  sections?: { id: string; title: LocalizedText; content: LocalizedText }[];
}

export interface MatchPair {
  left: LocalizedText;
  right: LocalizedText;
}

export interface PaperQuestion {
  id: string;
  kind: QuestionKind;
  prompt: LocalizedText;
  suggestedAnswer: LocalizedText;
  options?: LocalizedText[];
  correctOption?: number;
  isTrue?: boolean;
  matchPairs?: MatchPair[];
  matchOptions?: LocalizedText[];
  matchKey?: string;
  number?: number;
  marks: number;
}

export interface QuestionSetting {
  enabled: boolean;
  count: number;
  marksEach: number;
}

export type QuestionBlueprint = Record<QuestionKind, QuestionSetting>;
export type QuestionBank = Record<QuestionKind, PaperQuestion[]>;

export const DEFAULT_BLUEPRINT: QuestionBlueprint = {
  mcq: { enabled: true, count: 5, marksEach: 1 },
  trueFalse: { enabled: true, count: 5, marksEach: 1 },
  match: { enabled: true, count: 1, marksEach: 4 },
  short: { enabled: true, count: 2, marksEach: 1 },
  long: { enabled: true, count: 2, marksEach: 2 },
};

const shortPrompts: LocalizedText[] = [
  { en: "In one or two sentences, explain {topic}.", hi: "एक या दो वाक्यों में {topic} समझाइए।" },
  { en: "Give one practical example of {topic}.", hi: "{topic} का एक व्यावहारिक उदाहरण दीजिए।" },
  { en: "Why is {topic} useful? Give one reason.", hi: "{topic} उपयोगी क्यों है? एक कारण बताइए।" },
  { en: "Write one important point to remember about {topic}.", hi: "{topic} के बारे में याद रखने योग्य एक महत्वपूर्ण बात लिखिए।" },
  { en: "How could a student use {topic} in a school task?", hi: "विद्यार्थी स्कूल के काम में {topic} का उपयोग कैसे कर सकता है?" },
  { en: "Name one benefit and one consideration related to {topic}.", hi: "{topic} का एक लाभ और उससे जुड़ी एक सावधानी बताइए।" },
];

const longPrompts: LocalizedText[] = [
  { en: "Explain {topic} in detail. Include two examples and explain why they matter.", hi: "{topic} को विस्तार से समझाइए। दो उदाहरण दीजिए और उनका महत्व बताइए।" },
  { en: "Describe the main ideas of {topic} and how they could be used in a real task.", hi: "{topic} के मुख्य विचारों का वर्णन कीजिए और बताइए कि वास्तविक काम में उनका उपयोग कैसे होगा।" },
  { en: "Write a detailed note on {topic}. Include its purpose, an example and one good practice.", hi: "{topic} पर विस्तृत टिप्पणी लिखिए। इसका उद्देश्य, एक उदाहरण और एक अच्छी कार्य-विधि शामिल कीजिए।" },
  { en: "A class is working on a project related to {topic}. Explain the steps or ideas they should use.", hi: "एक कक्षा {topic} से जुड़ी परियोजना कर रही है। वे कौन-से चरण या विचार अपनाएँ, समझाइए।" },
  { en: "Explain {topic} and discuss how it helps people make or communicate information.", hi: "{topic} समझाइए और बताइए कि यह जानकारी बनाने या साझा करने में लोगों की कैसे मदद करता है।" },
];

export function buildQuestionBank(chapters: ChapterSource[]): QuestionBank {
  const bank: QuestionBank = { mcq: [], trueFalse: [], match: [], short: [], long: [] };

  chapters.forEach((chapter) => {
    chapter.quiz.forEach((quiz, quizIndex) => {
      bank.mcq.push({
        id: `${chapter.id}-mcq-${quizIndex}`,
        kind: "mcq",
        prompt: quiz.question,
        options: quiz.options,
        correctOption: quiz.answer,
        suggestedAnswer: quiz.explanation,
        marks: 1,
      });

      quiz.options.forEach((option, optionIndex) => {
        const isTrue = optionIndex === quiz.answer;
        bank.trueFalse.push({
          id: `${chapter.id}-tf-${quizIndex}-${optionIndex}`,
          kind: "trueFalse",
          prompt: {
            en: `True or false: For "${quiz.question.en}", "${option.en}" is the correct answer.`,
            hi: `सही या गलत: "${quiz.question.hi}" का सही उत्तर "${option.hi}" है।`,
          },
          isTrue,
          suggestedAnswer: {
            en: isTrue ? "True" : "False",
            hi: isTrue ? "सही" : "गलत",
          },
          marks: 1,
        });
      });
    });

    const terms = chapter.keyTerms ?? [];
    terms.forEach((term, termIndex) => {
      const distractors = terms
        .filter((_, index) => index !== termIndex)
        .slice(0, 3);
      if (distractors.length > 0) {
        const options = [term, ...distractors].map(({ en, hi }) => ({ en: hi, hi: en }));
        bank.mcq.push({
          id: `${chapter.id}-term-${termIndex}`,
          kind: "mcq",
          prompt: {
            en: `Which Hindi meaning matches "${term.en}"?`,
            hi: `"${term.en}" का सही हिंदी अर्थ कौन-सा है?`,
          },
          options,
          correctOption: 0,
          suggestedAnswer: { en: term.hi, hi: term.hi },
          marks: 1,
        });
      }
    });

    if (terms.length >= 2) {
      for (let offset = 0; offset < terms.length; offset += 1) {
        const rotatedTerms = [...terms.slice(offset), ...terms.slice(0, offset)].slice(0, Math.min(4, terms.length));
        bank.match.push({
          id: `${chapter.id}-match-${offset}`,
          kind: "match",
          prompt: {
            en: "Match each ICT term in Column A with its Hindi meaning in Column B.",
            hi: "स्तंभ A के प्रत्येक ICT शब्द का स्तंभ B में दिए हिंदी अर्थ से मिलान कीजिए।",
          },
          matchPairs: rotatedTerms.map((term) => ({
            left: { en: term.en, hi: term.en },
            right: { en: term.hi, hi: term.hi },
          })),
          suggestedAnswer: { en: "Use the numbered matching key.", hi: "संख्या-आधारित मिलान कुंजी देखें।" },
          marks: 1,
        });
      }
    }

    const sections = chapter.sections ?? [];
    sections.forEach((section, sectionIndex) => {
      shortPrompts.forEach((template, templateIndex) => {
        bank.short.push({
          id: `${chapter.id}-short-${section.id}-${templateIndex}`,
          kind: "short",
          prompt: {
            en: template.en.replaceAll("{topic}", section.title.en),
            hi: template.hi.replaceAll("{topic}", section.title.hi),
          },
          suggestedAnswer: section.content,
          marks: 1,
        });
      });

      longPrompts.forEach((template, templateIndex) => {
        bank.long.push({
          id: `${chapter.id}-long-${section.id}-${templateIndex}`,
          kind: "long",
          prompt: {
            en: template.en.replaceAll("{topic}", section.title.en),
            hi: template.hi.replaceAll("{topic}", section.title.hi),
          },
          suggestedAnswer: section.content,
          marks: 1,
        });

        const nextSection = sections[sectionIndex + 1];
        if (templateIndex === 0 && nextSection) {
          bank.long.push({
            id: `${chapter.id}-compare-${section.id}-${nextSection.id}`,
            kind: "long",
            prompt: {
              en: `Compare "${section.title.en}" and "${nextSection.title.en}". Include one similarity, one difference and an example of each.`,
              hi: `"${section.title.hi}" और "${nextSection.title.hi}" की तुलना कीजिए। एक समानता, एक अंतर और दोनों का एक उदाहरण दीजिए।`,
            },
            suggestedAnswer: {
              en: `${section.content.en}\n\n${nextSection.content.en}`,
              hi: `${section.content.hi}\n\n${nextSection.content.hi}`,
            },
            marks: 1,
          });
        }
      });
    });
  });

  return bank;
}

export function preparePaperQuestion(question: PaperQuestion): PaperQuestion {
  if (question.kind === "mcq" && question.options && question.correctOption !== undefined) {
    const shuffledOptions = shuffleArray(
      question.options.map((option, index) => ({ option, correct: index === question.correctOption }))
    );
    return {
      ...question,
      options: shuffledOptions.map(({ option }) => option),
      correctOption: shuffledOptions.findIndex(({ correct }) => correct),
    };
  }

  if (question.kind === "match" && question.matchPairs) {
    const matchOptions = shuffleArray(question.matchPairs.map((pair) => pair.right));
    const matchKey = question.matchPairs
      .map((pair, index) => {
        const optionIndex = matchOptions.findIndex((option) => option.en === pair.right.en);
        return `${index + 1}-${String.fromCodePoint(65 + optionIndex)}`;
      })
      .join(", ");
    return { ...question, matchOptions, matchKey };
  }

  return question;
}