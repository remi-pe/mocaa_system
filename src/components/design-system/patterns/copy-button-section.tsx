import { SectionWrapper } from "@/components/design-system/section-wrapper";
import { ComponentPreview } from "@/components/design-system/component-preview";
import { PropsTable } from "@/components/design-system/props-table";
import { CopyButton } from "@/components/ui/copy-button";
import { Input } from "@/components/ui/input";

export function CopyButtonSection() {
  return (
    <SectionWrapper
      id="copy-button"
      title="Copy Button"
      description="Click-to-copy button with inline confirmation."
    >
      <ComponentPreview title="Icon-only on a code snippet">
        <div className="flex items-center gap-2 rounded-md border bg-muted/40 px-3 py-1.5 font-mono text-sm">
          <span>npm install shadcn</span>
          <CopyButton value="npm install shadcn" />
        </div>
      </ComponentPreview>
      <ComponentPreview title="Text variant">
        <CopyButton value="Hello world" variant="text" />
      </ComponentPreview>
      <ComponentPreview title="In an input field">
        <div className="flex w-full max-w-sm items-center gap-2">
          <Input readOnly value="https://example.com/invite/abc123" />
          <CopyButton value="https://example.com/invite/abc123" />
        </div>
      </ComponentPreview>
      <PropsTable
        props={[
          { name: "value", type: "string", description: "The text to copy to the clipboard." },
          { name: "variant", type: '"icon" | "text"', defaultValue: '"icon"', description: "Visual style of the button." },
          { name: "className", type: "string", description: "Additional classes for the button." },
        ]}
      />
    </SectionWrapper>
  );
}
