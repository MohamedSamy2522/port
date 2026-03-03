import { Link } from "react-router-dom";
import { Github, Linkedin, Instagram } from "lucide-react";
import { PROFILE_DATA } from "@/data/profile";

const socialIcons: Record<string, React.ElementType> = {
  GitHub: Github,
  LinkedIn: Linkedin,
  Instagram: Instagram,
};

const Footer = () => (
  <footer className="border-t border-border bg-card">
    <div className="container py-8 flex flex-col md:flex-row items-center justify-between gap-4">
      <p className="text-sm text-muted-foreground">
        © {new Date().getFullYear()} {PROFILE_DATA.name}. All rights reserved.
      </p>
      <div className="flex items-center gap-3">
        {PROFILE_DATA.socials.map((s) => {
          const Icon = socialIcons[s.label];
          return (
            <a
              key={s.label}
              href={s.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label={s.label}
            >
              {Icon ? <Icon className="h-5 w-5" /> : <span>{s.label}</span>}
            </a>
          );
        })}
      </div>
    </div>
  </footer>
);

export default Footer;
