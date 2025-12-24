import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";

const CTASection = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-neon-cyan/10 via-background to-neon-purple/10" />
      <div className="absolute inset-0 grid-pattern opacity-20" />
      
      {/* Floating elements */}
      <div className="absolute top-20 left-20 w-32 h-32 border border-primary/20 rounded-full animate-float" />
      <div className="absolute bottom-20 right-20 w-24 h-24 border border-secondary/20 rounded-lg rotate-45 animate-float animation-delay-300" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Icon */}
          <div className="w-20 h-20 mx-auto rounded-2xl bg-gradient-to-br from-neon-cyan to-neon-purple flex items-center justify-center mb-8 shadow-[0_0_40px_hsl(var(--neon-cyan)/0.5)] animate-pulse-glow">
            <Sparkles className="w-10 h-10 text-primary-foreground" />
          </div>

          {/* Content */}
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Ready to <span className="gradient-text">Forge</span> the Future?
          </h2>
          <p className="text-muted-foreground text-lg md:text-xl mb-10 max-w-2xl mx-auto">
            Join 500+ innovators in the most exciting hackathon of 2025. 
            48 hours to transform your ideas into reality.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="xl" className="group">
              Register Your Team
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="glass" size="xl">
              Download Brochure
            </Button>
          </div>

          {/* Note */}
          <p className="mt-8 text-muted-foreground text-sm">
            Teams of 2-4 members • Free Registration • Certificates for all
          </p>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
