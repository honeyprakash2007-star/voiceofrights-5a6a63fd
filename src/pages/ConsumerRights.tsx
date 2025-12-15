import Header from "@/components/Header";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, ShoppingBag, Shield, AlertCircle, CheckCircle, Info, Gavel, Globe, Phone } from "lucide-react";
import { Link } from "react-router-dom";
import consumerRightsBg from "@/assets/consumer-rights-bg.png";
import { useLanguage } from "@/contexts/LanguageContext";
import { consumerRightsTranslations } from "@/translations/consumerRightsTranslations";

const ConsumerRights = () => {
  const { language } = useLanguage();
  const t = consumerRightsTranslations[language];
  const sixRightsIcons = [Shield, Info, CheckCircle, AlertCircle, Gavel, ShoppingBag];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <section className="relative overflow-hidden py-16 md:py-24">
        <div className="absolute inset-0 bg-cover bg-center opacity-25" style={{ backgroundImage: `url(${consumerRightsBg})` }} />
        <div className="absolute inset-0 bg-gradient-to-b from-primary/20 via-background/80 to-background" />
        
        <div className="relative container px-4 md:px-8">
          <Link to="/" className="inline-flex items-center gap-2 text-primary hover:text-accent transition-colors mb-8 group">
            <ArrowLeft className="h-4 w-4 group-hover:-translate-x-1 transition-transform" />
            {t.backToHome}
          </Link>
          
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center justify-center p-4 bg-primary/10 rounded-full mb-6 backdrop-blur-sm">
              <ShoppingBag className="h-12 w-12 text-primary" />
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
                <div className="p-3 bg-primary/10 rounded-xl group-hover:bg-primary/20 transition-colors"><Gavel className="h-6 w-6 text-primary" /></div>
                <div>
                  <CardTitle className="text-xl md:text-2xl text-foreground group-hover:text-primary transition-colors">{t.consumerProtectionAct.title}</CardTitle>
                  <CardDescription className="text-base mt-1">{t.consumerProtectionAct.description}</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent className="text-base leading-relaxed pt-2">
              <p className="mb-6">{t.consumerProtectionAct.content}</p>
              <h3 className="font-bold text-lg mb-3 text-accent">{t.consumerProtectionAct.keyObjectives}</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {t.consumerProtectionAct.objectives.map((item, idx) => (
                  <div key={idx} className="p-3 bg-card rounded-lg border border-border hover:border-primary/50 transition-colors flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary shrink-0" /><span>{item}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="border-accent/30 bg-gradient-to-br from-accent/10 via-primary/5 to-transparent overflow-hidden">
            <CardHeader className="pb-4">
              <CardTitle className="text-xl md:text-2xl text-foreground text-center">{t.sixRights.title}</CardTitle>
              <CardDescription className="text-base mt-1 text-center">{t.sixRights.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {t.sixRights.rights.map((right, idx) => {
                  const Icon = sixRightsIcons[idx];
                  return (
                    <div key={idx} className="p-4 bg-card rounded-xl border border-border hover:border-primary/50 hover:shadow-lg transition-all duration-300 group/card">
                      <div className="p-2 bg-primary/10 rounded-lg w-fit mb-3 group-hover/card:bg-primary/20 transition-colors"><Icon className="h-5 w-5 text-primary" /></div>
                      <h3 className="font-bold text-foreground mb-1">{right.title}</h3>
                      <p className="text-sm text-muted-foreground">{right.description}</p>
                    </div>
                  );
                })}
              </div>
            </CardContent>
          </Card>

          <Card className="border-primary/20 hover:border-primary/40 transition-all duration-300 hover:shadow-elegant overflow-hidden group">
            <CardHeader className="bg-gradient-to-r from-primary/5 to-transparent pb-4">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/10 rounded-xl group-hover:bg-primary/20 transition-colors"><Gavel className="h-6 w-6 text-primary" /></div>
                <div>
                  <CardTitle className="text-xl md:text-2xl text-foreground group-hover:text-primary transition-colors">{t.disputesRedressal.title}</CardTitle>
                  <CardDescription className="text-base mt-1">{t.disputesRedressal.description}</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent className="text-base leading-relaxed pt-2">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="p-4 bg-primary/5 rounded-xl border-l-4 border-primary"><h3 className="font-bold text-primary mb-2">{t.disputesRedressal.district.title}</h3><p className="text-sm text-muted-foreground mb-2">{t.disputesRedressal.district.amount}</p><p className="text-xs text-muted-foreground">{t.disputesRedressal.district.note}</p></div>
                <div className="p-4 bg-primary/5 rounded-xl border-l-4 border-primary"><h3 className="font-bold text-primary mb-2">{t.disputesRedressal.state.title}</h3><p className="text-sm text-muted-foreground mb-2">{t.disputesRedressal.state.amount}</p><p className="text-xs text-muted-foreground">{t.disputesRedressal.state.note}</p></div>
                <div className="p-4 bg-primary/5 rounded-xl border-l-4 border-primary"><h3 className="font-bold text-primary mb-2">{t.disputesRedressal.national.title}</h3><p className="text-sm text-muted-foreground mb-2">{t.disputesRedressal.national.amount}</p><p className="text-xs text-muted-foreground">{t.disputesRedressal.national.note}</p></div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-primary/20 hover:border-primary/40 transition-all duration-300 hover:shadow-elegant overflow-hidden group">
            <CardHeader className="bg-gradient-to-r from-primary/5 to-transparent pb-4">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/10 rounded-xl group-hover:bg-primary/20 transition-colors"><AlertCircle className="h-6 w-6 text-primary" /></div>
                <div>
                  <CardTitle className="text-xl md:text-2xl text-foreground group-hover:text-primary transition-colors">{t.fileComplaint.title}</CardTitle>
                  <CardDescription className="text-base mt-1">{t.fileComplaint.description}</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent className="text-base leading-relaxed pt-2">
              <div className="space-y-3 mb-6">
                {t.fileComplaint.steps.map((item, idx) => (
                  <div key={idx} className="flex gap-4 items-start p-3 bg-card rounded-lg border border-border hover:border-primary/50 transition-colors">
                    <div className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center shrink-0"><span className="text-primary font-bold text-sm">{idx + 1}</span></div>
                    <div><h4 className="font-bold text-foreground">{item.title}</h4><p className="text-sm text-muted-foreground">{item.desc}</p></div>
                  </div>
                ))}
              </div>
              <div className="p-4 bg-accent/10 rounded-xl border border-accent/20">
                <h3 className="font-bold text-accent mb-2">{t.fileComplaint.importantPoints}</h3>
                <ul className="space-y-1 text-sm text-muted-foreground">
                  {t.fileComplaint.points.map((p, i) => <li key={i}>• {p}</li>)}
                </ul>
              </div>
            </CardContent>
          </Card>

          <Card className="border-primary/20 hover:border-primary/40 transition-all duration-300 hover:shadow-elegant overflow-hidden group">
            <CardHeader className="bg-gradient-to-r from-primary/5 to-transparent pb-4">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/10 rounded-xl group-hover:bg-primary/20 transition-colors"><Globe className="h-6 w-6 text-primary" /></div>
                <div>
                  <CardTitle className="text-xl md:text-2xl text-foreground group-hover:text-primary transition-colors">{t.ecommerce.title}</CardTitle>
                  <CardDescription className="text-base mt-1">{t.ecommerce.description}</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent className="text-base leading-relaxed pt-2">
              <p className="mb-4">{t.ecommerce.content}</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {t.ecommerce.rules.map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2 p-2"><CheckCircle className="h-4 w-4 text-primary shrink-0" /><span className="text-sm">{item}</span></div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="border-accent/30 bg-gradient-to-br from-primary/10 via-accent/10 to-transparent overflow-hidden">
            <CardHeader className="pb-4">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-accent/20 rounded-xl"><Phone className="h-6 w-6 text-accent" /></div>
                <div>
                  <CardTitle className="text-xl md:text-2xl text-foreground">{t.helpline.title}</CardTitle>
                  <CardDescription className="text-base mt-1">{t.helpline.description}</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-center py-6 mb-4 bg-card rounded-xl border border-border">
                <p className="text-4xl md:text-5xl font-bold text-primary mb-2">{t.helpline.number}</p>
                <p className="text-lg text-muted-foreground">{t.helpline.title}</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {t.helpline.services.map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2 p-2"><CheckCircle className="h-4 w-4 text-accent shrink-0" /><span className="text-sm">{item}</span></div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default ConsumerRights;
