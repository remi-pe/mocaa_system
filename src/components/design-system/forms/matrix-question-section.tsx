"use client";

import { useState } from "react";
import { SectionWrapper } from "@/components/design-system/section-wrapper";
import { ComponentPreview } from "@/components/design-system/component-preview";
import { PropsTable } from "@/components/design-system/props-table";
import { MatrixQuestion, type MatrixAnswers } from "@/components/ui/matrix-question";

const ROWS = [
  { value: "ease", label: "Ease of use" },
  { value: "speed", label: "Speed" },
  { value: "design", label: "Visual design" },
  { value: "support", label: "Customer support" },
];

const COLUMNS = [
  { value: "1", label: "Poor" },
  { value: "2", label: "Fair" },
  { value: "3", label: "Good" },
  { value: "4", label: "Great" },
  { value: "5", label: "Excellent" },
];

export function MatrixQuestionSection() {
  const [answers, setAnswers] = useState<MatrixAnswers>({});

  return (
    <SectionWrapper
      id="matrix-question"
      title="Matrix Question"
      description="A grid of rows × radio columns. Useful for rating multiple attributes on the same scale in one block."
    >
      <ComponentPreview title="Rate each attribute">
        <div className="w-full max-w-2xl">
          <MatrixQuestion
            rows={ROWS}
            columns={COLUMNS}
            value={answers}
            onValueChange={setAnswers}
          />
        </div>
      </ComponentPreview>

      <ComponentPreview title="Disabled">
        <div className="w-full max-w-2xl">
          <MatrixQuestion
            rows={ROWS}
            columns={COLUMNS}
            defaultValue={{ ease: "4", speed: "5", design: "3", support: "4" }}
            disabled
          />
        </div>
      </ComponentPreview>

      <PropsTable
        props={[
          {
            name: "rows",
            type: "MatrixRow[]",
            description: "Array of { value, label } — one row per question.",
          },
          {
            name: "columns",
            type: "MatrixColumn[]",
            description: "Array of { value, label } — the rating columns.",
          },
          {
            name: "value",
            type: "Record<string, string>",
            description: "Controlled answers, keyed by row value.",
          },
          {
            name: "defaultValue",
            type: "Record<string, string>",
            description: "Initial answers for uncontrolled use.",
          },
          {
            name: "onValueChange",
            type: "(value: Record<string, string>) => void",
            description: "Fires when any row's selection changes.",
          },
          {
            name: "disabled",
            type: "boolean",
            defaultValue: "false",
            description: "Disables all rows.",
          },
        ]}
      />
    </SectionWrapper>
  );
}
