import { motion } from "framer-motion";
import { Star, Users, GitFork } from "lucide-react";
import SkillBadge from "./SkillBadge";
import MatchIndicator from "./MatchIndicator";

export interface Project {
  id: string;
  title: string;
  description: string;
  techStack: string[];
  rolesNeeded: string[];
  stars: number;
  contributors: number;
  forks: number;
  matchPercentage: number;
  owner: { name: string; avatar: string };
}

const ProjectCard = ({ project }: { project: Project }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    whileHover={{ y: -4 }}
    className="glass hover-glow p-5 flex flex-col gap-4"
  >
    <div className="flex items-start justify-between">
      <div className="flex items-center gap-3">
        <img
          src={project.owner.avatar}
          alt={project.owner.name}
          className="w-8 h-8 rounded-full ring-2 ring-primary/30"
        />
        <div>
          <h3 className="font-semibold text-foreground">{project.title}</h3>
          <p className="text-xs text-muted-foreground">{project.owner.name}</p>
        </div>
      </div>
      <MatchIndicator percentage={project.matchPercentage} />
    </div>

    <p className="text-sm text-muted-foreground line-clamp-2">{project.description}</p>

    <div className="flex flex-wrap gap-1.5">
      {project.techStack.map((tech) => (
        <SkillBadge key={tech} skill={tech} variant="match" />
      ))}
    </div>

    <div className="flex items-center gap-4 text-xs text-muted-foreground mt-auto pt-3 border-t border-border">
      <span className="flex items-center gap-1"><Star className="w-3.5 h-3.5" />{project.stars}</span>
      <span className="flex items-center gap-1"><Users className="w-3.5 h-3.5" />{project.contributors}</span>
      <span className="flex items-center gap-1"><GitFork className="w-3.5 h-3.5" />{project.forks}</span>
      <span className="ml-auto text-primary text-xs font-medium">
        {project.rolesNeeded.length} roles open
      </span>
    </div>
  </motion.div>
);

export default ProjectCard;
