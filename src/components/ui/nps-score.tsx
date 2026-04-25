"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

interface NPSScoreProps {
  value?: number;
  defaultValue?: number;
  onValueChange?: (value: number) => void;
  name?: string;
  disabled?: boolean;
  showLabels?: boolean;
  className?: string;
}

function bucketFor(score: number): "detractor" | "passive" | "promoter" {
  if (score <= 6) return "detractor";
  if (score <= 8) return "passive";
  return "promoter";
}

function NPSScore({
  value,
  defaultValue,
  onValueChange,
  name,
  disabled,
  showLabels = true,
  className,
}: NPSScoreProps) {
  const [internal, setInternal] = React.useState<number | undefined>(defaultValue);
  const isControlled = value !== undefined;
  const current = isControlled ? value : internal;

  const select = (next: number) => {
    if (disabled) return;
    if (!isControlled) setInternal(next);
    onValueChange?.(next);
  };

  const scores = Array.from({ length: 11 }, (_, i) => i);

  return (
    <div data-slot="nps-score" className={cn("w-full", className)}>
      <div
        role="radiogroup"
        className="grid gap-1.5"
        style={{ gridTemplateColumns: "repeat(11, minmax(0, 1fr))" }}
      >
        {scores.map((s) => {
          const bucket = bucketFor(s);
          const checked = current === s;
          return (
            <button
              key={s}
              type="button"
              role="radio"
              aria-checked={checked}
              aria-label={`Score ${s}`}
              disabled={disabled}
              onClick={() => select(s)}
              data-bucket={bucket}
              data-state={checked ? "checked" : "unchecked"}
              className={cn(
                "flex h-10 items-center justify-center rounded-lg border border-input bg-transparent text-sm font-semibold tabular-nums transition-colors outline-none",
                "hover:bg-accent hover:text-accent-foreground",
                "focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50",
                "disabled:cursor-not-allowed disabled:opacity-50",
                "data-[state=checked]:data-[bucket=detractor]:border-destructive data-[state=checked]:data-[bucket=detractor]:bg-destructive data-[state=checked]:data-[bucket=detractor]:text-white",
                "data-[state=checked]:data-[bucket=passive]:border-foreground data-[state=checked]:data-[bucket=passive]:bg-foreground data-[state=checked]:data-[bucket=passive]:text-background",
                "data-[state=checked]:data-[bucket=promoter]:border-primary data-[state=checked]:data-[bucket=promoter]:bg-primary data-[state=checked]:data-[bucket=promoter]:text-primary-foreground"
              )}
            >
              {s}
            </button>
          );
        })}
      </div>
      {showLabels && (
        <div className="mt-2 flex items-center justify-between text-xs text-muted-foreground">
          <span>Not at all likely</span>
          <span>Extremely likely</span>
        </div>
      )}
      {name && <input type="hidden" name={name} value={current ?? ""} />}
    </div>
  );
}

export { NPSScore, bucketFor as npsBucketFor };
