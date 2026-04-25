"use client";

import * as React from "react";
import { Check } from "lucide-react";
import { cn } from "@/lib/utils";

type BaseProps = {
  title: string;
  description?: string;
  icon?: React.ReactNode;
  disabled?: boolean;
  className?: string;
  children?: React.ReactNode;
};

type SingleProps = BaseProps & {
  type?: "single";
  checked?: boolean;
  defaultChecked?: boolean;
  onCheckedChange?: (checked: boolean) => void;
  name?: string;
  value?: string;
};

interface ChoiceCardGroupProps {
  type?: "single" | "multiple";
  value?: string | string[];
  defaultValue?: string | string[];
  onValueChange?: (value: string | string[]) => void;
  name?: string;
  disabled?: boolean;
  className?: string;
  children: React.ReactNode;
}

interface ChoiceCardItemProps {
  value: string;
  title: string;
  description?: string;
  icon?: React.ReactNode;
  disabled?: boolean;
  className?: string;
  children?: React.ReactNode;
}

type GroupContextValue = {
  type: "single" | "multiple";
  selected: Set<string>;
  toggle: (value: string) => void;
  disabled?: boolean;
  name?: string;
};

const ChoiceCardGroupContext = React.createContext<GroupContextValue | null>(null);

function ChoiceCardGroup({
  type = "single",
  value,
  defaultValue,
  onValueChange,
  name,
  disabled,
  className,
  children,
}: ChoiceCardGroupProps) {
  const isControlled = value !== undefined;
  const initial = React.useMemo(() => {
    const v = isControlled ? value : defaultValue;
    if (v === undefined) return new Set<string>();
    return new Set<string>(Array.isArray(v) ? v : v ? [v] : []);
  }, [isControlled, value, defaultValue]);

  const [internal, setInternal] = React.useState<Set<string>>(initial);

  const selected = React.useMemo(() => {
    if (!isControlled) return internal;
    if (value === undefined) return new Set<string>();
    return new Set<string>(Array.isArray(value) ? value : value ? [value] : []);
  }, [isControlled, value, internal]);

  const toggle = React.useCallback(
    (val: string) => {
      const next = new Set(selected);
      if (type === "single") {
        next.clear();
        next.add(val);
      } else {
        if (next.has(val)) next.delete(val);
        else next.add(val);
      }
      if (!isControlled) setInternal(next);
      const out = type === "single" ? (next.values().next().value ?? "") : Array.from(next);
      onValueChange?.(out as string | string[]);
    },
    [selected, type, isControlled, onValueChange]
  );

  return (
    <ChoiceCardGroupContext.Provider value={{ type, selected, toggle, disabled, name }}>
      <div
        role={type === "single" ? "radiogroup" : "group"}
        data-slot="choice-card-group"
        className={cn("grid gap-3", className)}
      >
        {children}
      </div>
    </ChoiceCardGroupContext.Provider>
  );
}

