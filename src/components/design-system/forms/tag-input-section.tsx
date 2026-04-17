"use client";

import { useState } from "react";
import { SectionWrapper } from "@/components/design-system/section-wrapper";
import { ComponentPreview } from "@/components/design-system/component-preview";
import { PropsTable } from "@/components/design-system/props-table";
import { TagInput } from "@/components/ui/tag-input";

function EmailDemo() {
  const [value, setValue] = useState<string[]>(["alex@example.com"]);
  return (
    <TagInput
      value={value}
      onValueChange={setValue}
      placeholder="Add email and press Enter"
      className="w-[320px]"
    />
  );
}

function KeywordDemo() {
  const [value, setValue] = useState<string[]>(["design", "system"]);
  return (
    <TagInput
      value={value}
      onValueChange={setValue}
      placeholder="Add keyword (max 5)"
      maxTags={5}
      className="w-[320px]"
    />
  );
}

export function TagInputSection() {
  return (
    <SectionWrapper
      id="tag-input"
      title="Tag Input"
      description="An input that creates chips on Enter or comma, removable with X or Backspace."
    >
      <ComponentPreview
        title="Email tags"
        description="Type an email and press Enter or comma to add."
      >
        <EmailDemo />
      </ComponentPreview>

      <ComponentPreview
        title="Keyword tags with max 5"
        description="Input disables once the limit is reached."
      >
        <KeywordDemo />
      </ComponentPreview>

      <PropsTable
        props={[
          {
            name: "value",
            type: "string[]",
            description: "Controlled tag array.",
          },
          {
            name: "onValueChange",
            type: "(value: string[]) => void",
            description: "Callback when tags change.",
          },
          {
            name: "placeholder",
            type: "string",
            defaultValue: '"Add tag..."',
            description: "Placeholder for the inner input.",
          },
          {
            name: "maxTags",
            type: "number",
            description: "Maximum number of tags allowed.",
          },
          {
            name: "disabled",
            type: "boolean",
            defaultValue: "false",
            description: "Disables interaction.",
          },
        ]}
      />
    </SectionWrapper>
  );
}
