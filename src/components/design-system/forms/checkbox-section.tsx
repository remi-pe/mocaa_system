"use client";

import { useState } from "react";
import { SectionWrapper } from "@/components/design-system/section-wrapper";
import { ComponentPreview } from "@/components/design-system/component-preview";
import { PropsTable } from "@/components/design-system/props-table";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";

export function CheckboxSection() {
  const [checked, setChecked] = useState(false);

  return (
    <SectionWrapper
      id="checkbox"
      title="Checkbox"
      description="A control that allows the user to toggle between checked and not checked."
    >
      <ComponentPreview title="Default">
        <div className="flex items-center gap-2">
          <Checkbox id="cb-default" />
          <Label htmlFor="cb-default">Accept terms and conditions</Label>
        </div>
      </ComponentPreview>

      <ComponentPreview title="Controlled">
        <div className="flex items-center gap-2">
          <Checkbox
            id="cb-controlled"
            checked={checked}
            onCheckedChange={(v) => setChecked(v as boolean)}
          />
          <Label htmlFor="cb-controlled">
            {checked ? "Checked" : "Unchecked"}
          </Label>
        </div>
      </ComponentPreview>

      <ComponentPreview title="Disabled">
        <div className="flex flex-col gap-3">
          <div className="flex items-center gap-2">
            <Checkbox id="cb-disabled" disabled />
            <Label htmlFor="cb-disabled">Disabled</Label>
          </div>
          <div className="flex items-center gap-2">
            <Checkbox id="cb-disabled-checked" disabled checked />
            <Label htmlFor="cb-disabled-checked">Disabled checked</Label>
          </div>
        </div>
      </ComponentPreview>

      <PropsTable
        props={[
          {
            name: "checked",
            type: "boolean",
            description: "The controlled checked state of the checkbox.",
          },
          {
            name: "onCheckedChange",
            type: "(checked: boolean) => void",
            description: "Callback when the checked state changes.",
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
