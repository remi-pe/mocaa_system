import { SectionWrapper } from "@/components/design-system/section-wrapper";
import { ComponentPreview } from "@/components/design-system/component-preview";
import { PropsTable } from "@/components/design-system/props-table";
import { DiffViewer } from "@/components/ui/diff-viewer";

const before = `function greet(name) {
  console.log("Hello, " + name);
  return true;
}

greet("world");`;

const after = `function greet(name: string) {
  console.log(\`Hello, \${name}!\`);
  return name.length > 0;
}

greet("world");`;

export function DiffViewerSection() {
  return (
    <SectionWrapper
      id="diff-viewer"
      title="Diff Viewer"
      description="Line-by-line unified diff display."
    >
      <ComponentPreview title="Before / After">
        <div className="w-full max-w-xl">
          <DiffViewer oldCode={before} newCode={after} />
        </div>
      </ComponentPreview>

      <PropsTable
        props={[
          {
            name: "oldCode",
            type: "string",
            description: "Original source. Lines only in this version are marked removed.",
          },
          {
            name: "newCode",
            type: "string",
            description: "Updated source. Lines only in this version are marked added.",
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
