"use client";

import { SectionWrapper } from "@/components/design-system/section-wrapper";
import { ComponentPreview } from "@/components/design-system/component-preview";
import { PropsTable } from "@/components/design-system/props-table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export function TabsSection() {
  return (
    <SectionWrapper
      id="tabs"
      title="Tabs"
      description="A set of layered sections of content, known as tab panels."
    >
      <ComponentPreview title="Default Tabs">
        <Tabs defaultValue="account" className="w-[400px]">
          <TabsList>
            <TabsTrigger value="account">Account</TabsTrigger>
            <TabsTrigger value="password">Password</TabsTrigger>
            <TabsTrigger value="settings">Settings</TabsTrigger>
          </TabsList>
          <TabsContent value="account">
            <p className="text-sm text-muted-foreground pt-2">
              Make changes to your account here. Update your display name and
              email address.
            </p>
          </TabsContent>
          <TabsContent value="password">
            <p className="text-sm text-muted-foreground pt-2">
              Change your password here. After saving, you&apos;ll be logged out.
            </p>
          </TabsContent>
          <TabsContent value="settings">
            <p className="text-sm text-muted-foreground pt-2">
              Manage your notification preferences and app settings.
            </p>
          </TabsContent>
        </Tabs>
      </ComponentPreview>

      <PropsTable
        props={[
          {
            name: "defaultValue",
            type: "string",
            description: "The value of the tab that should be active by default.",
          },
          {
            name: "value",
            type: "string",
            description: "The controlled value of the active tab.",
          },
          {
            name: "onValueChange",
            type: "(value: string) => void",
            description: "Callback when the active tab changes.",
          },
        ]}
      />
    </SectionWrapper>
  );
}
