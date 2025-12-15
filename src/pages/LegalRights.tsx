import Header from "@/components/Header";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, Scale, Shield, Users, Heart, BookOpen, Gavel } from "lucide-react";
import { Link } from "react-router-dom";
import legalRightsBg from "@/assets/legal-rights-bg.png";
import { useLanguage } from "@/contexts/LanguageContext";
import { legalRightsTranslations } from "@/translations/legalRightsTranslations";

const LegalRights = () => {
  const { language } = useLanguage();
  const t = legalRightsTranslations[language];
  const icons = [Scale, Shield, Users, Heart, BookOpen, Gavel];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <section className="relative overflow-hidden py-16 md:py-24">
        <div className="absolute inset-0 bg-cover bg-center opacity-25" style={{ backgroundImage: `url(${legalRightsBg})` }} />
        <div className="absolute inset-0 bg-gradient-to-b from-primary/20 via-background/80 to-background" />
        
        <div className="relative container px-4 md:px-8">
          <Link to="/" className="inline-flex items-center gap-2 text-primary hover:text-accent transition-colors mb-8 group">
            <ArrowLeft className="h-4 w-4 group-hover:-translate-x-1 transition-transform" />
            {t.backToHome}
          </Link>
          
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center justify-center p-4 bg-primary/10 rounded-full mb-6 backdrop-blur-sm">
              <Scale className="h-12 w-12 text-primary" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-primary via-primary-light to-accent bg-clip-text text-transparent">
              {t.pageTitle}
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">{t.pageSubtitle}</p>
          </div>
        </div>
      </section>

      <main className="container px-4 pb-16 md:px-8">
        <div className="max-w-5xl mx-auto space-y-8">
          {t.cards.map((card, index) => {
            const Icon = icons[index];
            return (
              <Card key={index} className="border-primary/20 hover:border-primary/40 transition-all duration-300 hover:shadow-elegant overflow-hidden group">
                <CardHeader className="bg-gradient-to-r from-primary/5 to-transparent pb-4">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-primary/10 rounded-xl group-hover:bg-primary/20 transition-colors">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <CardTitle className="text-xl md:text-2xl text-foreground group-hover:text-primary transition-colors">{card.title}</CardTitle>
                      <CardDescription className="text-base mt-1">{card.description}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="text-base leading-relaxed pt-2">
                  {card.content.intro && <p className="mb-4">{card.content.intro}</p>}
                  {index === 0 && <h3 className="font-bold text-lg mb-3 text-accent">{t.keyRightsInclude}</h3>}
                  {index === 1 && <h3 className="font-bold text-lg mb-3 text-accent">{t.sixFundamentalFreedoms}</h3>}
                  {index === 5 ? (
                    <>
                      <div className="p-4 bg-gradient-to-r from-primary/10 to-accent/10 rounded-xl mb-6 border border-primary/20">
                        <p className="text-foreground italic">{t.ambedkarQuote}</p>
                      </div>
                      <h3 className="font-bold text-lg mb-3 text-accent">{t.writs.title}</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {t.writs.items.map((writ, idx) => (
                          <div key={idx} className="p-3 bg-card rounded-lg border border-border hover:border-primary/50 transition-colors">
                            <span className="text-primary font-bold">{writ.name}</span>
                            <p className="text-sm text-muted-foreground">{writ.desc}</p>
                          </div>
                        ))}
                      </div>
                    </>
                  ) : (
                    <ul className="space-y-3">
                      {card.content.items.map((item, idx) => (
                        <li key={idx} className="flex gap-3">
                          <span className="text-primary font-semibold min-w-fit">{item.label || "•"}</span>
                          <span>{item.text}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </CardContent>
              </Card>
            );
          })}
        </div>
      </main>
    </div>
  );
};

export default LegalRights;
