"use client";

import { useState } from "react";
import { SectionWrapper } from "@/components/design-system/section-wrapper";
import { ComponentPreview } from "@/components/design-system/component-preview";
import { PropsTable } from "@/components/design-system/props-table";
import { LikertScale, LIKERT_5, LIKERT_7 } from "@/components/ui/likert-scale";

export function LikertScaleSection() {
  const [v5, setV5] = useState<string>("");
  const [v7, setV7] = useState<string>("");

  return (
    <SectionWrapper
      id="likert-scale"
      title="Likert Scale"
      description="A semantic scale for measuring agreement, satisfaction, or frequency. More expressive than a plain radio group."
    >
      <ComponentPreview title="5-point scale">
        <div className="w-full max-w-xl">
          <p className="mb-3 text-sm">
            I find the product easy to use.
          </p>
          <LikertScale value={v5} onValueChange={setV5} />
        </div>
      </ComponentPreview>

      <ComponentPreview title="7-point scale">
        <div className="w-full max-w-2xl">
          <p className="mb-3 text-sm">
            The onboarding flow met my expectations.
          </p>
          <LikertScale options={LIKERT_7} value={v7} onValueChange={setV7} />
        </div>
      </ComponentPreview>

      <ComponentPreview title="Disabled">
        <div className="w-full max-w-xl">
          <LikertScale options={LIKERT_5} defaultValue="3" disabled />
        </div>
      </ComponentPreview>

      <PropsTable
        props={[
          {
            name: "options",
            type: "LikertOption[]",
            defaultValue: "LIKERT_5",
            description: "Array of { value, label } items. Exports LIKERT_5 and LIKERT_7 presets.",
          },
          {
            name: "value",
            type: "string",
            description: "Controlled selected value.",
          },
          {
            name: "defaultValue",
            type: "string",
            description: "Initial value for uncontrolled use.",
          },
          {
            name: "onValueChange",
            type: "(value: string) => void",
            description: "Fires when the selection changes.",
          },
          {
            name: "disabled",
            type: "boolean",
            defaultValue: "false",
            description: "Disables interaction across the scale.",
          },
        ]}
      />
    </SectionWrapper>
  );
}
