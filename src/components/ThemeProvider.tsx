"use client";

import { useEffect, useLayoutEffect, useState } from "react";
import { Switch } from "@/components/ui/switch";

export default function ThemeToggle() {
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    console.log(localStorage.theme === "dark", "dark ya nhi");
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setChecked(localStorage.theme === "dark");
  }, [checked]);

  const toggleTheme = () => {
    const isDark = localStorage.theme === "dark";
    if (isDark) {
      console.log(localStorage.theme === "dark", "dark ");
      document.documentElement.classList.replace("dark", "light");
      localStorage.theme = "light";
      setChecked(false);
    } else {
      console.log(localStorage.theme === "dark", "nhi");
      document.documentElement.classList.replace("light", "dark");
      localStorage.theme = "dark";
      setChecked(true);
    }
  };

  return (
    <div className="flex gap-2 text-white justify-center tex-[20px] items-center darkh:text-black py-3 bg-black dark:bg-gray-800">
      {checked ? "Dark" : "Light"}{" "}
      <Switch checked={checked} onClick={toggleTheme} />
    </div>
  );
}
