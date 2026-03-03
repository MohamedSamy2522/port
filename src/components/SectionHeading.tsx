import AnimatedSection from "./AnimatedSection";

interface Props {
  title: string;
  subtitle?: string;
}

const SectionHeading = ({ title, subtitle }: Props) => (
  <AnimatedSection className="text-center mb-12">
    <h2 className="font-display text-3xl md:text-4xl font-bold mb-3">{title}</h2>
    {subtitle && <p className="text-muted-foreground max-w-2xl mx-auto">{subtitle}</p>}
    <div className="mt-4 mx-auto w-20 h-1 rounded-full bg-gradient-to-r from-primary to-accent" />
  </AnimatedSection>
);

export default SectionHeading;
