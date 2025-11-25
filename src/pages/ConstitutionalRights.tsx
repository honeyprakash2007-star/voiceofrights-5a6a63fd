import Header from "@/components/Header";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const ConstitutionalRights = () => {
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
              Fundamental Constitutional Rights
            </h1>
            <p className="text-lg text-muted-foreground">
              The Golden Triangle: Articles 14, 19 & 21
            </p>
          </div>

          <Card className="border-primary/20 bg-gradient-card">
            <CardHeader>
              <CardTitle className="text-2xl text-primary-foreground">The Golden Triangle of Indian Constitution</CardTitle>
              <CardDescription className="text-primary-foreground/80">Understanding the interconnection of fundamental rights</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4 text-base leading-relaxed text-primary-foreground">
              <p>
                Articles 14, 19, and 21 are collectively known as the "Golden Triangle" of the Indian Constitution. These three articles form the core of fundamental rights and are considered the basic principles for the smooth functioning of life for a citizen.
              </p>
              <p>
                The Golden Triangle provides full protection to individuals from any encroachment upon their rights and breathes vitality into the concept of the rule of law.
              </p>
            </CardContent>
          </Card>

          <Card className="border-primary/20">
            <CardHeader>
              <CardTitle className="text-2xl">Article 14 - Right to Equality</CardTitle>
              <CardDescription>Equality before law and equal protection of laws</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4 text-base leading-relaxed">
              <div className="bg-primary/10 p-4 rounded-lg border-l-4 border-primary">
                <p className="italic font-semibold">
                  "The State shall not deny to any person equality before the law or the equal protection of the laws within the territory of India."
                </p>
              </div>
              <div>
                <h3 className="font-bold text-lg mb-2">Key Principles:</h3>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li><strong>Equality before law:</strong> No person is above the law. Every person is subject to the jurisdiction of ordinary courts</li>
                  <li><strong>Equal protection of laws:</strong> Similar treatment of persons in similar circumstances, both in privileges conferred and liabilities imposed</li>
                  <li>Prohibits discrimination but permits reasonable classification</li>
                  <li>Forms the basis for all equality-related rights</li>
                </ul>
              </div>
              <div>
                <h3 className="font-bold text-lg mb-2">Important Cases:</h3>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li><strong>E.P. Royappa v. State of Tamil Nadu:</strong> Established that equality is the antithesis of arbitrariness</li>
                  <li><strong>Maneka Gandhi v. Union of India:</strong> Expanded the scope to include reasonableness and fairness</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          <Card className="border-primary/20">
            <CardHeader>
              <CardTitle className="text-2xl">Article 19 - Right to Freedom</CardTitle>
              <CardDescription>Protection of six fundamental freedoms</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4 text-base leading-relaxed">
              <p>
                Article 19 guarantees six fundamental freedoms to all citizens of India, subject to reasonable restrictions in the interest of sovereignty, integrity, security of State, public order, decency or morality.
              </p>
              <div>
                <h3 className="font-bold text-lg mb-2">The Six Freedoms:</h3>
                <ol className="list-decimal list-inside space-y-3 ml-4">
                  <li>
                    <strong>Freedom of Speech and Expression (19(1)(a)):</strong>
                    <ul className="list-disc list-inside ml-6 mt-1 space-y-1">
                      <li>Right to express one's views freely through speech, writing, printing, pictures or any other mode</li>
                      <li>Includes freedom of press</li>
                      <li>Right to information</li>
                    </ul>
                  </li>
                  <li>
                    <strong>Freedom to Assemble Peacefully (19(1)(b)):</strong>
                    <ul className="list-disc list-inside ml-6 mt-1 space-y-1">
                      <li>Right to hold public meetings and peaceful processions</li>
                      <li>Assembly must be peaceful and without arms</li>
                    </ul>
                  </li>
                  <li>
                    <strong>Freedom to Form Associations (19(1)(c)):</strong>
                    <ul className="list-disc list-inside ml-6 mt-1 space-y-1">
                      <li>Right to form associations, unions, or cooperative societies</li>
                      <li>Includes right to form political parties and trade unions</li>
                    </ul>
                  </li>
                  <li>
                    <strong>Freedom of Movement (19(1)(d)):</strong>
                    <ul className="list-disc list-inside ml-6 mt-1 space-y-1">
                      <li>Right to move freely throughout the territory of India</li>
                    </ul>
                  </li>
                  <li>
                    <strong>Freedom to Reside (19(1)(e)):</strong>
                    <ul className="list-disc list-inside ml-6 mt-1 space-y-1">
                      <li>Right to reside and settle in any part of India</li>
                    </ul>
                  </li>
                  <li>
                    <strong>Freedom of Profession (19(1)(g)):</strong>
                    <ul className="list-disc list-inside ml-6 mt-1 space-y-1">
                      <li>Right to practice any profession or carry on any occupation, trade or business</li>
                    </ul>
                  </li>
                </ol>
              </div>
            </CardContent>
          </Card>

          <Card className="border-primary/20">
            <CardHeader>
              <CardTitle className="text-2xl">Article 21 - Right to Life and Personal Liberty</CardTitle>
              <CardDescription>The most expansive fundamental right</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4 text-base leading-relaxed">
              <div className="bg-primary/10 p-4 rounded-lg border-l-4 border-primary">
                <p className="italic font-semibold">
                  "No person shall be deprived of his life or personal liberty except according to procedure established by law."
                </p>
              </div>
              <p>
                Article 21 is the most celebrated article of the Constitution and has been expanded through judicial interpretation to include numerous rights essential for a dignified life.
              </p>
              <div>
                <h3 className="font-bold text-lg mb-2">Rights Derived from Article 21:</h3>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li><strong>Right to Live with Human Dignity:</strong> Basic minimum requirements for quality of life</li>
                  <li><strong>Right to Privacy:</strong> Includes personal privacy, family privacy, and privacy of the home</li>
                  <li><strong>Right to Shelter:</strong> Adequate shelter is fundamental for human life</li>
                  <li><strong>Right to Health:</strong> Right to health care and medical assistance</li>
                  <li><strong>Right to Clean Environment:</strong> Pollution-free environment necessary for healthy life</li>
                  <li><strong>Right to Education:</strong> Free and compulsory education for children 6-14 years</li>
                  <li><strong>Right to Speedy Trial:</strong> Unreasonable delay in trial violates Article 21</li>
                  <li><strong>Right to Food:</strong> Right to food and water necessary for life</li>
                  <li><strong>Right against Solitary Confinement:</strong> Protection from inhuman treatment</li>
                  <li><strong>Right to Legal Aid:</strong> Free legal aid to poor and needy</li>
                </ul>
              </div>
              <div>
                <h3 className="font-bold text-lg mb-2">Landmark Cases:</h3>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li><strong>Maneka Gandhi v. Union of India (1978):</strong> Procedure must be just, fair and reasonable</li>
                  <li><strong>Francis Coralie v. Union Territory of Delhi:</strong> Right to life includes right to live with human dignity</li>
                  <li><strong>K.S. Puttaswamy v. Union of India (2017):</strong> Right to privacy is a fundamental right</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          <Card className="border-primary/20">
            <CardHeader>
              <CardTitle className="text-2xl">Interconnection of the Golden Triangle</CardTitle>
              <CardDescription>How Articles 14, 19 & 21 work together</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4 text-base leading-relaxed">
              <p>
                The Supreme Court has established that these three articles must be read together as they complement and reinforce each other:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Article 14 provides the foundation of equality and non-arbitrariness</li>
                <li>Article 19 specifies the freedoms that flow from the right to life and liberty</li>
                <li>Article 21 ensures that any law affecting life and liberty must be just, fair and reasonable</li>
                <li>A law violating Article 14 or 19 would also violate Article 21 as it would not be reasonable</li>
                <li>Together they form a comprehensive code of protection for personal liberty</li>
              </ul>
              <div className="bg-accent/10 p-4 rounded-lg mt-4">
                <p className="font-semibold">
                  The Golden Triangle ensures that the State cannot take away a person's life or liberty through arbitrary, unfair, or unreasonable means, and any restriction must pass the triple test of Articles 14, 19, and 21.
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
