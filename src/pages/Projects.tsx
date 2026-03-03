import { ExternalLink, Github } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import AnimatedSection from "@/components/AnimatedSection";
import SectionHeading from "@/components/SectionHeading";
import { PROFILE_DATA } from "@/data/profile";
import projectImg1 from "@/assets/project-1.png";
import projectImg3 from "@/assets/project3.png";
import projectImg2 from "@/assets/project-2.png";


const projectImages: Record<string, string> = {
  "project-1": projectImg1,
  "project3": projectImg3,
  "project-2": projectImg2,

};

const Projects = () => (
  <div className="py-20">
    <div className="container">
      <SectionHeading title="Projects" subtitle="A selection of my recent work" />
      <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
        {PROFILE_DATA.projects.map((project, i) => (
          <AnimatedSection key={i} delay={i * 0.1}>
            <Card className="card-hover h-full overflow-hidden group">
              {/* Image */}
              <div className="aspect-video bg-muted overflow-hidden">
                {project.image && projectImages[project.image] ? (
                  <img
                    src={projectImages[project.image]}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-muted-foreground text-sm">
                    Project Preview
                  </div>
                )}
              </div>
              <CardContent className="p-6 space-y-3">
                <h3 className="font-display font-semibold text-lg">{project.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <Badge key={tech} variant="secondary" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>
                <div className="flex gap-2 pt-2">
                  <Button asChild size="sm" variant="default" className="gap-1.5">
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="h-3.5 w-3.5" /> Live Demo
                    </a>
                  </Button>
                  <Button asChild size="sm" variant="outline" className="gap-1.5">
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                      <Github className="h-3.5 w-3.5" /> Code
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </AnimatedSection>
        ))}
      </div>
    </div>
  </div>
);

export default Projects;
