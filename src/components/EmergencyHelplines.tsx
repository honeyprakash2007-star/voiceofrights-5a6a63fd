import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Phone, AlertCircle } from "lucide-react";
import { useLanguage, Language } from "@/contexts/LanguageContext";

const EmergencyHelplines = () => {
  const { language, t } = useLanguage();

  const helplineTranslations: Record<Language, {
    title: string;
    subtitle: string;
    noteTitle: string;
    notes: string[];
    helplines: {
      name: string;
      number: string;
      description: string;
      available: string;
    }[];
  }> = {
    en: {
      title: "Emergency Contact Helplines",
      subtitle: "Save these numbers for quick access during emergencies",
      noteTitle: "Important Note:",
      notes: [
        "Keep these numbers saved in your phone for quick access",
        "Share helpline numbers with family and friends",
        "All emergency helplines are toll-free",
        "Don't hesitate to call during emergencies",
        "You can also dial 112 for connecting to any emergency service"
      ],
      helplines: [
        { name: "National Emergency Number", number: "112", description: "All-in-one emergency number for Police, Fire, and Medical", available: "24x7" },
        { name: "Women Helpline", number: "181", description: "24x7 toll-free helpline for women in distress", available: "24x7" },
        { name: "Police", number: "100", description: "For reporting crimes and emergencies", available: "24x7" },
        { name: "Child Helpline", number: "1098", description: "For children in need of care and protection", available: "24x7" },
        { name: "National Commission for Women", number: "7827-170-170", description: "Women's rights and protection", available: "10 AM - 6 PM" },
        { name: "Cyber Crime Helpline", number: "1930", description: "Report cyber crimes and online fraud", available: "24x7" },
        { name: "Senior Citizens Helpline", number: "14567", description: "Assistance for elderly citizens", available: "24x7" },
        { name: "National Consumer Helpline", number: "1800-11-4000", description: "Consumer complaints and grievances", available: "9:30 AM - 5:30 PM" },
        { name: "Mental Health Helpline", number: "08046110007", description: "NIMHANS mental health support", available: "24x7" },
        { name: "Ambulance", number: "102", description: "Medical emergency services", available: "24x7" },
        { name: "Anti-Ragging Helpline", number: "1800-180-5522", description: "Report ragging in educational institutions", available: "24x7" },
        { name: "Railway Helpline", number: "139", description: "Railway enquiry and emergency", available: "24x7" }
      ]
    },
    hi: {
      title: "आपातकालीन संपर्क हेल्पलाइन",
      subtitle: "आपातकाल के दौरान त्वरित पहुंच के लिए इन नंबरों को सहेजें",
      noteTitle: "महत्वपूर्ण नोट:",
      notes: [
        "त्वरित पहुंच के लिए इन नंबरों को अपने फोन में सहेजें",
        "परिवार और दोस्तों के साथ हेल्पलाइन नंबर साझा करें",
        "सभी आपातकालीन हेल्पलाइन टोल-फ्री हैं",
        "आपातकाल में कॉल करने में संकोच न करें",
        "किसी भी आपातकालीन सेवा से जुड़ने के लिए 112 डायल करें"
      ],
      helplines: [
        { name: "राष्ट्रीय आपातकालीन नंबर", number: "112", description: "पुलिस, अग्निशमन और चिकित्सा के लिए एकीकृत नंबर", available: "24x7" },
        { name: "महिला हेल्पलाइन", number: "181", description: "संकट में महिलाओं के लिए 24x7 टोल-फ्री हेल्पलाइन", available: "24x7" },
        { name: "पुलिस", number: "100", description: "अपराध और आपातकाल की रिपोर्ट के लिए", available: "24x7" },
        { name: "चाइल्ड हेल्पलाइन", number: "1098", description: "देखभाल और सुरक्षा की जरूरत वाले बच्चों के लिए", available: "24x7" },
        { name: "राष्ट्रीय महिला आयोग", number: "7827-170-170", description: "महिला अधिकार और सुरक्षा", available: "10 AM - 6 PM" },
        { name: "साइबर अपराध हेल्पलाइन", number: "1930", description: "साइबर अपराध और ऑनलाइन धोखाधड़ी की रिपोर्ट करें", available: "24x7" },
        { name: "वरिष्ठ नागरिक हेल्पलाइन", number: "14567", description: "बुजुर्ग नागरिकों के लिए सहायता", available: "24x7" },
        { name: "राष्ट्रीय उपभोक्ता हेल्पलाइन", number: "1800-11-4000", description: "उपभोक्ता शिकायतें", available: "9:30 AM - 5:30 PM" },
        { name: "मानसिक स्वास्थ्य हेल्पलाइन", number: "08046110007", description: "NIMHANS मानसिक स्वास्थ्य सहायता", available: "24x7" },
        { name: "एम्बुलेंस", number: "102", description: "चिकित्सा आपातकालीन सेवाएं", available: "24x7" },
        { name: "एंटी-रैगिंग हेल्पलाइन", number: "1800-180-5522", description: "शैक्षिक संस्थानों में रैगिंग की रिपोर्ट करें", available: "24x7" },
        { name: "रेलवे हेल्पलाइन", number: "139", description: "रेलवे पूछताछ और आपातकाल", available: "24x7" }
      ]
    },
    kn: {
      title: "ತುರ್ತು ಸಂಪರ್ಕ ಸಹಾಯವಾಣಿಗಳು",
      subtitle: "ತುರ್ತು ಸಮಯದಲ್ಲಿ ತ್ವರಿತ ಪ್ರವೇಶಕ್ಕಾಗಿ ಈ ಸಂಖ್ಯೆಗಳನ್ನು ಉಳಿಸಿ",
      noteTitle: "ಮುಖ್ಯ ಟಿಪ್ಪಣಿ:",
      notes: [
        "ತ್ವರಿತ ಪ್ರವೇಶಕ್ಕಾಗಿ ಈ ಸಂಖ್ಯೆಗಳನ್ನು ನಿಮ್ಮ ಫೋನ್‌ನಲ್ಲಿ ಉಳಿಸಿ",
        "ಕುಟುಂಬ ಮತ್ತು ಸ್ನೇಹಿತರೊಂದಿಗೆ ಸಹಾಯವಾಣಿ ಸಂಖ್ಯೆಗಳನ್ನು ಹಂಚಿಕೊಳ್ಳಿ",
        "ಎಲ್ಲಾ ತುರ್ತು ಸಹಾಯವಾಣಿಗಳು ಟೋಲ್-ಫ್ರೀ",
        "ತುರ್ತು ಸಮಯದಲ್ಲಿ ಕರೆ ಮಾಡಲು ಹಿಂಜರಿಯಬೇಡಿ",
        "ಯಾವುದೇ ತುರ್ತು ಸೇವೆಗೆ ಸಂಪರ್ಕಿಸಲು 112 ಡಯಲ್ ಮಾಡಿ"
      ],
      helplines: [
        { name: "ರಾಷ್ಟ್ರೀಯ ತುರ್ತು ಸಂಖ್ಯೆ", number: "112", description: "ಪೊಲೀಸ್, ಅಗ್ನಿಶಾಮಕ ಮತ್ತು ವೈದ್ಯಕೀಯಕ್ಕಾಗಿ ಏಕೀಕೃತ ಸಂಖ್ಯೆ", available: "24x7" },
        { name: "ಮಹಿಳಾ ಸಹಾಯವಾಣಿ", number: "181", description: "ಸಂಕಷ್ಟದಲ್ಲಿರುವ ಮಹಿಳೆಯರಿಗೆ 24x7 ಟೋಲ್-ಫ್ರೀ ಸಹಾಯವಾಣಿ", available: "24x7" },
        { name: "ಪೊಲೀಸ್", number: "100", description: "ಅಪರಾಧಗಳು ಮತ್ತು ತುರ್ತು ಸಂದರ್ಭಗಳ ವರದಿಗಾಗಿ", available: "24x7" },
        { name: "ಮಕ್ಕಳ ಸಹಾಯವಾಣಿ", number: "1098", description: "ಆರೈಕೆ ಮತ್ತು ರಕ್ಷಣೆ ಬೇಕಾದ ಮಕ್ಕಳಿಗಾಗಿ", available: "24x7" },
        { name: "ರಾಷ್ಟ್ರೀಯ ಮಹಿಳಾ ಆಯೋಗ", number: "7827-170-170", description: "ಮಹಿಳಾ ಹಕ್ಕುಗಳು ಮತ್ತು ರಕ್ಷಣೆ", available: "10 AM - 6 PM" },
        { name: "ಸೈಬರ್ ಅಪರಾಧ ಸಹಾಯವಾಣಿ", number: "1930", description: "ಸೈಬರ್ ಅಪರಾಧಗಳು ಮತ್ತು ಆನ್‌ಲೈನ್ ವಂಚನೆಯನ್ನು ವರದಿ ಮಾಡಿ", available: "24x7" },
        { name: "ಹಿರಿಯ ನಾಗರಿಕ ಸಹಾಯವಾಣಿ", number: "14567", description: "ಹಿರಿಯ ನಾಗರಿಕರಿಗೆ ಸಹಾಯ", available: "24x7" },
        { name: "ರಾಷ್ಟ್ರೀಯ ಗ್ರಾಹಕ ಸಹಾಯವಾಣಿ", number: "1800-11-4000", description: "ಗ್ರಾಹಕ ದೂರುಗಳು", available: "9:30 AM - 5:30 PM" },
        { name: "ಮಾನಸಿಕ ಆರೋಗ್ಯ ಸಹಾಯವಾಣಿ", number: "08046110007", description: "NIMHANS ಮಾನಸಿಕ ಆರೋಗ್ಯ ಬೆಂಬಲ", available: "24x7" },
        { name: "ಆಂಬುಲೆನ್ಸ್", number: "102", description: "ವೈದ್ಯಕೀಯ ತುರ್ತು ಸೇವೆಗಳು", available: "24x7" },
        { name: "ಆಂಟಿ-ರ್ಯಾಗಿಂಗ್ ಸಹಾಯವಾಣಿ", number: "1800-180-5522", description: "ಶೈಕ್ಷಣಿಕ ಸಂಸ್ಥೆಗಳಲ್ಲಿ ರ್ಯಾಗಿಂಗ್ ವರದಿ ಮಾಡಿ", available: "24x7" },
        { name: "ರೈಲ್ವೆ ಸಹಾಯವಾಣಿ", number: "139", description: "ರೈಲ್ವೆ ವಿಚಾರಣೆ ಮತ್ತು ತುರ್ತು", available: "24x7" }
      ]
    }
  };

  const content = helplineTranslations[language];

  return (
    <section className="py-12 bg-gradient-to-br from-primary/5 to-background rounded-2xl">
      <div className="container px-4 md:px-8">
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-3 mb-4">
            <AlertCircle className="h-8 w-8 text-destructive animate-pulse" />
            <h2 className="text-3xl font-bold bg-gradient-primary bg-clip-text text-transparent">
              {content.title}
            </h2>
          </div>
          <p className="text-lg text-muted-foreground">
            {content.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {content.helplines.map((helpline, index) => (
            <Card key={index} className="border-primary/20 hover:border-primary transition-all duration-300 hover:shadow-lg">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <CardTitle className="text-lg mb-2">{helpline.name}</CardTitle>
                    <CardDescription className="text-sm">{helpline.description}</CardDescription>
                  </div>
                  <Phone className="h-5 w-5 text-primary flex-shrink-0 ml-2" />
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <a 
                    href={`tel:${helpline.number.replace(/-/g, '')}`}
                    className="text-2xl font-bold text-primary hover:text-primary-light transition-colors block"
                  >
                    {helpline.number}
                  </a>
                  <p className="text-xs text-muted-foreground">
                    <strong>Available:</strong> {helpline.available}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-8 p-6 bg-accent/10 rounded-lg border border-accent/20 max-w-4xl mx-auto">
          <h3 className="font-bold text-lg mb-3 flex items-center gap-2">
            <AlertCircle className="h-5 w-5 text-accent" />
            {content.noteTitle}
          </h3>
          <ul className="space-y-2 text-sm">
            {content.notes.map((note, index) => (
              <li key={index}>• {note}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default EmergencyHelplines;
