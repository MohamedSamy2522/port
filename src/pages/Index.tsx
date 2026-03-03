import { Link } from "react-router-dom";
import { Download, ArrowRight, Github, Linkedin, Instagram, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import AnimatedSection from "@/components/AnimatedSection";
import { PROFILE_DATA } from "@/data/profile";
import profilePhoto from "@/assets/profile-photo.png";

const socialIcons: Record<string, React.ElementType> = {
  GitHub: Github,
  LinkedIn: Linkedin,
  Instagram: Instagram,
};

const Index = () => {
  return (
    <>
      {/* SEO */}
      <title>{PROFILE_DATA.name} — {PROFILE_DATA.headline}</title>

      <section className="hero-bg min-h-[calc(100vh-4rem)] flex items-center relative overflow-hidden">
        {/* Ambient glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-primary/5 blur-3xl pointer-events-none" />

        <div className="container relative z-10 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Text */}
            <AnimatedSection className="text-center lg:text-left space-y-6">
              <Badge variant="secondary" className="inline-flex items-center gap-2 px-4 py-1.5 bg-primary/10 text-primary border-primary/20">
                <Sparkles className="h-3.5 w-3.5" />
                {PROFILE_DATA.availabilityBadge}
              </Badge>

              <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight">
                Hey, I'm{" "}
                <span className="text-gradient">{PROFILE_DATA.name.split(" ")[0]}</span>
              </h1>

              <p className="text-lg text-primary-foreground/70 font-medium">
                {PROFILE_DATA.headline}
              </p>

              <p className="text-primary-foreground/60 max-w-lg mx-auto lg:mx-0 leading-relaxed">
                {PROFILE_DATA.bio}
              </p>

              <div className="flex flex-wrap justify-center lg:justify-start gap-3">
                <Button asChild size="lg" className="gap-2">
                  <a href={PROFILE_DATA.cvUrl} download>
                    <Download className="h-4 w-4" /> Download CV
                  </a>
                </Button>
                <Button asChild variant="outline" size="lg" className="bg-[#3c83f6] gap-2 border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10">
                  <Link to="/contact">
                    Contact Me <ArrowRight className=" h-4 w-4" />
                  </Link>
                </Button>
              </div>

              {/* Social Icons */}
              <div className="flex justify-center lg:justify-start gap-3 pt-2">
                {PROFILE_DATA.socials.map((s) => {
                  const Icon = socialIcons[s.label];
                  return (
                    <a
                      key={s.label}
                      href={s.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-lg bg-primary-foreground/10 text-primary-foreground/70 hover:text-primary hover:bg-primary-foreground/20 transition-colors"
                      aria-label={s.label}
                    >
                      {Icon ? <Icon className="h-5 w-5" /> : <span className="text-sm">{s.label}</span>}
                    </a>
                  );
                })}
              </div>

              {/* Quick links */}
              <div className="flex flex-wrap justify-center lg:justify-start gap-4 pt-2 text-sm">
                {[
                  { label: "Skills", path: "/skills" },
                  { label: "Projects", path: "/projects" },
                  { label: "About", path: "/about" },
                ].map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    className="px-5 py-3 rounded-xl border border-dashed border-primary-foreground/20 text-primary-foreground/70 hover:border-primary hover:text-primary transition-colors font-medium"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </AnimatedSection>

            {/* Photo */}
            <AnimatedSection delay={0.2} className="flex justify-center">
              <div className="relative">
                <div className="absolute -inset-4 rounded-full bg-gradient-to-tr from-primary/30 to-accent/30 blur-2xl" />
                <img
                  src={profilePhoto}
                  alt={`${PROFILE_DATA.name} profile photo`}
                  className="relative w-72 h-72 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-3xl object-cover object-top shadow-2xl border-2 border-primary-foreground/10"
                />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </>
  );
};

export default Index;
