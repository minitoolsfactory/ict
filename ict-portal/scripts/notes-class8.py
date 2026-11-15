#!/usr/bin/env python3
"""Rewrite class8 ch1, ch2, ch3, ch5 into structured study-notes blocks."""
from _noteslib import L, rewrite

# ---------------- class8/ch1 Spreadsheet-04 ----------------
s = [
 {"id":"recap","title":L("Spreadsheet - Recap from Class 6","स्प्रेडशीट - कक्षा 6 का पुनरावलोकन"),"blocks":[
   {"type":"definition","en":"A spreadsheet is a computer application that helps us store data and perform calculations on it.","hi":"स्प्रेडशीट एक कंप्यूटर एप्लिकेशन है जो डेटा संग्रहित करने और उस पर गणना करने में मदद करता है।"},
   {"type":"sub","title":L("Examples","उदाहरण"),"items":[
     L("Microsoft Excel","Microsoft Excel"),L("LibreOffice Calc","LibreOffice Calc"),L("Google Sheets","Google Sheets")]},
   {"type":"sub","title":L("Already learned in Class 6","कक्षा 6 में सीखा जा चुका"),"items":[
     L("Creating a spreadsheet and inserting data.","स्प्रेडशीट बनाकर डेटा भरना।"),
     L("Inserting and deleting rows and columns.","पंक्तियाँ/स्तंभ जोड़ना-हटाना।"),
     L("Using min, max, sum, count and average functions.","min, max, sum, count, average फ़ंक्शन।")]}
 ]},
 {"id":"charts","title":L("Graphs and Charts","ग्राफ़ और चार्ट"),"blocks":[
   {"type":"definition","en":"Data in its raw form cannot convey much information. Charts and graphs represent data visually so it becomes easy to understand.","hi":"डेटा अपने मूल स्वरूप में अधिक जानकारी नहीं देता। चार्ट और ग्राफ़ डेटा को दृश्य रूप में दिखाकर समझना आसान कर देते हैं।"},
   {"type":"num","title":L("Types of Charts (from data)","चार्ट के प्रकार (डेटा से)"),"items":[
     {"t":L("Line Chart","लाइन चार्ट"),"d":L("Shows changes and trends over time, e.g. temperature across a week.","समय के साथ बदलाव दिखाता है, जैसे सप्ताह भर का तापमान।")},
     {"t":L("Bar Chart","बार चार्ट"),"d":L("Compares values side by side, e.g. marks of different students.","मानों की तुलना करता है, जैसे छात्रों के अंक।")},
     {"t":L("Pie Chart","पाई चार्ट"),"d":L("Shows how parts make up a whole, e.g. how you spend your day.","कुल के हिस्से दिखाता है, जैसे दिन में समय का विभाजन।")}]}
 ]},
 {"id":"sorting-filtering","title":L("Sorting and Filtering","सॉर्टिंग और फ़िल्टरिंग"),"blocks":[
   {"type":"num","items":[
     {"t":L("Sorting","सॉर्टिंग"),"d":L("Arranges data in an order - ascending (small to large, A to Z) or descending (large to small, Z to A) - making it easier to read and compare.","डेटा को क्रम में लगाती है - बढ़ते (छोटे से बड़े) या घटते (बड़े से छोटे) - पढ़ना-तुलना आसान हो जाता है।")},
     {"t":L("Filtering","फ़िल्टरिंग"),"d":L("Shows only the rows that match a condition and hides the rest - useful with large tables.","शर्त से मेल खाती पंक्तियाँ दिखाकर बाकी छिपा देती है - बड़ी तालिकाओं में उपयोगी।")}]}
 ]},
 {"id":"logical-functions","title":L("Logical Functions","लॉजिकल फ़ंक्शन"),"blocks":[
   {"type":"num","items":[
     {"t":L("IF","IF"),"d":L("Returns one result when a condition is true and another when it is false, e.g. IF(marks>=40, \"Pass\", \"Fail\").","शर्त सत्य हो तो एक परिणाम, असत्य पर दूसरा - जैसे IF(marks>=40, \"Pass\", \"Fail\")।")},
     {"t":L("SUMIF","SUMIF"),"d":L("Adds only the values that meet the given condition.","केवल शर्त पूरी करने वाले मानों का योग करता है।")},
     {"t":L("COUNTIF","COUNTIF"),"d":L("Counts only the cells that meet the given condition.","केवल शर्त पूरी करने वाली सेलों की गिनती करता है।")}]},
   {"type":"remember","en":"Charts turn numbers into pictures - choose the chart type based on what you want to show.","hi":"चार्ट संख्याओं को चित्र बना देते हैं - जो दिखाना है उसके अनुसार चार्ट चुनें।"}
 ]},
]
qr = [
 L("Chart: a visual representation of data.","चार्ट: डेटा का दृश्य रूप।"),
 L("Line Chart: shows trends over time.","Line Chart: समय के साथ बदलाव।"),
 L("Bar Chart: compares values.","Bar Chart: मानों की तुलना।"),
 L("Pie Chart: shows parts of a whole.","Pie Chart: कुल के हिस्से।"),
 L("Sorting: arranging data in order.","सॉर्टिंग: डेटा को क्रम में लगाना।"),
 L("Filtering: showing only matching rows.","फ़िल्टरिंग: केवल मेल खाती पंक्तियाँ दिखाना।"),
 L("IF/SUMIF/COUNTIF: condition-based functions.","IF/SUMIF/COUNTIF: शर्त-आधारित फ़ंक्शन।"),
]
rewrite("class8/ch1.json", s, qr,
  L("Spreadsheets organise data, charts explain it visually, and logical functions help the computer take decisions for us.","स्प्रेडशीट डेटा व्यवस्थित करती है, चार्ट उसे दृश्य रूप में समझाते हैं, और लॉजिकल फ़ंक्शन कंप्यूटर से हमारे लिए निर्णय ले सकते हैं।"))

