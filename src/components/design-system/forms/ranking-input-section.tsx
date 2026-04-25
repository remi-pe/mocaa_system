"use client";

import { useState } from "react";
import { SectionWrapper } from "@/components/design-system/section-wrapper";
import { ComponentPreview } from "@/components/design-system/component-preview";
import { PropsTable } from "@/components/design-system/props-table";
import { RankingInput } from "@/components/ui/ranking-input";

const PRIORITIES = [
  { value: "speed", label: "Speed of delivery" },
  { value: "quality", label: "Quality of output" },
  { value: "cost", label: "Cost efficiency" },
  { value: "support", label: "Customer support" },
];

export function RankingInputSection() {
  const [order, setOrder] = useState<string[]>(PRIORITIES.map((p) => p.value));

  return (
    <SectionWrapper
      id="ranking-input"
      title="Ranking Input"
      description="Drag to reorder a list, or use the up/down buttons. Native HTML5 drag-and-drop, no dependencies."
    >
      <ComponentPreview title="Drag to reorder">
        <div className="w-full max-w-md">
          <p className="mb-3 text-sm">
            Rank these in order of importance to you.
          </p>
          <RankingInput
            items={PRIORITIES}
            value={order}
            onValueChange={setOrder}
          />
          <p className="mt-3 text-xs text-muted-foreground">
            Order: {order.join(", ")}
          </p>
        </div>
      </ComponentPreview>

      <ComponentPreview title="Disabled">
        <div className="w-full max-w-md">
          <RankingInput items={PRIORITIES} disabled />
        </div>
      </ComponentPreview>

      <PropsTable
        props={[
          {
            name: "items",
            type: "RankingItem[]",
            description: "Array of { value, label } items to rank.",
          },
          {
            name: "value",
            type: "string[]",
            description: "Controlled order, as an array of item values.",
          },
          {
            name: "defaultValue",
            type: "string[]",
            description: "Initial order for uncontrolled use.",
          },
          {
            name: "onValueChange",
            type: "(value: string[]) => void",
            description: "Fires when the order changes.",
          },
          {
            name: "disabled",
            type: "boolean",
            defaultValue: "false",
            description: "Prevents reordering.",
          },
        ]}
      />
    </SectionWrapper>
  );
}
