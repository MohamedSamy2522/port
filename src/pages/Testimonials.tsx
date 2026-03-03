import { Star, Quote } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import AnimatedSection from "@/components/AnimatedSection";
import SectionHeading from "@/components/SectionHeading";
import { PROFILE_DATA } from "@/data/profile";

const Testimonials = () => {
  if (!PROFILE_DATA.testimonials.length) return null;

  return (
    <section className="py-20 bg-muted/50">
      <div className="container">
        <SectionHeading title="Testimonials" subtitle="What people say about my work" />
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {PROFILE_DATA.testimonials.map((t, i) => (
            <AnimatedSection key={i} delay={i * 0.1}>
              <Card className="card-hover h-full">
                <CardContent className="p-6 space-y-4">
                  <Quote className="h-8 w-8 text-primary/30" />
                  <p className="text-sm text-muted-foreground leading-relaxed italic">"{t.content}"</p>
                  <div className="flex gap-0.5">
                    {Array.from({ length: t.rating }).map((_, j) => (
                      <Star key={j} className="h-4 w-4 fill-primary text-primary" />
                    ))}
                  </div>
                  <div>
                    <p className="font-semibold text-sm">{t.name}</p>
                    <p className="text-xs text-muted-foreground">{t.role}</p>
                  </div>
                </CardContent>
              </Card>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
