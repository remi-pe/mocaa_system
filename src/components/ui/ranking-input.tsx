"use client";

import * as React from "react";
import { ArrowDown, ArrowUp, GripVertical } from "lucide-react";
import { cn } from "../../lib/utils";

export type RankingItem = {
  value: string;
  label: string;
};

interface RankingInputProps {
  items: RankingItem[];
  value?: string[];
  defaultValue?: string[];
  onValueChange?: (value: string[]) => void;
  disabled?: boolean;
  className?: string;
}

function reorder<T>(list: T[], from: number, to: number): T[] {
  if (from === to) return list;
  const next = list.slice();
  const [moved] = next.splice(from, 1);
  next.splice(to, 0, moved);
  return next;
}

function RankingInput({
  items,
  value,
  defaultValue,
  onValueChange,
  disabled,
  className,
}: RankingInputProps) {
  const isControlled = value !== undefined;
  const initialOrder = React.useMemo(() => {
    const fallback = items.map((i) => i.value);
    const v = isControlled ? value : defaultValue;
    if (!v) return fallback;
    const known = new Set(fallback);
    const ordered = v.filter((x) => known.has(x));
    const remaining = fallback.filter((x) => !ordered.includes(x));
    return [...ordered, ...remaining];
  }, [items, isControlled, value, defaultValue]);

  const [internal, setInternal] = React.useState<string[]>(initialOrder);

  const order = React.useMemo(() => {
    if (!isControlled) return internal;
    if (!value) return items.map((i) => i.value);
    const known = new Set(items.map((i) => i.value));
    const ordered = value.filter((x) => known.has(x));
    const remaining = items.map((i) => i.value).filter((x) => !ordered.includes(x));
    return [...ordered, ...remaining];
  }, [isControlled, value, items, internal]);

  const labelFor = React.useMemo(() => {
    const map = new Map<string, string>();
    for (const i of items) map.set(i.value, i.label);
    return map;
  }, [items]);

  const commit = (next: string[]) => {
    if (!isControlled) setInternal(next);
    onValueChange?.(next);
  };

  const move = (from: number, to: number) => {
    if (disabled) return;
    if (to < 0 || to >= order.length) return;
    commit(reorder(order, from, to));
  };

  const dragIndex = React.useRef<number | null>(null);
  const [overIndex, setOverIndex] = React.useState<number | null>(null);

  return (
    <ol
      data-slot="ranking-input"
      className={cn("flex w-full flex-col gap-2", className)}
    >
      {order.map((val, idx) => (
        <li
          key={val}
          draggable={!disabled}
          onDragStart={(e) => {
            dragIndex.current = idx;
            e.dataTransfer.effectAllowed = "move";
            e.dataTransfer.setData("text/plain", String(idx));
          }}
          onDragOver={(e) => {
            e.preventDefault();
            e.dataTransfer.dropEffect = "move";
            if (overIndex !== idx) setOverIndex(idx);
          }}
          onDragLeave={() => {
            if (overIndex === idx) setOverIndex(null);
          }}
          onDrop={(e) => {
            e.preventDefault();
            const from = dragIndex.current ?? Number(e.dataTransfer.getData("text/plain"));
            dragIndex.current = null;
            setOverIndex(null);
            if (Number.isFinite(from)) move(from as number, idx);
          }}
          onDragEnd={() => {
            dragIndex.current = null;
            setOverIndex(null);
          }}
          data-state={overIndex === idx ? "drop-target" : undefined}
          className={cn(
            "flex items-center gap-3 rounded-lg border border-input bg-card p-3 transition-colors",
            !disabled && "cursor-grab active:cursor-grabbing",
            "data-[state=drop-target]:border-primary data-[state=drop-target]:bg-primary/5",
            disabled && "opacity-50"
          )}
        >
          <GripVertical className="size-4 shrink-0 text-muted-foreground" aria-hidden />
          <span className="flex size-6 shrink-0 items-center justify-center rounded-full bg-muted text-xs font-semibold tabular-nums">
            {idx + 1}
          </span>
          <span className="flex-1 text-sm">{labelFor.get(val) ?? val}</span>
          <div className="flex shrink-0 items-center gap-1">
            <button
              type="button"
              aria-label={`Move ${labelFor.get(val) ?? val} up`}
              onClick={() => move(idx, idx - 1)}
              disabled={disabled || idx === 0}
              className={cn(
                "flex size-7 items-center justify-center rounded-md border border-input bg-transparent transition-colors",
                "hover:bg-accent hover:text-accent-foreground",
                "focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50",
                "disabled:cursor-not-allowed disabled:opacity-40"
              )}
            >
              <ArrowUp className="size-3.5" />
            </button>
            <button
              type="button"
              aria-label={`Move ${labelFor.get(val) ?? val} down`}
              onClick={() => move(idx, idx + 1)}
              disabled={disabled || idx === order.length - 1}
              className={cn(
                "flex size-7 items-center justify-center rounded-md border border-input bg-transparent transition-colors",
                "hover:bg-accent hover:text-accent-foreground",
                "focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50",
                "disabled:cursor-not-allowed disabled:opacity-40"
              )}
            >
              <ArrowDown className="size-3.5" />
            </button>
          </div>
        </li>
      ))}
    </ol>
  );
}

export { RankingInput };
