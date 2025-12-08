import Header from "@/components/Header";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, Shield, AlertTriangle, Play } from "lucide-react";
import { Link } from "react-router-dom";
import selfDefenseBg from "@/assets/self-defense-bg.png";

const SelfDefenseVideos = () => {
  const videos = [
    {
      title: "Basic Self Defense Techniques for Beginners",
      description: "Learn essential self-defense moves that anyone can master",
      videoId: "KVpxP3ZZtAc",
      duration: "10:15"
    },
    {
      title: "Women's Self Defense - Street Safety Tips",
      description: "Essential awareness and prevention strategies for staying safe",
      videoId: "0HvMeZlYTsc",
      duration: "9:25"
    },
    {
      title: "Self Defense Against Common Attacks",
      description: "Practical techniques to defend against grabs and holds",
      videoId: "T7aNSRoDCmg",
      duration: "12:30"
    },
    {
      title: "Escape Techniques for Women",
      description: "How to break free from common holds and grabs",
      videoId: "T2Kf7vA5S4s",
      duration: "11:48"
    }
  ];

  const safetyTips = [
    "Always prioritize escape over confrontation when possible",
    "Practice these techniques with a qualified instructor",
    "Be aware of your surroundings at all times",
    "Trust your instincts - if something feels wrong, leave",
    "Carry legal self-defense tools like pepper spray",
    "Share your location with trusted contacts when alone",
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden py-16 md:py-24">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-25"
          style={{ backgroundImage: `url(${selfDefenseBg})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-primary/20 via-background/80 to-background" />
        
        <div className="relative container px-4 md:px-8">
          <Link to="/" className="inline-flex items-center gap-2 text-primary hover:text-accent transition-colors mb-8 group">
            <ArrowLeft className="h-4 w-4 group-hover:-translate-x-1 transition-transform" />
            Back to Home
          </Link>
          
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center justify-center p-4 bg-primary/10 rounded-full mb-6 backdrop-blur-sm">
              <Shield className="h-12 w-12 text-primary" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-primary via-primary-light to-accent bg-clip-text text-transparent">
              Self Defense Videos
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              Learn practical self-defense techniques and safety awareness from expert instructors
            </p>
          </div>
        </div>
      </section>

      <main className="container px-4 pb-16 md:px-8">
        <div className="max-w-6xl mx-auto space-y-8">
          
          {/* Videos Grid */}
          <div className="grid gap-6 md:grid-cols-2">
            {videos.map((video, index) => (
              <Card 
                key={index} 
                className="overflow-hidden border-primary/20 hover:border-primary/40 transition-all duration-300 hover:shadow-elegant group"
              >
                <CardHeader className="bg-gradient-to-r from-primary/5 to-transparent pb-4">
                  <div className="flex items-start gap-3">
                    <div className="p-2 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                      <Play className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <CardTitle className="text-lg text-foreground group-hover:text-primary transition-colors">
                        {video.title}
                      </CardTitle>
                      <CardDescription className="mt-1">{video.description}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="aspect-video rounded-xl overflow-hidden bg-muted border border-border">
                    <iframe
                      width="100%"
                      height="100%"
                      src={`https://www.youtube.com/embed/${video.videoId}`}
                      title={video.title}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className="border-0"
                    />
                  </div>
                  <div className="flex items-center justify-between mt-3">
                    <span className="text-sm text-muted-foreground">Duration: {video.duration}</span>
                    <span className="px-3 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full">
                      Video Tutorial
                    </span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Safety Reminders */}
          <Card className="border-accent/30 bg-gradient-to-br from-accent/10 via-primary/5 to-transparent overflow-hidden">
            <CardHeader className="pb-4">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-accent/20 rounded-xl">
                  <AlertTriangle className="h-6 w-6 text-accent" />
                </div>
                <div>
                  <CardTitle className="text-xl md:text-2xl text-foreground">
                    Important Safety Reminders
                  </CardTitle>
                  <CardDescription className="text-base mt-1">Keep these tips in mind at all times</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {safetyTips.map((tip, idx) => (
                  <div 
                    key={idx} 
                    className="p-4 bg-card rounded-xl border border-border hover:border-accent/50 transition-colors flex items-start gap-3"
                  >
                    <span className="text-accent font-bold text-lg">{idx + 1}</span>
                    <p className="text-sm text-muted-foreground">{tip}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Emergency Numbers */}
          <Card className="border-primary/30 bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10 overflow-hidden">
            <CardContent className="py-8">
              <div className="text-center">
                <h3 className="text-xl font-bold text-foreground mb-4">Emergency Numbers</h3>
                <div className="flex flex-wrap justify-center gap-4">
                  <div className="p-4 bg-card rounded-xl border border-border">
                    <p className="text-3xl font-bold text-primary">112</p>
                    <p className="text-sm text-muted-foreground">Emergency</p>
                  </div>
                  <div className="p-4 bg-card rounded-xl border border-border">
                    <p className="text-3xl font-bold text-primary">100</p>
                    <p className="text-sm text-muted-foreground">Police</p>
                  </div>
                  <div className="p-4 bg-card rounded-xl border border-border">
                    <p className="text-3xl font-bold text-primary">181</p>
                    <p className="text-sm text-muted-foreground">Women Helpline</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

        </div>
      </main>
    </div>
  );
};

export default SelfDefenseVideos;
