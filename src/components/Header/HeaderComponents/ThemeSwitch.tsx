import React, { useContext } from "react";
import { styled } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";
import DarkModeIcon from "@mui/icons-material/DarkModeOutlined";
import LightModeIcon from "@mui/icons-material/LightMode";
import Tooltip from "@mui/material/Tooltip";
import { useTranslation } from "react-i18next";
import { useMediaQuery, useTheme } from "@mui/material";

import { ThemeContext } from "../../../redux/ThemeContext";
import { IThemeContext, IThemeMode } from "../../../redux/ThemeContext/types";

const StyledIconButton = styled(IconButton, {
  shouldForwardProp: (prop) => prop !== "ismobile", // Указываем, что проп `ismobile` не должен передаваться в DOM
})<{ ismobile?: boolean }>(({ theme, ismobile }) => ({
  color:
    theme.palette.mode === "light"
      ? ismobile
        ? "rgba(0, 0, 0, 0.54)"
        : "rgb(244, 229, 220)"
      : "rgb(244, 229, 220)",
}));

const ThemeSwitch: React.FC = () => {
  const { t } = useTranslation();
  const { themeMode, switchThemeMode } = useContext(
    ThemeContext
  ) as IThemeContext;
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm")); // визначаємо, чи це мобільна версія

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
      <StyledIconButton onClick={handleSwitchTheme} ismobile={!!isMobile}>
        {themeMode === IThemeMode.DARK ? <LightModeIcon /> : <DarkModeIcon />}
      </StyledIconButton>
    </Tooltip>
  );
};

export default ThemeSwitch;
