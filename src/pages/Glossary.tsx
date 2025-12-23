import { useState } from "react";
import { Search, BookOpen, Bot, Sparkles, ArrowRight, Globe } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import legalAiBot from "@/assets/legal-ai-bot.jpg";

type Language = "en" | "kn" | "hi";

const translations = {
  en: {
    aiPowered: "AI-Powered Legal Assistant",
    legalTerms: "Legal Terms",
    dictionary: "Dictionary",
    heroDesc: "Your intelligent guide to understanding legal terminology. Search terms, explore categories, or chat with our AI assistant for instant explanations.",
    legalAiAssistant: "Legal AI Assistant",
    online: "Online - Ready to help",
    searchPlaceholder: "Search legal terms...",
    askPlaceholder: "Ask me about any legal term...",
    footer: "© 2024 Voice of Rights. Empowering citizens with legal knowledge.",
    all: "All",
    botGreeting: "Hello! I'm your Legal Assistant. Ask me anything about legal terms, rights, or laws. I'm here to help you understand complex legal concepts in simple language.",
  },
  kn: {
    aiPowered: "AI-ಚಾಲಿತ ಕಾನೂನು ಸಹಾಯಕ",
    legalTerms: "ಕಾನೂನು ಪದಗಳು",
    dictionary: "ನಿಘಂಟು",
    heroDesc: "ಕಾನೂನು ಪರಿಭಾಷೆಯನ್ನು ಅರ್ಥಮಾಡಿಕೊಳ್ಳಲು ನಿಮ್ಮ ಬುದ್ಧಿವಂತ ಮಾರ್ಗದರ್ಶಿ. ಪದಗಳನ್ನು ಹುಡುಕಿ, ವರ್ಗಗಳನ್ನು ಅನ್ವೇಷಿಸಿ, ಅಥವಾ ತ್ವರಿತ ವಿವರಣೆಗಳಿಗಾಗಿ ನಮ್ಮ AI ಸಹಾಯಕನೊಂದಿಗೆ ಚಾಟ್ ಮಾಡಿ.",
    legalAiAssistant: "ಕಾನೂನು AI ಸಹಾಯಕ",
    online: "ಆನ್‌ಲೈನ್ - ಸಹಾಯಕ್ಕೆ ಸಿದ್ಧ",
    searchPlaceholder: "ಕಾನೂನು ಪದಗಳನ್ನು ಹುಡುಕಿ...",
    askPlaceholder: "ಯಾವುದೇ ಕಾನೂನು ಪದದ ಬಗ್ಗೆ ನನ್ನನ್ನು ಕೇಳಿ...",
    footer: "© 2024 ವಾಯ್ಸ್ ಆಫ್ ರೈಟ್ಸ್. ಕಾನೂನು ಜ್ಞಾನದೊಂದಿಗೆ ನಾಗರಿಕರನ್ನು ಸಬಲೀಕರಣಗೊಳಿಸುವುದು.",
    all: "ಎಲ್ಲಾ",
    botGreeting: "ನಮಸ್ಕಾರ! ನಾನು ನಿಮ್ಮ ಕಾನೂನು ಸಹಾಯಕ. ಕಾನೂನು ಪದಗಳು, ಹಕ್ಕುಗಳು ಅಥವಾ ಕಾನೂನುಗಳ ಬಗ್ಗೆ ನನ್ನನ್ನು ಏನಾದರೂ ಕೇಳಿ.",
  },
  hi: {
    aiPowered: "AI-संचालित कानूनी सहायक",
    legalTerms: "कानूनी शब्द",
    dictionary: "शब्दकोश",
    heroDesc: "कानूनी शब्दावली को समझने के लिए आपका बुद्धिमान मार्गदर्शक। शब्द खोजें, श्रेणियां एक्सप्लोर करें, या तुरंत स्पष्टीकरण के लिए हमारे AI सहायक से चैट करें।",
    legalAiAssistant: "कानूनी AI सहायक",
    online: "ऑनलाइन - मदद के लिए तैयार",
    searchPlaceholder: "कानूनी शब्द खोजें...",
    askPlaceholder: "किसी भी कानूनी शब्द के बारे में पूछें...",
    footer: "© 2024 वॉइस ऑफ राइट्स। कानूनी ज्ञान के साथ नागरिकों को सशक्त बनाना।",
    all: "सभी",
    botGreeting: "नमस्ते! मैं आपका कानूनी सहायक हूं। कानूनी शब्दों, अधिकारों या कानूनों के बारे में मुझसे कुछ भी पूछें।",
  },
};

