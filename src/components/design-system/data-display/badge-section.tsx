import { SectionWrapper } from "@/components/design-system/section-wrapper";
import { ComponentPreview } from "@/components/design-system/component-preview";
import { PropsTable } from "@/components/design-system/props-table";
import { Badge } from "@/components/ui/badge";

export function BadgeSection() {
  return (
    <SectionWrapper
      id="badge"
      title="Badge"
      description="Displays a badge or a component that looks like a badge."
    >
      <ComponentPreview title="Variants">
        <div className="flex flex-wrap gap-3">
          <Badge variant="default">Default</Badge>
          <Badge variant="secondary">Secondary</Badge>
          <Badge variant="outline">Outline</Badge>
          <Badge variant="destructive">Destructive</Badge>
        </div>
      </ComponentPreview>

      <PropsTable
        props={[
          {
            name: "variant",
            type: '"default" | "secondary" | "outline" | "destructive"',
            defaultValue: '"default"',
            description: "The visual style of the badge.",
          },
        ]}
      />
    </SectionWrapper>
  );
}
