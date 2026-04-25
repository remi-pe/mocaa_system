"use client";

import * as React from "react";
import { Star } from "lucide-react";

import { cn } from "../../lib/utils";

export interface RatingProps {
  value?: number;
  onValueChange?: (value: number) => void;
  max?: number;
  readOnly?: boolean;
  size?: "sm" | "default" | "lg";
  className?: string;
}

const SIZE_MAP = {
  sm: "size-4",
  default: "size-5",
  lg: "size-7",
};

export function Rating({
  value,
  onValueChange,
  max = 5,
  readOnly = false,
  size = "default",
  className,
}: RatingProps) {
  const [internal, setInternal] = React.useState<number>(value ?? 0);
  const [hover, setHover] = React.useState<number | null>(null);

  const current = value !== undefined ? value : internal;
  const display = hover !== null ? hover : current;
  const iconSize = SIZE_MAP[size];

  const setValue = (next: number) => {
    if (readOnly) return;
    if (value === undefined) setInternal(next);
    onValueChange?.(next);
  };

  return (
    <div
      className={cn(
        "inline-flex items-center gap-0.5",
        readOnly && "pointer-events-none",
        className
      )}
      onMouseLeave={() => setHover(null)}
      role={readOnly ? "img" : "radiogroup"}
      aria-label={`Rating: ${current} out of ${max}`}
    >
      {Array.from({ length: max }).map((_, i) => {
        const index = i + 1;
        const fullyFilled = display >= index;
        const partial =
          !fullyFilled && display > i && display < index
            ? (display - i) * 100
            : 0;

        return (
          <button
            key={i}
            type="button"
            disabled={readOnly}
            onMouseEnter={() => !readOnly && setHover(index)}
            onClick={() => setValue(index)}
            aria-label={`${index} star${index === 1 ? "" : "s"}`}
            className={cn(
              "relative outline-none transition-transform",
              !readOnly && "cursor-pointer hover:scale-110",
              readOnly && "cursor-default"
            )}
          >
            <Star className={cn(iconSize, "text-muted-foreground/40")} />
            {(fullyFilled || partial > 0) && (
              <span
                className="absolute inset-0 overflow-hidden"
                style={{ width: fullyFilled ? "100%" : `${partial}%` }}
              >
                <Star
                  className={cn(iconSize, "fill-yellow-500 text-yellow-500")}
                />
              </span>
            )}
          </button>
        );
      })}
    </div>
  );
}
