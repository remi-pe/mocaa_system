import { SectionWrapper } from "@/components/design-system/section-wrapper";
import { SHADOW_TOKENS } from "@/lib/design-system-data";

export function ShadowsSection() {
  return (
    <SectionWrapper
      id="shadows"
      title="Shadows"
      description="Elevation levels using box-shadow utilities."
    >
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
        {SHADOW_TOKENS.map((token) => (
          <div
            key={token.className}
            className={`flex h-28 items-center justify-center rounded-lg border bg-card p-4 ${token.className}`}
          >
            <div className="text-center">
              <p className="text-sm font-medium">{token.name}</p>
              <p className="font-mono text-xs text-muted-foreground">
                {token.className}
              </p>
            </div>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}