# ---------------- class8/ch2 Learn to Code-03 ----------------
s = [
 {"id":"apps","title":L("Types of Apps","ऐप्स के प्रकार"),"blocks":[
   {"type":"definition","en":"Mobile apps are programs that run on smartphones. They are grouped into different types based on their purpose.","hi":"मोबाइल ऐप्स स्मार्टफ़ोन पर चलने वाले प्रोग्राम हैं। उद्देश्य के आधार पर इन्हें प्रकारों में बाँटा जाता है।"},
   {"type":"points","items":[
     L("Games - for entertainment.","गेम - मनोरंजन हेतु।"),
     L("Educational apps - for learning.","शैक्षिक ऐप - सीखने हेतु।"),
     L("Social media apps - for communication and sharing.","सोशल मीडिया ऐप - संवाद व साझा करने हेतु।"),
     L("Shopping apps - for online buying.","शॉपिंग ऐप - ऑनलाइन खरीद हेतु।"),
     L("Utility apps - for daily tasks like torch, calculator.","यूटिलिटी ऐप - टॉर्च, कैलकुलेटर जैसे दैनिक कार्य।")]}
 ]},
 {"id":"app-inventor","title":L("MIT App Inventor","MIT App Inventor"),"blocks":[
   {"type":"definition","en":"MIT App Inventor is a block-based tool for building Android apps - available online or as an offline version. Instead of typing code, you snap puzzle-like blocks together.","hi":"MIT App Inventor Android ऐप बनाने का ब्लॉक-आधारित टूल है - ऑनलाइन या ऑफ़लाइन उपलब्ध। कोड टाइप करने के बजाय पहेली जैसे ब्लॉक जोड़े जाते हैं।"},
   {"type":"points","items":[
     L("Design your app's screens in the Designer.","Designer में ऐप की स्क्रीन डिज़ाइन करें।"),
     L("Define the behaviour using Blocks.","Blocks से ऐप का व्यवहार तय करें।")]}
 ]},
 {"id":"components","title":L("App Design Components","ऐप डिज़ाइन कंपोनेंट्स"),"blocks":[
   {"type":"num","items":[
     {"t":L("Layout","Layout"),"d":L("Arranges elements neatly on the screen.","स्क्रीन पर तत्वों को सुव्यवस्थित रखता है।")},
     {"t":L("Label","Label"),"d":L("Shows text to the user.","उपयोगकर्ता को टेक्स्ट दिखाता है।")},
     {"t":L("Textbox","Textbox"),"d":L("Lets the user type input.","उपयोगकर्ता टाइप कर सकता है।")},
     {"t":L("Button","Button"),"d":L("Performs an action when tapped.","टैप करने पर क्रिया करता है।")},
     {"t":L("Media","Media"),"d":L("Adds images and sounds to the app.","ऐप में चित्र/ध्वनि जोड़ता है।")}]}
 ]},
 {"id":"testing-apk","title":L("Testing and Launching the App","ऐप परखना और लॉन्च करना"),"blocks":[
   {"type":"points","items":[
     L("Test the app on an Android mobile or a Mobile Emulator (offline emulator can be downloaded).","ऐप को Android मोबाइल या Mobile Emulator (ऑफ़लाइन एमुलेटर डाउनलोड करके) पर परखें।"),
     L("Fix any problems found during testing.","परीक्षण में मिली समस्याएँ सुधारें।"),
     L("Export the finished app as an .apk file.","तैयार ऐप को .apk फ़ाइल के रूप में निकालें।"),
     L("Install the .apk on a mobile to launch the app.","मोबाइल में .apk इंस्टॉल करके ऐप लॉन्च करें।")]},
   {"type":"remember","en":"Always test your app before sharing it - testing finds problems while they are still easy to fix.","hi":"साझा करने से पहले ऐप सदैव परखें - परीक्षण से समस्याएँ जल्दी पकड़ी जाती हैं।"}
 ]},
]
qr = [
 L("App: a program that runs on a mobile.","ऐप: मोबाइल पर चलने वाला प्रोग्राम।"),
 L("MIT App Inventor: block-based Android app builder.","MIT App Inventor: ब्लॉक-आधारित Android ऐप बिल्डर।"),
 L("Emulator: software that imitates a mobile for testing.","एमुलेटर: परीक्षण हेतु मोबाइल का अनुकरण।"),
 L(".apk: the Android app file to install.",".apk: इंस्टॉल हेतु Android ऐप फ़ाइल।"),
 L("Components: building blocks like Layout, Label, Button.","कंपोनेंट्स: Layout, Label, Button जैसे भवन-खंड।"),
]
rewrite("class8/ch2.json", s, qr,
  L("With MIT App Inventor, anyone can design, build and launch a working Android app - design the screen, snap the blocks, test, and export the .apk.","MIT App Inventor से कोई भी Android ऐप बना सकता है - स्क्रीन डिज़ाइन करें, ब्लॉक जोड़ें, परखें और .apk निकालें।"))

