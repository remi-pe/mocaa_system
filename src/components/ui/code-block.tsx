"use client";

import { CopyButton } from "@/components/ui/copy-button";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

interface CodeBlockProps {
  code: string;
  language?: string;
  showLineNumbers?: boolean;
  fileName?: string;
  className?: string;
}

export function CodeBlock({
  code,
  language,
  showLineNumbers = false,
  fileName,
  className,
}: CodeBlockProps) {
  const lines = code.split("\n");
  const showHeader = Boolean(fileName || language);

  return (
    <div
      className={cn(
        "overflow-hidden rounded-lg border bg-muted/30",
        className
      )}
    >
      {showHeader && (
        <div className="flex items-center justify-between gap-2 border-b bg-muted/50 px-3 py-1.5">
          <div className="flex items-center gap-2 min-w-0">
            {fileName && (
              <span className="truncate font-mono text-xs text-foreground">
                {fileName}
              </span>
            )}
            {language && (
              <Badge variant="secondary" className="text-[10px] uppercase">
                {language}
              </Badge>
            )}
          </div>
          <CopyButton value={code} />
        </div>
      )}
      <div className="relative">
        {!showHeader && (
          <div className="absolute right-1.5 top-1.5 z-10">
            <CopyButton value={code} />
          </div>
        )}
        <pre className="overflow-x-auto p-4 text-xs leading-relaxed">
          <code className="font-mono">
            {showLineNumbers ? (
              <div className="grid grid-cols-[auto_1fr] gap-x-4">
                {lines.map((line, i) => (
                  <span key={i} className="contents">
                    <span className="select-none text-right text-muted-foreground/60 tabular-nums">
                      {i + 1}
                    </span>
                    <span>{line || " "}</span>
                  </span>
                ))}
              </div>
            ) : (
              code
            )}
          </code>
        </pre>
      </div>
    </div>
  );
}
