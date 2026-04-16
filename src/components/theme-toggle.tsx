"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { ThemeSwitch } from "@/components/ui/theme-switch";

export function ThemeToggle() {
  const { setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  const isDark = resolvedTheme === "dark";

  return (
    <ThemeSwitch
      checked={isDark}
      onCheckedChange={(checked) => setTheme(checked ? "dark" : "light")}
    />
  );
}
