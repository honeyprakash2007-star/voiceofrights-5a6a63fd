import Header from "@/components/Header";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const WomenProtectionLaws = () => {
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
              Women Protection Laws in India
            </h1>
            <p className="text-lg text-muted-foreground">
              Comprehensive legal framework protecting women's rights and dignity
            </p>
          </div>

          <Card className="border-primary/20">
            <CardHeader>
              <CardTitle className="text-2xl">Protection of Women from Domestic Violence Act, 2005</CardTitle>
              <CardDescription>Civil law protection against domestic violence</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4 text-base leading-relaxed">
              <p>
                The Protection of Women from Domestic Violence Act, 2005 (PWDVA) is a comprehensive legislation designed to protect women from domestic violence in any form - physical, emotional, sexual, verbal, or economic abuse.
              </p>
              <div>
                <h3 className="font-bold text-lg mb-2">Key Provisions:</h3>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Provides immediate protection to women through Protection Orders</li>
                  <li>Ensures right to residence in shared household</li>
                  <li>Monetary relief for medical expenses and loss of earnings</li>
                  <li>Custody of children and visitation rights</li>
                  <li>Covers women in live-in relationships</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          <Card className="border-primary/20">
            <CardHeader>
              <CardTitle className="text-2xl">Sexual Harassment at Workplace Act, 2013</CardTitle>
              <CardDescription>Prevention, Prohibition and Redressal of Sexual Harassment</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4 text-base leading-relaxed">
              <p>
                This Act ensures safe and secure working environment for women by preventing and addressing sexual harassment at workplace.
              </p>
              <div>
                <h3 className="font-bold text-lg mb-2">Important Features:</h3>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Mandatory Internal Complaints Committee (ICC) in organizations</li>
                  <li>Defines sexual harassment comprehensively</li>
                  <li>Confidential complaint mechanism</li>
                  <li>Protection against retaliation</li>
                  <li>Penalties for non-compliance by employers</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          <Card className="border-primary/20">
            <CardHeader>
              <CardTitle className="text-2xl">Dowry Prohibition Act, 1961</CardTitle>
              <CardDescription>Prohibition of dowry system</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4 text-base leading-relaxed">
              <p>
                This Act prohibits the giving or taking of dowry at or before or any time after the marriage.
              </p>
              <div>
                <h3 className="font-bold text-lg mb-2">Key Points:</h3>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Dowry is a punishable offense with imprisonment up to 5 years</li>
                  <li>Fine up to ₹15,000 or the value of dowry, whichever is more</li>
                  <li>Both giving and taking dowry is illegal</li>
                  <li>Demand for dowry is also punishable</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          <Card className="border-primary/20">
            <CardHeader>
              <CardTitle className="text-2xl">Indian Penal Code (IPC) Sections for Women</CardTitle>
              <CardDescription>Criminal law provisions protecting women</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4 text-base leading-relaxed">
              <div>
                <h3 className="font-bold text-lg mb-2">Important IPC Sections:</h3>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li><strong>Section 354:</strong> Assault or criminal force to woman with intent to outrage her modesty</li>
                  <li><strong>Section 354A:</strong> Sexual harassment and punishment for it</li>
                  <li><strong>Section 354B:</strong> Assault or use of criminal force to woman with intent to disrobe</li>
                  <li><strong>Section 354C:</strong> Voyeurism</li>
                  <li><strong>Section 354D:</strong> Stalking</li>
                  <li><strong>Section 376:</strong> Punishment for rape</li>
                  <li><strong>Section 498A:</strong> Cruelty by husband or his relatives</li>
                  <li><strong>Section 509:</strong> Word, gesture or act intended to insult the modesty of a woman</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default WomenProtectionLaws;
