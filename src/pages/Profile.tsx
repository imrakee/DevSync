import { motion } from "framer-motion";
import { Github, MapPin, Link as LinkIcon, Calendar, Code } from "lucide-react";
import ContributionGrid from "@/components/ContributionGrid";
import SkillBadge from "@/components/SkillBadge";
import { statsData } from "@/data/mockData";

const skills = ["React", "TypeScript", "Node.js", "Python", "Go", "PostgreSQL", "Docker", "GraphQL"];
const repos = [
  { name: "devsync-frontend", lang: "TypeScript", stars: 124, desc: "Frontend for the DevSync collaboration platform" },
  { name: "ml-pipeline", lang: "Python", stars: 89, desc: "Machine learning data pipeline framework" },
  { name: "go-microservices", lang: "Go", stars: 67, desc: "Microservices toolkit for Go applications" },
  { name: "react-glassmorphism", lang: "TypeScript", stars: 234, desc: "Glassmorphism component library for React" },
];

const langColors: Record<string, string> = {
  TypeScript: "bg-blue-400",
  Python: "bg-yellow-400",
  Go: "bg-cyan-400",
};

const Profile = () => (
  <div className="min-h-screen pt-24 pb-12">
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Sidebar */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="lg:col-span-1"
        >
          <div className="glass-strong p-6 text-center">
            <img
              src="https://api.dicebear.com/7.x/avataaars/svg?seed=DevUser"
              alt="Profile"
              className="w-24 h-24 rounded-full mx-auto ring-4 ring-primary/30 mb-4"
            />
            <h2 className="text-xl font-bold text-foreground">Alex Morgan</h2>
            <p className="text-sm text-muted-foreground mb-4">Full-Stack Developer</p>
            <p className="text-sm text-muted-foreground mb-6">
              Passionate about open source, building tools that make developers more productive.
            </p>
            <div className="flex flex-col gap-2 text-sm text-muted-foreground mb-6">
              <span className="flex items-center gap-2 justify-center"><Github className="w-4 h-4" /> @alexmorgan</span>
              <span className="flex items-center gap-2 justify-center"><MapPin className="w-4 h-4" /> San Francisco, CA</span>
              <span className="flex items-center gap-2 justify-center"><LinkIcon className="w-4 h-4" /> alexmorgan.dev</span>
              <span className="flex items-center gap-2 justify-center"><Calendar className="w-4 h-4" /> Joined Mar 2023</span>
            </div>
            <div className="flex flex-wrap gap-1.5 justify-center">
              {skills.map((s) => (
                <SkillBadge key={s} skill={s} variant="match" />
              ))}
            </div>
          </div>
        </motion.div>

        {/* Main */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="lg:col-span-2 flex flex-col gap-6"
        >
          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {statsData.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.08 }}
                className="glass p-4 text-center"
              >
                <p className="text-2xl font-bold text-foreground">{stat.value}</p>
                <p className="text-xs text-muted-foreground">{stat.label}</p>
              </motion.div>
            ))}
          </div>

          <ContributionGrid />

          {/* Repos */}
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
              <Code className="w-5 h-5 text-primary" /> Popular Repositories
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {repos.map((repo, i) => (
                <motion.div
                  key={repo.name}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + i * 0.08 }}
                  className="glass hover-glow p-4"
                >
                  <h4 className="font-semibold text-primary text-sm mb-1">{repo.name}</h4>
                  <p className="text-xs text-muted-foreground mb-3">{repo.desc}</p>
                  <div className="flex items-center gap-3 text-xs text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <span className={`w-2.5 h-2.5 rounded-full ${langColors[repo.lang]}`} />
                      {repo.lang}
                    </span>
                    <span>⭐ {repo.stars}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  </div>
);

export default Profile;
