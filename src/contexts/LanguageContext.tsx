import React, { createContext, useContext, useState, ReactNode } from 'react';

export type Language = 'en' | 'hi' | 'kn';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations: Record<Language, Record<string, string>> = {
  en: {
    // Header
    'site.title': 'VOICE OF RIGHTS',
    'search.placeholder': 'Search rights & safety...',
    
    // Hero
    'hero.title': 'Know Your Rights',
    'hero.subtitle': 'Empowering citizens with knowledge of their legal rights and protections',
    'hero.description': 'Understanding your rights is the first step towards justice. Explore comprehensive information about legal protections, constitutional guarantees, and safety procedures available to every citizen.',
    
    // Sections
    'section.rights': 'Know Their Rights',
    'section.selfDefense': 'Self Defense Videos',
    'section.emergency': 'Emergency Helplines',
    'section.faq': 'Frequently Asked Questions',
    'section.glossary': 'Legal Glossary',
    
    // Rights Cards
    'rights.legal.title': 'Legal Rights',
    'rights.legal.desc': 'Fundamental rights of every citizen including freedom, equality, and constitutional remedies',
    'rights.constitutional.title': 'Constitutional Rights',
    'rights.constitutional.desc': 'The Golden Triangle: Articles 14, 19 & 21 - Core fundamental rights of Indian Constitution',
    'rights.women.title': 'Women Protection Laws',
    'rights.women.desc': 'Comprehensive laws protecting women from domestic violence, harassment, and discrimination',
    'rights.consumer.title': 'Consumer Rights',
    'rights.consumer.desc': 'Six fundamental rights protecting consumers and procedures for filing complaints',
    'rights.clickMore': 'Click to learn more about your rights and protections',
    
    // Self Defense
    'defense.verbal.title': 'Verbal De-escalation',
    'defense.verbal.desc': 'Learn techniques to defuse tense situations through effective communication',
    'defense.physical.title': 'Self-Defense Techniques',
    'defense.physical.desc': 'Basic physical defense moves for personal protection',
    'defense.awareness.title': 'Situational Awareness',
    'defense.awareness.desc': 'Stay alert and recognize potential threats before they escalate',
    'defense.cyber.title': 'Cyber Safety',
    'defense.cyber.desc': 'Protect yourself online from scams, fraud, and digital threats',
    'defense.tools.title': 'Defense Tools',
    'defense.tools.desc': 'Legal tools and devices for personal safety and protection',
    
    // Emergency
    'emergency.police': 'Police',
    'emergency.women': 'Women Helpline',
    'emergency.child': 'Child Helpline',
    'emergency.ambulance': 'Ambulance',
    'emergency.fire': 'Fire',
    'emergency.disaster': 'Disaster Management',
    'emergency.cyber': 'Cyber Crime',
    'emergency.senior': 'Senior Citizen',
    
    // Bot
    'bot.greeting': 'Hello! I am your Legal AI Assistant. How can I help you today?',
    'bot.placeholder': 'Ask me about your legal rights...',
    'bot.title': 'Legal AI Assistant',
    
    // Language
    'lang.english': 'English',
    'lang.hindi': 'हिंदी',
    'lang.kannada': 'ಕನ್ನಡ',
    'lang.switch': 'Language',
    
    // Common
    'common.learnMore': 'Learn More',
    'common.callNow': 'Call Now',
    'common.search': 'Search',
  },
  hi: {
    // Header
    'site.title': 'अधिकारों की आवाज़',
    'search.placeholder': 'अधिकार और सुरक्षा खोजें...',
    
    // Hero
    'hero.title': 'अपने अधिकार जानें',
    'hero.subtitle': 'नागरिकों को उनके कानूनी अधिकारों और सुरक्षा की जानकारी देना',
    'hero.description': 'अपने अधिकारों को समझना न्याय की ओर पहला कदम है। प्रत्येक नागरिक के लिए उपलब्ध कानूनी सुरक्षा, संवैधानिक गारंटी और सुरक्षा प्रक्रियाओं के बारे में व्यापक जानकारी देखें।',
    
    // Sections
    'section.rights': 'अपने अधिकार जानें',
    'section.selfDefense': 'आत्मरक्षा वीडियो',
    'section.emergency': 'आपातकालीन हेल्पलाइन',
    'section.faq': 'अक्सर पूछे जाने वाले प्रश्न',
    'section.glossary': 'कानूनी शब्दावली',
    
    // Rights Cards
    'rights.legal.title': 'कानूनी अधिकार',
    'rights.legal.desc': 'स्वतंत्रता, समानता और संवैधानिक उपचार सहित प्रत्येक नागरिक के मौलिक अधिकार',
    'rights.constitutional.title': 'संवैधानिक अधिकार',
    'rights.constitutional.desc': 'गोल्डन ट्राएंगल: अनुच्छेद 14, 19 और 21 - भारतीय संविधान के मूल अधिकार',
    'rights.women.title': 'महिला सुरक्षा कानून',
    'rights.women.desc': 'घरेलू हिंसा, उत्पीड़न और भेदभाव से महिलाओं की रक्षा करने वाले व्यापक कानून',
    'rights.consumer.title': 'उपभोक्ता अधिकार',
    'rights.consumer.desc': 'उपभोक्ताओं की रक्षा करने वाले छह मौलिक अधिकार और शिकायत दर्ज करने की प्रक्रियाएं',
    'rights.clickMore': 'अपने अधिकारों और सुरक्षा के बारे में अधिक जानने के लिए क्लिक करें',
    
    // Self Defense
    'defense.verbal.title': 'मौखिक शांति तकनीक',
    'defense.verbal.desc': 'प्रभावी संवाद के माध्यम से तनावपूर्ण स्थितियों को शांत करना सीखें',
    'defense.physical.title': 'आत्मरक्षा तकनीक',
    'defense.physical.desc': 'व्यक्तिगत सुरक्षा के लिए बुनियादी शारीरिक रक्षा चालें',
    'defense.awareness.title': 'स्थितिजन्य जागरूकता',
    'defense.awareness.desc': 'सतर्क रहें और संभावित खतरों को बढ़ने से पहले पहचानें',
    'defense.cyber.title': 'साइबर सुरक्षा',
    'defense.cyber.desc': 'घोटालों, धोखाधड़ी और डिजिटल खतरों से खुद को ऑनलाइन सुरक्षित रखें',
    'defense.tools.title': 'सुरक्षा उपकरण',
    'defense.tools.desc': 'व्यक्तिगत सुरक्षा के लिए कानूनी उपकरण और उपकरण',
    
    // Emergency
    'emergency.police': 'पुलिस',
    'emergency.women': 'महिला हेल्पलाइन',
    'emergency.child': 'चाइल्ड हेल्पलाइन',
    'emergency.ambulance': 'एम्बुलेंस',
    'emergency.fire': 'अग्निशमन',
    'emergency.disaster': 'आपदा प्रबंधन',
    'emergency.cyber': 'साइबर अपराध',
    'emergency.senior': 'वरिष्ठ नागरिक',
    
    // Bot
    'bot.greeting': 'नमस्ते! मैं आपका कानूनी AI सहायक हूं। आज मैं आपकी कैसे मदद कर सकता हूं?',
    'bot.placeholder': 'अपने कानूनी अधिकारों के बारे में पूछें...',
    'bot.title': 'कानूनी AI सहायक',
    
    // Language
    'lang.english': 'English',
    'lang.hindi': 'हिंदी',
    'lang.kannada': 'ಕನ್ನಡ',
    'lang.switch': 'भाषा',
    
    // Common
    'common.learnMore': 'और जानें',
    'common.callNow': 'अभी कॉल करें',
    'common.search': 'खोजें',
  },
  kn: {
    // Header
    'site.title': 'ಹಕ್ಕುಗಳ ಧ್ವನಿ',
    'search.placeholder': 'ಹಕ್ಕುಗಳು ಮತ್ತು ಸುರಕ್ಷತೆಯನ್ನು ಹುಡುಕಿ...',
    
    // Hero
    'hero.title': 'ನಿಮ್ಮ ಹಕ್ಕುಗಳನ್ನು ತಿಳಿಯಿರಿ',
    'hero.subtitle': 'ನಾಗರಿಕರಿಗೆ ಅವರ ಕಾನೂನು ಹಕ್ಕುಗಳು ಮತ್ತು ರಕ್ಷಣೆಯ ಜ್ಞಾನವನ್ನು ನೀಡುವುದು',
    'hero.description': 'ನಿಮ್ಮ ಹಕ್ಕುಗಳನ್ನು ಅರ್ಥಮಾಡಿಕೊಳ್ಳುವುದು ನ್ಯಾಯದ ಕಡೆಗೆ ಮೊದಲ ಹೆಜ್ಜೆ. ಪ್ರತಿ ನಾಗರಿಕರಿಗೆ ಲಭ್ಯವಿರುವ ಕಾನೂನು ರಕ್ಷಣೆ, ಸಾಂವಿಧಾನಿಕ ಖಾತರಿಗಳು ಮತ್ತು ಸುರಕ್ಷತಾ ಕಾರ್ಯವಿಧಾನಗಳ ಬಗ್ಗೆ ಸಮಗ್ರ ಮಾಹಿತಿಯನ್ನು ಅನ್ವೇಷಿಸಿ.',
    
    // Sections
    'section.rights': 'ನಿಮ್ಮ ಹಕ್ಕುಗಳನ್ನು ತಿಳಿಯಿರಿ',
    'section.selfDefense': 'ಸ್ವಯಂ ರಕ್ಷಣೆ ವೀಡಿಯೊಗಳು',
    'section.emergency': 'ತುರ್ತು ಸಹಾಯವಾಣಿಗಳು',
    'section.faq': 'ಪದೇ ಪದೇ ಕೇಳುವ ಪ್ರಶ್ನೆಗಳು',
    'section.glossary': 'ಕಾನೂನು ಪದಕೋಶ',
    
    // Rights Cards
    'rights.legal.title': 'ಕಾನೂನು ಹಕ್ಕುಗಳು',
    'rights.legal.desc': 'ಸ್ವಾತಂತ್ರ್ಯ, ಸಮಾನತೆ ಮತ್ತು ಸಾಂವಿಧಾನಿಕ ಪರಿಹಾರಗಳನ್ನು ಒಳಗೊಂಡ ಪ್ರತಿ ನಾಗರಿಕರ ಮೂಲಭೂತ ಹಕ್ಕುಗಳು',
    'rights.constitutional.title': 'ಸಾಂವಿಧಾನಿಕ ಹಕ್ಕುಗಳು',
    'rights.constitutional.desc': 'ಗೋಲ್ಡನ್ ಟ್ರೈಯಾಂಗಲ್: ಅನುಚ್ಛೇದ 14, 19 ಮತ್ತು 21 - ಭಾರತೀಯ ಸಂವಿಧಾನದ ಮೂಲ ಹಕ್ಕುಗಳು',
    'rights.women.title': 'ಮಹಿಳಾ ರಕ್ಷಣಾ ಕಾನೂನುಗಳು',
    'rights.women.desc': 'ಗೃಹ ಹಿಂಸೆ, ಕಿರುಕುಳ ಮತ್ತು ತಾರತಮ್ಯದಿಂದ ಮಹಿಳೆಯರನ್ನು ರಕ್ಷಿಸುವ ಸಮಗ್ರ ಕಾನೂನುಗಳು',
    'rights.consumer.title': 'ಗ್ರಾಹಕ ಹಕ್ಕುಗಳು',
    'rights.consumer.desc': 'ಗ್ರಾಹಕರನ್ನು ರಕ್ಷಿಸುವ ಆರು ಮೂಲಭೂತ ಹಕ್ಕುಗಳು ಮತ್ತು ದೂರು ದಾಖಲಿಸುವ ಕಾರ್ಯವಿಧಾನಗಳು',
    'rights.clickMore': 'ನಿಮ್ಮ ಹಕ್ಕುಗಳು ಮತ್ತು ರಕ್ಷಣೆಯ ಬಗ್ಗೆ ಇನ್ನಷ್ಟು ತಿಳಿಯಲು ಕ್ಲಿಕ್ ಮಾಡಿ',
    
    // Self Defense
    'defense.verbal.title': 'ಮೌಖಿಕ ಶಾಂತಿ ತಂತ್ರ',
    'defense.verbal.desc': 'ಪರಿಣಾಮಕಾರಿ ಸಂವಹನದ ಮೂಲಕ ಉದ್ವಿಗ್ನ ಪರಿಸ್ಥಿತಿಗಳನ್ನು ಶಾಂತಗೊಳಿಸಲು ಕಲಿಯಿರಿ',
    'defense.physical.title': 'ಸ್ವಯಂ ರಕ್ಷಣೆ ತಂತ್ರಗಳು',
    'defense.physical.desc': 'ವೈಯಕ್ತಿಕ ರಕ್ಷಣೆಗಾಗಿ ಮೂಲ ಭೌತಿಕ ರಕ್ಷಣಾ ಚಲನೆಗಳು',
    'defense.awareness.title': 'ಪರಿಸ್ಥಿತಿ ಜಾಗೃತಿ',
    'defense.awareness.desc': 'ಎಚ್ಚರವಾಗಿರಿ ಮತ್ತು ಸಂಭಾವ್ಯ ಬೆದರಿಕೆಗಳನ್ನು ಉಲ್ಬಣಗೊಳ್ಳುವ ಮೊದಲು ಗುರುತಿಸಿ',
    'defense.cyber.title': 'ಸೈಬರ್ ಸುರಕ್ಷತೆ',
    'defense.cyber.desc': 'ಹಗರಣಗಳು, ವಂಚನೆ ಮತ್ತು ಡಿಜಿಟಲ್ ಬೆದರಿಕೆಗಳಿಂದ ನಿಮ್ಮನ್ನು ಆನ್‌ಲೈನ್‌ನಲ್ಲಿ ರಕ್ಷಿಸಿಕೊಳ್ಳಿ',
    'defense.tools.title': 'ರಕ್ಷಣಾ ಸಾಧನಗಳು',
    'defense.tools.desc': 'ವೈಯಕ್ತಿಕ ಸುರಕ್ಷತೆ ಮತ್ತು ರಕ್ಷಣೆಗಾಗಿ ಕಾನೂನು ಸಾಧನಗಳು ಮತ್ತು ಸಾಧನಗಳು',
    
    // Emergency
    'emergency.police': 'ಪೊಲೀಸ್',
    'emergency.women': 'ಮಹಿಳಾ ಸಹಾಯವಾಣಿ',
    'emergency.child': 'ಮಕ್ಕಳ ಸಹಾಯವಾಣಿ',
    'emergency.ambulance': 'ಆಂಬುಲೆನ್ಸ್',
    'emergency.fire': 'ಅಗ್ನಿಶಾಮಕ',
    'emergency.disaster': 'ವಿಪತ್ತು ನಿರ್ವಹಣೆ',
    'emergency.cyber': 'ಸೈಬರ್ ಅಪರಾಧ',
    'emergency.senior': 'ಹಿರಿಯ ನಾಗರಿಕ',
    
    // Bot
    'bot.greeting': 'ನಮಸ್ಕಾರ! ನಾನು ನಿಮ್ಮ ಕಾನೂನು AI ಸಹಾಯಕ. ಇಂದು ನಾನು ನಿಮಗೆ ಹೇಗೆ ಸಹಾಯ ಮಾಡಬಹುದು?',
    'bot.placeholder': 'ನಿಮ್ಮ ಕಾನೂನು ಹಕ್ಕುಗಳ ಬಗ್ಗೆ ಕೇಳಿ...',
    'bot.title': 'ಕಾನೂನು AI ಸಹಾಯಕ',
    
    // Language
    'lang.english': 'English',
    'lang.hindi': 'हिंदी',
    'lang.kannada': 'ಕನ್ನಡ',
    'lang.switch': 'ಭಾಷೆ',
    
    // Common
    'common.learnMore': 'ಇನ್ನಷ್ಟು ತಿಳಿಯಿರಿ',
    'common.callNow': 'ಈಗ ಕರೆ ಮಾಡಿ',
    'common.search': 'ಹುಡುಕಿ',
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en');

  const t = (key: string): string => {
    return translations[language][key] || translations['en'][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
