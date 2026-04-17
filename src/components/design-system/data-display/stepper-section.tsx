import { SectionWrapper } from "@/components/design-system/section-wrapper";
import { ComponentPreview } from "@/components/design-system/component-preview";
import { PropsTable } from "@/components/design-system/props-table";
import { Stepper } from "@/components/ui/stepper";

export function StepperSection() {
  return (
    <SectionWrapper
      id="stepper"
      title="Stepper"
      description="Horizontal multi-step flow indicator."
    >
      <ComponentPreview title="Checkout">
        <div className="w-full max-w-xl">
          <Stepper
            currentStep={1}
            steps={[
              { label: "Cart", description: "Review items" },
              { label: "Shipping", description: "Address & method" },
              { label: "Payment", description: "Card details" },
              { label: "Confirm", description: "Place order" },
            ]}
          />
        </div>
      </ComponentPreview>

      <ComponentPreview title="Completed">
        <div className="w-full max-w-lg">
          <Stepper
            currentStep={3}
            steps={[
              { label: "Account" },
              { label: "Profile" },
              { label: "Done" },
            ]}
          />
        </div>
      </ComponentPreview>

      <PropsTable
        props={[
          {
            name: "steps",
            type: "Array<{label, description?}>",
            description: "Ordered list of steps.",
          },
          {
            name: "currentStep",
            type: "number",
            description: "Zero-indexed active step.",
          },
          {
            name: "className",
            type: "string",
            description: "Additional classes for the root element.",
          },
        ]}
      />
    </SectionWrapper>
  );
}
