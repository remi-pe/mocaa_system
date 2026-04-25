"use client";

import { useState } from "react";
import { cn } from "../../lib/utils";

export type LogLevel = "info" | "warn" | "error" | "debug";

export interface LogEntry {
  timestamp: string;
  level: LogLevel;
  message: string;
}

interface LogViewerProps {
  logs: LogEntry[];
  className?: string;
}

const levelStyles: Record<LogLevel, string> = {
  info: "bg-blue-500/15 text-blue-600 dark:text-blue-400 border-blue-500/30",
  warn: "bg-amber-500/15 text-amber-600 dark:text-amber-400 border-amber-500/30",
  error: "bg-red-500/15 text-red-600 dark:text-red-400 border-red-500/30",
  debug: "bg-muted text-muted-foreground border-border",
};

const LEVELS: LogLevel[] = ["info", "warn", "error", "debug"];

export function LogViewer({ logs, className }: LogViewerProps) {
  const [enabled, setEnabled] = useState<Record<LogLevel, boolean>>({
    info: true,
    warn: true,
    error: true,
    debug: true,
  });

  const toggle = (level: LogLevel) =>
    setEnabled((prev) => ({ ...prev, [level]: !prev[level] }));

  const filtered = logs.filter((log) => enabled[log.level]);

  return (
    <div
      className={cn(
        "overflow-hidden rounded-lg border bg-zinc-950 text-zinc-100",
        className
      )}
    >
      <div className="flex flex-wrap items-center gap-1.5 border-b border-zinc-800 bg-zinc-900/70 px-3 py-2">
        <span className="mr-1 text-[11px] uppercase tracking-wide text-zinc-400">
          Filter:
        </span>
        {LEVELS.map((level) => (
          <button
            key={level}
            type="button"
            onClick={() => toggle(level)}
            className={cn(
              "rounded-md border px-2 py-0.5 text-[11px] font-medium uppercase transition-opacity",
              levelStyles[level],
              !enabled[level] && "opacity-40"
            )}
          >
            {level}
          </button>
        ))}
      </div>
      <div className="max-h-80 overflow-auto p-2 font-mono text-xs">
        {filtered.length === 0 ? (
          <div className="p-4 text-center text-zinc-500">No logs.</div>
        ) : (
          filtered.map((log, i) => (
            <div
              key={i}
              className="flex items-start gap-2 px-1 py-0.5 leading-5"
            >
              <span className="shrink-0 text-zinc-500 tabular-nums">
                {log.timestamp}
              </span>
              <span
                className={cn(
                  "shrink-0 rounded border px-1.5 text-[10px] font-semibold uppercase",
                  levelStyles[log.level]
                )}
              >
                {log.level}
              </span>
              <span className="break-all text-zinc-200">{log.message}</span>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
