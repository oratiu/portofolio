"use client";

import { NextUIProvider } from "@nextui-org/react";
import { ThemeProvider as NextThemesProvider } from "next-themes";

function getSavedTheme() {
  let theme = "light";
  if (typeof window !== "undefined") {
    theme = localStorage.getItem("theme") || "";
  }
  return theme;
}

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <NextUIProvider>
      <NextThemesProvider
        attribute="class"
        defaultTheme={getSavedTheme() || "light"}
        themes={["light", "dark"]}
      >
        {children}
      </NextThemesProvider>
    </NextUIProvider>
  );
}
