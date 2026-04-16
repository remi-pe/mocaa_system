import { cn } from "@/lib/utils";

interface ComponentPreviewProps {
  title?: string;
  description?: string;
  children: React.ReactNode;
  className?: string;
}

export function ComponentPreview({
  title,
  description,
  children,
  className,
}: ComponentPreviewProps) {
  return (
    <div className="mb-6">
      {title && (
        <div className="mb-2">
          <h3 className="text-sm font-medium">{title}</h3>
          {description && (
            <p className="text-xs text-muted-foreground">{description}</p>
          )}
        </div>
      )}
      <div
        className={cn(
          "flex min-h-[120px] items-center justify-center rounded-lg border bg-card p-6",
          className
        )}
      >
        {children}
      </div>
    </div>
  );
}
