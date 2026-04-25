"use client";

import * as React from "react";

import { cn } from "../../lib/utils";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./select";

export interface PhoneCountry {
  code: string;
  name: string;
  dial: string;
  flag: string;
}

export const PHONE_COUNTRIES: PhoneCountry[] = [
  { code: "US", name: "United States", dial: "+1", flag: "🇺🇸" },
  { code: "GB", name: "United Kingdom", dial: "+44", flag: "🇬🇧" },
  { code: "FR", name: "France", dial: "+33", flag: "🇫🇷" },
  { code: "DE", name: "Germany", dial: "+49", flag: "🇩🇪" },
  { code: "ES", name: "Spain", dial: "+34", flag: "🇪🇸" },
  { code: "IT", name: "Italy", dial: "+39", flag: "🇮🇹" },
  { code: "JP", name: "Japan", dial: "+81", flag: "🇯🇵" },
  { code: "CN", name: "China", dial: "+86", flag: "🇨🇳" },
  { code: "IN", name: "India", dial: "+91", flag: "🇮🇳" },
  { code: "BR", name: "Brazil", dial: "+55", flag: "🇧🇷" },
];

export interface PhoneInputProps {
  value?: string;
  onValueChange?: (value: string) => void;
  defaultCountry?: string;
  placeholder?: string;
  className?: string;
  disabled?: boolean;
}

export function PhoneInput({
  value,
  onValueChange,
  defaultCountry = "US",
  placeholder = "Phone number",
  className,
  disabled,
}: PhoneInputProps) {
  const [country, setCountry] = React.useState<string>(defaultCountry);
  const [internal, setInternal] = React.useState<string>(value ?? "");

  const number = value !== undefined ? value : internal;
  const selected =
    PHONE_COUNTRIES.find((c) => c.code === country) ?? PHONE_COUNTRIES[0];

  const update = (next: string) => {
    if (value === undefined) setInternal(next);
    onValueChange?.(next);
  };

  return (
    <div
      className={cn(
        "inline-flex h-8 items-center rounded-lg border border-input bg-transparent text-sm transition-colors focus-within:border-ring focus-within:ring-3 focus-within:ring-ring/50 dark:bg-input/30",
        disabled && "pointer-events-none opacity-50",
        className
      )}
    >
      <Select value={country} onValueChange={(v) => setCountry(v as string)}>
        <SelectTrigger className="h-full gap-1 rounded-r-none border-0 border-r border-input bg-transparent px-2 shadow-none focus-visible:ring-0 dark:bg-transparent">
          <SelectValue>
            <span className="mr-1">{selected.flag}</span>
            <span className="text-muted-foreground">{selected.dial}</span>
          </SelectValue>
        </SelectTrigger>
        <SelectContent alignItemWithTrigger={false}>
          {PHONE_COUNTRIES.map((c) => (
            <SelectItem key={c.code} value={c.code}>
              <span>{c.flag}</span>
              <span>{c.name}</span>
              <span className="ml-auto text-muted-foreground">{c.dial}</span>
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
      <input
        type="tel"
        value={number}
        onChange={(e) => update(e.target.value)}
        placeholder={placeholder}
        disabled={disabled}
        className="h-full flex-1 bg-transparent px-2.5 text-sm outline-none placeholder:text-muted-foreground"
      />
    </div>
  );
}
