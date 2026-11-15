#!/usr/bin/env python3
"""Rewrite class8/ch4.json sections into the structured study-notes block format."""
import json, io, collections, os
HERE = os.path.join(os.path.dirname(os.path.abspath(__file__)), "..", "src", "data")
L = lambda e, h: {"en": e, "hi": h}

def build():
    return [
      {"id":"digital-footprint","title":L("Digital Footprint","डिजिटल फुटप्रिंट"),"blocks":[
        {"type":"definition","en":"A digital footprint is the trail of data or information that we leave behind while using the internet and digital devices.","hi":"डिजिटल फुटप्रिंट वह डेटा या जानकारी का निशान है जो हम इंटरनेट और डिजिटल उपकरणों का उपयोग करते समय छोड़ जाते हैं।"},
        {"type":"sub","title":L("Examples","उदाहरण"),"items":[
          L("Posting photos or videos on social media.","सोशल मीडिया पर फ़ोटो/वीडियो पोस्ट करना।"),
          L("Liking, sharing, or commenting on posts.","पोस्ट पर लाइक, शेयर या कमेंट करना।"),
          L("Searching for information on Google.","Google पर जानकारी खोजना।"),
          L("Sending emails and messages.","ईमेल और संदेश भेजना।"),
          L("Shopping online and making digital payments.","ऑनलाइन खरीदारी और डिजिटल भुगतान करना।"),
          L("Visiting websites and downloading files.","वेबसाइटें देखना और फ़ाइलें डाउनलोड करना।")]},
        {"type":"num","title":L("Types of Digital Footprints","डिजिटल फुटप्रिंट के प्रकार"),"items":[
          {"t":L("Active Digital Footprint","एक्टिव डिजिटल फुटप्रिंट"),"d":L("Information we intentionally share online - e.g. posting a photo on Instagram, writing comments on YouTube, filling out an online form.","जानबूझकर ऑनलाइन साझा की गई जानकारी - जैसे Instagram पर फ़ोटो पोस्ट करना, YouTube पर कमेंट करना, ऑनलाइन फ़ॉर्म भरना।")},
          {"t":L("Passive Digital Footprint","पैसिव डिजिटल फुटप्रिंट"),"d":L("Information collected about us automatically, often without our direct involvement - e.g. websites collecting browsing data, apps tracking location, cookies remembering preferences.","हमारे बारे में स्वतः एकत्र हुई जानकारी - जैसे वेबसाइटों का ब्राउज़िंग डेटा, ऐप्स का लोकेशन ट्रैकिंग, cookies द्वारा प्राथमिकताएँ याद रखना।")}]}
      ]},
      {"id":"implications","title":L("Implications of Digital Footprints","डिजिटल फुटप्रिंट के प्रभाव"),"blocks":[
        {"type":"definition","en":"Digital footprints can have both positive and negative effects.","hi":"डिजिटल फुटप्रिंट के सकारात्मक और नकारात्मक दोनों प्रभाव हो सकते हैं।"},
        {"type":"sub","title":L("Positive Implications","सकारात्मक प्रभाव"),"items":[
          L("Online identity: helps create our online presence.","ऑनलाइन पहचान: हमारी ऑनलाइन उपस्थिति बनाती है।"),
          L("Personalisation: websites suggest content based on our interests.","वैयक्तिकरण: वेबसाइटें रुचि के अनुसार सामग्री सुझाती हैं।"),
          L("Professional opportunities: a positive profile may help in getting a job.","व्यावसायिक अवसर: सकारात्मक प्रोफ़ाइल नौकरी में सहायक हो सकती है।"),
          L("Easy access: websites remember preferences and login details when permitted.","सहज पहुँच: अनुमति पर वेबसाइटें प्राथमिकताएँ याद रखती हैं।")]},
        {"type":"sub","title":L("Negative Implications","नकारात्मक प्रभाव"),"items":[
          L("Privacy risks: personal information may be exposed.","गोपनीयता जोखिम: निजी जानकारी उजागर हो सकती है।"),
          L("Cyberbullying: shared content may be misused to harass someone.","साइबर बुलिंग: साझा सामग्री का दुरुपयोग हो सकता है।"),
          L("Identity theft: criminals may misuse personal information.","पहचान चोरी: अपराधी निजी जानकारी का दुरुपयोग कर सकते हैं।"),
          L("Reputation damage: inappropriate posts may harm our reputation.","प्रतिष्ठा को नुकसान: अनुचित पोस्ट हानि पहुँचा सकते हैं।"),
          L("Targeted advertising: browsing data may be used for personalised ads.","लक्षित विज्ञापन: ब्राउज़िंग डेटा से विज्ञापन दिखाए जा सकते हैं।")]},
        {"type":"remember","en":"Think before you post, because information shared online may remain accessible for a long time, even after deletion.","hi":"पोस्ट करने से पहले सोचें, क्योंकि ऑनलाइन साझा की गई जानकारी डिलीट करने के बाद भी लंबे समय तक उपलब्ध रह सकती है।"}
      ]},
      {"id":"cyber-crime","title":L("Cyber Crime and Its Types","साइबर अपराध और उसके प्रकार"),"blocks":[
        {"type":"definition","en":"Cybercrime is any illegal activity carried out using computers, mobile devices, networks, or the internet - e.g. hacking accounts, stealing personal information, sending fraudulent messages, sharing private information without permission.","hi":"साइबर अपराध कंप्यूटर, मोबाइल, नेटवर्क या इंटरनेट द्वारा किया गया कोई भी अवैध कृत्य है - जैसे अकाउंट हैक करना, निजी जानकारी चुराना, धोखेबाज़ संदेश भेजना, बिना अनुमति निजी जानकारी साझा करना।"},
        {"type":"table","head":[L("Type","प्रकार"),L("Meaning","अर्थ"),L("Example","उदाहरण")],"rows":[
          [L("Hacking","हैकिंग"),L("Gaining unauthorised access to a computer or account.","कंप्यूटर/अकाउंट तक अनधिकृत पहुँच।"),L("Accessing someone's email without permission.","बिना अनुमति किसी का ईमेल खोलना।")],
          [L("Phishing","फ़िशिंग"),L("Tricking people into revealing sensitive information through fake messages or websites.","नकली संदेश/वेबसाइटों से संवेदनशील जानकारी निकलवाना।"),L("A fake bank link asking for a password.","पासवर्ड माँगता नकली बैंक लिंक।")],
          [L("Identity Theft","पहचान चोरी"),L("Using another person's personal information without permission.","बिना अनुमति दूसरे की निजी जानकारी का उपयोग।"),L("Misusing someone's identity details.","किसी की पहचान का दुरुपयोग।")],
          [L("Cyberbullying","साइबर बुलिंग"),L("Harassing or threatening someone using digital platforms.","डिजिटल प्लेटफ़ॉर्म से परेशान/धमकाना।"),L("Posting insulting comments about a classmate.","सहपाठी पर अपमानजनक कमेंट।")],
          [L("Online Fraud","ऑनलाइन धोखाधड़ी"),L("Cheating people to obtain money or valuable information.","पैसे/जानकारी हथियाने हेतु ठगना।"),L("A fake shopping website taking payment.","भुगतान लेती नकली शॉपिंग साइट।")],
          [L("Malware Attack","मैलवेयर हमला"),L("Using malicious software to damage devices or steal information.","दुर्भावनापूर्ण सॉफ्टवेयर से नुकसान/चोरी।"),L("A virus infecting a computer.","कंप्यूटर में वायरस।")],
          [L("Cyberstalking","साइबर स्टॉकिंग"),L("Repeatedly monitoring or harassing someone online.","बार-बार ऑनलाइन निगरानी/परेशान करना।"),L("Sending unwanted messages repeatedly.","बार-बार अनचाहे संदेश भेजना।")],
          [L("Data Theft","डेटा चोरी"),L("Stealing confidential or personal information.","गोपनीय/निजी जानकारी चुराना।"),L("Stealing a school's student records.","स्कूल के छात्र रिकॉर्ड चुराना।")]]}]},
      {"id":"cyber-safety","title":L("Cyber Safety Tips","साइबर सुरक्षा सुझाव"),"blocks":[
        {"type":"definition","en":"Cyber safety means protecting ourselves, our devices, and our personal information while using the internet.","hi":"साइबर सुरक्षा अर्थात इंटरनेट उपयोग में अपनी, अपने उपकरणों और निजी जानकारी की रक्षा करना।"},
        {"type":"points","items":[
          L("Use strong passwords: combine letters, numbers and symbols.","मज़बूत पासवर्ड: अक्षर, संख्याएँ और चिह्नों का संयोजन रखें।"),
          L("Enable two-factor authentication (2FA) for an extra layer of security.","दो-चरणीय प्रमाणीकरण (2FA) सक्षम करें।"),
          L("Never share passwords, OTPs, addresses and banking details.","पासवर्ड, OTP, पता और बैंकिंग विवरण कभी न साझा करें।"),
          L("Avoid suspicious links and unknown attachments.","संदिग्ध लिंक/अनजान अटैचमेंट से बचें।"),
          L("Use secure websites: check for HTTPS before entering sensitive information.","HTTPS जाँचकर ही संवेदनशील जानकारी भरें।"),
          L("Keep software, applications and antivirus updated.","सॉफ्टवेयर, ऐप्स और एंटीवायरस अद्यतन रखें।"),
          L("Use privacy settings to limit who can view your posts.","गोपनीयता सेटिंग्स से दर्शक सीमित करें।"),
          L("Always log out on shared or public computers.","साझा/सार्वजनिक कंप्यूटर पर लॉग आउट अवश्य करें।"),
          L("Report and block suspicious accounts and cyberbullying.","संदिग्ध अकाउंट/साइबर बुलिंग रिपोर्ट व ब्लॉक करें।"),
          L("Avoid sensitive transactions over unsecured public Wi-Fi.","असुरक्षित सार्वजनिक Wi-Fi पर संवेदनशील लेन-देन न करें।")]},
      ]},
      {"id":"if-victim","title":L("What to Do If You Become a Victim of Cybercrime","साइबर अपराध का शिकार होने पर क्या करें"),"blocks":[
        {"type":"points","items":[
          L("Inform a trusted adult, parent or teacher.","किसी भरोसेमंद बड़े, अभिभावक या शिक्षक को बताएँ।"),
          L("Save screenshots, messages and transaction details as evidence.","स्क्रीनशॉट, संदेश, लेन-देन विवरण सबूत के रूप में सहेजें।"),
          L("Change compromised passwords and secure your accounts.","समझौता हुए पासवर्ड बदलें और अकाउंट सुरक्षित करें।"),
          L("Contact your bank immediately if money is lost.","धन हानि पर तुरंत बैंक से संपर्क करें।"),
          L("In India, report at the official portal: https://cybercrime.gov.in","भारत में आधिकारिक पोर्टल cybercrime.gov.in पर रिपोर्ट करें।"),
          L("For urgent financial cyber fraud, call the national helpline 1930.","तत्काल वित्तीय धोखाधड़ी हेतु हेल्पलाइन 1930 पर कॉल करें।")]}
      ]},
    ]

