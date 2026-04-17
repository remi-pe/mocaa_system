"use client";

import { useState } from "react";
import { SectionWrapper } from "@/components/design-system/section-wrapper";
import { ComponentPreview } from "@/components/design-system/component-preview";
import { PropsTable } from "@/components/design-system/props-table";
import { Rating } from "@/components/ui/rating";

function InteractiveDemo() {
  const [value, setValue] = useState(0);
  return <Rating value={value} onValueChange={setValue} />;
}

export function RatingSection() {
  return (
    <SectionWrapper
      id="rating"
      title="Rating"
      description="A star rating input with hover preview and fractional display."
    >
      <ComponentPreview
        title="Interactive"
        description="Hover to preview, click to select."
      >
        <InteractiveDemo />
      </ComponentPreview>

      <ComponentPreview
        title="Read-only with 3.5"
        description="Displays fractional values with a partial star fill."
      >
        <Rating value={3.5} readOnly />
      </ComponentPreview>

      <ComponentPreview title="Large" description="Larger icon size.">
        <Rating value={4} size="lg" readOnly />
      </ComponentPreview>

      <PropsTable
        props={[
          {
            name: "value",
            type: "number",
            description: "Controlled rating value (supports fractional).",
          },
          {
            name: "onValueChange",
            type: "(value: number) => void",
            description: "Callback when the user picks a rating.",
          },
          {
            name: "max",
            type: "number",
            defaultValue: "5",
            description: "Number of stars to render.",
          },
          {
            name: "readOnly",
            type: "boolean",
            defaultValue: "false",
            description: "Disable interaction — just for display.",
          },
          {
            name: "size",
            type: '"sm" | "default" | "lg"',
            defaultValue: '"default"',
            description: "Size of each star.",
          },
        ]}
      />
    </SectionWrapper>
  );
}
