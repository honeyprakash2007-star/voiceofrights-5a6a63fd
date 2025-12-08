import Header from "@/components/Header";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, Scale, Shield, Heart, Sparkles, Link2 } from "lucide-react";
import { Link } from "react-router-dom";
import constitutionalRightsBg from "@/assets/constitutional-rights-bg.png";

const ConstitutionalRights = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden py-16 md:py-24">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-25"
          style={{ backgroundImage: `url(${constitutionalRightsBg})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-primary/20 via-background/80 to-background" />
        
        <div className="relative container px-4 md:px-8">
          <Link to="/" className="inline-flex items-center gap-2 text-primary hover:text-accent transition-colors mb-8 group">
            <ArrowLeft className="h-4 w-4 group-hover:-translate-x-1 transition-transform" />
            Back to Home
          </Link>
          
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center justify-center p-4 bg-accent/10 rounded-full mb-6 backdrop-blur-sm">
              <Sparkles className="h-12 w-12 text-accent" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-primary via-primary-light to-accent bg-clip-text text-transparent">
              The Golden Triangle
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              Articles 14, 19 & 21 - The Core Fundamental Rights of the Indian Constitution
            </p>
          </div>
        </div>
      </section>

      <main className="container px-4 pb-16 md:px-8">
        <div className="max-w-5xl mx-auto space-y-8">
          
          {/* Golden Triangle Overview */}
          <Card className="border-accent/30 bg-gradient-to-br from-accent/10 via-primary/5 to-transparent overflow-hidden">
            <CardHeader className="pb-4">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-accent/20 rounded-xl">
                  <Link2 className="h-6 w-6 text-accent" />
                </div>
                <div>
                  <CardTitle className="text-xl md:text-2xl text-foreground">
                    The Golden Triangle of Indian Constitution
                  </CardTitle>
                  <CardDescription className="text-base mt-1">Understanding the interconnection of fundamental rights</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent className="text-base leading-relaxed">
              <p className="mb-4">
                Articles 14, 19, and 21 are collectively known as the "Golden Triangle" of the Indian Constitution. These three articles form the core of fundamental rights and are considered the basic principles for the smooth functioning of life for a citizen.
              </p>
              <div className="p-4 bg-gradient-to-r from-primary/10 to-accent/10 rounded-xl border border-primary/20">
                <p className="text-foreground italic">
                  The Golden Triangle provides full protection to individuals from any encroachment upon their rights and breathes vitality into the concept of the rule of law.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Article 14 */}
          <Card className="border-primary/20 hover:border-primary/40 transition-all duration-300 hover:shadow-elegant overflow-hidden group">
            <CardHeader className="bg-gradient-to-r from-primary/5 to-transparent pb-4">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/10 rounded-xl group-hover:bg-primary/20 transition-colors">
                  <Scale className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <CardTitle className="text-xl md:text-2xl text-foreground group-hover:text-primary transition-colors">
                    Article 14 - Right to Equality
                  </CardTitle>
                  <CardDescription className="text-base mt-1">Equality before law and equal protection of laws</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent className="text-base leading-relaxed pt-2">
              <div className="p-4 bg-primary/5 rounded-xl border-l-4 border-primary mb-6">
                <p className="italic text-foreground">
                  "The State shall not deny to any person equality before the law or the equal protection of the laws within the territory of India."
                </p>
              </div>
              
              <h3 className="font-bold text-lg mb-3 text-accent">Key Principles:</h3>
              <ul className="space-y-3 mb-6">
                <li className="flex gap-3">
                  <span className="text-primary font-semibold min-w-fit">•</span>
                  <span><strong>Equality before law:</strong> No person is above the law. Every person is subject to the jurisdiction of ordinary courts</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary font-semibold min-w-fit">•</span>
                  <span><strong>Equal protection of laws:</strong> Similar treatment of persons in similar circumstances</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary font-semibold min-w-fit">•</span>
                  <span>Prohibits discrimination but permits reasonable classification</span>
                </li>
              </ul>

              <h3 className="font-bold text-lg mb-3 text-accent">Landmark Cases:</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <div className="p-3 bg-card rounded-lg border border-border hover:border-primary/50 transition-colors">
                  <span className="text-primary font-bold">E.P. Royappa v. State of Tamil Nadu</span>
                  <p className="text-sm text-muted-foreground">Established that equality is the antithesis of arbitrariness</p>
                </div>
                <div className="p-3 bg-card rounded-lg border border-border hover:border-primary/50 transition-colors">
                  <span className="text-primary font-bold">Maneka Gandhi v. Union of India</span>
                  <p className="text-sm text-muted-foreground">Expanded scope to include reasonableness and fairness</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Article 19 */}
          <Card className="border-primary/20 hover:border-primary/40 transition-all duration-300 hover:shadow-elegant overflow-hidden group">
            <CardHeader className="bg-gradient-to-r from-primary/5 to-transparent pb-4">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/10 rounded-xl group-hover:bg-primary/20 transition-colors">
                  <Shield className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <CardTitle className="text-xl md:text-2xl text-foreground group-hover:text-primary transition-colors">
                    Article 19 - Right to Freedom
                  </CardTitle>
                  <CardDescription className="text-base mt-1">Protection of six fundamental freedoms</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent className="text-base leading-relaxed pt-2">
              <p className="mb-6">
                Article 19 guarantees six fundamental freedoms to all citizens of India, subject to reasonable restrictions in the interest of sovereignty, integrity, security of State, public order, decency or morality.
              </p>
              
              <h3 className="font-bold text-lg mb-4 text-accent">The Six Freedoms:</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 bg-primary/5 rounded-xl border-l-4 border-primary">
                  <span className="text-primary font-bold">19(1)(a) - Speech & Expression</span>
                  <p className="text-sm text-muted-foreground mt-1">Right to express views freely including freedom of press</p>
                </div>
                <div className="p-4 bg-primary/5 rounded-xl border-l-4 border-primary">
                  <span className="text-primary font-bold">19(1)(b) - Peaceful Assembly</span>
                  <p className="text-sm text-muted-foreground mt-1">Right to hold public meetings without arms</p>
                </div>
                <div className="p-4 bg-primary/5 rounded-xl border-l-4 border-primary">
                  <span className="text-primary font-bold">19(1)(c) - Form Associations</span>
                  <p className="text-sm text-muted-foreground mt-1">Right to form unions, political parties</p>
                </div>
                <div className="p-4 bg-primary/5 rounded-xl border-l-4 border-primary">
                  <span className="text-primary font-bold">19(1)(d) - Movement</span>
                  <p className="text-sm text-muted-foreground mt-1">Right to move freely throughout India</p>
                </div>
                <div className="p-4 bg-primary/5 rounded-xl border-l-4 border-primary">
                  <span className="text-primary font-bold">19(1)(e) - Residence</span>
                  <p className="text-sm text-muted-foreground mt-1">Right to reside in any part of India</p>
                </div>
                <div className="p-4 bg-primary/5 rounded-xl border-l-4 border-primary">
                  <span className="text-primary font-bold">19(1)(g) - Profession</span>
                  <p className="text-sm text-muted-foreground mt-1">Right to practice any profession or business</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Article 21 */}
          <Card className="border-primary/20 hover:border-primary/40 transition-all duration-300 hover:shadow-elegant overflow-hidden group">
            <CardHeader className="bg-gradient-to-r from-primary/5 to-transparent pb-4">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/10 rounded-xl group-hover:bg-primary/20 transition-colors">
                  <Heart className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <CardTitle className="text-xl md:text-2xl text-foreground group-hover:text-primary transition-colors">
                    Article 21 - Right to Life and Personal Liberty
                  </CardTitle>
                  <CardDescription className="text-base mt-1">The most expansive fundamental right</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent className="text-base leading-relaxed pt-2">
              <div className="p-4 bg-primary/5 rounded-xl border-l-4 border-primary mb-6">
                <p className="italic text-foreground">
                  "No person shall be deprived of his life or personal liberty except according to procedure established by law."
                </p>
              </div>
              
              <p className="mb-6">
                Article 21 is the most celebrated article and has been expanded through judicial interpretation to include numerous rights essential for a dignified life.
              </p>
              
              <h3 className="font-bold text-lg mb-4 text-accent">Rights Derived from Article 21:</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                {[
                  "Right to Live with Human Dignity",
                  "Right to Privacy",
                  "Right to Shelter",
                  "Right to Health",
                  "Right to Clean Environment",
                  "Right to Education",
                  "Right to Speedy Trial",
                  "Right to Food",
                  "Right to Legal Aid"
                ].map((right, idx) => (
                  <div key={idx} className="p-3 bg-card rounded-lg border border-border hover:border-primary/50 transition-colors">
                    <span className="text-primary">•</span> {right}
                  </div>
                ))}
              </div>

              <h3 className="font-bold text-lg mb-3 mt-6 text-accent">Landmark Cases:</h3>
              <div className="space-y-3">
                <div className="p-4 bg-accent/10 rounded-lg border-l-4 border-accent">
                  <span className="text-accent font-bold">Maneka Gandhi v. Union of India (1978)</span>
                  <p className="text-sm text-muted-foreground mt-1">Procedure must be just, fair and reasonable</p>
                </div>
                <div className="p-4 bg-accent/10 rounded-lg border-l-4 border-accent">
                  <span className="text-accent font-bold">K.S. Puttaswamy v. Union of India (2017)</span>
                  <p className="text-sm text-muted-foreground mt-1">Right to privacy is a fundamental right</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Interconnection */}
          <Card className="border-accent/30 bg-gradient-to-br from-primary/5 via-accent/5 to-transparent overflow-hidden">
            <CardHeader className="pb-4">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-accent/20 rounded-xl">
                  <Link2 className="h-6 w-6 text-accent" />
                </div>
                <div>
                  <CardTitle className="text-xl md:text-2xl text-foreground">
                    Interconnection of the Golden Triangle
                  </CardTitle>
                  <CardDescription className="text-base mt-1">How Articles 14, 19 & 21 work together</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent className="text-base leading-relaxed">
              <p className="mb-4">
                The Supreme Court has established that these three articles must be read together as they complement and reinforce each other:
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex gap-3"><span className="text-primary">•</span> Article 14 provides the foundation of equality and non-arbitrariness</li>
                <li className="flex gap-3"><span className="text-primary">•</span> Article 19 specifies the freedoms that flow from the right to life and liberty</li>
                <li className="flex gap-3"><span className="text-primary">•</span> Article 21 ensures any law affecting life and liberty must be just, fair and reasonable</li>
                <li className="flex gap-3"><span className="text-primary">•</span> Together they form a comprehensive code of protection for personal liberty</li>
              </ul>
              <div className="p-4 bg-gradient-to-r from-primary/10 to-accent/10 rounded-xl border border-primary/20">
                <p className="font-semibold text-foreground">
                  The Golden Triangle ensures that the State cannot take away a person's life or liberty through arbitrary, unfair, or unreasonable means.
                </p>
              </div>
            </CardContent>
          </Card>

        </div>
      </main>
    </div>
  );
};

export default ConstitutionalRights;
