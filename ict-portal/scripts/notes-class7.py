#!/usr/bin/env python3
"""Rewrite class7 ch1-ch5 into structured study-notes blocks."""
from _noteslib import L, rewrite

# ---------------- class7/ch1 Presentation Tool ----------------
s = [
 {"id":"presentation","title":L("Presentation and Slides","प्रेजेंटेशन और स्लाइड्स"),"blocks":[
   {"type":"definition","en":"A presentation is made of several pages, and each page is called a Slide. Every slide gives information about one topic of the presentation's subject.","hi":"प्रेजेंटेशन कई पेजों से बना होता है, हर पेज स्लाइड कहलाता है। प्रत्येक स्लाइड विषय के किसी एक टॉपिक की जानकारी देती है।"},
   {"type":"sub","title":L("Uses of Presentations","प्रेजेंटेशन के उपयोग"),"items":[
     L("Business meetings.","व्यापार मीटिंग।"),
     L("Training sessions.","प्रशिक्षण सत्र।"),
     L("Educational purposes - like the class zoo-trip photo story.","शैक्षिक उद्देश्य - जैसे चिड़ियाघर यात्रा की फ़ोटो-कहानी।")]},
 ]},
 {"id":"impress","title":L("OpenOffice Impress","OpenOffice Impress"),"blocks":[
   {"type":"definition","en":"Impress is the presentation tool of the Apache OpenOffice software suite.","hi":"Impress, Apache OpenOffice software suite का प्रेजेंटेशन टूल है।"},
   {"type":"num","title":L("Opening Impress","Impress खोलना"),"items":[
     {"t":L("Step 1","चरण 1"),"d":L("Type 'OpenOffice' in the Windows search bar.","Windows सर्च बार में 'OpenOffice' टाइप करें।")},
     {"t":L("Step 2","चरण 2"),"d":L("Open the OpenOffice suite (downloaded in Class 6).","OpenOffice suite खोलें (कक्षा 6 में डाउनलोड सीखा था)।")},
     {"t":L("Step 3","चरण 3"),"d":L("Choose Presentation and start making slides.","Presentation चुनकर स्लाइड बनाना शुरू करें।")}]}
 ]},
 {"id":"enhancing","title":L("Enhancing Slides","स्लाइडें सुंदर बनाना"),"blocks":[
   {"type":"num","items":[
     {"t":L("Formatting","फ़ॉर्मेटिंग"),"d":L("Improve text look - fonts, colours, layout.","टेक्स्ट की सुंदरता - फ़ॉन्ट, रंग, लेआउट।")},
     {"t":L("Images","चित्र"),"d":L("Add pictures to make slides attractive.","स्लाइडें आकर्षक बनाने हेतु चित्र जोड़ें।")},
     {"t":L("Sound","ध्वनि"),"d":L("Insert audio into slides.","स्लाइडों में ध्वनि जोड़ें।")},
     {"t":L("Animation","एनीमेशन"),"d":L("Adds movement effects to objects on a slide.","स्लाइड की वस्तुओं में गति का प्रभाव।")},
     {"t":L("Slide Transition","स्लाइड ट्रांज़िशन"),"d":L("The effect applied when moving from one slide to the next.","एक स्लाइड से अगली पर जाते समय का प्रभाव।")}]},
 ]},
 {"id":"ai-chatbox","title":L("Using an AI Chatbox","AI चैटबॉक्स का उपयोग"),"blocks":[
   {"type":"definition","en":"An AI chatbox can help gather information and ideas for presentation content.","hi":"प्रेजेंटेशन सामग्री के लिए AI चैटबॉक्स जानकारी/विचार इकट्ठा करने में मदद कर सकता है।"},
   {"type":"remember","en":"Always verify AI-provided facts from reliable sources before using them in your presentation.","hi":"प्रेजेंटेशन में लाने से पहले AI से मिले तथ्य विश्वसनीय स्रोतों से अवश्य जाँचें।"}
 ]},
]
qr = [
 L("Slide: one page of a presentation.","स्लाइड: प्रेजेंटेशन का एक पेज।"),
 L("Impress: OpenOffice's presentation tool.","Impress: OpenOffice का प्रेजेंटेशन टूल।"),
 L("Animation: movement effect on slide objects.","एनीमेशन: स्लाइड वस्तुओं की गति।"),
 L("Slide Transition: effect between slides.","स्लाइड ट्रांज़िशन: स्लाइडों के बीच प्रभाव।"),
 L("AI Chatbox: tool to gather information by asking.","AI चैटबॉक्स: पूछकर जानकारी पाने का उपकरण।"),
]
rewrite("class7/ch1.json", s, qr,
  L("With Impress you can turn any story - like a zoo trip - into a colourful presentation with images, sound, animation and transitions.","Impress से कोई भी कहानी - जैसे चिड़ियाघर यात्रा - चित्रों, ध्वनि, एनीमेशन और ट्रांज़िशन के साथ रंग-बिरंगी प्रेजेंटेशन बन सकती है।"))

