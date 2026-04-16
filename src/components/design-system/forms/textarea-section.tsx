"use client";

import { SectionWrapper } from "@/components/design-system/section-wrapper";
import { ComponentPreview } from "@/components/design-system/component-preview";
import { PropsTable } from "@/components/design-system/props-table";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

export function TextareaSection() {
  return (
    <SectionWrapper
      id="textarea"
      title="Textarea"
      description="Displays a form textarea field for multi-line text input."
    >
      <ComponentPreview title="Default">
        <Textarea
          placeholder="Type your message here."
          className="max-w-sm"
        />
      </ComponentPreview>

      <ComponentPreview title="With Label">
        <div className="grid w-full max-w-sm gap-1.5">
          <Label htmlFor="textarea-label-demo">Your message</Label>
          <Textarea
            id="textarea-label-demo"
            placeholder="Type your message here."
          />
        </div>
      </ComponentPreview>

      <ComponentPreview title="Disabled">
        <Textarea
          placeholder="Disabled textarea"
          disabled
          className="max-w-sm"
        />
      </ComponentPreview>

      <PropsTable
        props={[
          {
            name: "placeholder",
            type: "string",
            description: "Placeholder text shown when the textarea is empty.",
          },
          {
            name: "disabled",
            type: "boolean",
            defaultValue: "false",
            description: "Prevents interaction and applies disabled styling.",
          },
          {
            name: "rows",
            type: "number",
            description: "The number of visible text lines.",
          },
        ]}
      />
    </SectionWrapper>
  );
}
