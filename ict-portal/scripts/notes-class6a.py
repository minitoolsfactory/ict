#!/usr/bin/env python3
"""Rewrite class6 ch1-ch3 into structured study-notes blocks."""
from _noteslib import L, rewrite

# ---------------- class6/ch1 ICT Environment ----------------
s = [
 {"id":"what-is-ict","title":L("What is ICT?","ICT क्या है?"),"blocks":[
   {"type":"definition","en":"ICT stands for Information and Communication Technology. It includes all technologies used to handle information and communicate.","hi":"ICT अर्थात सूचना एवं संचार प्रौद्योगिकी। इसमें सूचना संभालने और संवाद की सभी तकनीकें आती हैं।"},
   {"type":"sub","title":L("Examples","उदाहरण"),"items":[
     L("Computers and smartphones.","कंप्यूटर और स्मार्टफ़ोन।"),
     L("Internet, radio and television.","इंटरनेट, रेडियो और टेलीविज़न।"),
     L("Satellites and communication devices.","उपग्रह और संचार उपकरण।")]},
 ]},
 {"id":"computer-system","title":L("Computer System Components","कंप्यूटर सिस्टम के घटक"),"blocks":[
   {"type":"definition","en":"A computer system consists of hardware and software.","hi":"कंप्यूटर सिस्टम हार्डवेयर और सॉफ्टवेयर से मिलकर बना होता है।"},
   {"type":"sub","title":L("Hardware (physical parts)","हार्डवेयर (भौतिक भाग)"),"items":[
     L("CPU - the brain that processes data.","CPU - डेटा संसाधित करने वाला मस्तिष्क।"),
     L("Monitor, keyboard, mouse, printer, storage devices.","मॉनिटर, कीबोर्ड, माउस, प्रिंटर, स्टोरेज उपकरण।")]},
   {"type":"sub","title":L("Software (programs)","सॉफ्टवेयर (प्रोग्राम)"),"items":[
     L("Operating systems (e.g. Windows).","ऑपरेटिंग सिस्टम (जैसे Windows)।"),
     L("Application programs (e.g. word processor, games).","एप्लिकेशन प्रोग्राम (जैसे वर्ड प्रोसेसर, खेल)।")]},
 ]},
 {"id":"types","title":L("Types of Computers by Size","आकार अनुसार कंप्यूटर के प्रकार"),"blocks":[
   {"type":"num","items":[
     {"t":L("Desktop","डेस्कटॉप"),"d":L("Kept on a table and used.","मेज़ पर रखकर उपयोग किया जाता है।")},
     {"t":L("Laptop","लैपटॉप"),"d":L("Kept on the lap and used.","गोद में रखकर उपयोग किया जाता है।")},
     {"t":L("Palmtop","पामटॉप"),"d":L("Small enough to fit in the palm.","हथेली में समा जाने लायक छोटा।")}]}
 ]},
 {"id":"input-output","title":L("Input and Output Devices","इनपुट और आउटपुट डिवाइस"),"blocks":[
   {"type":"sub","title":L("Input devices - enter data into the computer","इनपुट डिवाइस - कंप्यूटर में डेटा दर्ज करते हैं"),"items":[
     L("Keyboard, mouse, scanner, microphone.","कीबोर्ड, माउस, स्कैनर, माइक्रोफ़ोन।")]},
   {"type":"sub","title":L("Output devices - display results to the user","आउटपुट डिवाइस - उपयोगकर्ता को परिणाम दिखाते हैं"),"items":[
     L("Monitor, printer, speakers, projector.","मॉनिटर, प्रिंटर, स्पीकर, प्रोजेक्टर।")]},
   {"type":"remember","en":"If a device sends data IN, it is an input device; if it brings results OUT, it is an output device.","hi":"जो उपकरण डेटा अंदर भेजे वह इनपुट; जो परिणाम बाहर लाए वह आउटपुट डिवाइस।"}
 ]},
 {"id":"files-folders","title":L("Files and Folders","फ़ाइलें और फ़ोल्डर"),"blocks":[
   {"type":"points","items":[
     L("A folder is used to save and organise files.","फ़ोल्डर से फ़ाइलें सहेजकर व्यवस्थित की जाती हैं।"),
     L("A new folder appears as 'New Folder' - rename it as you like (e.g. ICT).","नया फ़ोल्डर 'New Folder' नाम से बनता है - नाम बदलें (जैसे ICT)।"),
     L("Open a folder by double-clicking it with the left mouse button.","बाएँ बटन से डबल क्लिक करके फ़ोल्डर खोलें।"),
     L("Install software by clicking Install, then Finish after installation.","Install पर क्लिक कर सॉफ्टवेयर इंस्टॉल करें; पूरा होने पर Finish।"),
     L("GCompris is educational software with fun learning activities.","GCompris मनोरंजक शैक्षिक गतिविधियों वाला सॉफ्टवेयर है।")]}
 ]},
 {"id":"etiquette","title":L("Computer Etiquette","कंप्यूटर शिष्टाचार"),"blocks":[
   {"type":"points","items":[
     L("Wash hands before use; keep food and drinks away.","उपयोग से पहले हाथ धोएँ; भोजन-पेय दूर रखें।"),
     L("Sit with proper posture and take regular breaks.","सही मुद्रा में बैठें, नियमित ब्रेक लें।"),
     L("Handle equipment gently; don't press keys hard.","उपकरण धीरे से संभालें; कुंजियाँ ज़ोर से न दबाएँ।"),
     L("Never share passwords; report cyberbullying.","पासवर्ड कभी साझा न करें; साइबर बुलिंग रिपोर्ट करें।")]}
 ]},
]
qr = [
 L("ICT: technologies to handle information and communicate.","ICT: सूचना संभालने व संवाद की तकनीकें।"),
 L("Hardware: physical parts of a computer.","हार्डवेयर: कंप्यूटर के भौतिक भाग।"),
 L("Software: computer programs.","सॉफ्टवेयर: कंप्यूटर प्रोग्राम।"),
 L("Input device: enters data (keyboard, mouse).","इनपुट डिवाइस: डेटा दर्ज करता है (कीबोर्ड, माउस)।"),
 L("Output device: shows results (monitor, printer).","आउटपुट डिवाइस: परिणाम दिखाता है (मॉनिटर, प्रिंटर)।"),
 L("Folder: organises and stores files.","फ़ोल्डर: फ़ाइलें व्यवस्थित संग्रहित करता है।"),
]
rewrite("class6/ch1.json", s, qr,
  L("A computer is a helpful machine when we understand its parts and use it with care and good manners.","कंप्यूटर उपयोगी मशीन है - उसके भाग समझकर, देखभाल और अच्छे व्यवहार से उपयोग करें।"))

