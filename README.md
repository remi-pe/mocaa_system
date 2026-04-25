# mocaa_system

The Mocaa Studio design system — built on Tailwind v4 + shadcn primitives. Live showcase at [mocaa-system.vercel.app](https://mocaa-system.vercel.app).

This repo is two things at once:
1. A **Next.js showcase site** — what you see at the URL above.
2. An **installable package** — consumed by other Mocaa projects via GitHub install. See [Using as a package](#using-as-a-package) below.

## Using as a package

Install in another project, pinning to a tag for reproducibility:

```bash
npm install github:remi-pe/mocaa_system#v0.1.0
```

Tell Next.js to transpile the package:

```ts
// next.config.ts
const nextConfig = {
  transpilePackages: ["mocaa-system"],
};
export default nextConfig;
```

Wire up Tailwind v4 + design tokens in your consumer's `globals.css`. The `@source` path is **relative to the CSS file**, so it depends on your project layout:

```css
/* src/app/globals.css (standard create-next-app with --src-dir) */
@import "tailwindcss";
@source "../../node_modules/mocaa-system/src";
@import "mocaa-system/styles.css";
```

```css
/* app/globals.css (no src/ directory) */
@import "tailwindcss";
@source "../node_modules/mocaa-system/src";
@import "mocaa-system/styles.css";
```

The `@source` line lets Tailwind v4 scan the package's source for class usage. The `styles.css` import brings in CSS variables, base styles, and dark-mode tokens.

Then use any component:

```tsx
import { Button } from "mocaa-system/button";
import { Card, CardContent } from "mocaa-system/card";
import { EmptyState } from "mocaa-system/empty-state";
import { cn } from "mocaa-system/utils";
import { ThemeProvider } from "mocaa-system/theme-provider";
```

Each `components/ui/*.tsx` file is exposed at `mocaa-system/<filename-without-ext>`.

### Updating

When you publish a new tag here:

```bash
npm install github:remi-pe/mocaa_system#v0.2.0
```

### Required peer setup in the consumer

- Next.js 16+
- React 19+
- Tailwind v4 (CSS-first config, no `tailwind.config.js` needed)

## Local development

Run the showcase site locally:

```bash
pnpm dev
```

Open [http://localhost:3000/design-system](http://localhost:3000/design-system) to browse the system.

The showcase pages live in `src/app/`. Components and tokens (the package surface) live in `src/components/ui/`, `src/lib/utils.ts`, `src/hooks/`, and `src/app/globals.css`.

## Releasing a new version

1. Bump `version` in `package.json`.
2. Commit on `main`.
3. Tag: `git tag v0.X.Y && git push --tags`.
4. In consumers: `npm install github:remi-pe/mocaa_system#v0.X.Y`.
