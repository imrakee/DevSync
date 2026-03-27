import type { Project } from "@/components/ProjectCard";

export const mockProjects: Project[] = [
  {
    id: "1",
    title: "AI Code Reviewer",
    description: "An AI-powered tool that automatically reviews pull requests and suggests improvements using LLM models.",
    techStack: ["React", "TypeScript", "Python", "OpenAI"],
    rolesNeeded: ["Frontend Dev", "ML Engineer"],
    stars: 342,
    contributors: 8,
    forks: 45,
    matchPercentage: 92,
    owner: { name: "Sarah Chen", avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah" },
  },
  {
    id: "2",
    title: "DevMetrics Dashboard",
    description: "Real-time analytics dashboard for development teams to track velocity, code quality, and deployment frequency.",
    techStack: ["Next.js", "D3.js", "PostgreSQL", "GraphQL"],
    rolesNeeded: ["Full-Stack Dev", "Designer"],
    stars: 189,
    contributors: 5,
    forks: 23,
    matchPercentage: 78,
    owner: { name: "Alex Rivera", avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Alex" },
  },
  {
    id: "3",
    title: "CloudDeploy CLI",
    description: "A CLI tool that simplifies multi-cloud deployments with one command across AWS, GCP, and Azure.",
    techStack: ["Go", "Docker", "Terraform", "CLI"],
    rolesNeeded: ["DevOps Engineer", "Go Dev"],
    stars: 567,
    contributors: 12,
    forks: 89,
    matchPercentage: 65,
    owner: { name: "Marcus Johnson", avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Marcus" },
  },
  {
    id: "4",
    title: "Realtime Collab Editor",
    description: "A collaborative code editor with real-time sync, built-in terminal, and video chat for pair programming.",
    techStack: ["React", "WebRTC", "CRDT", "Node.js"],
    rolesNeeded: ["Backend Dev", "Frontend Dev"],
    stars: 234,
    contributors: 6,
    forks: 34,
    matchPercentage: 85,
    owner: { name: "Priya Patel", avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Priya" },
  },
  {
    id: "5",
    title: "SecureVault",
    description: "Open-source password manager with end-to-end encryption, biometric auth, and team sharing features.",
    techStack: ["Rust", "React Native", "SQLite", "Crypto"],
    rolesNeeded: ["Security Engineer", "Mobile Dev"],
    stars: 892,
    contributors: 15,
    forks: 120,
    matchPercentage: 55,
    owner: { name: "James Kim", avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=James" },
  },
  {
    id: "6",
    title: "EcoTracker",
    description: "Track and reduce your carbon footprint with AI-powered suggestions and community challenges.",
    techStack: ["React", "TensorFlow.js", "Firebase", "Tailwind"],
    rolesNeeded: ["Frontend Dev", "Data Scientist"],
    stars: 156,
    contributors: 4,
    forks: 18,
    matchPercentage: 71,
    owner: { name: "Luna Martinez", avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Luna" },
  },
];

export interface KanbanTask {
  id: string;
  title: string;
  assignee: string;
  avatar: string;
  priority: "low" | "medium" | "high";
  labels: string[];
}

export const kanbanData: Record<string, KanbanTask[]> = {
  "To Do": [
    { id: "t1", title: "Set up CI/CD pipeline", assignee: "Sarah", avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah", priority: "high", labels: ["DevOps"] },
    { id: "t2", title: "Design onboarding flow", assignee: "Alex", avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Alex", priority: "medium", labels: ["Design", "UX"] },
    { id: "t3", title: "Write API documentation", assignee: "Priya", avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Priya", priority: "low", labels: ["Docs"] },
  ],
  "In Progress": [
    { id: "t4", title: "Implement auth system", assignee: "Marcus", avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Marcus", priority: "high", labels: ["Backend", "Security"] },
    { id: "t5", title: "Build notification service", assignee: "James", avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=James", priority: "medium", labels: ["Backend"] },
  ],
  "Completed": [
    { id: "t6", title: "Database schema design", assignee: "Luna", avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Luna", priority: "high", labels: ["Database"] },
    { id: "t7", title: "Project setup & config", assignee: "Sarah", avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah", priority: "low", labels: ["Setup"] },
  ],
};

export const contributionData = Array.from({ length: 52 }, () =>
  Array.from({ length: 7 }, () => Math.floor(Math.random() * 5))
);

export const statsData = [
  { label: "Repositories", value: "47" },
  { label: "Contributions", value: "1,284" },
  { label: "Stars Earned", value: "892" },
  { label: "Reliability", value: "96%" },
];
