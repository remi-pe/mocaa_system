"use client";

import { useState } from "react";
import { ChevronDown, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface JsonViewerProps {
  data: unknown;
  defaultExpanded?: boolean;
  className?: string;
}

export function JsonViewer({
  data,
  defaultExpanded = true,
  className,
}: JsonViewerProps) {
  return (
    <div
      className={cn(
        "rounded-lg border bg-muted/20 p-3 font-mono text-xs leading-relaxed",
        className
      )}
    >
      <JsonNode value={data} defaultExpanded={defaultExpanded} isRoot />
    </div>
  );
}

interface JsonNodeProps {
  value: unknown;
  name?: string;
  defaultExpanded: boolean;
  isLast?: boolean;
  isRoot?: boolean;
}

function JsonNode({
  value,
  name,
  defaultExpanded,
  isLast = true,
  isRoot = false,
}: JsonNodeProps) {
  const [expanded, setExpanded] = useState(defaultExpanded);

  const keyLabel = name !== undefined && (
    <span className="text-purple-600 dark:text-purple-400">
      &quot;{name}&quot;
    </span>
  );

  if (value === null) {
    return (
      <div className="flex items-start gap-1">
        {keyLabel}
        {name !== undefined && <span className="text-muted-foreground">:</span>}
        <span className="text-red-600 dark:text-red-400">null</span>
        {!isLast && <span className="text-muted-foreground">,</span>}
      </div>
    );
  }

  if (typeof value === "boolean") {
    return (
      <div className="flex items-start gap-1">
        {keyLabel}
        {name !== undefined && <span className="text-muted-foreground">:</span>}
        <span className="text-red-600 dark:text-red-400">{String(value)}</span>
        {!isLast && <span className="text-muted-foreground">,</span>}
      </div>
    );
  }

  if (typeof value === "number") {
    return (
      <div className="flex items-start gap-1">
        {keyLabel}
        {name !== undefined && <span className="text-muted-foreground">:</span>}
        <span className="text-blue-600 dark:text-blue-400">{value}</span>
        {!isLast && <span className="text-muted-foreground">,</span>}
      </div>
    );
  }

  if (typeof value === "string") {
    return (
      <div className="flex items-start gap-1">
        {keyLabel}
        {name !== undefined && <span className="text-muted-foreground">:</span>}
        <span className="text-emerald-600 dark:text-emerald-400 break-all">
          &quot;{value}&quot;
        </span>
        {!isLast && <span className="text-muted-foreground">,</span>}
      </div>
    );
  }

  if (Array.isArray(value)) {
    const open = "[";
    const close = "]";
    const count = value.length;

    return (
      <div>
        <div className="flex items-start gap-1">
          <button
            type="button"
            onClick={() => setExpanded(!expanded)}
            className="flex items-center text-muted-foreground hover:text-foreground"
            aria-label={expanded ? "Collapse" : "Expand"}
          >
            {expanded ? (
              <ChevronDown className="h-3 w-3" />
            ) : (
              <ChevronRight className="h-3 w-3" />
            )}
          </button>
          {keyLabel}
          {name !== undefined && (
            <span className="text-muted-foreground">:</span>
          )}
          <span className="text-muted-foreground">{open}</span>
          {!expanded && (
            <>
              <span className="text-muted-foreground/70">
                {count} {count === 1 ? "item" : "items"}
              </span>
              <span className="text-muted-foreground">{close}</span>
              {!isLast && !isRoot && (
                <span className="text-muted-foreground">,</span>
              )}
            </>
          )}
        </div>
        {expanded && (
          <>
            <div className="ml-4 border-l border-border/50 pl-3">
              {value.map((v, i) => (
                <JsonNode
                  key={i}
                  value={v}
                  defaultExpanded={false}
                  isLast={i === value.length - 1}
                />
              ))}
            </div>
            <div className="flex items-start gap-1">
              <span className="text-muted-foreground">{close}</span>
              {!isLast && !isRoot && (
                <span className="text-muted-foreground">,</span>
              )}
            </div>
          </>
        )}
      </div>
    );
  }

  if (typeof value === "object") {
    const entries = Object.entries(value as Record<string, unknown>);
    const open = "{";
    const close = "}";
    const count = entries.length;

    return (
      <div>
        <div className="flex items-start gap-1">
          <button
            type="button"
            onClick={() => setExpanded(!expanded)}
            className="flex items-center text-muted-foreground hover:text-foreground"
            aria-label={expanded ? "Collapse" : "Expand"}
          >
            {expanded ? (
              <ChevronDown className="h-3 w-3" />
            ) : (
              <ChevronRight className="h-3 w-3" />
            )}
          </button>
          {keyLabel}
          {name !== undefined && (
            <span className="text-muted-foreground">:</span>
          )}
          <span className="text-muted-foreground">{open}</span>
          {!expanded && (
            <>
              <span className="text-muted-foreground/70">
                {count} {count === 1 ? "key" : "keys"}
              </span>
              <span className="text-muted-foreground">{close}</span>
              {!isLast && !isRoot && (
                <span className="text-muted-foreground">,</span>
              )}
            </>
          )}
        </div>
        {expanded && (
          <>
            <div className="ml-4 border-l border-border/50 pl-3">
              {entries.map(([k, v], i) => (
                <JsonNode
                  key={k}
                  name={k}
                  value={v}
                  defaultExpanded={false}
                  isLast={i === entries.length - 1}
                />
              ))}
            </div>
            <div className="flex items-start gap-1">
              <span className="text-muted-foreground">{close}</span>
              {!isLast && !isRoot && (
                <span className="text-muted-foreground">,</span>
              )}
            </div>
          </>
        )}
      </div>
    );
  }

  return null;
}
