"use client";

import { SectionWrapper } from "@/components/design-system/section-wrapper";
import { ComponentPreview } from "@/components/design-system/component-preview";
import { PropsTable } from "@/components/design-system/props-table";
import { Button } from "@/components/ui/button";
import { ChevronRight, Loader2, Mail } from "lucide-react";

export function ButtonSection() {
  return (
    <SectionWrapper
      id="button"
      title="Button"
      description="Displays a button or a component that looks like a button."
    >
      <ComponentPreview title="Variants">
        <div className="flex flex-wrap items-center gap-3">
          <Button variant="default">Default</Button>
          <Button variant="destructive">Destructive</Button>
          <Button variant="outline">Outline</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="ghost">Ghost</Button>
          <Button variant="link">Link</Button>
        </div>
      </ComponentPreview>

      <ComponentPreview title="Sizes">
        <div className="flex flex-wrap items-center gap-3">
          <Button size="xs">Extra Small</Button>
          <Button size="default">Default</Button>
          <Button size="lg">Large</Button>
          <Button size="xl">Extra Large</Button>
          <Button size="icon">
            <Mail />
          </Button>
        </div>
      </ComponentPreview>

      <ComponentPreview title="With Icon">
        <div className="flex flex-wrap items-center gap-3">
          <Button>
            Next <ChevronRight />
          </Button>
          <Button variant="outline">
            <Mail /> Login with Email
          </Button>
        </div>
      </ComponentPreview>

      <ComponentPreview title="Loading">
        <Button disabled>
          <Loader2 className="animate-spin" />
          Please wait
        </Button>
      </ComponentPreview>

      <ComponentPreview title="Disabled">
        <Button disabled>Disabled</Button>
      </ComponentPreview>

      <ComponentPreview title="As Link">
        <Button variant="link" nativeButton={false} render={<a href="#" />}>
          Login
        </Button>
      </ComponentPreview>

      <PropsTable
        props={[
          {
            name: "variant",
            type: '"default" | "destructive" | "outline" | "secondary" | "ghost" | "link"',
            defaultValue: '"default"',
            description: "The visual style of the button.",
          },
          {
            name: "size",
            type: '"default" | "xs" | "lg" | "xl" | "icon"',
            defaultValue: '"default"',
            description: "The size of the button.",
          },
          {
            name: "render",
            type: "React.ReactElement",
            defaultValue: "undefined",
            description:
              "Render as a custom element (e.g. anchor tag) instead of a button.",
          },
          {
            name: "disabled",
            type: "boolean",
            defaultValue: "false",
            description: "Prevents interaction and applies disabled styling.",
          },
        ]}
      />
    </SectionWrapper>
  );
}
