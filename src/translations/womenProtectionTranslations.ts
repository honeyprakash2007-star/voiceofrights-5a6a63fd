import { Language } from "@/contexts/LanguageContext";

export const womenProtectionTranslations: Record<Language, {
  backToHome: string;
  pageTitle: string;
  pageSubtitle: string;
  domesticViolence: {
    title: string;
    description: string;
    content: string;
    keyProvisions: string;
    provisions: { title: string; desc: string }[];
  };
  workplace: {
    title: string;
    description: string;
    content: string;
    features: string;
    items: { title: string; desc: string }[];
  };
  dowry: {
    title: string;
    description: string;
    content: string;
    punishment: string;
    punishmentDesc: string;
    fine: string;
    fineDesc: string;
    importantNote: string;
    noteDesc: string;
  };
  ipc: {
    title: string;
    description: string;
    sections: { section: string; title: string; description: string }[];
  };
  helpline: {
    title: string;
    womenHelpline: string;
    womenDistress: string;
    emergency: string;
  };
}> = {
  en: {
    backToHome: "Back to Home",
    pageTitle: "Women Protection Laws",
    pageSubtitle: "Comprehensive legal framework protecting women's rights and dignity in India",
    domesticViolence: {
      title: "Protection of Women from Domestic Violence Act, 2005",
      description: "Civil law protection against domestic violence",
      content: "The PWDVA is a comprehensive legislation designed to protect women from domestic violence in any form - physical, emotional, sexual, verbal, or economic abuse.",
      keyProvisions: "Key Provisions:",
      provisions: [
        { title: "Protection Orders", desc: "Immediate protection through court orders" },
        { title: "Right to Residence", desc: "Ensured right to residence in shared household" },
        { title: "Monetary Relief", desc: "Medical expenses and loss of earnings" },
        { title: "Custody Rights", desc: "Custody of children and visitation rights" },
        { title: "Live-in Protection", desc: "Covers women in live-in relationships" }
      ]
    },
    workplace: {
      title: "Sexual Harassment at Workplace Act, 2013",
      description: "Prevention, Prohibition and Redressal of Sexual Harassment",
      content: "This Act ensures safe and secure working environment for women by preventing and addressing sexual harassment at workplace.",
      features: "Important Features:",
      items: [
        { title: "Internal Complaints Committee", desc: "Mandatory ICC in organizations" },
        { title: "Comprehensive Definition", desc: "Defines sexual harassment clearly" },
        { title: "Confidential Mechanism", desc: "Confidential complaint process" },
        { title: "Protection from Retaliation", desc: "No adverse action against complainant" }
      ]
    },
    dowry: {
      title: "Dowry Prohibition Act, 1961",
      description: "Prohibition of dowry system",
      content: "This Act prohibits the giving or taking of dowry at or before or any time after the marriage.",
      punishment: "Punishment",
      punishmentDesc: "Imprisonment up to 5 years",
      fine: "Fine",
      fineDesc: "₹15,000 or value of dowry, whichever is more",
      importantNote: "Important Note",
      noteDesc: "Both giving and taking dowry is illegal. Demand for dowry is also punishable."
    },
    ipc: {
      title: "Indian Penal Code (IPC) Sections for Women",
      description: "Criminal law provisions protecting women",
      sections: [
        { section: "354", title: "Assault to outrage modesty", description: "Assault or criminal force to woman with intent to outrage her modesty" },
        { section: "354A", title: "Sexual harassment", description: "Sexual harassment and punishment for it" },
        { section: "354B", title: "Intent to disrobe", description: "Assault with intent to disrobe a woman" },
        { section: "354C", title: "Voyeurism", description: "Watching or capturing private acts" },
        { section: "354D", title: "Stalking", description: "Following or contacting despite disinterest" },
        { section: "376", title: "Rape", description: "Punishment for rape" },
        { section: "498A", title: "Cruelty by husband", description: "Cruelty by husband or his relatives" },
        { section: "509", title: "Insult to modesty", description: "Word, gesture or act intended to insult modesty" }
      ]
    },
    helpline: {
      title: "Women Helpline Numbers",
      womenHelpline: "Women Helpline",
      womenDistress: "Women in Distress",
      emergency: "Emergency"
    }
  },
  hi: {
    backToHome: "होम पर वापस जाएं",
    pageTitle: "महिला सुरक्षा कानून",
    pageSubtitle: "भारत में महिलाओं के अधिकारों और सम्मान की रक्षा करने वाला व्यापक कानूनी ढांचा",
    domesticViolence: {
      title: "घरेलू हिंसा से महिलाओं का संरक्षण अधिनियम, 2005",
      description: "घरेलू हिंसा के खिलाफ नागरिक कानून संरक्षण",
      content: "PWDVA एक व्यापक कानून है जो महिलाओं को किसी भी रूप में घरेलू हिंसा से बचाने के लिए बनाया गया है - शारीरिक, भावनात्मक, यौन, मौखिक या आर्थिक दुर्व्यवहार।",
      keyProvisions: "मुख्य प्रावधान:",
      provisions: [
        { title: "संरक्षण आदेश", desc: "न्यायालय के आदेशों के माध्यम से तत्काल सुरक्षा" },
        { title: "निवास का अधिकार", desc: "साझा घर में निवास का सुनिश्चित अधिकार" },
        { title: "आर्थिक राहत", desc: "चिकित्सा व्यय और आय की हानि" },
        { title: "अभिरक्षा अधिकार", desc: "बच्चों की अभिरक्षा और मिलने का अधिकार" },
        { title: "लिव-इन संरक्षण", desc: "लिव-इन संबंधों में महिलाओं को शामिल करता है" }
      ]
    },
    workplace: {
      title: "कार्यस्थल पर यौन उत्पीड़न अधिनियम, 2013",
      description: "यौन उत्पीड़न की रोकथाम, निषेध और निवारण",
      content: "यह अधिनियम कार्यस्थल पर यौन उत्पीड़न को रोककर और संबोधित करके महिलाओं के लिए सुरक्षित कार्य वातावरण सुनिश्चित करता है।",
      features: "महत्वपूर्ण विशेषताएं:",
      items: [
        { title: "आंतरिक शिकायत समिति", desc: "संगठनों में अनिवार्य ICC" },
        { title: "व्यापक परिभाषा", desc: "यौन उत्पीड़न को स्पष्ट रूप से परिभाषित करता है" },
        { title: "गोपनीय तंत्र", desc: "गोपनीय शिकायत प्रक्रिया" },
        { title: "प्रतिशोध से सुरक्षा", desc: "शिकायतकर्ता के खिलाफ कोई प्रतिकूल कार्रवाई नहीं" }
      ]
    },
    dowry: {
      title: "दहेज निषेध अधिनियम, 1961",
      description: "दहेज प्रथा का निषेध",
      content: "यह अधिनियम विवाह के समय या उससे पहले या बाद में किसी भी समय दहेज देने या लेने पर रोक लगाता है।",
      punishment: "दंड",
      punishmentDesc: "5 वर्ष तक का कारावास",
      fine: "जुर्माना",
      fineDesc: "₹15,000 या दहेज का मूल्य, जो भी अधिक हो",
      importantNote: "महत्वपूर्ण नोट",
      noteDesc: "दहेज देना और लेना दोनों अवैध है। दहेज की मांग भी दंडनीय है।"
    },
    ipc: {
      title: "महिलाओं के लिए भारतीय दंड संहिता (IPC) की धाराएं",
      description: "महिलाओं की रक्षा करने वाले आपराधिक कानून प्रावधान",
      sections: [
        { section: "354", title: "लज्जा भंग करने के लिए हमला", description: "महिला की लज्जा भंग करने के इरादे से हमला या आपराधिक बल" },
        { section: "354A", title: "यौन उत्पीड़न", description: "यौन उत्पीड़न और इसके लिए सजा" },
        { section: "354B", title: "कपड़े उतारने का इरादा", description: "महिला के कपड़े उतारने के इरादे से हमला" },
        { section: "354C", title: "दृश्यरतिकता", description: "निजी कृत्यों को देखना या कैप्चर करना" },
        { section: "354D", title: "पीछा करना", description: "अरुचि के बावजूद पीछा करना या संपर्क करना" },
        { section: "376", title: "बलात्कार", description: "बलात्कार के लिए सजा" },
        { section: "498A", title: "पति द्वारा क्रूरता", description: "पति या उसके रिश्तेदारों द्वारा क्रूरता" },
        { section: "509", title: "लज्जा का अपमान", description: "लज्जा का अपमान करने के इरादे से शब्द, इशारा या कार्य" }
      ]
    },
    helpline: {
      title: "महिला हेल्पलाइन नंबर",
      womenHelpline: "महिला हेल्पलाइन",
      womenDistress: "संकट में महिलाएं",
      emergency: "आपातकालीन"
    }
  },
  kn: {
    backToHome: "ಮುಖಪುಟಕ್ಕೆ ಹಿಂತಿರುಗಿ",
    pageTitle: "ಮಹಿಳಾ ರಕ್ಷಣಾ ಕಾನೂನುಗಳು",
    pageSubtitle: "ಭಾರತದಲ್ಲಿ ಮಹಿಳೆಯರ ಹಕ್ಕುಗಳು ಮತ್ತು ಘನತೆಯನ್ನು ರಕ್ಷಿಸುವ ಸಮಗ್ರ ಕಾನೂನು ಚೌಕಟ್ಟು",
    domesticViolence: {
      title: "ಗೃಹ ಹಿಂಸೆಯಿಂದ ಮಹಿಳೆಯರ ರಕ್ಷಣಾ ಕಾಯಿದೆ, 2005",
      description: "ಗೃಹ ಹಿಂಸೆಯ ವಿರುದ್ಧ ನಾಗರಿಕ ಕಾನೂನು ರಕ್ಷಣೆ",
      content: "PWDVA ಮಹಿಳೆಯರನ್ನು ಯಾವುದೇ ರೂಪದಲ್ಲಿ ಗೃಹ ಹಿಂಸೆಯಿಂದ ರಕ್ಷಿಸಲು ವಿನ್ಯಾಸಗೊಳಿಸಲಾದ ಸಮಗ್ರ ಶಾಸನವಾಗಿದೆ - ದೈಹಿಕ, ಭಾವನಾತ್ಮಕ, ಲೈಂಗಿಕ, ಮೌಖಿಕ ಅಥವಾ ಆರ್ಥಿಕ ದುರ್ಬಳಕೆ.",
      keyProvisions: "ಪ್ರಮುಖ ನಿಬಂಧನೆಗಳು:",
      provisions: [
        { title: "ರಕ್ಷಣಾ ಆದೇಶಗಳು", desc: "ನ್ಯಾಯಾಲಯದ ಆದೇಶಗಳ ಮೂಲಕ ತಕ್ಷಣದ ರಕ್ಷಣೆ" },
        { title: "ವಾಸದ ಹಕ್ಕು", desc: "ಹಂಚಿಕೆಯ ಮನೆಯಲ್ಲಿ ವಾಸದ ಖಚಿತ ಹಕ್ಕು" },
        { title: "ಆರ್ಥಿಕ ಪರಿಹಾರ", desc: "ವೈದ್ಯಕೀಯ ವೆಚ್ಚಗಳು ಮತ್ತು ಗಳಿಕೆಯ ನಷ್ಟ" },
        { title: "ಪಾಲನಾ ಹಕ್ಕುಗಳು", desc: "ಮಕ್ಕಳ ಪಾಲನೆ ಮತ್ತು ಭೇಟಿ ಹಕ್ಕುಗಳು" },
        { title: "ಲಿವ್-ಇನ್ ರಕ್ಷಣೆ", desc: "ಲಿವ್-ಇನ್ ಸಂಬಂಧಗಳಲ್ಲಿರುವ ಮಹಿಳೆಯರನ್ನು ಒಳಗೊಳ್ಳುತ್ತದೆ" }
      ]
    },
    workplace: {
      title: "ಕೆಲಸದ ಸ್ಥಳದಲ್ಲಿ ಲೈಂಗಿಕ ಕಿರುಕುಳ ಕಾಯಿದೆ, 2013",
      description: "ಲೈಂಗಿಕ ಕಿರುಕುಳದ ತಡೆಗಟ್ಟುವಿಕೆ, ನಿಷೇಧ ಮತ್ತು ಪರಿಹಾರ",
      content: "ಈ ಕಾಯಿದೆ ಕೆಲಸದ ಸ್ಥಳದಲ್ಲಿ ಲೈಂಗಿಕ ಕಿರುಕುಳವನ್ನು ತಡೆಯುವ ಮತ್ತು ಪರಿಹರಿಸುವ ಮೂಲಕ ಮಹಿಳೆಯರಿಗೆ ಸುರಕ್ಷಿತ ಕೆಲಸದ ವಾತಾವರಣವನ್ನು ಖಚಿತಪಡಿಸುತ್ತದೆ.",
      features: "ಮುಖ್ಯ ವೈಶಿಷ್ಟ್ಯಗಳು:",
      items: [
        { title: "ಆಂತರಿಕ ದೂರು ಸಮಿತಿ", desc: "ಸಂಸ್ಥೆಗಳಲ್ಲಿ ಕಡ್ಡಾಯ ICC" },
        { title: "ಸಮಗ್ರ ವ್ಯಾಖ್ಯಾನ", desc: "ಲೈಂಗಿಕ ಕಿರುಕುಳವನ್ನು ಸ್ಪಷ್ಟವಾಗಿ ವ್ಯಾಖ್ಯಾನಿಸುತ್ತದೆ" },
        { title: "ಗೌಪ್ಯ ಕಾರ್ಯವಿಧಾನ", desc: "ಗೌಪ್ಯ ದೂರು ಪ್ರಕ್ರಿಯೆ" },
        { title: "ಪ್ರತೀಕಾರದಿಂದ ರಕ್ಷಣೆ", desc: "ದೂರುದಾರರ ವಿರುದ್ಧ ಯಾವುದೇ ಪ್ರತಿಕೂಲ ಕ್ರಮವಿಲ್ಲ" }
      ]
    },
    dowry: {
      title: "ವರದಕ್ಷಿಣೆ ನಿಷೇಧ ಕಾಯಿದೆ, 1961",
      description: "ವರದಕ್ಷಿಣೆ ಪದ್ಧತಿಯ ನಿಷೇಧ",
      content: "ಈ ಕಾಯಿದೆ ಮದುವೆಯ ಸಮಯದಲ್ಲಿ ಅಥವಾ ಮೊದಲು ಅಥವಾ ನಂತರ ಯಾವುದೇ ಸಮಯದಲ್ಲಿ ವರದಕ್ಷಿಣೆ ಕೊಡುವುದು ಅಥವಾ ತೆಗೆದುಕೊಳ್ಳುವುದನ್ನು ನಿಷೇಧಿಸುತ್ತದೆ.",
      punishment: "ಶಿಕ್ಷೆ",
      punishmentDesc: "5 ವರ್ಷಗಳವರೆಗೆ ಜೈಲು ಶಿಕ್ಷೆ",
      fine: "ದಂಡ",
      fineDesc: "₹15,000 ಅಥವಾ ವರದಕ್ಷಿಣೆಯ ಮೌಲ್ಯ, ಯಾವುದು ಹೆಚ್ಚೋ ಅದು",
      importantNote: "ಮುಖ್ಯ ಟಿಪ್ಪಣಿ",
      noteDesc: "ವರದಕ್ಷಿಣೆ ಕೊಡುವುದು ಮತ್ತು ತೆಗೆದುಕೊಳ್ಳುವುದು ಎರಡೂ ಕಾನೂನುಬಾಹಿರ. ವರದಕ್ಷಿಣೆ ಬೇಡಿಕೆಯೂ ಶಿಕ್ಷಾರ್ಹ."
    },
    ipc: {
      title: "ಮಹಿಳೆಯರಿಗಾಗಿ ಭಾರತೀಯ ದಂಡ ಸಂಹಿತೆ (IPC) ವಿಭಾಗಗಳು",
      description: "ಮಹಿಳೆಯರನ್ನು ರಕ್ಷಿಸುವ ಅಪರಾಧ ಕಾನೂನು ನಿಬಂಧನೆಗಳು",
      sections: [
        { section: "354", title: "ಮಾನಭಂಗಕ್ಕಾಗಿ ಹಲ್ಲೆ", description: "ಮಹಿಳೆಯ ಮಾನಭಂಗ ಮಾಡುವ ಉದ್ದೇಶದಿಂದ ಹಲ್ಲೆ ಅಥವಾ ಅಪರಾಧಿಕ ಬಲ" },
        { section: "354A", title: "ಲೈಂಗಿಕ ಕಿರುಕುಳ", description: "ಲೈಂಗಿಕ ಕಿರುಕುಳ ಮತ್ತು ಅದಕ್ಕೆ ಶಿಕ್ಷೆ" },
        { section: "354B", title: "ಬಟ್ಟೆ ಕಳಚುವ ಉದ್ದೇಶ", description: "ಮಹಿಳೆಯ ಬಟ್ಟೆ ಕಳಚುವ ಉದ್ದೇಶದಿಂದ ಹಲ್ಲೆ" },
        { section: "354C", title: "ಗುಪ್ತ ನೋಟ", description: "ಖಾಸಗಿ ಕ್ರಿಯೆಗಳನ್ನು ನೋಡುವುದು ಅಥವಾ ಸೆರೆಹಿಡಿಯುವುದು" },
        { section: "354D", title: "ಹಿಂಬಾಲಿಸುವಿಕೆ", description: "ಆಸಕ್ತಿಯಿಲ್ಲದಿದ್ದರೂ ಹಿಂಬಾಲಿಸುವುದು ಅಥವಾ ಸಂಪರ್ಕಿಸುವುದು" },
        { section: "376", title: "ಅತ್ಯಾಚಾರ", description: "ಅತ್ಯಾಚಾರಕ್ಕೆ ಶಿಕ್ಷೆ" },
        { section: "498A", title: "ಪತಿಯಿಂದ ಕ್ರೌರ್ಯ", description: "ಪತಿ ಅಥವಾ ಅವನ ಸಂಬಂಧಿಕರಿಂದ ಕ್ರೌರ್ಯ" },
        { section: "509", title: "ಮಾನದ ಅವಮಾನ", description: "ಮಾನವನ್ನು ಅವಮಾನಿಸುವ ಉದ್ದೇಶದ ಪದ, ಸನ್ನೆ ಅಥವಾ ಕ್ರಿಯೆ" }
      ]
    },
    helpline: {
      title: "ಮಹಿಳಾ ಸಹಾಯವಾಣಿ ಸಂಖ್ಯೆಗಳು",
      womenHelpline: "ಮಹಿಳಾ ಸಹಾಯವಾಣಿ",
      womenDistress: "ಸಂಕಷ್ಟದಲ್ಲಿರುವ ಮಹಿಳೆಯರು",
      emergency: "ತುರ್ತು"
    }
  }
};
