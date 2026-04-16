import { SectionWrapper } from "@/components/design-system/section-wrapper";
import { ComponentPreview } from "@/components/design-system/component-preview";
import { PropsTable } from "@/components/design-system/props-table";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function AccordionSection() {
  return (
    <SectionWrapper
      id="accordion"
      title="Accordion"
      description="A vertically stacked set of interactive headings that reveal content."
    >
      <ComponentPreview title="Single Collapsible">
        <Accordion className="w-full max-w-md">
          <AccordionItem value="item-1">
            <AccordionTrigger>Is it accessible?</AccordionTrigger>
            <AccordionContent>
              Yes. It adheres to the WAI-ARIA design pattern.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>Is it styled?</AccordionTrigger>
            <AccordionContent>
              Yes. It comes with default styles that match the other components.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>Is it animated?</AccordionTrigger>
            <AccordionContent>
              Yes. It&apos;s animated by default, but you can disable it if you
              prefer.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </ComponentPreview>

      <PropsTable
        props={[
          {
            name: "value",
            type: "number[]",
            description: "The controlled value of the open item(s).",
          },
          {
            name: "onValueChange",
            type: "(value: number[]) => void",
            description: "Callback when the open item(s) change.",
          },
          {
            name: "openMultiple",
            type: "boolean",
            defaultValue: "true",
            description:
              "Whether multiple items can be opened at the same time.",
          },
        ]}
      />
    </SectionWrapper>
  );
}
