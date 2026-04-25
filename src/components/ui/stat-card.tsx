import { TrendingUp, TrendingDown } from "lucide-react";
import { cn } from "../../lib/utils";
import { Card, CardContent } from "./card";

interface StatCardProps {
  label: string;
  value: string | number;
  delta?: number;
  helperText?: string;
  icon?: React.ReactNode;
  className?: string;
}

export function StatCard({
  label,
  value,
  delta,
  helperText,
  icon,
  className,
}: StatCardProps) {
  const isPositive = typeof delta === "number" && delta >= 0;
  const DeltaIcon = isPositive ? TrendingUp : TrendingDown;

  return (
    <Card className={cn("w-full", className)}>
      <CardContent>
        <div className="flex items-start justify-between gap-2">
          <span className="text-xs font-medium text-muted-foreground">
            {label}
          </span>
          {icon && (
            <span className="text-muted-foreground [&_svg]:size-4">
              {icon}
            </span>
          )}
        </div>
        <div className="mt-2 flex items-baseline gap-2">
          <span className="text-2xl font-bold tracking-tight">{value}</span>
          {typeof delta === "number" && (
            <span
              className={cn(
                "inline-flex items-center gap-0.5 text-xs font-medium",
                isPositive ? "text-emerald-600" : "text-red-600"
              )}
            >
              <DeltaIcon className="size-3" />
              {isPositive ? "+" : ""}
              {delta}%
            </span>
          )}
        </div>
        {helperText && (
          <p className="mt-1 text-xs text-muted-foreground">{helperText}</p>
        )}
      </CardContent>
    </Card>
  );
}
