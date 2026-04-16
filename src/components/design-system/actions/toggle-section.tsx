"use client";

import { useState } from "react";
import { SectionWrapper } from "@/components/design-system/section-wrapper";
import { ComponentPreview } from "@/components/design-system/component-preview";
import { PropsTable } from "@/components/design-system/props-table";
import { Toggle } from "@/components/ui/toggle";
import { Bold, Italic, Underline } from "lucide-react";

export function ToggleSection() {
  const [pressed, setPressed] = useState(false);

  return (
    <SectionWrapper
      id="toggle"
      title="Toggle"
      description="A two-state button that can be either on or off."
    >
      <ComponentPreview title="Default">
        <Toggle aria-label="Toggle bold">
          <Bold />
        </Toggle>
      </ComponentPreview>

      <ComponentPreview title="Outline Variant">
        <Toggle variant="outline" aria-label="Toggle italic">
          <Italic />
        </Toggle>
      </ComponentPreview>

      <ComponentPreview title="With Text">
        <div className="flex items-center gap-3">
          <Toggle aria-label="Toggle bold">
            <Bold /> Bold
          </Toggle>
          <Toggle aria-label="Toggle italic">
            <Italic /> Italic
          </Toggle>
          <Toggle aria-label="Toggle underline">
            <Underline /> Underline
          </Toggle>
        </div>
      </ComponentPreview>

      <ComponentPreview title="Controlled (Pressed)">
        <Toggle
          pressed={pressed}
          onPressedChange={setPressed}
          aria-label="Toggle bold"
        >
          <Bold />
          {pressed ? "On" : "Off"}
        </Toggle>
      </ComponentPreview>

      <ComponentPreview title="Disabled">
        <Toggle disabled aria-label="Toggle bold">
          <Bold />
        </Toggle>
      </ComponentPreview>

      <PropsTable
        props={[
          {
            name: "variant",
            type: '"default" | "outline"',
            defaultValue: '"default"',
            description: "The visual style of the toggle.",
          },
          {
            name: "pressed",
            type: "boolean",
            description: "The controlled pressed state of the toggle.",
          },
          {
            name: "onPressedChange",
            type: "(pressed: boolean) => void",
            description: "Callback when the pressed state changes.",
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
