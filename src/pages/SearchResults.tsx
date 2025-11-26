import { useSearchParams, Link } from "react-router-dom";
import Header from "@/components/Header";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ChevronRight, Search } from "lucide-react";
import { useEffect, useState } from "react";

interface SearchResult {
  title: string;
  category: string;
  excerpt: string;
  link: string;
}

const SearchResults = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get("q") || "";
  const [results, setResults] = useState<SearchResult[]>([]);

  useEffect(() => {
    if (query) {
      // Search across all content
      const allContent: SearchResult[] = [
        {
          title: "Legal Rights",
          category: "Rights",
          excerpt: "Right to Equality, Right to Freedom, Right against Exploitation, Right to Freedom of Religion, Cultural and Educational Rights, Right to Constitutional Remedies",
          link: "/legal-rights"
        },
        {
          title: "Constitutional Rights",
          category: "Rights",
          excerpt: "Article 14: Equality before law, Article 19: Freedom of Speech and Expression, Article 21: Right to Life and Personal Liberty",
          link: "/constitutional-rights"
        },
        {
          title: "Women Protection Laws",
          category: "Rights",
          excerpt: "Domestic Violence Act 2005, Sexual Harassment at Workplace Act 2013, Dowry Prohibition Act 1961, Immoral Traffic Prevention Act",
          link: "/women-protection-laws"
        },
        {
          title: "Consumer Rights",
          category: "Rights",
          excerpt: "Right to Safety, Right to Information, Right to Choose, Right to be Heard, Right to Redressal, Right to Consumer Education",
          link: "/consumer-rights"
        },
        {
          title: "Cyber Safety",
          category: "Safety",
          excerpt: "Password security, Two-factor authentication, Phishing awareness, Social media privacy, Online transaction security",
          link: "/cyber-safety"
        }
      ];

      const searchQuery = query.toLowerCase();
      const filtered = allContent.filter(
        item =>
          item.title.toLowerCase().includes(searchQuery) ||
          item.excerpt.toLowerCase().includes(searchQuery) ||
          item.category.toLowerCase().includes(searchQuery)
      );
      setResults(filtered);
    }
  }, [query]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-primary/5 to-background">
      <Header />
      
      <main className="container px-4 py-12 md:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <div className="flex items-center gap-2 mb-4">
              <Search className="h-6 w-6 text-primary" />
              <h1 className="text-3xl font-bold">Search Results</h1>
            </div>
            <p className="text-muted-foreground">
              {results.length} result{results.length !== 1 ? 's' : ''} found for "{query}"
            </p>
          </div>

          {results.length === 0 ? (
            <Card>
              <CardContent className="py-12 text-center">
                <p className="text-muted-foreground">No results found. Try searching for different keywords.</p>
              </CardContent>
            </Card>
          ) : (
            <div className="space-y-4">
              {results.map((result, index) => (
                <Link key={index} to={result.link}>
                  <Card className="transition-all duration-300 hover:shadow-xl hover:scale-[1.02] border-primary/20 hover:border-primary">
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-2">
                            <span className="text-xs font-semibold text-primary uppercase">{result.category}</span>
                          </div>
                          <CardTitle className="flex items-center justify-between">
                            {result.title}
                            <ChevronRight className="h-5 w-5 text-primary" />
                          </CardTitle>
                          <CardDescription className="mt-2">{result.excerpt}</CardDescription>
                        </div>
                      </div>
                    </CardHeader>
                  </Card>
                </Link>
              ))}
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default SearchResults;
