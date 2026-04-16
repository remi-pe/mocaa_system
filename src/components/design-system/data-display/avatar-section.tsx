import { SectionWrapper } from "@/components/design-system/section-wrapper";
import { ComponentPreview } from "@/components/design-system/component-preview";
import { PropsTable } from "@/components/design-system/props-table";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar";

export function AvatarSection() {
  return (
    <SectionWrapper
      id="avatar"
      title="Avatar"
      description="An image element with a fallback for representing the user."
    >
      <ComponentPreview title="With Image">
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </ComponentPreview>

      <ComponentPreview title="Fallback Initials">
        <div className="flex gap-3">
          <Avatar>
            <AvatarFallback>JD</AvatarFallback>
          </Avatar>
          <Avatar>
            <AvatarFallback>AB</AvatarFallback>
          </Avatar>
          <Avatar>
            <AvatarFallback>ZK</AvatarFallback>
          </Avatar>
        </div>
      </ComponentPreview>

      <ComponentPreview title="Sizes">
        <div className="flex items-center gap-4">
          <Avatar className="h-8 w-8">
            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <Avatar className="h-12 w-12">
            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <Avatar className="h-16 w-16">
            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </div>
      </ComponentPreview>

      <PropsTable
        props={[
          {
            name: "src",
            type: "string",
            description: "The image source URL (on AvatarImage).",
          },
          {
            name: "alt",
            type: "string",
            description: "Alt text for the avatar image (on AvatarImage).",
          },
          {
            name: "children",
            type: "ReactNode",
            description:
              "Fallback content displayed when the image fails to load (on AvatarFallback).",
          },
        ]}
      />
    </SectionWrapper>
  );
}
