import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import ThemeToggle from "./ThemeToggle";
import { PROFILE_DATA } from "@/data/profile";

const navItems = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "Skills", path: "/skills" },
  { label: "Projects", path: "/projects" },
  { label: "Contact", path: "/contact" },
];

const Navigation = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
      <nav className="container flex items-center justify-between h-16">
        <Link to="/" className="font-display text-xl font-bold text-gradient">
          {PROFILE_DATA.brandName}
        </Link>

        {/* Desktop */}
        <ul className="hidden md:flex items-center gap-1">
          {navItems.map((item) => (
            <li key={item.path}>
              <Link
                to={item.path}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  location.pathname === item.path
                    ? "text-primary bg-primary/10"
                    : "text-muted-foreground hover:text-foreground hover:bg-muted"
                }`}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="hidden md:flex items-center gap-2">
          <ThemeToggle />
          <Button asChild size="sm">
            <Link to="/contact">Let's Talk</Link>
          </Button>
        </div>

        {/* Mobile toggle */}
        <div className="flex md:hidden items-center gap-2">
          <ThemeToggle />
          <Button variant="ghost" size="icon" onClick={() => setOpen(!open)} aria-label="Toggle menu">
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-background border-b border-border">
          <ul className="container py-4 space-y-1">
            {navItems.map((item) => (
              <li key={item.path}>
                <Link
                  to={item.path}
                  onClick={() => setOpen(false)}
                  className={`block px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                    location.pathname === item.path
                      ? "text-primary bg-primary/10"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {item.label}
                </Link>
              </li>
            ))}
            <li className="pt-2">
              <Button asChild size="sm" className="w-full">
                <Link to="/contact" onClick={() => setOpen(false)}>Let's Talk</Link>
              </Button>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Navigation;
