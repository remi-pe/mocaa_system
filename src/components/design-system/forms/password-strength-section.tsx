"use client";

import { useState } from "react";
import { SectionWrapper } from "@/components/design-system/section-wrapper";
import { ComponentPreview } from "@/components/design-system/component-preview";
import { PropsTable } from "@/components/design-system/props-table";
import { PasswordStrength } from "@/components/ui/password-strength";

function Demo() {
  const [value, setValue] = useState("");
  return (
    <div className="w-full max-w-sm">
      <PasswordStrength value={value} onChange={setValue} />
    </div>
  );
}

export function PasswordStrengthSection() {
  return (
    <SectionWrapper
      id="password-strength"
      title="Password Strength"
      description="A password input with a live 4-segment strength meter and checklist."
    >
      <ComponentPreview
        title="Interactive"
        description="Type a password to see strength update and rules check off."
        className="block"
      >
        <Demo />
      </ComponentPreview>

      <PropsTable
        props={[
          {
            name: "value",
            type: "string",
            description: "Controlled password value (required).",
          },
          {
            name: "onChange",
            type: "(value: string) => void",
            description: "Callback when the password changes (required).",
          },
          {
            name: "rules",
            type: "PasswordRule[]",
            description:
              "Custom rules list. Defaults to length≥8, uppercase, number, special char.",
          },
          {
            name: "placeholder",
            type: "string",
            defaultValue: '"Enter password"',
            description: "Placeholder for the input.",
          },
        ]}
      />
    </SectionWrapper>
  );
}