# ---------------- class6/ch2 Spreadsheet-01 ----------------
s = [
 {"id":"what-is-spreadsheet","title":L("What is Spreadsheet Software?","स्प्रेडशीट सॉफ्टवेयर क्या है?"),"blocks":[
   {"type":"definition","en":"Spreadsheet software is a computer application that helps store large amounts of data and perform calculations on it.","hi":"स्प्रेडशीट सॉफ्टवेयर एक कंप्यूटर एप्लिकेशन है जो बड़ी मात्रा में डेटा संग्रहित कर उस पर गणना करने में मदद करता है।"},
   {"type":"sub","title":L("Examples","उदाहरण"),"items":[
     L("Microsoft Excel, LibreOffice Calc, Google Sheets.","Microsoft Excel, LibreOffice Calc, Google Sheets।")]},
 ]},
 {"id":"cells","title":L("Rows, Columns and Cells","पंक्तियाँ, स्तंभ और सेल"),"blocks":[
   {"type":"num","items":[
     {"t":L("Row","पंक्ति"),"d":L("Runs horizontally (side by side).","क्षैतिज रूप से (आगे-पीछे) चलती है।")},
     {"t":L("Column","स्तंभ"),"d":L("Runs vertically (up and down).","लंबवत (ऊपर-नीचे) चलता है।")},
     {"t":L("Cell","सेल"),"d":L("The box where a row and a column meet.","जहाँ पंक्ति और स्तंभ मिलते हैं वह बॉक्स।")},
     {"t":L("Cell address","सेल पता"),"d":L("Formed by the column name and row name - e.g. A1 is the active cell's address.","स्तंभ नाम और पंक्ति नाम से बनता है - जैसे A1 एक्टिव सेल का पता।")}]},
 ]},
 {"id":"workbook","title":L("Workbook and Worksheet","वर्कबुक और वर्कशीट"),"blocks":[
   {"type":"num","items":[
     {"t":L("Worksheet","वर्कशीट"),"d":L("A single page of the spreadsheet where data is stored.","स्प्रेडशीट का एक पेज जहाँ डेटा रहता है।")},
     {"t":L("Workbook","वर्कबुक"),"d":L("A collection of worksheets - a new workbook opens with three worksheets by default.","वर्कशीटों का संग्रह - नई वर्कबुक डिफ़ॉल्ट रूप से तीन वर्कशीट के साथ खुलती है।")}]}
 ]},
 {"id":"editing","title":L("Inserting and Deleting Rows/Columns","पंक्ति/स्तंभ जोड़ना-हटाना"),"blocks":[
   {"type":"num","title":L("Insert a column","स्तंभ जोड़ना"),"items":[
     {"t":L("Step 1","चरण 1"),"d":L("Select a cell in the worksheet.","वर्कशीट में एक सेल चुनें।")},
     {"t":L("Step 2","चरण 2"),"d":L("Select the Insert menu and click Column.","Insert मेन्यू चुनकर Column पर क्लिक करें।")},
     {"t":L("Step 3","चरण 3"),"d":L("A new column is inserted to the left of the selected cell.","चयनित सेल के बाईं ओर नया स्तंभ जुड़ता है।")}]},
   {"type":"points","items":[
     L("Insert a row the same way - a new row appears above the selected one.","उसी तरह पंक्ति जोड़ें - नई पंक्ति चयनित के ऊपर आती है।"),
     L("Deleting removes the entire row/column with its data.","डिलीट करने पर पूरी पंक्ति/स्तंभ और उसका डेटा हट जाता है।"),
     L("In the book's activity, planets were stored with a 'Distance' column - closest planet = 1, farthest = 8.","पुस्तक की गतिविधि में ग्रहों के साथ 'Distance' स्तंभ बना - निकटतम ग्रह = 1, सुदूरतम = 8।")]}
 ]},
 {"id":"functions","title":L("Basic Functions","मूल फ़ंक्शन"),"blocks":[
   {"type":"num","items":[
     {"t":L("sum","sum"),"d":L("Adds all the values.","सभी मानों का योग।")},
     {"t":L("min / max","min / max"),"d":L("Smallest / largest value.","सबसे छोटा / बड़ा मान।")},
     {"t":L("count","count"),"d":L("Counts the number of values.","मानों की संख्या।")},
     {"t":L("average","average"),"d":L("The mean of the values.","मानों का औसत।")}]},
   {"type":"remember","en":"Cell address = column letter + row number. Change one number and every formula recalculates instantly.","hi":"सेल पता = स्तंभ अक्षर + पंक्ति संख्या। एक संख्या बदलें, हर फ़ॉर्मूला तुरंत दोबारा गणना कर लेता है।"}
 ]},
]
qr = [
 L("Spreadsheet: stores data and does calculations.","स्प्रेडशीट: डेटा रखती और गणना करती है।"),
 L("Cell: meeting point of a row and column.","सेल: पंक्ति-स्तंभ का मिलन बिंदु।"),
 L("Cell address: column name + row name (A1).","सेल पता: स्तंभ नाम + पंक्ति नाम (A1)।"),
 L("Workbook: collection of worksheets.","वर्कबुक: वर्कशीटों का संग्रह।"),
 L("sum/min/max/count/average: basic functions.","sum/min/max/count/average: मूल फ़ंक्शन।"),
]
rewrite("class6/ch2.json", s, qr,
  L("Spreadsheets keep lists tidy and calculate for us - from planets and moons to marks and money.","स्प्रेडशीट सूचियाँ सज्जित रखती है और हमारे लिए गणना करती है - ग्रहों से अंक-धन तक।"))

