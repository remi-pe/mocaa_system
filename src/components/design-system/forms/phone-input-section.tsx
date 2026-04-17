"use client";

import { useState } from "react";
import { SectionWrapper } from "@/components/design-system/section-wrapper";
import { ComponentPreview } from "@/components/design-system/component-preview";
import { PropsTable } from "@/components/design-system/props-table";
import { PhoneInput } from "@/components/ui/phone-input";

function DefaultDemo() {
  const [value, setValue] = useState("");
  return (
    <PhoneInput
      value={value}
      onValueChange={setValue}
      className="w-[280px]"
    />
  );
}

function UKDemo() {
  const [value, setValue] = useState("7700 900123");
  return (
    <PhoneInput
      value={value}
      onValueChange={setValue}
      defaultCountry="GB"
      className="w-[280px]"
    />
  );
}

export function PhoneInputSection() {
  return (
    <SectionWrapper
      id="phone-input"
      title="Phone Input"
      description="A phone number input with a country code dropdown."
    >
      <ComponentPreview title="Default" description="US country code selected.">
        <DefaultDemo />
      </ComponentPreview>

      <ComponentPreview
        title="Preselected UK"
        description="Opens with +44 already chosen."
      >
        <UKDemo />
      </ComponentPreview>

      <PropsTable
        props={[
          {
            name: "value",
            type: "string",
            description: "Controlled phone number value.",
          },
          {
            name: "onValueChange",
            type: "(value: string) => void",
            description: "Callback when the number changes.",
          },
          {
            name: "defaultCountry",
            type: "string",
            defaultValue: '"US"',
            description: "ISO code for the initially selected country.",
          },
          {
            name: "placeholder",
            type: "string",
            defaultValue: '"Phone number"',
            description: "Placeholder for the number input.",
          },
          {
            name: "disabled",
            type: "boolean",
            defaultValue: "false",
            description: "Disables the component.",
          },
        ]}
      />
    </SectionWrapper>
  );
}
