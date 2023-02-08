import React from "react";
import { useThemeContext } from "../context";

const ThemeSwitch = () => {
  const { theme, setTheme } = useThemeContext();
  return (
    <button
      onClick={() => (theme === "dark" ? setTheme("light") : setTheme("dark"))}
      className={"text-3xl"}
    >
      💡
    </button>
  );
};

export default ThemeSwitch;