# ---------------- class7/ch2 Learn to Code-02 ----------------
s = [
 {"id":"problem-solving","title":L("Problem Solving Approach","समस्या-समाधान दृष्टिकोण"),"blocks":[
   {"type":"definition","en":"Problem solving means understanding the goal, planning a solution and testing it - often by breaking a big task into smaller steps.","hi":"समस्या-समाधान का अर्थ है लक्ष्य समझना, समाधान की योजना बनाना और परखना - अक्सर बड़े कार्य को छोटे चरणों में तोड़कर।"},
   {"type":"num","title":L("Steps","चरण"),"items":[
     {"t":L("Understand","समझो"),"d":L("What exactly is the problem?","समस्या ठीक क्या है?")},
     {"t":L("Plan","योजना बनाओ"),"d":L("Break the task into steps.","कार्य को चरणों में तोड़ें।")},
     {"t":L("Test","परखो"),"d":L("Run and check; debug errors.","चलाकर जाँचें; त्रुटियाँ सुधारें।")}]}
 ]},
 {"id":"decisions","title":L("Decision Making in Programs","प्रोग्राम में निर्णय लेना"),"blocks":[
   {"type":"definition","en":"Programs often need to make decisions: 'if something is true, do this, otherwise do that'.","hi":"प्रोग्रामों को अक्सर निर्णय लेने होते हैं: 'अगर कुछ सत्य है तो यह करो, अन्यथा वह करो'।"},
   {"type":"points","items":[
     L("A condition is a check that is either true or false.","शर्त एक जाँच है जो सत्य या असत्य होती है।"),
     L("if block - runs the inside blocks only when the condition is true.","if ब्लॉक - शर्त सत्य होने पर ही अंदर के ब्लॉक चलाता है।"),
     L("if-else block - one path when true, another when false.","if-else ब्लॉक - सत्य पर एक पथ, असत्य पर दूसरा।")]}
 ]},
 {"id":"loops","title":L("Loops","लूप्स"),"blocks":[
   {"type":"definition","en":"Loops repeat actions without writing the same blocks again and again.","hi":"लूप्स वही ब्लॉक बार-बार लिखे बिना क्रियाएँ दोहराने देते हैं।"},
   {"type":"num","items":[
     {"t":L("repeat n","repeat n"),"d":L("Repeats the inside blocks n times.","अंदर के ब्लॉक n बार दोहराता है।")},
     {"t":L("repeat until","repeat until"),"d":L("Repeats until the condition becomes true.","शर्त सत्य होने तक दोहराता है।")},
     {"t":L("forever","forever"),"d":L("Repeats until the program is stopped.","प्रोग्राम रोकने तक दोहराता है।")}]},
   {"type":"remember","en":"Games use loops because actions repeat every frame - the same blocks run again and again.","hi":"खेल लूप्स उपयोग करते हैं क्योंकि क्रियाएँ हर फ़्रेम दोहराई जाती हैं - वही ब्लॉक बार-बार चलते हैं।"}
 ]},
 {"id":"scratch","title":L("Building with Scratch 3.0","Scratch 3.0 से निर्माण"),"blocks":[
   {"type":"definition","en":"Scratch is a block-based coding tool: the sprite (character) acts on the stage, and puzzle-like blocks snap together to give it instructions.","hi":"Scratch ब्लॉक-आधारित कोडिंग टूल है: स्प्राइट (पात्र) स्टेज पर कार्य करता है और पहेली जैसे ब्लॉक जुड़कर उसे अनुदेश देते हैं।"},
   {"type":"points","items":[
     L("Combine decision blocks and loops to build animated stories and simple games.","निर्णय ब्लॉकों और लूप्स को मिलाकर एनिमेटेड कहानियाँ व सरल गेम बनाएँ।"),
     L("Debugging means finding and fixing errors in your program.","डीबगिंग अर्थात प्रोग्राम की त्रुटियाँ ढूँढ़कर सुधारना।"),
     L("Test your program step by step.","अपना प्रोग्राम चरण-दर-चरण परखें।")]}
 ]},
]
qr = [
 L("Sprite: the character that acts in Scratch.","स्प्राइट: Scratch में कार्य करने वाला पात्र।"),
 L("Condition: a true/false check.","शर्त: सत्य/असत्य जाँच।"),
 L("Loop: repeating actions without rewriting blocks.","लूप: ब्लॉक दोहराए बिना क्रियाओं का दोहराव।"),
 L("if-else: choosing between two paths.","if-else: दो पथों में चुनाव।"),
 L("Debugging: finding and fixing errors.","डीबगिंग: त्रुटियाँ ढूँढ़कर सुधारना।"),
]
rewrite("class7/ch2.json", s, qr,
  L("Understand the problem, plan with decisions and loops, then test and debug - that is how every good program is built.","समस्या समझें, निर्णयों-लूपों से योजना बनाएँ, फिर परखें-सुधारें - इसी तरह हर अच्छा प्रोग्राम बनता है।"))

