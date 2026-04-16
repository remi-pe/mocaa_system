"use client";

import { SectionWrapper } from "@/components/design-system/section-wrapper";
import { ComponentPreview } from "@/components/design-system/component-preview";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";

export function TooltipSection() {
  return (
    <SectionWrapper
      id="tooltip"
      title="Tooltip"
      description="A popup that displays information related to an element on hover."
    >
      <ComponentPreview title="Tooltip Sides">
        <div className="flex gap-4">
          <Tooltip>
            <TooltipTrigger render={<Button variant="outline" size="icon" />}>
                <Plus className="h-4 w-4" />
            </TooltipTrigger>
            <TooltipContent side="top">
              <p>Top</p>
            </TooltipContent>
          </Tooltip>

          <Tooltip>
            <TooltipTrigger render={<Button variant="outline" size="icon" />}>
                <Plus className="h-4 w-4" />
            </TooltipTrigger>
            <TooltipContent side="bottom">
              <p>Bottom</p>
            </TooltipContent>
          </Tooltip>

          <Tooltip>
            <TooltipTrigger render={<Button variant="outline" size="icon" />}>
                <Plus className="h-4 w-4" />
            </TooltipTrigger>
            <TooltipContent side="left">
              <p>Left</p>
            </TooltipContent>
          </Tooltip>

          <Tooltip>
            <TooltipTrigger render={<Button variant="outline" size="icon" />}>
                <Plus className="h-4 w-4" />
            </TooltipTrigger>
            <TooltipContent side="right">
              <p>Right</p>
            </TooltipContent>
          </Tooltip>
        </div>
      </ComponentPreview>
    </SectionWrapper>
  );
}
