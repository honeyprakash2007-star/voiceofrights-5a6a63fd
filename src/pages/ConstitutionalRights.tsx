import Header from "@/components/Header";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, Scale, Shield, Heart, Sparkles, Link2 } from "lucide-react";
import { Link } from "react-router-dom";
import constitutionalRightsBg from "@/assets/constitutional-rights-bg.png";
import { useLanguage } from "@/contexts/LanguageContext";
import { constitutionalRightsTranslations } from "@/translations/constitutionalRightsTranslations";

const ConstitutionalRights = () => {
  const { language } = useLanguage();
  const t = constitutionalRightsTranslations[language];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <section className="relative overflow-hidden py-16 md:py-24">
        <div className="absolute inset-0 bg-cover bg-center opacity-25" style={{ backgroundImage: `url(${constitutionalRightsBg})` }} />
        <div className="absolute inset-0 bg-gradient-to-b from-primary/20 via-background/80 to-background" />
        
        <div className="relative container px-4 md:px-8">
          <Link to="/" className="inline-flex items-center gap-2 text-primary hover:text-accent transition-colors mb-8 group">
            <ArrowLeft className="h-4 w-4 group-hover:-translate-x-1 transition-transform" />
            {t.backToHome}
          </Link>
          
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center justify-center p-4 bg-accent/10 rounded-full mb-6 backdrop-blur-sm">
              <Sparkles className="h-12 w-12 text-accent" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-primary via-primary-light to-accent bg-clip-text text-transparent">{t.pageTitle}</h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">{t.pageSubtitle}</p>
          </div>
        </div>
      </section>

      <main className="container px-4 pb-16 md:px-8">
        <div className="max-w-5xl mx-auto space-y-8">
          <Card className="border-accent/30 bg-gradient-to-br from-accent/10 via-primary/5 to-transparent overflow-hidden">
            <CardHeader className="pb-4">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-accent/20 rounded-xl"><Link2 className="h-6 w-6 text-accent" /></div>
                <div>
                  <CardTitle className="text-xl md:text-2xl text-foreground">{t.goldenTriangle.title}</CardTitle>
                  <CardDescription className="text-base mt-1">{t.goldenTriangle.description}</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent className="text-base leading-relaxed">
              <p className="mb-4">{t.goldenTriangle.content}</p>
              <div className="p-4 bg-gradient-to-r from-primary/10 to-accent/10 rounded-xl border border-primary/20">
                <p className="text-foreground italic">{t.goldenTriangle.quote}</p>
              </div>
            </CardContent>
          </Card>

          <Card className="border-primary/20 hover:border-primary/40 transition-all duration-300 hover:shadow-elegant overflow-hidden group">
            <CardHeader className="bg-gradient-to-r from-primary/5 to-transparent pb-4">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/10 rounded-xl group-hover:bg-primary/20 transition-colors"><Scale className="h-6 w-6 text-primary" /></div>
                <div>
                  <CardTitle className="text-xl md:text-2xl text-foreground group-hover:text-primary transition-colors">{t.article14.title}</CardTitle>
                  <CardDescription className="text-base mt-1">{t.article14.description}</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent className="text-base leading-relaxed pt-2">
              <div className="p-4 bg-primary/5 rounded-xl border-l-4 border-primary mb-6"><p className="italic text-foreground">{t.article14.quote}</p></div>
              <h3 className="font-bold text-lg mb-3 text-accent">{t.article14.keyPrinciples}</h3>
              <ul className="space-y-3 mb-6">
                {t.article14.principles.map((p, i) => <li key={i} className="flex gap-3"><span className="text-primary font-semibold min-w-fit">•</span><span>{p}</span></li>)}
              </ul>
              <h3 className="font-bold text-lg mb-3 text-accent">{t.article14.landmarkCases}</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {t.article14.cases.map((c, i) => <div key={i} className="p-3 bg-card rounded-lg border border-border hover:border-primary/50 transition-colors"><span className="text-primary font-bold">{c.name}</span><p className="text-sm text-muted-foreground">{c.desc}</p></div>)}
              </div>
            </CardContent>
          </Card>

          <Card className="border-primary/20 hover:border-primary/40 transition-all duration-300 hover:shadow-elegant overflow-hidden group">
            <CardHeader className="bg-gradient-to-r from-primary/5 to-transparent pb-4">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/10 rounded-xl group-hover:bg-primary/20 transition-colors"><Shield className="h-6 w-6 text-primary" /></div>
                <div>
                  <CardTitle className="text-xl md:text-2xl text-foreground group-hover:text-primary transition-colors">{t.article19.title}</CardTitle>
                  <CardDescription className="text-base mt-1">{t.article19.description}</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent className="text-base leading-relaxed pt-2">
              <p className="mb-6">{t.article19.content}</p>
              <h3 className="font-bold text-lg mb-4 text-accent">{t.article19.sixFreedoms}</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {t.article19.freedoms.map((f, i) => <div key={i} className="p-4 bg-primary/5 rounded-xl border-l-4 border-primary"><span className="text-primary font-bold">{f.title}</span><p className="text-sm text-muted-foreground mt-1">{f.desc}</p></div>)}
              </div>
            </CardContent>
          </Card>

          <Card className="border-primary/20 hover:border-primary/40 transition-all duration-300 hover:shadow-elegant overflow-hidden group">
            <CardHeader className="bg-gradient-to-r from-primary/5 to-transparent pb-4">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/10 rounded-xl group-hover:bg-primary/20 transition-colors"><Heart className="h-6 w-6 text-primary" /></div>
                <div>
                  <CardTitle className="text-xl md:text-2xl text-foreground group-hover:text-primary transition-colors">{t.article21.title}</CardTitle>
                  <CardDescription className="text-base mt-1">{t.article21.description}</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent className="text-base leading-relaxed pt-2">
              <div className="p-4 bg-primary/5 rounded-xl border-l-4 border-primary mb-6"><p className="italic text-foreground">{t.article21.quote}</p></div>
              <p className="mb-6">{t.article21.content}</p>
              <h3 className="font-bold text-lg mb-4 text-accent">{t.article21.derivedRights}</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                {t.article21.rights.map((r, i) => <div key={i} className="p-3 bg-card rounded-lg border border-border hover:border-primary/50 transition-colors"><span className="text-primary">•</span> {r}</div>)}
              </div>
              <h3 className="font-bold text-lg mb-3 mt-6 text-accent">{t.article21.landmarkCases}</h3>
              <div className="space-y-3">
                {t.article21.cases.map((c, i) => <div key={i} className="p-4 bg-accent/10 rounded-lg border-l-4 border-accent"><span className="text-accent font-bold">{c.name}</span><p className="text-sm text-muted-foreground mt-1">{c.desc}</p></div>)}
              </div>
            </CardContent>
          </Card>

          <Card className="border-accent/30 bg-gradient-to-br from-primary/5 via-accent/5 to-transparent overflow-hidden">
            <CardHeader className="pb-4">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-accent/20 rounded-xl"><Link2 className="h-6 w-6 text-accent" /></div>
                <div>
                  <CardTitle className="text-xl md:text-2xl text-foreground">{t.interconnection.title}</CardTitle>
                  <CardDescription className="text-base mt-1">{t.interconnection.description}</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent className="text-base leading-relaxed">
              <p className="mb-4">{t.interconnection.content}</p>
              <ul className="space-y-3 mb-6">
                {t.interconnection.points.map((p, i) => <li key={i} className="flex gap-3"><span className="text-primary">•</span>{p}</li>)}
              </ul>
              <div className="p-4 bg-gradient-to-r from-primary/10 to-accent/10 rounded-xl border border-primary/20">
                <p className="font-semibold text-foreground">{t.interconnection.conclusion}</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default ConstitutionalRights;
