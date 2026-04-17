import { SectionWrapper } from "@/components/design-system/section-wrapper";
import { ComponentPreview } from "@/components/design-system/component-preview";
import { PropsTable } from "@/components/design-system/props-table";
import { AvatarGroup } from "@/components/ui/avatar-group";

const team = [
  { fallback: "AB" },
  { fallback: "CD" },
  { fallback: "EF" },
  { fallback: "GH" },
  { fallback: "IJ" },
  { fallback: "KL" },
];

export function AvatarGroupSection() {
  return (
    <SectionWrapper
      id="avatar-group"
      title="Avatar Group"
      description="Stack of overlapping avatars with an overflow count."
    >
      <ComponentPreview title="Basic">
        <AvatarGroup avatars={team.slice(0, 3)} />
      </ComponentPreview>

      <ComponentPreview title="With overflow">
        <AvatarGroup avatars={team} max={4} />
      </ComponentPreview>

      <ComponentPreview title="Sizes">
        <div className="flex items-center gap-8">
          <AvatarGroup avatars={team.slice(0, 4)} size="sm" />
          <AvatarGroup avatars={team.slice(0, 4)} size="default" />
          <AvatarGroup avatars={team.slice(0, 4)} size="lg" />
        </div>
      </ComponentPreview>

      <PropsTable
        props={[
          {
            name: "avatars",
            type: "Array<{src?, fallback, alt?}>",
            description: "List of avatars to render.",
          },
          {
            name: "max",
            type: "number",
            defaultValue: "4",
            description: "Maximum number of avatars to show before overflow.",
          },
          {
            name: "size",
            type: '"sm" | "default" | "lg"',
            defaultValue: '"default"',
            description: "Size of each avatar.",
          },
        ]}
      />
    </SectionWrapper>
  );
}
