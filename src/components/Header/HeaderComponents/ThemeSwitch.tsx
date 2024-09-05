import React, { useContext } from "react";
import { styled } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";
import DarkModeIcon from "@mui/icons-material/DarkModeOutlined";
import LightModeIcon from "@mui/icons-material/LightMode";
import Tooltip from "@mui/material/Tooltip";
import { useTranslation } from "react-i18next";

import { ThemeContext } from "../../../redux/ThemeContext";
import { IThemeContext, IThemeMode } from "../../../redux/ThemeContext/types";

const StyledIconButton = styled(IconButton)(({ theme }) => ({
  color: "rgb(244, 229, 220)",
}));

const ThemeSwitch: React.FC = () => {
  const { t } = useTranslation();
  const { themeMode, switchThemeMode } = useContext(
    ThemeContext
  ) as IThemeContext;

  const handleSwitchTheme = () => {
    switchThemeMode(
      themeMode === IThemeMode.DARK ? IThemeMode.LIGHT : IThemeMode.DARK
    );
  };

  const tooltipText =
    themeMode === IThemeMode.DARK
      ? t("theme.switch_to_light")
      : t("theme.switch_to_dark");

  return (
    <Tooltip title={tooltipText} arrow>
      <StyledIconButton onClick={handleSwitchTheme}>
        {themeMode === IThemeMode.DARK ? <LightModeIcon /> : <DarkModeIcon />}
      </StyledIconButton>
    </Tooltip>
  );
};

export default ThemeSwitch;