# ---------------- class8/ch3 Digital Communication Skills ----------------
s = [
 {"id":"email","title":L("Email - Fast Formal Communication","ईमेल - तेज़ औपचारिक संवाद"),"blocks":[
   {"type":"definition","en":"Email (electronic mail) is the fastest and most professional way to send a written message instantly in the digital age.","hi":"ईमेल (इलेक्ट्रॉनिक डाक) डिजिटल युग में लिखित संदेश तुरंत भेजने का सबसे तेज़ और professional तरीका है।"},
   {"type":"points","items":[
     L("Formal communication needs a written record.","औपचारिक संचार को लिखित रिकॉर्ड चाहिए।"),
     L("Letters take a long time; email is instant.","पत्रों में समय लगता है; ईमेल तुरंत पहुँचता है।"),
     L("Every email address contains the @ symbol.","हर ईमेल पते में @ प्रतीक होता है।")]}
 ]},
 {"id":"email-parts","title":L("Parts of an Email","ईमेल के भाग"),"blocks":[
   {"type":"table","head":[L("Part","भाग"),L("What it contains","क्या लिखा जाता है")],"rows":[
     [L("To","To"),L("Address of the person receiving the message.","जिसे संदेश भेजना है उसका पता।")],
     [L("CC","CC"),L("Copy of the email to additional people.","अन्य लोगों को प्रतिलिपि।")],
     [L("Subject","Subject"),L("Clear, brief topic of the email.","ईमेल का स्पष्ट, संक्षिप्त विषय।")],
     [L("Body","Body"),L("The main message.","मुख्य संदेश।")]]},
 ]},
 {"id":"professional","title":L("Writing a Professional Email","Professional ईमेल लिखना"),"blocks":[
   {"type":"points","items":[
     L("Write a clear subject line.","स्पष्ट Subject लिखें।"),
     L("Start with a polite greeting.","विनम्र अभिवादन से शुरू करें।"),
     L("Keep the message short and clear.","संदेश संक्षिप्त और स्पष्ट रखें।"),
     L("End with a proper closing and your name.","उचित समापन और अपने नाम के साथ समाप्त करें।"),
     L("Avoid spelling mistakes and writing in ALL CAPS.","वर्तनी गलतियों और ALL CAPS से बचें।")]},
   {"type":"remember","en":"An email is a written record - write it as carefully as a letter that can be read again anytime.","hi":"ईमेल लिखित रिकॉर्ड है - उसे ऐसे पत्र की तरह लिखें जो कभी भी दोबारा पढ़ा जा सकता है।"}
 ]},
 {"id":"meetings","title":L("Online Meeting Etiquette","ऑनलाइन मीटिंग शिष्टाचार"),"blocks":[
   {"type":"points","items":[
     L("Join the meeting using the link or code.","लिंक/कोड से मीटिंग में जुड़ें।"),
     L("Mute your microphone when you are not speaking.","बोलते समय के अलावा माइक म्यूट रखें।"),
     L("Use Present/Screen Share to show your screen (e.g. in Google Meet).","अपनी स्क्रीन दिखाने के लिए Present/Screen Share का उपयोग करें (जैसे Google Meet में)।"),
     L("Leave the meeting politely when it is over.","मीटिंग समाप्त होने पर विनम्रता से निकलें।")]}
 ]},
]
qr = [
 L("Email: instant written communication.","ईमेल: तुरंत लिखित संवाद।"),
 L("To: receiver's address.","To: प्राप्तकर्ता का पता।"),
 L("CC: copy to additional people.","CC: अन्य लोगों को प्रतिलिपि।"),
 L("Subject: the email's topic.","Subject: ईमेल का विषय।"),
 L("Body: the main message.","Body: मुख्य संदेश।"),
 L("Google Meet: online meeting tool.","Google Meet: ऑनलाइन मीटिंग उपकरण।"),
 L("Screen Share: showing your screen to others.","स्क्रीन शेयर: अपनी स्क्रीन दूसरों को दिखाना।"),
]
rewrite("class8/ch3.json", s, qr,
  L("Email for instant written communication and well-mannered online meetings are the two key digital communication skills of today's world.","तुरंत लिखित संवाद के लिए ईमेल और शिष्टाचार-पूर्ण ऑनलाइन मीटिंग - ये आज के डिजिटल संचार के दो प्रमुख कौशल हैं।"))

