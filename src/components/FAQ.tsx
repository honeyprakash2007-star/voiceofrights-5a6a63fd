import { HelpCircle } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "What is Voice of Rights?",
    answer: "Voice of Rights is a comprehensive legal awareness platform designed to educate citizens about their fundamental rights, legal protections, and resources available to them. We provide information on constitutional rights, consumer protection, cyber safety, women's protection laws, and self-defense."
  },
  {
    question: "How can I file an FIR (First Information Report)?",
    answer: "You can file an FIR at any police station. The police are obligated to register your FIR for cognizable offenses. You can also file an e-FIR online in many states. If the police refuse to register your FIR, you can approach the Superintendent of Police or file a complaint before the Magistrate under Section 156(3) of CrPC."
  },
  {
    question: "What are my rights if I am arrested?",
    answer: "If arrested, you have the right to: 1) Know the grounds of arrest, 2) Inform a relative/friend about your arrest, 3) Meet and consult a lawyer, 4) Be produced before a magistrate within 24 hours, 5) Not be tortured or subjected to cruel treatment, 6) Free legal aid if you cannot afford a lawyer, and 7) Medical examination."
  },
  {
    question: "How do I file a consumer complaint?",
    answer: "You can file a consumer complaint through the National Consumer Helpline (1800-11-4000) or online at consumerhelpline.gov.in. For formal complaints, approach the District Consumer Disputes Redressal Forum for claims up to ₹1 crore, State Commission for ₹1-10 crore, and National Commission for claims above ₹10 crore."
  },
  {
    question: "What should I do if I'm a victim of cybercrime?",
    answer: "Report the cybercrime immediately at cybercrime.gov.in or call 1930 (National Cyber Crime Helpline). Preserve all evidence like screenshots, messages, and transaction details. File an FIR at your local police station or the cyber cell. For financial fraud, also inform your bank immediately to freeze suspicious transactions."
  },
  {
    question: "What legal protections are available for women?",
    answer: "Key laws protecting women include: Protection of Women from Domestic Violence Act 2005, Sexual Harassment of Women at Workplace Act 2013, Dowry Prohibition Act 1961, and IPC sections covering rape, molestation, and cruelty. Women can call the Women Helpline at 181 for immediate assistance."
  },
  {
    question: "How can I get free legal aid?",
    answer: "Free legal aid is available through the National Legal Services Authority (NALSA) and State Legal Services Authorities. You're eligible if you belong to SC/ST, are a woman or child, a victim of trafficking, or have an annual income below the specified limit. Contact your nearest Legal Services Authority or call the legal aid helpline."
  },
  {
    question: "What are the emergency helpline numbers I should know?",
    answer: "Important helplines: Police - 100, Women Helpline - 181, Child Helpline - 1098, Cyber Crime - 1930, Consumer Helpline - 1800-11-4000, Senior Citizen - 14567, Ambulance - 102/108, Fire - 101, and National Emergency - 112 (unified emergency number)."
  },
  {
    question: "Can I record conversations for evidence?",
    answer: "In India, recording a conversation you're part of is generally legal. However, recording private conversations of others without consent may violate privacy laws. Such recordings can be used as evidence in court, but their admissibility depends on how they were obtained and relevance to the case."
  },
  {
    question: "What is anticipatory bail and how to apply?",
    answer: "Anticipatory bail is pre-arrest bail sought when a person apprehends arrest. It can be filed in the Sessions Court or High Court under Section 438 of CrPC. You need to file through a lawyer with grounds for apprehension, nature of accusations, and reasons why bail should be granted."
  }
];

const FAQ = () => {
  return (
    <section className="py-16 px-4 bg-gradient-to-b from-transparent to-primary/5">
      <div className="container mx-auto max-w-4xl">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-primary/10 backdrop-blur-sm rounded-full px-4 py-2 mb-4">
            <HelpCircle className="w-5 h-5 text-primary" />
            <span className="text-primary text-sm font-medium">Got Questions?</span>
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Frequently Asked <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Questions</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Find answers to common legal questions and learn more about your rights and protections.
          </p>
        </div>

        {/* FAQ Accordion */}
        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
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
          <p className="text-muted-foreground mb-4">Still have questions?</p>
          <a 
            href="/glossary" 
            className="inline-flex items-center gap-2 bg-gradient-to-r from-primary to-secondary text-primary-foreground px-6 py-3 rounded-full font-medium hover:opacity-90 transition-all shadow-lg hover:shadow-primary/25"
          >
            <HelpCircle className="w-5 h-5" />
            Ask our AI Assistant
          </a>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
