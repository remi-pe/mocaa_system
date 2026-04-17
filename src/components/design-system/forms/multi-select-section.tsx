"use client";

import { useState } from "react";
import { SectionWrapper } from "@/components/design-system/section-wrapper";
import { ComponentPreview } from "@/components/design-system/component-preview";
import { PropsTable } from "@/components/design-system/props-table";
import { MultiSelect } from "@/components/ui/multi-select";

const STACK = [
  { value: "react", label: "React" },
  { value: "vue", label: "Vue" },
  { value: "svelte", label: "Svelte" },
  { value: "solid", label: "Solid" },
  { value: "angular", label: "Angular" },
  { value: "nextjs", label: "Next.js" },
  { value: "remix", label: "Remix" },
  { value: "nuxt", label: "Nuxt" },
];

function BasicDemo() {
  const [value, setValue] = useState<string[]>([]);
  return (
    <MultiSelect
      options={STACK}
      value={value}
      onValueChange={setValue}
      placeholder="Pick your stack..."
    />
  );
}

function PreselectedDemo() {
  const [value, setValue] = useState<string[]>(["react", "nextjs", "nuxt", "svelte"]);
  return (
    <MultiSelect
      options={STACK}
      value={value}
      onValueChange={setValue}
      placeholder="Pick your stack..."
      maxDisplay={3}
    />
  );
}

export function MultiSelectSection() {
  return (
    <SectionWrapper
      id="multi-select"
      title="Multi-Select"
      description="A searchable dropdown that supports selecting multiple options."
    >
      <ComponentPreview
        title="Default"
        description="Click options to toggle them in/out of the selection."
      >
        <BasicDemo />
      </ComponentPreview>

      <ComponentPreview
        title="With overflow"
        description="Up to 3 selections shown as chips, then +N more."
      >
        <PreselectedDemo />
      </ComponentPreview>

      <PropsTable
        props={[
          {
            name: "options",
            type: "Array<{ value: string; label: string }>",
            description: "The available options.",
          },
          {
            name: "value",
            type: "string[]",
            description: "Controlled selected values.",
          },
          {
            name: "onValueChange",
            type: "(value: string[]) => void",
            description: "Callback when the selection changes.",
          },
          {
            name: "placeholder",
            type: "string",
            defaultValue: '"Select options..."',
            description: "Text shown when nothing is selected.",
          },
          {
            name: "maxDisplay",
            type: "number",
            defaultValue: "3",
            description: "Max chips shown before collapsing to +N more.",
          },
        ]}
      />
    </SectionWrapper>
  );
}