# ---------------- class8/ch5 AI ----------------
s = [
 {"id":"intelligence","title":L("Natural vs Artificial Intelligence","नैसर्गिक बनाम कृत्रिम बुद्धिमत्ता"),"blocks":[
   {"type":"num","items":[
     {"t":L("Natural Intelligence","नैसर्गिक बुद्धिमत्ता"),"d":L("The intelligence nature gives to living beings - a child learns speaking by observing activities around them.","प्रकृति द्वारा जीवों को दी गई बुद्धि - बच्चा आसपास देखकर बोलना सीखता है।")},
     {"t":L("Artificial Intelligence (AI)","कृत्रिम बुद्धिमत्ता (AI)"),"d":L("The intelligence built into apps and devices - an artificial way of giving machines the ability to think and learn like humans.","ऐप्स/उपकरणों में बनी बुद्धि - मशीनों को इंसान जैसी सोच-सीख देने का कृत्रिम तरीका।")}]},
   {"type":"remember","en":"Machines cannot truly think like humans - they are trained. They learn from the data and patterns around them.","hi":"मशीनें इंसान की तरह सच में नहीं सोचतीं - उन्हें train किया जाता है। वे आसपास के डेटा और पैटर्न से सीखती हैं।"}
 ]},
 {"id":"machine-learning","title":L("How Machines Learn","मशीनें कैसे सीखती हैं"),"blocks":[
   {"type":"definition","en":"Like humans learn from experience, AI learns from data. Machines are trained with data and patterns, similar to how small children are taught.","hi":"जैसे हम अनुभव से सीखते हैं, AI डेटा से सीखता है। मशीनों को डेटा-पैटर्न से train किया जाता है, जैसे छोटे बच्चों को सिखाया जाता है।"},
   {"type":"sub","title":L("Example: Google Maps","उदाहरण: Google Maps"),"items":[
     L("Learns constantly from real-time location data of lakhs of phones.","लाखों फ़ोनों के real-time location डेटा से लगातार सीखता है।"),
     L("Uses old traffic information and road conditions.","पुरानी ट्रैफ़िक जानकारी और सड़क स्थिति का उपयोग करता है।"),
     L("Predicts which route has less traffic and shows the fastest path.","अनुमान लगाकर सबसे तेज़ रास्ता बताता है।")]}
 ]},
 {"id":"domains","title":L("Domains of AI","AI के डोमेन"),"blocks":[
   {"type":"num","items":[
     {"t":L("1. Data Science","1. Data Science"),"d":L("The science of analysing data to extract information - e.g. analysing India's Olympic medals to understand performance.","डेटा विश्लेषण कर जानकारी निकालने का विज्ञान - जैसे ओलंपिक पदकों का विश्लेषण।")},
     {"t":L("2. Computer Vision","2. Computer Vision"),"d":L("AI domain where computers see and understand images - face filters, tracking, Amazon Go store checkout.","कंप्यूटर चित्र देख-समझता है - फेस फ़िल्टर, ट्रैकिंग, Amazon Go चेकआउट।")},
     {"t":L("3. Natural Language Processing (NLP)","3. NLP"),"d":L("Helps computers understand human language - Siri, Alexa, Cortana, voice search, converting handwriting to editable text.","कंप्यूटर को मानव भाषा समझने देता है - Siri/Alexa, वॉइस सर्च, हस्तलेखन से editable text।")}]}
 ]},
 {"id":"ethics-sdg","title":L("AI Ethics, Bias and SDGs","AI नैतिकता, पूर्वाग्रह और SDG"),"blocks":[
   {"type":"points","items":[
     L("AI should be used ethically and fairly.","AI का उपयोग नैतिक व निष्पक्ष रूप से होना चाहिए।"),
     L("If the training data is unfair, AI can show bias - its decisions must be checked.","अनुचित डेटा से AI में पूर्वाग्रह आ सकता है - निर्णय जाँचे जाएँ।"),
     L("SDGs (Sustainable Development Goals) are global goals for a better world.","SDG बेहतर दुनिया के वैश्विक लक्ष्य हैं।"),
     L("Used responsibly, AI can positively affect health, education and environment goals.","ज़िम्मेदारी से उपयोग पर AI स्वास्थ्य, शिक्षा, पर्यावरण लक्ष्यों में सहायक है।")]}
 ]},
]
qr = [
 L("AI: giving machines the ability to think and learn like humans.","AI: मशीनों को इंसान जैसी सोच-सीख देना।"),
 L("Natural Intelligence: nature-given intelligence of living beings.","नैसर्गिक बुद्धि: प्रकृति-प्रदत्त बुद्धि।"),
 L("Machine Learning: machines learning from data and patterns.","Machine Learning: डेटा-पैटर्न से सीखना।"),
 L("Data Science: extracting information by analysing data.","Data Science: डेटा विश्लेषण से जानकारी।"),
 L("Computer Vision: computers understanding images.","Computer Vision: चित्र समझना।"),
 L("NLP: computers understanding human language.","NLP: मानव भाषा समझना।"),
 L("Bias: unfairness entering AI through unfair data.","Bias: अनुचित डेटा से आया पूर्वाग्रह।"),
 L("SDG: Sustainable Development Goals.","SDG: सस्टेनेबल डेवलपमेंट गोल्स।"),
]
rewrite("class8/ch5.json", s, qr,
  L("AI learns from data like we learn from experience - used ethically, it can help build a better, more sustainable world.","AI डेटा से सीखती है जैसे हम अनुभव से - नैतिक उपयोग से यह बेहतर, टिकाऊ दुनिया बनाने में सहायक है।"))
