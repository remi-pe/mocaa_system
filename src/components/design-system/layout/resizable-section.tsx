"use client";

import { SectionWrapper } from "@/components/design-system/section-wrapper";
import { ComponentPreview } from "@/components/design-system/component-preview";
import { PropsTable } from "@/components/design-system/props-table";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";

export function ResizableSection() {
  return (
    <SectionWrapper
      id="resizable"
      title="Resizable"
      description="Accessible resizable panel groups and layouts."
    >
      <ComponentPreview title="Horizontal 2-Panel" className="block">
        <ResizablePanelGroup
          orientation="horizontal"
          className="min-h-[200px] max-w-md rounded-lg border"
        >
          <ResizablePanel defaultSize={50}>
            <div className="flex h-full items-center justify-center p-6">
              <span className="font-semibold">Panel One</span>
            </div>
          </ResizablePanel>
          <ResizableHandle withHandle />
          <ResizablePanel defaultSize={50}>
            <div className="flex h-full items-center justify-center p-6">
              <span className="font-semibold">Panel Two</span>
            </div>
          </ResizablePanel>
        </ResizablePanelGroup>
      </ComponentPreview>

      <PropsTable
        props={[
          {
            name: "orientation",
            type: '"horizontal" | "vertical"',
            defaultValue: '"horizontal"',
            description: "The orientation of the panel group.",
          },
        ]}
      />
    </SectionWrapper>
  );
}
