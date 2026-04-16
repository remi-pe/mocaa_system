"use client";

import { SectionWrapper } from "@/components/design-system/section-wrapper";
import { ColorSwatch } from "@/components/design-system/color-swatch";
import { COLOR_TOKENS } from "@/lib/design-system-data";

const GROUPS = [
  "Backgrounds",
  "Foregrounds",
  "Brand",
  "State",
  "Borders & Input",
  "Charts",
  "Sidebar",
] as const;

export function ColorsSection() {
  const grouped = GROUPS.map((group) => ({
    group,
    tokens: COLOR_TOKENS.filter((t) => t.group === group),
  }));

  return (
    <SectionWrapper
      id="colors"
      title="Colors"
      description="Design tokens mapped to CSS custom properties using oklch color space."
    >
      <div className="space-y-8">
        {grouped.map(({ group, tokens }) => (
          <div key={group}>
            <h3 className="mb-3 text-lg font-semibold">{group}</h3>
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {tokens.map((token) => (
                <ColorSwatch
                  key={token.variable}
                  name={token.name}
                  variable={token.variable}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}
