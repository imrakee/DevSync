import { contributionData } from "@/data/mockData";

const levels = [
  "bg-muted/30",
  "bg-primary/20",
  "bg-primary/40",
  "bg-primary/60",
  "bg-primary/80",
];

const ContributionGrid = () => (
  <div className="glass p-5">
    <h3 className="text-sm font-semibold text-foreground mb-4">Contribution Activity</h3>
    <div className="flex gap-0.5 overflow-x-auto pb-2">
      {contributionData.map((week, wi) => (
        <div key={wi} className="flex flex-col gap-0.5">
          {week.map((val, di) => (
            <div
              key={di}
              className={`w-2.5 h-2.5 rounded-sm ${levels[val]} transition-colors`}
              title={`${val} contributions`}
            />
          ))}
        </div>
      ))}
    </div>
  </div>
);

export default ContributionGrid;
