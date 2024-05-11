import React, { useContext } from "react";
import { styled } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";
import DarkModeIcon from "@mui/icons-material/DarkModeOutlined";
import LightModeIcon from "@mui/icons-material/LightMode";

import { ThemeContext } from "../../../redux/ThemeContext";
import { IThemeContext, IThemeMode } from "../../../redux/ThemeContext/types";

const StyledIconButton = styled(IconButton)(({ theme }) => ({
  color:
    theme.palette.mode === "dark"
      ? theme.palette.primary.light
      : theme.palette.primary.dark,
}));

const ThemeSwitch: React.FC = () => {
  const { themeMode, switchThemeMode } = useContext(
    ThemeContext
  ) as IThemeContext;

  const handleSwitchTheme = () => {
    switchThemeMode(
      themeMode === IThemeMode.DARK ? IThemeMode.LIGHT : IThemeMode.DARK
    );
  };

  return (
    <StyledIconButton onClick={handleSwitchTheme}>
      {themeMode === IThemeMode.DARK ? <LightModeIcon /> : <DarkModeIcon />}
    </StyledIconButton>
  );
};

export default ThemeSwitch;
