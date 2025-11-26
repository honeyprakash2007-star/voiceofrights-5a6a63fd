import Header from "@/components/Header";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

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

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-primary/5 to-background">
      <Header />
      
      <main className="container px-4 py-12 md:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
              Self Defense Videos
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Learn practical self-defense techniques and safety awareness from expert instructors
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            {videos.map((video, index) => (
              <Card key={index} className="overflow-hidden border-primary/20 hover:border-primary transition-all duration-300">
                <CardHeader>
                  <CardTitle className="text-xl">{video.title}</CardTitle>
                  <CardDescription>{video.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="aspect-video rounded-lg overflow-hidden bg-muted">
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
                  <p className="text-sm text-muted-foreground mt-2">Duration: {video.duration}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card className="mt-12 border-primary/20">
            <CardHeader>
              <CardTitle>Important Safety Reminders</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Always prioritize escape over confrontation when possible</li>
                <li>• Practice these techniques with a qualified instructor before relying on them</li>
                <li>• Be aware of your surroundings at all times</li>
                <li>• Trust your instincts - if something feels wrong, remove yourself from the situation</li>
                <li>• Carry legal self-defense tools like pepper spray or personal alarms</li>
                <li>• Share your location with trusted contacts when traveling alone</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default SelfDefenseVideos;
