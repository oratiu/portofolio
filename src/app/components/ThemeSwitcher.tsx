"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Skeleton, Switch } from "@nextui-org/react";
import MoonIcon from "../icons/MoonIcon";
import SunIcon from "../icons/SunIcon";

export default function ThemeSwitcher() {
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  const { theme, setTheme } = useTheme();
  const saveThemePreference = (theme: string) => {
    if (typeof window === "undefined") return;
    localStorage.setItem("theme", theme);
  };

  const handleThemeChange = (theme: string) => {
    setTheme(theme);
    saveThemePreference(theme);
  };

  useEffect(() => {
    const theme = localStorage.getItem("theme");
    if (theme) {
      setTheme(theme);
    } else {
      setTheme("light");
    }
  }, [theme, setTheme]);
  // if (!hasMounted) return null;
  return (
    <div className="flex gap-4">
      {hasMounted ? (
        <Switch
          defaultSelected={theme === "light"}
          size="md"
          onClick={() => handleThemeChange(theme === "dark" ? "light" : "dark")}
          color={theme === "dark" ? "default" : "warning"}
          thumbIcon={({ isSelected, className }) =>
            isSelected ? (
              <SunIcon className={className} />
            ) : (
              <MoonIcon className={className} />
            )
          }
        >
          <p
            className={
              theme === "dark"
                ? "text-gray-500 hidden sm:block"
                : "text-gray-500 hidden sm:block"
            }
          >
            Switch to{" "}
            <span className={theme === "dark" ? "text-gray-400" : "text-black"}>
              {theme === "dark" ? "light" : "dark"}
            </span>
          </p>
        </Switch>
      ) : (
        <>Loading...</>
      )}
    </div>
  );
}
