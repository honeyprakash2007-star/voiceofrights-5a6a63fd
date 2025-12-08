import Header from "@/components/Header";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, Shield, Lock, Eye, AlertTriangle, Smartphone, Mail, ShoppingCart, Users, CheckCircle, Phone } from "lucide-react";
import { Link } from "react-router-dom";
import cyberSafetyBg from "@/assets/cyber-safety-bg.png";

const CyberSafety = () => {
  const threats = [
    { name: "Malware", desc: "Malicious software including viruses, trojans, ransomware", solution: "Install reputable antivirus software" },
    { name: "Phishing", desc: "Fraudulent attempts to obtain sensitive information", solution: "Verify sources before sharing information" },
    { name: "Identity Theft", desc: "Unauthorized use of personal information", solution: "Monitor financial statements regularly" },
    { name: "Cyberbullying", desc: "Online harassment or intimidation", solution: "Document, block, and report to authorities" },
    { name: "Online Scams", desc: "Fraudulent schemes to extract money", solution: "Be skeptical of unsolicited offers" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden py-16 md:py-24">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-25"
          style={{ backgroundImage: `url(${cyberSafetyBg})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-primary/20 via-background/80 to-background" />
        
        <div className="relative container px-4 md:px-8">
          <Link to="/" className="inline-flex items-center gap-2 text-primary hover:text-accent transition-colors mb-8 group">
            <ArrowLeft className="h-4 w-4 group-hover:-translate-x-1 transition-transform" />
            Back to Home
          </Link>
          
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center justify-center p-4 bg-primary/10 rounded-full mb-6 backdrop-blur-sm">
              <Shield className="h-12 w-12 text-primary" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-primary via-primary-light to-accent bg-clip-text text-transparent">
              Cyber Safety Procedures
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              Essential guidelines for staying safe online in the digital world
            </p>
          </div>
        </div>
      </section>

      <main className="container px-4 pb-16 md:px-8">
        <div className="max-w-5xl mx-auto space-y-8">
          
          {/* Overview Card */}
          <Card className="border-accent/30 bg-gradient-to-br from-accent/10 via-primary/5 to-transparent overflow-hidden">
            <CardHeader className="pb-4">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-accent/20 rounded-xl">
                  <Shield className="h-6 w-6 text-accent" />
                </div>
                <div>
                  <CardTitle className="text-xl md:text-2xl text-foreground">
                    Top 15 Internet Safety Rules
                  </CardTitle>
                  <CardDescription className="text-base mt-1">Essential practices for online security</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent className="text-base leading-relaxed">
              <p>
                In today's digital world, protecting yourself online is crucial. Follow these fundamental rules to maintain your digital safety and privacy.
              </p>
            </CardContent>
          </Card>

          {/* Password Security */}
          <Card className="border-primary/20 hover:border-primary/40 transition-all duration-300 hover:shadow-elegant overflow-hidden group">
            <CardHeader className="bg-gradient-to-r from-primary/5 to-transparent pb-4">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/10 rounded-xl group-hover:bg-primary/20 transition-colors">
                  <Lock className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <CardTitle className="text-xl md:text-2xl text-foreground group-hover:text-primary transition-colors">
                    Password Security
                  </CardTitle>
                  <CardDescription className="text-base mt-1">Creating and managing strong passwords</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent className="text-base leading-relaxed pt-2">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {[
                  { title: "Strong Passwords", desc: "Minimum 12 characters with mixed case, numbers, symbols" },
                  { title: "Unique Passwords", desc: "Never reuse passwords across accounts" },
                  { title: "Password Manager", desc: "Use reputable password managers" },
                  { title: "Two-Factor Auth", desc: "Enable 2FA on all accounts" },
                  { title: "Regular Updates", desc: "Change passwords every 3-6 months" },
                  { title: "No Personal Info", desc: "Avoid birthdays, names, common words" },
                ].map((item, idx) => (
                  <div key={idx} className="p-3 bg-card rounded-lg border border-border hover:border-primary/50 transition-colors flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-bold text-foreground text-sm">{item.title}</h4>
                      <p className="text-xs text-muted-foreground">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Email & Phishing */}
          <Card className="border-primary/20 hover:border-primary/40 transition-all duration-300 hover:shadow-elegant overflow-hidden group">
            <CardHeader className="bg-gradient-to-r from-primary/5 to-transparent pb-4">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/10 rounded-xl group-hover:bg-primary/20 transition-colors">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <CardTitle className="text-xl md:text-2xl text-foreground group-hover:text-primary transition-colors">
                    Email and Phishing Protection
                  </CardTitle>
                  <CardDescription className="text-base mt-1">Identifying and avoiding email scams</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent className="text-base leading-relaxed pt-2">
              <div className="space-y-3">
                {[
                  { title: "Verify Sender", desc: "Check email addresses carefully - scammers use similar domains" },
                  { title: "Suspicious Links", desc: "Hover over links to see actual URL before clicking" },
                  { title: "Urgent Messages", desc: "Be skeptical of emails creating urgency" },
                  { title: "Unexpected Attachments", desc: "Don't open attachments from unknown senders" },
                ].map((item, idx) => (
                  <div key={idx} className="p-4 bg-primary/5 rounded-xl border-l-4 border-primary">
                    <h4 className="font-bold text-primary">{item.title}</h4>
                    <p className="text-sm text-muted-foreground mt-1">{item.desc}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Mobile Security */}
          <Card className="border-primary/20 hover:border-primary/40 transition-all duration-300 hover:shadow-elegant overflow-hidden group">
            <CardHeader className="bg-gradient-to-r from-primary/5 to-transparent pb-4">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/10 rounded-xl group-hover:bg-primary/20 transition-colors">
                  <Smartphone className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <CardTitle className="text-xl md:text-2xl text-foreground group-hover:text-primary transition-colors">
                    Mobile Device Security
                  </CardTitle>
                  <CardDescription className="text-base mt-1">Protecting your smartphones and tablets</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent className="text-base leading-relaxed pt-2">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {[
                  "Always use PIN, password, or biometric lock",
                  "Download apps only from official stores",
                  "Review and limit app permissions",
                  "Keep OS and apps updated",
                  "Avoid sensitive transactions on public Wi-Fi",
                  "Enable 'Find My Device' feature",
                  "Turn off Bluetooth when not in use",
                  "Regularly backup important data",
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2 p-2">
                    <CheckCircle className="h-4 w-4 text-primary shrink-0" />
                    <span className="text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Social Media */}
          <Card className="border-primary/20 hover:border-primary/40 transition-all duration-300 hover:shadow-elegant overflow-hidden group">
            <CardHeader className="bg-gradient-to-r from-primary/5 to-transparent pb-4">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/10 rounded-xl group-hover:bg-primary/20 transition-colors">
                  <Eye className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <CardTitle className="text-xl md:text-2xl text-foreground group-hover:text-primary transition-colors">
                    Social Media Safety
                  </CardTitle>
                  <CardDescription className="text-base mt-1">Protecting your privacy on social platforms</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent className="text-base leading-relaxed pt-2">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {[
                  "Review and adjust privacy settings regularly",
                  "Don't share phone numbers or addresses",
                  "Disable location tagging",
                  "Only accept requests from people you know",
                  "Think before posting - it's permanent",
                  "Report and block suspicious accounts",
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2 p-2">
                    <CheckCircle className="h-4 w-4 text-primary shrink-0" />
                    <span className="text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Common Threats */}
          <Card className="border-destructive/20 hover:border-destructive/40 transition-all duration-300 hover:shadow-elegant overflow-hidden group">
            <CardHeader className="bg-gradient-to-r from-destructive/5 to-transparent pb-4">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-destructive/10 rounded-xl group-hover:bg-destructive/20 transition-colors">
                  <AlertTriangle className="h-6 w-6 text-destructive" />
                </div>
                <div>
                  <CardTitle className="text-xl md:text-2xl text-foreground group-hover:text-destructive transition-colors">
                    Common Cyber Threats
                  </CardTitle>
                  <CardDescription className="text-base mt-1">Recognizing and avoiding digital dangers</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent className="text-base leading-relaxed pt-2">
              <div className="space-y-3">
                {threats.map((threat, idx) => (
                  <div key={idx} className="p-4 bg-card rounded-xl border border-border hover:border-destructive/50 transition-colors">
                    <h4 className="font-bold text-destructive">{threat.name}</h4>
                    <p className="text-sm text-muted-foreground mt-1">{threat.desc}</p>
                    <p className="text-sm text-primary mt-2"><strong>Solution:</strong> {threat.solution}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Online Shopping */}
          <Card className="border-primary/20 hover:border-primary/40 transition-all duration-300 hover:shadow-elegant overflow-hidden group">
            <CardHeader className="bg-gradient-to-r from-primary/5 to-transparent pb-4">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/10 rounded-xl group-hover:bg-primary/20 transition-colors">
                  <ShoppingCart className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <CardTitle className="text-xl md:text-2xl text-foreground group-hover:text-primary transition-colors">
                    Online Shopping Safety
                  </CardTitle>
                  <CardDescription className="text-base mt-1">Secure practices for e-commerce</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent className="text-base leading-relaxed pt-2">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {[
                  "Ensure website uses HTTPS (lock icon)",
                  "Shop from trusted e-commerce platforms",
                  "Use credit cards or secure payment gateways",
                  "Keep screenshots of orders and confirmations",
                  "Never shop on public/shared computers",
                  "Be wary of extremely low prices",
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2 p-2">
                    <CheckCircle className="h-4 w-4 text-primary shrink-0" />
                    <span className="text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Children's Safety */}
          <Card className="border-primary/20 hover:border-primary/40 transition-all duration-300 hover:shadow-elegant overflow-hidden group">
            <CardHeader className="bg-gradient-to-r from-primary/5 to-transparent pb-4">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/10 rounded-xl group-hover:bg-primary/20 transition-colors">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <CardTitle className="text-xl md:text-2xl text-foreground group-hover:text-primary transition-colors">
                    Children's Online Safety
                  </CardTitle>
                  <CardDescription className="text-base mt-1">Protecting young internet users</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent className="text-base leading-relaxed pt-2">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {[
                  "Discuss internet safety and risks openly",
                  "Monitor children's online activities",
                  "Use age-appropriate content filters",
                  "Teach not to share personal information",
                  "Explain risks of interacting with strangers",
                  "Lead by example with safe habits",
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2 p-2">
                    <CheckCircle className="h-4 w-4 text-primary shrink-0" />
                    <span className="text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Cyber Crime Reporting */}
          <Card className="border-accent/30 bg-gradient-to-br from-primary/10 via-accent/10 to-transparent overflow-hidden">
            <CardHeader className="pb-4">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-accent/20 rounded-xl">
                  <Phone className="h-6 w-6 text-accent" />
                </div>
                <div>
                  <CardTitle className="text-xl md:text-2xl text-foreground">
                    Cyber Crime Reporting in India
                  </CardTitle>
                  <CardDescription className="text-base mt-1">How and where to report cyber crimes</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <div className="p-6 bg-card rounded-xl border border-border text-center">
                  <p className="text-sm text-muted-foreground mb-2">National Cyber Crime Portal</p>
                  <p className="text-xl font-bold text-primary">cybercrime.gov.in</p>
                  <p className="text-xs text-muted-foreground mt-1">24x7 online reporting</p>
                </div>
                <div className="p-6 bg-card rounded-xl border border-border text-center">
                  <p className="text-sm text-muted-foreground mb-2">Cyber Crime Helpline</p>
                  <p className="text-4xl font-bold text-primary">1930</p>
                  <p className="text-xs text-muted-foreground mt-1">National helpline</p>
                </div>
              </div>
              <h3 className="font-bold text-lg mb-3 text-accent">Types of Complaints You Can File:</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                {[
                  "Financial fraud",
                  "Social media crimes",
                  "Cyber bullying",
                  "Ransomware",
                  "Hacking",
                  "Job fraud",
                  "Crypto fraud",
                  "Data breach",
                ].map((item, idx) => (
                  <div key={idx} className="p-2 bg-card rounded-lg border border-border text-center text-sm">
                    {item}
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

        </div>
      </main>
    </div>
  );
};

export default CyberSafety;
