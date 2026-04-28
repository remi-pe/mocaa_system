"use client";

import "@fontsource-variable/google-sans-flex";

import { createContext, useContext, useState, type CSSProperties, type ReactNode } from "react";

export type Typeface = "geist" | "google-sans";

type TypefaceContextValue = {
  typeface: Typeface;
  setTypeface: (next: Typeface) => void;
};

const TypefaceContext = createContext<TypefaceContextValue | null>(null);

export function useTypeface(): TypefaceContextValue {
  const ctx = useContext(TypefaceContext);
  if (!ctx) {
    throw new Error("useTypeface must be used inside <TypefaceProvider>");
  }
  return ctx;
}

const FONT_FAMILY: Record<Typeface, string | undefined> = {
  geist: undefined,
  "google-sans": '"Google Sans Flex Variable", sans-serif',
};

/**
 * Wraps the design-system page so the typeface toggle in TypographySection
 * affects every descendant. Overrides --font-sans (so Tailwind's font-sans
 * utility resolves to the chosen font) and inline font-family for direct
 * inheritance.
 */
export function TypefaceProvider({ children }: { children: ReactNode }) {
  const [typeface, setTypeface] = useState<Typeface>("geist");

  const fontFamily = FONT_FAMILY[typeface];
  const style: CSSProperties = fontFamily
    ? ({ fontFamily, ["--font-sans" as string]: fontFamily } as CSSProperties)
    : {};

  return (
    <TypefaceContext.Provider value={{ typeface, setTypeface }}>
      <div style={style}>{children}</div>
    </TypefaceContext.Provider>
  );
}
