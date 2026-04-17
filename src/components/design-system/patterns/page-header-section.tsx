import { Plus, Download } from "lucide-react";
import { SectionWrapper } from "@/components/design-system/section-wrapper";
import { ComponentPreview } from "@/components/design-system/component-preview";
import { PropsTable } from "@/components/design-system/props-table";
import { Button } from "@/components/ui/button";
import { PageHeader } from "@/components/ui/page-header";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

export function PageHeaderSection() {
  return (
    <SectionWrapper
      id="page-header"
      title="Page Header"
      description="Top-of-page title, description, and action area."
    >
      <ComponentPreview title="Simple" className="block">
        <PageHeader
          title="Dashboard"
          description="Overview of your account activity."
        />
      </ComponentPreview>
      <ComponentPreview title="With actions" className="block">
        <PageHeader
          title="Projects"
          description="Manage and track all of your active projects."
          actions={
            <>
              <Button variant="outline">
                <Download />
                Export
              </Button>
              <Button>
                <Plus />
                New project
              </Button>
            </>
          }
        />
      </ComponentPreview>
      <ComponentPreview title="With breadcrumbs" className="block">
        <PageHeader
          title="Billing settings"
          description="Update payment methods and view invoices."
          breadcrumbs={
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem>
                  <BreadcrumbLink href="#">Settings</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbPage>Billing</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          }
          actions={<Button>Save changes</Button>}
        />
      </ComponentPreview>
      <PropsTable
        props={[
          { name: "title", type: "string", description: "The page title." },
          {
            name: "description",
            type: "string",
            description: "Supporting text below the title.",
          },
          {
            name: "actions",
            type: "React.ReactNode",
            description: "Action buttons displayed on the right.",
          },
          {
            name: "breadcrumbs",
            type: "React.ReactNode",
            description: "Optional breadcrumb trail rendered above the title.",
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
