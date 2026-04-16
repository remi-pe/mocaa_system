"use client";

import { SectionWrapper } from "@/components/design-system/section-wrapper";
import { ComponentPreview } from "@/components/design-system/component-preview";
import { PropsTable } from "@/components/design-system/props-table";
import { Progress } from "@/components/ui/progress";

export function ProgressSection() {
  return (
    <SectionWrapper
      id="progress"
      title="Progress"
      description="Displays an indicator showing the completion progress of a task."
    >
      <ComponentPreview title="Progress Values">
        <div className="w-full max-w-md space-y-4">
          <div className="space-y-1">
            <span className="text-sm text-muted-foreground">25%</span>
            <Progress value={25} />
          </div>
          <div className="space-y-1">
            <span className="text-sm text-muted-foreground">50%</span>
            <Progress value={50} />
          </div>
          <div className="space-y-1">
            <span className="text-sm text-muted-foreground">75%</span>
            <Progress value={75} />
          </div>
        </div>
      </ComponentPreview>

      <PropsTable
        props={[
          {
            name: "value",
            type: "number",
            defaultValue: "0",
            description: "The current progress value.",
          },
          {
            name: "max",
            type: "number",
            defaultValue: "100",
            description: "The maximum progress value.",
          },
        ]}
      />
    </SectionWrapper>
  );
}
