import { Language } from "@/contexts/LanguageContext";

export const constitutionalRightsTranslations: Record<Language, {
  backToHome: string;
  pageTitle: string;
  pageSubtitle: string;
  goldenTriangle: {
    title: string;
    description: string;
    content: string;
    quote: string;
  };
  article14: {
    title: string;
    description: string;
    quote: string;
    keyPrinciples: string;
    principles: string[];
    landmarkCases: string;
    cases: { name: string; desc: string }[];
  };
  article19: {
    title: string;
    description: string;
    content: string;
    sixFreedoms: string;
    freedoms: { title: string; desc: string }[];
  };
  article21: {
    title: string;
    description: string;
    quote: string;
    content: string;
    derivedRights: string;
    rights: string[];
    landmarkCases: string;
    cases: { name: string; desc: string }[];
  };
  interconnection: {
    title: string;
    description: string;
    content: string;
    points: string[];
    conclusion: string;
  };
}> = {
  en: {
    backToHome: "Back to Home",
    pageTitle: "The Golden Triangle",
    pageSubtitle: "Articles 14, 19 & 21 - The Core Fundamental Rights of the Indian Constitution",
    goldenTriangle: {
      title: "The Golden Triangle of Indian Constitution",
      description: "Understanding the interconnection of fundamental rights",
      content: "Articles 14, 19, and 21 are collectively known as the \"Golden Triangle\" of the Indian Constitution. These three articles form the core of fundamental rights and are considered the basic principles for the smooth functioning of life for a citizen.",
      quote: "The Golden Triangle provides full protection to individuals from any encroachment upon their rights and breathes vitality into the concept of the rule of law."
    },
    article14: {
      title: "Article 14 - Right to Equality",
      description: "Equality before law and equal protection of laws",
      quote: "\"The State shall not deny to any person equality before the law or the equal protection of the laws within the territory of India.\"",
      keyPrinciples: "Key Principles:",
      principles: [
        "Equality before law: No person is above the law. Every person is subject to the jurisdiction of ordinary courts",
        "Equal protection of laws: Similar treatment of persons in similar circumstances",
        "Prohibits discrimination but permits reasonable classification"
      ],
      landmarkCases: "Landmark Cases:",
      cases: [
        { name: "E.P. Royappa v. State of Tamil Nadu", desc: "Established that equality is the antithesis of arbitrariness" },
        { name: "Maneka Gandhi v. Union of India", desc: "Expanded scope to include reasonableness and fairness" }
      ]
    },
    article19: {
      title: "Article 19 - Right to Freedom",
      description: "Protection of six fundamental freedoms",
      content: "Article 19 guarantees six fundamental freedoms to all citizens of India, subject to reasonable restrictions in the interest of sovereignty, integrity, security of State, public order, decency or morality.",
      sixFreedoms: "The Six Freedoms:",
      freedoms: [
        { title: "19(1)(a) - Speech & Expression", desc: "Right to express views freely including freedom of press" },
        { title: "19(1)(b) - Peaceful Assembly", desc: "Right to hold public meetings without arms" },
        { title: "19(1)(c) - Form Associations", desc: "Right to form unions, political parties" },
        { title: "19(1)(d) - Movement", desc: "Right to move freely throughout India" },
        { title: "19(1)(e) - Residence", desc: "Right to reside in any part of India" },
        { title: "19(1)(g) - Profession", desc: "Right to practice any profession or business" }
      ]
    },
    article21: {
      title: "Article 21 - Right to Life and Personal Liberty",
      description: "The most expansive fundamental right",
      quote: "\"No person shall be deprived of his life or personal liberty except according to procedure established by law.\"",
      content: "Article 21 is the most celebrated article and has been expanded through judicial interpretation to include numerous rights essential for a dignified life.",
      derivedRights: "Rights Derived from Article 21:",
      rights: [
        "Right to Live with Human Dignity",
        "Right to Privacy",
        "Right to Shelter",
        "Right to Health",
        "Right to Clean Environment",
        "Right to Education",
        "Right to Speedy Trial",
        "Right to Food",
        "Right to Legal Aid"
      ],
      landmarkCases: "Landmark Cases:",
      cases: [
        { name: "Maneka Gandhi v. Union of India (1978)", desc: "Procedure must be just, fair and reasonable" },
        { name: "K.S. Puttaswamy v. Union of India (2017)", desc: "Right to privacy is a fundamental right" }
      ]
    },
    interconnection: {
      title: "Interconnection of the Golden Triangle",
      description: "How Articles 14, 19 & 21 work together",
      content: "The Supreme Court has established that these three articles must be read together as they complement and reinforce each other:",
      points: [
        "Article 14 provides the foundation of equality and non-arbitrariness",
        "Article 19 specifies the freedoms that flow from the right to life and liberty",
        "Article 21 ensures any law affecting life and liberty must be just, fair and reasonable",
        "Together they form a comprehensive code of protection for personal liberty"
      ],
      conclusion: "The Golden Triangle ensures that the State cannot take away a person's life or liberty through arbitrary, unfair, or unreasonable means."
    }
  },
  hi: {
    backToHome: "होम पर वापस जाएं",
    pageTitle: "गोल्डन ट्राएंगल",
    pageSubtitle: "अनुच्छेद 14, 19 और 21 - भारतीय संविधान के मूल मौलिक अधिकार",
    goldenTriangle: {
      title: "भारतीय संविधान का गोल्डन ट्राएंगल",
      description: "मौलिक अधिकारों के परस्पर संबंध को समझना",
      content: "अनुच्छेद 14, 19 और 21 को सामूहिक रूप से भारतीय संविधान का \"गोल्डन ट्राएंगल\" कहा जाता है। ये तीन अनुच्छेद मौलिक अधिकारों का मूल हैं और नागरिक के जीवन के सुचारू संचालन के लिए बुनियादी सिद्धांत माने जाते हैं।",
      quote: "गोल्डन ट्राएंगल व्यक्तियों को उनके अधिकारों पर किसी भी अतिक्रमण से पूर्ण सुरक्षा प्रदान करता है और कानून के शासन की अवधारणा में जीवंतता भरता है।"
    },
    article14: {
      title: "अनुच्छेद 14 - समानता का अधिकार",
      description: "कानून के समक्ष समानता और कानूनों की समान सुरक्षा",
      quote: "\"राज्य किसी भी व्यक्ति को भारत के राज्य क्षेत्र में कानून के समक्ष समानता या कानूनों की समान सुरक्षा से वंचित नहीं करेगा।\"",
      keyPrinciples: "मुख्य सिद्धांत:",
      principles: [
        "कानून के समक्ष समानता: कोई भी व्यक्ति कानून से ऊपर नहीं है। प्रत्येक व्यक्ति सामान्य न्यायालयों के अधिकार क्षेत्र के अधीन है",
        "कानूनों की समान सुरक्षा: समान परिस्थितियों में व्यक्तियों के साथ समान व्यवहार",
        "भेदभाव को प्रतिबंधित करता है लेकिन उचित वर्गीकरण की अनुमति देता है"
      ],
      landmarkCases: "ऐतिहासिक मामले:",
      cases: [
        { name: "ई.पी. रोयप्पा बनाम तमिलनाडु राज्य", desc: "स्थापित किया कि समानता मनमानी का विलोम है" },
        { name: "मेनका गांधी बनाम भारत संघ", desc: "तर्कसंगतता और निष्पक्षता को शामिल करने के लिए दायरे का विस्तार किया" }
      ]
    },
    article19: {
      title: "अनुच्छेद 19 - स्वतंत्रता का अधिकार",
      description: "छह मौलिक स्वतंत्रताओं की सुरक्षा",
      content: "अनुच्छेद 19 भारत के सभी नागरिकों को छह मौलिक स्वतंत्रताओं की गारंटी देता है, जो संप्रभुता, अखंडता, राज्य की सुरक्षा, सार्वजनिक व्यवस्था, शालीनता या नैतिकता के हित में उचित प्रतिबंधों के अधीन है।",
      sixFreedoms: "छह स्वतंत्रताएं:",
      freedoms: [
        { title: "19(1)(a) - भाषण और अभिव्यक्ति", desc: "प्रेस की स्वतंत्रता सहित स्वतंत्र रूप से विचार व्यक्त करने का अधिकार" },
        { title: "19(1)(b) - शांतिपूर्ण सभा", desc: "बिना हथियारों के सार्वजनिक बैठकें करने का अधिकार" },
        { title: "19(1)(c) - संघ बनाना", desc: "यूनियन, राजनीतिक दल बनाने का अधिकार" },
        { title: "19(1)(d) - आवागमन", desc: "पूरे भारत में स्वतंत्र रूप से घूमने का अधिकार" },
        { title: "19(1)(e) - निवास", desc: "भारत के किसी भी हिस्से में रहने का अधिकार" },
        { title: "19(1)(g) - व्यवसाय", desc: "किसी भी पेशे या व्यवसाय का अभ्यास करने का अधिकार" }
      ]
    },
    article21: {
      title: "अनुच्छेद 21 - जीवन और व्यक्तिगत स्वतंत्रता का अधिकार",
      description: "सबसे व्यापक मौलिक अधिकार",
      quote: "\"किसी भी व्यक्ति को कानून द्वारा स्थापित प्रक्रिया के अनुसार छोड़कर उसके जीवन या व्यक्तिगत स्वतंत्रता से वंचित नहीं किया जाएगा।\"",
      content: "अनुच्छेद 21 सबसे प्रसिद्ध अनुच्छेद है और न्यायिक व्याख्या के माध्यम से गरिमापूर्ण जीवन के लिए आवश्यक कई अधिकारों को शामिल करने के लिए विस्तारित किया गया है।",
      derivedRights: "अनुच्छेद 21 से प्राप्त अधिकार:",
      rights: [
        "मानवीय गरिमा के साथ जीने का अधिकार",
        "निजता का अधिकार",
        "आश्रय का अधिकार",
        "स्वास्थ्य का अधिकार",
        "स्वच्छ पर्यावरण का अधिकार",
        "शिक्षा का अधिकार",
        "त्वरित सुनवाई का अधिकार",
        "भोजन का अधिकार",
        "कानूनी सहायता का अधिकार"
      ],
      landmarkCases: "ऐतिहासिक मामले:",
      cases: [
        { name: "मेनका गांधी बनाम भारत संघ (1978)", desc: "प्रक्रिया न्यायपूर्ण, निष्पक्ष और उचित होनी चाहिए" },
        { name: "के.एस. पुत्तस्वामी बनाम भारत संघ (2017)", desc: "निजता का अधिकार एक मौलिक अधिकार है" }
      ]
    },
    interconnection: {
      title: "गोल्डन ट्राएंगल का परस्पर संबंध",
      description: "अनुच्छेद 14, 19 और 21 एक साथ कैसे काम करते हैं",
      content: "सुप्रीम कोर्ट ने स्थापित किया है कि इन तीन अनुच्छेदों को एक साथ पढ़ा जाना चाहिए क्योंकि वे एक दूसरे के पूरक और सुदृढ़ हैं:",
      points: [
        "अनुच्छेद 14 समानता और गैर-मनमानी की नींव प्रदान करता है",
        "अनुच्छेद 19 जीवन और स्वतंत्रता के अधिकार से निकलने वाली स्वतंत्रताओं को निर्दिष्ट करता है",
        "अनुच्छेद 21 सुनिश्चित करता है कि जीवन और स्वतंत्रता को प्रभावित करने वाला कोई भी कानून न्यायपूर्ण, निष्पक्ष और उचित होना चाहिए",
        "साथ मिलकर वे व्यक्तिगत स्वतंत्रता की सुरक्षा के लिए एक व्यापक संहिता बनाते हैं"
      ],
      conclusion: "गोल्डन ट्राएंगल सुनिश्चित करता है कि राज्य मनमाने, अनुचित या अतार्किक तरीकों से किसी व्यक्ति के जीवन या स्वतंत्रता को नहीं छीन सकता।"
    }
  },
  kn: {
    backToHome: "ಮುಖಪುಟಕ್ಕೆ ಹಿಂತಿರುಗಿ",
    pageTitle: "ಗೋಲ್ಡನ್ ಟ್ರೈಯಾಂಗಲ್",
    pageSubtitle: "ಅನುಚ್ಛೇದ 14, 19 ಮತ್ತು 21 - ಭಾರತೀಯ ಸಂವಿಧಾನದ ಮೂಲ ಮೂಲಭೂತ ಹಕ್ಕುಗಳು",
    goldenTriangle: {
      title: "ಭಾರತೀಯ ಸಂವಿಧಾನದ ಗೋಲ್ಡನ್ ಟ್ರೈಯಾಂಗಲ್",
      description: "ಮೂಲಭೂತ ಹಕ್ಕುಗಳ ಪರಸ್ಪರ ಸಂಬಂಧವನ್ನು ಅರ್ಥಮಾಡಿಕೊಳ್ಳುವುದು",
      content: "ಅನುಚ್ಛೇದ 14, 19 ಮತ್ತು 21 ಅನ್ನು ಒಟ್ಟಾಗಿ ಭಾರತೀಯ ಸಂವಿಧಾನದ \"ಗೋಲ್ಡನ್ ಟ್ರೈಯಾಂಗಲ್\" ಎಂದು ಕರೆಯಲಾಗುತ್ತದೆ. ಈ ಮೂರು ಅನುಚ್ಛೇದಗಳು ಮೂಲಭೂತ ಹಕ್ಕುಗಳ ಮೂಲವಾಗಿದ್ದು, ನಾಗರಿಕನ ಜೀವನದ ಸುಗಮ ಕಾರ್ಯಾಚರಣೆಗೆ ಮೂಲಭೂತ ತತ್ವಗಳೆಂದು ಪರಿಗಣಿಸಲಾಗಿದೆ.",
      quote: "ಗೋಲ್ಡನ್ ಟ್ರೈಯಾಂಗಲ್ ವ್ಯಕ್ತಿಗಳಿಗೆ ಅವರ ಹಕ್ಕುಗಳ ಮೇಲಿನ ಯಾವುದೇ ಅತಿಕ್ರಮಣದಿಂದ ಸಂಪೂರ್ಣ ರಕ್ಷಣೆ ನೀಡುತ್ತದೆ ಮತ್ತು ಕಾನೂನಿನ ಆಳ್ವಿಕೆಯ ಪರಿಕಲ್ಪನೆಗೆ ಜೀವಂತಿಕೆಯನ್ನು ತುಂಬುತ್ತದೆ."
    },
    article14: {
      title: "ಅನುಚ್ಛೇದ 14 - ಸಮಾನತೆಯ ಹಕ್ಕು",
      description: "ಕಾನೂನಿನ ಮುಂದೆ ಸಮಾನತೆ ಮತ್ತು ಕಾನೂನುಗಳ ಸಮಾನ ರಕ್ಷಣೆ",
      quote: "\"ರಾಜ್ಯವು ಭಾರತದ ಪ್ರದೇಶದೊಳಗೆ ಯಾವುದೇ ವ್ಯಕ್ತಿಗೆ ಕಾನೂನಿನ ಮುಂದೆ ಸಮಾನತೆ ಅಥವಾ ಕಾನೂನುಗಳ ಸಮಾನ ರಕ್ಷಣೆಯನ್ನು ನಿರಾಕರಿಸಬಾರದು.\"",
      keyPrinciples: "ಪ್ರಮುಖ ತತ್ವಗಳು:",
      principles: [
        "ಕಾನೂನಿನ ಮುಂದೆ ಸಮಾನತೆ: ಯಾವುದೇ ವ್ಯಕ್ತಿ ಕಾನೂನಿಗಿಂತ ಮೇಲಲ್ಲ. ಪ್ರತಿಯೊಬ್ಬ ವ್ಯಕ್ತಿ ಸಾಮಾನ್ಯ ನ್ಯಾಯಾಲಯಗಳ ಅಧಿಕಾರ ವ್ಯಾಪ್ತಿಗೆ ಒಳಪಟ್ಟಿದ್ದಾನೆ",
        "ಕಾನೂನುಗಳ ಸಮಾನ ರಕ್ಷಣೆ: ಸಮಾನ ಸಂದರ್ಭಗಳಲ್ಲಿ ವ್ಯಕ್ತಿಗಳಿಗೆ ಸಮಾನ ನಡೆಸುವಿಕೆ",
        "ತಾರತಮ್ಯವನ್ನು ನಿಷೇಧಿಸುತ್ತದೆ ಆದರೆ ಸಮಂಜಸ ವರ್ಗೀಕರಣವನ್ನು ಅನುಮತಿಸುತ್ತದೆ"
      ],
      landmarkCases: "ಐತಿಹಾಸಿಕ ಪ್ರಕರಣಗಳು:",
      cases: [
        { name: "ಇ.ಪಿ. ರಾಯಪ್ಪ ವಿರುದ್ಧ ತಮಿಳುನಾಡು ರಾಜ್ಯ", desc: "ಸಮಾನತೆ ಮನಸ್ವೇಚ್ಛೆಯ ವಿರುದ್ಧ ಎಂದು ಸ್ಥಾಪಿಸಲಾಯಿತು" },
        { name: "ಮೇನಕಾ ಗಾಂಧಿ ವಿರುದ್ಧ ಭಾರತ ಒಕ್ಕೂಟ", desc: "ಸಮಂಜಸತೆ ಮತ್ತು ನ್ಯಾಯಸಮ್ಮತತೆಯನ್ನು ಸೇರಿಸಲು ವ್ಯಾಪ್ತಿಯನ್ನು ವಿಸ್ತರಿಸಲಾಯಿತು" }
      ]
    },
    article19: {
      title: "ಅನುಚ್ಛೇದ 19 - ಸ್ವಾತಂತ್ರ್ಯದ ಹಕ್ಕು",
      description: "ಆರು ಮೂಲಭೂತ ಸ್ವಾತಂತ್ರ್ಯಗಳ ರಕ್ಷಣೆ",
      content: "ಅನುಚ್ಛೇದ 19 ಭಾರತದ ಎಲ್ಲಾ ನಾಗರಿಕರಿಗೆ ಆರು ಮೂಲಭೂತ ಸ್ವಾತಂತ್ರ್ಯಗಳನ್ನು ಖಾತರಿಪಡಿಸುತ್ತದೆ, ಇದು ಸಾರ್ವಭೌಮತ್ವ, ಸಮಗ್ರತೆ, ರಾಜ್ಯದ ಭದ್ರತೆ, ಸಾರ್ವಜನಿಕ ಸುವ್ಯವಸ್ಥೆ, ಸಭ್ಯತೆ ಅಥವಾ ನೈತಿಕತೆಯ ಹಿತಾಸಕ್ತಿಯಲ್ಲಿ ಸಮಂಜಸ ನಿರ್ಬಂಧಗಳಿಗೆ ಒಳಪಟ್ಟಿರುತ್ತದೆ.",
      sixFreedoms: "ಆರು ಸ್ವಾತಂತ್ರ್ಯಗಳು:",
      freedoms: [
        { title: "19(1)(a) - ಮಾತು ಮತ್ತು ಅಭಿವ್ಯಕ್ತಿ", desc: "ಪತ್ರಿಕಾ ಸ್ವಾತಂತ್ರ್ಯ ಸೇರಿದಂತೆ ಮುಕ್ತವಾಗಿ ಅಭಿಪ್ರಾಯಗಳನ್ನು ವ್ಯಕ್ತಪಡಿಸುವ ಹಕ್ಕು" },
        { title: "19(1)(b) - ಶಾಂತಿಯುತ ಸಭೆ", desc: "ಆಯುಧಗಳಿಲ್ಲದೆ ಸಾರ್ವಜನಿಕ ಸಭೆಗಳನ್ನು ನಡೆಸುವ ಹಕ್ಕು" },
        { title: "19(1)(c) - ಸಂಘಗಳನ್ನು ರಚಿಸುವುದು", desc: "ಒಕ್ಕೂಟಗಳು, ರಾಜಕೀಯ ಪಕ್ಷಗಳನ್ನು ರಚಿಸುವ ಹಕ್ಕು" },
        { title: "19(1)(d) - ಚಲನೆ", desc: "ಭಾರತದಾದ್ಯಂತ ಮುಕ್ತವಾಗಿ ಚಲಿಸುವ ಹಕ್ಕು" },
        { title: "19(1)(e) - ನಿವಾಸ", desc: "ಭಾರತದ ಯಾವುದೇ ಭಾಗದಲ್ಲಿ ವಾಸಿಸುವ ಹಕ್ಕು" },
        { title: "19(1)(g) - ವೃತ್ತಿ", desc: "ಯಾವುದೇ ವೃತ್ತಿ ಅಥವಾ ವ್ಯಾಪಾರವನ್ನು ಅಭ್ಯಾಸ ಮಾಡುವ ಹಕ್ಕು" }
      ]
    },
    article21: {
      title: "ಅನುಚ್ಛೇದ 21 - ಜೀವನ ಮತ್ತು ವೈಯಕ್ತಿಕ ಸ್ವಾತಂತ್ರ್ಯದ ಹಕ್ಕು",
      description: "ಅತ್ಯಂತ ವಿಸ್ತಾರವಾದ ಮೂಲಭೂತ ಹಕ್ಕು",
      quote: "\"ಕಾನೂನಿನಿಂದ ಸ್ಥಾಪಿತ ಕಾರ್ಯವಿಧಾನದ ಪ್ರಕಾರವಲ್ಲದೆ ಯಾವುದೇ ವ್ಯಕ್ತಿಯನ್ನು ಅವನ ಜೀವನ ಅಥವಾ ವೈಯಕ್ತಿಕ ಸ್ವಾತಂತ್ರ್ಯದಿಂದ ವಂಚಿತಗೊಳಿಸಬಾರದು.\"",
      content: "ಅನುಚ್ಛೇದ 21 ಅತ್ಯಂತ ಪ್ರಸಿದ್ಧ ಅನುಚ್ಛೇದವಾಗಿದೆ ಮತ್ತು ಗೌರವಯುತ ಜೀವನಕ್ಕೆ ಅಗತ್ಯವಾದ ಹಲವಾರು ಹಕ್ಕುಗಳನ್ನು ಸೇರಿಸಲು ನ್ಯಾಯಾಂಗ ವ್ಯಾಖ್ಯಾನದ ಮೂಲಕ ವಿಸ್ತರಿಸಲಾಗಿದೆ.",
      derivedRights: "ಅನುಚ್ಛೇದ 21 ರಿಂದ ಪಡೆದ ಹಕ್ಕುಗಳು:",
      rights: [
        "ಮಾನವ ಘನತೆಯೊಂದಿಗೆ ಬದುಕುವ ಹಕ್ಕು",
        "ಗೌಪ್ಯತೆಯ ಹಕ್ಕು",
        "ಆಶ್ರಯದ ಹಕ್ಕು",
        "ಆರೋಗ್ಯದ ಹಕ್ಕು",
        "ಸ್ವಚ್ಛ ಪರಿಸರದ ಹಕ್ಕು",
        "ಶಿಕ್ಷಣದ ಹಕ್ಕು",
        "ತ್ವರಿತ ವಿಚಾರಣೆಯ ಹಕ್ಕು",
        "ಆಹಾರದ ಹಕ್ಕು",
        "ಕಾನೂನು ನೆರವಿನ ಹಕ್ಕು"
      ],
      landmarkCases: "ಐತಿಹಾಸಿಕ ಪ್ರಕರಣಗಳು:",
      cases: [
        { name: "ಮೇನಕಾ ಗಾಂಧಿ ವಿರುದ್ಧ ಭಾರತ ಒಕ್ಕೂಟ (1978)", desc: "ಕಾರ್ಯವಿಧಾನವು ನ್ಯಾಯಯುತ, ನ್ಯಾಯಸಮ್ಮತ ಮತ್ತು ಸಮಂಜಸವಾಗಿರಬೇಕು" },
        { name: "ಕೆ.ಎಸ್. ಪುಟ್ಟಸ್ವಾಮಿ ವಿರುದ್ಧ ಭಾರತ ಒಕ್ಕೂಟ (2017)", desc: "ಗೌಪ್ಯತೆಯ ಹಕ್ಕು ಮೂಲಭೂತ ಹಕ್ಕು" }
      ]
    },
    interconnection: {
      title: "ಗೋಲ್ಡನ್ ಟ್ರೈಯಾಂಗಲ್‌ನ ಪರಸ್ಪರ ಸಂಬಂಧ",
      description: "ಅನುಚ್ಛೇದ 14, 19 ಮತ್ತು 21 ಒಟ್ಟಿಗೆ ಹೇಗೆ ಕೆಲಸ ಮಾಡುತ್ತವೆ",
      content: "ಸುಪ್ರೀಂ ಕೋರ್ಟ್ ಈ ಮೂರು ಅನುಚ್ಛೇದಗಳನ್ನು ಒಟ್ಟಿಗೆ ಓದಬೇಕು ಎಂದು ಸ್ಥಾಪಿಸಿದೆ ಏಕೆಂದರೆ ಅವು ಪರಸ್ಪರ ಪೂರಕ ಮತ್ತು ಬಲಪಡಿಸುತ್ತವೆ:",
      points: [
        "ಅನುಚ್ಛೇದ 14 ಸಮಾನತೆ ಮತ್ತು ಮನಸ್ವೇಚ್ಛೆಯಲ್ಲದಿರುವಿಕೆಯ ಅಡಿಪಾಯವನ್ನು ಒದಗಿಸುತ್ತದೆ",
        "ಅನುಚ್ಛೇದ 19 ಜೀವನ ಮತ್ತು ಸ್ವಾತಂತ್ರ್ಯದ ಹಕ್ಕಿನಿಂದ ಹರಿಯುವ ಸ್ವಾತಂತ್ರ್ಯಗಳನ್ನು ನಿರ್ದಿಷ್ಟಪಡಿಸುತ್ತದೆ",
        "ಅನುಚ್ಛೇದ 21 ಜೀವನ ಮತ್ತು ಸ್ವಾತಂತ್ರ್ಯವನ್ನು ಪರಿಣಾಮ ಬೀರುವ ಯಾವುದೇ ಕಾನೂನು ನ್ಯಾಯಯುತ, ನ್ಯಾಯಸಮ್ಮತ ಮತ್ತು ಸಮಂಜಸವಾಗಿರಬೇಕು ಎಂದು ಖಚಿತಪಡಿಸುತ್ತದೆ",
        "ಒಟ್ಟಾಗಿ ಅವು ವೈಯಕ್ತಿಕ ಸ್ವಾತಂತ್ರ್ಯದ ರಕ್ಷಣೆಗಾಗಿ ಸಮಗ್ರ ಸಂಹಿತೆಯನ್ನು ರೂಪಿಸುತ್ತವೆ"
      ],
      conclusion: "ಗೋಲ್ಡನ್ ಟ್ರೈಯಾಂಗಲ್ ರಾಜ್ಯವು ಮನಸ್ವೇಚ್ಛೆಯ, ಅನ್ಯಾಯದ ಅಥವಾ ಅಸಮಂಜಸ ವಿಧಾನಗಳ ಮೂಲಕ ವ್ಯಕ್ತಿಯ ಜೀವನ ಅಥವಾ ಸ್ವಾತಂತ್ರ್ಯವನ್ನು ಕಸಿದುಕೊಳ್ಳಲು ಸಾಧ್ಯವಿಲ್ಲ ಎಂದು ಖಚಿತಪಡಿಸುತ್ತದೆ."
    }
  }
};
