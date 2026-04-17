import { Inbox, FileQuestion, Sparkles } from "lucide-react";
import { SectionWrapper } from "@/components/design-system/section-wrapper";
import { ComponentPreview } from "@/components/design-system/component-preview";
import { PropsTable } from "@/components/design-system/props-table";
import { Button } from "@/components/ui/button";
import { EmptyState } from "@/components/ui/empty-state";

export function EmptyStateSection() {
  return (
    <SectionWrapper
      id="empty-state"
      title="Empty State"
      description="A placeholder for empty content areas."
    >
      <ComponentPreview title="With icon and action">
        <EmptyState
          icon={<Inbox className="h-6 w-6" />}
          title="No messages yet"
          description="When you receive messages, they will appear here."
          action={<Button>Compose message</Button>}
        />
      </ComponentPreview>
      <ComponentPreview title="Without action">
        <EmptyState
          icon={<FileQuestion className="h-6 w-6" />}
          title="No results found"
          description="Try adjusting your filters or search query."
        />
      </ComponentPreview>
      <ComponentPreview title="With custom illustration">
        <EmptyState
          icon={<Sparkles className="h-6 w-6 text-primary" />}
          title="Start something new"
          description="Create your first project to get started with the platform."
          action={
            <div className="flex gap-2">
              <Button variant="outline">Learn more</Button>
              <Button>New project</Button>
            </div>
          }
        />
      </ComponentPreview>
      <PropsTable
        props={[
          {
            name: "icon",
            type: "React.ReactNode",
            description: "Optional icon displayed in a muted circle above the title.",
          },
          {
            name: "title",
            type: "string",
            description: "The main heading of the empty state.",
          },
          {
            name: "description",
            type: "string",
            description: "Supporting text below the title.",
          },
          {
            name: "action",
            type: "React.ReactNode",
            description: "Optional action element rendered at the bottom.",
          },
          {
            name: "className",
            type: "string",
            description: "Additional classes for the container.",
          },
        ]}
      />
    </SectionWrapper>
  );
}
