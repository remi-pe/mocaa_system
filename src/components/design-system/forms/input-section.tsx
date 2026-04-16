"use client";

import { SectionWrapper } from "@/components/design-system/section-wrapper";
import { ComponentPreview } from "@/components/design-system/component-preview";
import { PropsTable } from "@/components/design-system/props-table";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export function InputSection() {
  return (
    <SectionWrapper
      id="input"
      title="Input"
      description="Displays a form input field."
    >
      <ComponentPreview title="Default">
        <Input type="text" placeholder="Enter text..." className="max-w-sm" />
      </ComponentPreview>

      <ComponentPreview title="Email">
        <Input
          type="email"
          placeholder="name@example.com"
          className="max-w-sm"
        />
      </ComponentPreview>

      <ComponentPreview title="Password">
        <Input type="password" placeholder="Password" className="max-w-sm" />
      </ComponentPreview>

      <ComponentPreview title="File">
        <Input type="file" className="max-w-sm" />
      </ComponentPreview>

      <ComponentPreview title="With Label">
        <div className="grid w-full max-w-sm gap-1.5">
          <Label htmlFor="input-label-demo">Email</Label>
          <Input
            id="input-label-demo"
            type="email"
            placeholder="name@example.com"
          />
        </div>
      </ComponentPreview>

      <ComponentPreview title="Disabled">
        <Input
          type="text"
          placeholder="Disabled"
          disabled
          className="max-w-sm"
        />
      </ComponentPreview>

      <PropsTable
        props={[
          {
            name: "type",
            type: "string",
            defaultValue: '"text"',
            description:
              "The type of input (text, email, password, file, etc.).",
          },
          {
            name: "placeholder",
            type: "string",
            description: "Placeholder text shown when the input is empty.",
          },
          {
            name: "disabled",
            type: "boolean",
            defaultValue: "false",
            description: "Prevents interaction and applies disabled styling.",
          },
          {
            name: "value",
            type: "string",
            description: "The controlled value of the input.",
          },
          {
            name: "onChange",
            type: "(e: ChangeEvent) => void",
            description: "Callback fired when the input value changes.",
          },
        ]}
      />
    </SectionWrapper>
  );
}
