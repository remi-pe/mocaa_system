import { cn } from "../../lib/utils";

type StatusType =
  | "online"
  | "offline"
  | "busy"
  | "away"
  | "success"
  | "error"
  | "warning"
  | "info";

interface StatusDotProps {
  status: StatusType;
  pulse?: boolean;
  label?: string;
  className?: string;
}

const colorMap: Record<StatusType, string> = {
  online: "bg-green-500",
  success: "bg-green-500",
  offline: "bg-gray-400",
  busy: "bg-red-500",
  error: "bg-red-500",
  away: "bg-amber-500",
  warning: "bg-amber-500",
  info: "bg-blue-500",
};

export function StatusDot({
  status,
  pulse = false,
  label,
  className,
}: StatusDotProps) {
  const dot = (
    <span
      className={cn(
        "inline-block size-2 shrink-0 rounded-full",
        colorMap[status],
        pulse && "animate-pulse",
        !label && className
      )}
      aria-hidden={label ? true : undefined}
      role={label ? undefined : "status"}
      aria-label={label ? undefined : status}
    />
  );

  if (!label) return dot;

  return (
    <span className={cn("inline-flex items-center gap-2", className)}>
      {dot}
      <span className="text-sm">{label}</span>
    </span>
  );
}
