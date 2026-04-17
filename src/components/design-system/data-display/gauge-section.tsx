import { SectionWrapper } from "@/components/design-system/section-wrapper";
import { ComponentPreview } from "@/components/design-system/component-preview";
import { PropsTable } from "@/components/design-system/props-table";
import { Gauge } from "@/components/ui/gauge";

export function GaugeSection() {
  return (
    <SectionWrapper
      id="gauge"
      title="Gauge"
      description="Circular progress indicator with the value rendered in the center."
    >
      <ComponentPreview title="Values">
        <div className="flex flex-wrap items-center justify-center gap-8">
          <Gauge value={25} />
          <Gauge value={75} color="var(--chart-2)" />
          <Gauge value={100} color="var(--chart-3)" />
        </div>
      </ComponentPreview>

      <ComponentPreview title="With label">
        <Gauge value={68} label="Storage used" size={160} strokeWidth={10} />
      </ComponentPreview>

      <PropsTable
        props={[
          {
            name: "value",
            type: "number",
            description: "Progress value between 0 and 100.",
          },
          {
            name: "size",
            type: "number",
            defaultValue: "120",
            description: "Overall diameter in pixels.",
          },
          {
            name: "strokeWidth",
            type: "number",
            defaultValue: "8",
            description: "Thickness of the gauge ring.",
          },
          {
            name: "label",
            type: "string",
            description: "Optional caption below the value.",
          },
          {
            name: "color",
            type: "string",
            defaultValue: "var(--primary)",
            description: "Color of the filled arc.",
          },
        ]}
      />
    </SectionWrapper>
  );
}
