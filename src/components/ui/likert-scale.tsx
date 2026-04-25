"use client";

import * as React from "react";
import { cn } from "../../lib/utils";

export type LikertOption = {
  value: string;
  label: string;
};

export const LIKERT_5: LikertOption[] = [
  { value: "1", label: "Strongly disagree" },
  { value: "2", label: "Disagree" },
  { value: "3", label: "Neutral" },
  { value: "4", label: "Agree" },
  { value: "5", label: "Strongly agree" },
];

export const LIKERT_7: LikertOption[] = [
  { value: "1", label: "Strongly disagree" },
  { value: "2", label: "Disagree" },
  { value: "3", label: "Somewhat disagree" },
  { value: "4", label: "Neutral" },
  { value: "5", label: "Somewhat agree" },
  { value: "6", label: "Agree" },
  { value: "7", label: "Strongly agree" },
];

interface LikertScaleProps {
  options?: LikertOption[];
  value?: string;
  defaultValue?: string;
  onValueChange?: (value: string) => void;
  name?: string;
  disabled?: boolean;
  className?: string;
}

function LikertScale({
  options = LIKERT_5,
  value,
  defaultValue,
  onValueChange,
  name,
  disabled,
  className,
}: LikertScaleProps) {
  const [internal, setInternal] = React.useState(defaultValue ?? "");
  const isControlled = value !== undefined;
  const current = isControlled ? value : internal;

  const select = (next: string) => {
    if (disabled) return;
    if (!isControlled) setInternal(next);
    onValueChange?.(next);
  };

  return (
    <div
      role="radiogroup"
      data-slot="likert-scale"
      className={cn("w-full", className)}
    >
      <div className="grid gap-1.5" style={{ gridTemplateColumns: `repeat(${options.length}, minmax(0, 1fr))` }}>
        {options.map((opt) => {
          const checked = current === opt.value;
          return (
            <button
              key={opt.value}
              type="button"
              role="radio"
              aria-checked={checked}
              aria-label={opt.label}
              disabled={disabled}
              onClick={() => select(opt.value)}
              data-state={checked ? "checked" : "unchecked"}
              className={cn(
                "flex flex-col items-center gap-1.5 rounded-lg border border-input bg-transparent px-2 py-3 text-xs transition-colors outline-none",
                "hover:bg-accent hover:text-accent-foreground",
                "focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50",
                "disabled:cursor-not-allowed disabled:opacity-50",
                "data-[state=checked]:border-primary data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground"
              )}
            >
              <span className="text-sm font-semibold tabular-nums">{opt.value}</span>
              <span className="line-clamp-2 text-center leading-tight opacity-80">
                {opt.label}
              </span>
            </button>
          );
        })}
      </div>
      {name && <input type="hidden" name={name} value={current} />}
    </div>
  );
}

export { LikertScale };
