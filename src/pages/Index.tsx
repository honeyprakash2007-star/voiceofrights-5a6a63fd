import Header from "@/components/Header";
import HorizontalScroll from "@/components/HorizontalScroll";
import EmergencyHelplines from "@/components/EmergencyHelplines";
import FAQ from "@/components/FAQ";
import LatestUpdates from "@/components/LatestUpdates";
import { useLanguage } from "@/contexts/LanguageContext";

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
  const { t } = useLanguage();

  const rightsItems = [
    {
      title: t('rights.legal.title'),
      description: t('rights.legal.desc'),
      link: "/legal-rights",
      bgImage: legalRightsBg
    },
    {
      title: t('rights.constitutional.title'),
      description: t('rights.constitutional.desc'),
      link: "/constitutional-rights",
      bgImage: constitutionalRightsBg
    },
    {
      title: t('rights.women.title'),
      description: t('rights.women.desc'),
      link: "/women-protection-laws",
      bgImage: womenProtectionBg
    },
    {
      title: t('rights.consumer.title'),
      description: t('rights.consumer.desc'),
      link: "/consumer-rights",
      bgImage: consumerRightsBg
    },
    {
      title: t('defense.cyber.title'),
      description: t('defense.cyber.desc'),
      link: "/cyber-safety",
      bgImage: cyberSafetyBg
    }
  ];

  const selfDefenseItems = [
    {
      title: t('defense.physical.title'),
      description: t('defense.physical.desc'),
      link: "/self-defense-videos",
      bgImage: selfDefenseBg
    },
    {
      title: t('defense.awareness.title'),
      description: t('defense.awareness.desc'),
      link: "/self-defense-videos",
      bgImage: situationalAwarenessBg
    },
    {
      title: t('defense.tools.title'),
      description: t('defense.tools.desc'),
      link: "/self-defense-videos",
      bgImage: defenseToolsBg
    },
    {
      title: t('defense.verbal.title'),
      description: t('defense.verbal.desc'),
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
                {t('hero.title')}
              </h1>
              <p className="text-xl md:text-2xl text-white/90 mb-4 font-medium">
                {t('hero.subtitle')}
              </p>
              <p className="text-lg text-white/80 max-w-3xl mx-auto leading-relaxed">
                {t('hero.description')}
              </p>
            </div>
          </div>
        </section>

        {/* Know Their Rights Section */}
        <div className="container px-4 md:px-8">
          <HorizontalScroll 
            title={t('section.rights')}
            items={rightsItems}
          />
        </div>

        {/* Self Defense Videos Section */}
        <div className="container px-4 md:px-8 mt-8">
          <HorizontalScroll 
            title={t('section.selfDefense')}
            items={selfDefenseItems}
          />
        </div>

        {/* Latest Updates Section */}
        <div className="container px-4 md:px-8 mt-12">
          <LatestUpdates />
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
