"use client";

import { useState } from "react";
import { SectionWrapper } from "@/components/design-system/section-wrapper";
import { ComponentPreview } from "@/components/design-system/component-preview";
import { PropsTable } from "@/components/design-system/props-table";
import { NPSScore } from "@/components/ui/nps-score";

export function NPSScoreSection() {
  const [score, setScore] = useState<number | undefined>();

  return (
    <SectionWrapper
      id="nps-score"
      title="NPS Score"
      description="A 0–10 picker for Net Promoter Score, with detractor / passive / promoter color coding when selected."
    >
      <ComponentPreview title="Default">
        <div className="w-full max-w-2xl">
          <p className="mb-3 text-sm">
            How likely are you to recommend us to a friend?
          </p>
          <NPSScore value={score} onValueChange={setScore} />
        </div>
      </ComponentPreview>

      <ComponentPreview title="Without endpoint labels">
        <div className="w-full max-w-2xl">
          <NPSScore defaultValue={9} showLabels={false} />
        </div>
      </ComponentPreview>

      <ComponentPreview title="Disabled">
        <div className="w-full max-w-2xl">
          <NPSScore defaultValue={7} disabled />
        </div>
      </ComponentPreview>

      <PropsTable
        props={[
          {
            name: "value",
            type: "number",
            description: "Controlled selected score (0–10).",
          },
          {
            name: "defaultValue",
            type: "number",
            description: "Initial score for uncontrolled use.",
          },
          {
            name: "onValueChange",
            type: "(value: number) => void",
            description: "Fires when a score is selected.",
          },
          {
            name: "showLabels",
            type: "boolean",
            defaultValue: "true",
            description: "Show 'Not at all likely' and 'Extremely likely' below the scale.",
          },
          {
            name: "disabled",
            type: "boolean",
            defaultValue: "false",
            description: "Disables interaction.",
          },
        ]}
      />
    </SectionWrapper>
  );
}
