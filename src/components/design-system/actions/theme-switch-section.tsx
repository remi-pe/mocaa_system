"use client";

import { useState } from "react";
import { SectionWrapper } from "@/components/design-system/section-wrapper";
import { ComponentPreview } from "@/components/design-system/component-preview";
import { PropsTable } from "@/components/design-system/props-table";
import { ThemeSwitch } from "@/components/ui/theme-switch";

export function ThemeSwitchSection() {
  const [checked, setChecked] = useState(false);
  const [checked2, setChecked2] = useState(true);

  return (
    <SectionWrapper
      id="theme-switch"
      title="Theme Switch"
      description="A toggle switch with an embedded icon inside the thumb. Designed for light/dark mode toggling."
    >
      <ComponentPreview title="Light mode (off)">
        <ThemeSwitch checked={checked} onCheckedChange={setChecked} />
      </ComponentPreview>

      <ComponentPreview title="Dark mode (on)">
        <ThemeSwitch checked={checked2} onCheckedChange={setChecked2} />
      </ComponentPreview>

      <PropsTable
        props={[
          {
            name: "checked",
            type: "boolean",
            description: "The controlled checked state. When true, shows moon icon (dark mode).",
          },
          {
            name: "onCheckedChange",
            type: "(checked: boolean) => void",
            description: "Callback when the toggle state changes.",
          },
          {
            name: "className",
            type: "string",
            description: "Additional CSS classes for the root element.",
          },
        ]}
      />
    </SectionWrapper>
  );
}
