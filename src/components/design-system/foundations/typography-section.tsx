"use client";

import "@fontsource-variable/google-sans-flex";

import { useState } from "react";
import { SectionWrapper } from "@/components/design-system/section-wrapper";
import { ComponentPreview } from "@/components/design-system/component-preview";
import { SegmentedControl } from "@/components/ui/segmented-control";

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
  { className: "text-xs",   sizeRem: "0.75rem",  sizePx: "12px", lineHeightRem: "1rem",    lineHeightPx: "16px", letterSpacing: "Normal (0)" },
  { className: "text-sm",   sizeRem: "0.875rem", sizePx: "14px", lineHeightRem: "1.25rem", lineHeightPx: "20px", letterSpacing: "Normal (0)" },
  { className: "text-base", sizeRem: "1rem",     sizePx: "16px", lineHeightRem: "1.5rem",  lineHeightPx: "24px", letterSpacing: "Normal (0)" },
  { className: "text-lg",   sizeRem: "1.125rem", sizePx: "18px", lineHeightRem: "1.75rem", lineHeightPx: "28px", letterSpacing: "Normal (0)" },
  { className: "text-xl",   sizeRem: "1.25rem",  sizePx: "20px", lineHeightRem: "1.75rem", lineHeightPx: "28px", letterSpacing: "Normal (0)" },
  { className: "text-2xl",  sizeRem: "1.5rem",   sizePx: "24px", lineHeightRem: "2rem",    lineHeightPx: "32px", letterSpacing: "Normal (0)" },
  { className: "text-3xl",  sizeRem: "1.875rem", sizePx: "30px", lineHeightRem: "2.25rem", lineHeightPx: "36px", letterSpacing: "Normal (0)" },
  { className: "text-4xl",  sizeRem: "2.25rem",  sizePx: "36px", lineHeightRem: "2.5rem",  lineHeightPx: "40px", letterSpacing: "Normal (0)" },
  { className: "text-5xl",  sizeRem: "3rem",     sizePx: "48px", lineHeightRem: "1",       lineHeightPx: "48px", letterSpacing: "Normal (0)" },
] as const;

const UNIT_OPTIONS = [
  { value: "px", label: "px" },
  { value: "rem", label: "rem" },
];

const TYPEFACE_OPTIONS = [
  { value: "geist", label: "Geist" },
  { value: "google-sans", label: "Google Sans" },
];

const TYPEFACE_FONT_FAMILY: Record<"geist" | "google-sans", string | undefined> = {
  geist: undefined, // inherit Tailwind's font-sans (Geist)
  "google-sans": '"Google Sans Flex Variable", sans-serif',
};

export function TypographySection() {
  const [unit, setUnit] = useState<"px" | "rem">("px");
  const [typeface, setTypeface] = useState<"geist" | "google-sans">("geist");

  const fontStyle = { fontFamily: TYPEFACE_FONT_FAMILY[typeface] };

  return (
    <SectionWrapper
      id="typography"
      title="Typography"
      description="Font families, sizes, weights, and text styles. Toggle between Geist and Google Sans Flex to compare."
    >
      <div className="space-y-8">
        {/* Typeface toggle */}
        <div className="flex w-full items-center justify-end gap-3">
          <span className="font-mono text-xs text-muted-foreground">Typeface</span>
          <SegmentedControl
            size="sm"
            options={TYPEFACE_OPTIONS}
            value={typeface}
            onValueChange={(v) => setTypeface(v as "geist" | "google-sans")}
            aria-label="Toggle typeface between Geist and Google Sans"
          />
        </div>

        {/* Heading specimens */}
        <ComponentPreview title="Headings" className="flex-col items-start gap-4">
          {HEADING_SPECIMENS.map((specimen) => (
            <div key={specimen.label} className="w-full">
              <span className="mb-1 block font-mono text-xs text-muted-foreground">
                {specimen.label} &mdash; {specimen.className}
              </span>
              <p className={specimen.className} style={fontStyle}>{specimen.text}</p>
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
              <p className={variant.className} style={fontStyle}>{variant.text}</p>
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
              <p className={`text-xl ${fw.weight}`} style={fontStyle}>
                {fw.label} &mdash; The quick brown fox
              </p>
            </div>
          ))}
        </ComponentPreview>

        {/* Size scale */}
        <ComponentPreview title="Size Scale" className="flex-col items-start gap-4">
          <div className="flex w-full justify-end">
            <SegmentedControl
              size="sm"
              options={UNIT_OPTIONS}
              value={unit}
              onValueChange={(v) => setUnit(v as "px" | "rem")}
              aria-label="Toggle between pixels and rem"
            />
          </div>
          <div className="w-full overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead>
                <tr className="border-b">
                  <th className="pb-2 pr-6 font-medium">Class</th>
                  <th className="pb-2 pr-6 font-medium">Size</th>
                  <th className="pb-2 pr-6 font-medium">Line height</th>
                  <th className="pb-2 pr-6 font-medium">Letter spacing</th>
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
                      {unit === "px" ? row.sizePx : row.sizeRem}
                    </td>
                    <td className="py-2 pr-6 font-mono text-xs text-muted-foreground">
                      {unit === "px" ? row.lineHeightPx : row.lineHeightRem}
                    </td>
                    <td className="py-2 pr-6 font-mono text-xs text-muted-foreground">
                      {row.letterSpacing}
                    </td>
                    <td className="py-2">
                      <span className={row.className} style={fontStyle}>Aa</span>
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
