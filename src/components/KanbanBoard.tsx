import { motion } from "framer-motion";
import { kanbanData, type KanbanTask } from "@/data/mockData";
import { Circle, CheckCircle2, Clock } from "lucide-react";

const columnIcons: Record<string, React.ReactNode> = {
  "To Do": <Circle className="w-4 h-4 text-muted-foreground" />,
  "In Progress": <Clock className="w-4 h-4 text-secondary" />,
  "Completed": <CheckCircle2 className="w-4 h-4 text-green-400" />,
};

const priorityColors: Record<string, string> = {
  high: "bg-destructive/20 text-destructive",
  medium: "bg-yellow-500/20 text-yellow-400",
  low: "bg-green-500/20 text-green-400",
};

const TaskCard = ({ task, index }: { task: KanbanTask; index: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 10 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: index * 0.05 }}
    whileHover={{ scale: 1.02 }}
    className="glass p-3.5 cursor-grab active:cursor-grabbing"
  >
    <div className="flex items-start justify-between gap-2 mb-2">
      <h4 className="text-sm font-medium text-foreground">{task.title}</h4>
      <span className={`text-[10px] px-1.5 py-0.5 rounded-full font-medium ${priorityColors[task.priority]}`}>
        {task.priority}
      </span>
    </div>
    <div className="flex flex-wrap gap-1 mb-3">
      {task.labels.map((label) => (
        <span key={label} className="text-[10px] px-1.5 py-0.5 rounded bg-muted text-muted-foreground">
          {label}
        </span>
      ))}
    </div>
    <div className="flex items-center gap-2">
      <img src={task.avatar} alt={task.assignee} className="w-5 h-5 rounded-full" />
      <span className="text-xs text-muted-foreground">{task.assignee}</span>
    </div>
  </motion.div>
);

const KanbanBoard = () => (
  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
    {Object.entries(kanbanData).map(([column, tasks]) => (
      <div key={column} className="glass-strong p-4">
        <div className="flex items-center gap-2 mb-4">
          {columnIcons[column]}
          <h3 className="text-sm font-semibold text-foreground">{column}</h3>
          <span className="ml-auto text-xs bg-muted text-muted-foreground px-2 py-0.5 rounded-full">
            {tasks.length}
          </span>
        </div>
        <div className="flex flex-col gap-3">
          {tasks.map((task, i) => (
            <TaskCard key={task.id} task={task} index={i} />
          ))}
        </div>
      </div>
    ))}
  </div>
);

export default KanbanBoard;
