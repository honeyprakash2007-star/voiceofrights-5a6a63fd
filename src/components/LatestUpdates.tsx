import { useLanguage } from "@/contexts/LanguageContext";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Newspaper, Calendar, ArrowRight } from "lucide-react";

const LatestUpdates = () => {
  const { t } = useLanguage();

  const updates = [
    {
      title: t('updates.1.title'),
      desc: t('updates.1.desc'),
      date: t('updates.1.date'),
      category: 'Data Protection',
      categoryColor: 'bg-blue-500/20 text-blue-400 border-blue-500/30'
    },
    {
      title: t('updates.2.title'),
      desc: t('updates.2.desc'),
      date: t('updates.2.date'),
      category: 'Supreme Court',
      categoryColor: 'bg-purple-500/20 text-purple-400 border-purple-500/30'
    },
    {
      title: t('updates.3.title'),
      desc: t('updates.3.desc'),
      date: t('updates.3.date'),
      category: 'Consumer Rights',
      categoryColor: 'bg-green-500/20 text-green-400 border-green-500/30'
    },
    {
      title: t('updates.4.title'),
      desc: t('updates.4.desc'),
      date: t('updates.4.date'),
      category: 'Women Safety',
      categoryColor: 'bg-pink-500/20 text-pink-400 border-pink-500/30'
    }
  ];

  return (
    <section className="py-12">
      <div className="flex items-center gap-3 mb-8">
        <div className="p-2 bg-primary/20 rounded-lg">
          <Newspaper className="w-6 h-6 text-primary" />
        </div>
        <div>
          <h2 className="text-2xl font-bold text-foreground">{t('updates.title')}</h2>
          <p className="text-muted-foreground text-sm">{t('updates.subtitle')}</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {updates.map((update, index) => (
          <Card 
            key={index} 
            className="group bg-card/50 border-border/50 hover:bg-card/80 hover:border-primary/30 transition-all duration-300 cursor-pointer"
          >
            <CardHeader className="pb-2">
              <div className="flex items-start justify-between gap-2">
                <Badge variant="outline" className={`text-xs ${update.categoryColor}`}>
                  {update.category}
                </Badge>
                <div className="flex items-center gap-1 text-muted-foreground text-xs">
                  <Calendar className="w-3 h-3" />
                  {update.date}
                </div>
              </div>
              <CardTitle className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors leading-tight mt-2">
                {update.title}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground text-sm leading-relaxed mb-3">
                {update.desc}
              </p>
              <div className="flex items-center gap-1 text-primary text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                {t('updates.readMore')}
                <ArrowRight className="w-4 h-4" />
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default LatestUpdates;
