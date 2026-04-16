"use client";

import { useState } from "react";
import { SectionWrapper } from "@/components/design-system/section-wrapper";
import { ComponentPreview } from "@/components/design-system/component-preview";
import { PropsTable } from "@/components/design-system/props-table";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";

export function SwitchSection() {
  const [checked, setChecked] = useState(false);

  return (
    <SectionWrapper
      id="switch"
      title="Switch"
      description="A control that allows the user to toggle between on and off."
    >
      <ComponentPreview title="Default">
        <div className="flex items-center gap-2">
          <Switch id="sw-default" />
          <Label htmlFor="sw-default">Airplane Mode</Label>
        </div>
      </ComponentPreview>

      <ComponentPreview title="Controlled">
        <div className="flex items-center gap-2">
          <Switch
            id="sw-controlled"
            checked={checked}
            onCheckedChange={setChecked}
          />
          <Label htmlFor="sw-controlled">
            {checked ? "On" : "Off"}
          </Label>
        </div>
      </ComponentPreview>

      <ComponentPreview title="Disabled">
        <div className="flex flex-col gap-3">
          <div className="flex items-center gap-2">
            <Switch id="sw-disabled" disabled />
            <Label htmlFor="sw-disabled">Disabled</Label>
          </div>
          <div className="flex items-center gap-2">
            <Switch id="sw-disabled-checked" disabled checked />
            <Label htmlFor="sw-disabled-checked">Disabled checked</Label>
          </div>
        </div>
      </ComponentPreview>

      <PropsTable
        props={[
          {
            name: "checked",
            type: "boolean",
            description: "The controlled checked state of the switch.",
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
