import Header from "@/components/Header";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, Heart, Shield, Home, Briefcase, AlertTriangle, Gavel } from "lucide-react";
import { Link } from "react-router-dom";
import womenProtectionBg from "@/assets/women-protection-bg.png";

const WomenProtectionLaws = () => {
  const ipcSections = [
    { section: "354", title: "Assault to outrage modesty", description: "Assault or criminal force to woman with intent to outrage her modesty" },
    { section: "354A", title: "Sexual harassment", description: "Sexual harassment and punishment for it" },
    { section: "354B", title: "Intent to disrobe", description: "Assault with intent to disrobe a woman" },
    { section: "354C", title: "Voyeurism", description: "Watching or capturing private acts" },
    { section: "354D", title: "Stalking", description: "Following or contacting despite disinterest" },
    { section: "376", title: "Rape", description: "Punishment for rape" },
    { section: "498A", title: "Cruelty by husband", description: "Cruelty by husband or his relatives" },
    { section: "509", title: "Insult to modesty", description: "Word, gesture or act intended to insult modesty" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden py-16 md:py-24">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-25"
          style={{ backgroundImage: `url(${womenProtectionBg})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-primary/20 via-background/80 to-background" />
        
        <div className="relative container px-4 md:px-8">
          <Link to="/" className="inline-flex items-center gap-2 text-primary hover:text-accent transition-colors mb-8 group">
            <ArrowLeft className="h-4 w-4 group-hover:-translate-x-1 transition-transform" />
            Back to Home
          </Link>
          
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center justify-center p-4 bg-primary/10 rounded-full mb-6 backdrop-blur-sm">
              <Heart className="h-12 w-12 text-primary" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-primary via-primary-light to-accent bg-clip-text text-transparent">
              Women Protection Laws
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              Comprehensive legal framework protecting women's rights and dignity in India
            </p>
          </div>
        </div>
      </section>

      <main className="container px-4 pb-16 md:px-8">
        <div className="max-w-5xl mx-auto space-y-8">
          
          {/* Domestic Violence Act */}
          <Card className="border-primary/20 hover:border-primary/40 transition-all duration-300 hover:shadow-elegant overflow-hidden group">
            <CardHeader className="bg-gradient-to-r from-primary/5 to-transparent pb-4">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/10 rounded-xl group-hover:bg-primary/20 transition-colors">
                  <Home className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <CardTitle className="text-xl md:text-2xl text-foreground group-hover:text-primary transition-colors">
                    Protection of Women from Domestic Violence Act, 2005
                  </CardTitle>
                  <CardDescription className="text-base mt-1">Civil law protection against domestic violence</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent className="text-base leading-relaxed pt-2">
              <p className="mb-6">
                The PWDVA is a comprehensive legislation designed to protect women from domestic violence in any form - physical, emotional, sexual, verbal, or economic abuse.
              </p>
              <h3 className="font-bold text-lg mb-3 text-accent">Key Provisions:</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {[
                  { title: "Protection Orders", desc: "Immediate protection through court orders" },
                  { title: "Right to Residence", desc: "Ensured right to residence in shared household" },
                  { title: "Monetary Relief", desc: "Medical expenses and loss of earnings" },
                  { title: "Custody Rights", desc: "Custody of children and visitation rights" },
                  { title: "Live-in Protection", desc: "Covers women in live-in relationships" },
                ].map((item, idx) => (
                  <div key={idx} className="p-4 bg-primary/5 rounded-xl border-l-4 border-primary">
                    <h4 className="font-bold text-primary">{item.title}</h4>
                    <p className="text-sm text-muted-foreground mt-1">{item.desc}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Sexual Harassment at Workplace */}
          <Card className="border-primary/20 hover:border-primary/40 transition-all duration-300 hover:shadow-elegant overflow-hidden group">
            <CardHeader className="bg-gradient-to-r from-primary/5 to-transparent pb-4">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/10 rounded-xl group-hover:bg-primary/20 transition-colors">
                  <Briefcase className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <CardTitle className="text-xl md:text-2xl text-foreground group-hover:text-primary transition-colors">
                    Sexual Harassment at Workplace Act, 2013
                  </CardTitle>
                  <CardDescription className="text-base mt-1">Prevention, Prohibition and Redressal of Sexual Harassment</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent className="text-base leading-relaxed pt-2">
              <p className="mb-6">
                This Act ensures safe and secure working environment for women by preventing and addressing sexual harassment at workplace.
              </p>
              <h3 className="font-bold text-lg mb-3 text-accent">Important Features:</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {[
                  { icon: Shield, title: "Internal Complaints Committee", desc: "Mandatory ICC in organizations" },
                  { icon: AlertTriangle, title: "Comprehensive Definition", desc: "Defines sexual harassment clearly" },
                  { icon: Shield, title: "Confidential Mechanism", desc: "Confidential complaint process" },
                  { icon: Shield, title: "Protection from Retaliation", desc: "No adverse action against complainant" },
                ].map((item, idx) => (
                  <div key={idx} className="p-4 bg-card rounded-xl border border-border hover:border-primary/50 transition-colors flex items-start gap-3">
                    <div className="p-2 bg-primary/10 rounded-lg shrink-0">
                      <item.icon className="h-4 w-4 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-bold text-foreground">{item.title}</h4>
                      <p className="text-sm text-muted-foreground">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Dowry Prohibition */}
          <Card className="border-primary/20 hover:border-primary/40 transition-all duration-300 hover:shadow-elegant overflow-hidden group">
            <CardHeader className="bg-gradient-to-r from-primary/5 to-transparent pb-4">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/10 rounded-xl group-hover:bg-primary/20 transition-colors">
                  <AlertTriangle className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <CardTitle className="text-xl md:text-2xl text-foreground group-hover:text-primary transition-colors">
                    Dowry Prohibition Act, 1961
                  </CardTitle>
                  <CardDescription className="text-base mt-1">Prohibition of dowry system</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent className="text-base leading-relaxed pt-2">
              <p className="mb-6">
                This Act prohibits the giving or taking of dowry at or before or any time after the marriage.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 bg-destructive/10 rounded-xl border-l-4 border-destructive">
                  <h4 className="font-bold text-destructive mb-2">Punishment</h4>
                  <p className="text-sm text-muted-foreground">Imprisonment up to 5 years</p>
                </div>
                <div className="p-4 bg-destructive/10 rounded-xl border-l-4 border-destructive">
                  <h4 className="font-bold text-destructive mb-2">Fine</h4>
                  <p className="text-sm text-muted-foreground">₹15,000 or value of dowry, whichever is more</p>
                </div>
                <div className="p-4 bg-accent/10 rounded-xl border-l-4 border-accent md:col-span-2">
                  <h4 className="font-bold text-accent mb-2">Important Note</h4>
                  <p className="text-sm text-muted-foreground">Both giving and taking dowry is illegal. Demand for dowry is also punishable.</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* IPC Sections */}
          <Card className="border-accent/30 bg-gradient-to-br from-accent/10 via-primary/5 to-transparent overflow-hidden">
            <CardHeader className="pb-4">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-accent/20 rounded-xl">
                  <Gavel className="h-6 w-6 text-accent" />
                </div>
                <div>
                  <CardTitle className="text-xl md:text-2xl text-foreground">
                    Indian Penal Code (IPC) Sections for Women
                  </CardTitle>
                  <CardDescription className="text-base mt-1">Criminal law provisions protecting women</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {ipcSections.map((item, idx) => (
                  <div key={idx} className="p-4 bg-card rounded-xl border border-border hover:border-primary/50 hover:shadow-lg transition-all duration-300">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="px-3 py-1 bg-primary/20 text-primary font-bold text-sm rounded-full">
                        Section {item.section}
                      </span>
                    </div>
                    <h4 className="font-bold text-foreground">{item.title}</h4>
                    <p className="text-sm text-muted-foreground mt-1">{item.description}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Emergency Contact */}
          <Card className="border-primary/30 bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10 overflow-hidden">
            <CardContent className="py-8">
              <div className="text-center">
                <h3 className="text-xl font-bold text-foreground mb-4">Women Helpline Numbers</h3>
                <div className="flex flex-wrap justify-center gap-4">
                  <div className="p-4 bg-card rounded-xl border border-border">
                    <p className="text-3xl font-bold text-primary">181</p>
                    <p className="text-sm text-muted-foreground">Women Helpline</p>
                  </div>
                  <div className="p-4 bg-card rounded-xl border border-border">
                    <p className="text-3xl font-bold text-primary">1091</p>
                    <p className="text-sm text-muted-foreground">Women in Distress</p>
                  </div>
                  <div className="p-4 bg-card rounded-xl border border-border">
                    <p className="text-3xl font-bold text-primary">112</p>
                    <p className="text-sm text-muted-foreground">Emergency</p>
                  </div>
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
