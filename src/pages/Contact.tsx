import { useState, FormEvent } from "react";
import { Mail, Phone, MapPin, Send, Github, Linkedin, Instagram } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import AnimatedSection from "@/components/AnimatedSection";
import SectionHeading from "@/components/SectionHeading";
import { PROFILE_DATA } from "@/data/profile";

const contactMethods = [
  { icon: Mail, label: "Email", value: PROFILE_DATA.email, href: `mailto:${PROFILE_DATA.email}` },
  { icon: Phone, label: "Phone", value: PROFILE_DATA.phone, href: `tel:${PROFILE_DATA.phone}` },
  { icon: MapPin, label: "Location", value: PROFILE_DATA.location, href: "#" },
];

const socialIcons: Record<string, React.ElementType> = {
  GitHub: Github,
  LinkedIn: Linkedin,
  Instagram: Instagram,
};

const Contact = () => {
  const { toast } = useToast();
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Message from ${form.name}`);
    const body = encodeURIComponent(`From: ${form.name} (${form.email})\n\n${form.message}`);
    window.open(`mailto:${PROFILE_DATA.email}?subject=${subject}&body=${body}`);
    toast({ title: "Opening email client...", description: "Your message is ready to send!" });
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <div className="py-20">
      <div className="container">
        <SectionHeading title="Get In Touch" subtitle="Let's work together on something great" />

        <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Contact Methods */}
          <div className="space-y-6">
            {contactMethods.map((method, i) => (
              <AnimatedSection key={i} delay={i * 0.1}>
                <a href={method.href} className="block">
                  <Card className="card-hover">
                    <CardContent className="p-6 flex items-center gap-4">
                      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                        <method.icon className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <p className="text-xs text-muted-foreground uppercase tracking-wider">{method.label}</p>
                        <p className="font-medium">{method.value}</p>
                      </div>
                    </CardContent>
                  </Card>
                </a>
              </AnimatedSection>
            ))}

            {/* Socials */}
            <AnimatedSection delay={0.3}>
              <div className="flex gap-3">
                {PROFILE_DATA.socials.map((s) => {
                  const Icon = socialIcons[s.label];
                  return (
                    <a
                      key={s.label}
                      href={s.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 rounded-xl bg-card border border-border text-muted-foreground hover:text-primary hover:border-primary transition-colors"
                      aria-label={s.label}
                    >
                      {Icon ? <Icon className="h-5 w-5" /> : <span>{s.label}</span>}
                    </a>
                  );
                })}
              </div>
            </AnimatedSection>
          </div>

          {/* Form */}
          <AnimatedSection delay={0.2}>
            <Card>
              <CardContent className="p-6">
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="name" className="text-sm font-medium mb-1.5 block">Name</label>
                    <Input
                      id="name"
                      required
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="text-sm font-medium mb-1.5 block">Email</label>
                    <Input
                      id="email"
                      type="email"
                      required
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      placeholder="your@email.com"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="text-sm font-medium mb-1.5 block">Message</label>
                    <Textarea
                      id="message"
                      required
                      rows={5}
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      placeholder="Tell me about your project..."
                    />
                  </div>
                  <Button type="submit" className="w-full gap-2">
                    <Send className="h-4 w-4" /> Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </AnimatedSection>
        </div>
      </div>
    </div>
  );
};

export default Contact;
