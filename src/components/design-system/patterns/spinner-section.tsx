import { SectionWrapper } from "@/components/design-system/section-wrapper";
import { ComponentPreview } from "@/components/design-system/component-preview";
import { PropsTable } from "@/components/design-system/props-table";
import { Spinner } from "@/components/ui/spinner";
import { Button } from "@/components/ui/button";

export function SpinnerSection() {
  return (
    <SectionWrapper
      id="spinner"
      title="Spinner"
      description="An indeterminate loading indicator."
    >
      <ComponentPreview title="Sizes">
        <div className="flex items-center gap-6">
          <Spinner size="sm" />
          <Spinner />
          <Spinner size="lg" />
        </div>
      </ComponentPreview>
      <ComponentPreview title="In context">
        <div className="flex items-center gap-6">
          <Button disabled>
            <Spinner size="sm" />
            Saving
          </Button>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Spinner size="sm" />
            Loading...
          </div>
        </div>
      </ComponentPreview>
      <PropsTable
        props={[
          { name: "size", type: '"sm" | "default" | "lg"', defaultValue: '"default"', description: "Size of the spinner." },
          { name: "className", type: "string", description: "Additional classes for the icon." },
        ]}
      />
    </SectionWrapper>
  );
}
