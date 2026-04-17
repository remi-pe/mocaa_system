import { SectionWrapper } from "@/components/design-system/section-wrapper";
import { ComponentPreview } from "@/components/design-system/component-preview";
import { PropsTable } from "@/components/design-system/props-table";
import { Kbd } from "@/components/ui/kbd";

export function KbdSection() {
  return (
    <SectionWrapper
      id="kbd"
      title="Kbd"
      description="Styled keyboard key for inline shortcut hints."
    >
      <ComponentPreview title="Single and combo">
        <div className="flex items-center gap-4">
          <Kbd>⌘</Kbd>
          <div className="flex items-center gap-1">
            <Kbd>⌘</Kbd>
            <span className="text-muted-foreground">+</span>
            <Kbd>K</Kbd>
          </div>
        </div>
      </ComponentPreview>
      <ComponentPreview title="In context">
        <p className="text-sm text-muted-foreground">
          Press <Kbd>⌘</Kbd> <Kbd>K</Kbd> to open the command palette.
        </p>
      </ComponentPreview>
      <PropsTable
        props={[
          { name: "children", type: "React.ReactNode", description: "Key label content." },
          { name: "className", type: "string", description: "Additional classes for the element." },
        ]}
      />
    </SectionWrapper>
  );
}
