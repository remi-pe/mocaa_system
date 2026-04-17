"use client";

import { useState } from "react";
import { SectionWrapper } from "@/components/design-system/section-wrapper";
import { ComponentPreview } from "@/components/design-system/component-preview";
import { PropsTable } from "@/components/design-system/props-table";
import { Combobox } from "@/components/ui/combobox";

const FRAMEWORKS = [
  { value: "nextjs", label: "Next.js" },
  { value: "remix", label: "Remix" },
  { value: "astro", label: "Astro" },
  { value: "vite", label: "Vite" },
];

function BasicDemo() {
  const [value, setValue] = useState<string>("");
  return (
    <Combobox
      options={FRAMEWORKS}
      value={value}
      onValueChange={setValue}
      placeholder="Select framework..."
      searchPlaceholder="Search framework..."
    />
  );
}

function PreselectedDemo() {
  const [value, setValue] = useState<string>("nextjs");
  return (
    <Combobox
      options={FRAMEWORKS}
      value={value}
      onValueChange={setValue}
      placeholder="Select framework..."
    />
  );
}

export function ComboboxSection() {
  return (
    <SectionWrapper
      id="combobox"
      title="Combobox"
      description="A searchable select composed from Popover and Command."
    >
      <ComponentPreview
        title="Default"
        description="Click to open, type to filter, click an option to select."
      >
        <BasicDemo />
      </ComponentPreview>

      <ComponentPreview
        title="Preselected"
        description="Opens with Next.js already selected."
      >
        <PreselectedDemo />
      </ComponentPreview>

      <PropsTable
        props={[
          {
            name: "options",
            type: "Array<{ value: string; label: string }>",
            description: "The options available in the dropdown.",
          },
          {
            name: "value",
            type: "string",
            description: "Controlled selected value.",
          },
          {
            name: "onValueChange",
            type: "(value: string) => void",
            description: "Callback when the selected value changes.",
          },
          {
            name: "placeholder",
            type: "string",
            defaultValue: '"Select option..."',
            description: "Text shown when nothing is selected.",
          },
          {
            name: "searchPlaceholder",
            type: "string",
            defaultValue: '"Search..."',
            description: "Placeholder for the search input.",
          },
          {
            name: "emptyMessage",
            type: "string",
            defaultValue: '"No results found."',
            description: "Message shown when the search yields no results.",
          },
        ]}
      />
    </SectionWrapper>
  );
}
