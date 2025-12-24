import { 
  Rocket, 
  Network, 
  Award, 
  BookOpen, 
  Users2, 
  Briefcase 
} from "lucide-react";

const reasons = [
  {
    icon: Rocket,
    title: "Hands-on Experience",
    description: "Build real projects under time constraints and learn to deliver under pressure.",
  },
  {
    icon: Network,
    title: "Networking",
    description: "Connect with like-minded innovators, mentors, and industry professionals.",
  },
  {
    icon: Award,
    title: "Win Prizes",
    description: "Compete for exciting cash prizes, trophies, and special category awards.",
  },
  {
    icon: BookOpen,
    title: "Learn from Mentors",
    description: "Get guidance from experienced professionals in academia and industry.",
  },
  {
    icon: Users2,
    title: "Team Building",
    description: "Develop collaboration skills working with diverse team members.",
  },
  {
    icon: Briefcase,
    title: "Portfolio Building",
    description: "Add meaningful projects to your portfolio and enhance your profile.",
  },
];

const WhyParticipateSection = () => {
  return (
    <section className="py-24 relative">
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-neon-purple/10 rounded-full blur-[100px]" />
      <div className="absolute top-1/3 right-0 w-72 h-72 bg-neon-cyan/10 rounded-full blur-[100px]" />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
            Why <span className="gradient-text">Participate</span>?
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            TECHFORGE 2025 offers more than just a competition
          </p>
        </div>

        {/* Reasons Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {reasons.map((reason, i) => (
            <div
              key={i}
              className="glass-card p-8 group hover:border-primary/50 transition-all duration-300 glow-effect"
            >
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-neon-cyan/20 to-neon-purple/20 flex items-center justify-center mb-6 group-hover:shadow-[0_0_25px_hsl(var(--neon-cyan)/0.4)] transition-all duration-300">
                <reason.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-display text-xl font-semibold mb-3 text-foreground">
                {reason.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {reason.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyParticipateSection;