qr = [
  L("Digital Footprint: the trail of data left by our online activities.","डिजिटल फुटप्रिंट: ऑनलाइन गतिविधियों से छूटा डेटा-निशान।"),
  L("Active Footprint: information intentionally shared by the user.","एक्टिव फुटप्रिंट: उपयोगकर्ता द्वारा जानबूझकर साझा जानकारी।"),
  L("Passive Footprint: information collected automatically during online activities.","पैसिव फुटप्रिंट: ऑनलाइन गतिविधियों में स्वतः एकत्र जानकारी।"),
  L("Cybercrime: illegal activities using computers, networks or the internet.","साइबर अपराध: कंप्यूटर/नेटवर्क/इंटरनेट द्वारा अवैध कृत्य।"),
  L("Phishing: tricking people into revealing sensitive information.","फ़िशिंग: संवेदनशील जानकारी निकलवाने की चाल।"),
  L("Hacking: unauthorised access to systems or accounts.","हैकिंग: सिस्टम/अकाउंट तक अनधिकृत पहुँच।"),
  L("Cyberbullying: harassment using digital platforms.","साइबर बुलिंग: डिजिटल माध्यम से उत्पीड़न।"),
  L("Cyber Safety: protecting personal information, devices and accounts.","साइबर सुरक्षा: निजी जानकारी, उपकरण, अकाउंट की रक्षा।"),
]
concl = L("We should use the internet responsibly, protect our digital footprints, respect others' privacy, and follow cyber safety practices to stay safe online.","हमें इंटरनेट ज़िम्मेदारी से उपयोग करना चाहिए, अपने डिजिटल फुटप्रिंट की रक्षा करनी चाहिए, दूसरों की गोपनीयता का सम्मान करना चाहिए और ऑनलाइन सुरक्षित रहने हेतु साइबर सुरक्षा आदतें अपनानी चाहिए।")

p = os.path.join(HERE, "class8", "ch4.json")
data = json.load(open(p, encoding="utf-8"), object_pairs_hook=collections.OrderedDict)
data["sections"] = build()
data["quickRevision"] = qr
data["conclusion"] = concl
json.dump(data, open(p, "w", encoding="utf-8"), ensure_ascii=False, indent=2)
print("class8/ch4 rewritten")
