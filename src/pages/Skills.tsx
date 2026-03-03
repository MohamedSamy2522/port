import { Code2, Database, Laptop, Sparkles } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import AnimatedSection from "@/components/AnimatedSection";
import SectionHeading from "@/components/SectionHeading";
import { PROFILE_DATA } from "@/data/profile";

const iconMap: Record<string, React.ElementType> = {
  Code2,
  Database,
  Laptop,
  Sparkles,
};

const Skills = () => (
  <div className="py-20">
    <div className="container">
      <SectionHeading title="Skills & Expertise" subtitle="Technologies and tools I work with" />
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
        {PROFILE_DATA.skills.map((cat, i) => {
          const Icon = iconMap[cat.icon] || Code2;
          return (
            <AnimatedSection key={i} delay={i * 0.1}>
              <Card className="card-hover h-full group">
                <CardContent className="p-6 text-center">
                  <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                    <Icon className="h-7 w-7 text-primary" />
                  </div>
                  <h3 className="font-display font-semibold mb-4">{cat.title}</h3>
                  <div className="flex flex-wrap justify-center gap-2">
                    {cat.items.map((item) => (
                      <Badge key={item} variant="secondary" className="text-xs">
                        {item}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </AnimatedSection>
          );
        })}
      </div>
    </div>
  </div>
);

export default Skills;