# ---------------- class6/ch3 Word Processing ----------------
s = [
 {"id":"word-processor","title":L("What is a Word Processor?","वर्ड प्रोसेसर क्या है?"),"blocks":[
   {"type":"definition","en":"A word processor is application software used to create, edit and format text documents. OpenOffice Writer is the word processor taught in the book.","hi":"वर्ड प्रोसेसर एप्लिकेशन सॉफ्टवेयर है जिससे टेक्स्ट दस्तावेज़ बनाए, संपादित व सज्जित किए जाते हैं। पुस्तक में OpenOffice Writer सिखाया गया है।"},
   {"type":"points","items":[
     L("Used for letters, applications, stories, reports and notes.","पत्र, प्रार्थना-पत्र, कहानियाँ, रिपोर्ट व नोट्स हेतु।"),
     L("Documents can contain text, images and tables.","दस्तावेज़ों में टेक्स्ट, चित्र व तालिकाएँ आ सकती हैं।")]}
 ]},
 {"id":"creating","title":L("Creating a Document","दस्तावेज़ बनाना"),"blocks":[
   {"type":"num","items":[
     {"t":L("Step 1","चरण 1"),"d":L("Open the OpenOffice suite.","OpenOffice suite खोलें।")},
     {"t":L("Step 2","चरण 2"),"d":L("Double-click 'Text Document'.","'Text Document' पर डबल क्लिक करें।")},
     {"t":L("Step 3","चरण 3"),"d":L("A blank document opens - start typing.","खाली दस्तावेज़ खुलता है - टाइप करें।")},
     {"t":L("Step 4","चरण 4"),"d":L("Save the document in your folder.","दस्तावेज़ को अपने फ़ोल्डर में सहेजें।")}]}
 ]},
 {"id":"formatting","title":L("Formatting Text","टेक्स्ट फ़ॉर्मेटिंग"),"blocks":[
   {"type":"num","items":[
     {"t":L("Bold","बोल्ड"),"d":L("Displays text in a darker, heavier form.","टेक्स्ट को गहरे रंग में दिखाता है।")},
     {"t":L("Italic","इटैलिक"),"d":L("Shows the text slightly tilted.","टेक्स्ट को थोड़ा तिरछा दिखाता है।")},
     {"t":L("Underline","अंडरलाइन"),"d":L("Draws a line below the text.","टेक्स्ट के नीचे लाइन खींचता है।")}]},
   {"type":"sub","title":L("Text Highlighting","टेक्स्ट हाइलाइटिंग"),"items":[
     L("Sets the background colour behind text.","टेक्स्ट के पीछे का रंग सेट करती है।"),
     L("Select the part of the text, then click the highlighting icon.","टेक्स्ट का भाग चुनकर हाइलाइटिंग आइकन पर क्लिक करें।"),
     L("Text can be highlighted in many different colours.","टेक्स्ट कई अलग-अलग रंगों में हाइलाइट किया जा सकता है।")]},
   {"type":"remember","en":"Formatting applies only to the selected text - select first, format after.","hi":"फ़ॉर्मेटिंग केवल चयनित टेक्स्ट पर होती है - पहले चुनें, फिर फ़ॉर्मेट करें।"}
 ]},
]
qr = [
 L("Word processor: creates and formats text documents.","वर्ड प्रोसेसर: टेक्स्ट दस्तावेज़ बनाता-सज्जित करता है।"),
 L("Writer: OpenOffice's word processor.","Writer: OpenOffice का वर्ड प्रोसेसर।"),
 L("Bold: darker/heavier text.","बोल्ड: गहरा/मोटा टेक्स्ट।"),
 L("Italic: tilted text.","इटैलिक: तिरछा टेक्स्ट।"),
 L("Underline: line below text.","अंडरलाइन: टेक्स्ट के नीचे लाइन।"),
 L("Highlighting: background colour of text.","हाइलाइटिंग: टेक्स्ट का बैकग्राउंड रंग।"),
]
rewrite("class6/ch3.json", s, qr,
  L("From letters to stories, the word processor is where our words take shape - type, format, and save.","पत्रों से कहानियों तक, वर्ड प्रोसेसर में हमारे शब्द आकार लेते हैं - टाइप करें, फ़ॉर्मेट करें, सहेजें।"))
