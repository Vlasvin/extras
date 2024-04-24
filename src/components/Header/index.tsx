import React, { useContext, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import {
  Toolbar,
  Typography,
  Button,
  IconButton,
  Menu,
  MenuItem,
  Box,
} from "@mui/material";
import LanguageIcon from "@mui/icons-material/Language";
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
          {t("Візи")}
        </Button>
        <Button
          color="inherit"
          component={Link}
          to="/translations"
          sx={{ color: textColor }}
        >
          {t("Переклади")}
        </Button>
        <Button
          color="inherit"
          component={Link}
          to="/services"
          sx={{ color: textColor }}
        >
          {t("Послуги")}
        </Button>
        <Button
          color="inherit"
          component={Link}
          to="/about-us"
          sx={{ color: textColor }}
        >
          {t("Про нас")}
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
          <MenuItem onClick={handleLanguageMenuClose}>English</MenuItem>
          <MenuItem onClick={handleLanguageMenuClose}>Українська</MenuItem>
          <MenuItem onClick={handleLanguageMenuClose}>Deutsch</MenuItem>
        </Menu>

        <Button color="inherit" onClick={handleRegisterButtonClick}>
          {t("register")}
        </Button>
      </div>
    </Toolbar>
  );
};

export default Header;
