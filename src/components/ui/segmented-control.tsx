"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

export type SegmentedControlOption = {
  value: string;
  label: React.ReactNode;
  icon?: React.ReactNode;
  disabled?: boolean;
};

interface SegmentedControlProps {
  options: SegmentedControlOption[];
  value?: string;
  defaultValue?: string;
  onValueChange?: (value: string) => void;
  size?: "sm" | "md" | "lg";
  fullWidth?: boolean;
  disabled?: boolean;
  name?: string;
  className?: string;
  "aria-label"?: string;
}

const SIZE_CLASSES: Record<NonNullable<SegmentedControlProps["size"]>, string> = {
  sm: "h-8 text-xs",
  md: "h-9 text-sm",
  lg: "h-10 text-sm",
};

function SegmentedControl({
  options,
  value,
  defaultValue,
  onValueChange,
  size = "md",
  fullWidth,
  disabled,
  name,
  className,
  "aria-label": ariaLabel,
}: SegmentedControlProps) {
  const isControlled = value !== undefined;
  const [internal, setInternal] = React.useState<string>(
    defaultValue ?? options[0]?.value ?? ""
  );
  const current = isControlled ? value! : internal;

  const select = (next: string) => {
    if (disabled) return;
    if (!isControlled) setInternal(next);
    onValueChange?.(next);
  };

  return (
    <div
      role="radiogroup"
      aria-label={ariaLabel}
      data-slot="segmented-control"
      className={cn(
        "inline-flex items-center rounded-lg border border-input bg-muted/40 p-0.5",
        fullWidth && "flex w-full",
        className
      )}
    >
      {options.map((opt) => {
        const checked = current === opt.value;
        const isDisabled = disabled || opt.disabled;
        return (
          <button
            key={opt.value}
            type="button"
            role="radio"
            aria-checked={checked}
            disabled={isDisabled}
            onClick={() => select(opt.value)}
            data-state={checked ? "checked" : "unchecked"}
            className={cn(
              "inline-flex items-center justify-center gap-1.5 rounded-md px-3 font-medium transition-colors outline-none",
              SIZE_CLASSES[size],
              fullWidth && "flex-1",
              "text-muted-foreground hover:text-foreground",
              "focus-visible:ring-3 focus-visible:ring-ring/50",
              "disabled:cursor-not-allowed disabled:opacity-50",
              "data-[state=checked]:bg-background data-[state=checked]:text-foreground data-[state=checked]:shadow-sm"
            )}
          >
            {opt.icon && <span className="shrink-0">{opt.icon}</span>}
            <span>{opt.label}</span>
          </button>
        );
      })}
      {name && <input type="hidden" name={name} value={current} />}
    </div>
  );
}

export { SegmentedControl };
