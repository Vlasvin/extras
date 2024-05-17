import { useContext } from "react";
import { ThemeContext } from "redux/ThemeContext";
import { IThemeContext, IThemeMode } from "redux/ThemeContext/types";

const useIconColor = () => {
  const { themeMode } = useContext(ThemeContext) as IThemeContext;
  return themeMode === IThemeMode.DARK ? "#FFFFFF" : "#000000dd";
};

export default useIconColor;
