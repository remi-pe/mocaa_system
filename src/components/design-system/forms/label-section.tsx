import { SectionWrapper } from "@/components/design-system/section-wrapper";
import { ComponentPreview } from "@/components/design-system/component-preview";
import { PropsTable } from "@/components/design-system/props-table";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";

export function LabelSection() {
  return (
    <SectionWrapper
      id="label"
      title="Label"
      description="Renders an accessible label associated with form controls."
    >
      <ComponentPreview title="With Input">
        <div className="grid w-full max-w-sm gap-1.5">
          <Label htmlFor="label-input-demo">Email</Label>
          <Input
            id="label-input-demo"
            type="email"
            placeholder="name@example.com"
          />
        </div>
      </ComponentPreview>

      <ComponentPreview title="With Checkbox">
        <div className="flex items-center gap-2">
          <Checkbox id="label-checkbox-demo" />
          <Label htmlFor="label-checkbox-demo">
            Accept terms and conditions
          </Label>
        </div>
      </ComponentPreview>

      <PropsTable
        props={[
          {
            name: "htmlFor",
            type: "string",
            description:
              "The id of the form element the label is associated with.",
          },
        ]}
      />
    </SectionWrapper>
  );
}
