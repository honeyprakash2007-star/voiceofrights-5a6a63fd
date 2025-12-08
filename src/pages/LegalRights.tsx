import Header from "@/components/Header";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, Scale, Shield, Users, Heart, BookOpen, Gavel } from "lucide-react";
import { Link } from "react-router-dom";
import legalRightsBg from "@/assets/legal-rights-bg.png";

const LegalRights = () => {
  const rightsCards = [
    {
      icon: Scale,
      title: "Right to Equality (Articles 14-18)",
      description: "Equal treatment before law",
      content: (
        <>
          <p className="mb-4">
            The Constitution guarantees equality before law and equal protection of laws to all persons within the territory of India.
          </p>
          <h3 className="font-bold text-lg mb-3 text-accent">Key Rights Include:</h3>
          <ul className="space-y-3">
            <li className="flex gap-3"><span className="text-primary font-semibold min-w-fit">Article 14:</span> Equality before law - The State shall not deny to any person equality before law</li>
            <li className="flex gap-3"><span className="text-primary font-semibold min-w-fit">Article 15:</span> Prohibition of discrimination on grounds of religion, race, caste, sex or place of birth</li>
            <li className="flex gap-3"><span className="text-primary font-semibold min-w-fit">Article 16:</span> Equality of opportunity in matters of public employment</li>
            <li className="flex gap-3"><span className="text-primary font-semibold min-w-fit">Article 17:</span> Abolition of untouchability</li>
            <li className="flex gap-3"><span className="text-primary font-semibold min-w-fit">Article 18:</span> Abolition of titles except military and academic distinctions</li>
          </ul>
        </>
      )
    },
    {
      icon: Shield,
      title: "Right to Freedom (Articles 19-22)",
      description: "Protection of certain rights regarding freedom",
      content: (
        <>
          <h3 className="font-bold text-lg mb-3 text-accent">Six Fundamental Freedoms (Article 19):</h3>
          <ul className="space-y-2 mb-6">
            <li className="flex items-start gap-2"><span className="text-primary">•</span> Freedom of speech and expression</li>
            <li className="flex items-start gap-2"><span className="text-primary">•</span> Freedom to assemble peacefully without arms</li>
            <li className="flex items-start gap-2"><span className="text-primary">•</span> Freedom to form associations or unions</li>
            <li className="flex items-start gap-2"><span className="text-primary">•</span> Freedom to move freely throughout India</li>
            <li className="flex items-start gap-2"><span className="text-primary">•</span> Freedom to reside and settle in any part of India</li>
            <li className="flex items-start gap-2"><span className="text-primary">•</span> Freedom to practice any profession or carry on any occupation</li>
          </ul>
          <h3 className="font-bold text-lg mb-3 text-accent">Protection in Arrest:</h3>
          <ul className="space-y-3">
            <li className="flex gap-3"><span className="text-primary font-semibold min-w-fit">Article 20:</span> Protection against conviction for offences - No ex-post facto law</li>
            <li className="flex gap-3"><span className="text-primary font-semibold min-w-fit">Article 21:</span> Protection of life and personal liberty</li>
            <li className="flex gap-3"><span className="text-primary font-semibold min-w-fit">Article 22:</span> Right to be informed of grounds of arrest, right to consult legal practitioner</li>
          </ul>
        </>
      )
    },
    {
      icon: Users,
      title: "Right Against Exploitation (Articles 23-24)",
      description: "Prohibition of trafficking and forced labor",
      content: (
        <ul className="space-y-4">
          <li className="p-4 bg-primary/5 rounded-lg border-l-4 border-primary">
            <span className="text-primary font-bold">Article 23:</span>
            <p className="mt-1 text-muted-foreground">Prohibition of traffic in human beings and forced labor - Begar (forced labor) is prohibited</p>
          </li>
          <li className="p-4 bg-primary/5 rounded-lg border-l-4 border-primary">
            <span className="text-primary font-bold">Article 24:</span>
            <p className="mt-1 text-muted-foreground">Prohibition of employment of children in factories - No child below 14 years shall be employed in any factory, mine or hazardous employment</p>
          </li>
        </ul>
      )
    },
    {
      icon: Heart,
      title: "Right to Freedom of Religion (Articles 25-28)",
      description: "Freedom of conscience and free profession of religion",
      content: (
        <ul className="space-y-3">
          <li className="flex gap-3"><span className="text-primary font-semibold min-w-fit">Article 25:</span> Freedom of conscience and free profession, practice and propagation of religion</li>
          <li className="flex gap-3"><span className="text-primary font-semibold min-w-fit">Article 26:</span> Freedom to manage religious affairs</li>
          <li className="flex gap-3"><span className="text-primary font-semibold min-w-fit">Article 27:</span> Freedom from payment of taxes for promotion of any religion</li>
          <li className="flex gap-3"><span className="text-primary font-semibold min-w-fit">Article 28:</span> Freedom from attending religious instruction in certain educational institutions</li>
        </ul>
      )
    },
    {
      icon: BookOpen,
      title: "Cultural and Educational Rights (Articles 29-30)",
      description: "Protection of interests of minorities",
      content: (
        <ul className="space-y-4">
          <li className="p-4 bg-accent/10 rounded-lg border-l-4 border-accent">
            <span className="text-accent font-bold">Article 29:</span>
            <p className="mt-1 text-muted-foreground">Protection of interests of minorities - Any section of citizens with distinct language, script or culture has right to conserve the same</p>
          </li>
          <li className="p-4 bg-accent/10 rounded-lg border-l-4 border-accent">
            <span className="text-accent font-bold">Article 30:</span>
            <p className="mt-1 text-muted-foreground">Right of minorities to establish and administer educational institutions</p>
          </li>
        </ul>
      )
    },
    {
      icon: Gavel,
      title: "Right to Constitutional Remedies (Article 32)",
      description: "The heart and soul of the Constitution",
      content: (
        <>
          <div className="p-4 bg-gradient-to-r from-primary/10 to-accent/10 rounded-xl mb-6 border border-primary/20">
            <p className="text-foreground italic">
              "Article 32 guarantees the right to move the Supreme Court for enforcement of Fundamental Rights. Dr. B.R. Ambedkar called it the <span className="text-primary font-bold">'heart and soul'</span> of the Constitution."
            </p>
          </div>
          <h3 className="font-bold text-lg mb-3 text-accent">Writs that can be issued:</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <div className="p-3 bg-card rounded-lg border border-border hover:border-primary/50 transition-colors">
              <span className="text-primary font-bold">Habeas Corpus</span>
              <p className="text-sm text-muted-foreground">To produce a person before the court</p>
            </div>
            <div className="p-3 bg-card rounded-lg border border-border hover:border-primary/50 transition-colors">
              <span className="text-primary font-bold">Mandamus</span>
              <p className="text-sm text-muted-foreground">Command to perform public duty</p>
            </div>
            <div className="p-3 bg-card rounded-lg border border-border hover:border-primary/50 transition-colors">
              <span className="text-primary font-bold">Prohibition</span>
              <p className="text-sm text-muted-foreground">Prevent lower courts from exceeding jurisdiction</p>
            </div>
            <div className="p-3 bg-card rounded-lg border border-border hover:border-primary/50 transition-colors">
              <span className="text-primary font-bold">Certiorari</span>
              <p className="text-sm text-muted-foreground">To quash an order of lower court</p>
            </div>
            <div className="p-3 bg-card rounded-lg border border-border hover:border-primary/50 transition-colors md:col-span-2">
              <span className="text-primary font-bold">Quo Warranto</span>
              <p className="text-sm text-muted-foreground">To inquire into the legality of claim of a person to public office</p>
            </div>
          </div>
        </>
      )
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden py-16 md:py-24">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-25"
          style={{ backgroundImage: `url(${legalRightsBg})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-primary/20 via-background/80 to-background" />
        
        <div className="relative container px-4 md:px-8">
          <Link to="/" className="inline-flex items-center gap-2 text-primary hover:text-accent transition-colors mb-8 group">
            <ArrowLeft className="h-4 w-4 group-hover:-translate-x-1 transition-transform" />
            Back to Home
          </Link>
          
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center justify-center p-4 bg-primary/10 rounded-full mb-6 backdrop-blur-sm">
              <Scale className="h-12 w-12 text-primary" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-primary via-primary-light to-accent bg-clip-text text-transparent">
              Legal Rights of Citizens
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              Understanding your fundamental legal rights and protections guaranteed under the Indian Constitution
            </p>
          </div>
        </div>
      </section>

      <main className="container px-4 pb-16 md:px-8">
        <div className="max-w-5xl mx-auto space-y-8">
          {rightsCards.map((card, index) => (
            <Card 
              key={index}
              className="border-primary/20 hover:border-primary/40 transition-all duration-300 hover:shadow-elegant overflow-hidden group"
            >
              <CardHeader className="bg-gradient-to-r from-primary/5 to-transparent pb-4">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/10 rounded-xl group-hover:bg-primary/20 transition-colors">
                    <card.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <CardTitle className="text-xl md:text-2xl text-foreground group-hover:text-primary transition-colors">
                      {card.title}
                    </CardTitle>
                    <CardDescription className="text-base mt-1">{card.description}</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="text-base leading-relaxed pt-2">
                {card.content}
              </CardContent>
            </Card>
          ))}
        </div>
      </main>
    </div>
  );
};

export default LegalRights;
