"use client";

import { MouseEventHandler, useEffect, useLayoutEffect, useState } from "react";
import { Switch } from "@/components/ui/switch";
export default function ThemeToggle() {
  const [checked, setChecked] = useState(false);
  useLayoutEffect(() => {
    const dark = localStorage.theme;
    if (dark === "dark") {
      setChecked(true);
    } else {
      setChecked(false);
    }
  }, []);
  const setDark = () => {
    const dark = localStorage.getItem("theme");
    if (dark === "dark") {
      document.documentElement.classList.remove("dark");
      localStorage.theme = "dark";
      document.documentElement.classList.add("light");
      localStorage.theme = "light";
      setChecked(true);
    } else {
      document.documentElement.classList.remove("light");
      localStorage.theme = "light";
      document.documentElement.classList.add("dark");
      localStorage.theme = "dark";
      setChecked(false);
    }
  };

  const setLight = () => {
    document.documentElement.classList.remove("dark");
    localStorage.theme = "light";
  };

  const setSystem = () => {
    localStorage.removeItem("theme");

    const isDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    document.documentElement.classList.toggle("dark", isDark);
  };

  return (
    <div className="flex gap-2">
      <Switch checked={checked} onClick={() => setDark()} />
      {/* <button onClick={setLight}>Light</button>
      <button onClick={setDark}>Dark</button>
      <button onClick={setSystem}>System</button> */}
    </div>
  );
}
