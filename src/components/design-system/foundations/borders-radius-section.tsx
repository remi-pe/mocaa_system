import { SectionWrapper } from "@/components/design-system/section-wrapper";
import { RADIUS_TOKENS } from "@/lib/design-system-data";

export function BordersRadiusSection() {
  return (
    <SectionWrapper
      id="borders-radius"
      title="Borders & Radius"
      description="Border radius tokens derived from the --radius CSS variable."
    >
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7">
        {RADIUS_TOKENS.map((token) => (
          <div key={token.className} className="flex flex-col items-center gap-2">
            <div
              className={`flex h-20 w-20 items-center justify-center border border-primary bg-muted ${token.className}`}
            />
            <div className="text-center">
              <p className="font-mono text-xs font-medium">{token.className}</p>
              <p className="font-mono text-xs text-muted-foreground">
                {token.px}
              </p>
            </div>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}