# ---------------- class7/ch3 Website Designing ----------------
s = [
 {"id":"what-is-website","title":L("What is a Website?","वेबसाइट क्या है?"),"blocks":[
   {"type":"definition","en":"A website is like a window for any organisation, school, place or project - it displays all the information at one place, reachable with the click of a button.","hi":"वेबसाइट किसी संस्था, स्कूल, जगह या परियोजना का झरोखा है - एक बटन के क्लिक पर सारी जानकारी एक ही स्थान पर।"},
   {"type":"sub","title":L("Examples","उदाहरण"),"items":[
     L("A company's site shows its products, people and address.","कंपनी की साइट उत्पाद, लोग और पता दिखाती है।"),
     L("A school or a social science project site.","स्कूल या सोशल साइंस प्रोजेक्ट की साइट।")]}
 ]},
 {"id":"building","title":L("Building a Website Online","ऑनलाइन वेबसाइट बनाना"),"blocks":[
   {"type":"points","items":[
     L("Use an online website builder - no coding needed.","ऑनलाइन वेबसाइट बिल्डर उपयोग करें - कोडिंग की ज़रूरत नहीं।"),
     L("Add pages, text, images and links.","पेज, टेक्स्ट, चित्र, लिंक जोड़ें।")]}
 ]},
 {"id":"customisation","title":L("Headers, Themes and Templates","हेडर, थीम और टेम्पलेट"),"blocks":[
   {"type":"num","items":[
     {"t":L("Header type","हेडर टाइप"),"d":L("Hover over the background image, click header type and choose Large Banner, Banner or Title Only.","बैकग्राउंड इमेज पर hover कर हेडर टाइप पर क्लिक कर Large Banner/Banner/Title Only चुनें।")},
     {"t":L("Theme and colours","थीम और रंग"),"d":L("Click Themes in the top-right corner and pick colours.","top-right कोने में Themes पर क्लिक कर रंग चुनें।")},
     {"t":L("Font style","फ़ॉन्ट स्टाइल"),"d":L("Click font style and select a design separately.","font style पर क्लिक कर अलग से चुनें।")},
     {"t":L("Templates","टेम्पलेट"),"d":L("Ready-made designs - scroll down to see available templates.","रेडी-मेड डिज़ाइन - नीचे scroll करके टेम्पलेट देखें।")}]},
 ]},
 {"id":"publish","title":L("Publishing and Sharing","प्रकाशित करना और साझा करना"),"blocks":[
   {"type":"points","items":[
     L("Preview your design before publishing.","प्रकाशन से पहले पूर्वावलोकन करें।"),
     L("Publish to make the site live.","प्रकाशित करके साइट लाइव करें।"),
     L("Share the link - anyone, anywhere can view it.","लिंक साझा करें - कोई भी, कहीं से भी देख सकता है।")]},
   {"type":"remember","en":"A website is your project's window to the world - check every page before you publish.","hi":"वेबसाइट आपकी परियोजना की दुनिया के सामने झरोखा है - प्रकाशन से पहले हर पेज जाँचें।"}
 ]},
]
qr = [
 L("Website: online pages showing information about an organisation.","वेबसाइट: संस्था की जानकारी दिखाने वाले ऑनलाइन पेज।"),
 L("Header: the top part of a page.","हेडर: पेज का शीर्ष भाग।"),
 L("Theme: set of colours and design.","थीम: रंग व डिज़ाइन का सेट।"),
 L("Template: ready-made design.","टेम्पलेट: रेडी-मेड डिज़ाइन।"),
 L("Publish: making the site available via link.","Publish: लिंक द्वारा साइट उपलब्ध कराना।"),
]
rewrite("class7/ch3.json", s, qr,
  L("Design → customise → preview → publish → share: that is how your project website reaches the world.","डिज़ाइन → सज्जित करें → पूर्वावलोकन → प्रकाशित → साझा करें - इसी तरह आपकी परियोजना-वेबसाइट दुनिया तक पहुँचती है।"))

