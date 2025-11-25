import Header from "@/components/Header";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, Shield, Lock, Eye, AlertTriangle, Smartphone, Mail } from "lucide-react";
import { Link } from "react-router-dom";

const CyberSafety = () => {
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
              Cyber Safety Procedures
            </h1>
            <p className="text-lg text-muted-foreground">
              Essential guidelines for staying safe online
            </p>
          </div>

          <Card className="border-primary/20 bg-gradient-card">
            <CardHeader>
              <CardTitle className="text-2xl text-primary-foreground flex items-center gap-2">
                <Shield className="h-6 w-6" />
                Top 15 Internet Safety Rules
              </CardTitle>
              <CardDescription className="text-primary-foreground/80">Essential practices for online security</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4 text-base leading-relaxed text-primary-foreground">
              <p>
                In today's digital world, protecting yourself online is crucial. Follow these fundamental rules to maintain your digital safety and privacy.
              </p>
            </CardContent>
          </Card>

          <Card className="border-primary/20">
            <CardHeader>
              <CardTitle className="text-2xl flex items-center gap-2">
                <Lock className="h-6 w-6" />
                Password Security
              </CardTitle>
              <CardDescription>Creating and managing strong passwords</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4 text-base leading-relaxed">
              <div>
                <h3 className="font-bold text-lg mb-2">Password Best Practices:</h3>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li><strong>Use Strong Passwords:</strong> Minimum 12 characters with uppercase, lowercase, numbers, and special characters</li>
                  <li><strong>Unique Passwords:</strong> Never reuse passwords across different accounts</li>
                  <li><strong>Password Manager:</strong> Use reputable password managers to store credentials securely</li>
                  <li><strong>Two-Factor Authentication (2FA):</strong> Enable 2FA on all accounts that support it</li>
                  <li><strong>Regular Updates:</strong> Change passwords every 3-6 months, especially for critical accounts</li>
                  <li><strong>Avoid Personal Information:</strong> Don't use birthdays, names, or common words</li>
                  <li><strong>Passphrases:</strong> Consider using long, memorable passphrases like "Coffee@Morning#2025!"</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          <Card className="border-primary/20">
            <CardHeader>
              <CardTitle className="text-2xl flex items-center gap-2">
                <Mail className="h-6 w-6" />
                Email and Phishing Protection
              </CardTitle>
              <CardDescription>Identifying and avoiding email scams</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4 text-base leading-relaxed">
              <div>
                <h3 className="font-bold text-lg mb-2">Protect Yourself from Phishing:</h3>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li><strong>Verify Sender:</strong> Check email addresses carefully - scammers often use similar-looking domains</li>
                  <li><strong>Suspicious Links:</strong> Hover over links to see actual URL before clicking</li>
                  <li><strong>Urgent Messages:</strong> Be skeptical of emails creating urgency (account suspension, security alerts)</li>
                  <li><strong>Unexpected Attachments:</strong> Don't open attachments from unknown senders</li>
                  <li><strong>Generic Greetings:</strong> Legitimate companies use your name, not "Dear Customer"</li>
                  <li><strong>Spelling Errors:</strong> Professional organizations don't send emails with poor grammar</li>
                  <li><strong>Too Good to Be True:</strong> Lottery wins, inheritance from unknown relatives are scams</li>
                  <li><strong>Direct Contact:</strong> When in doubt, contact the organization directly through official channels</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          <Card className="border-primary/20">
            <CardHeader>
              <CardTitle className="text-2xl flex items-center gap-2">
                <Smartphone className="h-6 w-6" />
                Mobile Device Security
              </CardTitle>
              <CardDescription>Protecting your smartphones and tablets</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4 text-base leading-relaxed">
              <div>
                <h3 className="font-bold text-lg mb-2">Mobile Security Guidelines:</h3>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li><strong>Lock Screen:</strong> Always use PIN, password, pattern, or biometric lock</li>
                  <li><strong>Official App Stores:</strong> Download apps only from Google Play Store or Apple App Store</li>
                  <li><strong>App Permissions:</strong> Review and limit app permissions - deny unnecessary access</li>
                  <li><strong>Regular Updates:</strong> Keep OS and apps updated with latest security patches</li>
                  <li><strong>Public Wi-Fi:</strong> Avoid sensitive transactions on public networks; use VPN if necessary</li>
                  <li><strong>Remote Wipe:</strong> Enable "Find My Device" feature for remote lock/wipe capability</li>
                  <li><strong>Bluetooth:</strong> Turn off Bluetooth when not in use</li>
                  <li><strong>Backup Data:</strong> Regularly backup important data to cloud or computer</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          <Card className="border-primary/20">
            <CardHeader>
              <CardTitle className="text-2xl flex items-center gap-2">
                <Eye className="h-6 w-6" />
                Social Media Safety
              </CardTitle>
              <CardDescription>Protecting your privacy on social platforms</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4 text-base leading-relaxed">
              <div>
                <h3 className="font-bold text-lg mb-2">Social Media Best Practices:</h3>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li><strong>Privacy Settings:</strong> Review and adjust privacy settings regularly</li>
                  <li><strong>Personal Information:</strong> Don't share phone numbers, addresses, or financial details</li>
                  <li><strong>Location Services:</strong> Disable location tagging or use it selectively</li>
                  <li><strong>Friend Requests:</strong> Only accept requests from people you know personally</li>
                  <li><strong>Think Before Posting:</strong> Information shared online is permanent</li>
                  <li><strong>Stranger Danger:</strong> Be cautious about interacting with unknown profiles</li>
                  <li><strong>Report Abuse:</strong> Report and block suspicious accounts or cyberbullying</li>
                  <li><strong>Digital Footprint:</strong> Remember that posts can affect future opportunities (jobs, education)</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          <Card className="border-primary/20">
            <CardHeader>
              <CardTitle className="text-2xl flex items-center gap-2">
                <AlertTriangle className="h-6 w-6" />
                Common Cyber Threats
              </CardTitle>
              <CardDescription>Recognizing and avoiding digital dangers</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4 text-base leading-relaxed">
              <div>
                <h3 className="font-bold text-lg mb-2">Types of Cyber Threats:</h3>
                <div className="space-y-4">
                  <div className="border-l-4 border-destructive pl-4">
                    <h4 className="font-bold mb-1">Malware</h4>
                    <p>Malicious software including viruses, trojans, ransomware. Install reputable antivirus software and keep it updated.</p>
                  </div>
                  <div className="border-l-4 border-destructive pl-4">
                    <h4 className="font-bold mb-1">Phishing</h4>
                    <p>Fraudulent attempts to obtain sensitive information by disguising as trustworthy entity. Verify sources before sharing information.</p>
                  </div>
                  <div className="border-l-4 border-destructive pl-4">
                    <h4 className="font-bold mb-1">Identity Theft</h4>
                    <p>Unauthorized use of personal information. Monitor financial statements and credit reports regularly.</p>
                  </div>
                  <div className="border-l-4 border-destructive pl-4">
                    <h4 className="font-bold mb-1">Cyberbullying</h4>
                    <p>Online harassment or intimidation. Document evidence, block perpetrators, and report to authorities.</p>
                  </div>
                  <div className="border-l-4 border-destructive pl-4">
                    <h4 className="font-bold mb-1">Online Scams</h4>
                    <p>Fraudulent schemes to extract money or information. Be skeptical of unsolicited offers and requests.</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-primary/20">
            <CardHeader>
              <CardTitle className="text-2xl">Online Shopping Safety</CardTitle>
              <CardDescription>Secure practices for e-commerce</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4 text-base leading-relaxed">
              <div>
                <h3 className="font-bold text-lg mb-2">Safe Online Shopping:</h3>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li><strong>HTTPS:</strong> Ensure website uses HTTPS (lock icon in address bar)</li>
                  <li><strong>Reputable Websites:</strong> Shop from well-known, trusted e-commerce platforms</li>
                  <li><strong>Secure Payment:</strong> Use credit cards or secure payment gateways, avoid debit cards</li>
                  <li><strong>Save Records:</strong> Keep screenshots of orders, confirmation emails</li>
                  <li><strong>Public Computers:</strong> Never shop or access banking on public/shared computers</li>
                  <li><strong>Too Cheap Offers:</strong> Extremely low prices often indicate counterfeit or scam</li>
                  <li><strong>Check Reviews:</strong> Read customer reviews and seller ratings</li>
                  <li><strong>Virtual Cards:</strong> Consider using virtual credit cards for online purchases</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          <Card className="border-primary/20">
            <CardHeader>
              <CardTitle className="text-2xl">Children's Online Safety</CardTitle>
              <CardDescription>Protecting young internet users</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4 text-base leading-relaxed">
              <div>
                <h3 className="font-bold text-lg mb-2">Parental Guidelines:</h3>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li><strong>Open Communication:</strong> Discuss internet safety and risks with children</li>
                  <li><strong>Supervision:</strong> Monitor children's online activities and screen time</li>
                  <li><strong>Parental Controls:</strong> Use age-appropriate content filters and restrictions</li>
                  <li><strong>Privacy Education:</strong> Teach not to share personal information online</li>
                  <li><strong>Stranger Danger:</strong> Explain risks of interacting with unknown people online</li>
                  <li><strong>Report Mechanism:</strong> Ensure children know how to report inappropriate content</li>
                  <li><strong>Digital Citizenship:</strong> Teach responsible and ethical online behavior</li>
                  <li><strong>Lead by Example:</strong> Practice safe internet habits yourself</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          <Card className="border-primary/20 bg-accent/10">
            <CardHeader>
              <CardTitle className="text-2xl">Cyber Crime Reporting in India</CardTitle>
              <CardDescription>How and where to report cyber crimes</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4 text-base leading-relaxed">
              <div className="bg-background p-4 rounded-lg space-y-3">
                <div>
                  <h3 className="font-bold text-lg mb-2">National Cyber Crime Reporting Portal:</h3>
                  <p className="text-xl font-bold text-primary">www.cybercrime.gov.in</p>
                  <p className="text-sm text-muted-foreground">24x7 online portal for reporting cyber crimes</p>
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2">Cyber Crime Helpline:</h3>
                  <p className="text-xl font-bold text-primary">1930</p>
                  <p className="text-sm text-muted-foreground">National helpline for cyber crime reporting</p>
                </div>
              </div>
              <div>
                <h3 className="font-bold text-lg mb-2">Types of Complaints You Can File:</h3>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Online financial fraud</li>
                  <li>Social media related crimes</li>
                  <li>Cyber bullying and stalking</li>
                  <li>Child pornography and child sexual abuse material</li>
                  <li>Ransomware attacks</li>
                  <li>Hacking and data breach</li>
                  <li>Online job fraud</li>
                  <li>Cryptocurrency fraud</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          <Card className="border-primary/20">
            <CardHeader>
              <CardTitle className="text-2xl">Digital Hygiene Checklist</CardTitle>
              <CardDescription>Regular maintenance for cyber safety</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4 text-base leading-relaxed">
              <div>
                <h3 className="font-bold text-lg mb-2">Weekly:</h3>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Check for software and app updates</li>
                  <li>Review recent account activity</li>
                  <li>Clear browser cache and cookies</li>
                </ul>
              </div>
              <div>
                <h3 className="font-bold text-lg mb-2">Monthly:</h3>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Review privacy settings on social media</li>
                  <li>Check credit card and bank statements</li>
                  <li>Update important passwords</li>
                  <li>Backup important data</li>
                </ul>
              </div>
              <div>
                <h3 className="font-bold text-lg mb-2">Quarterly:</h3>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Review and revoke unused app permissions</li>
                  <li>Delete unused accounts and apps</li>
                  <li>Check credit report for suspicious activity</li>
                  <li>Update emergency contacts and recovery options</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default CyberSafety;
