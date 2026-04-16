import { SectionWrapper } from "@/components/design-system/section-wrapper";
import { ComponentPreview } from "@/components/design-system/component-preview";
import { PropsTable } from "@/components/design-system/props-table";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { AlertCircle, Terminal } from "lucide-react";

export function AlertSection() {
  return (
    <SectionWrapper
      id="alert"
      title="Alert"
      description="Displays a callout for important information."
    >
      <ComponentPreview title="Default">
        <Alert className="max-w-lg">
          <Terminal className="h-4 w-4" />
          <AlertTitle>Heads up!</AlertTitle>
          <AlertDescription>
            You can add components to your app using the CLI.
          </AlertDescription>
        </Alert>
      </ComponentPreview>

      <ComponentPreview title="Destructive">
        <Alert variant="destructive" className="max-w-lg">
          <AlertCircle className="h-4 w-4" />
          <AlertTitle>Error</AlertTitle>
          <AlertDescription>
            Your session has expired. Please log in again.
          </AlertDescription>
        </Alert>
      </ComponentPreview>

      <PropsTable
        props={[
          {
            name: "variant",
            type: '"default" | "destructive"',
            defaultValue: '"default"',
            description: "The visual style of the alert.",
          },
        ]}
      />
    </SectionWrapper>
  );
}
