import { HelpCircle } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useLanguage, Language } from "@/contexts/LanguageContext";

const faqTranslations: Record<Language, {
  gotQuestions: string;
  frequentlyAsked: string;
  questions: string;
  findAnswers: string;
  stillHaveQuestions: string;
  askAi: string;
}> = {
  en: {
    gotQuestions: "Got Questions?",
    frequentlyAsked: "Frequently Asked",
    questions: "Questions",
    findAnswers: "Find answers to common legal questions and learn more about your rights and protections.",
    stillHaveQuestions: "Still have questions?",
    askAi: "Ask our AI Assistant",
  },
  kn: {
    gotQuestions: "ಪ್ರಶ್ನೆಗಳಿವೆಯೇ?",
    frequentlyAsked: "ಪದೇ ಪದೇ ಕೇಳಲಾಗುವ",
    questions: "ಪ್ರಶ್ನೆಗಳು",
    findAnswers: "ಸಾಮಾನ್ಯ ಕಾನೂನು ಪ್ರಶ್ನೆಗಳಿಗೆ ಉತ್ತರಗಳನ್ನು ಹುಡುಕಿ ಮತ್ತು ನಿಮ್ಮ ಹಕ್ಕುಗಳು ಮತ್ತು ರಕ್ಷಣೆಗಳ ಬಗ್ಗೆ ಇನ್ನಷ್ಟು ತಿಳಿಯಿರಿ.",
    stillHaveQuestions: "ಇನ್ನೂ ಪ್ರಶ್ನೆಗಳಿವೆಯೇ?",
    askAi: "ನಮ್ಮ AI ಸಹಾಯಕನನ್ನು ಕೇಳಿ",
  },
  hi: {
    gotQuestions: "सवाल हैं?",
    frequentlyAsked: "अक्सर पूछे जाने वाले",
    questions: "प्रश्न",
    findAnswers: "सामान्य कानूनी सवालों के जवाब पाएं और अपने अधिकारों और सुरक्षा के बारे में अधिक जानें।",
    stillHaveQuestions: "अभी भी सवाल हैं?",
    askAi: "हमारे AI सहायक से पूछें",
  },
};

