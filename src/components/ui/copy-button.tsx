"use client";

import { useState } from "react";
import { Check, Copy } from "lucide-react";
import { cn } from "../../lib/utils";
import { Button } from "./button";

interface CopyButtonProps {
  value: string;
  className?: string;
  variant?: "icon" | "text";
}

export function CopyButton({
  value,
  className,
  variant = "icon",
}: CopyButtonProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(value);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch {
      // ignore
    }
  };

  if (variant === "text") {
    return (
      <Button
        variant="outline"
        size="xs"
        onClick={handleCopy}
        className={cn(className)}
      >
        {copied ? (
          <>
            <Check className="text-emerald-600" />
            Copied!
          </>
        ) : (
          <>
            <Copy />
            Copy
          </>
        )}
      </Button>
    );
  }

  return (
    <Button
      variant="ghost"
      size="icon-sm"
      onClick={handleCopy}
      aria-label={copied ? "Copied" : "Copy"}
      className={cn(className)}
    >
      {copied ? (
        <Check className="text-emerald-600" />
      ) : (
        <Copy />
      )}
    </Button>
  );
}
