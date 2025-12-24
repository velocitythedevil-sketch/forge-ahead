import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { 
  Building2, 
  Heart, 
  Sprout, 
  Brain, 
  Wifi, 
  Shield, 
  GraduationCap, 
  Leaf,
  Sparkles,
  ArrowRight
} from "lucide-react";

const themes = [
  { icon: Building2, name: "Smart Cities", color: "from-cyan-500 to-blue-500" },
  { icon: Heart, name: "Healthcare", color: "from-pink-500 to-rose-500" },
  { icon: Sprout, name: "Agriculture", color: "from-green-500 to-emerald-500" },
  { icon: Brain, name: "AI & ML", color: "from-purple-500 to-violet-500" },
  { icon: Wifi, name: "IoT", color: "from-blue-500 to-indigo-500" },
  { icon: Shield, name: "Cyber Security", color: "from-orange-500 to-amber-500" },
  { icon: GraduationCap, name: "EdTech", color: "from-teal-500 to-cyan-500" },
  { icon: Leaf, name: "Environment", color: "from-lime-500 to-green-500" },
  { icon: Sparkles, name: "Open Innovation", color: "from-fuchsia-500 to-pink-500" },
];

const ThemesSection = () => {
  return (
    <section className="py-24 relative bg-card/20">
      <div className="absolute inset-0 grid-pattern opacity-10" />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
            Hackathon <span className="gradient-text">Themes</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Choose from diverse domains to showcase your innovation
          </p>
        </div>

        {/* Themes Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 max-w-5xl mx-auto mb-12">
          {themes.map((theme, i) => (
            <div
              key={i}
              className="glass-card p-6 text-center group hover:border-primary/50 transition-all duration-300 cursor-pointer glow-effect"
            >
              <div className={`w-14 h-14 mx-auto rounded-xl bg-gradient-to-br ${theme.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                <theme.icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="font-display text-sm font-medium text-foreground">
                {theme.name}
              </h3>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button variant="outline" size="lg" asChild>
            <Link to="/themes" className="group">
              Explore All Themes
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ThemesSection;
