import { cn } from "@/lib/utils";

export interface TimelineItem {
  title: string;
  description?: string;
  timestamp?: string;
  icon?: React.ReactNode;
  status?: "default" | "success" | "error";
}

interface TimelineProps {
  items: TimelineItem[];
  className?: string;
}

const statusStyles: Record<NonNullable<TimelineItem["status"]>, string> = {
  default: "bg-muted text-muted-foreground border-border",
  success: "bg-emerald-500/15 text-emerald-600 border-emerald-500/30",
  error: "bg-destructive/15 text-destructive border-destructive/30",
};

export function Timeline({ items, className }: TimelineProps) {
  return (
    <ol className={cn("relative space-y-6", className)}>
      {items.map((item, index) => {
        const status = item.status ?? "default";
        const isLast = index === items.length - 1;
        return (
          <li key={index} className="relative flex gap-4 pl-2">
            {!isLast && (
              <span
                aria-hidden
                className="absolute left-[19px] top-8 bottom-[-24px] w-px bg-border"
              />
            )}
            <span
              className={cn(
                "relative z-10 flex size-8 shrink-0 items-center justify-center rounded-full border",
                statusStyles[status]
              )}
            >
              {item.icon ?? (
                <span className="size-2 rounded-full bg-current" />
              )}
            </span>
            <div className="flex-1 pt-1">
              <div className="flex items-start justify-between gap-2">
                <p className="text-sm font-medium">{item.title}</p>
                {item.timestamp && (
                  <span className="text-xs text-muted-foreground shrink-0">
                    {item.timestamp}
                  </span>
                )}
              </div>
              {item.description && (
                <p className="mt-0.5 text-sm text-muted-foreground">
                  {item.description}
                </p>
              )}
            </div>
          </li>
        );
      })}
    </ol>
  );
}
