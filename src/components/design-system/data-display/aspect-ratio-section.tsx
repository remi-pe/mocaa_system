import { SectionWrapper } from "@/components/design-system/section-wrapper";
import { ComponentPreview } from "@/components/design-system/component-preview";
import { PropsTable } from "@/components/design-system/props-table";
import { AspectRatio } from "@/components/ui/aspect-ratio";

export function AspectRatioSection() {
  return (
    <SectionWrapper
      id="aspect-ratio"
      title="Aspect Ratio"
      description="Displays content within a desired ratio."
    >
      <ComponentPreview title="16:9 Ratio">
        <div className="w-[450px]">
          <AspectRatio ratio={16 / 9}>
            <div className="flex h-full w-full items-center justify-center rounded-md bg-muted">
              <span className="text-sm text-muted-foreground">16 : 9</span>
            </div>
          </AspectRatio>
        </div>
      </ComponentPreview>

      <PropsTable
        props={[
          {
            name: "ratio",
            type: "number",
            defaultValue: "1",
            description: "The desired aspect ratio (e.g. 16/9).",
          },
        ]}
      />
    </SectionWrapper>
  );
}
