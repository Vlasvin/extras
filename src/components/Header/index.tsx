import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import {
  Toolbar,
  Button,
  IconButton,
  Menu,
  MenuItem,
  Box,
} from "@mui/material";
import LanguageIcon from "@mui/icons-material/Language";
import i18next from "i18next";

import { ThemeContext } from "../../redux/ThemeContext";
import { IThemeContext, IThemeMode } from "../../redux/ThemeContext/types";
import ThemeSwitch from "./ThemeSwitch";

interface HeaderProps {
  onRegisterClick: () => void;
}

const Header: React.FC<HeaderProps> = ({ onRegisterClick }) => {
  const { t } = useTranslation();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const { themeMode } = useContext(ThemeContext) as IThemeContext;

  const handleLanguageMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleLanguageMenuClose = () => {
    setAnchorEl(null);
  };

  const handleRegisterButtonClick = () => {
    onRegisterClick();
  };

  const handleLanguageChange = async (lang: string) => {
    await i18next.changeLanguage(lang);
    handleLanguageMenuClose();
  };

  const iconColor = themeMode === IThemeMode.DARK ? "primary" : "inherit";
  const textColor = themeMode === IThemeMode.DARK ? "#FFFFFF" : "inherit";

  return (
    <Toolbar sx={{ justifyContent: "space-between", alignItems: "center" }}>
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <Link to="/">
          <img
            src="https://extras.com.ua/wp-content/themes/slick-red/images/red/logo.gif"
            alt="extras.com.ua"
            style={{ height: 40, marginRight: 10 }}
          />
        </Link>
      </Box>
      <Box
        sx={{
          display: "flex",
          gap: 4,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Button
          color="inherit"
          component={Link}
          to="/visas"
          sx={{ color: textColor }}
        >
          {t("visas")}
        </Button>
        <Button
          color="inherit"
          component={Link}
          to="/translations"
          sx={{ color: textColor }}
        >
          {t("translations")}
        </Button>
        <Button
          color="inherit"
          component={Link}
          to="/services"
          sx={{ color: textColor }}
        >
          {t("services")}
        </Button>
        <Button
          color="inherit"
          component={Link}
          to="/about-us"
          sx={{ color: textColor }}
        >
          {t("about us")}
        </Button>
      </Box>
      <div>
        <ThemeSwitch />
        <IconButton
          size="large"
          aria-label="select language"
          aria-controls="language-menu"
          aria-haspopup="true"
          onClick={handleLanguageMenuOpen}
        >
          <LanguageIcon color="inherit" />
        </IconButton>
        <Menu
          id="language-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleLanguageMenuClose}
          onClick={handleLanguageMenuClose}
          color={iconColor}
        >
          <MenuItem onClick={() => handleLanguageChange("en")}>
            English
          </MenuItem>
          <MenuItem onClick={() => handleLanguageChange("uk")}>
            Українська
          </MenuItem>
          <MenuItem onClick={() => handleLanguageChange("ru")}>
            Русский
          </MenuItem>
        </Menu>

        <Button color="inherit" onClick={handleRegisterButtonClick}>
          {t("register")}
        </Button>
      </div>
    </Toolbar>
  );
};

export default Header;
