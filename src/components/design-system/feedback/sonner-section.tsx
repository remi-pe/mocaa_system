"use client";

import { toast } from "sonner";
import { SectionWrapper } from "@/components/design-system/section-wrapper";
import { ComponentPreview } from "@/components/design-system/component-preview";
import { Button } from "@/components/ui/button";

export function SonnerSection() {
  return (
    <SectionWrapper
      id="sonner"
      title="Sonner (Toast)"
      description="An opinionated toast component for React."
    >
      <ComponentPreview title="Toast Variants">
        <div className="flex flex-wrap gap-3">
          <Button
            variant="outline"
            onClick={() => toast("Event has been created.")}
          >
            Default
          </Button>
          <Button
            variant="outline"
            onClick={() => toast.success("Profile saved successfully.")}
          >
            Success
          </Button>
          <Button
            variant="outline"
            onClick={() => toast.error("Something went wrong.")}
          >
            Error
          </Button>
          <Button
            variant="outline"
            onClick={() =>
              toast("Event has been created", {
                action: {
                  label: "Undo",
                  onClick: () => toast("Undo clicked"),
                },
              })
            }
          >
            With Action
          </Button>
        </div>
      </ComponentPreview>
    </SectionWrapper>
  );
}
