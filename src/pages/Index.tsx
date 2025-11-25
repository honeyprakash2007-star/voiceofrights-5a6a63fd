import Header from "@/components/Header";
import HorizontalScroll from "@/components/HorizontalScroll";
import EmergencyHelplines from "@/components/EmergencyHelplines";
import { Scale } from "lucide-react";

const Index = () => {
  const rightsItems = [
    {
      title: "Women Protection Laws",
      description: "Comprehensive laws protecting women from domestic violence, harassment, and discrimination",
      link: "/women-protection-laws"
    },
    {
      title: "Legal Rights",
      description: "Fundamental rights of every citizen including freedom, equality, and constitutional remedies",
      link: "/legal-rights"
    },
    {
      title: "Constitutional Rights",
      description: "The Golden Triangle: Articles 14, 19 & 21 - Core fundamental rights of Indian Constitution",
      link: "/constitutional-rights"
    },
    {
      title: "Consumer Rights",
      description: "Six fundamental rights protecting consumers and procedures for filing complaints",
      link: "/consumer-rights"
    },
    {
      title: "Cyber Safety Procedures",
      description: "Essential guidelines and best practices for staying safe in the digital world",
      link: "/cyber-safety"
    }
  ];

  const selfDefenseItems = [
    {
      title: "Basic Self Defense Techniques",
      description: "Essential moves for personal safety",
      link: "#"
    },
    {
      title: "Situational Awareness",
      description: "Stay alert and avoid dangerous situations",
      link: "#"
    },
    {
      title: "Self Defense Tools",
      description: "Legal personal safety equipment",
      link: "#"
    },
    {
      title: "Verbal De-escalation",
      description: "Techniques to defuse confrontations",
      link: "#"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-primary/5 to-background">
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="container px-4 py-16 md:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <div className="flex items-center justify-center mb-6">
              <Scale className="h-20 w-20 text-primary animate-pulse" />
            </div>
            <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
              Know Your Rights
            </h2>
            <p className="text-xl md:text-2xl text-muted-foreground mb-4">
              Empowering citizens with knowledge of their legal rights and protections
            </p>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Understanding your rights is the first step towards justice. Explore comprehensive information about legal protections, constitutional guarantees, and safety procedures available to every citizen.
            </p>
          </div>
        </section>

        {/* Know Their Rights Section */}
        <div className="container px-4 md:px-8">
          <HorizontalScroll 
            title="Know Their Rights"
            items={rightsItems}
          />
        </div>

        {/* Self Defense Videos Section */}
        <div className="container px-4 md:px-8 mt-8">
          <HorizontalScroll 
            title="Self Defense Videos"
            items={selfDefenseItems}
          />
        </div>

        {/* Emergency Helplines Section */}
        <div className="container px-4 md:px-8 mt-12">
          <EmergencyHelplines />
        </div>

        {/* Footer */}
        <footer className="container px-4 py-8 md:px-8 mt-16 border-t border-border">
          <div className="text-center text-muted-foreground">
            <p className="text-sm">
              © 2025 Voice of Rights. All rights reserved. | Information provided for educational purposes.
            </p>
          </div>
        </footer>
      </main>
    </div>
  );
};

export default Index;
