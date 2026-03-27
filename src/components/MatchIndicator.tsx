import { motion } from "framer-motion";

interface MatchIndicatorProps {
  percentage: number;
}

const MatchIndicator = ({ percentage }: MatchIndicatorProps) => {
  const color =
    percentage >= 80
      ? "text-green-400"
      : percentage >= 50
      ? "text-yellow-400"
      : "text-muted-foreground";

  return (
    <div className="flex items-center gap-2">
      <div className="relative w-10 h-10">
        <svg className="w-10 h-10 -rotate-90" viewBox="0 0 36 36">
          <path
            d="M18 2.0845a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
            fill="none"
            stroke="hsl(var(--muted))"
            strokeWidth="3"
          />
          <motion.path
            d="M18 2.0845a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
            fill="none"
            stroke="currentColor"
            strokeWidth="3"
            strokeDasharray={`${percentage}, 100`}
            className={color}
            initial={{ strokeDasharray: "0, 100" }}
            animate={{ strokeDasharray: `${percentage}, 100` }}
            transition={{ duration: 1, ease: "easeOut" }}
          />
        </svg>
        <span className={`absolute inset-0 flex items-center justify-center text-xs font-bold ${color}`}>
          {percentage}
        </span>
      </div>
      <span className="text-xs text-muted-foreground">Match</span>
    </div>
  );
};

export default MatchIndicator;
