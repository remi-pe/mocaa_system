import { SectionWrapper } from "@/components/design-system/section-wrapper";
import { SPACING_SCALE } from "@/lib/design-system-data";

const MAX_BAR_WIDTH = 384;

export function SpacingSection() {
  const maxPx = SPACING_SCALE[SPACING_SCALE.length - 1].px;

  return (
    <SectionWrapper
      id="spacing"
      title="Spacing"
      description="Consistent spacing scale based on a 4px / 0.25rem base unit."
    >
      <div className="overflow-x-auto">
        <table className="w-full text-left text-sm">
          <thead>
            <tr className="border-b">
              <th className="pb-2 pr-4 font-medium">Class</th>
              <th className="pb-2 pr-4 font-medium">Rem</th>
              <th className="pb-2 pr-4 font-medium">Pixels</th>
              <th className="pb-2 font-medium">Visual</th>
            </tr>
          </thead>
          <tbody>
            {SPACING_SCALE.map((space) => {
              const barWidth =
                space.px === 0
                  ? 1
                  : Math.max(2, (space.px / maxPx) * MAX_BAR_WIDTH);

              return (
                <tr key={space.key} className="border-b last:border-0">
                  <td className="py-1.5 pr-4 font-mono text-xs text-muted-foreground">
                    p-{space.key}
                  </td>
                  <td className="py-1.5 pr-4 font-mono text-xs text-muted-foreground">
                    {space.rem}
                  </td>
                  <td className="py-1.5 pr-4 font-mono text-xs text-muted-foreground">
                    {space.px}px
                  </td>
                  <td className="py-1.5">
                    <div
                      className="h-3 rounded-sm bg-primary"
                      style={{
                        width: `${barWidth}px`,
                        maxWidth: `${MAX_BAR_WIDTH}px`,
                      }}
                    />
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </SectionWrapper>
  );
}
