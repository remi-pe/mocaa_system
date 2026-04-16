import { SectionWrapper } from "@/components/design-system/section-wrapper";
import { ComponentPreview } from "@/components/design-system/component-preview";
import { PropsTable } from "@/components/design-system/props-table";
import { Separator } from "@/components/ui/separator";

export function SeparatorSection() {
  return (
    <SectionWrapper
      id="separator"
      title="Separator"
      description="Visually or semantically separates content."
    >
      <ComponentPreview title="Horizontal">
        <div className="w-full max-w-sm space-y-1">
          <h4 className="text-sm font-medium leading-none">Radix Primitives</h4>
          <p className="text-sm text-muted-foreground">
            An open-source UI component library.
          </p>
          <Separator className="my-4" />
          <div className="flex h-5 items-center space-x-4 text-sm">
            <span>Blog</span>
            <Separator orientation="vertical" />
            <span>Docs</span>
            <Separator orientation="vertical" />
            <span>Source</span>
          </div>
        </div>
      </ComponentPreview>

      <PropsTable
        props={[
          {
            name: "orientation",
            type: '"horizontal" | "vertical"',
            defaultValue: '"horizontal"',
            description: "The orientation of the separator.",
          },
          {
            name: "decorative",
            type: "boolean",
            defaultValue: "false",
            description:
              "When true, signifies that it is purely visual with no semantic meaning.",
          },
        ]}
      />
    </SectionWrapper>
  );
}
