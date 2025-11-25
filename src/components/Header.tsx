import { Link } from "react-router-dom";
import logo from "@/assets/balance-logo.png";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-20 items-center justify-between px-4 md:px-8">
        <Link to="/" className="flex items-center gap-3 transition-transform hover:scale-105">
          <img src={logo} alt="Balance Scale Logo" className="h-12 w-12" />
          <h1 className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent md:text-3xl">
            VOICE OF RIGHTS
          </h1>
        </Link>
      </div>
    </header>
  );
};

export default Header;
