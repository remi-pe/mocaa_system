"use client";

import { useState, useMemo } from "react";
import { SectionWrapper } from "@/components/design-system/section-wrapper";
import { Input } from "@/components/ui/input";
import {
  ArrowRight,
  ArrowLeft,
  ArrowUp,
  ArrowDown,
  Check,
  X,
  Plus,
  Minus,
  Search,
  Settings,
  User,
  Heart,
  Star,
  Home,
  Mail,
  Phone,
  Calendar,
  Clock,
  Camera,
  Image,
  File,
  Folder,
  Edit,
  Trash,
  Copy,
  Download,
  Upload,
  Share,
  Link,
  ExternalLink,
  Eye,
  EyeOff,
  Lock,
  Unlock,
  Bell,
  Sun,
  Moon,
  Menu,
  ChevronDown,
  ChevronRight,
  ChevronUp,
  ChevronLeft,
  AlertCircle,
  AlertTriangle,
  Info,
  HelpCircle,
  Loader2,
  type LucideIcon,
} from "lucide-react";

const ICONS: { name: string; component: LucideIcon }[] = [
  { name: "ArrowRight", component: ArrowRight },
  { name: "ArrowLeft", component: ArrowLeft },
  { name: "ArrowUp", component: ArrowUp },
  { name: "ArrowDown", component: ArrowDown },
  { name: "Check", component: Check },
  { name: "X", component: X },
  { name: "Plus", component: Plus },
  { name: "Minus", component: Minus },
  { name: "Search", component: Search },
  { name: "Settings", component: Settings },
  { name: "User", component: User },
  { name: "Heart", component: Heart },
  { name: "Star", component: Star },
  { name: "Home", component: Home },
  { name: "Mail", component: Mail },
  { name: "Phone", component: Phone },
  { name: "Calendar", component: Calendar },
  { name: "Clock", component: Clock },
  { name: "Camera", component: Camera },
  { name: "Image", component: Image },
  { name: "File", component: File },
  { name: "Folder", component: Folder },
  { name: "Edit", component: Edit },
  { name: "Trash", component: Trash },
  { name: "Copy", component: Copy },
  { name: "Download", component: Download },
  { name: "Upload", component: Upload },
  { name: "Share", component: Share },
  { name: "Link", component: Link },
  { name: "ExternalLink", component: ExternalLink },
  { name: "Eye", component: Eye },
  { name: "EyeOff", component: EyeOff },
  { name: "Lock", component: Lock },
  { name: "Unlock", component: Unlock },
  { name: "Bell", component: Bell },
  { name: "Sun", component: Sun },
  { name: "Moon", component: Moon },
  { name: "Menu", component: Menu },
  { name: "ChevronDown", component: ChevronDown },
  { name: "ChevronRight", component: ChevronRight },
  { name: "ChevronUp", component: ChevronUp },
  { name: "ChevronLeft", component: ChevronLeft },
  { name: "AlertCircle", component: AlertCircle },
  { name: "AlertTriangle", component: AlertTriangle },
  { name: "Info", component: Info },
  { name: "HelpCircle", component: HelpCircle },
  { name: "Loader2", component: Loader2 },
];

const SIZES = [
  { label: "20px", className: "h-5 w-5" },
  { label: "24px", className: "h-6 w-6" },
] as const;

export function IconsSection() {
  const [query, setQuery] = useState("");
  const [size, setSize] = useState<(typeof SIZES)[number]>(SIZES[1]);

  const filtered = useMemo(() => {
    if (!query.trim()) return ICONS;
    const lower = query.toLowerCase();
    return ICONS.filter((icon) => icon.name.toLowerCase().includes(lower));
  }, [query]);

  return (
    <SectionWrapper
      id="icons"
      title="Icons"
      description="Common Lucide icons available in the project. Search to filter."
    >
      <div className="mb-4 flex items-center gap-4">
        <div className="max-w-sm flex-1">
          <Input
            placeholder="Search icons..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
        </div>
        <div className="flex items-center gap-1 rounded-lg border p-1">
          {SIZES.map((s) => (
            <button
              key={s.label}
              onClick={() => setSize(s)}
              className={`rounded-md px-2.5 py-1 text-xs font-medium transition-colors ${
                size.label === s.label
                  ? "bg-primary text-primary-foreground"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {s.label}
            </button>
          ))}
        </div>
      </div>

      {filtered.length === 0 ? (
        <p className="py-8 text-center text-sm text-muted-foreground">
          No icons match &ldquo;{query}&rdquo;
        </p>
      ) : (
        <div className="grid grid-cols-4 gap-3 sm:grid-cols-6 md:grid-cols-8 lg:grid-cols-10">
          {filtered.map(({ name, component: Icon }) => (
            <div
              key={name}
              className="flex flex-col items-center gap-1.5 rounded-md border p-3 transition-colors hover:bg-muted"
            >
              <Icon className={size.className} />
              <span className="truncate text-center font-mono text-[10px] text-muted-foreground">
                {name}
              </span>
            </div>
          ))}
        </div>
      )}
    </SectionWrapper>
  );
}
