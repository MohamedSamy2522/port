import { MapPin, GraduationCap, Briefcase, Award, Users, Target } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import AnimatedSection from "@/components/AnimatedSection";
import SectionHeading from "@/components/SectionHeading";
import { PROFILE_DATA } from "@/data/profile";

const { about } = PROFILE_DATA;

const About = () => (
  <div className="py-20">
    <div className="container space-y-20">
      {/* Objective */}
      <section>
        <SectionHeading title="About Me" subtitle={about.tagline} />
        <AnimatedSection>
          <Card className="max-w-3xl mx-auto card-hover">
            <CardContent className="p-8 flex gap-4 items-start">
              <Target className="h-6 w-6 text-primary shrink-0 mt-1" />
              <div>
                <h3 className="font-display font-semibold text-lg mb-2">Career Objective</h3>
                <p className="text-muted-foreground leading-relaxed">{about.objective}</p>
              </div>
            </CardContent>
          </Card>
        </AnimatedSection>
      </section>

      {/* Personal Info */}
      <section>
        <AnimatedSection className="grid sm:grid-cols-3 gap-4 max-w-3xl mx-auto">
          {about.personalInfo.map((info, i) => (
            <Card key={i} className="card-hover">
              <CardContent className="p-6 text-center">
                <MapPin className="h-5 w-5 text-primary mx-auto mb-2" />
                <p className="text-xs text-muted-foreground uppercase tracking-wider">{info.label}</p>
                <p className="font-semibold mt-1">{info.value}</p>
              </CardContent>
            </Card>
          ))}
        </AnimatedSection>
      </section>

      {/* Education */}
      <section>
        <SectionHeading title="Education" />
        <div className="max-w-3xl mx-auto space-y-4">
          {about.education.map((edu, i) => (
            <AnimatedSection key={i} delay={i * 0.1}>
              <Card className="card-hover">
                <CardContent className="p-6 flex gap-4 items-start">
                  <GraduationCap className="h-6 w-6 text-primary shrink-0 mt-1" />
                  <div>
                    <h4 className="font-display font-semibold">{edu.title}</h4>
                    <p className="text-sm text-muted-foreground">{edu.place} • {edu.period}</p>
                    <p className="text-sm text-muted-foreground mt-1">{edu.details}</p>
                  </div>
                </CardContent>
              </Card>
            </AnimatedSection>
          ))}
        </div>
      </section>

      {/* Affiliations
      <section>
        <SectionHeading title="Affiliations" />
        <div className="max-w-3xl mx-auto space-y-4">
          {about.affiliations.map((a, i) => (
            <AnimatedSection key={i} delay={i * 0.1}>
              <Card className="card-hover">
                <CardContent className="p-6 flex gap-4 items-start">
                  <Users className="h-6 w-6 text-primary shrink-0 mt-1" />
                  <div>
                    <h4 className="font-display font-semibold">{a.title}</h4>
                    <p className="text-sm text-muted-foreground">{a.place}</p>
                    <p className="text-sm text-muted-foreground mt-1">{a.details}</p>
                  </div>
                </CardContent>
              </Card>
            </AnimatedSection>
          ))}
        </div>
      </section> */}

      {/* Experience */}
      <section>
        <SectionHeading title="Experience" />
        <div className="max-w-3xl mx-auto space-y-4">
          {about.experience.map((exp, i) => (
            <AnimatedSection key={i} delay={i * 0.1}>
              <Card className="card-hover">
                <CardContent className="p-6 flex gap-4 items-start">
                  <Briefcase className="h-6 w-6 text-primary shrink-0 mt-1" />
                  <div>
                    <h4 className="font-display font-semibold">{exp.title}</h4>
                    <p className="text-sm text-muted-foreground">{exp.place} • {exp.period}</p>
                    <p className="text-sm text-muted-foreground mt-2 whitespace-pre-line">{exp.details}</p>
                  </div>
                </CardContent>
              </Card>
            </AnimatedSection>
          ))}
        </div>
      </section>

      {/* Certifications */}
      <section>
        <SectionHeading title="Certifications" />
        <div className="max-w-3xl mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {about.certifications.map((cert, i) => (
            <AnimatedSection key={i} delay={i * 0.1}>
              <Card className="card-hover h-full">
                <CardContent className="p-6 text-center">
                  <Award className="h-8 w-8 text-primary mx-auto mb-3" />
                  <h4 className="font-semibold text-sm">{cert.title}</h4>
                  <p className="text-xs text-muted-foreground mt-1">{cert.issuer} • {cert.year}</p>
                </CardContent>
              </Card>
            </AnimatedSection>
          ))}
        </div>
      </section>
    </div>
  </div>
);

export default About;
