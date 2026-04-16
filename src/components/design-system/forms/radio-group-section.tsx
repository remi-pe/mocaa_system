"use client";

import { useState } from "react";
import { SectionWrapper } from "@/components/design-system/section-wrapper";
import { ComponentPreview } from "@/components/design-system/component-preview";
import { PropsTable } from "@/components/design-system/props-table";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";

export function RadioGroupSection() {
  const [value, setValue] = useState("comfortable");

  return (
    <SectionWrapper
      id="radio-group"
      title="Radio Group"
      description="A set of checkable buttons where only one can be checked at a time."
    >
      <ComponentPreview title="Default">
        <RadioGroup value={value} onValueChange={setValue}>
          <div className="flex items-center gap-2">
            <RadioGroupItem value="default" id="rg-default" />
            <Label htmlFor="rg-default">Default</Label>
          </div>
          <div className="flex items-center gap-2">
            <RadioGroupItem value="comfortable" id="rg-comfortable" />
            <Label htmlFor="rg-comfortable">Comfortable</Label>
          </div>
          <div className="flex items-center gap-2">
            <RadioGroupItem value="compact" id="rg-compact" />
            <Label htmlFor="rg-compact">Compact</Label>
          </div>
        </RadioGroup>
      </ComponentPreview>

      <PropsTable
        props={[
          {
            name: "value",
            type: "string",
            description: "The controlled value of the selected radio item.",
          },
          {
            name: "onValueChange",
            type: "(value: string) => void",
            description: "Callback when the selected value changes.",
          },
          {
            name: "disabled",
            type: "boolean",
            defaultValue: "false",
            description: "Disables all radio items in the group.",
          },
        ]}
      />
    </SectionWrapper>
  );
}
