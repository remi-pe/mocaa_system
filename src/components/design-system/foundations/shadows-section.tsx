import { SectionWrapper } from "@/components/design-system/section-wrapper";
import { SHADOW_TOKENS } from "@/lib/design-system-data";

export function ShadowsSection() {
  return (
    <SectionWrapper
      id="shadows"
      title="Shadows"
      description="Elevation levels using box-shadow utilities."
    >
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3">
        {SHADOW_TOKENS.map((token) => (
          <div
            key={token.className}
            className={`flex h-28 items-center justify-center rounded-lg bg-background p-4 dark:bg-muted/40 ${token.className} dark:shadow-[0_0_20px_rgba(255,255,255,0.05)] dark:[&.shadow-sm]:shadow-[0_1px_6px_rgba(255,255,255,0.06)] dark:[&.shadow]:shadow-[0_2px_10px_rgba(255,255,255,0.07)] dark:[&.shadow-md]:shadow-[0_4px_16px_rgba(255,255,255,0.08)] dark:[&.shadow-lg]:shadow-[0_8px_24px_rgba(255,255,255,0.1)] dark:[&.shadow-xl]:shadow-[0_16px_40px_rgba(255,255,255,0.12)] dark:[&.shadow-2xl]:shadow-[0_24px_50px_rgba(255,255,255,0.15)]`}
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
