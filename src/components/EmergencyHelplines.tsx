import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Phone, AlertCircle } from "lucide-react";

const EmergencyHelplines = () => {
  const helplines = [
    {
      name: "National Emergency Number",
      number: "112",
      description: "All-in-one emergency number for Police, Fire, and Medical emergencies",
      available: "24x7"
    },
    {
      name: "Women Helpline",
      number: "181",
      description: "24x7 toll-free helpline for women in distress",
      available: "24x7"
    },
    {
      name: "Police",
      number: "100",
      description: "For reporting crimes and emergencies",
      available: "24x7"
    },
    {
      name: "Child Helpline",
      number: "1098",
      description: "For children in need of care and protection",
      available: "24x7"
    },
    {
      name: "National Commission for Women",
      number: "7827-170-170",
      description: "Women's rights and protection",
      available: "10 AM - 6 PM (Mon-Fri)"
    },
    {
      name: "Cyber Crime Helpline",
      number: "1930",
      description: "Report cyber crimes and online fraud",
      available: "24x7"
    },
    {
      name: "Senior Citizens Helpline",
      number: "14567",
      description: "Assistance for elderly citizens",
      available: "24x7"
    },
    {
      name: "National Consumer Helpline",
      number: "1800-11-4000",
      description: "Consumer complaints and grievances",
      available: "9:30 AM - 5:30 PM (Mon-Sat)"
    },
    {
      name: "Mental Health Helpline",
      number: "08046110007",
      description: "NIMHANS mental health support",
      available: "24x7"
    },
    {
      name: "Ambulance",
      number: "102",
      description: "Medical emergency services",
      available: "24x7"
    },
    {
      name: "Anti-Ragging Helpline",
      number: "1800-180-5522",
      description: "Report ragging in educational institutions",
      available: "24x7"
    },
    {
      name: "Railway Helpline",
      number: "139",
      description: "Railway enquiry and emergency",
      available: "24x7"
    }
  ];

  return (
    <section className="py-12 bg-gradient-to-br from-primary/5 to-background rounded-2xl">
      <div className="container px-4 md:px-8">
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-3 mb-4">
            <AlertCircle className="h-8 w-8 text-destructive animate-pulse" />
            <h2 className="text-3xl font-bold bg-gradient-primary bg-clip-text text-transparent">
              Emergency Contact Helplines
            </h2>
          </div>
          <p className="text-lg text-muted-foreground">
            Save these numbers for quick access during emergencies
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {helplines.map((helpline, index) => (
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
            Important Note:
          </h3>
          <ul className="space-y-2 text-sm">
            <li>• Keep these numbers saved in your phone for quick access</li>
            <li>• Share helpline numbers with family and friends</li>
            <li>• All emergency helplines are toll-free</li>
            <li>• Don't hesitate to call during emergencies</li>
            <li>• You can also dial 112 for connecting to any emergency service</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default EmergencyHelplines;
