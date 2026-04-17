import { Check } from "lucide-react";
import { cn } from "@/lib/utils";

export interface Step {
  label: string;
  description?: string;
}

interface StepperProps {
  steps: Step[];
  currentStep: number;
  className?: string;
}

export function Stepper({ steps, currentStep, className }: StepperProps) {
  return (
    <ol className={cn("flex w-full items-start", className)}>
      {steps.map((step, index) => {
        const isComplete = index < currentStep;
        const isCurrent = index === currentStep;
        const isLast = index === steps.length - 1;
        return (
          <li
            key={index}
            className={cn(
              "flex items-start",
              !isLast && "flex-1"
            )}
          >
            <div className="flex flex-col items-center">
              <span
                className={cn(
                  "flex size-8 shrink-0 items-center justify-center rounded-full border text-xs font-medium transition-colors",
                  isComplete &&
                    "bg-primary text-primary-foreground border-primary",
                  isCurrent &&
                    "border-primary text-primary bg-background",
                  !isComplete &&
                    !isCurrent &&
                    "border-border bg-muted text-muted-foreground"
                )}
              >
                {isComplete ? (
                  <Check className="h-4 w-4" />
                ) : (
                  <span>{index + 1}</span>
                )}
              </span>
              <div className="mt-2 w-24 text-center">
                <p
                  className={cn(
                    "text-xs font-medium",
                    (isComplete || isCurrent)
                      ? "text-foreground"
                      : "text-muted-foreground"
                  )}
                >
                  {step.label}
                </p>
                {step.description && (
                  <p className="mt-0.5 text-[11px] text-muted-foreground">
                    {step.description}
                  </p>
                )}
              </div>
            </div>
            {!isLast && (
              <div
                className={cn(
                  "mt-4 h-px flex-1",
                  isComplete ? "bg-primary" : "bg-border"
                )}
              />
            )}
          </li>
        );
      })}
    </ol>
  );
}
