import { SectionWrapper } from "@/components/design-system/section-wrapper";
import { ComponentPreview } from "@/components/design-system/component-preview";
import { PropsTable } from "@/components/design-system/props-table";
import { CodeBlock } from "@/components/ui/code-block";

const snippet = `npm install @mocaa/ui
npx mocaa add button`;

const buttonFile = `import { Button } from "@/components/ui/button";

export function Example() {
  return <Button>Click me</Button>;
}`;

export function CodeBlockSection() {
  return (
    <SectionWrapper
      id="code-block"
      title="Code Block"
      description="Monospace code display with copy button and optional file header."
    >
      <ComponentPreview title="Simple">
        <div className="w-full max-w-xl">
          <CodeBlock code={snippet} />
        </div>
      </ComponentPreview>

      <ComponentPreview title="With file name">
        <div className="w-full max-w-xl">
          <CodeBlock code={buttonFile} fileName="button.tsx" language="tsx" />
        </div>
      </ComponentPreview>

      <ComponentPreview title="With line numbers">
        <div className="w-full max-w-xl">
          <CodeBlock
            code={buttonFile}
            fileName="button.tsx"
            language="tsx"
            showLineNumbers
          />
        </div>
      </ComponentPreview>

      <PropsTable
        props={[
          {
            name: "code",
            type: "string",
            description: "The source code to display.",
          },
          {
            name: "language",
            type: "string",
            description: "Optional language label shown in the header.",
          },
          {
            name: "showLineNumbers",
            type: "boolean",
            defaultValue: "false",
            description: "Render a muted line-number gutter.",
          },
          {
            name: "fileName",
            type: "string",
            description: "File name shown on the left of the header.",
          },
        ]}
      />
    </SectionWrapper>
  );
}
