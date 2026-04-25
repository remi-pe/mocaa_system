"use client";

import { useState } from "react";
import { SectionWrapper } from "@/components/design-system/section-wrapper";
import { ComponentPreview } from "@/components/design-system/component-preview";
import { PropsTable } from "@/components/design-system/props-table";
import { ProgressIndicator } from "@/components/ui/progress-indicator";
import { Button } from "@/components/ui/button";

export function ProgressIndicatorSection() {
  const [step, setStep] = useState(3);
  const total = 10;

  return (
    <SectionWrapper
      id="progress-indicator"
      title="Progress Indicator"
      description="A multi-step header showing 'Question 3 of 10' with a progress bar. Distinct from Stepper (no per-step labels) and Progress (no counter)."
    >
      <ComponentPreview title="Default — questionnaire counter">
        <div className="w-full max-w-md">
          <ProgressIndicator current={step} total={total} />
          <div className="mt-4 flex gap-2">
            <Button
              variant="outline"
              size="sm"
              onClick={() => setStep((s) => Math.max(1, s - 1))}
            >
              Back
            </Button>
            <Button
              size="sm"
              onClick={() => setStep((s) => Math.min(total, s + 1))}
            >
              Next
            </Button>
          </div>
        </div>
      </ComponentPreview>

      <ComponentPreview title="Custom label">
        <div className="w-full max-w-md">
          <ProgressIndicator current={2} total={5} label="Setting up your account" />
        </div>
      </ComponentPreview>

      <ComponentPreview title="Custom format">
        <div className="w-full max-w-md">
          <ProgressIndicator
            current={4}
            total={6}
            format={(c, t) => `Step ${c} / ${t}`}
          />
        </div>
      </ComponentPreview>

      <ComponentPreview title="Without bar">
        <div className="w-full max-w-md">
          <ProgressIndicator current={7} total={12} showBar={false} />
        </div>
      </ComponentPreview>

      <PropsTable
        props={[
          {
            name: "current",
            type: "number",
            description: "Current step (1-indexed).",
          },
          {
            name: "total",
            type: "number",
            description: "Total number of steps.",
          },
          {
            name: "label",
            type: "string",
            description: "Override the counter text. Counter still shows on the right.",
          },
          {
            name: "format",
            type: "(current, total) => string",
            description: 'Custom counter text. Default: "Question {current} of {total}".',
          },
          {
            name: "showBar",
            type: "boolean",
            defaultValue: "true",
            description: "Show the progress bar below the counter.",
          },
        ]}
      />
    </SectionWrapper>
  );
}
