"use client";

import * as React from "react";
import { cn } from "../../lib/utils";
import { Sun, Moon } from "lucide-react";

interface ThemeSwitchProps {
  checked?: boolean;
  onCheckedChange?: (checked: boolean) => void;
  className?: string;
}

function ThemeSwitch({ checked, onCheckedChange, className }: ThemeSwitchProps) {
  return (
    <button
      role="switch"
      aria-checked={checked}
      aria-label="Toggle dark mode"
      onClick={() => onCheckedChange?.(!checked)}
      className={cn(
        "relative inline-flex h-7 w-12 shrink-0 items-center rounded-full border border-transparent transition-colors outline-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50",
        checked ? "bg-primary" : "bg-input dark:bg-input/80",
        className
      )}
    >
      <span
        className={cn(
          "pointer-events-none flex h-5.5 w-5.5 items-center justify-center rounded-full bg-background shadow-sm transition-transform dark:bg-foreground",
          checked
            ? "translate-x-[calc(100%-1px)]"
            : "translate-x-0.5"
        )}
      >
        {checked ? (
          <Moon className="h-3 w-3 text-background" />
        ) : (
          <Sun className="h-3 w-3 text-foreground dark:text-background" />
        )}
      </span>
    </button>
  );
}

export { ThemeSwitch };
