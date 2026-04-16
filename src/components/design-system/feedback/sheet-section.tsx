"use client";

import { SectionWrapper } from "@/components/design-system/section-wrapper";
import { ComponentPreview } from "@/components/design-system/component-preview";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";

export function SheetSection() {
  return (
    <SectionWrapper
      id="sheet"
      title="Sheet"
      description="Extends the Dialog component to display content that complements the main content."
    >
      <ComponentPreview title="Sheet Sides">
        <div className="flex gap-3">
          <Sheet>
            <SheetTrigger render={<Button variant="outline" />}>Open Right</SheetTrigger>
            <SheetContent side="right">
              <SheetHeader>
                <SheetTitle>Edit Profile</SheetTitle>
                <SheetDescription>
                  Make changes to your profile here. Click save when
                  you&apos;re done.
                </SheetDescription>
              </SheetHeader>
              <div className="py-4">
                <p className="text-sm text-muted-foreground">
                  Sheet content goes here.
                </p>
              </div>
            </SheetContent>
          </Sheet>

          <Sheet>
            <SheetTrigger render={<Button variant="outline" />}>Open Left</SheetTrigger>
            <SheetContent side="left">
              <SheetHeader>
                <SheetTitle>Navigation</SheetTitle>
                <SheetDescription>
                  Browse through the application sections.
                </SheetDescription>
              </SheetHeader>
              <div className="py-4">
                <p className="text-sm text-muted-foreground">
                  Navigation content goes here.
                </p>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </ComponentPreview>
    </SectionWrapper>
  );
}
