import { Link, useNavigate } from "react-router-dom";
import logo from "@/assets/balance-logo.png";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import LanguageSwitcher from "@/components/LanguageSwitcher";

const Header = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();
  const { t } = useLanguage();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchQuery.trim())}`);
      setSearchQuery("");
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-20 items-center justify-between gap-4 px-4 md:px-8">
        <Link to="/" className="flex items-center gap-3 transition-transform hover:scale-105 flex-shrink-0">
          <img src={logo} alt="Balance Scale Logo" className="h-12 w-12" />
          <h1 className="text-xl font-bold bg-gradient-primary bg-clip-text text-transparent md:text-2xl lg:text-3xl">
            {t('site.title')}
          </h1>
        </Link>
        
        <div className="flex items-center gap-4 flex-1 max-w-xl justify-end">
          <form onSubmit={handleSearch} className="relative flex-1 max-w-md">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder={t('search.placeholder')}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 bg-background/50"
            />
          </form>
          <LanguageSwitcher />
        </div>
      </div>
    </header>
  );
};

export default Header;
