import Header from "@/components/Header";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, ShoppingBag, Shield, AlertCircle, CheckCircle, Info, Gavel, Globe, Phone } from "lucide-react";
import { Link } from "react-router-dom";
import consumerRightsBg from "@/assets/consumer-rights-bg.png";

const ConsumerRights = () => {
  const sixRights = [
    { title: "Right to Safety", description: "Protection against goods and services hazardous to life and property", icon: Shield },
    { title: "Right to be Informed", description: "Know quality, quantity, potency, purity, standard and price", icon: Info },
    { title: "Right to Choose", description: "Access to variety of goods at competitive prices", icon: CheckCircle },
    { title: "Right to be Heard", description: "Consumer interests receive due consideration", icon: AlertCircle },
    { title: "Right to Seek Redressal", description: "File complaints for defective goods or deficient services", icon: Gavel },
    { title: "Right to Consumer Education", description: "Acquire knowledge to become an informed consumer", icon: ShoppingBag },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden py-16 md:py-24">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-25"
          style={{ backgroundImage: `url(${consumerRightsBg})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-primary/20 via-background/80 to-background" />
        
        <div className="relative container px-4 md:px-8">
          <Link to="/" className="inline-flex items-center gap-2 text-primary hover:text-accent transition-colors mb-8 group">
            <ArrowLeft className="h-4 w-4 group-hover:-translate-x-1 transition-transform" />
            Back to Home
          </Link>
          
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center justify-center p-4 bg-primary/10 rounded-full mb-6 backdrop-blur-sm">
              <ShoppingBag className="h-12 w-12 text-primary" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-primary via-primary-light to-accent bg-clip-text text-transparent">
              Consumer Rights in India
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              Understanding your rights under Consumer Protection Act, 2019
            </p>
          </div>
        </div>
      </section>

      <main className="container px-4 pb-16 md:px-8">
        <div className="max-w-5xl mx-auto space-y-8">
          
          {/* Consumer Protection Act */}
          <Card className="border-primary/20 hover:border-primary/40 transition-all duration-300 hover:shadow-elegant overflow-hidden group">
            <CardHeader className="bg-gradient-to-r from-primary/5 to-transparent pb-4">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/10 rounded-xl group-hover:bg-primary/20 transition-colors">
                  <Gavel className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <CardTitle className="text-xl md:text-2xl text-foreground group-hover:text-primary transition-colors">
                    Consumer Protection Act, 2019
                  </CardTitle>
                  <CardDescription className="text-base mt-1">Comprehensive law for consumer protection</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent className="text-base leading-relaxed pt-2">
              <p className="mb-6">
                The Consumer Protection Act, 2019 replaced the earlier Act of 1986 and provides a robust framework to safeguard consumer interests and uphold fairness in trade and commerce.
              </p>
              <h3 className="font-bold text-lg mb-3 text-accent">Key Objectives:</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {[
                  "Protection of consumer rights",
                  "Establishment of consumer protection councils",
                  "Consumer Disputes Redressal Commissions",
                  "Regulation of e-commerce and direct selling",
                  "Prevention of unfair trade practices"
                ].map((item, idx) => (
                  <div key={idx} className="p-3 bg-card rounded-lg border border-border hover:border-primary/50 transition-colors flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Six Fundamental Rights */}
          <Card className="border-accent/30 bg-gradient-to-br from-accent/10 via-primary/5 to-transparent overflow-hidden">
            <CardHeader className="pb-4">
              <CardTitle className="text-xl md:text-2xl text-foreground text-center">
                Six Fundamental Consumer Rights
              </CardTitle>
              <CardDescription className="text-base mt-1 text-center">Rights explicitly outlined in the Consumer Protection Act</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {sixRights.map((right, idx) => (
                  <div key={idx} className="p-4 bg-card rounded-xl border border-border hover:border-primary/50 hover:shadow-lg transition-all duration-300 group/card">
                    <div className="p-2 bg-primary/10 rounded-lg w-fit mb-3 group-hover/card:bg-primary/20 transition-colors">
                      <right.icon className="h-5 w-5 text-primary" />
                    </div>
                    <h3 className="font-bold text-foreground mb-1">{right.title}</h3>
                    <p className="text-sm text-muted-foreground">{right.description}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Disputes Redressal */}
          <Card className="border-primary/20 hover:border-primary/40 transition-all duration-300 hover:shadow-elegant overflow-hidden group">
            <CardHeader className="bg-gradient-to-r from-primary/5 to-transparent pb-4">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/10 rounded-xl group-hover:bg-primary/20 transition-colors">
                  <Gavel className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <CardTitle className="text-xl md:text-2xl text-foreground group-hover:text-primary transition-colors">
                    Consumer Disputes Redressal Commissions
                  </CardTitle>
                  <CardDescription className="text-base mt-1">Three-tier quasi-judicial mechanism</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent className="text-base leading-relaxed pt-2">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="p-4 bg-primary/5 rounded-xl border-l-4 border-primary">
                  <h3 className="font-bold text-primary mb-2">District Commission</h3>
                  <p className="text-sm text-muted-foreground mb-2">Complaints up to ₹1 crore</p>
                  <p className="text-xs text-muted-foreground">Present in every district</p>
                </div>
                <div className="p-4 bg-primary/5 rounded-xl border-l-4 border-primary">
                  <h3 className="font-bold text-primary mb-2">State Commission</h3>
                  <p className="text-sm text-muted-foreground mb-2">₹1 crore to ₹10 crores</p>
                  <p className="text-xs text-muted-foreground">Appellate authority over District</p>
                </div>
                <div className="p-4 bg-primary/5 rounded-xl border-l-4 border-primary">
                  <h3 className="font-bold text-primary mb-2">National Commission</h3>
                  <p className="text-sm text-muted-foreground mb-2">Above ₹10 crores</p>
                  <p className="text-xs text-muted-foreground">Highest consumer court</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* How to File Complaint */}
          <Card className="border-primary/20 hover:border-primary/40 transition-all duration-300 hover:shadow-elegant overflow-hidden group">
            <CardHeader className="bg-gradient-to-r from-primary/5 to-transparent pb-4">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/10 rounded-xl group-hover:bg-primary/20 transition-colors">
                  <AlertCircle className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <CardTitle className="text-xl md:text-2xl text-foreground group-hover:text-primary transition-colors">
                    How to File a Consumer Complaint
                  </CardTitle>
                  <CardDescription className="text-base mt-1">Step-by-step process for seeking redressal</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent className="text-base leading-relaxed pt-2">
              <div className="space-y-3 mb-6">
                {[
                  { step: 1, title: "Identify the appropriate forum", desc: "Based on value of goods/services" },
                  { step: 2, title: "Prepare the complaint", desc: "Details of complainant, opposite party, facts, relief sought" },
                  { step: 3, title: "Attach supporting documents", desc: "Bills, receipts, warranty cards, correspondence" },
                  { step: 4, title: "File online or offline", desc: "Use e-Daakhil portal (edaakhil.nic.in)" },
                  { step: 5, title: "Pay fee if required", desc: "No fee for complaints up to ₹5 lakhs" },
                  { step: 6, title: "Attend hearings", desc: "Cooperate with commission proceedings" },
                ].map((item) => (
                  <div key={item.step} className="flex gap-4 items-start p-3 bg-card rounded-lg border border-border hover:border-primary/50 transition-colors">
                    <div className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center shrink-0">
                      <span className="text-primary font-bold text-sm">{item.step}</span>
                    </div>
                    <div>
                      <h4 className="font-bold text-foreground">{item.title}</h4>
                      <p className="text-sm text-muted-foreground">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="p-4 bg-accent/10 rounded-xl border border-accent/20">
                <h3 className="font-bold text-accent mb-2">Important Points:</h3>
                <ul className="space-y-1 text-sm text-muted-foreground">
                  <li>• Complaint must be filed within 2 years from date of cause of action</li>
                  <li>• No court fee for complaints up to ₹5 lakhs</li>
                  <li>• Consumer can appear in person or through authorized agent</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* E-commerce */}
          <Card className="border-primary/20 hover:border-primary/40 transition-all duration-300 hover:shadow-elegant overflow-hidden group">
            <CardHeader className="bg-gradient-to-r from-primary/5 to-transparent pb-4">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/10 rounded-xl group-hover:bg-primary/20 transition-colors">
                  <Globe className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <CardTitle className="text-xl md:text-2xl text-foreground group-hover:text-primary transition-colors">
                    E-commerce and Consumer Rights
                  </CardTitle>
                  <CardDescription className="text-base mt-1">Special provisions for online shopping</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent className="text-base leading-relaxed pt-2">
              <p className="mb-4">The Consumer Protection (E-Commerce) Rules, 2020 provide additional safeguards:</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {[
                  "Clear return, refund, exchange policies",
                  "No manipulation of search results",
                  "Mandatory display of country of origin",
                  "Grievance redressal within 48 hours",
                  "Protection against fake reviews",
                  "Clear display of total price",
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2 p-2">
                    <CheckCircle className="h-4 w-4 text-primary shrink-0" />
                    <span className="text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* National Helpline */}
          <Card className="border-accent/30 bg-gradient-to-br from-primary/10 via-accent/10 to-transparent overflow-hidden">
            <CardHeader className="pb-4">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-accent/20 rounded-xl">
                  <Phone className="h-6 w-6 text-accent" />
                </div>
                <div>
                  <CardTitle className="text-xl md:text-2xl text-foreground">
                    National Consumer Helpline
                  </CardTitle>
                  <CardDescription className="text-base mt-1">24x7 assistance for consumers</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-center py-6 mb-4 bg-card rounded-xl border border-border">
                <p className="text-4xl md:text-5xl font-bold text-primary mb-2">1800-11-4000</p>
                <p className="text-lg text-muted-foreground">Toll-Free National Consumer Helpline</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {[
                  "Information about consumer rights",
                  "Guidance on filing complaints",
                  "Mediation and conciliation services",
                  "Assistance in 17 languages",
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2 p-2">
                    <CheckCircle className="h-4 w-4 text-accent shrink-0" />
                    <span className="text-sm">{item}</span>
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

export default ConsumerRights;
