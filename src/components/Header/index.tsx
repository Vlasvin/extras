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

  const buttonRef = useRef<HTMLButtonElement>(null);
  const [openMenu, setOpenMenu] = useState<boolean>(false);
  const { themeMode, switchThemeMode } = useContext(
    ThemeContext
  ) as IThemeContext;

  const handleLanguageMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleLanguageMenuClose = () => {
    setAnchorEl(null);
  };

  const handleRegisterButtonClick = () => {
    onRegisterClick();
  };

  // const handleSwitchTheme = (mode: IThemeMode) => {
  //   switchThemeMode(mode);
  //   handleThemeMenuClose();
  // };

  const handleSwitchTheme = (event: React.ChangeEvent<HTMLInputElement>) => {
    switchThemeMode(event.target.checked ? IThemeMode.DARK : IThemeMode.LIGHT);
  };

  return (
    <Toolbar>
      <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
        <Link to="/">
          <img
            src="https://extras.com.ua/wp-content/themes/slick-red/images/red/logo.gif"
            alt="extras.com.ua"
            style={{ height: 30, marginRight: 10 }}
          />
        </Link>
      </Typography>
      <div>
        <Button color="inherit" component={Link} to="/visas">
          {t("visas")}
        </Button>
        <Button color="inherit" component={Link} to="/translations">
          {t("translations")}
        </Button>
        <Button color="inherit" component={Link} to="/services">
          {t("services")}
        </Button>
        <Button color="inherit" component={Link} to="/about-us">
          {t("about us")}
        </Button>
        <ThemeSwitch />

        {/* <Button
          variant="contained"
          onClick={handleThemeMenuOpen}
          startIcon={<PaletteIcon />}
          ref={buttonRef}
        >
          Switch Theme
        </Button>
        <Menu
          open={openMenu}
          anchorEl={buttonRef.current}
          onClose={handleThemeMenuClose}
        >
          <MenuItem
            onClick={() => handleSwitchTheme(IThemeMode.LIGHT)}
            selected={themeMode === IThemeMode.LIGHT}
          >
            Light
          </MenuItem>
          <MenuItem
            onClick={() => handleSwitchTheme(IThemeMode.DARK)}
            selected={themeMode === IThemeMode.DARK}
          >
            Dark
          </MenuItem>
          <MenuItem
            onClick={() => handleSwitchTheme(IThemeMode.SYSTEM)}
            selected={themeMode === IThemeMode.SYSTEM}
          >
            System
          </MenuItem>
        </Menu> */}
        <IconButton
          size="large"
          aria-label="select language"
          aria-controls="language-menu"
          aria-haspopup="true"
          onClick={handleLanguageMenuOpen}
          color="inherit"
        >
          <LanguageIcon />
        </IconButton>
        <Menu
          id="language-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleLanguageMenuClose}
          onClick={handleLanguageMenuClose}
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