const faqs: Record<Language, { question: string; answer: string }[]> = {
  en: [
    {
      question: "What is Voice of Rights?",
      answer: "Voice of Rights is a comprehensive legal awareness platform designed to educate citizens about their fundamental rights, legal protections, and resources available to them."
    },
    {
      question: "How can I file an FIR (First Information Report)?",
      answer: "You can file an FIR at any police station. The police are obligated to register your FIR for cognizable offenses. You can also file an e-FIR online in many states."
    },
    {
      question: "What are my rights if I am arrested?",
      answer: "If arrested, you have the right to know the grounds of arrest, inform a relative/friend, meet a lawyer, be produced before a magistrate within 24 hours, and get free legal aid."
    },
    {
      question: "How do I file a consumer complaint?",
      answer: "You can file a consumer complaint through the National Consumer Helpline (1800-11-4000) or online at consumerhelpline.gov.in."
    },
    {
      question: "What should I do if I'm a victim of cybercrime?",
      answer: "Report the cybercrime immediately at cybercrime.gov.in or call 1930 (National Cyber Crime Helpline). Preserve all evidence like screenshots."
    },
  ],
  kn: [
    {
      question: "ವಾಯ್ಸ್ ಆಫ್ ರೈಟ್ಸ್ ಎಂದರೇನು?",
      answer: "ವಾಯ್ಸ್ ಆಫ್ ರೈಟ್ಸ್ ಒಂದು ಸಮಗ್ರ ಕಾನೂನು ಜಾಗೃತಿ ವೇದಿಕೆಯಾಗಿದ್ದು, ನಾಗರಿಕರಿಗೆ ಅವರ ಮೂಲಭೂತ ಹಕ್ಕುಗಳು, ಕಾನೂನು ರಕ್ಷಣೆಗಳು ಮತ್ತು ಲಭ್ಯ ಸಂಪನ್ಮೂಲಗಳ ಬಗ್ಗೆ ಶಿಕ್ಷಣ ನೀಡುತ್ತದೆ."
    },
    {
      question: "FIR (ಮೊದಲ ಮಾಹಿತಿ ವರದಿ) ಅನ್ನು ಹೇಗೆ ದಾಖಲಿಸಬಹುದು?",
      answer: "ನೀವು ಯಾವುದೇ ಪೊಲೀಸ್ ಠಾಣೆಯಲ್ಲಿ FIR ದಾಖಲಿಸಬಹುದು. ಅರಿವಿನ ಅಪರಾಧಗಳಿಗೆ ಪೊಲೀಸರು ನಿಮ್ಮ FIR ಅನ್ನು ನೋಂದಾಯಿಸಲು ಬಾಧ್ಯರಾಗಿರುತ್ತಾರೆ."
    },
    {
      question: "ನನ್ನನ್ನು ಬಂಧಿಸಿದರೆ ನನ್ನ ಹಕ್ಕುಗಳೇನು?",
      answer: "ಬಂಧನವಾದರೆ, ಬಂಧನದ ಕಾರಣಗಳನ್ನು ತಿಳಿಯುವ, ಸಂಬಂಧಿಕರಿಗೆ ತಿಳಿಸುವ, ವಕೀಲರನ್ನು ಭೇಟಿಯಾಗುವ, 24 ಗಂಟೆಗಳಲ್ಲಿ ಮ್ಯಾಜಿಸ್ಟ್ರೇಟ್ ಮುಂದೆ ಹಾಜರಾಗುವ ಹಕ್ಕು ನಿಮಗಿದೆ."
    },
    {
      question: "ಗ್ರಾಹಕ ದೂರನ್ನು ಹೇಗೆ ದಾಖಲಿಸುವುದು?",
      answer: "ನೀವು ರಾಷ್ಟ್ರೀಯ ಗ್ರಾಹಕ ಸಹಾಯವಾಣಿ (1800-11-4000) ಮೂಲಕ ಅಥವಾ consumerhelpline.gov.in ನಲ್ಲಿ ಆನ್‌ಲೈನ್‌ನಲ್ಲಿ ಗ್ರಾಹಕ ದೂರನ್ನು ದಾಖಲಿಸಬಹುದು."
    },
    {
      question: "ಸೈಬರ್ ಅಪರಾಧದ ಬಲಿಪಶುವಾದರೆ ನಾನು ಏನು ಮಾಡಬೇಕು?",
      answer: "ಸೈಬರ್ ಅಪರಾಧವನ್ನು ತಕ್ಷಣ cybercrime.gov.in ನಲ್ಲಿ ವರದಿ ಮಾಡಿ ಅಥವಾ 1930 (ರಾಷ್ಟ್ರೀಯ ಸೈಬರ್ ಅಪರಾಧ ಸಹಾಯವಾಣಿ) ಗೆ ಕರೆ ಮಾಡಿ."
    },
  ],
  hi: [
    {
      question: "वॉइस ऑफ राइट्स क्या है?",
      answer: "वॉइस ऑफ राइट्स एक व्यापक कानूनी जागरूकता मंच है जो नागरिकों को उनके मौलिक अधिकारों, कानूनी सुरक्षा और उपलब्ध संसाधनों के बारे में शिक्षित करता है।"
    },
    {
      question: "FIR (प्रथम सूचना रिपोर्ट) कैसे दर्ज करें?",
      answer: "आप किसी भी पुलिस स्टेशन में FIR दर्ज कर सकते हैं। संज्ञेय अपराधों के लिए पुलिस आपकी FIR दर्ज करने के लिए बाध्य है।"
    },
    {
      question: "अगर मुझे गिरफ्तार किया जाता है तो मेरे क्या अधिकार हैं?",
      answer: "गिरफ्तारी पर, आपको गिरफ्तारी के कारण जानने, रिश्तेदारों को सूचित करने, वकील से मिलने, 24 घंटे के भीतर मजिस्ट्रेट के सामने पेश होने और मुफ्त कानूनी सहायता का अधिकार है।"
    },
    {
      question: "उपभोक्ता शिकायत कैसे दर्ज करें?",
      answer: "आप राष्ट्रीय उपभोक्ता हेल्पलाइन (1800-11-4000) के माध्यम से या consumerhelpline.gov.in पर ऑनलाइन उपभोक्ता शिकायत दर्ज कर सकते हैं।"
    },
    {
      question: "साइबर अपराध का शिकार होने पर क्या करें?",
      answer: "साइबर अपराध की तुरंत cybercrime.gov.in पर रिपोर्ट करें या 1930 (राष्ट्रीय साइबर अपराध हेल्पलाइन) पर कॉल करें।"
    },
  ],
};

const FAQ = () => {
  const { language } = useLanguage();
  const t = faqTranslations[language];
  const currentFaqs = faqs[language];

  return (
    <section className="py-16 px-4 bg-gradient-to-b from-transparent to-primary/5">
      <div className="container mx-auto max-w-4xl">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-primary/10 backdrop-blur-sm rounded-full px-4 py-2 mb-4">
            <HelpCircle className="w-5 h-5 text-primary" />
            <span className="text-primary text-sm font-medium">{t.gotQuestions}</span>
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            {t.frequentlyAsked} <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">{t.questions}</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            {t.findAnswers}
          </p>
        </div>

        {/* FAQ Accordion */}
        <Accordion type="single" collapsible className="space-y-4">
          {currentFaqs.map((faq, index) => (
            <AccordionItem 
              key={index} 
              value={`item-${index}`}
              className="bg-card/50 backdrop-blur-sm rounded-2xl border border-border px-6 overflow-hidden data-[state=open]:border-primary/50 transition-colors"
            >
              <AccordionTrigger className="text-left text-foreground hover:text-primary py-5 [&[data-state=open]>svg]:rotate-180">
                <span className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-r from-primary to-secondary flex items-center justify-center text-sm font-bold text-primary-foreground">
                    {index + 1}
                  </span>
                  <span className="font-medium">{faq.question}</span>
                </span>
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground pb-5 pl-11">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        {/* CTA */}
        <div className="mt-12 text-center">
          <p className="text-muted-foreground mb-4">{t.stillHaveQuestions}</p>
          <a 
            href="/glossary" 
            className="inline-flex items-center gap-2 bg-gradient-to-r from-primary to-secondary text-primary-foreground px-6 py-3 rounded-full font-medium hover:opacity-90 transition-all shadow-lg hover:shadow-primary/25"
          >
            <HelpCircle className="w-5 h-5" />
            {t.askAi}
          </a>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
