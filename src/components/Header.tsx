import { useState, useEffect } from "react";
import { Menu } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";

interface HeaderProps {
  onSearch?: (query: string) => void;
}

const Header = ({ onSearch }: HeaderProps) => {
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { path: "/", label: "Home" },
    { path: "/blog", label: "Blog" },
    { path: "/projects", label: "Projects" },
    { path: "/gallery", label: "Gallery" },
    { path: "/about", label: "About" },
    { path: "/contact", label: "Contact" },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-header-bg/80 backdrop-blur-md border-b border-accent/30 shadow-lg' 
        : 'bg-header-bg border-b-4 border-accent'
    }`}>
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-between py-2">
          <Link to="/" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-header-text rounded-sm flex items-center justify-center">
              <span className="text-header-bg font-bold text-sm">EE</span>
            </div>
            <span className="text-header-text font-bold text-lg">Electronics Engineering</span>
          </Link>

          <Button variant="ghost" size="icon" className="md:hidden text-header-text">
            <Menu className="w-6 h-6" />
          </Button>
        </div>

        <nav className="border-t border-header-text/20 py-0">
          <ul className="flex gap-0">
            {navItems.map((item) => (
              <li key={item.path}>
                <Link
                  to={item.path}
                  className={`block px-4 py-3 text-sm font-medium border-b-4 transition-colors ${
                    location.pathname === item.path
                      ? "text-header-text border-accent bg-header-text/10"
                      : "text-header-text/80 border-transparent hover:text-header-text hover:border-header-text/30"
                  }`}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;