import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Send, Clock, ExternalLink } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Message sent successfully! We'll get back to you soon.");
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-32 pb-24">
        {/* Hero */}
        <section className="container mx-auto px-4 mb-16">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-display text-5xl md:text-6xl font-bold mb-6">
              Get in <span className="gradient-text">Touch</span>
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Have questions about TECHFORGE 2025? We're here to help!
            </p>
          </div>
        </section>

        {/* Contact Grid */}
        <section className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h2 className="font-display text-2xl font-bold mb-6 text-foreground">Contact Information</h2>
                <div className="space-y-4">
                  {[
                    { icon: Mail, label: "Email", value: "techforge@aissms.edu.in", href: "mailto:techforge@aissms.edu.in" },
                    { icon: Phone, label: "Phone", value: "+91 98765 43210", href: "tel:+919876543210" },
                    { icon: MapPin, label: "Address", value: "AISSMS COE, Kennedy Road, Near RTO, Pune 411001", href: "#" },
                    { icon: Clock, label: "Office Hours", value: "Mon - Sat: 9:00 AM - 5:00 PM", href: "#" },
                  ].map((item, i) => (
                    <a
                      key={i}
                      href={item.href}
                      className="glass-card p-4 flex items-center gap-4 group hover:border-primary/30 transition-all duration-300"
                    >
                      <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-neon-cyan/20 to-neon-purple/20 flex items-center justify-center group-hover:shadow-[0_0_20px_hsl(var(--neon-cyan)/0.3)] transition-all duration-300">
                        <item.icon className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">{item.label}</p>
                        <p className="text-foreground font-medium">{item.value}</p>
                      </div>
                    </a>
                  ))}
                </div>
              </div>

              {/* Map placeholder */}
              <div className="glass-card p-1 overflow-hidden">
                <div className="aspect-video rounded-lg bg-muted/30 flex items-center justify-center relative group cursor-pointer">
                  <MapPin className="w-12 h-12 text-primary/30" />
                  <div className="absolute inset-0 flex items-center justify-center bg-background/50 opacity-0 group-hover:opacity-100 transition-opacity">
                    <Button variant="outline" size="sm">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Open in Maps
                    </Button>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="glass-card p-8">
              <h2 className="font-display text-2xl font-bold mb-6 text-foreground">Send us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Name</label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                      className="w-full px-4 py-3 rounded-lg bg-muted/50 border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all text-foreground placeholder:text-muted-foreground"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Email</label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                      className="w-full px-4 py-3 rounded-lg bg-muted/50 border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all text-foreground placeholder:text-muted-foreground"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Subject</label>
                  <input
                    type="text"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    required
                    className="w-full px-4 py-3 rounded-lg bg-muted/50 border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all text-foreground placeholder:text-muted-foreground"
                    placeholder="How can we help?"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Message</label>
                  <textarea
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    required
                    rows={5}
                    className="w-full px-4 py-3 rounded-lg bg-muted/50 border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all resize-none text-foreground placeholder:text-muted-foreground"
                    placeholder="Your message..."
                  />
                </div>
                <Button type="submit" variant="hero" size="lg" className="w-full">
                  <Send className="w-4 h-4 mr-2" />
                  Send Message
                </Button>
              </form>
            </div>
          </div>
        </section>

        {/* FAQ Preview */}
        <section className="container mx-auto px-4 mt-20">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-display text-3xl font-bold mb-8">
              Frequently Asked <span className="gradient-text">Questions</span>
            </h2>
            <div className="grid md:grid-cols-2 gap-4 text-left">
              {[
                { q: "What is the team size?", a: "Teams can have 2-4 members. Cross-college teams are allowed." },
                { q: "Is there a registration fee?", a: "No, TECHFORGE 2025 is completely free to participate." },
                { q: "What should I bring?", a: "Bring your laptop, charger, and valid college ID. We'll provide everything else." },
                { q: "Will food be provided?", a: "Yes, meals and refreshments are provided throughout the 48 hours." },
              ].map((faq, i) => (
                <div key={i} className="glass-card p-5">
                  <h4 className="font-display font-semibold text-foreground mb-2">{faq.q}</h4>
                  <p className="text-muted-foreground text-sm">{faq.a}</p>
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

export default Contact;