# ---------------- class7/ch4 Digital Wellbeing ----------------
s = [
 {"id":"wellbeing","title":L("What is Digital Wellbeing?","डिजिटल वेलबीइंग क्या है?"),"blocks":[
   {"type":"definition","en":"Digital Wellbeing is a term used to describe the impact of technology and digital services on people's mental, physical, social and emotional health.","hi":"डिजिटल वेलबीइंग वह शब्द है जो टेक्नोलॉजी और डिजिटल सेवाओं का मानसिक, शारीरिक, सामाजिक व भावनात्मक स्वास्थ्य पर प्रभाव बताता है।"},
   {"type":"points","items":[
     L("Spending too much time online affects our health.","बहुत अधिक समय ऑनलाइन बिताना स्वास्थ्य पर असर डालता है।"),
     L("The virtual world influences our thoughts and behaviour.","वर्चुअल दुनिया हमारे विचार-व्यवहार को प्रभावित करती है।"),
     L("We must learn what is right and what is not right on the internet.","हमें सीखना चाहिए कि इंटरनेट पर क्या सही है, क्या नहीं।")]}
 ]},
 {"id":"ethics","title":L("Good Behaviour and Cyber Ethics","अच्छा व्यवहार और साइबर नैतिकता"),"blocks":[
   {"type":"definition","en":"Cyber ethics means behaving well online - the behaviour we show in real life should also be shown in our online life.","hi":"साइबर नैतिकता अर्थात ऑनलाइन अच्छा व्यवहार - असल जीवन जैसा ही व्यवहार ऑनलाइन भी।"},
   {"type":"points","items":[
     L("A joke that hurts someone is not a joke - it can become cyberbullying.","दुख पहुँचाने वाला मज़ाक मज़ाक नहीं - वह साइबर बुलिंग बन सकता है।"),
     L("Creating fake profiles is punishable by law in India.","भारत में फर्ज़ी प्रोफ़ाइल बनाना क़ानूनन दंडनीय है।"),
     L("If cyberbullied: tell trusted adults and report - never bully back.","साइबर बुली होने पर: भरोसेमंद बड़ों को बताएँ-रिपोर्ट करें, बदले में न करें।")]}
 ]},
 {"id":"detox","title":L("Digital Detoxification","डिजिटल डिटॉक्सिफिकेशन"),"blocks":[
   {"type":"definition","en":"Digital Detoxification means taking a deliberate break from digital devices and online activities.","hi":"डिजिटल डिटॉक्सिफिकेशन अर्थात डिजिटल उपकरणों व ऑनलाइन गतिविधियों से जानबूझकर ब्रेक लेना।"},
   {"type":"points","items":[
     L("Helps restore focus, sleep and healthy habits.","फोकस, नींद व स्वस्थ आदतें बहाल करता है।"),
     L("Needed when internet use starts controlling our life.","जब इंटरनेट जीवन नियंत्रित करने लगे तो ज़रूरी।")]}
 ]},
 {"id":"copyright","title":L("Copyright, Plagiarism and Reporting","कॉपीराइट, प्लेजियरिज़्म और रिपोर्टिंग"),"blocks":[
   {"type":"num","items":[
     {"t":L("Copyright","कॉपीराइट"),"d":L("Protects the creator's rights over their work.","रचनाकार के अधिकारों की रक्षा करता है।")},
     {"t":L("Plagiarism","प्लेजियरिज़्म"),"d":L("Copying someone's work without giving credit.","श्रेय दिए बिना किसी का काम कॉपी करना।")},
     {"t":L("Reporting","रिपोर्टिंग"),"d":L("Report cyber crimes at the cyber crime portal: cybercrime.gov.in","साइबर अपराध साइबर क्राइम पोर्टल cybercrime.gov.in पर रिपोर्ट करें।")}]},
   {"type":"remember","en":"Before sharing any news on a virtual platform, verify it first.","hi":"किसी भी समाचार को वर्चुअल प्लेटफ़ॉर्म पर साझा करने से पहले उसे जाँचें।"}
 ]},
]
qr = [
 L("Digital Wellbeing: impact of technology on our health.","डिजिटल वेलबीइंग: तकनीक का स्वास्थ्य पर प्रभाव।"),
 L("Cyber Ethics: good behaviour online.","साइबर नैतिकता: ऑनलाइन अच्छा व्यवहार।"),
 L("Cyberbullying: harassment using digital platforms.","साइबर बुलिंग: डिजिटल माध्यम से उत्पीड़न।"),
 L("Digital Detox: deliberate break from devices.","डिजिटल डिटॉक्स: उपकरणों से जानबूझकर ब्रेक।"),
 L("Copyright: creator's rights over their work.","कॉपीराइट: रचनाकार के अधिकार।"),
 L("Plagiarism: copying without credit.","प्लेजियरिज़्म: बिना श्रेय कॉपी करना।"),
]
rewrite("class7/ch4.json", s, qr,
  L("Balance your online and offline life, behave ethically online, and take a digital detox when screens start controlling you.","ऑनलाइन-ऑफ़लाइन जीवन संतुलित रखें, ऑनलाइन नैतिक रहें, और स्क्रीन नियंत्रित करने लगें तो डिजिटल डिटॉक्स लें।"))

