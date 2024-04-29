import React, { useContext, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import {
  Toolbar,
  Button,
  Box,
  IconButton,
  useMediaQuery,
  MenuItem,
  Menu,
} from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import DownIcon from "@mui/icons-material/KeyboardArrowDown";

import { ThemeContext } from "../../redux/ThemeContext";
import { IThemeContext, IThemeMode } from "../../redux/ThemeContext/types";
import ThemeSwitch from "./ThemeSwitch";
import LanguageSelector from "./LanguageSelector";
import BurgerMenu from "./BurgerMenu";

interface HeaderProps {
  onRegisterClick: () => void;
}

const Header: React.FC<HeaderProps> = ({ onRegisterClick }) => {
  const { t } = useTranslation();
  const { themeMode } = useContext(ThemeContext) as IThemeContext;
  const isMobile = useMediaQuery("(max-width:900px)");
  const location = useLocation();

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleRegisterButtonClick = () => {
    onRegisterClick();
  };

  const handleVisasMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleVisasMenuClose = () => {
    setAnchorEl(null);
  };

  const textColor = themeMode === IThemeMode.DARK ? "#FFFFFF" : "inherit";

  const menuItems = [
    { label: t("visas"), link: "/visas" },
    { label: t("translations"), link: "/translations" },
    { label: t("services"), link: "/services" },
    { label: t("about us"), link: "/about-us" },
  ];

  const visaMenuItems = [
    { label: t("visa to usa"), link: "/visas/usa" },
    { label: t("visa to canada"), link: "/visas/canada" },
    { label: t("visa to australia"), link: "/visas/australia" },
  ];

  return (
    <Toolbar
      sx={{
        justifyContent: "space-between",
        alignItems: "center",
        borderBottom: "1px solid #ddd",
      }}
    >
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
          display: { xs: "none", md: "flex" },
          gap: 4,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {menuItems.map((item, index) => (
          <Button
            key={index}
            color={"inherit"}
            component={Link}
            to={item.link}
            onMouseEnter={
              item.label === t("visas") ? handleVisasMenuOpen : undefined
            }
            onMouseLeave={handleVisasMenuClose}
            sx={{
              color: { textColor },
              fontWeight: location.pathname === item.link ? "bold" : "normal",
              textTransform: "none",
              fontSize: 18,
              position: "relative",
              display: "flex",
              alignItems: "center",
            }}
          >
            {item.label}
            {item.label === t("visas") && <DownIcon sx={{ ml: 1 }} />}
          </Button>
        ))}
        <Menu
          id="visas-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleVisasMenuClose}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "left",
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "left",
          }}
        >
          {visaMenuItems.map((menuItem) => (
            <MenuItem key={menuItem.label} component={Link} to={menuItem.link}>
              {menuItem.label}
            </MenuItem>
          ))}
        </Menu>
      </Box>
      {!isMobile && (
        <Box>
          <LanguageSelector iconColor="primary" />
          <ThemeSwitch />
          <IconButton onClick={handleRegisterButtonClick} aria-label="account">
            <PersonIcon />
          </IconButton>
        </Box>
      )}
      <BurgerMenu
        menuItems={menuItems}
        handleRegisterButtonClick={handleRegisterButtonClick}
      />
    </Toolbar>
  );
};

export default Header;
