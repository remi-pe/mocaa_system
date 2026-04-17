import { SectionWrapper } from "@/components/design-system/section-wrapper";
import { ComponentPreview } from "@/components/design-system/component-preview";
import { PropsTable } from "@/components/design-system/props-table";
import { StatusDot } from "@/components/ui/status-dot";

export function StatusDotSection() {
  return (
    <SectionWrapper
      id="status-dot"
      title="Status Dot"
      description="A small colored indicator for status or presence."
    >
      <ComponentPreview title="All statuses with labels">
        <div className="grid grid-cols-2 gap-x-8 gap-y-3 sm:grid-cols-4">
          <StatusDot status="online" label="Online" />
          <StatusDot status="offline" label="Offline" />
          <StatusDot status="busy" label="Busy" />
          <StatusDot status="away" label="Away" />
          <StatusDot status="success" label="Success" />
          <StatusDot status="error" label="Error" />
          <StatusDot status="warning" label="Warning" />
          <StatusDot status="info" label="Info" />
        </div>
      </ComponentPreview>
      <ComponentPreview title="With pulse animation">
        <div className="flex items-center gap-6">
          <StatusDot status="online" pulse label="Live" />
          <StatusDot status="busy" pulse label="Recording" />
          <StatusDot status="info" pulse label="Syncing" />
        </div>
      </ComponentPreview>
      <PropsTable
        props={[
          {
            name: "status",
            type: '"online" | "offline" | "busy" | "away" | "success" | "error" | "warning" | "info"',
            description: "Status color variant.",
          },
          { name: "pulse", type: "boolean", defaultValue: "false", description: "Adds a subtle pulse animation." },
          { name: "label", type: "string", description: "Optional text rendered beside the dot." },
          { name: "className", type: "string", description: "Additional classes for the container." },
        ]}
      />
    </SectionWrapper>
  );
}
