"use client";

import * as React from "react";
import { Minus, Plus } from "lucide-react";

import { cn } from "../../lib/utils";

export interface NumberInputProps {
  value?: number;
  onValueChange?: (value: number) => void;
  min?: number;
  max?: number;
  step?: number;
  disabled?: boolean;
  className?: string;
}

export function NumberInput({
  value,
  onValueChange,
  min,
  max,
  step = 1,
  disabled,
  className,
}: NumberInputProps) {
  const [internal, setInternal] = React.useState<number>(value ?? 0);
  const current = value !== undefined ? value : internal;

  const setValue = (next: number) => {
    let clamped = next;
    if (min !== undefined) clamped = Math.max(min, clamped);
    if (max !== undefined) clamped = Math.min(max, clamped);
    if (value === undefined) setInternal(clamped);
    onValueChange?.(clamped);
  };

  const atMin = min !== undefined && current <= min;
  const atMax = max !== undefined && current >= max;

  return (
    <div
      className={cn(
        "inline-flex h-8 items-center rounded-lg border border-input bg-transparent text-sm transition-colors focus-within:border-ring focus-within:ring-3 focus-within:ring-ring/50 dark:bg-input/30",
        disabled && "pointer-events-none opacity-50",
        className
      )}
    >
      <button
        type="button"
        onClick={() => setValue(current - step)}
        disabled={disabled || atMin}
        aria-label="Decrement"
        className="flex h-full w-8 items-center justify-center rounded-l-lg text-muted-foreground outline-none hover:bg-muted hover:text-foreground disabled:pointer-events-none disabled:opacity-50"
      >
        <Minus className="size-3.5" />
      </button>
      <input
        type="number"
        value={Number.isNaN(current) ? "" : current}
        onChange={(e) => {
          const v = e.target.value === "" ? 0 : Number(e.target.value);
          if (!Number.isNaN(v)) setValue(v);
        }}
        disabled={disabled}
        className="h-full w-16 bg-transparent px-2 text-center text-sm outline-none [appearance:textfield] [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
      />
      <button
        type="button"
        onClick={() => setValue(current + step)}
        disabled={disabled || atMax}
        aria-label="Increment"
        className="flex h-full w-8 items-center justify-center rounded-r-lg text-muted-foreground outline-none hover:bg-muted hover:text-foreground disabled:pointer-events-none disabled:opacity-50"
      >
        <Plus className="size-3.5" />
      </button>
    </div>
  );
}
