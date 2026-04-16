"use client";

import { CATEGORIES, SECTIONS } from "@/lib/design-system-data";
import { useActiveSection } from "@/hooks/use-active-section";
import { cn } from "@/lib/utils";

export function SidebarNav() {
  const sectionIds = SECTIONS.map((s) => s.id);
  const activeId = useActiveSection(sectionIds);

  return (
    <nav className="space-y-6 text-sm">
      {CATEGORIES.map((category) => {
        const items = SECTIONS.filter((s) => s.category === category);
        if (items.length === 0) return null;
        return (
          <div key={category}>
            <h4 className="mb-2 font-semibold text-foreground">{category}</h4>
            <ul className="space-y-1">
              {items.map((item) => (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    className={cn(
                      "block rounded-md px-2 py-1 transition-colors",
                      activeId === item.id
                        ? "bg-accent font-medium text-accent-foreground"
                        : "text-muted-foreground hover:text-foreground hover:bg-accent/50"
                    )}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        );
      })}
    </nav>
  );
}
