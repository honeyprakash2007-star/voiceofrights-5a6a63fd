import Header from "@/components/Header";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const LegalRights = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-primary/5 to-background">
      <Header />
      <main className="container px-4 py-8 md:px-8">
        <Link to="/" className="inline-flex items-center gap-2 text-primary hover:text-primary-light transition-colors mb-6">
          <ArrowLeft className="h-4 w-4" />
          Back to Home
        </Link>
        
        <div className="max-w-4xl mx-auto space-y-6">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
              Legal Rights of Citizens
            </h1>
            <p className="text-lg text-muted-foreground">
              Understanding your legal rights and protections under Indian law
            </p>
          </div>

          <Card className="border-primary/20">
            <CardHeader>
              <CardTitle className="text-2xl">Right to Equality (Articles 14-18)</CardTitle>
              <CardDescription>Equal treatment before law</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4 text-base leading-relaxed">
              <p>
                The Constitution guarantees equality before law and equal protection of laws to all persons within the territory of India.
              </p>
              <div>
                <h3 className="font-bold text-lg mb-2">Key Rights Include:</h3>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li><strong>Article 14:</strong> Equality before law - The State shall not deny to any person equality before law or equal protection of laws</li>
                  <li><strong>Article 15:</strong> Prohibition of discrimination on grounds of religion, race, caste, sex or place of birth</li>
                  <li><strong>Article 16:</strong> Equality of opportunity in matters of public employment</li>
                  <li><strong>Article 17:</strong> Abolition of untouchability</li>
                  <li><strong>Article 18:</strong> Abolition of titles except military and academic distinctions</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          <Card className="border-primary/20">
            <CardHeader>
              <CardTitle className="text-2xl">Right to Freedom (Articles 19-22)</CardTitle>
              <CardDescription>Protection of certain rights regarding freedom</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4 text-base leading-relaxed">
              <div>
                <h3 className="font-bold text-lg mb-2">Six Fundamental Freedoms (Article 19):</h3>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Freedom of speech and expression</li>
                  <li>Freedom to assemble peacefully without arms</li>
                  <li>Freedom to form associations or unions</li>
                  <li>Freedom to move freely throughout India</li>
                  <li>Freedom to reside and settle in any part of India</li>
                  <li>Freedom to practice any profession or carry on any occupation, trade or business</li>
                </ul>
              </div>
              <div>
                <h3 className="font-bold text-lg mb-2">Protection in Arrest:</h3>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li><strong>Article 20:</strong> Protection against conviction for offences - No ex-post facto law</li>
                  <li><strong>Article 21:</strong> Protection of life and personal liberty</li>
                  <li><strong>Article 22:</strong> Protection against arrest and detention - Right to be informed of grounds of arrest, right to consult legal practitioner</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          <Card className="border-primary/20">
            <CardHeader>
              <CardTitle className="text-2xl">Right Against Exploitation (Articles 23-24)</CardTitle>
              <CardDescription>Prohibition of trafficking and forced labor</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4 text-base leading-relaxed">
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li><strong>Article 23:</strong> Prohibition of traffic in human beings and forced labor - Begar (forced labor) is prohibited</li>
                <li><strong>Article 24:</strong> Prohibition of employment of children in factories - No child below 14 years shall be employed in any factory, mine or other hazardous employment</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-primary/20">
            <CardHeader>
              <CardTitle className="text-2xl">Right to Freedom of Religion (Articles 25-28)</CardTitle>
              <CardDescription>Freedom of conscience and free profession, practice and propagation of religion</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4 text-base leading-relaxed">
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li><strong>Article 25:</strong> Freedom of conscience and free profession, practice and propagation of religion</li>
                <li><strong>Article 26:</strong> Freedom to manage religious affairs</li>
                <li><strong>Article 27:</strong> Freedom from payment of taxes for promotion of any religion</li>
                <li><strong>Article 28:</strong> Freedom from attending religious instruction in certain educational institutions</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-primary/20">
            <CardHeader>
              <CardTitle className="text-2xl">Cultural and Educational Rights (Articles 29-30)</CardTitle>
              <CardDescription>Protection of interests of minorities</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4 text-base leading-relaxed">
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li><strong>Article 29:</strong> Protection of interests of minorities - Any section of citizens with distinct language, script or culture has right to conserve the same</li>
                <li><strong>Article 30:</strong> Right of minorities to establish and administer educational institutions</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-primary/20">
            <CardHeader>
              <CardTitle className="text-2xl">Right to Constitutional Remedies (Article 32)</CardTitle>
              <CardDescription>The heart and soul of the Constitution</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4 text-base leading-relaxed">
              <p>
                Article 32 guarantees the right to move the Supreme Court for enforcement of Fundamental Rights. Dr. B.R. Ambedkar called it the "heart and soul" of the Constitution.
              </p>
              <div>
                <h3 className="font-bold text-lg mb-2">Writs that can be issued:</h3>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li><strong>Habeas Corpus:</strong> To produce a person before the court</li>
                  <li><strong>Mandamus:</strong> Command to perform public duty</li>
                  <li><strong>Prohibition:</strong> To prevent lower courts from exceeding jurisdiction</li>
                  <li><strong>Certiorari:</strong> To quash an order of lower court</li>
                  <li><strong>Quo Warranto:</strong> To inquire into the legality of claim of a person to public office</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default LegalRights;
