import { Language } from "@/contexts/LanguageContext";

export const consumerRightsTranslations: Record<Language, {
  backToHome: string;
  pageTitle: string;
  pageSubtitle: string;
  consumerProtectionAct: {
    title: string;
    description: string;
    content: string;
    keyObjectives: string;
    objectives: string[];
  };
  sixRights: {
    title: string;
    description: string;
    rights: { title: string; description: string }[];
  };
  disputesRedressal: {
    title: string;
    description: string;
    district: { title: string; amount: string; note: string };
    state: { title: string; amount: string; note: string };
    national: { title: string; amount: string; note: string };
  };
  fileComplaint: {
    title: string;
    description: string;
    steps: { title: string; desc: string }[];
    importantPoints: string;
    points: string[];
  };
  ecommerce: {
    title: string;
    description: string;
    content: string;
    rules: string[];
  };
  helpline: {
    title: string;
    description: string;
    number: string;
    services: string[];
  };
}> = {
  en: {
    backToHome: "Back to Home",
    pageTitle: "Consumer Rights in India",
    pageSubtitle: "Understanding your rights under Consumer Protection Act, 2019",
    consumerProtectionAct: {
      title: "Consumer Protection Act, 2019",
      description: "Comprehensive law for consumer protection",
      content: "The Consumer Protection Act, 2019 replaced the earlier Act of 1986 and provides a robust framework to safeguard consumer interests and uphold fairness in trade and commerce.",
      keyObjectives: "Key Objectives:",
      objectives: [
        "Protection of consumer rights",
        "Establishment of consumer protection councils",
        "Consumer Disputes Redressal Commissions",
        "Regulation of e-commerce and direct selling",
        "Prevention of unfair trade practices"
      ]
    },
    sixRights: {
      title: "Six Fundamental Consumer Rights",
      description: "Rights explicitly outlined in the Consumer Protection Act",
      rights: [
        { title: "Right to Safety", description: "Protection against goods and services hazardous to life and property" },
        { title: "Right to be Informed", description: "Know quality, quantity, potency, purity, standard and price" },
        { title: "Right to Choose", description: "Access to variety of goods at competitive prices" },
        { title: "Right to be Heard", description: "Consumer interests receive due consideration" },
        { title: "Right to Seek Redressal", description: "File complaints for defective goods or deficient services" },
        { title: "Right to Consumer Education", description: "Acquire knowledge to become an informed consumer" }
      ]
    },
    disputesRedressal: {
      title: "Consumer Disputes Redressal Commissions",
      description: "Three-tier quasi-judicial mechanism",
      district: { title: "District Commission", amount: "Complaints up to ₹1 crore", note: "Present in every district" },
      state: { title: "State Commission", amount: "₹1 crore to ₹10 crores", note: "Appellate authority over District" },
      national: { title: "National Commission", amount: "Above ₹10 crores", note: "Highest consumer court" }
    },
    fileComplaint: {
      title: "How to File a Consumer Complaint",
      description: "Step-by-step process for seeking redressal",
      steps: [
        { title: "Identify the appropriate forum", desc: "Based on value of goods/services" },
        { title: "Prepare the complaint", desc: "Details of complainant, opposite party, facts, relief sought" },
        { title: "Attach supporting documents", desc: "Bills, receipts, warranty cards, correspondence" },
        { title: "File online or offline", desc: "Use e-Daakhil portal (edaakhil.nic.in)" },
        { title: "Pay fee if required", desc: "No fee for complaints up to ₹5 lakhs" },
        { title: "Attend hearings", desc: "Cooperate with commission proceedings" }
      ],
      importantPoints: "Important Points:",
      points: [
        "Complaint must be filed within 2 years from date of cause of action",
        "No court fee for complaints up to ₹5 lakhs",
        "Consumer can appear in person or through authorized agent"
      ]
    },
    ecommerce: {
      title: "E-commerce and Consumer Rights",
      description: "Special provisions for online shopping",
      content: "The Consumer Protection (E-Commerce) Rules, 2020 provide additional safeguards:",
      rules: [
        "Clear return, refund, exchange policies",
        "No manipulation of search results",
        "Mandatory display of country of origin",
        "Grievance redressal within 48 hours",
        "Protection against fake reviews",
        "Clear display of total price"
      ]
    },
    helpline: {
      title: "National Consumer Helpline",
      description: "24x7 assistance for consumers",
      number: "1800-11-4000",
      services: [
        "Information about consumer rights",
        "Guidance on filing complaints",
        "Mediation and conciliation services",
        "Assistance in 17 languages"
      ]
    }
  },
  hi: {
    backToHome: "होम पर वापस जाएं",
    pageTitle: "भारत में उपभोक्ता अधिकार",
    pageSubtitle: "उपभोक्ता संरक्षण अधिनियम, 2019 के तहत अपने अधिकारों को समझना",
    consumerProtectionAct: {
      title: "उपभोक्ता संरक्षण अधिनियम, 2019",
      description: "उपभोक्ता संरक्षण के लिए व्यापक कानून",
      content: "उपभोक्ता संरक्षण अधिनियम, 2019 ने 1986 के पुराने अधिनियम को प्रतिस्थापित किया और उपभोक्ता हितों की रक्षा और व्यापार में निष्पक्षता बनाए रखने के लिए एक मजबूत ढांचा प्रदान करता है।",
      keyObjectives: "मुख्य उद्देश्य:",
      objectives: [
        "उपभोक्ता अधिकारों की सुरक्षा",
        "उपभोक्ता संरक्षण परिषदों की स्थापना",
        "उपभोक्ता विवाद निवारण आयोग",
        "ई-कॉमर्स और प्रत्यक्ष बिक्री का विनियमन",
        "अनुचित व्यापार प्रथाओं की रोकथाम"
      ]
    },
    sixRights: {
      title: "छह मौलिक उपभोक्ता अधिकार",
      description: "उपभोक्ता संरक्षण अधिनियम में स्पष्ट रूप से उल्लिखित अधिकार",
      rights: [
        { title: "सुरक्षा का अधिकार", description: "जीवन और संपत्ति के लिए खतरनाक वस्तुओं और सेवाओं से सुरक्षा" },
        { title: "सूचित होने का अधिकार", description: "गुणवत्ता, मात्रा, शक्ति, शुद्धता, मानक और मूल्य जानना" },
        { title: "चुनने का अधिकार", description: "प्रतिस्पर्धी कीमतों पर विभिन्न वस्तुओं तक पहुंच" },
        { title: "सुनवाई का अधिकार", description: "उपभोक्ता हितों पर उचित विचार" },
        { title: "निवारण मांगने का अधिकार", description: "दोषपूर्ण वस्तुओं या कमी सेवाओं के लिए शिकायत दर्ज करना" },
        { title: "उपभोक्ता शिक्षा का अधिकार", description: "एक जागरूक उपभोक्ता बनने के लिए ज्ञान प्राप्त करना" }
      ]
    },
    disputesRedressal: {
      title: "उपभोक्ता विवाद निवारण आयोग",
      description: "त्रि-स्तरीय अर्ध-न्यायिक तंत्र",
      district: { title: "जिला आयोग", amount: "₹1 करोड़ तक की शिकायतें", note: "हर जिले में मौजूद" },
      state: { title: "राज्य आयोग", amount: "₹1 करोड़ से ₹10 करोड़", note: "जिला के ऊपर अपीलीय प्राधिकरण" },
      national: { title: "राष्ट्रीय आयोग", amount: "₹10 करोड़ से ऊपर", note: "उच्चतम उपभोक्ता न्यायालय" }
    },
    fileComplaint: {
      title: "उपभोक्ता शिकायत कैसे दर्ज करें",
      description: "निवारण प्राप्त करने की चरण-दर-चरण प्रक्रिया",
      steps: [
        { title: "उचित मंच की पहचान करें", desc: "वस्तुओं/सेवाओं के मूल्य के आधार पर" },
        { title: "शिकायत तैयार करें", desc: "शिकायतकर्ता, विपक्षी पक्ष, तथ्य, मांगी गई राहत का विवरण" },
        { title: "सहायक दस्तावेज संलग्न करें", desc: "बिल, रसीदें, वारंटी कार्ड, पत्राचार" },
        { title: "ऑनलाइन या ऑफलाइन दाखिल करें", desc: "ई-दाखिल पोर्टल (edaakhil.nic.in) का उपयोग करें" },
        { title: "यदि आवश्यक हो तो शुल्क का भुगतान करें", desc: "₹5 लाख तक की शिकायतों के लिए कोई शुल्क नहीं" },
        { title: "सुनवाई में उपस्थित हों", desc: "आयोग की कार्यवाही में सहयोग करें" }
      ],
      importantPoints: "महत्वपूर्ण बिंदु:",
      points: [
        "शिकायत कारण की तारीख से 2 वर्ष के भीतर दर्ज होनी चाहिए",
        "₹5 लाख तक की शिकायतों के लिए कोई न्यायालय शुल्क नहीं",
        "उपभोक्ता व्यक्तिगत रूप से या अधिकृत एजेंट के माध्यम से उपस्थित हो सकता है"
      ]
    },
    ecommerce: {
      title: "ई-कॉमर्स और उपभोक्ता अधिकार",
      description: "ऑनलाइन खरीदारी के लिए विशेष प्रावधान",
      content: "उपभोक्ता संरक्षण (ई-कॉमर्स) नियम, 2020 अतिरिक्त सुरक्षा प्रदान करते हैं:",
      rules: [
        "स्पष्ट वापसी, रिफंड, एक्सचेंज नीतियां",
        "खोज परिणामों में हेरफेर नहीं",
        "मूल देश का अनिवार्य प्रदर्शन",
        "48 घंटे के भीतर शिकायत निवारण",
        "नकली समीक्षाओं से सुरक्षा",
        "कुल मूल्य का स्पष्ट प्रदर्शन"
      ]
    },
    helpline: {
      title: "राष्ट्रीय उपभोक्ता हेल्पलाइन",
      description: "उपभोक्ताओं के लिए 24x7 सहायता",
      number: "1800-11-4000",
      services: [
        "उपभोक्ता अधिकारों के बारे में जानकारी",
        "शिकायत दर्ज करने पर मार्गदर्शन",
        "मध्यस्थता और सुलह सेवाएं",
        "17 भाषाओं में सहायता"
      ]
    }
  },
  kn: {
    backToHome: "ಮುಖಪುಟಕ್ಕೆ ಹಿಂತಿರುಗಿ",
    pageTitle: "ಭಾರತದಲ್ಲಿ ಗ್ರಾಹಕ ಹಕ್ಕುಗಳು",
    pageSubtitle: "ಗ್ರಾಹಕ ಸಂರಕ್ಷಣಾ ಕಾಯಿದೆ, 2019 ಅಡಿಯಲ್ಲಿ ನಿಮ್ಮ ಹಕ್ಕುಗಳನ್ನು ಅರ್ಥಮಾಡಿಕೊಳ್ಳುವುದು",
    consumerProtectionAct: {
      title: "ಗ್ರಾಹಕ ಸಂರಕ್ಷಣಾ ಕಾಯಿದೆ, 2019",
      description: "ಗ್ರಾಹಕ ಸಂರಕ್ಷಣೆಗಾಗಿ ಸಮಗ್ರ ಕಾನೂನು",
      content: "ಗ್ರಾಹಕ ಸಂರಕ್ಷಣಾ ಕಾಯಿದೆ, 2019 ಹಿಂದಿನ 1986 ರ ಕಾಯಿದೆಯನ್ನು ಬದಲಾಯಿಸಿತು ಮತ್ತು ಗ್ರಾಹಕ ಹಿತಾಸಕ್ತಿಗಳನ್ನು ರಕ್ಷಿಸಲು ಮತ್ತು ವ್ಯಾಪಾರದಲ್ಲಿ ನ್ಯಾಯಸಮ್ಮತತೆಯನ್ನು ಎತ್ತಿಹಿಡಿಯಲು ಬಲವಾದ ಚೌಕಟ್ಟನ್ನು ಒದಗಿಸುತ್ತದೆ.",
      keyObjectives: "ಪ್ರಮುಖ ಉದ್ದೇಶಗಳು:",
      objectives: [
        "ಗ್ರಾಹಕ ಹಕ್ಕುಗಳ ರಕ್ಷಣೆ",
        "ಗ್ರಾಹಕ ಸಂರಕ್ಷಣಾ ಮಂಡಳಿಗಳ ಸ್ಥಾಪನೆ",
        "ಗ್ರಾಹಕ ವಿವಾದ ಪರಿಹಾರ ಆಯೋಗಗಳು",
        "ಇ-ಕಾಮರ್ಸ್ ಮತ್ತು ನೇರ ಮಾರಾಟದ ನಿಯಂತ್ರಣ",
        "ಅನ್ಯಾಯದ ವ್ಯಾಪಾರ ಅಭ್ಯಾಸಗಳ ತಡೆಗಟ್ಟುವಿಕೆ"
      ]
    },
    sixRights: {
      title: "ಆರು ಮೂಲಭೂತ ಗ್ರಾಹಕ ಹಕ್ಕುಗಳು",
      description: "ಗ್ರಾಹಕ ಸಂರಕ್ಷಣಾ ಕಾಯಿದೆಯಲ್ಲಿ ಸ್ಪಷ್ಟವಾಗಿ ವಿವರಿಸಲಾದ ಹಕ್ಕುಗಳು",
      rights: [
        { title: "ಸುರಕ್ಷತೆಯ ಹಕ್ಕು", description: "ಜೀವನ ಮತ್ತು ಆಸ್ತಿಗೆ ಅಪಾಯಕಾರಿ ಸರಕುಗಳು ಮತ್ತು ಸೇವೆಗಳ ವಿರುದ್ಧ ರಕ್ಷಣೆ" },
        { title: "ತಿಳಿದಿರುವ ಹಕ್ಕು", description: "ಗುಣಮಟ್ಟ, ಪ್ರಮಾಣ, ಶಕ್ತಿ, ಶುದ್ಧತೆ, ಮಾನದಂಡ ಮತ್ತು ಬೆಲೆಯನ್ನು ತಿಳಿಯುವುದು" },
        { title: "ಆಯ್ಕೆಯ ಹಕ್ಕು", description: "ಸ್ಪರ್ಧಾತ್ಮಕ ಬೆಲೆಗಳಲ್ಲಿ ವಿವಿಧ ಸರಕುಗಳಿಗೆ ಪ್ರವೇಶ" },
        { title: "ಕೇಳಿಸಿಕೊಳ್ಳುವ ಹಕ್ಕು", description: "ಗ್ರಾಹಕ ಹಿತಾಸಕ್ತಿಗಳಿಗೆ ಸೂಕ್ತ ಪರಿಗಣನೆ" },
        { title: "ಪರಿಹಾರ ಕೋರುವ ಹಕ್ಕು", description: "ದೋಷಪೂರಿತ ಸರಕುಗಳು ಅಥವಾ ಕೊರತೆಯ ಸೇವೆಗಳಿಗೆ ದೂರು ದಾಖಲಿಸುವುದು" },
        { title: "ಗ್ರಾಹಕ ಶಿಕ್ಷಣದ ಹಕ್ಕು", description: "ತಿಳುವಳಿಕೆಯುಳ್ಳ ಗ್ರಾಹಕರಾಗಲು ಜ್ಞಾನವನ್ನು ಪಡೆಯುವುದು" }
      ]
    },
    disputesRedressal: {
      title: "ಗ್ರಾಹಕ ವಿವಾದ ಪರಿಹಾರ ಆಯೋಗಗಳು",
      description: "ಮೂರು ಹಂತದ ಅರೆ-ನ್ಯಾಯಾಂಗ ಕಾರ್ಯವಿಧಾನ",
      district: { title: "ಜಿಲ್ಲಾ ಆಯೋಗ", amount: "₹1 ಕೋಟಿವರೆಗಿನ ದೂರುಗಳು", note: "ಪ್ರತಿ ಜಿಲ್ಲೆಯಲ್ಲಿ ಇರುತ್ತದೆ" },
      state: { title: "ರಾಜ್ಯ ಆಯೋಗ", amount: "₹1 ಕೋಟಿ ರಿಂದ ₹10 ಕೋಟಿ", note: "ಜಿಲ್ಲೆಯ ಮೇಲೆ ಮೇಲ್ಮನವಿ ಪ್ರಾಧಿಕಾರ" },
      national: { title: "ರಾಷ್ಟ್ರೀಯ ಆಯೋಗ", amount: "₹10 ಕೋಟಿಗಿಂತ ಮೇಲೆ", note: "ಅತ್ಯುನ್ನತ ಗ್ರಾಹಕ ನ್ಯಾಯಾಲಯ" }
    },
    fileComplaint: {
      title: "ಗ್ರಾಹಕ ದೂರು ಹೇಗೆ ದಾಖಲಿಸುವುದು",
      description: "ಪರಿಹಾರ ಪಡೆಯಲು ಹಂತ-ಹಂತದ ಪ್ರಕ್ರಿಯೆ",
      steps: [
        { title: "ಸೂಕ್ತ ವೇದಿಕೆಯನ್ನು ಗುರುತಿಸಿ", desc: "ಸರಕುಗಳು/ಸೇವೆಗಳ ಮೌಲ್ಯದ ಆಧಾರದ ಮೇಲೆ" },
        { title: "ದೂರು ತಯಾರಿಸಿ", desc: "ದೂರುದಾರ, ವಿರುದ್ಧ ಪಕ್ಷ, ಸಂಗತಿಗಳು, ಕೋರಿದ ಪರಿಹಾರದ ವಿವರಗಳು" },
        { title: "ಬೆಂಬಲ ದಾಖಲೆಗಳನ್ನು ಲಗತ್ತಿಸಿ", desc: "ಬಿಲ್‌ಗಳು, ರಸೀದಿಗಳು, ವಾರಂಟಿ ಕಾರ್ಡ್‌ಗಳು, ಪತ್ರವ್ಯವಹಾರ" },
        { title: "ಆನ್‌ಲೈನ್ ಅಥವಾ ಆಫ್‌ಲೈನ್ ಸಲ್ಲಿಸಿ", desc: "ಇ-ದಾಖಿಲ್ ಪೋರ್ಟಲ್ (edaakhil.nic.in) ಬಳಸಿ" },
        { title: "ಅಗತ್ಯವಿದ್ದರೆ ಶುಲ್ಕ ಪಾವತಿಸಿ", desc: "₹5 ಲಕ್ಷದವರೆಗಿನ ದೂರುಗಳಿಗೆ ಶುಲ್ಕವಿಲ್ಲ" },
        { title: "ವಿಚಾರಣೆಗಳಿಗೆ ಹಾಜರಾಗಿ", desc: "ಆಯೋಗದ ಕಾರ್ಯವಿಧಾನಗಳಲ್ಲಿ ಸಹಕರಿಸಿ" }
      ],
      importantPoints: "ಮುಖ್ಯ ಅಂಶಗಳು:",
      points: [
        "ಕಾರಣದ ದಿನಾಂಕದಿಂದ 2 ವರ್ಷಗಳ ಒಳಗೆ ದೂರು ಸಲ್ಲಿಸಬೇಕು",
        "₹5 ಲಕ್ಷದವರೆಗಿನ ದೂರುಗಳಿಗೆ ನ್ಯಾಯಾಲಯ ಶುಲ್ಕವಿಲ್ಲ",
        "ಗ್ರಾಹಕರು ವೈಯಕ್ತಿಕವಾಗಿ ಅಥವಾ ಅಧಿಕೃತ ಏಜೆಂಟ್ ಮೂಲಕ ಹಾಜರಾಗಬಹುದು"
      ]
    },
    ecommerce: {
      title: "ಇ-ಕಾಮರ್ಸ್ ಮತ್ತು ಗ್ರಾಹಕ ಹಕ್ಕುಗಳು",
      description: "ಆನ್‌ಲೈನ್ ಶಾಪಿಂಗ್‌ಗಾಗಿ ವಿಶೇಷ ನಿಬಂಧನೆಗಳು",
      content: "ಗ್ರಾಹಕ ಸಂರಕ್ಷಣೆ (ಇ-ಕಾಮರ್ಸ್) ನಿಯಮಗಳು, 2020 ಹೆಚ್ಚುವರಿ ರಕ್ಷಣೆಗಳನ್ನು ಒದಗಿಸುತ್ತವೆ:",
      rules: [
        "ಸ್ಪಷ್ಟ ಹಿಂತಿರುಗಿಸುವಿಕೆ, ಮರುಪಾವತಿ, ವಿನಿಮಯ ನೀತಿಗಳು",
        "ಹುಡುಕಾಟ ಫಲಿತಾಂಶಗಳ ಕುಶಲತೆ ಇಲ್ಲ",
        "ಮೂಲ ದೇಶದ ಕಡ್ಡಾಯ ಪ್ರದರ್ಶನ",
        "48 ಗಂಟೆಗಳ ಒಳಗೆ ದೂರು ಪರಿಹಾರ",
        "ನಕಲಿ ವಿಮರ್ಶೆಗಳ ವಿರುದ್ಧ ರಕ್ಷಣೆ",
        "ಒಟ್ಟು ಬೆಲೆಯ ಸ್ಪಷ್ಟ ಪ್ರದರ್ಶನ"
      ]
    },
    helpline: {
      title: "ರಾಷ್ಟ್ರೀಯ ಗ್ರಾಹಕ ಸಹಾಯವಾಣಿ",
      description: "ಗ್ರಾಹಕರಿಗೆ 24x7 ಸಹಾಯ",
      number: "1800-11-4000",
      services: [
        "ಗ್ರಾಹಕ ಹಕ್ಕುಗಳ ಬಗ್ಗೆ ಮಾಹಿತಿ",
        "ದೂರು ಸಲ್ಲಿಸುವ ಬಗ್ಗೆ ಮಾರ್ಗದರ್ಶನ",
        "ಮಧ್ಯಸ್ಥಿಕೆ ಮತ್ತು ಸಮನ್ವಯ ಸೇವೆಗಳು",
        "17 ಭಾಷೆಗಳಲ್ಲಿ ಸಹಾಯ"
      ]
    }
  }
};
