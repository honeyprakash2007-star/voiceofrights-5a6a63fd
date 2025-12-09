import { useState } from "react";
import { Search, BookOpen, Bot, Sparkles, ArrowRight } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import legalAiBot from "@/assets/legal-ai-bot.png";

const legalTerms = [
  {
    term: "Affidavit",
    definition: "A written statement confirmed by oath or affirmation, used as evidence in court proceedings.",
    category: "Court Procedures"
  },
  {
    term: "Bail",
    definition: "The temporary release of an accused person awaiting trial, sometimes on condition that a sum of money is lodged to guarantee their appearance in court.",
    category: "Criminal Law"
  },
  {
    term: "Cognizable Offense",
    definition: "An offense for which a police officer may arrest without a warrant and can start investigation without the permission of a court.",
    category: "Criminal Law"
  },
  {
    term: "Defamation",
    definition: "The action of damaging the good reputation of someone through false statements. It can be libel (written) or slander (spoken).",
    category: "Civil Law"
  },
  {
    term: "FIR (First Information Report)",
    definition: "A written document prepared by police when they receive information about the commission of a cognizable offense.",
    category: "Criminal Law"
  },
  {
    term: "Habeas Corpus",
    definition: "A writ requiring a person under arrest to be brought before a judge or into court, to secure the person's release unless lawful grounds are shown for their detention.",
    category: "Constitutional Law"
  },
  {
    term: "Injunction",
    definition: "A judicial order that restrains a person from beginning or continuing an action threatening or invading the legal right of another.",
    category: "Civil Law"
  },
  {
    term: "Jurisprudence",
    definition: "The theory or philosophy of law, or the study of law and the structure of the legal system.",
    category: "Legal Theory"
  },
  {
    term: "Locus Standi",
    definition: "The right or capacity to bring an action or to appear in a court. It refers to a party's standing to sue.",
    category: "Court Procedures"
  },
  {
    term: "Mens Rea",
    definition: "The intention or knowledge of wrongdoing that constitutes part of a crime, as opposed to the action or conduct of the accused.",
    category: "Criminal Law"
  },
  {
    term: "Non-Cognizable Offense",
    definition: "An offense for which a police officer cannot arrest without a warrant and cannot investigate without the permission of a court.",
    category: "Criminal Law"
  },
  {
    term: "PIL (Public Interest Litigation)",
    definition: "Litigation for the protection of public interest. It is a case filed in a court of law for the protection of public interest.",
    category: "Constitutional Law"
  },
  {
    term: "Quash",
    definition: "To reject or void, especially by legal procedure. Courts can quash proceedings if they find them to be without legal basis.",
    category: "Court Procedures"
  },
  {
    term: "RLS (Right to Legal Services)",
    definition: "The right of every citizen to receive free legal aid and services if they cannot afford legal representation.",
    category: "Constitutional Law"
  },
  {
    term: "Suo Motu",
    definition: "An action taken by a court on its own motion, without any request by the parties involved.",
    category: "Court Procedures"
  },
  {
    term: "Tort",
    definition: "A wrongful act or an infringement of a right leading to civil legal liability, other than under contract.",
    category: "Civil Law"
  },
  {
    term: "Ultra Vires",
    definition: "Beyond one's legal power or authority. An act that requires legal authority but is done without it.",
    category: "Legal Theory"
  },
  {
    term: "Writ",
    definition: "A form of written command in the name of a court or other legal authority to act, or abstain from acting, in some way.",
    category: "Constitutional Law"
  }
];

const categories = ["All", ...Array.from(new Set(legalTerms.map(t => t.category)))];

const Glossary = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [chatMessage, setChatMessage] = useState("");
  const [chatHistory, setChatHistory] = useState<Array<{ role: string; content: string }>>([
    { role: "bot", content: "Hello! I'm your Legal Assistant. Ask me anything about legal terms, rights, or laws. I'm here to help you understand complex legal concepts in simple language." }
  ]);

  const filteredTerms = legalTerms.filter(term => {
    const matchesSearch = term.term.toLowerCase().includes(searchQuery.toLowerCase()) ||
      term.definition.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === "All" || term.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const handleSendMessage = () => {
    if (!chatMessage.trim()) return;
    
    setChatHistory(prev => [...prev, { role: "user", content: chatMessage }]);
    
    const lowerMessage = chatMessage.toLowerCase();
    let botResponse = "I understand you're asking about legal matters. ";
    
    const matchedTerm = legalTerms.find(t => 
      lowerMessage.includes(t.term.toLowerCase())
    );
    
    if (matchedTerm) {
      botResponse = `**${matchedTerm.term}**: ${matchedTerm.definition}`;
    } else if (lowerMessage.includes("fir") || lowerMessage.includes("police")) {
      botResponse = "An FIR (First Information Report) is a written document prepared by police when they receive information about a cognizable offense. You can file an FIR at any police station, and the police are obligated to register it.";
    } else if (lowerMessage.includes("bail")) {
      botResponse = "Bail is the temporary release of an accused person awaiting trial. There are different types: Regular Bail, Anticipatory Bail, and Interim Bail. The type depends on your specific situation.";
    } else if (lowerMessage.includes("lawyer") || lowerMessage.includes("advocate")) {
      botResponse = "If you need legal representation but cannot afford it, you have the Right to Free Legal Aid under Article 39A of the Constitution. You can contact your nearest Legal Services Authority for assistance.";
    } else if (lowerMessage.includes("rights") || lowerMessage.includes("fundamental")) {
      botResponse = "Fundamental Rights are guaranteed under Part III of the Indian Constitution (Articles 12-35). They include Right to Equality, Right to Freedom, Right against Exploitation, Right to Freedom of Religion, Cultural and Educational Rights, and Right to Constitutional Remedies.";
    } else {
      botResponse = "That's an interesting legal question. For specific legal advice, I recommend consulting with a qualified lawyer. However, I can help explain general legal terms and concepts. Try asking about specific terms like 'FIR', 'Bail', 'Habeas Corpus', or 'PIL'.";
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
                <span className="text-primary-foreground text-sm font-medium">AI-Powered Legal Assistant</span>
              </div>
              <h1 className="text-4xl lg:text-5xl font-bold text-primary-foreground mb-4">
                Legal Terms <span className="bg-gradient-to-r from-accent to-secondary bg-clip-text text-transparent">Dictionary</span>
              </h1>
              <p className="text-lg text-primary-foreground/80 max-w-xl">
                Your intelligent guide to understanding legal terminology. Search terms, explore categories, or chat with our AI assistant for instant explanations.
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
                  <h3 className="font-semibold text-foreground">Legal AI Assistant</h3>
                  <p className="text-xs text-accent flex items-center gap-1">
                    <span className="w-2 h-2 bg-accent rounded-full animate-pulse"></span>
                    Online - Ready to help
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
                  placeholder="Ask me about any legal term..."
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
                placeholder="Search legal terms..."
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
          <p className="text-muted-foreground">© 2024 Voice of Rights. Empowering citizens with legal knowledge.</p>
        </div>
      </footer>
    </div>
  );
};

export default Glossary;
