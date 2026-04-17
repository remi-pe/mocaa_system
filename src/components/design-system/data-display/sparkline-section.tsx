import { SectionWrapper } from "@/components/design-system/section-wrapper";
import { ComponentPreview } from "@/components/design-system/component-preview";
import { PropsTable } from "@/components/design-system/props-table";
import { Sparkline } from "@/components/ui/sparkline";
import { TrendingDown, TrendingUp } from "lucide-react";

export function SparklineSection() {
  const upwardData = [4, 8, 6, 12, 10, 16, 18, 22, 24, 28];
  const downwardData = [28, 24, 26, 20, 18, 14, 12, 10, 8, 4];
  const volatileData = [10, 22, 8, 26, 14, 30, 6, 24, 12, 20];

  return (
    <SectionWrapper
      id="sparkline"
      title="Sparkline"
      description="A tiny inline chart for showing trends at a glance."
    >
      <ComponentPreview title="Trends">
        <div className="grid w-full max-w-xl gap-6 sm:grid-cols-3">
          <div>
            <p className="mb-1 text-xs text-muted-foreground">Upward</p>
            <Sparkline data={upwardData} color="var(--chart-2)" />
          </div>
          <div>
            <p className="mb-1 text-xs text-muted-foreground">Downward</p>
            <Sparkline data={downwardData} color="var(--destructive)" />
          </div>
          <div>
            <p className="mb-1 text-xs text-muted-foreground">Volatile</p>
            <Sparkline data={volatileData} color="var(--chart-4)" />
          </div>
        </div>
      </ComponentPreview>

      <ComponentPreview title="In a stat card">
        <div className="grid w-full max-w-xl gap-4 sm:grid-cols-2">
          <div className="rounded-lg border bg-background p-4">
            <div className="flex items-center justify-between">
              <p className="text-sm text-muted-foreground">Revenue</p>
              <TrendingUp className="h-4 w-4 text-emerald-500" />
            </div>
            <p className="mt-1 text-2xl font-bold">$42,380</p>
            <div className="mt-2">
              <Sparkline data={upwardData} color="var(--chart-2)" height={40} />
            </div>
          </div>
          <div className="rounded-lg border bg-background p-4">
            <div className="flex items-center justify-between">
              <p className="text-sm text-muted-foreground">Churn</p>
              <TrendingDown className="h-4 w-4 text-destructive" />
            </div>
            <p className="mt-1 text-2xl font-bold">2.1%</p>
            <div className="mt-2">
              <Sparkline
                data={downwardData}
                color="var(--destructive)"
                height={40}
              />
            </div>
          </div>
        </div>
      </ComponentPreview>

      <PropsTable
        props={[
          {
            name: "data",
            type: "number[]",
            description: "Series of values plotted as a line.",
          },
          {
            name: "color",
            type: "string",
            defaultValue: "var(--primary)",
            description: "Stroke color. Accepts any CSS color value.",
          },
          {
            name: "height",
            type: "number",
            defaultValue: "32",
            description: "Chart height in pixels.",
          },
          {
            name: "strokeWidth",
            type: "number",
            defaultValue: "1.5",
            description: "Line stroke width.",
          },
        ]}
      />
    </SectionWrapper>
  );
}
