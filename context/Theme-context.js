import { createContext, useState } from "react";
import useLocalStorageState from "use-local-storage-state";

export const ThemeContext = createContext({
  theme: "dark",
  setTheme: (theme) => {},
});

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useLocalStorageState("theme", {
    defaultValue: "dark",
  });

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