const legalTerms = {
  en: [
    { term: "Affidavit", definition: "A written statement confirmed by oath or affirmation, used as evidence in court proceedings.", category: "Court Procedures" },
    { term: "Bail", definition: "The temporary release of an accused person awaiting trial, sometimes on condition that a sum of money is lodged.", category: "Criminal Law" },
    { term: "Cognizable Offense", definition: "An offense for which a police officer may arrest without a warrant.", category: "Criminal Law" },
    { term: "FIR", definition: "A written document prepared by police when they receive information about a cognizable offense.", category: "Criminal Law" },
    { term: "Habeas Corpus", definition: "A writ requiring a person under arrest to be brought before a judge.", category: "Constitutional Law" },
    { term: "PIL", definition: "Public Interest Litigation - a case filed for the protection of public interest.", category: "Constitutional Law" },
  ],
  kn: [
    { term: "ಅಫಿಡವಿಟ್", definition: "ಪ್ರಮಾಣ ಅಥವಾ ದೃಢೀಕರಣದಿಂದ ದೃಢೀಕರಿಸಲ್ಪಟ್ಟ ಲಿಖಿತ ಹೇಳಿಕೆ, ನ್ಯಾಯಾಲಯದ ಪ್ರಕ್ರಿಯೆಗಳಲ್ಲಿ ಸಾಕ್ಷ್ಯವಾಗಿ ಬಳಸಲಾಗುತ್ತದೆ.", category: "ನ್ಯಾಯಾಲಯ ಪ್ರಕ್ರಿಯೆಗಳು" },
    { term: "ಜಾಮೀನು", definition: "ವಿಚಾರಣೆಗೆ ಕಾಯುತ್ತಿರುವ ಆರೋಪಿಯ ತಾತ್ಕಾಲಿಕ ಬಿಡುಗಡೆ.", category: "ಕ್ರಿಮಿನಲ್ ಕಾನೂನು" },
    { term: "ಅರಿವಿನ ಅಪರಾಧ", definition: "ಪೊಲೀಸ್ ಅಧಿಕಾರಿ ವಾರಂಟ್ ಇಲ್ಲದೆ ಬಂಧಿಸಬಹುದಾದ ಅಪರಾಧ.", category: "ಕ್ರಿಮಿನಲ್ ಕಾನೂನು" },
    { term: "FIR", definition: "ಅರಿವಿನ ಅಪರಾಧದ ಬಗ್ಗೆ ಮಾಹಿತಿ ಸ್ವೀಕರಿಸಿದಾಗ ಪೊಲೀಸರು ತಯಾರಿಸುವ ಲಿಖಿತ ದಾಖಲೆ.", category: "ಕ್ರಿಮಿನಲ್ ಕಾನೂನು" },
    { term: "ಹೇಬಿಯಸ್ ಕಾರ್ಪಸ್", definition: "ಬಂಧನದಲ್ಲಿರುವ ವ್ಯಕ್ತಿಯನ್ನು ನ್ಯಾಯಾಧೀಶರ ಮುಂದೆ ಹಾಜರುಪಡಿಸುವ ಆದೇಶ.", category: "ಸಾಂವಿಧಾನಿಕ ಕಾನೂನು" },
    { term: "PIL", definition: "ಸಾರ್ವಜನಿಕ ಹಿತಾಸಕ್ತಿ ದಾವೆ - ಸಾರ್ವಜನಿಕ ಹಿತಾಸಕ್ತಿಯ ರಕ್ಷಣೆಗಾಗಿ ದಾಖಲಿಸಲಾದ ಪ್ರಕರಣ.", category: "ಸಾಂವಿಧಾನಿಕ ಕಾನೂನು" },
  ],
  hi: [
    { term: "शपथ पत्र", definition: "शपथ या प्रतिज्ञान द्वारा पुष्टि किया गया लिखित बयान, अदालती कार्यवाही में साक्ष्य के रूप में उपयोग किया जाता है।", category: "न्यायालय प्रक्रियाएं" },
    { term: "जमानत", definition: "मुकदमे की प्रतीक्षा कर रहे आरोपी व्यक्ति की अस्थायी रिहाई।", category: "आपराधिक कानून" },
    { term: "संज्ञेय अपराध", definition: "वह अपराध जिसके लिए पुलिस अधिकारी बिना वारंट के गिरफ्तार कर सकता है।", category: "आपराधिक कानून" },
    { term: "FIR", definition: "संज्ञेय अपराध की जानकारी मिलने पर पुलिस द्वारा तैयार किया गया लिखित दस्तावेज।", category: "आपराधिक कानून" },
    { term: "बंदी प्रत्यक्षीकरण", definition: "गिरफ्तार व्यक्ति को न्यायाधीश के समक्ष पेश करने का आदेश।", category: "संवैधानिक कानून" },
    { term: "PIL", definition: "जनहित याचिका - जनहित की रक्षा के लिए दायर किया गया मामला।", category: "संवैधानिक कानून" },
  ],
};

