import {MoonIcon} from "@heroicons/react/24/outline";
import {SunIcon} from "lucide-react";
import {useEffect, useState} from "react";

export default function ThemeIcon() {
  const [darkTheme, setDarkTheme] = useState<boolean>(false);

  const darkThemeHandler = () => {
    setDarkTheme((pervState) => !pervState);
    if (
      localStorage.getItem("theme") == "dark" ||
      !localStorage.getItem("theme")
    ) {
      localStorage.setItem("theme", "light");
    } else {
      localStorage.setItem("theme", "dark");
    }
  };

  useEffect(() => {
    if (localStorage.theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkTheme]);

  return (
    <div className="p-2 rounded-full" onClick={darkThemeHandler}>
      {!darkTheme && <SunIcon className="w-7 md:w-6 cursor-pointer" />}
      {darkTheme && <MoonIcon className="w-7 md:w-6 cursor-pointer" />}
    </div>
  );
}
