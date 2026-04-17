"use client";

import * as React from "react";
import { Upload, X, File as FileIcon } from "lucide-react";

import { cn } from "@/lib/utils";

export interface FileUploadProps {
  onFilesSelected?: (files: File[]) => void;
  accept?: string;
  multiple?: boolean;
  maxSize?: number;
  className?: string;
  disabled?: boolean;
}

function formatSize(bytes: number): string {
  if (bytes < 1024) return `${bytes} B`;
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
  return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
}

export function FileUpload({
  onFilesSelected,
  accept,
  multiple = false,
  maxSize,
  className,
  disabled,
}: FileUploadProps) {
  const inputRef = React.useRef<HTMLInputElement>(null);
  const [files, setFiles] = React.useState<File[]>([]);
  const [error, setError] = React.useState<string | null>(null);
  const [dragging, setDragging] = React.useState(false);

  const addFiles = (incoming: File[]) => {
    setError(null);
    if (maxSize !== undefined) {
      const tooBig = incoming.find((f) => f.size > maxSize);
      if (tooBig) {
        setError(`"${tooBig.name}" exceeds ${formatSize(maxSize)}.`);
        return;
      }
    }
    const next = multiple ? [...files, ...incoming] : incoming.slice(0, 1);
    setFiles(next);
    onFilesSelected?.(next);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const list = e.target.files;
    if (!list) return;
    addFiles(Array.from(list));
    e.target.value = "";
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setDragging(false);
    if (disabled) return;
    const list = e.dataTransfer.files;
    if (!list) return;
    addFiles(Array.from(list));
  };

  const removeFile = (index: number) => {
    const next = files.filter((_, i) => i !== index);
    setFiles(next);
    onFilesSelected?.(next);
  };

  return (
    <div className={cn("w-full space-y-3", className)}>
      <div
        role="button"
        tabIndex={0}
        onClick={() => !disabled && inputRef.current?.click()}
        onKeyDown={(e) => {
          if ((e.key === "Enter" || e.key === " ") && !disabled) {
            e.preventDefault();
            inputRef.current?.click();
          }
        }}
        onDragOver={(e) => {
          e.preventDefault();
          if (!disabled) setDragging(true);
        }}
        onDragLeave={() => setDragging(false)}
        onDrop={handleDrop}
        className={cn(
          "flex cursor-pointer flex-col items-center justify-center gap-2 rounded-lg border-2 border-dashed border-input bg-transparent px-6 py-10 text-center transition-colors outline-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 dark:bg-input/30",
          dragging && "border-ring bg-muted/50",
          disabled && "pointer-events-none opacity-50"
        )}
      >
        <div className="flex size-10 items-center justify-center rounded-full bg-muted">
          <Upload className="size-5 text-muted-foreground" />
        </div>
        <div className="text-sm font-medium">
          Drag files here or click to browse
        </div>
        <div className="text-xs text-muted-foreground">
          {accept ? `Accepted: ${accept}` : "Any file type"}
          {maxSize !== undefined && ` · Max ${formatSize(maxSize)}`}
        </div>
        <input
          ref={inputRef}
          type="file"
          className="hidden"
          accept={accept}
          multiple={multiple}
          onChange={handleChange}
          disabled={disabled}
        />
      </div>

      {error && (
        <p className="text-xs text-destructive">{error}</p>
      )}

      {files.length > 0 && (
        <ul className="space-y-1.5">
          {files.map((file, i) => (
            <li
              key={`${file.name}-${i}`}
              className="flex items-center gap-2 rounded-md border bg-card px-2.5 py-1.5 text-sm"
            >
              <FileIcon className="size-4 shrink-0 text-muted-foreground" />
              <span className="flex-1 truncate">{file.name}</span>
              <span className="text-xs text-muted-foreground">
                {formatSize(file.size)}
              </span>
              <button
                type="button"
                onClick={() => removeFile(i)}
                aria-label={`Remove ${file.name}`}
                className="rounded-md p-1 text-muted-foreground outline-none hover:bg-muted hover:text-foreground"
              >
                <X className="size-3.5" />
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
