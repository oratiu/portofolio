"use client";

import { useTheme } from "next-themes";
import { useEffect } from "react";
import { Switch } from "@nextui-org/react";
import { MoonIcon } from "../icons/MoonIcon";
import { SunIcon } from "../icons/SunIcon";

export default function ThemeSwitcher() {
  const { theme, setTheme } = useTheme();

  const saveThemePreference = (theme: string) => {
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

  return (
    <div className="flex gap-4">
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
        <p className={theme === "dark" ? "text-gray-500 hidden sm:block" : "text-gray-500 hidden sm:block"}>
          Switch to{" "}
          <span className={theme === "dark" ? "text-gray-400" : "text-black"}>
            {theme === "dark" ? "light" : "dark"}
          </span>
        </p>
      </Switch>
    </div>
  );
}
