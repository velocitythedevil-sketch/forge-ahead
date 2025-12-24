import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { 
  Building2, 
  Heart, 
  Sprout, 
  Brain, 
  Wifi, 
  Shield, 
  GraduationCap, 
  Leaf,
  Sparkles 
} from "lucide-react";

const themes = [
  {
    icon: Building2,
    name: "Smart & Sustainable Cities",
    color: "from-cyan-500 to-blue-600",
    shadow: "shadow-cyan-500/30",
    description: "Develop solutions for urban challenges including transportation, waste management, energy efficiency, and smart infrastructure.",
    examples: ["Traffic optimization systems", "Smart waste collection", "Energy monitoring dashboards", "Public safety applications"],
  },
  {
    icon: Heart,
    name: "Healthcare & Medical Technology",
    color: "from-pink-500 to-rose-600",
    shadow: "shadow-pink-500/30",
    description: "Create innovative solutions for healthcare delivery, patient care, medical diagnostics, and health data management.",
    examples: ["Telemedicine platforms", "Health monitoring wearables", "Disease prediction models", "Hospital management systems"],
  },
  {
    icon: Sprout,
    name: "Agriculture & Rural Development",
    color: "from-green-500 to-emerald-600",
    shadow: "shadow-green-500/30",
    description: "Build technology solutions to improve agricultural practices, rural connectivity, and farmer welfare.",
    examples: ["Crop disease detection", "Smart irrigation systems", "Farm-to-market platforms", "Weather prediction apps"],
  },
  {
    icon: Brain,
    name: "Artificial Intelligence & ML",
    color: "from-purple-500 to-violet-600",
    shadow: "shadow-purple-500/30",
    description: "Leverage AI and machine learning to solve complex problems across various domains.",
    examples: ["NLP chatbots", "Computer vision apps", "Recommendation engines", "Predictive analytics"],
  },
  {
    icon: Wifi,
    name: "Internet of Things (IoT)",
    color: "from-blue-500 to-indigo-600",
    shadow: "shadow-blue-500/30",
    description: "Connect physical devices to create smart, automated solutions for homes, industries, and cities.",
    examples: ["Smart home automation", "Industrial monitoring", "Asset tracking", "Environmental sensors"],
  },
  {
    icon: Shield,
    name: "Cyber Security & Blockchain",
    color: "from-orange-500 to-amber-600",
    shadow: "shadow-orange-500/30",
    description: "Develop solutions for digital security, privacy protection, and decentralized applications.",
    examples: ["Secure authentication", "Blockchain voting", "Data encryption tools", "Fraud detection"],
  },
  {
    icon: GraduationCap,
    name: "Education Technology",
    color: "from-teal-500 to-cyan-600",
    shadow: "shadow-teal-500/30",
    description: "Transform education through technology with innovative learning platforms and tools.",
    examples: ["E-learning platforms", "Virtual classrooms", "Skill assessment tools", "Gamified learning"],
  },
  {
    icon: Leaf,
    name: "Environment & Climate Change",
    color: "from-lime-500 to-green-600",
    shadow: "shadow-lime-500/30",
    description: "Address environmental challenges with technology solutions for sustainability and conservation.",
    examples: ["Carbon footprint trackers", "Renewable energy apps", "Wildlife monitoring", "Pollution detection"],
  },
  {
    icon: Sparkles,
    name: "Open Innovation",
    color: "from-fuchsia-500 to-pink-600",
    shadow: "shadow-fuchsia-500/30",
    description: "Got a unique idea that doesn't fit other categories? This track welcomes all innovative solutions.",
    examples: ["Social impact projects", "Creative solutions", "Cross-domain innovations", "Experimental tech"],
  },
];

const Themes = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-32 pb-24">
        {/* Hero */}
        <section className="container mx-auto px-4 mb-16">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-display text-5xl md:text-6xl font-bold mb-6">
              Hackathon <span className="gradient-text">Themes</span>
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Choose a domain that aligns with your interests and expertise. 
              Build solutions that are practical, impactful, and scalable.
            </p>
          </div>
        </section>

        {/* Themes Grid */}
        <section className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
            {themes.map((theme, i) => (
              <div
                key={i}
                className="glass-card p-6 group hover:border-primary/30 transition-all duration-500 glow-effect"
              >
                {/* Header */}
                <div className="flex items-start gap-4 mb-4">
                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${theme.color} flex items-center justify-center shadow-lg ${theme.shadow} group-hover:scale-110 transition-transform duration-300`}>
                    <theme.icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="font-display text-xl font-bold text-foreground flex-1 pt-2">
                    {theme.name}
                  </h3>
                </div>

                {/* Description */}
                <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                  {theme.description}
                </p>

                {/* Examples */}
                <div>
                  <p className="text-xs text-muted-foreground mb-2 uppercase tracking-wider">Example Projects:</p>
                  <div className="flex flex-wrap gap-2">
                    {theme.examples.map((example, j) => (
                      <span
                        key={j}
                        className="px-2 py-1 rounded-md bg-muted/50 text-muted-foreground text-xs"
                      >
                        {example}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Evaluation Criteria */}
        <section className="container mx-auto px-4 mt-20">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-8 text-center">
              Evaluation <span className="gradient-text">Criteria</span>
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                { title: "Innovation", description: "Originality and creativity of the solution", weight: "25%" },
                { title: "Technical Implementation", description: "Quality of code and technical architecture", weight: "25%" },
                { title: "Feasibility & Scalability", description: "Practicality and growth potential", weight: "20%" },
                { title: "Problem Understanding", description: "Clarity in identifying and addressing the problem", weight: "15%" },
                { title: "Presentation & Demo", description: "Effectiveness in communicating the solution", weight: "15%" },
              ].map((criteria, i) => (
                <div key={i} className="glass-card p-5 flex items-center gap-4">
                  <div className="w-14 h-14 rounded-lg bg-gradient-to-br from-neon-cyan/20 to-neon-purple/20 flex items-center justify-center shrink-0">
                    <span className="font-display font-bold text-primary">{criteria.weight}</span>
                  </div>
                  <div>
                    <h4 className="font-display font-semibold text-foreground">{criteria.title}</h4>
                    <p className="text-muted-foreground text-sm">{criteria.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Themes;
