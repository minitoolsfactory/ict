export type LocalizedText = { en: string; hi: string };

export type LessonTheme =
  | "systems"
  | "data"
  | "writing"
  | "web"
  | "code"
  | "future"
  | "present"
  | "wellbeing"
  | "explore"
  | "mobile"
  | "mail"
  | "footprint"
  | "ai";

export interface LessonGuide {
  theme: LessonTheme;
  lead: LocalizedText;
  visualLabels: LocalizedText[];
  examples: LocalizedText[];
  practice: { prompt: LocalizedText; answer: LocalizedText };
  recap: LocalizedText[];
}

export const lessonGuides: Record<string, LessonGuide> = {
  "6-ch1": {
    theme: "systems",
    lead: {
      en: "ICT is the toolkit people use to create, store and exchange information. In this lesson, follow a simple idea from a person's input through a computer system to a useful result, then learn how to use shared technology thoughtfully.",
      hi: "ICT उन साधनों का समूह है जिनसे लोग जानकारी बनाते, सँभालते और साझा करते हैं। इस पाठ में किसी व्यक्ति के input से computer system के ज़रिए उपयोगी परिणाम तक की यात्रा समझें और साझा तकनीक का जिम्मेदारी से उपयोग करना सीखें।",
    },
    visualLabels: [
      { en: "Human input", hi: "मानव input" },
      { en: "Computer tools", hi: "कंप्यूटर साधन" },
      { en: "Useful result", hi: "उपयोगी परिणाम" },
    ],
    examples: [
      { en: "A student searches for a science fact, saves it in a document and shares it with a classmate: ICT helps at every step.", hi: "एक विद्यार्थी विज्ञान की जानकारी खोजता है, उसे document में सहेजता है और सहपाठी से साझा करता है: हर कदम पर ICT मदद करता है।" },
      { en: "A keyboard sends a typed answer to the computer; the processor works with it; the screen shows the result.", hi: "Keyboard से लिखा उत्तर कंप्यूटर तक पहुँचता है; processor उस पर काम करता है; screen परिणाम दिखाती है।" },
      { en: "A microphone captures a spoken question as input. Speakers can play the computer's spoken reply as output.", hi: "Microphone बोले गए सवाल को input के रूप में लेता है। Speakers कंप्यूटर का बोला हुआ जवाब output के रूप में सुनाते हैं।" },
      { en: "In a shared lab, save your work, leave settings as you found them and never open another student's files without permission.", hi: "साझा lab में अपना काम save करें, settings को पहले जैसा रखें और अनुमति के बिना किसी दूसरे विद्यार्थी की files न खोलें।" },
    ],
    practice: {
      prompt: { en: "Choose one task you did today. Name the information, the device that handled it and the result you wanted.", hi: "आज किए गए किसी एक काम को चुनें। जानकारी, उसे संभालने वाला device और अपना अपेक्षित परिणाम बताएँ।" },
      answer: { en: "Example: enter a search phrase on a keyboard, let a browser find pages, then read the result on a screen.", hi: "उदाहरण: keyboard से खोज लिखें, browser को pages खोजने दें और screen पर परिणाम पढ़ें।" },
    },
    recap: [
      { en: "ICT supports creating, storing and communicating information.", hi: "ICT जानकारी बनाने, सँभालने और पहुँचाने में मदद करता है।" },
      { en: "Hardware is the equipment; software gives it instructions.", hi: "Hardware उपकरण हैं; software उन्हें निर्देश देता है।" },
      { en: "Safe, respectful habits matter whenever devices are shared.", hi: "Devices साझा करते समय सुरक्षित और सम्मानजनक व्यवहार ज़रूरी है।" },
    ],
  },
  "6-ch2": {
    theme: "data",
    lead: {
      en: "A spreadsheet turns a list of facts into a working model. Learn how rows, columns and cell references keep information organized, then use formulas and charts to answer questions about the data.",
      hi: "Spreadsheet साधारण सूची को काम आने वाले data model में बदलती है। Rows, columns और cell references से जानकारी व्यवस्थित करें, फिर formulas और charts से data के सवालों के जवाब निकालें।",
    },
    visualLabels: [
      { en: "Organize", hi: "व्यवस्थित करें" },
      { en: "Calculate", hi: "गणना करें" },
      { en: "Explain", hi: "समझाएँ" },
    ],
    examples: [
      { en: "Record a class book drive with one row per book and columns for title, reader and return date.", hi: "कक्षा की book drive में हर किताब के लिए एक row और title, reader तथा return date के लिए अलग columns रखें।" },
      { en: "If a value is in column B and row 5, its address is B5. A formula can refer to B5 so the result updates when the value changes.", hi: "यदि कोई value column B और row 5 में है, तो उसका पता B5 है। Formula में B5 लिखने पर value बदलते ही परिणाम भी बदल सकता है।" },
      { en: "To total four daily amounts in cells B2 through B5, use =SUM(B2:B5). The range names which cells to include.", hi: "B2 से B5 तक के चार दैनिक मान जोड़ने के लिए =SUM(B2:B5) लिखें। Range बताती है कि किन cells को जोड़ना है।" },
      { en: "A line chart can make a week's changing temperature easier to compare than a column of numbers.", hi: "एक सप्ताह में बदलते तापमान की तुलना केवल numbers की सूची से करने के बजाय line chart से आसानी से हो सकती है।" },
    ],
    practice: {
      prompt: { en: "Make a three-row table of items you borrowed. Add a total or count formula and choose a chart only if it answers a question.", hi: "उधार ली गई वस्तुओं की तीन-row table बनाएँ। Total या count formula जोड़ें और chart तभी चुनें जब वह किसी सवाल का जवाब दे।" },
      answer: { en: "Check that each column has one kind of information and that your formula includes the intended cell range.", hi: "जाँचें कि हर column में एक ही तरह की जानकारी है और formula में सही cell range शामिल है।" },
    },
    recap: [
      { en: "A cell is named by its column letter and row number.", hi: "Cell का नाम column के अक्षर और row के number से बनता है।" },
      { en: "Formulas begin with = and can refer to cells or ranges.", hi: "Formula = से शुरू होता है और cells या ranges का संदर्भ ले सकता है।" },
      { en: "Choose a chart that makes the pattern easier to understand.", hi: "ऐसा chart चुनें जिससे pattern समझना आसान हो।" },
    ],
  },
  "6-ch3": {
    theme: "writing",
    lead: {
      en: "A word processor helps you move from a rough draft to a clear document. This lesson focuses on the writing cycle: enter your ideas, edit for meaning, format for readers and save a version you can find again.",
      hi: "Word processor rough draft को साफ़ document में बदलने में मदद करता है। इस पाठ में writing cycle पर ध्यान दें: विचार लिखें, अर्थ के लिए edit करें, पढ़ने में आसान format दें और file को सही जगह save करें।",
    },
    visualLabels: [
      { en: "Draft", hi: "मसौदा" },
      { en: "Improve", hi: "सुधारें" },
      { en: "Share", hi: "साझा करें" },
    ],
    examples: [
      { en: "Write a short report by typing a first draft, then move sentences into a sensible order before polishing it.", hi: "छोटी report का पहला मसौदा लिखें, फिर वाक्यों को सही क्रम में रखकर भाषा सुधारें।" },
      { en: "Use a heading style for the title and normal text for paragraphs; consistent formatting helps readers scan the page.", hi: "शीर्षक के लिए heading style और अनुच्छेदों के लिए normal text रखें; एकसमान formatting से पढ़ना आसान होता है।" },
      { en: "Read the document aloud to catch missing words, repeated phrases and punctuation that a spell-checker may miss.", hi: "Document को ऊँची आवाज़ में पढ़ें; इससे छूटे शब्द, दोहराए वाक्यांश और विराम-चिह्न की गलतियाँ पकड़ में आ सकती हैं।" },
      { en: "Save a report with a useful name such as `Water-project-draft` in the class folder, then save again after major edits.", hi: "Report को class folder में `Water-project-draft` जैसे साफ़ नाम से save करें और बड़े बदलावों के बाद फिर save करें।" },
    ],
    practice: {
      prompt: { en: "Create a one-page notice for a classroom event. Give it a clear title, readable spacing and a final proofread.", hi: "कक्षा के कार्यक्रम के लिए एक-page notice बनाएँ। स्पष्ट शीर्षक, पढ़ने योग्य spacing और अंतिम proofreading करें।" },
      answer: { en: "A reader should be able to find the event, date, place and next step without hunting through the page.", hi: "पाठक को पूरे page में ढूँढ़े बिना कार्यक्रम, तारीख, जगह और अगला कदम समझ आना चाहिए।" },
    },
    recap: [
      { en: "Draft first; revise meaning before polishing appearance.", hi: "पहले draft लिखें; सजावट से पहले अर्थ और क्रम सुधारें।" },
      { en: "Use formatting to guide the reader, not to decorate every line.", hi: "Formatting का उपयोग पाठक का मार्गदर्शन करने के लिए करें, हर line सजाने के लिए नहीं।" },
      { en: "Save with a descriptive name and proofread before sharing.", hi: "वर्णनात्मक नाम से save करें और साझा करने से पहले जाँचें।" },
    ],
  },
  "6-ch4": {
    theme: "web",
    lead: {
      en: "The internet connects devices and networks; the web is one service that uses that connection to publish linked pages. Learn how a browser, a URL and a search engine each play a different role, and how to judge a result before trusting it.",
      hi: "Internet devices और networks को जोड़ता है; web इसी connection पर linked pages उपलब्ध कराने वाली एक सेवा है। Browser, URL और search engine की अलग-अलग भूमिका समझें और किसी result पर भरोसा करने से पहले उसे जाँचना सीखें।",
    },
    visualLabels: [
      { en: "Ask", hi: "खोजें" },
      { en: "Navigate", hi: "पहुंचें" },
      { en: "Verify", hi: "जाँचें" },
    ],
    examples: [
      { en: "A video call and a web page both use the internet, but they are different services carried by connected networks.", hi: "Video call और web page दोनों internet का उपयोग करते हैं, लेकिन वे जुड़े networks पर चलने वाली अलग सेवाएँ हैं।" },
      { en: "A browser displays a page; its URL tells the browser where that page is located.", hi: "Browser page दिखाता है; URL browser को बताता है कि वह page कहाँ है।" },
      { en: "For a school project, compare the author, date and evidence on two search results instead of opening the first result automatically.", hi: "School project के लिए पहला result तुरंत खोलने के बजाय दो results के author, date और evidence की तुलना करें।" },
      { en: "If a page asks for a password to reveal an unexpected prize, stop and ask a trusted adult before entering anything.", hi: "अगर कोई page अनपेक्षित prize दिखाने के लिए password माँगे, तो कुछ भरने से पहले रुकें और भरोसेमंद बड़े से पूछें।" },
    ],
    practice: {
      prompt: { en: "Search for one fact for a class assignment. Write down the query, the website and one reason the source seems reliable.", hi: "Class assignment के लिए एक तथ्य खोजें। Search query, website और source भरोसेमंद लगने का एक कारण लिखें।" },
      answer: { en: "A useful check is to identify who published it, when it was updated and whether another trustworthy source agrees.", hi: "जाँचें कि इसे किसने प्रकाशित किया, कब update किया और क्या कोई दूसरा भरोसेमंद source भी इसकी पुष्टि करता है।" },
    },
    recap: [
      { en: "Internet is the connection; the web is one service that uses it.", hi: "Internet connection का जाल है; web इसका उपयोग करने वाली एक सेवा है।" },
      { en: "A browser displays pages, a URL locates one and a search engine helps discover them.", hi: "Browser pages दिखाता है, URL उनका पता बताता है और search engine उन्हें खोजने में मदद करता है।" },
      { en: "Check sources and protect personal information online.", hi: "Sources जाँचें और online निजी जानकारी सुरक्षित रखें।" },
    ],
  },
  "6-ch5": {
    theme: "code",
    lead: {
      en: "Coding starts before a computer is switched on: first describe the problem, then write precise steps. Algorithms, flowcharts and simple programs all express that plan in different ways, making it easier to test and improve.",
      hi: "Coding computer चालू करने से पहले शुरू होती है: पहले problem समझें, फिर साफ़ steps लिखें। Algorithm, flowchart और simple program उसी योजना को अलग-अलग रूप में दिखाते हैं, ताकि उसे test और improve करना आसान हो।",
    },
    visualLabels: [
      { en: "Plan", hi: "योजना" },
      { en: "Build", hi: "बनाएँ" },
      { en: "Test", hi: "जाँचें" },
    ],
    examples: [
      { en: "For a morning routine, list the actions in order before deciding which could be automated.", hi: "सुबह की दिनचर्या के काम क्रम से लिखें; फिर सोचें कि उनमें से किसे automate किया जा सकता है।" },
      { en: "A program can compare a score with a target and choose one message for a pass and another for practice.", hi: "Program score की तुलना लक्ष्य से करके pass के लिए एक और अभ्यास के लिए दूसरा message चुन सकता है।" },
      { en: "A loop is useful when the same action repeats, such as asking for three measurements; the stopping rule prevents an endless repeat.", hi: "जब एक ही काम दोहराना हो, जैसे तीन measurements लेना, तब loop उपयोगी है; stopping rule अनंत दोहराव रोकता है।" },
      { en: "In Scratch, test a sprite with a small input first, then try a different value to see whether the blocks handle both cases.", hi: "Scratch में sprite को पहले छोटे input से test करें, फिर दूसरी value देकर देखें कि blocks दोनों स्थितियाँ संभालते हैं या नहीं।" },
    ],
    practice: {
      prompt: { en: "Write steps for a program that asks for two numbers and displays their total. Mark the input, calculation and output.", hi: "ऐसे program के steps लिखें जो दो numbers लेकर उनका total दिखाए। Input, calculation और output को चिह्नित करें।" },
      answer: { en: "Test with 2 and 3, then with 0 and a negative number if your design allows them. Explain what you expect each time.", hi: "2 और 3 से test करें, फिर design अनुमति दे तो 0 और negative number से भी। हर बार अपेक्षित परिणाम बताएँ।" },
    },
    recap: [
      { en: "An algorithm is a finite, ordered plan for a task.", hi: "Algorithm किसी काम के लिए सीमित और क्रमबद्ध योजना है।" },
      { en: "Decisions choose a path; loops repeat a step under a condition.", hi: "Decision रास्ता चुनता है; loop किसी condition के तहत step दोहराता है।" },
      { en: "Test more than one case and improve the plan when it fails.", hi: "एक से अधिक cases जाँचें और असफल होने पर योजना सुधारें।" },
    ],
  },
  "6-ch6": {
    theme: "future",
    lead: {
      en: "Being future-ready is not about knowing every new device. It is about building adaptable habits: finding trustworthy information, learning new tools, making thoughtful choices and asking for help when something online feels unsafe.",
      hi: "Future-ready होने का अर्थ हर नए device को जानना नहीं है। इसका अर्थ है बदलती तकनीक सीखना, भरोसेमंद जानकारी ढूँढ़ना, सोच-समझकर निर्णय लेना और online असुरक्षित महसूस होने पर मदद माँगना।",
    },
    visualLabels: [
      { en: "Learn", hi: "सीखें" },
      { en: "Adapt", hi: "बदलें" },
      { en: "Contribute", hi: "योगदान दें" },
    ],
    examples: [
      { en: "Before using a new app, learn what it does, what information it requests and how to get help.", hi: "नया app इस्तेमाल करने से पहले जानें कि वह क्या करता है, कौन-सी जानकारी माँगता है और मदद कहाँ मिलेगी।" },
      { en: "A student who enjoys drawing could explore digital illustration, animation or user-interface design as possible ICT pathways.", hi: "चित्र बनाना पसंद करने वाला विद्यार्थी digital illustration, animation या user-interface design जैसे ICT क्षेत्रों को खोज सकता है।" },
      { en: "When a tool changes, try a small task, read its help guide and compare the result with what you intended.", hi: "किसी tool में बदलाव हो तो छोटा काम करके देखें, help guide पढ़ें और परिणाम की अपने उद्देश्य से तुलना करें।" },
      { en: "If a message pressures you to share a secret or photo, pause and speak with a trusted adult rather than replying alone.", hi: "अगर कोई message secret या photo साझा करने का दबाव डाले, तो अकेले जवाब देने के बजाय रुकें और भरोसेमंद बड़े से बात करें।" },
    ],
    practice: {
      prompt: { en: "Choose one digital skill you want to improve. Write a small weekly goal and one safe resource or person who can help.", hi: "एक digital skill चुनें जिसे आप बेहतर करना चाहते हैं। हफ्ते का छोटा लक्ष्य और मदद करने वाला सुरक्षित resource या व्यक्ति लिखें।" },
      answer: { en: "A useful goal names an action and a result, such as making one clear slide and asking a classmate for feedback.", hi: "अच्छे लक्ष्य में काम और परिणाम दोनों हों, जैसे एक स्पष्ट slide बनाकर सहपाठी से feedback लेना।" },
    },
    recap: [
      { en: "Digital literacy combines knowledge, judgment and safe habits.", hi: "Digital literacy में ज्ञान, सही निर्णय और सुरक्षित आदतें शामिल हैं।" },
      { en: "ICT careers include many paths, not only programming.", hi: "ICT में केवल programming नहीं, कई तरह के career paths हैं।" },
      { en: "Curiosity, communication and responsible choices transfer to new tools.", hi: "जिज्ञासा, संवाद और जिम्मेदार निर्णय नए tools में भी काम आते हैं।" },
    ],
  },
  "7-ch1": {
    theme: "present",
    lead: {
      en: "A presentation is a visual story, not a document split across slides. Plan one idea per slide, use images and diagrams when they clarify the message, and keep the design consistent so an audience can follow along.",
      hi: "Presentation कई slides में बँटा document नहीं, बल्कि दृश्य कहानी है। हर slide पर एक मुख्य विचार रखें, समझाने के लिए image या diagram चुनें और design एकसमान रखें ताकि श्रोता आसानी से साथ चलें।",
    },
    visualLabels: [
      { en: "One idea", hi: "एक विचार" },
      { en: "Strong visual", hi: "साफ़ दृश्य" },
      { en: "Clear story", hi: "स्पष्ट कहानी" },
    ],
    examples: [
      { en: "For a talk about saving water, order slides as the problem, evidence, actions and a closing challenge.", hi: "पानी बचाने पर presentation में slides को समस्या, प्रमाण, उपाय और अंतिम चुनौती के क्रम में रखें।" },
      { en: "Open the presentation tool, choose a blank or suitable theme and save a named copy before adding content.", hi: "Presentation tool खोलें, खाली layout या उपयुक्त theme चुनें और content जोड़ने से पहले नाम देकर copy save करें।" },
      { en: "Replace a paragraph with a labeled diagram when the audience needs to understand how parts connect.", hi: "जब श्रोताओं को हिस्सों का संबंध समझना हो, तो लंबे paragraph की जगह labels वाला diagram रखें।" },
      { en: "Use an AI chatbox to brainstorm questions, then verify facts with reliable sources and write the final explanation yourself.", hi: "AI chatbox से विचार या सवाल जुटाएँ, फिर भरोसेमंद sources से facts जाँचें और अंतिम व्याख्या अपने शब्दों में लिखें।" },
    ],
    practice: {
      prompt: { en: "Plan three slides to teach a younger student one idea. Give each slide a message before selecting its image.", hi: "किसी छोटे विद्यार्थी को एक विचार सिखाने के लिए तीन slides की योजना बनाएँ। Image चुनने से पहले हर slide का संदेश लिखें।" },
      answer: { en: "If two slides have the same message, combine them; if a slide has several messages, split or simplify it.", hi: "दो slides का संदेश एक हो तो उन्हें जोड़ें; एक slide में कई संदेश हों तो बाँटें या सरल करें।" },
    },
    recap: [
      { en: "A slide should support one clear point.", hi: "हर slide को एक स्पष्ट बात का समर्थन करना चाहिए।" },
      { en: "Readable type, useful visuals and consistent spacing help an audience.", hi: "पढ़ने योग्य अक्षर, उपयोगी visuals और एकसमान spacing श्रोताओं की मदद करते हैं।" },
      { en: "Check AI-generated claims and credit sources for borrowed media.", hi: "AI से मिले दावों की जाँच करें और ली गई media का source बताएँ।" },
    ],
  },
  "7-ch2": {
    theme: "code",
    lead: {
      en: "Programs become useful when they respond to different situations. Practice turning a decision into a clear condition, repeating actions with a loop and testing the result in Scratch instead of guessing what the blocks will do.",
      hi: "Program तब उपयोगी बनता है जब वह अलग-अलग स्थितियों पर सही प्रतिक्रिया दे। Decision को स्पष्ट condition में बदलें, loop से काम दोहराएँ और blocks का अनुमान लगाने के बजाय Scratch में परिणाम जाँचें।",
    },
    visualLabels: [
      { en: "Condition", hi: "शर्त" },
      { en: "Branch", hi: "रास्ता" },
      { en: "Result", hi: "परिणाम" },
    ],
    examples: [
      { en: "For a lost-and-found app, define the problem, the information needed and the result a student should see.", hi: "Lost-and-found app के लिए समस्या, ज़रूरी जानकारी और विद्यार्थी को दिखने वाला परिणाम तय करें।" },
      { en: "If the answer equals 10, show “Correct”; otherwise, offer another attempt. The condition makes the choice explicit.", hi: "अगर उत्तर 10 के बराबर हो तो “सही” दिखाएँ; वरना फिर कोशिश का विकल्प दें। Condition निर्णय को स्पष्ट बनाती है।" },
      { en: "Use a repeat block to animate a sprite through several steps; change one value and observe how the motion changes.", hi: "Sprite को कई steps चलाने के लिए repeat block लगाएँ; एक value बदलें और गति में बदलाव देखें।" },
      { en: "In Scratch, test the decision with a value on each side of the boundary, such as 9, 10 and 11.", hi: "Scratch में सीमा के दोनों ओर values से decision जाँचें, जैसे 9, 10 और 11।" },
    ],
    practice: {
      prompt: { en: "Design a program that says whether a number is greater than 5. List tests that cover true, false and equal cases.", hi: "ऐसा program बनाएँ जो बताए कि number 5 से बड़ा है या नहीं। True, false और बराबर वाली स्थितियों के tests लिखें।" },
      answer: { en: "Try 8, 3 and 5. The equal case reveals whether your condition should use > or >=.", hi: "8, 3 और 5 जाँचें। बराबर वाला case बताएगा कि condition में > चाहिए या >=।" },
    },
    recap: [
      { en: "Break a problem into inputs, decisions, actions and outputs.", hi: "समस्या को input, decision, action और output में बाँटें।" },
      { en: "Conditions choose a branch; loops repeat actions.", hi: "Condition एक रास्ता चुनती है; loop काम दोहराता है।" },
      { en: "Test boundary and unexpected cases, not only the easiest input.", hi: "केवल आसान input नहीं, सीमा और अनपेक्षित cases भी जाँचें।" },
    ],
  },
  "7-ch3": {
    theme: "web",
    lead: {
      en: "A website is a set of connected pages built for a particular audience. Start with what visitors need to find, organize pages into a simple structure, then choose headings, colors and images that make the information easy to scan.",
      hi: "Website किसी खास audience के लिए बने जुड़े हुए pages का समूह है। पहले तय करें कि visitors को क्या ढूँढ़ना है, pages का सरल ढाँचा बनाएँ और फिर headings, colors तथा images से जानकारी पढ़ने योग्य बनाएँ।",
    },
    visualLabels: [
      { en: "Plan pages", hi: "Pages की योजना" },
      { en: "Design", hi: "Design" },
      { en: "Publish", hi: "प्रकाशित करें" },
    ],
    examples: [
      { en: "A school garden site might have Home, Plant Guide and Contact pages, each with a clear job.", hi: "School garden website में Home, Plant Guide और Contact pages हो सकते हैं; हर page का काम स्पष्ट हो।" },
      { en: "A page for a gardening club should answer a visitor's likely questions before adding decorative elements.", hi: "Gardening club का page सजावट से पहले visitor के संभावित सवालों के जवाब दे।" },
      { en: "Use one heading style for all page titles and readable body text; check contrast so the words remain clear.", hi: "सभी page titles के लिए एक heading style और साफ़ body text रखें; contrast जाँचें ताकि शब्द पढ़े जा सकें।" },
      { en: "Preview the site on a phone, check each navigation link and ask permission before publishing other people's photos.", hi: "Phone पर site preview करें, navigation links जाँचें और दूसरों की photos प्रकाशित करने से पहले अनुमति लें।" },
    ],
    practice: {
      prompt: { en: "Sketch a two-page website for a class project. Label each page and draw how a visitor moves between them.", hi: "Class project के लिए दो-page website का sketch बनाएँ। Pages के नाम और visitor का रास्ता दिखाएँ।" },
      answer: { en: "A visitor should always know which page they are on and how to return to the main page.", hi: "Visitor को हमेशा पता होना चाहिए कि वह किस page पर है और मुख्य page पर कैसे लौटे।" },
    },
    recap: [
      { en: "Design for the visitor's task, not only the creator's taste.", hi: "Design visitor के काम के लिए करें, केवल creator की पसंद के लिए नहीं।" },
      { en: "Use a simple page structure, clear headings and readable contrast.", hi: "सरल page structure, स्पष्ट headings और पढ़ने योग्य contrast रखें।" },
      { en: "Preview links, mobile layout and permissions before sharing.", hi: "साझा करने से पहले links, mobile layout और permissions जाँचें।" },
    ],
  },
  "7-ch4": {
    theme: "wellbeing",
    lead: {
      en: "Digital wellbeing is about making technology support your life rather than taking it over. Notice how screen habits affect attention, sleep and relationships, and practise respectful, balanced choices in online spaces.",
      hi: "Digital wellbeing का अर्थ है तकनीक जीवन में मदद करे, उस पर हावी न हो। Screen habits का ध्यान, नींद और रिश्तों पर असर देखें और online जगहों पर संतुलित तथा सम्मानजनक व्यवहार अपनाएँ।",
    },
    visualLabels: [
      { en: "Notice", hi: "ध्यान दें" },
      { en: "Balance", hi: "संतुलन" },
      { en: "Respect", hi: "सम्मान" },
    ],
    examples: [
      { en: "If notifications interrupt homework, silence non-urgent alerts and choose a time to check messages afterward.", hi: "अगर notifications homework में बाधा डालें, तो गैर-ज़रूरी alerts बंद करें और messages देखने का समय तय करें।" },
      { en: "Disagree with an idea by explaining your reason; do not mock the person who posted it.", hi: "किसी विचार से असहमति हो तो कारण बताएँ; उसे पोस्ट करने वाले व्यक्ति का मज़ाक न उड़ाएँ।" },
      { en: "Try a screen break between tasks: stretch, drink water or talk with someone face to face.", hi: "कामों के बीच screen break लें: stretch करें, पानी पिएँ या किसी से आमने-सामने बात करें।" },
      { en: "Use a classmate's image only with permission and name the source when you reuse their work.", hi: "सहपाठी की image अनुमति लेकर उपयोग करें और उसके काम को दोबारा इस्तेमाल करते समय source बताएँ।" },
    ],
    practice: {
      prompt: { en: "Notice one moment when a device helps you and one when it distracts you. Choose a small change for tomorrow.", hi: "एक ऐसा समय पहचानें जब device मदद करता है और एक जब ध्यान भटकाता है। कल के लिए छोटा बदलाव चुनें।" },
      answer: { en: "A useful change is specific and kind to yourself, such as keeping the phone away for one 20-minute study session.", hi: "अच्छा बदलाव स्पष्ट और अपने प्रति सहज हो, जैसे 20 मिनट के एक study session में phone दूर रखना।" },
    },
    recap: [
      { en: "Healthy use includes breaks, sleep and time away from screens.", hi: "स्वस्थ उपयोग में break, नींद और screen से दूर समय शामिल हैं।" },
      { en: "Online communication deserves the same respect as face-to-face conversation.", hi: "Online बातचीत में भी आमने-सामने जैसा सम्मान रखें।" },
      { en: "Credit others' work and report harmful behavior to a trusted adult.", hi: "दूसरों के काम का श्रेय दें और नुकसानदायक व्यवहार की सूचना भरोसेमंद बड़े को दें।" },
    ],
  },
  "7-ch5": {
    theme: "explore",
    lead: {
      en: "Software can help people model a shape, explore a scientific idea or present evidence. This lesson compares kinds of digital tools and shows how choosing the right tool begins with the question you want to answer.",
      hi: "Software से आकार बनाए जा सकते हैं, science के विचार खोजे जा सकते हैं और प्रमाण प्रस्तुत किए जा सकते हैं। इस पाठ में digital tools की भूमिकाएँ समझें और सही tool चुनने की शुरुआत अपने सवाल से करें।",
    },
    visualLabels: [
      { en: "Question", hi: "सवाल" },
      { en: "Tool", hi: "साधन" },
      { en: "Evidence", hi: "प्रमाण" },
    ],
    examples: [
      { en: "ICT focuses on technology for information and communication; IT often emphasizes computing systems and information handling.", hi: "ICT में information और communication की तकनीक पर जोर है; IT में computing systems और information handling पर।" },
      { en: "Use a geometry tool to move a vertex and observe which properties of a triangle change and which stay fixed.", hi: "Geometry tool में vertex खिसकाकर देखें कि triangle के कौन-से गुण बदलते हैं और कौन-से स्थिर रहते हैं।" },
      { en: "A simulation lets you change one condition, observe the outcome and compare it with your prediction.", hi: "Simulation में एक condition बदलें, परिणाम देखें और अपनी prediction से तुलना करें।" },
      { en: "A water-conservation project could combine a spreadsheet of usage, a chart of results and a short presentation of actions.", hi: "Water-conservation project में उपयोग की spreadsheet, परिणामों का chart और उपायों की छोटी presentation जोड़ी जा सकती है।" },
    ],
    practice: {
      prompt: { en: "Choose a question from another subject. Name one digital tool that could help investigate it and what evidence it could produce.", hi: "किसी दूसरे subject का सवाल चुनें। उसे खोजने में मदद करने वाला digital tool और उससे मिलने वाला प्रमाण बताएँ।" },
      answer: { en: "Match the tool to the task: model a shape, collect values, test a process or communicate a conclusion.", hi: "काम के अनुसार tool चुनें: shape model करें, values इकट्ठी करें, process जाँचें या निष्कर्ष बताएँ।" },
    },
    recap: [
      { en: "Choose a tool by the task and evidence you need.", hi: "ज़रूरी काम और प्रमाण के अनुसार tool चुनें।" },
      { en: "Simulations support exploration; they do not replace checking assumptions.", hi: "Simulation खोज में मदद करता है, लेकिन assumptions जाँचना फिर भी ज़रूरी है।" },
      { en: "Projects become stronger when subjects and tools work together.", hi: "अलग subjects और tools मिलकर project को बेहतर बनाते हैं।" },
    ],
  },
  "8-ch1": {
    theme: "data",
    lead: {
      en: "Build on spreadsheet skills by asking sharper questions of larger tables. Sort to change the order, filter to focus on matching records, chart to compare patterns and use logical functions to calculate only what meets a condition.",
      hi: "बड़ी spreadsheet से बेहतर सवाल पूछकर पुराने skills आगे बढ़ाएँ। Sort से क्रम बदलें, filter से चुने हुए records देखें, chart से patterns की तुलना करें और condition पूरी करने वाले data की गणना के लिए logical functions लगाएँ।",
    },
    visualLabels: [
      { en: "Arrange", hi: "क्रम दें" },
      { en: "Select", hi: "चुनें" },
      { en: "Compare", hi: "तुलना करें" },
    ],
    examples: [
      { en: "Keep one heading row and one record per row so the table can be sorted without separating a value from its label.", hi: "एक heading row और हर record के लिए अलग row रखें, ताकि sort करते समय value अपने label से अलग न हो।" },
      { en: "A bar chart is useful for comparing categories such as books borrowed by different groups.", hi: "अलग-अलग groups द्वारा ली गई किताबों जैसी categories की तुलना के लिए bar chart उपयोगी है।" },
      { en: "Filter a reading log to show only books marked “Finished”; the other rows are hidden, not deleted.", hi: "Reading log में केवल “Finished” किताबें दिखाने के लिए filter लगाएँ; बाकी rows छिपती हैं, delete नहीं होतीं।" },
      { en: "Use IF to label a score, SUMIF to total values for one category and COUNTIF to count matching entries.", hi: "Score को label करने के लिए IF, category का total निकालने के लिए SUMIF और matching entries गिनने के लिए COUNTIF लगाएँ।" },
    ],
    practice: {
      prompt: { en: "Create a small table of five activities and their minutes. Filter one activity and use a function to count or total matching rows.", hi: "पाँच activities और उनके minutes की छोटी table बनाएँ। एक activity filter करके matching rows गिनें या जोड़ें।" },
      answer: { en: "Check the formula range and the condition text carefully; a tiny spelling mismatch can exclude valid rows.", hi: "Formula range और condition का text ध्यान से जाँचें; छोटी spelling mismatch सही rows को बाहर कर सकती है।" },
    },
    recap: [
      { en: "Sort changes order; filter hides records that do not match.", hi: "Sort क्रम बदलता है; filter न मिलने वाले records को छिपाता है।" },
      { en: "Charts should answer a comparison or trend question.", hi: "Chart से तुलना या trend का सवाल हल होना चाहिए।" },
      { en: "IF, SUMIF and COUNTIF apply a condition in different ways.", hi: "IF, SUMIF और COUNTIF condition का उपयोग अलग-अलग कामों में करते हैं।" },
    ],
  },
  "8-ch2": {
    theme: "mobile",
    lead: {
      en: "An app is a small system designed around a user's task. Plan the screens and controls first, connect them with blocks, then test on a device or emulator and improve the app when real use reveals confusion.",
      hi: "App किसी उपयोगकर्ता के काम के लिए बनाया गया छोटा system है। पहले screens और controls की योजना बनाएँ, उन्हें blocks से जोड़ें, फिर device या emulator पर test करके उलझन दिखने पर सुधारें।",
    },
    visualLabels: [
      { en: "Design screen", hi: "Screen बनाएँ" },
      { en: "Add logic", hi: "Logic जोड़ें" },
      { en: "Test app", hi: "App जाँचें" },
    ],
    examples: [
      { en: "A calculator, map and messaging tool are all apps, but each supports a different user goal.", hi: "Calculator, map और messaging tool सभी apps हैं, लेकिन हर app अलग उपयोगकर्ता लक्ष्य पूरा करता है।" },
      { en: "A button can call a procedure that adds two entered numbers; keep the interface labels clear about what to enter.", hi: "Button ऐसी procedure चला सकता है जो दो दिए numbers जोड़े; labels साफ़ रखें ताकि पता हो क्या भरना है।" },
      { en: "Sketch the screen before building it: identify the title, input fields, action button and place where the result appears.", hi: "बनाने से पहले screen का sketch बनाएँ: title, input fields, action button और result की जगह तय करें।" },
      { en: "Test with empty input and unusual values as well as a normal example; do not distribute an app you have not checked.", hi: "सामान्य उदाहरण के साथ खाली input और असामान्य values से भी test करें; बिना जाँचे app वितरित न करें।" },
    ],
    practice: {
      prompt: { en: "Sketch a two-screen app that helps a student track homework. Label one action on each screen and how the information moves.", hi: "Homework track करने वाली दो-screen app का sketch बनाएँ। हर screen का एक action और information का रास्ता बताएँ।" },
      answer: { en: "A clear design states what is saved, how to edit it and what happens when the user has not entered anything.", hi: "स्पष्ट design बताए कि क्या save होगा, उसे कैसे बदलेंगे और कुछ न भरने पर क्या होगा।" },
    },
    recap: [
      { en: "Start from a user need and a simple screen plan.", hi: "उपयोगकर्ता की ज़रूरत और सरल screen plan से शुरुआत करें।" },
      { en: "Connect visible controls to logic and data.", hi: "दिखने वाले controls को logic और data से जोड़ें।" },
      { en: "Test realistic, empty and unexpected inputs before sharing.", hi: "साझा करने से पहले सामान्य, खाली और अनपेक्षित inputs जाँचें।" },
    ],
  },
  "8-ch3": {
    theme: "mail",
    lead: {
      en: "Email is useful when a message needs a clear subject, a record or an attachment. Learn to address a message carefully, write for the reader, attach the right file and use online meeting time respectfully.",
      hi: "जब संदेश का subject स्पष्ट रखना हो, record चाहिए या attachment भेजना हो, तब email उपयोगी है। सही recipient चुनें, पाठक के लिए लिखें, सही file attach करें और online meeting में सम्मानजनक व्यवहार करें।",
    },
    visualLabels: [
      { en: "Recipient", hi: "प्राप्तकर्ता" },
      { en: "Message", hi: "संदेश" },
      { en: "Attachment", hi: "संलग्न file" },
    ],
    examples: [
      { en: "Use email for a teacher when you need to send a question and keep a copy of the instructions or reply.", hi: "Teacher को सवाल भेजने और निर्देश या जवाब की copy रखने के लिए email उपयोग करें।" },
      { en: "A subject such as “Science project: meeting request” tells the reader why the message matters.", hi: "“Science project: meeting request” जैसा subject बताता है कि message किस बारे में है।" },
      { en: "Begin with a greeting, state the request in a short paragraph, attach the named file and close politely.", hi: "Greeting से शुरू करें, छोटी paragraph में अनुरोध लिखें, सही नाम वाली file attach करें और विनम्रता से समाप्त करें।" },
      { en: "Join a meeting on time, mute when not speaking and avoid sharing its link publicly.", hi: "Meeting में समय पर आएँ, बोलते समय के अलावा mute रहें और उसका link सार्वजनिक न करें।" },
    ],
    practice: {
      prompt: { en: "Draft an email asking for feedback on a project. Include a useful subject, greeting, specific request and polite closing.", hi: "Project पर feedback माँगने वाला email लिखें। उपयोगी subject, greeting, स्पष्ट अनुरोध और विनम्र समापन रखें।" },
      answer: { en: "Before sending, verify the recipient, attachment and spelling; never include private details that the reader does not need.", hi: "भेजने से पहले recipient, attachment और spelling जाँचें; ऐसी निजी जानकारी न जोड़ें जिसकी पाठक को ज़रूरत नहीं।" },
    },
    recap: [
      { en: "Use a precise subject and a message suited to its reader.", hi: "सटीक subject और पाठक के अनुकूल संदेश लिखें।" },
      { en: "Check recipients and attachments before sending.", hi: "भेजने से पहले recipients और attachments जाँचें।" },
      { en: "Online meetings need preparation, turn-taking and privacy.", hi: "Online meeting में तैयारी, बारी से बोलना और privacy ज़रूरी हैं।" },
    ],
  },
  "8-ch4": {
    theme: "footprint",
    lead: {
      en: "A digital footprint is the trail of information connected to your online activity. Some of it is visible in posts; some is collected by services. Learn to pause before sharing, protect accounts and get help when a footprint is used to harm someone.",
      hi: "Digital footprint आपकी online activity से जुड़ी जानकारी का निशान है। कुछ हिस्सा posts में दिखता है और कुछ services जमा करती हैं। Share करने से पहले सोचें, accounts सुरक्षित रखें और किसी के नुकसान के लिए जानकारी इस्तेमाल हो तो मदद लें।",
    },
    visualLabels: [
      { en: "Create trail", hi: "निशान बनता है" },
      { en: "Check privacy", hi: "Privacy जाँचें" },
      { en: "Protect", hi: "सुरक्षित रहें" },
    ],
    examples: [
      { en: "A comment, game profile or search can leave information linked to an account or device.", hi: "Comment, game profile या search से account या device से जुड़ी जानकारी का निशान रह सकता है।" },
      { en: "A helpful project post can show your interests and effort; remove details such as your address or daily route.", hi: "उपयोगी project post आपकी रुचि और मेहनत दिखा सकती है; address या रोज़ के रास्ते जैसी जानकारी न दें।" },
      { en: "A fake profile, threatening message or stolen password is a reason to save evidence and tell a trusted adult promptly.", hi: "Fake profile, धमकी वाला message या चोरी हुआ password दिखे तो प्रमाण save करें और जल्दी भरोसेमंद बड़े को बताएँ।" },
      { en: "Use unique passwords, review privacy settings and ask before sharing someone else's photo or message.", hi: "अलग-अलग मजबूत passwords रखें, privacy settings देखें और किसी की photo या message साझा करने से पहले पूछें।" },
    ],
    practice: {
      prompt: { en: "Review a pretend social profile. Mark which details are safe to share publicly and which should be limited or removed.", hi: "एक काल्पनिक social profile देखें। चिह्नित करें कि कौन-सी बातें public रखी जा सकती हैं और किन्हें सीमित या हटाना चाहिए।" },
      answer: { en: "Keep public details general; protect contact, location and account-recovery information, and get adult help for threats.", hi: "Public जानकारी सामान्य रखें; contact, location और account-recovery details सुरक्षित रखें और धमकी पर बड़े की मदद लें।" },
    },
    recap: [
      { en: "Online actions can leave records beyond the moment you post.", hi: "Online काम का record post करने के बाद भी रह सकता है।" },
      { en: "A thoughtful footprint shares useful work without exposing private details.", hi: "सोच-समझकर बनाया footprint अच्छा काम दिखाता है, निजी जानकारी नहीं।" },
      { en: "Report cybercrime or abuse to a trusted adult; do not handle it alone.", hi: "Cybercrime या abuse की सूचना भरोसेमंद बड़े को दें; अकेले न सुलझाएँ।" },
    ],
  },
  "8-ch5": {
    theme: "ai",
    lead: {
      en: "Artificial intelligence describes computer systems designed to perform tasks that involve patterns, predictions or language. Explore how training data shapes a model, where AI tools can help and why people must still check fairness, accuracy and impact.",
      hi: "Artificial Intelligence उन computer systems को कहता है जिन्हें patterns, predictions या language से जुड़े कामों के लिए बनाया जाता है। समझें कि training data model को कैसे प्रभावित करता है, AI कहाँ मदद कर सकता है और fairness, accuracy तथा असर की जाँच क्यों ज़रूरी है।",
    },
    visualLabels: [
      { en: "Examples", hi: "उदाहरण" },
      { en: "Patterns", hi: "Patterns" },
      { en: "Human check", hi: "मानव जाँच" },
    ],
    examples: [
      { en: "People learn from senses, experience and relationships; an AI model identifies patterns from examples provided to it.", hi: "लोग इंद्रियों, अनुभव और संबंधों से सीखते हैं; AI model को दिए गए examples में patterns पहचानता है।" },
      { en: "A route estimate may use traffic patterns, but a road closure or poor location data can make its suggestion wrong.", hi: "Route का अनुमान traffic patterns से बन सकता है, लेकिन road बंद हो या location data गलत हो तो सुझाव गलत हो सकता है।" },
      { en: "Image recognition, language tools and data analysis solve different kinds of problems; choose the one that matches the task.", hi: "Image recognition, language tools और data analysis अलग समस्याएँ हल करते हैं; काम के अनुसार तरीका चुनें।" },
      { en: "If a model's examples leave out some people, its results may work poorly for them. Ask who supplied the data and who could be affected.", hi: "अगर model के examples में कुछ लोग शामिल न हों, तो उनके लिए परिणाम खराब हो सकते हैं। पूछें कि data किसने दिया और असर किस पर पड़ेगा।" },
    ],
    practice: {
      prompt: { en: "Imagine an AI tool sorting library books. Name one useful pattern, one type of example it needs and one mistake a person should check for.", hi: "Library books छाँटने वाला AI tool सोचें। एक उपयोगी pattern, ज़रूरी example का एक प्रकार और जाँचने योग्य एक गलती बताएँ।" },
      answer: { en: "It might sort by title or subject, need correctly labeled examples and require a human to catch unfair or incorrect matches.", hi: "वह title या subject से छाँट सकता है, सही labels वाले examples चाहिए और गलत या अनुचित matches पकड़ने के लिए मानव जाँच चाहिए।" },
    },
    recap: [
      { en: "AI systems learn patterns from data; they do not share human understanding.", hi: "AI systems data से patterns सीखते हैं; उनकी समझ मनुष्य जैसी नहीं होती।" },
      { en: "Different AI domains work with data, images or language.", hi: "AI के अलग domains data, images या language के साथ काम करते हैं।" },
      { en: "Check outputs for errors, bias, privacy and real-world consequences.", hi: "Output में गलती, bias, privacy और वास्तविक असर जाँचें।" },
    ],
  },
};