import { SectionWrapper } from "@/components/design-system/section-wrapper";
import { ComponentPreview } from "@/components/design-system/component-preview";
import { PropsTable } from "@/components/design-system/props-table";
import { Skeleton } from "@/components/ui/skeleton";

export function SkeletonSection() {
  return (
    <SectionWrapper
      id="skeleton"
      title="Skeleton"
      description="Use to show a placeholder while content is loading."
    >
      <ComponentPreview title="Card Skeleton">
        <div className="flex flex-col space-y-3">
          <Skeleton className="h-[125px] w-[250px] rounded-xl" />
          <div className="space-y-2">
            <Skeleton className="h-4 w-[250px]" />
            <Skeleton className="h-4 w-[200px]" />
          </div>
        </div>
      </ComponentPreview>

      <ComponentPreview title="Avatar + Text Skeleton">
        <div className="flex items-center space-x-4">
          <Skeleton className="h-12 w-12 rounded-full" />
          <div className="space-y-2">
            <Skeleton className="h-4 w-[250px]" />
            <Skeleton className="h-4 w-[200px]" />
          </div>
        </div>
      </ComponentPreview>

      <PropsTable
        props={[
          {
            name: "className",
            type: "string",
            description:
              "CSS classes to control the size and shape of the skeleton.",
          },
        ]}
      />
    </SectionWrapper>
  );
}
