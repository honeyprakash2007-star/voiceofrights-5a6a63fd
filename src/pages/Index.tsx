import Header from "@/components/Header";
import HorizontalScroll from "@/components/HorizontalScroll";
import EmergencyHelplines from "@/components/EmergencyHelplines";
import FAQ from "@/components/FAQ";

import heroBackground from "@/assets/hero-background.png";
import legalRightsBg from "@/assets/legal-rights-bg.png";
import constitutionalRightsBg from "@/assets/constitutional-rights-bg.png";
import womenProtectionBg from "@/assets/women-protection-bg.png";
import consumerRightsBg from "@/assets/consumer-rights-bg.png";
import cyberSafetyBg from "@/assets/cyber-safety-bg.png";
import selfDefenseBg from "@/assets/self-defense-bg.png";
import situationalAwarenessBg from "@/assets/situational-awareness-bg.png";
import defenseToolsBg from "@/assets/defense-tools-bg.png";
import verbalDeescalationBg from "@/assets/verbal-deescalation-bg.png";

const Index = () => {
  const rightsItems = [
    {
      title: "Legal Rights",
      description: "Fundamental rights of every citizen including freedom, equality, and constitutional remedies",
      link: "/legal-rights",
      bgImage: legalRightsBg
    },
    {
      title: "Constitutional Rights",
      description: "The Golden Triangle: Articles 14, 19 & 21 - Core fundamental rights of Indian Constitution",
      link: "/constitutional-rights",
      bgImage: constitutionalRightsBg
    },
    {
      title: "Women Protection Laws",
      description: "Comprehensive laws protecting women from domestic violence, harassment, and discrimination",
      link: "/women-protection-laws",
      bgImage: womenProtectionBg
    },
    {
      title: "Consumer Rights",
      description: "Six fundamental rights protecting consumers and procedures for filing complaints",
      link: "/consumer-rights",
      bgImage: consumerRightsBg
    },
    {
      title: "Cyber Safety Procedures",
      description: "Essential guidelines and best practices for staying safe in the digital world",
      link: "/cyber-safety",
      bgImage: cyberSafetyBg
    }
  ];

  const selfDefenseItems = [
    {
      title: "Basic Self Defense Techniques",
      description: "Essential moves for personal safety from expert instructors",
      link: "/self-defense-videos",
      bgImage: selfDefenseBg
    },
    {
      title: "Situational Awareness",
      description: "Stay alert and avoid dangerous situations",
      link: "/self-defense-videos",
      bgImage: situationalAwarenessBg
    },
    {
      title: "Self Defense Tools",
      description: "Legal personal safety equipment and how to use them",
      link: "/self-defense-videos",
      bgImage: defenseToolsBg
    },
    {
      title: "Verbal De-escalation",
      description: "Techniques to defuse confrontations before they escalate",
      link: "/self-defense-videos",
      bgImage: verbalDeescalationBg
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main>
        {/* Hero Section with Background */}
        <section className="relative overflow-hidden">
          <div 
            className="absolute inset-0 bg-cover bg-center opacity-40"
            style={{ backgroundImage: `url(${heroBackground})` }}
          />
          <div className="absolute inset-0 bg-gradient-hero" />
          
          <div className="relative container px-4 py-24 md:py-32 md:px-8">
          <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white drop-shadow-lg">
                Know Your Rights
              </h1>
              <p className="text-xl md:text-2xl text-white/90 mb-4 font-medium">
                Empowering citizens with knowledge of their legal rights and protections
              </p>
              <p className="text-lg text-white/80 max-w-3xl mx-auto leading-relaxed">
                Understanding your rights is the first step towards justice. Explore comprehensive information about legal protections, constitutional guarantees, and safety procedures available to every citizen.
              </p>
            </div>
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

        {/* FAQ Section */}
        <div className="mt-16">
          <FAQ />
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
