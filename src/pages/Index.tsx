import { motion } from "framer-motion";
import { ArrowRight, GitBranch, Users, Zap, Shield, BarChart3, MessageSquare } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const features = [
  { icon: GitBranch, title: "GitHub Integration", desc: "Connect your GitHub and sync repos, contributions, and activity seamlessly." },
  { icon: Users, title: "Smart Matching", desc: "AI-powered skill matching finds the perfect collaborators for your projects." },
  { icon: Zap, title: "Real-time Collab", desc: "Chat, notifications, and Kanban boards keep your team in perfect sync." },
  { icon: Shield, title: "Reliability Score", desc: "Build trust with contributor scores based on activity and peer reviews." },
  { icon: BarChart3, title: "Analytics", desc: "Track project velocity, team performance, and individual contributions." },
  { icon: MessageSquare, title: "Project Chat", desc: "Built-in messaging keeps discussions contextual and searchable." },
];

const Index = () => (
  <div className="min-h-screen pt-16">
    {/* Hero */}
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,hsl(265_80%_60%/0.15),transparent_60%)]" />
      <div className="absolute top-20 left-1/4 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse-glow" />
      <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-pulse-glow" />

      <div className="container mx-auto px-4 py-24 md:py-36 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl mx-auto text-center"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass text-xs font-medium text-muted-foreground mb-6">
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            Open source collaboration platform
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
            Build Together.{" "}
            <span className="gradient-text">Ship Faster.</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-xl mx-auto mb-10 text-balance">
            Connect with developers, find the perfect project match, and collaborate in real-time with GitHub-powered workflows.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/discover">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground gap-2 glow">
                Explore Projects <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
            <Link to="/dashboard">
              <Button size="lg" variant="outline" className="border-border text-foreground hover:bg-muted/50">
                View Dashboard
              </Button>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>

    {/* Features */}
    <section className="container mx-auto px-4 py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-14"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Everything you need to <span className="gradient-text">collaborate</span>
        </h2>
        <p className="text-muted-foreground max-w-lg mx-auto">
          From finding projects to shipping features, DevSync has you covered.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {features.map((f, i) => (
          <motion.div
            key={f.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="glass hover-glow p-6 group"
          >
            <div className="w-10 h-10 rounded-lg bg-primary/15 flex items-center justify-center mb-4 group-hover:bg-primary/25 transition-colors">
              <f.icon className="w-5 h-5 text-primary" />
            </div>
            <h3 className="font-semibold text-foreground mb-2">{f.title}</h3>
            <p className="text-sm text-muted-foreground">{f.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>

    {/* CTA */}
    <section className="container mx-auto px-4 py-20">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="glass glow p-10 md:p-16 text-center relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,hsl(265_80%_60%/0.1),transparent_70%)]" />
        <div className="relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to start building?</h2>
          <p className="text-muted-foreground max-w-md mx-auto mb-8">
            Join thousands of developers collaborating on open source projects.
          </p>
          <Link to="/discover">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground gap-2">
              Get Started <ArrowRight className="w-4 h-4" />
            </Button>
          </Link>
        </div>
      </motion.div>
    </section>

    {/* Footer */}
    <footer className="border-t border-border py-8">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
        <span className="flex items-center gap-2">
          <GitBranch className="w-4 h-4 text-primary" />
          <span className="font-semibold text-foreground">DevSync</span> © 2026
        </span>
        <div className="flex gap-6">
          <a href="#" className="hover:text-foreground transition-colors">About</a>
          <a href="#" className="hover:text-foreground transition-colors">Docs</a>
          <a href="#" className="hover:text-foreground transition-colors">GitHub</a>
        </div>
      </div>
    </footer>
  </div>
);

export default Index;