# ---------------- class7/ch5 Software Applications ----------------
s = [
 {"id":"it-ict","title":L("IT vs ICT","IT बनाम ICT"),"blocks":[
   {"type":"num","items":[
     {"t":L("IT (Information Technology)","IT (सूचना प्रौद्योगिकी)"),"d":L("Use of computer networks, software and digital devices for managing information - focuses on the technical aspects of technology.","सूचना प्रबंधन हेतु नेटवर्क, सॉफ्टवेयर, उपकरणों का उपयोग - तकनीक के तकनीकी पहलू पर केंद्रित।")},
     {"t":L("ICT (Information & Communication Technology)","ICT (सूचना एवं संचार प्रौद्योगिकी)"),"d":L("How digital technology helps users handle information and solve problems - e.g. teaching a science chapter through a slide presentation, or making a science project as a website.","डिजिटल तकनीक उपयोगकर्ताओं की सूचना/समस्या-समाधान में कैसे मदद करे - जैसे स्लाइड्स से साइंस पाठ, वेबसाइट रूप में साइंस प्रोजेक्ट।")}]},
 ]},
 {"id":"geogebra","title":L("GeoGebra - Geometry Practice","GeoGebra - ज्यामिति अभ्यास"),"blocks":[
   {"type":"definition","en":"GeoGebra (https://www.geogebra.org/) is an online tool for practising geometrical shapes and angle construction - very helpful for the basic geometry chapter of the maths book.","hi":"GeoGebra (https://www.geogebra.org/) ज्यामितीय आकृतियों व angle construction के अभ्यास का ऑनलाइन टूल है - गणित की basic geometry के लिए बहुत सहायक।"},
   {"type":"num","title":L("Steps to construct a triangle","त्रिभुज बनाने के चरण"),"items":[
     {"t":L("Step 1","चरण 1"),"d":L("Go to https://www.geogebra.org/","साइट https://www.geogebra.org/ पर जाएँ।")},
     {"t":L("Step 2","चरण 2"),"d":L("Select Middle School resources.","Middle School resources चुनें।")},
     {"t":L("Step 3","चरण 3"),"d":L("Choose Geometry.","Geometry चुनें।")},
     {"t":L("Step 4","चरण 4"),"d":L("Use the given tools to construct a triangle on your computer.","दिए गए टूल्स से कंप्यूटर पर त्रिभुज बनाएँ।")}]}
 ]},
 {"id":"simulation","title":L("Simulations and PhET","सिमुलेशन और PhET"),"blocks":[
   {"type":"definition","en":"Imitating a real thing, process or activity by another method is called simulation - done through computer software. It helps us understand and visualise how a process behaves.","hi":"किसी वास्तविक चीज़, प्रक्रिया या कार्यकलाप का अनुकरण simulation कहलाता है - कंप्यूटर सॉफ्टवेयर द्वारा। इससे प्रक्रिया का व्यवहार समझ-देखा जा सकता है।"},
   {"type":"points","items":[
     L("Example: the class watched a greenhouse effect simulation.","उदाहरण: कक्षा ने ग्रीनहाउस इफ़ेक्ट का सिमुलेशन देखा।"),
     L("In PhET, simulations can be searched category-wise - grade-wise (class-wise) and subject-wise.","PhET में सिमुलेशन कैटेगरी वाइज़ - grade व subject अनुसार - खोजे जाते हैं।")]}
 ]},
 {"id":"multidisciplinary","title":L("Multidisciplinary Projects","बहुविषयक परियोजनाएँ"),"blocks":[
   {"type":"definition","en":"Using subject-specific software for lessons across subjects is a multidisciplinary approach. Students create an artefact - a made project - combining knowledge from multiple subjects using ICT tools.","hi":"विभिन्न विषयों के पाठों हेतु विषय-विशिष्ट सॉफ्टवेयर का उपयोग बहुविषयक दृष्टिकोण है। छात्र ICT टूल्स से कई विषयों के ज्ञान को जोड़ती artefact (बनाया प्रोजेक्ट) बनाते हैं।"},
   {"type":"sub","title":L("Examples","उदाहरण"),"items":[
     L("A science project on 'States of Matter' as a slide presentation.","'States of Matter' पर साइंस प्रोजेक्ट स्लाइड-प्रेजेंटेशन रूप में।"),
     L("The same project made as a website.","वही प्रोजेक्ट वेबसाइट रूप में।")]},
   {"type":"remember","en":"Learning an IT tool means knowing how to download it and use its parts and options; using it to understand lessons is ICT.","hi":"IT टूल सीखना अर्थात डाउनलोड व उसके भाग/विकल्प आना; पाठ समझने हेतु उपयोग ICT कहलाता है।"}
 ]},
]
qr = [
 L("IT: technology's technical side.","IT: तकनीक का तकनीकी पक्ष।"),
 L("ICT: technology helping users solve problems.","ICT: उपयोगकर्ता समस्या-समाधान हेतु तकनीक।"),
 L("GeoGebra: online geometry practice tool.","GeoGebra: ऑनलाइन ज्यामिति अभ्यास टूल।"),
 L("Simulation: imitating a real process digitally.","सिमुलेशन: वास्तविक प्रक्रिया का डिजिटल अनुकरण।"),
 L("PhET: online simulations platform.","PhET: ऑनलाइन सिमुलेशन प्लेटफ़ॉर्म।"),
 L("Artefact: a created project from learning.","Artefact: सीख से बनाया प्रोजेक्ट।"),
]
rewrite("class7/ch5.json", s, qr,
  L("IT gives us the tools; ICT shows us how to use them to learn every subject better.","IT हमें टूल्स देता है; ICT बताती है कि हर विषय को बेहतर सीखने के लिए उन्हें कैसे उपयोग करें।"))
