"use client";

import { useState } from "react";
import { LayoutGrid, List, Rows3 } from "lucide-react";
import { SectionWrapper } from "@/components/design-system/section-wrapper";
import { ComponentPreview } from "@/components/design-system/component-preview";
import { PropsTable } from "@/components/design-system/props-table";
import { SegmentedControl } from "@/components/ui/segmented-control";

export function SegmentedControlSection() {
  const [view, setView] = useState("grid");
  const [tab, setTab] = useState("monthly");

  return (
    <SectionWrapper
      id="segmented-control"
      title="Segmented Control"
      description="An iOS-style single-select picker with a sliding selection. Distinct from ToggleGroup — single-select only, with a softer pill-in-pill aesthetic."
    >
      <ComponentPreview title="With icons">
        <SegmentedControl
          aria-label="Layout"
          value={view}
          onValueChange={setView}
          options={[
            { value: "grid", label: "Grid", icon: <LayoutGrid className="size-4" /> },
            { value: "list", label: "List", icon: <List className="size-4" /> },
            { value: "rows", label: "Rows", icon: <Rows3 className="size-4" /> },
          ]}
        />
      </ComponentPreview>

      <ComponentPreview title="Sizes">
        <div className="flex flex-col items-center gap-3">
          <SegmentedControl
            size="sm"
            defaultValue="a"
            options={[
              { value: "a", label: "Small" },
              { value: "b", label: "Option" },
              { value: "c", label: "Three" },
            ]}
          />
          <SegmentedControl
            size="md"
            defaultValue="a"
            options={[
              { value: "a", label: "Medium" },
              { value: "b", label: "Option" },
              { value: "c", label: "Three" },
            ]}
          />
          <SegmentedControl
            size="lg"
            defaultValue="a"
            options={[
              { value: "a", label: "Large" },
              { value: "b", label: "Option" },
              { value: "c", label: "Three" },
            ]}
          />
        </div>
      </ComponentPreview>

      <ComponentPreview title="Full width">
        <div className="w-full max-w-md">
          <SegmentedControl
            fullWidth
            value={tab}
            onValueChange={setTab}
            options={[
              { value: "monthly", label: "Monthly" },
              { value: "yearly", label: "Yearly" },
            ]}
          />
        </div>
      </ComponentPreview>

      <ComponentPreview title="Disabled option">
        <SegmentedControl
          defaultValue="now"
          options={[
            { value: "now", label: "Now" },
            { value: "later", label: "Later" },
            { value: "soon", label: "Soon", disabled: true },
          ]}
        />
      </ComponentPreview>

      <PropsTable
        props={[
          {
            name: "options",
            type: "SegmentedControlOption[]",
            description: "Array of { value, label, icon?, disabled? } items.",
          },
          {
            name: "value",
            type: "string",
            description: "Controlled selected value.",
          },
          {
            name: "defaultValue",
            type: "string",
            description: "Initial value for uncontrolled use. Defaults to first option.",
          },
          {
            name: "onValueChange",
            type: "(value: string) => void",
            description: "Fires when selection changes.",
          },
          {
            name: "size",
            type: '"sm" | "md" | "lg"',
            defaultValue: '"md"',
            description: "Visual size of the control.",
          },
          {
            name: "fullWidth",
            type: "boolean",
            defaultValue: "false",
            description: "Stretch to fill the parent and equally divide segments.",
          },
          {
            name: "disabled",
            type: "boolean",
            defaultValue: "false",
            description: "Disables the entire control.",
          },
        ]}
      />
    </SectionWrapper>
  );
}
