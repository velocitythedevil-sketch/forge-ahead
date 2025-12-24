import { Target, Users, Trophy, Lightbulb } from "lucide-react";

const features = [
  {
    icon: Target,
    title: "Problem Solving",
    description: "Tackle real-world challenges with innovative solutions",
  },
  {
    icon: Users,
    title: "Team Collaboration",
    description: "Work with talented minds from across the nation",
  },
  {
    icon: Trophy,
    title: "Win Prizes",
    description: "Compete for exciting cash prizes and recognition",
  },
  {
    icon: Lightbulb,
    title: "Learn & Grow",
    description: "Gain hands-on experience with expert mentorship",
  },
];

const AboutSection = () => {
  return (
    <section className="py-24 relative">
      <div className="absolute inset-0 grid-pattern opacity-20" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
              <span className="gradient-text">About</span> TECHFORGE
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Where creativity meets technology in a 48-hour journey of innovation
            </p>
          </div>

          {/* Content Grid */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-6">
              <p className="text-muted-foreground leading-relaxed">
                TECHFORGE 2025 is a prestigious 48-hour national level hackathon organized by 
                AISSMS College of Engineering, Pune. The event brings together innovative and 
                passionate engineering students from across the country to collaborate, ideate, 
                and develop technology-driven solutions for real-world challenges.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                The hackathon promotes experiential learning by providing a competitive yet 
                collaborative environment where students can apply their theoretical knowledge 
                to practical problem statements, supported by expert mentors and evaluated by 
                a panel of experienced judges.
              </p>
              
              {/* Stats */}
              <div className="grid grid-cols-3 gap-4 pt-6">
                {[
                  { value: "48", label: "Hours" },
                  { value: "9+", label: "Themes" },
                  { value: "₹1L+", label: "Prizes" },
                ].map((stat, i) => (
                  <div key={i} className="glass-card p-4 text-center glow-effect">
                    <div className="font-display text-3xl font-bold text-primary">{stat.value}</div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Features */}
            <div className="grid sm:grid-cols-2 gap-4">
              {features.map((feature, i) => (
                <div
                  key={i}
                  className="glass-card p-6 glow-effect group hover:border-primary/50 transition-all duration-300"
                >
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-neon-cyan/20 to-neon-purple/20 flex items-center justify-center mb-4 group-hover:shadow-[0_0_20px_hsl(var(--neon-cyan)/0.3)] transition-all duration-300">
                    <feature.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-display text-lg font-semibold mb-2 text-foreground">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
