"use client";

import * as React from "react";
import { Check, X } from "lucide-react";

import { cn } from "@/lib/utils";
import { Input } from "@/components/ui/input";

export interface PasswordRule {
  label: string;
  test: (value: string) => boolean;
}

const DEFAULT_RULES: PasswordRule[] = [
  { label: "At least 8 characters", test: (v) => v.length >= 8 },
  { label: "One uppercase letter", test: (v) => /[A-Z]/.test(v) },
  { label: "One number", test: (v) => /[0-9]/.test(v) },
  { label: "One special character", test: (v) => /[^A-Za-z0-9]/.test(v) },
];

export interface PasswordStrengthProps {
  value: string;
  onChange: (value: string) => void;
  rules?: PasswordRule[];
  placeholder?: string;
  className?: string;
}

const LABELS = ["Too weak", "Weak", "Fair", "Good", "Strong"];
const SEGMENT_COLORS = [
  "bg-red-500",
  "bg-orange-500",
  "bg-yellow-500",
  "bg-green-500",
];

export function PasswordStrength({
  value,
  onChange,
  rules = DEFAULT_RULES,
  placeholder = "Enter password",
  className,
}: PasswordStrengthProps) {
  const results = rules.map((r) => r.test(value));
  const score = results.filter(Boolean).length;
  const maxScore = rules.length;

  return (
    <div className={cn("w-full space-y-3", className)}>
      <Input
        type="password"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
      />

      <div className="flex gap-1">
        {Array.from({ length: maxScore }).map((_, i) => (
          <div
            key={i}
            className={cn(
              "h-1 flex-1 rounded-full transition-colors",
              i < score
                ? SEGMENT_COLORS[Math.min(score - 1, SEGMENT_COLORS.length - 1)]
                : "bg-muted"
            )}
          />
        ))}
      </div>

      <p className="text-xs text-muted-foreground">
        Strength:{" "}
        <span className="font-medium text-foreground">
          {value ? LABELS[score] : "Enter a password"}
        </span>
      </p>

      <ul className="space-y-1">
        {rules.map((rule, i) => {
          const passed = results[i];
          return (
            <li
              key={rule.label}
              className={cn(
                "flex items-center gap-1.5 text-xs",
                passed ? "text-foreground" : "text-muted-foreground"
              )}
            >
              {passed ? (
                <Check className="size-3.5 text-green-500" />
              ) : (
                <X className="size-3.5" />
              )}
              {rule.label}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