const Glossary = () => {
  const [language, setLanguage] = useState<Language>("en");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [chatMessage, setChatMessage] = useState("");
  
  const t = translations[language];
  const currentTerms = legalTerms[language];
  const categories = [t.all, ...Array.from(new Set(currentTerms.map(term => term.category)))];

  const [chatHistory, setChatHistory] = useState<Array<{ role: string; content: string }>>([
    { role: "bot", content: t.botGreeting }
  ]);

  const filteredTerms = currentTerms.filter(term => {
    const matchesSearch = term.term.toLowerCase().includes(searchQuery.toLowerCase()) ||
      term.definition.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === t.all || term.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const handleSendMessage = () => {
    if (!chatMessage.trim()) return;
    
    setChatHistory(prev => [...prev, { role: "user", content: chatMessage }]);
    
    const lowerMessage = chatMessage.toLowerCase();
    let botResponse = language === "en" ? "I understand you're asking about legal matters. " 
      : language === "kn" ? "ನೀವು ಕಾನೂನು ವಿಷಯಗಳ ಬಗ್ಗೆ ಕೇಳುತ್ತಿದ್ದೀರಿ ಎಂದು ನಾನು ಅರ್ಥಮಾಡಿಕೊಂಡಿದ್ದೇನೆ. "
      : "मैं समझता हूं कि आप कानूनी मामलों के बारे में पूछ रहे हैं। ";
    
    const matchedTerm = currentTerms.find(term => 
      lowerMessage.includes(term.term.toLowerCase())
    );
    
    if (matchedTerm) {
      botResponse = `**${matchedTerm.term}**: ${matchedTerm.definition}`;
    } else {
      botResponse = language === "en" 
        ? "That's an interesting legal question. Try asking about specific terms like 'FIR', 'Bail', 'Habeas Corpus', or 'PIL'."
        : language === "kn"
        ? "ಅದು ಒಂದು ಆಸಕ್ತಿದಾಯಕ ಕಾನೂನು ಪ್ರಶ್ನೆ. 'FIR', 'ಜಾಮೀನು', 'ಹೇಬಿಯಸ್ ಕಾರ್ಪಸ್' ನಂತಹ ನಿರ್ದಿಷ್ಟ ಪದಗಳ ಬಗ್ಗೆ ಕೇಳಿ."
        : "यह एक दिलचस्प कानूनी सवाल है। 'FIR', 'जमानत', 'बंदी प्रत्यक्षीकरण' जैसे विशिष्ट शब्दों के बारे में पूछें।";
    }
    
    setTimeout(() => {
      setChatHistory(prev => [...prev, { role: "bot", content: botResponse }]);
    }, 500);
    
    setChatMessage("");
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section with AI Bot */}
      <section className="relative py-16 px-4 overflow-hidden bg-gradient-hero">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10 opacity-50"></div>
        
        {/* Language Selector */}
        <div className="container mx-auto max-w-6xl relative z-20 mb-4">
          <div className="flex justify-end">
            <div className="inline-flex items-center gap-2 bg-card/80 backdrop-blur-sm border border-border rounded-full p-1">
              <Globe className="w-4 h-4 text-muted-foreground ml-2" />
              <Button
                variant={language === "en" ? "default" : "ghost"}
                size="sm"
                onClick={() => setLanguage("en")}
                className={language === "en" ? "bg-primary text-primary-foreground rounded-full" : "text-foreground rounded-full"}
              >
                English
              </Button>
              <Button
                variant={language === "kn" ? "default" : "ghost"}
                size="sm"
                onClick={() => setLanguage("kn")}
                className={language === "kn" ? "bg-primary text-primary-foreground rounded-full" : "text-foreground rounded-full"}
              >
                ಕನ್ನಡ
              </Button>
              <Button
                variant={language === "hi" ? "default" : "ghost"}
                size="sm"
                onClick={() => setLanguage("hi")}
                className={language === "hi" ? "bg-primary text-primary-foreground rounded-full" : "text-foreground rounded-full"}
              >
                हिंदी
              </Button>
            </div>
          </div>
        </div>
        
        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-8">
            {/* Bot Image */}
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-r from-primary via-secondary to-accent rounded-full blur-2xl opacity-40 group-hover:opacity-60 transition-opacity duration-500 animate-pulse"></div>
              <div className="relative">
                <img 
                  src={legalAiBot} 
                  alt="Legal AI Assistant" 
                  className="w-64 h-64 lg:w-80 lg:h-80 object-contain drop-shadow-2xl transform group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute -bottom-2 -right-2 bg-gradient-to-r from-accent to-secondary rounded-full p-2 shadow-lg animate-bounce">
                  <Sparkles className="w-6 h-6 text-accent-foreground" />
                </div>
              </div>
            </div>
            
            {/* Title & Description */}
            <div className="text-center lg:text-left flex-1">
              <div className="inline-flex items-center gap-2 bg-primary/20 backdrop-blur-sm rounded-full px-4 py-2 mb-4">
                <Bot className="w-5 h-5 text-primary-foreground" />
                <span className="text-primary-foreground text-sm font-medium">{t.aiPowered}</span>
              </div>
              <h1 className="text-4xl lg:text-5xl font-bold text-primary-foreground mb-4">
                {t.legalTerms} <span className="bg-gradient-to-r from-accent to-secondary bg-clip-text text-transparent">{t.dictionary}</span>
              </h1>
              <p className="text-lg text-primary-foreground/80 max-w-xl">
                {t.heroDesc}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* AI Chat Section */}
      <section className="py-8 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="bg-card backdrop-blur-xl rounded-3xl border border-border overflow-hidden shadow-2xl">
            <div className="bg-gradient-to-r from-primary/20 to-secondary/20 p-4 border-b border-border">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-r from-primary to-secondary flex items-center justify-center">
                  <Bot className="w-6 h-6 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">{t.legalAiAssistant}</h3>
                  <p className="text-xs text-accent flex items-center gap-1">
                    <span className="w-2 h-2 bg-accent rounded-full animate-pulse"></span>
                    {t.online}
                  </p>
                </div>
              </div>
            </div>
            
            {/* Chat Messages */}
            <div className="h-64 overflow-y-auto p-4 space-y-4 bg-muted/30">
              {chatHistory.map((msg, index) => (
                <div key={index} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`max-w-[80%] rounded-2xl px-4 py-3 ${
                    msg.role === 'user' 
                      ? 'bg-gradient-to-r from-primary to-secondary text-primary-foreground' 
                      : 'bg-card text-foreground border border-border'
                  }`}>
                    <p className="text-sm whitespace-pre-wrap">{msg.content}</p>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Chat Input */}
            <div className="p-4 border-t border-border bg-card">
              <div className="flex gap-2">
                <Input
                  value={chatMessage}
                  onChange={(e) => setChatMessage(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                  placeholder={t.askPlaceholder}
                  className="flex-1 bg-muted border-border text-foreground placeholder:text-muted-foreground"
                />
                <Button 
                  onClick={handleSendMessage}
                  className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 text-primary-foreground"
                >
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Search & Filter Section */}
      <section className="py-8 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row gap-4 mb-8">
            <div className="relative flex-1">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <Input
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder={t.searchPlaceholder}
                className="pl-12 bg-card border-border text-foreground placeholder:text-muted-foreground h-12"
              />
            </div>
            <div className="flex gap-2 flex-wrap">
              {categories.map(category => (
                <Button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  variant={selectedCategory === category ? "default" : "outline"}
                  className={selectedCategory === category 
                    ? "bg-gradient-to-r from-primary to-secondary text-primary-foreground" 
                    : "border-border text-foreground hover:bg-muted"
                  }
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>

          {/* Terms Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredTerms.map((term, index) => (
              <div 
                key={index}
                className="group bg-card backdrop-blur-sm rounded-2xl p-6 border border-border hover:border-primary/50 hover:bg-muted/50 transition-all duration-300"
              >
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                    {term.term}
                  </h3>
                  <BookOpen className="w-5 h-5 text-primary" />
                </div>
                <span className="inline-block px-3 py-1 bg-primary/20 text-primary text-xs rounded-full mb-3">
                  {term.category}
                </span>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {term.definition}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-border">
        <div className="container mx-auto text-center">
          <p className="text-muted-foreground">{t.footer}</p>
        </div>
      </footer>
    </div>
  );
};

export default Glossary;
