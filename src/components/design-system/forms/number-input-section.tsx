"use client";

import { useState } from "react";
import { SectionWrapper } from "@/components/design-system/section-wrapper";
import { ComponentPreview } from "@/components/design-system/component-preview";
import { PropsTable } from "@/components/design-system/props-table";
import { NumberInput } from "@/components/ui/number-input";

function DefaultDemo() {
  const [value, setValue] = useState(0);
  return <NumberInput value={value} onValueChange={setValue} />;
}

function RangeDemo() {
  const [value, setValue] = useState(50);
  return (
    <NumberInput value={value} onValueChange={setValue} min={0} max={100} />
  );
}

function StepDemo() {
  const [value, setValue] = useState(0);
  return <NumberInput value={value} onValueChange={setValue} step={5} />;
}

export function NumberInputSection() {
  return (
    <SectionWrapper
      id="number-input"
      title="Number Input"
      description="A numeric input with minus/plus stepper buttons."
    >
      <ComponentPreview title="Default" description="Starts at 0, steps by 1.">
        <DefaultDemo />
      </ComponentPreview>

      <ComponentPreview
        title="With min/max"
        description="Clamped between 0 and 100."
      >
        <RangeDemo />
      </ComponentPreview>

      <ComponentPreview title="With step 5" description="Each click changes by 5.">
        <StepDemo />
      </ComponentPreview>

      <PropsTable
        props={[
          {
            name: "value",
            type: "number",
            description: "Controlled numeric value.",
          },
          {
            name: "onValueChange",
            type: "(value: number) => void",
            description: "Callback when the value changes.",
          },
          { name: "min", type: "number", description: "Minimum allowed value." },
          { name: "max", type: "number", description: "Maximum allowed value." },
          {
            name: "step",
            type: "number",
            defaultValue: "1",
            description: "Increment/decrement amount.",
          },
          {
            name: "disabled",
            type: "boolean",
            defaultValue: "false",
            description: "Disables the input and its buttons.",
          },
        ]}
      />
    </SectionWrapper>
  );
}
