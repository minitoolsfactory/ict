export type Language = "en" | "hi";

export const translations: Record<string, Record<Language, string>> = {
  // Navigation
  "nav.home": { en: "Home", hi: "होम" },
  "nav.class6": { en: "Class 6", hi: "कक्षा 6" },
  "nav.class7": { en: "Class 7", hi: "कक्षा 7" },
  "nav.class8": { en: "Class 8", hi: "कक्षा 8" },
  "nav.utpaper": { en: "Unit Test Paper", hi: "यूनिट टेस्ट पेपर" },
  "nav.language": { en: "Language", hi: "भाषा" },

  // Homepage
  "home.title": { en: "ICT Book", hi: "आईसीटी बुक" },
  "home.badge": { en: "SCERT Delhi • Revised ICT Curriculum 2026", hi: "SCERT दिल्ली • संशोधित आईसीटी पाठ्यक्रम 2026" },
  "home.heroA": { en: "Learn ICT.", hi: "ICT सीखो।" },
  "home.heroB": { en: "Be Future Ready.", hi: "भविष्य के लिए तैयार हो जाओ।" },
  "home.subtitle": {
    en: "Bilingual ICT education for Classes 6, 7 & 8 - chapter notes, quizzes, unit test papers and fun computer facts, all based on the SCERT Delhi textbooks.",
    hi: "कक्षाओं 6, 7 और 8 के लिए द्विभाषी आईसीटी शिक्षा - अध्याय नोट्स, क्विज़, यूनिट टेस्ट पेपर और मज़ेदार कंप्यूटर तथ्य, सब SCERT दिल्ली की पाठ्यपुस्तकों पर आधारित।",
  },
  "home.stats.classes": { en: "Classes", hi: "कक्षाएँ" },
  "home.stats.chapters": { en: "Chapters", hi: "अध्याय" },
  "home.stats.quizzes": { en: "Quiz Questions", hi: "क्विज़ प्रश्न" },
  "home.stats.facts": { en: "Fun Facts", hi: "मज़ेदार तथ्य" },
  "home.selectClass": { en: "Choose your class and start learning", hi: "अपनी कक्षा चुनें और सीखना शुरू करें" },
  "home.chapters": { en: "chapters", hi: "अध्याय" },
  "home.explore": { en: "Explore Class", hi: "कक्षा देखें" },
  "home.utpaperDesc": {
    en: "Teachers: create printable unit test papers with answer keys from any chapter.",
    hi: "शिक्षकों के लिए: किसी भी अध्याय से उत्तर-कुंजी सहित प्रिंट-योग्य यूनिट टेस्ट पेपर बनाएँ।",
  },
  "home.notes": { en: "Chapter Notes", hi: "अध्याय नोट्स" },
  "home.quiz": { en: "Chapter Quiz", hi: "अध्याय क्विज़" },
  "home.utpaper": { en: "Generate UT Paper", hi: "यूटी पेपर जनरेट करें" },

  // Chapter pages
  "chapter.notes": { en: "Notes", hi: "नोट्स" },
  "chapter.quiz": { en: "Quiz", hi: "क्विज़" },
  "chapter.back": { en: "Back to Class", hi: "कक्षा पर वापस" },
  "chapter.overview": { en: "Chapter Overview", hi: "अध्याय परिचय" },
  "chapter.keyTerms": { en: "Key Terms", hi: "प्रमुख शब्द" },
  "chapter.source": { en: "Source: SCERT Delhi ICT Textbook, Revised Edition 2026", hi: "स्रोत: SCERT दिल्ली आईसीटी पाठ्यपुस्तक, संशोधित संस्करण 2026" },

  // Fun facts
  "facts.title": { en: "Did You Know?", hi: "क्या आप जानते हैं?" },

  // Quiz
  "quiz.start": { en: "Start Quiz", hi: "क्विज़ शुरू करें" },
  "quiz.next": { en: "Next Question", hi: "अगला प्रश्न" },
  "quiz.submit": { en: "Submit Quiz", hi: "क्विज़ जमा करें" },
  "quiz.restart": { en: "Restart Quiz", hi: "क्विज़ पुनः शुरू करें" },
  "quiz.score": { en: "Your Score", hi: "आपका स्कोर" },
  "quiz.of": { en: "of", hi: "में से" },
  "quiz.correct": { en: "Correct!", hi: "सही!" },
  "quiz.wrong": { en: "Incorrect", hi: "गलत" },
  "quiz.explanation": { en: "Explanation", hi: "व्याख्या" },

  // UT Paper
  "utpaper.title": { en: "Unit Test Paper Generator", hi: "यूनिट टेस्ट पेपर जनरेटर" },
  "utpaper.selectClass": { en: "Select Class", hi: "कक्षा चुनें" },
  "utpaper.selectChapter": { en: "Select Chapter", hi: "अध्याय चुनें" },
  "utpaper.numQuestions": { en: "Number of Questions", hi: "प्रश्नों की संख्या" },
  "utpaper.generate": { en: "Generate Paper", hi: "पेपर जनरेट करें" },
  "utpaper.print": { en: "Print Paper (PDF)", hi: "पेपर प्रिंट करें (पीडीएफ)" },
  "utpaper.downloadWord": { en: "Download as Word", hi: "वर्ड डाउनलोड करें" },
  "utpaper.name": { en: "Student Name", hi: "छात्र का नाम" },
  "utpaper.rollno": { en: "Roll Number", hi: "अनुक्रमांक" },
  "utpaper.date": { en: "Date", hi: "तारीख" },
  "utpaper.marks": { en: "Total Marks", hi: "कुल अंक" },
  "utpaper.time": { en: "Time Allowed", hi: "अनुमत समय" },

  // Common
  "common.loading": { en: "Loading...", hi: "लोड हो रहा है..." },
  "common.back": { en: "Back", hi: "वापस" },
  "common.next": { en: "Next", hi: "अगला" },
  "common.prev": { en: "Previous", hi: "पिछला" },
  "common.search": { en: "Search", hi: "खोजें" },
};

export function t(key: string, lang: Language): string {
  return translations[key]?.[lang] || translations[key]?.en || key;
}