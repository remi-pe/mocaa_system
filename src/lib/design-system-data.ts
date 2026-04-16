export type SectionItem = {
  id: string;
  label: string;
  category: string;
};

export const CATEGORIES = [
  "Foundations",
  "Actions",
  "Forms",
  "Data Display",
  "Feedback",
  "Navigation",
  "Layout",
  "Overlay",
] as const;

export type Category = (typeof CATEGORIES)[number];

export const SECTIONS: SectionItem[] = [
  // Foundations
  { id: "colors", label: "Colors", category: "Foundations" },
  { id: "typography", label: "Typography", category: "Foundations" },
  { id: "spacing", label: "Spacing", category: "Foundations" },
  { id: "borders-radius", label: "Borders & Radius", category: "Foundations" },
  { id: "shadows", label: "Shadows", category: "Foundations" },
  { id: "icons", label: "Icons", category: "Foundations" },

  // Actions
  { id: "button", label: "Button", category: "Actions" },
  { id: "toggle", label: "Toggle", category: "Actions" },
  { id: "toggle-group", label: "Toggle Group", category: "Actions" },
  { id: "theme-switch", label: "Theme Switch", category: "Actions" },

  // Forms
  { id: "input", label: "Input", category: "Forms" },
  { id: "textarea", label: "Textarea", category: "Forms" },
  { id: "select", label: "Select", category: "Forms" },
  { id: "checkbox", label: "Checkbox", category: "Forms" },
  { id: "radio-group", label: "Radio Group", category: "Forms" },
  { id: "switch", label: "Switch", category: "Forms" },
  { id: "slider", label: "Slider", category: "Forms" },
  { id: "label", label: "Label", category: "Forms" },
  { id: "form", label: "Form", category: "Forms" },
  { id: "input-otp", label: "Input OTP", category: "Forms" },
  { id: "calendar", label: "Calendar", category: "Forms" },
  { id: "date-picker", label: "Date Picker", category: "Forms" },

  // Data Display
  { id: "badge", label: "Badge", category: "Data Display" },
  { id: "avatar", label: "Avatar", category: "Data Display" },
  { id: "table", label: "Table", category: "Data Display" },
  { id: "data-table", label: "Data Table", category: "Data Display" },
  { id: "card", label: "Card", category: "Data Display" },
  { id: "aspect-ratio", label: "Aspect Ratio", category: "Data Display" },
  { id: "carousel", label: "Carousel", category: "Data Display" },
  { id: "separator", label: "Separator", category: "Data Display" },
  { id: "skeleton", label: "Skeleton", category: "Data Display" },
  { id: "progress", label: "Progress", category: "Data Display" },

  // Feedback
  { id: "alert", label: "Alert", category: "Feedback" },
  { id: "alert-dialog", label: "Alert Dialog", category: "Feedback" },
  { id: "dialog", label: "Dialog", category: "Feedback" },
  { id: "sonner", label: "Sonner (Toast)", category: "Feedback" },
  { id: "drawer", label: "Drawer", category: "Feedback" },
  { id: "sheet", label: "Sheet", category: "Feedback" },

  // Navigation
  { id: "tabs", label: "Tabs", category: "Navigation" },
  { id: "accordion", label: "Accordion", category: "Navigation" },
  { id: "breadcrumb", label: "Breadcrumb", category: "Navigation" },
  { id: "command", label: "Command", category: "Navigation" },
  { id: "context-menu", label: "Context Menu", category: "Navigation" },
  { id: "dropdown-menu", label: "Dropdown Menu", category: "Navigation" },
  { id: "menubar", label: "Menubar", category: "Navigation" },
  { id: "navigation-menu", label: "Navigation Menu", category: "Navigation" },
  { id: "pagination", label: "Pagination", category: "Navigation" },

  // Layout
  { id: "collapsible", label: "Collapsible", category: "Layout" },
  { id: "resizable", label: "Resizable", category: "Layout" },
  { id: "scroll-area", label: "Scroll Area", category: "Layout" },

  // Overlay
  { id: "hover-card", label: "Hover Card", category: "Overlay" },
  { id: "popover", label: "Popover", category: "Overlay" },
  { id: "tooltip", label: "Tooltip", category: "Overlay" },
];

export type ColorToken = {
  name: string;
  variable: string;
  group: string;
};

