"use client";

import { useState } from "react";
import { SectionWrapper } from "@/components/design-system/section-wrapper";
import { ComponentPreview } from "@/components/design-system/component-preview";
import { PropsTable } from "@/components/design-system/props-table";
import { AutoExpandingTextarea } from "@/components/ui/auto-expanding-textarea";
import { Label } from "@/components/ui/label";

export function AutoExpandingTextareaSection() {
  const [value, setValue] = useState("");

  return (
    <SectionWrapper
      id="auto-expanding-textarea"
      title="Auto-Expanding Textarea"
      description="A textarea that grows with its content (within a min/max row range) and shows a character counter. Built for long-form questionnaire answers."
    >
      <ComponentPreview title="Default with character limit">
        <div className="grid w-full max-w-md gap-1.5">
          <Label htmlFor="auto-textarea-demo">Tell us more</Label>
          <AutoExpandingTextarea
            id="auto-textarea-demo"
            placeholder="Type as much as you'd like — this grows with your content."
            maxLength={300}
            value={value}
            onValueChange={setValue}
          />
        </div>
      </ComponentPreview>

      <ComponentPreview title="Without limit">
        <div className="w-full max-w-md">
          <AutoExpandingTextarea
            placeholder="No max length, just a counter."
            minRows={2}
            maxRows={8}
          />
        </div>
      </ComponentPreview>

      <ComponentPreview title="Counter hidden">
        <div className="w-full max-w-md">
          <AutoExpandingTextarea
            placeholder="No counter shown."
            showCount={false}
            maxLength={500}
          />
        </div>
      </ComponentPreview>

      <PropsTable
        props={[
          {
            name: "value",
            type: "string",
            description: "Controlled value.",
          },
          {
            name: "defaultValue",
            type: "string",
            description: "Initial value for uncontrolled use.",
          },
          {
            name: "onValueChange",
            type: "(value: string) => void",
            description: "Fires with the new value (string only). Standard onChange also fires.",
          },
          {
            name: "maxLength",
            type: "number",
            description: "Hard cap on character count.",
          },
          {
            name: "minRows",
            type: "number",
            defaultValue: "3",
            description: "Minimum visible rows.",
          },
          {
            name: "maxRows",
            type: "number",
            defaultValue: "12",
            description: "Maximum rows before scrolling kicks in.",
          },
          {
            name: "showCount",
            type: "boolean",
            defaultValue: "true",
            description: "Show the character counter below the field.",
          },
        ]}
      />
    </SectionWrapper>
  );
}
