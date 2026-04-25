"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

interface AutoExpandingTextareaProps
  extends Omit<React.ComponentProps<"textarea">, "value" | "defaultValue" | "onChange"> {
  value?: string;
  defaultValue?: string;
  onChange?: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
  onValueChange?: (value: string) => void;
  maxLength?: number;
  showCount?: boolean;
  minRows?: number;
  maxRows?: number;
}

function AutoExpandingTextarea({
  className,
  value,
  defaultValue,
  onChange,
  onValueChange,
  maxLength,
  showCount = true,
  minRows = 3,
  maxRows = 12,
  ...props
}: AutoExpandingTextareaProps) {
  const isControlled = value !== undefined;
  const [internal, setInternal] = React.useState(defaultValue ?? "");
  const current = isControlled ? value! : internal;

  const ref = React.useRef<HTMLTextAreaElement | null>(null);

  React.useLayoutEffect(() => {
    const el = ref.current;
    if (!el) return;
    el.style.height = "auto";
    const styles = window.getComputedStyle(el);
    const lineHeight = parseFloat(styles.lineHeight) || 20;
    const paddingY = parseFloat(styles.paddingTop) + parseFloat(styles.paddingBottom);
    const borderY = parseFloat(styles.borderTopWidth) + parseFloat(styles.borderBottomWidth);
    const min = lineHeight * minRows + paddingY + borderY;
    const max = lineHeight * maxRows + paddingY + borderY;
    const next = Math.min(Math.max(el.scrollHeight, min), max);
    el.style.height = `${next}px`;
    el.style.overflowY = el.scrollHeight > max ? "auto" : "hidden";
  }, [current, minRows, maxRows]);

  const handle = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    let next = e.target.value;
    if (maxLength !== undefined && next.length > maxLength) {
      next = next.slice(0, maxLength);
    }
    if (!isControlled) setInternal(next);
    if (next !== e.target.value) {
      e.target.value = next;
    }
    onChange?.(e);
    onValueChange?.(next);
  };

  const count = current.length;
  const overLimit = maxLength !== undefined && count >= maxLength;

  return (
    <div data-slot="auto-expanding-textarea" className="flex w-full flex-col gap-1">
      <textarea
        ref={ref}
        value={current}
        onChange={handle}
        rows={minRows}
        className={cn(
          "flex w-full resize-none rounded-lg border border-input bg-transparent px-2.5 py-2 text-base transition-colors outline-none placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 disabled:cursor-not-allowed disabled:bg-input/50 disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 md:text-sm dark:bg-input/30 dark:disabled:bg-input/80 dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40",
          className
        )}
        {...props}
      />
      {showCount && (
        <div
          className={cn(
            "self-end text-xs tabular-nums text-muted-foreground",
            overLimit && "text-destructive"
          )}
        >
          {maxLength !== undefined ? `${count} / ${maxLength}` : count}
        </div>
      )}
    </div>
  );
}

export { AutoExpandingTextarea };
