import { SectionWrapper } from "@/components/design-system/section-wrapper";
import { ComponentPreview } from "@/components/design-system/component-preview";
import { PropsTable } from "@/components/design-system/props-table";
import { Timeline } from "@/components/ui/timeline";
import { Check, Loader2, Rocket, Clock } from "lucide-react";

export function TimelineSection() {
  return (
    <SectionWrapper
      id="timeline"
      title="Timeline"
      description="Vertical event log with status dots and timestamps."
    >
      <ComponentPreview title="Deployment">
        <div className="w-full max-w-md">
          <Timeline
            items={[
              {
                title: "Queued",
                description: "Deployment queued for processing.",
                timestamp: "2m ago",
                status: "success",
                icon: <Check className="h-4 w-4" />,
              },
              {
                title: "Building",
                description: "Compiling and bundling assets.",
                timestamp: "1m ago",
                status: "success",
                icon: <Check className="h-4 w-4" />,
              },
              {
                title: "Deploying",
                description: "Uploading to edge network.",
                timestamp: "Now",
                status: "default",
                icon: <Loader2 className="h-4 w-4 animate-spin" />,
              },
              {
                title: "Live",
                description: "Available at production URL.",
                status: "default",
                icon: <Rocket className="h-4 w-4" />,
              },
            ]}
          />
        </div>
      </ComponentPreview>

      <ComponentPreview title="Activity feed">
        <div className="w-full max-w-md">
          <Timeline
            items={[
              {
                title: "Alex commented on #421",
                timestamp: "10:42",
                icon: <Clock className="h-3.5 w-3.5" />,
              },
              {
                title: "Jamie merged PR #418",
                timestamp: "09:15",
                status: "success",
                icon: <Check className="h-4 w-4" />,
              },
              {
                title: "Build failed on main",
                timestamp: "Yesterday",
                status: "error",
              },
            ]}
          />
        </div>
      </ComponentPreview>

      <PropsTable
        props={[
          {
            name: "items",
            type: "TimelineItem[]",
            description:
              "Events with title, description, timestamp, icon, and status.",
          },
        ]}
      />
    </SectionWrapper>
  );
}
