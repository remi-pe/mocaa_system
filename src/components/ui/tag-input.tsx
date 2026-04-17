"use client";

import * as React from "react";
import { X } from "lucide-react";

import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";

export interface TagInputProps {
  value?: string[];
  onValueChange?: (value: string[]) => void;
  placeholder?: string;
  maxTags?: number;
  className?: string;
  disabled?: boolean;
}

export function TagInput({
  value,
  onValueChange,
  placeholder = "Add tag...",
  maxTags,
  className,
  disabled,
}: TagInputProps) {
  const [internal, setInternal] = React.useState<string[]>(value ?? []);
  const [text, setText] = React.useState("");
  const inputRef = React.useRef<HTMLInputElement>(null);

  const tags = value ?? internal;

  const setTags = (next: string[]) => {
    if (value === undefined) setInternal(next);
    onValueChange?.(next);
  };

  const addTag = (raw: string) => {
    const trimmed = raw.trim();
    if (!trimmed) return;
    if (tags.includes(trimmed)) return;
    if (maxTags !== undefined && tags.length >= maxTags) return;
    setTags([...tags, trimmed]);
    setText("");
  };

  const removeTag = (tag: string) => {
    setTags(tags.filter((t) => t !== tag));
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" || e.key === ",") {
      e.preventDefault();
      addTag(text);
    } else if (e.key === "Backspace" && text === "" && tags.length > 0) {
      e.preventDefault();
      setTags(tags.slice(0, -1));
    }
  };

  const atLimit = maxTags !== undefined && tags.length >= maxTags;

  return (
    <div
      className={cn(
        "flex min-h-8 w-full flex-wrap items-center gap-1 rounded-lg border border-input bg-transparent px-2 py-1 text-sm transition-colors focus-within:border-ring focus-within:ring-3 focus-within:ring-ring/50 dark:bg-input/30",
        disabled && "pointer-events-none opacity-50",
        className
      )}
      onClick={() => inputRef.current?.focus()}
    >
      {tags.map((tag) => (
        <Badge key={tag} variant="secondary" className="font-normal">
          {tag}
          <button
            type="button"
            className="ml-1 rounded-full outline-none hover:bg-foreground/10"
            onClick={(e) => {
              e.stopPropagation();
              removeTag(tag);
            }}
            aria-label={`Remove ${tag}`}
          >
            <X className="size-3" />
          </button>
        </Badge>
      ))}
      <input
        ref={inputRef}
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        onKeyDown={handleKeyDown}
        onBlur={() => {
          if (text.trim()) addTag(text);
        }}
        placeholder={atLimit ? "" : placeholder}
        disabled={disabled || atLimit}
        className="flex-1 bg-transparent px-1 py-0.5 text-sm outline-none placeholder:text-muted-foreground min-w-[80px]"
      />
    </div>
  );
}
