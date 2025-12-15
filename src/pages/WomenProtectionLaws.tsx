import Header from "@/components/Header";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, Heart, Shield, Home, Briefcase, AlertTriangle, Gavel } from "lucide-react";
import { Link } from "react-router-dom";
import womenProtectionBg from "@/assets/women-protection-bg.png";
import { useLanguage } from "@/contexts/LanguageContext";
import { womenProtectionTranslations } from "@/translations/womenProtectionTranslations";

const WomenProtectionLaws = () => {
  const { language } = useLanguage();
  const t = womenProtectionTranslations[language];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <section className="relative overflow-hidden py-16 md:py-24">
        <div className="absolute inset-0 bg-cover bg-center opacity-25" style={{ backgroundImage: `url(${womenProtectionBg})` }} />
        <div className="absolute inset-0 bg-gradient-to-b from-primary/20 via-background/80 to-background" />
        
        <div className="relative container px-4 md:px-8">
          <Link to="/" className="inline-flex items-center gap-2 text-primary hover:text-accent transition-colors mb-8 group">
            <ArrowLeft className="h-4 w-4 group-hover:-translate-x-1 transition-transform" />
            {t.backToHome}
          </Link>
          
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center justify-center p-4 bg-primary/10 rounded-full mb-6 backdrop-blur-sm">
              <Heart className="h-12 w-12 text-primary" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-primary via-primary-light to-accent bg-clip-text text-transparent">{t.pageTitle}</h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">{t.pageSubtitle}</p>
          </div>
        </div>
      </section>

      <main className="container px-4 pb-16 md:px-8">
        <div className="max-w-5xl mx-auto space-y-8">
          <Card className="border-primary/20 hover:border-primary/40 transition-all duration-300 hover:shadow-elegant overflow-hidden group">
            <CardHeader className="bg-gradient-to-r from-primary/5 to-transparent pb-4">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/10 rounded-xl group-hover:bg-primary/20 transition-colors"><Home className="h-6 w-6 text-primary" /></div>
                <div>
                  <CardTitle className="text-xl md:text-2xl text-foreground group-hover:text-primary transition-colors">{t.domesticViolence.title}</CardTitle>
                  <CardDescription className="text-base mt-1">{t.domesticViolence.description}</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent className="text-base leading-relaxed pt-2">
              <p className="mb-6">{t.domesticViolence.content}</p>
              <h3 className="font-bold text-lg mb-3 text-accent">{t.domesticViolence.keyProvisions}</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {t.domesticViolence.provisions.map((item, idx) => (
                  <div key={idx} className="p-4 bg-primary/5 rounded-xl border-l-4 border-primary">
                    <h4 className="font-bold text-primary">{item.title}</h4>
                    <p className="text-sm text-muted-foreground mt-1">{item.desc}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="border-primary/20 hover:border-primary/40 transition-all duration-300 hover:shadow-elegant overflow-hidden group">
            <CardHeader className="bg-gradient-to-r from-primary/5 to-transparent pb-4">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/10 rounded-xl group-hover:bg-primary/20 transition-colors"><Briefcase className="h-6 w-6 text-primary" /></div>
                <div>
                  <CardTitle className="text-xl md:text-2xl text-foreground group-hover:text-primary transition-colors">{t.workplace.title}</CardTitle>
                  <CardDescription className="text-base mt-1">{t.workplace.description}</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent className="text-base leading-relaxed pt-2">
              <p className="mb-6">{t.workplace.content}</p>
              <h3 className="font-bold text-lg mb-3 text-accent">{t.workplace.features}</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {t.workplace.items.map((item, idx) => (
                  <div key={idx} className="p-4 bg-card rounded-xl border border-border hover:border-primary/50 transition-colors flex items-start gap-3">
                    <div className="p-2 bg-primary/10 rounded-lg shrink-0"><Shield className="h-4 w-4 text-primary" /></div>
                    <div><h4 className="font-bold text-foreground">{item.title}</h4><p className="text-sm text-muted-foreground">{item.desc}</p></div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="border-primary/20 hover:border-primary/40 transition-all duration-300 hover:shadow-elegant overflow-hidden group">
            <CardHeader className="bg-gradient-to-r from-primary/5 to-transparent pb-4">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/10 rounded-xl group-hover:bg-primary/20 transition-colors"><AlertTriangle className="h-6 w-6 text-primary" /></div>
                <div>
                  <CardTitle className="text-xl md:text-2xl text-foreground group-hover:text-primary transition-colors">{t.dowry.title}</CardTitle>
                  <CardDescription className="text-base mt-1">{t.dowry.description}</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent className="text-base leading-relaxed pt-2">
              <p className="mb-6">{t.dowry.content}</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 bg-destructive/10 rounded-xl border-l-4 border-destructive"><h4 className="font-bold text-destructive mb-2">{t.dowry.punishment}</h4><p className="text-sm text-muted-foreground">{t.dowry.punishmentDesc}</p></div>
                <div className="p-4 bg-destructive/10 rounded-xl border-l-4 border-destructive"><h4 className="font-bold text-destructive mb-2">{t.dowry.fine}</h4><p className="text-sm text-muted-foreground">{t.dowry.fineDesc}</p></div>
                <div className="p-4 bg-accent/10 rounded-xl border-l-4 border-accent md:col-span-2"><h4 className="font-bold text-accent mb-2">{t.dowry.importantNote}</h4><p className="text-sm text-muted-foreground">{t.dowry.noteDesc}</p></div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-accent/30 bg-gradient-to-br from-accent/10 via-primary/5 to-transparent overflow-hidden">
            <CardHeader className="pb-4">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-accent/20 rounded-xl"><Gavel className="h-6 w-6 text-accent" /></div>
                <div>
                  <CardTitle className="text-xl md:text-2xl text-foreground">{t.ipc.title}</CardTitle>
                  <CardDescription className="text-base mt-1">{t.ipc.description}</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {t.ipc.sections.map((item, idx) => (
                  <div key={idx} className="p-4 bg-card rounded-xl border border-border hover:border-primary/50 hover:shadow-lg transition-all duration-300">
                    <div className="flex items-center gap-3 mb-2"><span className="px-3 py-1 bg-primary/20 text-primary font-bold text-sm rounded-full">Section {item.section}</span></div>
                    <h4 className="font-bold text-foreground">{item.title}</h4>
                    <p className="text-sm text-muted-foreground mt-1">{item.description}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="border-primary/30 bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10 overflow-hidden">
            <CardContent className="py-8">
              <div className="text-center">
                <h3 className="text-xl font-bold text-foreground mb-4">{t.helpline.title}</h3>
                <div className="flex flex-wrap justify-center gap-4">
                  <div className="p-4 bg-card rounded-xl border border-border"><p className="text-3xl font-bold text-primary">181</p><p className="text-sm text-muted-foreground">{t.helpline.womenHelpline}</p></div>
                  <div className="p-4 bg-card rounded-xl border border-border"><p className="text-3xl font-bold text-primary">1091</p><p className="text-sm text-muted-foreground">{t.helpline.womenDistress}</p></div>
                  <div className="p-4 bg-card rounded-xl border border-border"><p className="text-3xl font-bold text-primary">112</p><p className="text-sm text-muted-foreground">{t.helpline.emergency}</p></div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default WomenProtectionLaws;