function ChoiceCardItem({
  value,
  title,
  description,
  icon,
  disabled,
  className,
  children,
}: ChoiceCardItemProps) {
  const ctx = React.useContext(ChoiceCardGroupContext);
  if (!ctx) {
    throw new Error("ChoiceCardItem must be used inside ChoiceCardGroup");
  }
  const checked = ctx.selected.has(value);
  const isDisabled = disabled || ctx.disabled;

  return (
    <button
      type="button"
      role={ctx.type === "single" ? "radio" : "checkbox"}
      aria-checked={checked}
      disabled={isDisabled}
      onClick={() => ctx.toggle(value)}
      data-state={checked ? "checked" : "unchecked"}
      data-slot="choice-card-item"
      className={cn(
        "group/choice-card relative flex w-full items-start gap-3 rounded-lg border border-input bg-card p-4 text-left transition-colors outline-none",
        "hover:bg-accent/40",
        "focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50",
        "disabled:cursor-not-allowed disabled:opacity-50",
        "data-[state=checked]:border-primary data-[state=checked]:bg-primary/5 data-[state=checked]:ring-1 data-[state=checked]:ring-primary",
        className
      )}
    >
      {icon && (
        <div className="flex size-9 shrink-0 items-center justify-center rounded-md bg-muted text-foreground group-data-[state=checked]/choice-card:bg-primary/10 group-data-[state=checked]/choice-card:text-primary">
          {icon}
        </div>
      )}
      <div className="flex-1">
        <div className="text-sm font-semibold">{title}</div>
        {description && (
          <div className="mt-0.5 text-sm text-muted-foreground">{description}</div>
        )}
        {children && <div className="mt-2">{children}</div>}
      </div>
      <div
        aria-hidden
        className={cn(
          "mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full border border-input transition-colors",
          ctx.type === "single" ? "rounded-full" : "rounded-md",
          "group-data-[state=checked]/choice-card:border-primary group-data-[state=checked]/choice-card:bg-primary group-data-[state=checked]/choice-card:text-primary-foreground"
        )}
      >
        {checked && (
          ctx.type === "multiple" ? (
            <Check className="size-3.5" />
          ) : (
            <span className="size-2 rounded-full bg-primary-foreground" />
          )
        )}
      </div>
      {ctx.name && (
        <input
          type={ctx.type === "single" ? "radio" : "checkbox"}
          name={ctx.name}
          value={value}
          checked={checked}
          readOnly
          tabIndex={-1}
          aria-hidden
          className="sr-only"
        />
      )}
    </button>
  );
}

function ChoiceCard({
  type = "single",
  checked,
  defaultChecked,
  onCheckedChange,
  name,
  value,
  title,
  description,
  icon,
  disabled,
  className,
  children,
}: SingleProps) {
  const [internal, setInternal] = React.useState(!!defaultChecked);
  const isControlled = checked !== undefined;
  const current = isControlled ? !!checked : internal;
  void type;

  const toggle = () => {
    if (disabled) return;
    if (!isControlled) setInternal(!current);
    onCheckedChange?.(!current);
  };

  return (
    <button
      type="button"
      role="checkbox"
      aria-checked={current}
      disabled={disabled}
      onClick={toggle}
      data-state={current ? "checked" : "unchecked"}
      data-slot="choice-card"
      className={cn(
        "group/choice-card relative flex w-full items-start gap-3 rounded-lg border border-input bg-card p-4 text-left transition-colors outline-none",
        "hover:bg-accent/40",
        "focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50",
        "disabled:cursor-not-allowed disabled:opacity-50",
        "data-[state=checked]:border-primary data-[state=checked]:bg-primary/5 data-[state=checked]:ring-1 data-[state=checked]:ring-primary",
        className
      )}
    >
      {icon && (
        <div className="flex size-9 shrink-0 items-center justify-center rounded-md bg-muted text-foreground group-data-[state=checked]/choice-card:bg-primary/10 group-data-[state=checked]/choice-card:text-primary">
          {icon}
        </div>
      )}
      <div className="flex-1">
        <div className="text-sm font-semibold">{title}</div>
        {description && (
          <div className="mt-0.5 text-sm text-muted-foreground">{description}</div>
        )}
        {children && <div className="mt-2">{children}</div>}
      </div>
      <div
        aria-hidden
        className={cn(
          "mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-md border border-input transition-colors",
          "group-data-[state=checked]/choice-card:border-primary group-data-[state=checked]/choice-card:bg-primary group-data-[state=checked]/choice-card:text-primary-foreground"
        )}
      >
        {current && <Check className="size-3.5" />}
      </div>
      {name && (
        <input
          type="checkbox"
          name={name}
          value={value ?? "on"}
          checked={current}
          readOnly
          tabIndex={-1}
          aria-hidden
          className="sr-only"
        />
      )}
    </button>
  );
}

export { ChoiceCard, ChoiceCardGroup, ChoiceCardItem };
