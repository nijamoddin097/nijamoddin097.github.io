import { ArrowDown, Download, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  const skills = ["SQL", "Python", "Excel", "ML"];

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 animated-gradient"></div>
      
      {/* Hero image overlay */}
      <div 
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `url(${heroBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      ></div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-20 text-center">
        <div className="max-w-4xl mx-auto space-y-8 reveal">
          {/* Top skills badges */}
          <div className="flex flex-wrap gap-3 justify-center mb-6">
            {skills.map((skill) => (
              <Badge 
                key={skill}
                variant="secondary" 
                className="px-4 py-2 text-sm font-medium glass glow-cyan"
              >
                {skill}
              </Badge>
            ))}
          </div>

          {/* Main heading */}
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Nijamoddin Hakkam
            </span>
          </h1>
          
          <p className="text-2xl md:text-3xl font-semibold text-muted-foreground">
            Aspiring Data Analyst
          </p>

          {/* Tagline */}
          <p className="text-lg md:text-xl text-foreground/80 max-w-2xl mx-auto leading-relaxed">
            Turning data into clear decisions. Passionate about modern analytics & actionable insights.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-6">
            <Button 
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground glow-cyan transition-all duration-300 hover:scale-105"
              asChild
            >
              <a href="/Nijamoddin-Hakkam-Resume.pdf" target="_blank" rel="noopener noreferrer">
                <Download className="mr-2 h-5 w-5" />
                Download Resume
              </a>
            </Button>
            
            <Button 
              size="lg"
              variant="outline"
              className="glass border-primary/50 text-foreground hover:bg-primary/10 transition-all duration-300 hover:scale-105"
              onClick={scrollToContact}
            >
              <Mail className="mr-2 h-5 w-5" />
              Contact
            </Button>
          </div>

          {/* Scroll indicator */}
          <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
            <ArrowDown className="h-6 w-6 text-primary" />
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-20 h-20 rounded-full bg-primary/20 blur-3xl animate-pulse-glow"></div>
      <div className="absolute bottom-20 right-10 w-32 h-32 rounded-full bg-secondary/20 blur-3xl animate-pulse-glow"></div>
    </section>
  );
};

export default Hero;
