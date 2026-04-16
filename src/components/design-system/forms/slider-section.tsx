"use client";

import { useState } from "react";
import { SectionWrapper } from "@/components/design-system/section-wrapper";
import { ComponentPreview } from "@/components/design-system/component-preview";
import { PropsTable } from "@/components/design-system/props-table";
import { Slider } from "@/components/ui/slider";

export function SliderSection() {
  const [value, setValue] = useState([50]);

  return (
    <SectionWrapper
      id="slider"
      title="Slider"
      description="An input where the user selects a value from within a given range."
    >
      <ComponentPreview title="Default (50%)">
        <div className="w-full max-w-sm space-y-2">
          <Slider
            value={value}
            onValueChange={(val) => setValue(val as number[])}
            max={100}
            step={1}
          />
          <p className="text-sm text-muted-foreground">Value: {value[0]}</p>
        </div>
      </ComponentPreview>

      <ComponentPreview title="Step of 10">
        <Slider defaultValue={[30]} max={100} step={10} className="max-w-sm" />
      </ComponentPreview>

      <ComponentPreview title="Disabled">
        <Slider
          defaultValue={[50]}
          max={100}
          step={1}
          disabled
          className="max-w-sm"
        />
      </ComponentPreview>

      <PropsTable
        props={[
          {
            name: "value",
            type: "number[]",
            description: "The controlled value of the slider.",
          },
          {
            name: "onValueChange",
            type: "(value: number[]) => void",
            description: "Callback when the value changes.",
          },
          {
            name: "min",
            type: "number",
            defaultValue: "0",
            description: "The minimum value.",
          },
          {
            name: "max",
            type: "number",
            defaultValue: "100",
            description: "The maximum value.",
          },
          {
            name: "step",
            type: "number",
            defaultValue: "1",
            description: "The stepping interval.",
          },
          {
            name: "disabled",
            type: "boolean",
            defaultValue: "false",
            description: "Prevents interaction and applies disabled styling.",
          },
        ]}
      />
    </SectionWrapper>
  );
}
