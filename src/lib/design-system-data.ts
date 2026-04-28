export type SectionItem = {
  id: string;
  label: string;
  category: string;
};

export const CATEGORIES = [
  "Primitives",
  "Actions",
  "Patterns",
  "Forms",
  "Data Display",
  "Feedback",
  "Navigation",
  "Layout",
  "Overlay",
] as const;

export type Category = (typeof CATEGORIES)[number];

export const SECTIONS: SectionItem[] = [
  // Primitives
  { id: "typography", label: "Typography", category: "Primitives" },
  { id: "colors", label: "Colors", category: "Primitives" },
  { id: "icons", label: "Icons", category: "Primitives" },
  { id: "spacing", label: "Spacing", category: "Primitives" },
  { id: "borders-radius", label: "Borders & Radius", category: "Primitives" },
  { id: "shadows", label: "Shadows", category: "Primitives" },

  // Actions
  { id: "button", label: "Button", category: "Actions" },
  { id: "toggle", label: "Toggle", category: "Actions" },
  { id: "toggle-group", label: "Toggle Group", category: "Actions" },
  { id: "theme-switch", label: "Theme Switch", category: "Actions" },

  // Patterns
  { id: "empty-state", label: "Empty State", category: "Patterns" },
  { id: "page-header", label: "Page Header", category: "Patterns" },
  { id: "stat-card", label: "Stat Card", category: "Patterns" },
  { id: "kbd", label: "Kbd", category: "Patterns" },
  { id: "copy-button", label: "Copy Button", category: "Patterns" },
  { id: "spinner", label: "Spinner", category: "Patterns" },
  { id: "status-dot", label: "Status Dot", category: "Patterns" },
  { id: "progress-indicator", label: "Progress Indicator", category: "Patterns" },

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
  { id: "combobox", label: "Combobox", category: "Forms" },
  { id: "multi-select", label: "Multi-Select", category: "Forms" },
  { id: "tag-input", label: "Tag Input", category: "Forms" },
  { id: "file-upload", label: "File Upload", category: "Forms" },
  { id: "number-input", label: "Number Input", category: "Forms" },
  { id: "password-strength", label: "Password Strength", category: "Forms" },
  { id: "phone-input", label: "Phone Input", category: "Forms" },
  { id: "likert-scale", label: "Likert Scale", category: "Forms" },
  { id: "nps-score", label: "NPS Score", category: "Forms" },
  { id: "choice-card", label: "Choice Card", category: "Forms" },
  { id: "ranking-input", label: "Ranking Input", category: "Forms" },
  { id: "matrix-question", label: "Matrix Question", category: "Forms" },
  { id: "auto-expanding-textarea", label: "Auto-Expanding Textarea", category: "Forms" },
  { id: "segmented-control", label: "Segmented Control", category: "Forms" },

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
  { id: "sparkline", label: "Sparkline", category: "Data Display" },
  { id: "avatar-group", label: "Avatar Group", category: "Data Display" },
  { id: "timeline", label: "Timeline", category: "Data Display" },
  { id: "stepper", label: "Stepper", category: "Data Display" },
  { id: "code-block", label: "Code Block", category: "Data Display" },
  { id: "diff-viewer", label: "Diff Viewer", category: "Data Display" },
  { id: "json-viewer", label: "JSON Viewer", category: "Data Display" },
  { id: "log-viewer", label: "Log Viewer", category: "Data Display" },

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
  { name: "Highlight Lime", variable: "highlight-lime", group: "Brand" },
  { name: "Highlight Red", variable: "highlight-red", group: "Brand" },
  { name: "Highlight Purple", variable: "highlight-purple", group: "Brand" },
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
  { key: "2", rem: "0.5rem", px: 8 },
  { key: "3", rem: "0.75rem", px: 12 },
  { key: "4", rem: "1rem", px: 16 },
  { key: "6", rem: "1.5rem", px: 24 },
  { key: "8", rem: "2rem", px: 32 },
  { key: "10", rem: "2.5rem", px: 40 },
  { key: "12", rem: "3rem", px: 48 },
  { key: "16", rem: "4rem", px: 64 },
  { key: "24", rem: "6rem", px: 96 },
];

export type RadiusToken = {
  name: string;
  className: string;
  px: string;
};

export const RADIUS_TOKENS: RadiusToken[] = [
  { name: "None", className: "rounded-none", px: "0px" },
  { name: "SM", className: "rounded-sm", px: "6px" },
  { name: "MD", className: "rounded-md", px: "8px" },
  { name: "LG (Base)", className: "rounded-lg", px: "10px" },
  { name: "XL", className: "rounded-xl", px: "14px" },
  { name: "2XL", className: "rounded-2xl", px: "18px" },
  { name: "Full", className: "rounded-full", px: "Fully rounded" },
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
