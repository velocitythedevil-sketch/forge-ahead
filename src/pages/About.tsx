import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Building2, Target, Award, Users, GraduationCap, MapPin } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-32 pb-24">
        {/* Hero */}
        <section className="container mx-auto px-4 mb-20">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-display text-5xl md:text-6xl font-bold mb-6">
              About <span className="gradient-text">TECHFORGE</span>
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              A celebration of innovation, creativity, and technological excellence
            </p>
          </div>
        </section>

        {/* About Hackathon */}
        <section className="container mx-auto px-4 mb-20">
          <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary mb-6">
                <Target className="w-4 h-4" />
                <span className="text-sm font-medium">Our Mission</span>
              </div>
              <h2 className="font-display text-3xl md:text-4xl font-bold mb-6 text-foreground">
                Fostering Innovation Through Competition
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  The primary objective of TECHFORGE 2025 is to foster innovation, creativity, 
                  and problem-solving skills among engineering students. The event aims to 
                  encourage participants to think critically about societal, industrial, and 
                  technological challenges.
                </p>
                <p>
                  By participating in this hackathon, students will gain hands-on experience in 
                  project development, teamwork, and presentation, thereby enhancing their 
                  technical and professional competencies.
                </p>
                <p>
                  TECHFORGE 2025 bridges the gap between academic learning and industry 
                  requirements by exposing students to real-world problem statements and 
                  industry mentorship.
                </p>
              </div>
            </div>
            <div className="order-1 lg:order-2 grid grid-cols-2 gap-4">
              {[
                { icon: Users, value: "500+", label: "Participants" },
                { icon: Award, value: "₹1L+", label: "Prize Pool" },
                { icon: GraduationCap, value: "50+", label: "Mentors" },
                { icon: Building2, value: "100+", label: "Colleges" },
              ].map((stat, i) => (
                <div key={i} className="glass-card p-6 text-center glow-effect">
                  <stat.icon className="w-8 h-8 text-primary mx-auto mb-3" />
                  <div className="font-display text-3xl font-bold text-foreground">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* About College */}
        <section className="container mx-auto px-4 mb-20">
          <div className="max-w-6xl mx-auto">
            <div className="glass-card p-8 md:p-12">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div>
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/20 text-secondary mb-6">
                    <Building2 className="w-4 h-4" />
                    <span className="text-sm font-medium">Host Institution</span>
                  </div>
                  <h2 className="font-display text-3xl md:text-4xl font-bold mb-6 text-foreground">
                    AISSMS College of Engineering
                  </h2>
                  <div className="space-y-4 text-muted-foreground">
                    <p>
                      All India Shri Shivaji Memorial Society's College of Engineering (AISSMS COE), 
                      Pune, is one of the premier engineering institutions in Maharashtra, known 
                      for its academic excellence and commitment to innovation.
                    </p>
                    <p>
                      The institute is affiliated with Savitribai Phule Pune University (SPPU) 
                      and approved by AICTE. AISSMS COE continuously strives to create an 
                      environment that nurtures technical skills, research aptitude, and 
                      holistic development among students.
                    </p>
                  </div>
                  <div className="flex items-center gap-2 mt-6 text-muted-foreground">
                    <MapPin className="w-5 h-5 text-primary" />
                    <span>Kennedy Road, Near RTO, Pune - 411001</span>
                  </div>
                </div>
                <div className="relative">
                  <div className="aspect-video rounded-xl bg-gradient-to-br from-neon-cyan/20 to-neon-purple/20 flex items-center justify-center border border-border/50">
                    <Building2 className="w-24 h-24 text-primary/30" />
                  </div>
                  <div className="absolute -bottom-4 -right-4 w-24 h-24 rounded-xl bg-gradient-to-br from-neon-cyan to-neon-purple opacity-50 blur-2xl" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Eligibility */}
        <section className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-8">
              Eligibility <span className="gradient-text">Criteria</span>
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { title: "Students", description: "Undergraduate and postgraduate engineering students from recognized institutions" },
                { title: "Team Size", description: "Teams of 2-4 members. Cross-department and cross-college teams allowed" },
                { title: "Registration", description: "Complete registration before deadline. Each participant can join only one team" },
              ].map((item, i) => (
                <div key={i} className="glass-card p-6 glow-effect">
                  <h3 className="font-display text-xl font-semibold mb-3 text-foreground">{item.title}</h3>
                  <p className="text-muted-foreground text-sm">{item.description}</p>
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

export default About;