export const COLOR_TOKENS: ColorToken[] = [
  // Backgrounds
  { name: "Background", variable: "background", group: "Backgrounds" },
  { name: "Card", variable: "card", group: "Backgrounds" },
  { name: "Popover", variable: "popover", group: "Backgrounds" },

  // Foregrounds
  { name: "Foreground", variable: "foreground", group: "Foregrounds" },
  { name: "Card Foreground", variable: "card-foreground", group: "Foregrounds" },
  { name: "Popover Foreground", variable: "popover-foreground", group: "Foregrounds" },

  // Brand
  { name: "Primary", variable: "primary", group: "Brand" },
  { name: "Primary Foreground", variable: "primary-foreground", group: "Brand" },
  { name: "Secondary", variable: "secondary", group: "Brand" },
  { name: "Secondary Foreground", variable: "secondary-foreground", group: "Brand" },

  // State
  { name: "Destructive", variable: "destructive", group: "State" },
  { name: "Muted", variable: "muted", group: "State" },
  { name: "Muted Foreground", variable: "muted-foreground", group: "State" },
  { name: "Accent", variable: "accent", group: "State" },
  { name: "Accent Foreground", variable: "accent-foreground", group: "State" },

  // Borders & Input
  { name: "Border", variable: "border", group: "Borders & Input" },
  { name: "Input", variable: "input", group: "Borders & Input" },
  { name: "Ring", variable: "ring", group: "Borders & Input" },

  // Highlights
  { name: "Highlight Lime", variable: "highlight-lime", group: "Highlights" },
  { name: "Highlight Red", variable: "highlight-red", group: "Highlights" },
  { name: "Highlight Purple", variable: "highlight-purple", group: "Highlights" },

  // Charts
  { name: "Chart 1", variable: "chart-1", group: "Charts" },
  { name: "Chart 2", variable: "chart-2", group: "Charts" },
  { name: "Chart 3", variable: "chart-3", group: "Charts" },
  { name: "Chart 4", variable: "chart-4", group: "Charts" },
  { name: "Chart 5", variable: "chart-5", group: "Charts" },

  // Sidebar
  { name: "Sidebar", variable: "sidebar", group: "Sidebar" },
  { name: "Sidebar Foreground", variable: "sidebar-foreground", group: "Sidebar" },
  { name: "Sidebar Primary", variable: "sidebar-primary", group: "Sidebar" },
  { name: "Sidebar Accent", variable: "sidebar-accent", group: "Sidebar" },
  { name: "Sidebar Border", variable: "sidebar-border", group: "Sidebar" },
];

export type SpacingValue = {
  key: string;
  rem: string;
  px: number;
};

export const SPACING_SCALE: SpacingValue[] = [
  { key: "0", rem: "0rem", px: 0 },
  { key: "0.5", rem: "0.125rem", px: 2 },
  { key: "1", rem: "0.25rem", px: 4 },
  { key: "1.5", rem: "0.375rem", px: 6 },
  { key: "2", rem: "0.5rem", px: 8 },
  { key: "2.5", rem: "0.625rem", px: 10 },
  { key: "3", rem: "0.75rem", px: 12 },
  { key: "3.5", rem: "0.875rem", px: 14 },
  { key: "4", rem: "1rem", px: 16 },
  { key: "5", rem: "1.25rem", px: 20 },
  { key: "6", rem: "1.5rem", px: 24 },
  { key: "7", rem: "1.75rem", px: 28 },
  { key: "8", rem: "2rem", px: 32 },
  { key: "9", rem: "2.25rem", px: 36 },
  { key: "10", rem: "2.5rem", px: 40 },
  { key: "11", rem: "2.75rem", px: 44 },
  { key: "12", rem: "3rem", px: 48 },
  { key: "14", rem: "3.5rem", px: 56 },
  { key: "16", rem: "4rem", px: 64 },
  { key: "20", rem: "5rem", px: 80 },
  { key: "24", rem: "6rem", px: 96 },
  { key: "28", rem: "7rem", px: 112 },
  { key: "32", rem: "8rem", px: 128 },
  { key: "36", rem: "9rem", px: 144 },
  { key: "40", rem: "10rem", px: 160 },
  { key: "44", rem: "11rem", px: 176 },
  { key: "48", rem: "12rem", px: 192 },
  { key: "52", rem: "13rem", px: 208 },
  { key: "56", rem: "14rem", px: 224 },
  { key: "60", rem: "15rem", px: 240 },
  { key: "64", rem: "16rem", px: 256 },
  { key: "72", rem: "18rem", px: 288 },
  { key: "80", rem: "20rem", px: 320 },
  { key: "96", rem: "24rem", px: 384 },
];

export type RadiusToken = {
  name: string;
  className: string;
  cssValue: string;
};

export const RADIUS_TOKENS: RadiusToken[] = [
  { name: "None", className: "rounded-none", cssValue: "0" },
  { name: "SM", className: "rounded-sm", cssValue: "calc(var(--radius) * 0.6)" },
  { name: "MD", className: "rounded-md", cssValue: "calc(var(--radius) * 0.8)" },
  { name: "LG (Base)", className: "rounded-lg", cssValue: "var(--radius)" },
  { name: "XL", className: "rounded-xl", cssValue: "calc(var(--radius) * 1.4)" },
  { name: "2XL", className: "rounded-2xl", cssValue: "calc(var(--radius) * 1.8)" },
  { name: "Full", className: "rounded-full", cssValue: "9999px" },
];

export type ShadowToken = {
  name: string;
  className: string;
};

export const SHADOW_TOKENS: ShadowToken[] = [
  { name: "Shadow SM", className: "shadow-sm" },
  { name: "Shadow", className: "shadow" },
  { name: "Shadow MD", className: "shadow-md" },
  { name: "Shadow LG", className: "shadow-lg" },
  { name: "Shadow XL", className: "shadow-xl" },
  { name: "Shadow 2XL", className: "shadow-2xl" },
];
