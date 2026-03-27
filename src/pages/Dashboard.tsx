import { motion } from "framer-motion";
import { Plus, Activity, GitPullRequest, Star, TrendingUp } from "lucide-react";
import KanbanBoard from "@/components/KanbanBoard";
import { Button } from "@/components/ui/button";

const stats = [
  { label: "Active Projects", value: "4", icon: Activity, trend: "+2 this month" },
  { label: "Pull Requests", value: "23", icon: GitPullRequest, trend: "+8 this week" },
  { label: "Stars Received", value: "892", icon: Star, trend: "+45 this month" },
  { label: "Team Score", value: "94%", icon: TrendingUp, trend: "+3% improvement" },
];

const Dashboard = () => (
  <div className="min-h-screen pt-24 pb-12">
    <div className="container mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-10 gap-4"
      >
        <div>
          <h1 className="text-3xl md:text-4xl font-bold mb-1">
            Project <span className="gradient-text">Dashboard</span>
          </h1>
          <p className="text-muted-foreground">Manage your projects and track progress.</p>
        </div>
        <Button className="bg-primary hover:bg-primary/90 text-primary-foreground gap-2">
          <Plus className="w-4 h-4" /> New Project
        </Button>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
        {stats.map((stat, i) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.08 }}
            className="glass p-5"
          >
            <div className="flex items-center justify-between mb-3">
              <span className="text-sm text-muted-foreground">{stat.label}</span>
              <stat.icon className="w-4 h-4 text-primary" />
            </div>
            <p className="text-2xl font-bold text-foreground">{stat.value}</p>
            <p className="text-xs text-muted-foreground mt-1">{stat.trend}</p>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
      >
        <h2 className="text-xl font-semibold mb-5 text-foreground">AI Code Reviewer — Sprint Board</h2>
        <KanbanBoard />
      </motion.div>
    </div>
  </div>
);

export default Dashboard;
