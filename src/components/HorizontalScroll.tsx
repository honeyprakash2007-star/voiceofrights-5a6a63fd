import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

interface ScrollItem {
  title: string;
  description: string;
  link: string;
  bgImage?: string;
}

interface HorizontalScrollProps {
  title: string;
  items: ScrollItem[];
}

const HorizontalScroll = ({ title, items }: HorizontalScrollProps) => {
  const { t } = useLanguage();

  return (
    <section className="py-12">
      <h2 className="text-3xl font-bold mb-8 text-center bg-gradient-primary bg-clip-text text-transparent">
        {title}
      </h2>
      <div className="overflow-x-auto pb-4">
        <div className="flex gap-6 px-4" style={{ minWidth: "min-content" }}>
          {items.map((item, index) => (
            <Link key={index} to={item.link} className="flex-shrink-0 w-80 group">
              <Card className="h-full transition-all duration-300 hover:shadow-xl hover:scale-105 border-primary/20 hover:border-primary bg-gradient-to-br from-card to-card/80 overflow-hidden relative">
                {item.bgImage && (
                  <div 
                    className="absolute inset-0 opacity-30 group-hover:opacity-40 transition-opacity duration-300"
                    style={{
                      backgroundImage: `url(${item.bgImage})`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                    }}
                  />
                )}
                <div className="relative z-10">
                  <CardHeader>
                    <CardTitle className="flex items-center justify-between group-hover:text-primary transition-colors">
                      {item.title}
                      <ChevronRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                    </CardTitle>
                    <CardDescription>{item.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      {t('rights.clickMore')}
                    </p>
                  </CardContent>
                </div>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HorizontalScroll;
