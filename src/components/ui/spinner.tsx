import { Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";

interface SpinnerProps {
  size?: "sm" | "default" | "lg";
  className?: string;
}

const sizeMap = {
  sm: "h-3 w-3",
  default: "h-4 w-4",
  lg: "h-6 w-6",
} as const;

export function Spinner({ size = "default", className }: SpinnerProps) {
  return (
    <Loader2
      role="status"
      aria-label="Loading"
      className={cn("animate-spin text-muted-foreground", sizeMap[size], className)}
    />
  );
}
