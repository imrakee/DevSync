interface SkillBadgeProps {
  skill: string;
  variant?: "default" | "match";
}

const SkillBadge = ({ skill, variant = "default" }: SkillBadgeProps) => (
  <span
    className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
      variant === "match"
        ? "bg-primary/20 text-primary border border-primary/30"
        : "bg-muted text-muted-foreground"
    }`}
  >
    {skill}
  </span>
);

export default SkillBadge;
