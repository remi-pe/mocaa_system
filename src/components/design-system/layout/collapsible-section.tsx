"use client";

import { useState } from "react";
import { ChevronsUpDown } from "lucide-react";
import { SectionWrapper } from "@/components/design-system/section-wrapper";
import { ComponentPreview } from "@/components/design-system/component-preview";
import { PropsTable } from "@/components/design-system/props-table";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { Button } from "@/components/ui/button";

export function CollapsibleSection() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <SectionWrapper
      id="collapsible"
      title="Collapsible"
      description="An interactive component which expands and collapses."
    >
      <ComponentPreview title="Default Collapsible">
        <Collapsible
          open={isOpen}
          onOpenChange={setIsOpen}
          className="w-[350px] space-y-2"
        >
          <div className="flex items-center justify-between space-x-4 px-4">
            <h4 className="text-sm font-semibold">
              @peduarte starred 3 repositories
            </h4>
            <CollapsibleTrigger render={<Button variant="ghost" size="sm" />}>
                <ChevronsUpDown className="h-4 w-4" />
                <span className="sr-only">Toggle</span>
            </CollapsibleTrigger>
          </div>
          <div className="rounded-md border px-4 py-2 font-mono text-sm shadow-sm">
            @radix-ui/primitives
          </div>
          <CollapsibleContent className="space-y-2">
            <div className="rounded-md border px-4 py-2 font-mono text-sm shadow-sm">
              @radix-ui/colors
            </div>
            <div className="rounded-md border px-4 py-2 font-mono text-sm shadow-sm">
              @stitches/react
            </div>
          </CollapsibleContent>
        </Collapsible>
      </ComponentPreview>

      <PropsTable
        props={[
          {
            name: "open",
            type: "boolean",
            description: "The controlled open state.",
          },
          {
            name: "onOpenChange",
            type: "(open: boolean) => void",
            description: "Callback when the open state changes.",
          },
        ]}
      />
    </SectionWrapper>
  );
}
