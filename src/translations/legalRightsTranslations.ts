import { Language } from "@/contexts/LanguageContext";

export const legalRightsTranslations: Record<Language, {
  backToHome: string;
  pageTitle: string;
  pageSubtitle: string;
  keyRightsInclude: string;
  sixFundamentalFreedoms: string;
  protectionInArrest: string;
  cards: {
    title: string;
    description: string;
    content: {
      intro?: string;
      items: { label: string; text: string }[];
    };
  }[];
  writs: {
    title: string;
    items: { name: string; desc: string }[];
  };
  ambedkarQuote: string;
}> = {
  en: {
    backToHome: "Back to Home",
    pageTitle: "Legal Rights of Citizens",
    pageSubtitle: "Understanding your fundamental legal rights and protections guaranteed under the Indian Constitution",
    keyRightsInclude: "Key Rights Include:",
    sixFundamentalFreedoms: "Six Fundamental Freedoms (Article 19):",
    protectionInArrest: "Protection in Arrest:",
    cards: [
      {
        title: "Right to Equality (Articles 14-18)",
        description: "Equal treatment before law",
        content: {
          intro: "The Constitution guarantees equality before law and equal protection of laws to all persons within the territory of India.",
          items: [
            { label: "Article 14:", text: "Equality before law - The State shall not deny to any person equality before law" },
            { label: "Article 15:", text: "Prohibition of discrimination on grounds of religion, race, caste, sex or place of birth" },
            { label: "Article 16:", text: "Equality of opportunity in matters of public employment" },
            { label: "Article 17:", text: "Abolition of untouchability" },
            { label: "Article 18:", text: "Abolition of titles except military and academic distinctions" },
          ]
        }
      },
      {
        title: "Right to Freedom (Articles 19-22)",
        description: "Protection of certain rights regarding freedom",
        content: {
          items: [
            { label: "", text: "Freedom of speech and expression" },
            { label: "", text: "Freedom to assemble peacefully without arms" },
            { label: "", text: "Freedom to form associations or unions" },
            { label: "", text: "Freedom to move freely throughout India" },
            { label: "", text: "Freedom to reside and settle in any part of India" },
            { label: "", text: "Freedom to practice any profession or carry on any occupation" },
          ]
        }
      },
      {
        title: "Right Against Exploitation (Articles 23-24)",
        description: "Prohibition of trafficking and forced labor",
        content: {
          items: [
            { label: "Article 23:", text: "Prohibition of traffic in human beings and forced labor - Begar (forced labor) is prohibited" },
            { label: "Article 24:", text: "Prohibition of employment of children in factories - No child below 14 years shall be employed in any factory, mine or hazardous employment" },
          ]
        }
      },
      {
        title: "Right to Freedom of Religion (Articles 25-28)",
        description: "Freedom of conscience and free profession of religion",
        content: {
          items: [
            { label: "Article 25:", text: "Freedom of conscience and free profession, practice and propagation of religion" },
            { label: "Article 26:", text: "Freedom to manage religious affairs" },
            { label: "Article 27:", text: "Freedom from payment of taxes for promotion of any religion" },
            { label: "Article 28:", text: "Freedom from attending religious instruction in certain educational institutions" },
          ]
        }
      },
      {
        title: "Cultural and Educational Rights (Articles 29-30)",
        description: "Protection of interests of minorities",
        content: {
          items: [
            { label: "Article 29:", text: "Protection of interests of minorities - Any section of citizens with distinct language, script or culture has right to conserve the same" },
            { label: "Article 30:", text: "Right of minorities to establish and administer educational institutions" },
          ]
        }
      },
      {
        title: "Right to Constitutional Remedies (Article 32)",
        description: "The heart and soul of the Constitution",
        content: {
          items: []
        }
      }
    ],
    writs: {
      title: "Writs that can be issued:",
      items: [
        { name: "Habeas Corpus", desc: "To produce a person before the court" },
        { name: "Mandamus", desc: "Command to perform public duty" },
        { name: "Prohibition", desc: "Prevent lower courts from exceeding jurisdiction" },
        { name: "Certiorari", desc: "To quash an order of lower court" },
        { name: "Quo Warranto", desc: "To inquire into the legality of claim of a person to public office" },
      ]
    },
    ambedkarQuote: "Article 32 guarantees the right to move the Supreme Court for enforcement of Fundamental Rights. Dr. B.R. Ambedkar called it the 'heart and soul' of the Constitution."
  },
  hi: {
    backToHome: "होम पर वापस जाएं",
    pageTitle: "नागरिकों के कानूनी अधिकार",
    pageSubtitle: "भारतीय संविधान के तहत गारंटीकृत आपके मौलिक कानूनी अधिकारों और सुरक्षा को समझना",
    keyRightsInclude: "मुख्य अधिकारों में शामिल हैं:",
    sixFundamentalFreedoms: "छह मौलिक स्वतंत्रताएं (अनुच्छेद 19):",
    protectionInArrest: "गिरफ्तारी में सुरक्षा:",
    cards: [
      {
        title: "समानता का अधिकार (अनुच्छेद 14-18)",
        description: "कानून के समक्ष समान व्यवहार",
        content: {
          intro: "संविधान भारत के क्षेत्र में सभी व्यक्तियों को कानून के समक्ष समानता और कानूनों की समान सुरक्षा की गारंटी देता है।",
          items: [
            { label: "अनुच्छेद 14:", text: "कानून के समक्ष समानता - राज्य किसी भी व्यक्ति को कानून के समक्ष समानता से वंचित नहीं करेगा" },
            { label: "अनुच्छेद 15:", text: "धर्म, जाति, वंश, लिंग या जन्म स्थान के आधार पर भेदभाव का निषेध" },
            { label: "अनुच्छेद 16:", text: "सार्वजनिक रोजगार के मामलों में अवसर की समानता" },
            { label: "अनुच्छेद 17:", text: "अस्पृश्यता का उन्मूलन" },
            { label: "अनुच्छेद 18:", text: "सैन्य और शैक्षणिक भेद को छोड़कर उपाधियों का उन्मूलन" },
          ]
        }
      },
      {
        title: "स्वतंत्रता का अधिकार (अनुच्छेद 19-22)",
        description: "स्वतंत्रता से संबंधित कुछ अधिकारों की सुरक्षा",
        content: {
          items: [
            { label: "", text: "भाषण और अभिव्यक्ति की स्वतंत्रता" },
            { label: "", text: "बिना हथियारों के शांतिपूर्ण सभा करने की स्वतंत्रता" },
            { label: "", text: "संघ या संघ बनाने की स्वतंत्रता" },
            { label: "", text: "पूरे भारत में स्वतंत्र रूप से घूमने की स्वतंत्रता" },
            { label: "", text: "भारत के किसी भी हिस्से में निवास करने और बसने की स्वतंत्रता" },
            { label: "", text: "किसी भी पेशे का अभ्यास करने या कोई भी व्यवसाय करने की स्वतंत्रता" },
          ]
        }
      },
      {
        title: "शोषण के विरुद्ध अधिकार (अनुच्छेद 23-24)",
        description: "तस्करी और बलात् श्रम का निषेध",
        content: {
          items: [
            { label: "अनुच्छेद 23:", text: "मानव तस्करी और बलात् श्रम का निषेध - बेगार (बलात् श्रम) प्रतिबंधित है" },
            { label: "अनुच्छेद 24:", text: "कारखानों में बच्चों के रोजगार का निषेध - 14 वर्ष से कम उम्र का कोई भी बच्चा किसी कारखाने, खदान या खतरनाक रोजगार में नियोजित नहीं किया जाएगा" },
          ]
        }
      },
      {
        title: "धर्म की स्वतंत्रता का अधिकार (अनुच्छेद 25-28)",
        description: "अंतरात्मा की स्वतंत्रता और धर्म का स्वतंत्र पालन",
        content: {
          items: [
            { label: "अनुच्छेद 25:", text: "अंतरात्मा की स्वतंत्रता और धर्म के स्वतंत्र पालन, आचरण और प्रचार की स्वतंत्रता" },
            { label: "अनुच्छेद 26:", text: "धार्मिक मामलों के प्रबंधन की स्वतंत्रता" },
            { label: "अनुच्छेद 27:", text: "किसी भी धर्म के प्रचार के लिए करों के भुगतान से स्वतंत्रता" },
            { label: "अनुच्छेद 28:", text: "कुछ शैक्षणिक संस्थानों में धार्मिक शिक्षा में भाग लेने से स्वतंत्रता" },
          ]
        }
      },
      {
        title: "सांस्कृतिक और शैक्षिक अधिकार (अनुच्छेद 29-30)",
        description: "अल्पसंख्यकों के हितों की सुरक्षा",
        content: {
          items: [
            { label: "अनुच्छेद 29:", text: "अल्पसंख्यकों के हितों की सुरक्षा - विशिष्ट भाषा, लिपि या संस्कृति वाले नागरिकों के किसी भी वर्ग को इसे संरक्षित करने का अधिकार है" },
            { label: "अनुच्छेद 30:", text: "अल्पसंख्यकों का शैक्षणिक संस्थान स्थापित करने और प्रशासित करने का अधिकार" },
          ]
        }
      },
      {
        title: "संवैधानिक उपचारों का अधिकार (अनुच्छेद 32)",
        description: "संविधान की आत्मा और हृदय",
        content: {
          items: []
        }
      }
    ],
    writs: {
      title: "जारी किए जा सकने वाले रिट:",
      items: [
        { name: "बंदी प्रत्यक्षीकरण", desc: "किसी व्यक्ति को न्यायालय के समक्ष पेश करना" },
        { name: "परमादेश", desc: "सार्वजनिक कर्तव्य निभाने का आदेश" },
        { name: "प्रतिषेध", desc: "निचली अदालतों को अधिकार क्षेत्र से बाहर जाने से रोकना" },
        { name: "उत्प्रेषण", desc: "निचली अदालत के आदेश को रद्द करना" },
        { name: "अधिकार पृच्छा", desc: "किसी व्यक्ति के सार्वजनिक पद पर दावे की वैधता की जांच करना" },
      ]
    },
    ambedkarQuote: "अनुच्छेद 32 मौलिक अधिकारों के प्रवर्तन के लिए सर्वोच्च न्यायालय में जाने के अधिकार की गारंटी देता है। डॉ. बी.आर. अंबेडकर ने इसे संविधान की 'आत्मा और हृदय' कहा।"
  },
  kn: {
    backToHome: "ಮುಖಪುಟಕ್ಕೆ ಹಿಂತಿರುಗಿ",
    pageTitle: "ನಾಗರಿಕರ ಕಾನೂನು ಹಕ್ಕುಗಳು",
    pageSubtitle: "ಭಾರತೀಯ ಸಂವಿಧಾನದ ಅಡಿಯಲ್ಲಿ ಖಾತರಿಪಡಿಸಲಾದ ನಿಮ್ಮ ಮೂಲಭೂತ ಕಾನೂನು ಹಕ್ಕುಗಳು ಮತ್ತು ರಕ್ಷಣೆಗಳನ್ನು ಅರ್ಥಮಾಡಿಕೊಳ್ಳುವುದು",
    keyRightsInclude: "ಪ್ರಮುಖ ಹಕ್ಕುಗಳು ಒಳಗೊಂಡಿವೆ:",
    sixFundamentalFreedoms: "ಆರು ಮೂಲಭೂತ ಸ್ವಾತಂತ್ರ್ಯಗಳು (ಅನುಚ್ಛೇದ 19):",
    protectionInArrest: "ಬಂಧನದಲ್ಲಿ ರಕ್ಷಣೆ:",
    cards: [
      {
        title: "ಸಮಾನತೆಯ ಹಕ್ಕು (ಅನುಚ್ಛೇದ 14-18)",
        description: "ಕಾನೂನಿನ ಮುಂದೆ ಸಮಾನ ನಡೆಸುವಿಕೆ",
        content: {
          intro: "ಸಂವಿಧಾನವು ಭಾರತದ ಪ್ರದೇಶದೊಳಗೆ ಎಲ್ಲಾ ವ್ಯಕ್ತಿಗಳಿಗೆ ಕಾನೂನಿನ ಮುಂದೆ ಸಮಾನತೆ ಮತ್ತು ಕಾನೂನುಗಳ ಸಮಾನ ರಕ್ಷಣೆಯನ್ನು ಖಾತರಿಪಡಿಸುತ್ತದೆ.",
          items: [
            { label: "ಅನುಚ್ಛೇದ 14:", text: "ಕಾನೂನಿನ ಮುಂದೆ ಸಮಾನತೆ - ರಾಜ್ಯವು ಯಾವುದೇ ವ್ಯಕ್ತಿಗೆ ಕಾನೂನಿನ ಮುಂದೆ ಸಮಾನತೆಯನ್ನು ನಿರಾಕರಿಸಬಾರದು" },
            { label: "ಅನುಚ್ಛೇದ 15:", text: "ಧರ್ಮ, ಜನಾಂಗ, ಜಾತಿ, ಲಿಂಗ ಅಥವಾ ಜನ್ಮಸ್ಥಳದ ಆಧಾರದ ಮೇಲೆ ತಾರತಮ್ಯದ ನಿಷೇಧ" },
            { label: "ಅನುಚ್ಛೇದ 16:", text: "ಸಾರ್ವಜನಿಕ ಉದ್ಯೋಗದ ವಿಷಯಗಳಲ್ಲಿ ಅವಕಾಶದ ಸಮಾನತೆ" },
            { label: "ಅನುಚ್ಛೇದ 17:", text: "ಅಸ್ಪೃಶ್ಯತೆಯ ನಿರ್ಮೂಲನೆ" },
            { label: "ಅನುಚ್ಛೇದ 18:", text: "ಸೈನಿಕ ಮತ್ತು ಶೈಕ್ಷಣಿಕ ವ್ಯತ್ಯಾಸಗಳನ್ನು ಹೊರತುಪಡಿಸಿ ಬಿರುದುಗಳ ನಿರ್ಮೂಲನೆ" },
          ]
        }
      },
      {
        title: "ಸ್ವಾತಂತ್ರ್ಯದ ಹಕ್ಕು (ಅನುಚ್ಛೇದ 19-22)",
        description: "ಸ್ವಾತಂತ್ರ್ಯಕ್ಕೆ ಸಂಬಂಧಿಸಿದ ಕೆಲವು ಹಕ್ಕುಗಳ ರಕ್ಷಣೆ",
        content: {
          items: [
            { label: "", text: "ಮಾತು ಮತ್ತು ಅಭಿವ್ಯಕ್ತಿಯ ಸ್ವಾತಂತ್ರ್ಯ" },
            { label: "", text: "ಆಯುಧಗಳಿಲ್ಲದೆ ಶಾಂತಿಯುತವಾಗಿ ಸಭೆ ಸೇರುವ ಸ್ವಾತಂತ್ರ್ಯ" },
            { label: "", text: "ಸಂಘಗಳು ಅಥವಾ ಒಕ್ಕೂಟಗಳನ್ನು ರಚಿಸುವ ಸ್ವಾತಂತ್ರ್ಯ" },
            { label: "", text: "ಭಾರತದಾದ್ಯಂತ ಮುಕ್ತವಾಗಿ ಚಲಿಸುವ ಸ್ವಾತಂತ್ರ್ಯ" },
            { label: "", text: "ಭಾರತದ ಯಾವುದೇ ಭಾಗದಲ್ಲಿ ನೆಲೆಸುವ ಮತ್ತು ವಾಸಿಸುವ ಸ್ವಾತಂತ್ರ್ಯ" },
            { label: "", text: "ಯಾವುದೇ ವೃತ್ತಿಯನ್ನು ಅಭ್ಯಾಸ ಮಾಡುವ ಅಥವಾ ಯಾವುದೇ ಉದ್ಯೋಗವನ್ನು ನಡೆಸುವ ಸ್ವಾತಂತ್ರ್ಯ" },
          ]
        }
      },
      {
        title: "ಶೋಷಣೆಯ ವಿರುದ್ಧ ಹಕ್ಕು (ಅನುಚ್ಛೇದ 23-24)",
        description: "ಮಾನವ ಕಳ್ಳಸಾಗಣೆ ಮತ್ತು ಬಲವಂತದ ಶ್ರಮದ ನಿಷೇಧ",
        content: {
          items: [
            { label: "ಅನುಚ್ಛೇದ 23:", text: "ಮಾನವ ಕಳ್ಳಸಾಗಣೆ ಮತ್ತು ಬಲವಂತದ ಶ್ರಮದ ನಿಷೇಧ - ಬೇಗಾರ್ (ಬಲವಂತದ ಶ್ರಮ) ನಿಷೇಧಿಸಲಾಗಿದೆ" },
            { label: "ಅನುಚ್ಛೇದ 24:", text: "ಕಾರ್ಖಾನೆಗಳಲ್ಲಿ ಮಕ್ಕಳ ಉದ್ಯೋಗದ ನಿಷೇಧ - 14 ವರ್ಷಕ್ಕಿಂತ ಕಡಿಮೆ ವಯಸ್ಸಿನ ಯಾವುದೇ ಮಗುವನ್ನು ಯಾವುದೇ ಕಾರ್ಖಾನೆ, ಗಣಿ ಅಥವಾ ಅಪಾಯಕಾರಿ ಉದ್ಯೋಗದಲ್ಲಿ ನೇಮಿಸಲಾಗುವುದಿಲ್ಲ" },
          ]
        }
      },
      {
        title: "ಧರ್ಮದ ಸ್ವಾತಂತ್ರ್ಯದ ಹಕ್ಕು (ಅನುಚ್ಛೇದ 25-28)",
        description: "ಆತ್ಮಸಾಕ್ಷಿಯ ಸ್ವಾತಂತ್ರ್ಯ ಮತ್ತು ಧರ್ಮದ ಮುಕ್ತ ಆಚರಣೆ",
        content: {
          items: [
            { label: "ಅನುಚ್ಛೇದ 25:", text: "ಆತ್ಮಸಾಕ್ಷಿಯ ಸ್ವಾತಂತ್ರ್ಯ ಮತ್ತು ಧರ್ಮದ ಮುಕ್ತ ಆಚರಣೆ, ಅಭ್ಯಾಸ ಮತ್ತು ಪ್ರಚಾರ" },
            { label: "ಅನುಚ್ಛೇದ 26:", text: "ಧಾರ್ಮಿಕ ವ್ಯವಹಾರಗಳನ್ನು ನಿರ್ವಹಿಸುವ ಸ್ವಾತಂತ್ರ್ಯ" },
            { label: "ಅನುಚ್ಛೇದ 27:", text: "ಯಾವುದೇ ಧರ್ಮದ ಪ್ರಚಾರಕ್ಕಾಗಿ ತೆರಿಗೆ ಪಾವತಿಯಿಂದ ಸ್ವಾತಂತ್ರ್ಯ" },
            { label: "ಅನುಚ್ಛೇದ 28:", text: "ಕೆಲವು ಶೈಕ್ಷಣಿಕ ಸಂಸ್ಥೆಗಳಲ್ಲಿ ಧಾರ್ಮಿಕ ಶಿಕ್ಷಣದಲ್ಲಿ ಭಾಗವಹಿಸುವುದರಿಂದ ಸ್ವಾತಂತ್ರ್ಯ" },
          ]
        }
      },
      {
        title: "ಸಾಂಸ್ಕೃತಿಕ ಮತ್ತು ಶೈಕ್ಷಣಿಕ ಹಕ್ಕುಗಳು (ಅನುಚ್ಛೇದ 29-30)",
        description: "ಅಲ್ಪಸಂಖ್ಯಾತರ ಹಿತಾಸಕ್ತಿಗಳ ರಕ್ಷಣೆ",
        content: {
          items: [
            { label: "ಅನುಚ್ಛೇದ 29:", text: "ಅಲ್ಪಸಂಖ್ಯಾತರ ಹಿತಾಸಕ್ತಿಗಳ ರಕ್ಷಣೆ - ವಿಭಿನ್ನ ಭಾಷೆ, ಲಿಪಿ ಅಥವಾ ಸಂಸ್ಕೃತಿ ಹೊಂದಿರುವ ನಾಗರಿಕರ ಯಾವುದೇ ವಿಭಾಗಕ್ಕೆ ಅದನ್ನು ಸಂರಕ್ಷಿಸುವ ಹಕ್ಕಿದೆ" },
            { label: "ಅನುಚ್ಛೇದ 30:", text: "ಅಲ್ಪಸಂಖ್ಯಾತರು ಶೈಕ್ಷಣಿಕ ಸಂಸ್ಥೆಗಳನ್ನು ಸ್ಥಾಪಿಸುವ ಮತ್ತು ನಿರ್ವಹಿಸುವ ಹಕ್ಕು" },
          ]
        }
      },
      {
        title: "ಸಾಂವಿಧಾನಿಕ ಪರಿಹಾರಗಳ ಹಕ್ಕು (ಅನುಚ್ಛೇದ 32)",
        description: "ಸಂವಿಧಾನದ ಆತ್ಮ ಮತ್ತು ಹೃದಯ",
        content: {
          items: []
        }
      }
    ],
    writs: {
      title: "ನೀಡಬಹುದಾದ ರಿಟ್‌ಗಳು:",
      items: [
        { name: "ಹೇಬಿಯಸ್ ಕಾರ್ಪಸ್", desc: "ನ್ಯಾಯಾಲಯದ ಮುಂದೆ ವ್ಯಕ್ತಿಯನ್ನು ಹಾಜರುಪಡಿಸುವುದು" },
        { name: "ಮಂಡಮಸ್", desc: "ಸಾರ್ವಜನಿಕ ಕರ್ತವ್ಯವನ್ನು ನಿರ್ವಹಿಸಲು ಆದೇಶ" },
        { name: "ಪ್ರತಿಷೇಧ", desc: "ಕೆಳ ನ್ಯಾಯಾಲಯಗಳು ಅಧಿಕಾರ ವ್ಯಾಪ್ತಿಯನ್ನು ಮೀರುವುದನ್ನು ತಡೆಯುವುದು" },
        { name: "ಸರ್ಷಿಯೊರಾರಿ", desc: "ಕೆಳ ನ್ಯಾಯಾಲಯದ ಆದೇಶವನ್ನು ರದ್ದುಗೊಳಿಸುವುದು" },
        { name: "ಕ್ವೊ ವಾರಂಟೊ", desc: "ಸಾರ್ವಜನಿಕ ಹುದ್ದೆಗೆ ವ್ಯಕ್ತಿಯ ಹಕ್ಕಿನ ಕಾನೂನುಬದ್ಧತೆಯನ್ನು ವಿಚಾರಿಸುವುದು" },
      ]
    },
    ambedkarQuote: "ಅನುಚ್ಛೇದ 32 ಮೂಲಭೂತ ಹಕ್ಕುಗಳ ಜಾರಿಗಾಗಿ ಸುಪ್ರೀಂ ಕೋರ್ಟ್‌ಗೆ ಹೋಗುವ ಹಕ್ಕನ್ನು ಖಾತರಿಪಡಿಸುತ್ತದೆ. ಡಾ. ಬಿ.ಆರ್. ಅಂಬೇಡ್ಕರ್ ಇದನ್ನು ಸಂವಿಧಾನದ 'ಆತ್ಮ ಮತ್ತು ಹೃದಯ' ಎಂದು ಕರೆದರು."
  }
};
