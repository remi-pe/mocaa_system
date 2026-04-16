import { SectionWrapper } from "@/components/design-system/section-wrapper";
import { ComponentPreview } from "@/components/design-system/component-preview";
import { PropsTable } from "@/components/design-system/props-table";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export function CardSection() {
  return (
    <SectionWrapper
      id="card"
      title="Card"
      description="Displays a card with header, content, and footer."
    >
      <ComponentPreview title="Default Card">
        <Card className="w-[350px]">
          <CardHeader>
            <CardTitle>Create project</CardTitle>
            <CardDescription>
              Deploy your new project in one-click.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              Your new project will be created with default settings. You can
              customize it later from the project settings page.
            </p>
          </CardContent>
          <CardFooter className="flex justify-between">
            <Button variant="outline">Cancel</Button>
            <Button>Deploy</Button>
          </CardFooter>
        </Card>
      </ComponentPreview>

      <PropsTable
        props={[
          {
            name: "children",
            type: "ReactNode",
            description: "Card content composed with sub-components.",
          },
          {
            name: "className",
            type: "string",
            description: "Additional CSS classes.",
          },
        ]}
      />
    </SectionWrapper>
  );
}
