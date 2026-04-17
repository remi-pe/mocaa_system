import { SectionWrapper } from "@/components/design-system/section-wrapper";
import { ComponentPreview } from "@/components/design-system/component-preview";
import { PropsTable } from "@/components/design-system/props-table";
import { JsonViewer } from "@/components/ui/json-viewer";

const sample = {
  id: 1024,
  name: "Ada Lovelace",
  email: "ada@example.com",
  active: true,
  verified: null,
  address: {
    street: "10 Downing St",
    city: "London",
    zip: "SW1A 2AA",
  },
  tags: ["admin", "beta", "engineer"],
  stats: {
    posts: 42,
    followers: 1337,
  },
};

export function JsonViewerSection() {
  return (
    <SectionWrapper
      id="json-viewer"
      title="JSON Viewer"
      description="Recursive, collapsible JSON tree with syntax-coloured values."
    >
      <ComponentPreview title="API response">
        <div className="w-full max-w-xl">
          <JsonViewer data={sample} />
        </div>
      </ComponentPreview>

      <PropsTable
        props={[
          {
            name: "data",
            type: "unknown",
            description: "Value to render. Any JSON-serialisable shape.",
          },
          {
            name: "defaultExpanded",
            type: "boolean",
            defaultValue: "true",
            description: "Whether the root node is expanded initially.",
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
