"use client";

import { useState } from "react";
import { SectionWrapper } from "@/components/design-system/section-wrapper";
import { ComponentPreview } from "@/components/design-system/component-preview";
import { PropsTable } from "@/components/design-system/props-table";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { Bold, Italic, Underline } from "lucide-react";

export function ToggleGroupSection() {
  const [singleValue, setSingleValue] = useState<string[]>([]);
  const [multipleValue, setMultipleValue] = useState<string[]>(["bold"]);

  return (
    <SectionWrapper
      id="toggle-group"
      title="Toggle Group"
      description="A set of two-state buttons that can be toggled on or off."
    >
      <ComponentPreview
        title="Default"
        description="Toggle group allows multiple items to be active."
      >
        <ToggleGroup
          value={singleValue}
          onValueChange={(val) => setSingleValue(val)}
        >
          <ToggleGroupItem value="bold" aria-label="Toggle bold">
            <Bold />
          </ToggleGroupItem>
          <ToggleGroupItem value="italic" aria-label="Toggle italic">
            <Italic />
          </ToggleGroupItem>
          <ToggleGroupItem value="underline" aria-label="Toggle underline">
            <Underline />
          </ToggleGroupItem>
        </ToggleGroup>
      </ComponentPreview>

      <ComponentPreview
        title="With Default Value"
        description="Pre-selected items on mount."
      >
        <ToggleGroup
          value={multipleValue}
          onValueChange={(val) => setMultipleValue(val)}
        >
          <ToggleGroupItem value="bold" aria-label="Toggle bold">
            <Bold />
          </ToggleGroupItem>
          <ToggleGroupItem value="italic" aria-label="Toggle italic">
            <Italic />
          </ToggleGroupItem>
          <ToggleGroupItem value="underline" aria-label="Toggle underline">
            <Underline />
          </ToggleGroupItem>
        </ToggleGroup>
      </ComponentPreview>

      <ComponentPreview title="Outline Variant">
        <ToggleGroup variant="outline" defaultValue={[]}>
          <ToggleGroupItem value="bold" aria-label="Toggle bold">
            <Bold />
          </ToggleGroupItem>
          <ToggleGroupItem value="italic" aria-label="Toggle italic">
            <Italic />
          </ToggleGroupItem>
          <ToggleGroupItem value="underline" aria-label="Toggle underline">
            <Underline />
          </ToggleGroupItem>
        </ToggleGroup>
      </ComponentPreview>

      <PropsTable
        props={[
          {
            name: "variant",
            type: '"default" | "outline"',
            defaultValue: '"default"',
            description: "The visual style applied to all items.",
          },
          {
            name: "value",
            type: "string[]",
            description: "The controlled value of the pressed items.",
          },
          {
            name: "onValueChange",
            type: "(value: string[]) => void",
            description: "Callback when the value changes.",
          },
        ]}
      />
    </SectionWrapper>
  );
}
