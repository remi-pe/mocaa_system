import { SectionWrapper } from "@/components/design-system/section-wrapper";
import { ComponentPreview } from "@/components/design-system/component-preview";

const HEADING_SPECIMENS = [
  { label: "h1", className: "text-4xl font-extrabold tracking-tight", text: "The quick brown fox" },
  { label: "h2", className: "text-3xl font-bold tracking-tight", text: "The quick brown fox" },
  { label: "h3", className: "text-2xl font-semibold tracking-tight", text: "The quick brown fox" },
  { label: "h4", className: "text-xl font-semibold tracking-tight", text: "The quick brown fox" },
] as const;

const BODY_VARIANTS = [
  { label: "Paragraph", className: "text-base leading-7", text: "The quick brown fox jumps over the lazy dog. Pack my box with five dozen liquor jugs." },
  { label: "Lead", className: "text-xl text-muted-foreground", text: "A large introductory paragraph for hero sections and page leads." },
  { label: "Large", className: "text-lg font-semibold", text: "Emphasized body text for callouts and highlights." },
  { label: "Small", className: "text-sm font-medium leading-none", text: "Small text for captions and labels." },
  { label: "Muted", className: "text-sm text-muted-foreground", text: "Secondary text for descriptions and helper copy." },
] as const;

const FONT_WEIGHTS = [
  { label: "Thin", weight: "font-thin", value: 100 },
  { label: "Extra Light", weight: "font-extralight", value: 200 },
  { label: "Light", weight: "font-light", value: 300 },
  { label: "Normal", weight: "font-normal", value: 400 },
  { label: "Medium", weight: "font-medium", value: 500 },
  { label: "Semibold", weight: "font-semibold", value: 600 },
  { label: "Bold", weight: "font-bold", value: 700 },
  { label: "Extra Bold", weight: "font-extrabold", value: 800 },
  { label: "Black", weight: "font-black", value: 900 },
] as const;

const SIZE_SCALE = [
  { className: "text-xs", size: "0.75rem / 12px" },
  { className: "text-sm", size: "0.875rem / 14px" },
  { className: "text-base", size: "1rem / 16px" },
  { className: "text-lg", size: "1.125rem / 18px" },
  { className: "text-xl", size: "1.25rem / 20px" },
  { className: "text-2xl", size: "1.5rem / 24px" },
  { className: "text-3xl", size: "1.875rem / 30px" },
  { className: "text-4xl", size: "2.25rem / 36px" },
  { className: "text-5xl", size: "3rem / 48px" },
] as const;

export function TypographySection() {
  return (
    <SectionWrapper
      id="typography"
      title="Typography"
      description="Font families, sizes, weights, and text styles using Geist Sans and Geist Mono."
    >
      <div className="space-y-8">
        {/* Heading specimens */}
        <ComponentPreview title="Headings" className="flex-col items-start gap-4">
          {HEADING_SPECIMENS.map((specimen) => (
            <div key={specimen.label} className="w-full">
              <span className="mb-1 block font-mono text-xs text-muted-foreground">
                {specimen.label} &mdash; {specimen.className}
              </span>
              <p className={specimen.className}>{specimen.text}</p>
            </div>
          ))}
        </ComponentPreview>

        {/* Body text variants */}
        <ComponentPreview title="Body Text" className="flex-col items-start gap-4">
          {BODY_VARIANTS.map((variant) => (
            <div key={variant.label} className="w-full">
              <span className="mb-1 block font-mono text-xs text-muted-foreground">
                {variant.label} &mdash; {variant.className}
              </span>
              <p className={variant.className}>{variant.text}</p>
            </div>
          ))}
        </ComponentPreview>

        {/* Font weights */}
        <ComponentPreview title="Font Weights" className="flex-col items-start gap-3">
          {FONT_WEIGHTS.map((fw) => (
            <div key={fw.value} className="flex w-full items-baseline gap-4">
              <span className="w-20 shrink-0 font-mono text-xs text-muted-foreground">
                {fw.value}
              </span>
              <p className={`text-xl ${fw.weight}`}>
                {fw.label} &mdash; The quick brown fox
              </p>
            </div>
          ))}
        </ComponentPreview>

        {/* Size scale */}
        <ComponentPreview title="Size Scale" className="flex-col items-start gap-0">
          <div className="w-full overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead>
                <tr className="border-b">
                  <th className="pb-2 pr-6 font-medium">Class</th>
                  <th className="pb-2 pr-6 font-medium">Size</th>
                  <th className="pb-2 font-medium">Specimen</th>
                </tr>
              </thead>
              <tbody>
                {SIZE_SCALE.map((row) => (
                  <tr key={row.className} className="border-b last:border-0">
                    <td className="py-2 pr-6 font-mono text-xs text-muted-foreground">
                      {row.className}
                    </td>
                    <td className="py-2 pr-6 font-mono text-xs text-muted-foreground">
                      {row.size}
                    </td>
                    <td className="py-2">
                      <span className={row.className}>Aa</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </ComponentPreview>
      </div>
    </SectionWrapper>
  );
}
