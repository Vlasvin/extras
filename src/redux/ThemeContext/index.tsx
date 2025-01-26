import React, { createContext, useEffect, useState } from "react";
import { Theme, useMediaQuery } from "@mui/material";

import { IThemeContext, IThemeMode } from "./types";
import { AppDarkTheme, AppLightTheme } from "./theme";
import { ThemeProvider } from "@emotion/react";

export const ThemeContext = createContext<IThemeContext | null>(null);

export const ThemeContextProvider: React.FunctionComponent<
  React.PropsWithChildren
> = ({ children }) => {
  const [themeMode, setThemeMode] = useState<IThemeMode>(IThemeMode.LIGHT);
  const [theme, setTheme] = useState<Theme>(AppLightTheme);

  const SYSTEM_THEME: Exclude<IThemeMode, IThemeMode.SYSTEM> = useMediaQuery(
    "(prefers-color-scheme:dark)"
  )
    ? IThemeMode.DARK
    : IThemeMode.LIGHT;

  useEffect(() => {
    const themeModeFromPref = getThemeModeFromPref();
    setThemeMode(themeModeFromPref);
  }, [setThemeMode]);

  useEffect(() => {
    switch (themeMode) {
      case IThemeMode.LIGHT:
        setTheme(AppLightTheme);
        break;
      case IThemeMode.DARK:
        setTheme(AppDarkTheme);
        break;
      case IThemeMode.SYSTEM:
        switch (SYSTEM_THEME) {
          case IThemeMode.LIGHT:
            setTheme(AppLightTheme);
            break;
          case IThemeMode.DARK:
            setTheme(AppDarkTheme);
            break;
        }
        break;
      default:
        setTheme(AppLightTheme);
        break;
    }
  }, [themeMode, SYSTEM_THEME]);

  const getThemeModeFromPref = (): IThemeMode => {
    const themeModeFromPref = localStorage.getItem("themeMode") as IThemeMode;
    if (
      themeModeFromPref &&
      Object.values(IThemeMode).includes(themeModeFromPref as IThemeMode)
    ) {
      return themeModeFromPref;
    }
    return IThemeMode.SYSTEM;
  };

  const setThemeModeToPref = (mode: IThemeMode) => {
    localStorage.setItem("themeMode", mode);
  };

  const switchThemeMode = (mode: IThemeMode) => {
    setThemeMode(mode);
    setThemeModeToPref(mode);
  };

  return (
    <ThemeContext.Provider value={{ themeMode, switchThemeMode }}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </ThemeContext.Provider>
  );
};
