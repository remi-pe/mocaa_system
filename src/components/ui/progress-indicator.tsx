"use client";

import * as React from "react";
import { cn } from "../../lib/utils";

interface ProgressIndicatorProps {
  current: number;
  total: number;
  label?: string;
  format?: (current: number, total: number) => string;
  showBar?: boolean;
  className?: string;
}

function ProgressIndicator({
  current,
  total,
  label,
  format,
  showBar = true,
  className,
}: ProgressIndicatorProps) {
  const safeTotal = Math.max(total, 1);
  const safeCurrent = Math.min(Math.max(current, 0), safeTotal);
  const pct = (safeCurrent / safeTotal) * 100;
  const counter = format
    ? format(safeCurrent, safeTotal)
    : `Question ${safeCurrent} of ${safeTotal}`;

  return (
    <div data-slot="progress-indicator" className={cn("w-full", className)}>
      <div className="mb-2 flex items-center justify-between text-sm">
        <span className="font-medium">{label ?? counter}</span>
        {label && (
          <span className="text-muted-foreground tabular-nums">
            {safeCurrent}/{safeTotal}
          </span>
        )}
      </div>
      {showBar && (
        <div
          role="progressbar"
          aria-valuemin={0}
          aria-valuemax={safeTotal}
          aria-valuenow={safeCurrent}
          className="relative h-1.5 w-full overflow-hidden rounded-full bg-muted"
        >
          <div
            className="h-full bg-primary transition-all duration-300"
            style={{ width: `${pct}%` }}
          />
        </div>
      )}
    </div>
  );
}

export { ProgressIndicator };
