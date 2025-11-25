import Header from "@/components/Header";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const ConsumerRights = () => {
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
              Consumer Rights in India
            </h1>
            <p className="text-lg text-muted-foreground">
              Understanding your rights under Consumer Protection Act, 2019
            </p>
          </div>

          <Card className="border-primary/20">
            <CardHeader>
              <CardTitle className="text-2xl">Consumer Protection Act, 2019</CardTitle>
              <CardDescription>Comprehensive law for consumer protection</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4 text-base leading-relaxed">
              <p>
                The Consumer Protection Act, 2019 replaced the earlier Act of 1986 and provides a robust framework to safeguard consumer interests and uphold fairness in trade and commerce. The Act empowers consumers to seek redress for unfair trade practices and defective goods or services.
              </p>
              <div>
                <h3 className="font-bold text-lg mb-2">Key Objectives:</h3>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Protection of consumer rights</li>
                  <li>Establishment of consumer protection councils</li>
                  <li>Creation of Consumer Disputes Redressal Commissions</li>
                  <li>Regulation of e-commerce and direct selling</li>
                  <li>Prevention of unfair trade practices</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          <Card className="border-primary/20">
            <CardHeader>
              <CardTitle className="text-2xl">Six Fundamental Consumer Rights</CardTitle>
              <CardDescription>Rights explicitly outlined in the Consumer Protection Act</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4 text-base leading-relaxed">
              <div className="space-y-4">
                <div className="border-l-4 border-primary pl-4">
                  <h3 className="font-bold text-lg mb-2">1. Right to Safety</h3>
                  <p>
                    Protection against goods and services that are hazardous to life and property. Consumers have the right to expect that products and services will not cause harm when used as intended.
                  </p>
                </div>

                <div className="border-l-4 border-primary pl-4">
                  <h3 className="font-bold text-lg mb-2">2. Right to be Informed</h3>
                  <p>
                    Right to be informed about the quality, quantity, potency, purity, standard, and price of goods or services. This protects consumers against fraudulent, deceitful, or misleading advertisements and labeling.
                  </p>
                </div>

                <div className="border-l-4 border-primary pl-4">
                  <h3 className="font-bold text-lg mb-2">3. Right to Choose</h3>
                  <p>
                    Right to access a variety of goods and services at competitive prices. Consumers should have the freedom to select from multiple options without being forced to buy a particular brand or product.
                  </p>
                </div>

                <div className="border-l-4 border-primary pl-4">
                  <h3 className="font-bold text-lg mb-2">4. Right to be Heard</h3>
                  <p>
                    Right to be heard and assured that consumer interests will receive due consideration. Consumers have the right to represent their interests in forums for redressal of consumer grievances.
                  </p>
                </div>

                <div className="border-l-4 border-primary pl-4">
                  <h3 className="font-bold text-lg mb-2">5. Right to Seek Redressal</h3>
                  <p>
                    Right to seek redressal against unfair trade practices or restrictive trade practices. Consumers can file complaints and seek compensation for defective goods or deficient services.
                  </p>
                </div>

                <div className="border-l-4 border-primary pl-4">
                  <h3 className="font-bold text-lg mb-2">6. Right to Consumer Education</h3>
                  <p>
                    Right to acquire knowledge and skills to become an informed consumer. This includes awareness about consumer rights, responsibilities, and available remedies.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-primary/20">
            <CardHeader>
              <CardTitle className="text-2xl">Consumer Disputes Redressal Commissions</CardTitle>
              <CardDescription>Three-tier quasi-judicial mechanism</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4 text-base leading-relaxed">
              <div>
                <h3 className="font-bold text-lg mb-2">District Commission:</h3>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Handles complaints where value of goods or services does not exceed ₹1 crore</li>
                  <li>Present in every district</li>
                </ul>
              </div>
              <div>
                <h3 className="font-bold text-lg mb-2">State Commission:</h3>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Handles complaints exceeding ₹1 crore but not exceeding ₹10 crores</li>
                  <li>Acts as appellate authority over District Commission decisions</li>
                </ul>
              </div>
              <div>
                <h3 className="font-bold text-lg mb-2">National Commission:</h3>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Handles complaints exceeding ₹10 crores</li>
                  <li>Acts as appellate authority over State Commission decisions</li>
                  <li>Highest consumer court in the country</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          <Card className="border-primary/20">
            <CardHeader>
              <CardTitle className="text-2xl">How to File a Consumer Complaint</CardTitle>
              <CardDescription>Step-by-step process for seeking redressal</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4 text-base leading-relaxed">
              <div>
                <h3 className="font-bold text-lg mb-2">Steps to File Complaint:</h3>
                <ol className="list-decimal list-inside space-y-3 ml-4">
                  <li>
                    <strong>Identify the appropriate forum:</strong> Based on the value of goods/services
                  </li>
                  <li>
                    <strong>Prepare the complaint:</strong> Include details of the complainant, opposite party, facts, and relief sought
                  </li>
                  <li>
                    <strong>Attach supporting documents:</strong> Bills, receipts, warranty cards, correspondence
                  </li>
                  <li>
                    <strong>File online or offline:</strong> Use e-Daakhil portal (edaakhil.nic.in) or submit physically
                  </li>
                  <li>
                    <strong>Pay fee if required:</strong> No fee for complaints up to ₹5 lakhs
                  </li>
                  <li>
                    <strong>Attend hearings:</strong> Cooperate with the commission proceedings
                  </li>
                </ol>
              </div>
              <div className="bg-accent/10 p-4 rounded-lg">
                <h3 className="font-bold text-lg mb-2">Important Points:</h3>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Complaint must be filed within 2 years from the date of cause of action</li>
                  <li>No court fee for complaints up to ₹5 lakhs</li>
                  <li>Complaints can be filed online through National Consumer Helpline Portal</li>
                  <li>Consumer can appear in person or through authorized agent</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          <Card className="border-primary/20">
            <CardHeader>
              <CardTitle className="text-2xl">E-commerce and Consumer Rights</CardTitle>
              <CardDescription>Special provisions for online shopping</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4 text-base leading-relaxed">
              <p>
                The Consumer Protection (E-Commerce) Rules, 2020 provide additional safeguards for online consumers:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>E-commerce platforms must provide clear information about return, refund, exchange, warranty, and guarantee</li>
                <li>No manipulation of search results to misguide consumers</li>
                <li>Mandatory display of country of origin</li>
                <li>Grievance redressal mechanism within 48 hours</li>
                <li>Protection against fake reviews and misleading advertisements</li>
                <li>Clear display of total price including all charges</li>
                <li>No discrimination between buyers</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-primary/20">
            <CardHeader>
              <CardTitle className="text-2xl">Unfair Trade Practices</CardTitle>
              <CardDescription>What constitutes unfair trade practice</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4 text-base leading-relaxed">
              <div>
                <h3 className="font-bold text-lg mb-2">Examples of Unfair Trade Practices:</h3>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>False or misleading representation about goods or services</li>
                  <li>False representation about price, quality, or standard</li>
                  <li>False or misleading advertisement</li>
                  <li>Selling goods or services at a price higher than MRP</li>
                  <li>Hoarding or destruction of goods to raise prices</li>
                  <li>Refusing to sell goods or provide services</li>
                  <li>Not issuing proper bills or receipts</li>
                  <li>Using deceptive trade practices</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          <Card className="border-primary/20 bg-primary/10">
            <CardHeader>
              <CardTitle className="text-2xl">National Consumer Helpline</CardTitle>
              <CardDescription>24x7 assistance for consumers</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4 text-base leading-relaxed">
              <div className="text-center py-4">
                <p className="text-3xl font-bold text-primary mb-2">1800-11-4000</p>
                <p className="text-lg">Toll-Free National Consumer Helpline</p>
              </div>
              <div>
                <h3 className="font-bold text-lg mb-2">Services Provided:</h3>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Information about consumer rights</li>
                  <li>Guidance on filing complaints</li>
                  <li>Mediation and conciliation services</li>
                  <li>Assistance in 17 languages</li>
                  <li>Online complaint registration</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default ConsumerRights;
