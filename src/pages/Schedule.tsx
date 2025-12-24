import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Clock, Coffee, Code, Users, Presentation, Trophy, CheckCircle2 } from "lucide-react";

const day1Events = [
  { time: "09:00 AM", title: "Registration & Check-in", description: "Collect your ID cards, swag kits, and settle in", icon: CheckCircle2, status: "start" },
  { time: "10:00 AM", title: "Inauguration Ceremony", description: "Opening address by dignitaries and chief guests", icon: Users },
  { time: "11:00 AM", title: "Hackathon Briefing & Rules", description: "Detailed overview of rules, evaluation criteria, and expectations", icon: Presentation },
  { time: "12:00 PM", title: "Problem Statement Finalization", description: "Teams finalize their chosen domain and problem statement", icon: Code },
  { time: "01:00 PM", title: "Hackathon Begins! 🚀", description: "The 48-hour coding marathon officially starts", icon: Code, highlight: true },
  { time: "08:00 PM", title: "Mentor Round 1", description: "First mentorship session - get guidance on your approach", icon: Users },
  { time: "10:00 PM", title: "Overnight Coding Session", description: "Continue building through the night with refreshments", icon: Coffee, status: "ongoing" },
];

const day2Events = [
  { time: "08:00 AM", title: "Morning Progress Review", description: "Quick check-in with mentors on overnight progress", icon: CheckCircle2, status: "start" },
  { time: "10:00 AM", title: "Mentor Round 2", description: "Technical deep-dive sessions with industry experts", icon: Users },
  { time: "02:00 PM", title: "Prototype Development", description: "Focus on building MVP and core features", icon: Code },
  { time: "05:00 PM", title: "Mid Evaluation", description: "Shortlisting round - present your progress", icon: Presentation },
  { time: "08:00 PM", title: "Dinner & Networking", description: "Take a break, recharge, and connect with others", icon: Coffee },
  { time: "10:00 PM", title: "Final Push - Night 2", description: "Continue coding and testing through the night", icon: Code, status: "ongoing" },
];

const day3Events = [
  { time: "08:00 AM", title: "Final Submission", description: "Submit your project code and documentation", icon: CheckCircle2, highlight: true },
  { time: "09:00 AM", title: "Final Presentations & Demo", description: "Present your solution to the jury panel", icon: Presentation },
  { time: "01:00 PM", title: "Result Declaration", description: "Winners announced for all categories", icon: Trophy },
  { time: "02:00 PM", title: "Valedictory & Prize Distribution", description: "Closing ceremony with awards and certificates", icon: Trophy, status: "end" },
];

const DayCard = ({ day, date, events, color }: { day: string; date: string; events: typeof day1Events; color: string }) => (
  <div className="relative">
    {/* Day Header */}
    <div className={`glass-card p-6 mb-6 border-l-4 ${color}`}>
      <div className="flex items-center gap-4">
        <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${color.replace('border-l-', 'from-').replace('cyan', 'cyan-500 to-blue').replace('amber', 'amber-500 to-orange').replace('rose', 'rose-500 to-pink')}-500 flex items-center justify-center shadow-lg`}>
          <Clock className="w-8 h-8 text-white" />
        </div>
        <div>
          <h3 className="font-display text-2xl font-bold text-foreground">{day}</h3>
          <p className="text-muted-foreground">{date}</p>
        </div>
      </div>
    </div>

    {/* Timeline */}
    <div className="space-y-4 ml-8 relative">
      {/* Vertical Line */}
      <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-border" />

      {events.map((event, i) => (
        <div key={i} className="relative pl-12">
          {/* Timeline Dot */}
          <div className={`absolute left-2 top-6 w-5 h-5 rounded-full border-2 ${event.highlight ? 'bg-primary border-primary shadow-[0_0_15px_hsl(var(--neon-cyan))]' : 'bg-background border-border'} z-10`} />
          
          {/* Event Card */}
          <div className={`glass-card p-5 group hover:border-primary/30 transition-all duration-300 ${event.highlight ? 'border-primary/50 shadow-[0_0_20px_hsl(var(--neon-cyan)/0.2)]' : ''}`}>
            <div className="flex items-start gap-4">
              <div className={`w-10 h-10 rounded-lg ${event.highlight ? 'bg-primary/20' : 'bg-muted'} flex items-center justify-center shrink-0`}>
                <event.icon className={`w-5 h-5 ${event.highlight ? 'text-primary' : 'text-muted-foreground'}`} />
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-1">
                  <span className="font-display text-sm font-semibold text-primary">{event.time}</span>
                  {event.highlight && (
                    <span className="px-2 py-0.5 rounded-full bg-primary/20 text-primary text-xs font-medium">Key Event</span>
                  )}
                </div>
                <h4 className="font-display text-lg font-semibold text-foreground mb-1">{event.title}</h4>
                <p className="text-muted-foreground text-sm">{event.description}</p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
);

const Schedule = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-32 pb-24">
        {/* Hero */}
        <section className="container mx-auto px-4 mb-16">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-display text-5xl md:text-6xl font-bold mb-6">
              Event <span className="gradient-text">Schedule</span>
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              48 hours of intense coding, mentorship, and innovation. Here's your complete timeline.
            </p>
          </div>
        </section>

        {/* Legend */}
        <section className="container mx-auto px-4 mb-12">
          <div className="flex flex-wrap justify-center gap-6">
            {[
              { color: "bg-neon-cyan", label: "Day 1 - Kickoff" },
              { color: "bg-amber-500", label: "Day 2 - Build" },
              { color: "bg-rose-500", label: "Day 3 - Finale" },
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-2">
                <div className={`w-4 h-4 rounded-full ${item.color}`} />
                <span className="text-sm text-muted-foreground">{item.label}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Schedule Grid */}
        <section className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            <DayCard day="Day 1" date="December 12, 2025" events={day1Events} color="border-l-neon-cyan" />
            <DayCard day="Day 2" date="December 13, 2025" events={day2Events} color="border-l-amber-500" />
            <DayCard day="Day 3" date="December 14, 2025" events={day3Events} color="border-l-rose-500" />
          </div>
        </section>

        {/* Important Notes */}
        <section className="container mx-auto px-4 mt-16">
          <div className="max-w-4xl mx-auto glass-card p-8">
            <h3 className="font-display text-2xl font-bold mb-6 text-center gradient-text">Important Notes</h3>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                "Meals and refreshments will be provided throughout the event",
                "Sleeping arrangements available for overnight sessions",
                "Wi-Fi and power outlets at all workstations",
                "Medical assistance on standby 24/7",
                "Participants must stay on campus during the hackathon",
                "All submissions must be made before the deadline",
              ].map((note, i) => (
                <div key={i} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                  <span className="text-muted-foreground text-sm">{note}</span>
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

export default Schedule;
