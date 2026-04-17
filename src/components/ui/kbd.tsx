import { cn } from "@/lib/utils";

interface KbdProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
  className?: string;
}

export function Kbd({ children, className, ...props }: KbdProps) {
  return (
    <kbd
      className={cn(
        "inline-flex h-5 min-w-5 items-center justify-center rounded-sm border border-border bg-muted px-1.5 py-0.5 font-mono text-[11px] font-medium text-muted-foreground shadow-[inset_0_-1px_0_0_var(--border)]",
        className
      )}
      {...props}
    >
      {children}
    </kbd>
  );
}
