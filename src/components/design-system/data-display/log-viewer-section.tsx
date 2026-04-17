import { SectionWrapper } from "@/components/design-system/section-wrapper";
import { ComponentPreview } from "@/components/design-system/component-preview";
import { PropsTable } from "@/components/design-system/props-table";
import { LogViewer } from "@/components/ui/log-viewer";

const sampleLogs = [
  { timestamp: "12:00:01", level: "info" as const, message: "Server started on port 3000" },
  { timestamp: "12:00:02", level: "debug" as const, message: "Loaded config from .env.production" },
  { timestamp: "12:00:04", level: "info" as const, message: "Connected to database (pool size: 10)" },
  { timestamp: "12:00:12", level: "warn" as const, message: "Deprecated API call: /v1/users" },
  { timestamp: "12:00:15", level: "info" as const, message: "GET /api/health 200 12ms" },
  { timestamp: "12:00:18", level: "error" as const, message: "Failed to fetch user #4821: timeout" },
  { timestamp: "12:00:21", level: "debug" as const, message: "Cache hit ratio: 94.2%" },
  { timestamp: "12:00:25", level: "warn" as const, message: "High memory usage: 87%" },
  { timestamp: "12:00:31", level: "info" as const, message: "Background job 'digest' completed" },
  { timestamp: "12:00:40", level: "error" as const, message: "Unhandled exception in worker #2" },
];

export function LogViewerSection() {
  return (
    <SectionWrapper
      id="log-viewer"
      title="Log Viewer"
      description="Filterable terminal-style log output with level badges."
    >
      <ComponentPreview title="Server logs">
        <div className="w-full max-w-xl">
          <LogViewer logs={sampleLogs} />
        </div>
      </ComponentPreview>

      <PropsTable
        props={[
          {
            name: "logs",
            type: "Array<{timestamp, level, message}>",
            description:
              "Log entries. Level is one of 'info' | 'warn' | 'error' | 'debug'.",
          },
          {
            name: "className",
            type: "string",
            description: "Additional classes for the root element.",
          },
        ]}
      />
    </SectionWrapper>
  );
}
