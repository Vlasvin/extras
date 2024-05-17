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

import { ThemeContext } from "redux/ThemeContext";
import { IThemeContext, IThemeMode } from "redux/ThemeContext/types";
import ThemeSwitch from "components/Header/HeaderComponents/ThemeSwitch";
import LanguageSelector from "components/Header/HeaderComponents/LanguageSelector";
import BurgerMenu from "components/Header/HeaderComponents/BurgerMenu";

import { headerStyles } from "./HeaderStyles";
import { getMenuItems, getVisaMenuItems } from "services/menuData";
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
  const [isMenuOpening, setIsMenuOpening] = useState(false);
  const menuItems = getMenuItems();
  const visaMenuItems = getVisaMenuItems();

  const handleRegisterButtonClick = () => {
    onRegisterClick();
  };

  const handleVisasMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setIsMenuOpening(true);
    setAnchorEl(event.currentTarget);
  };

  const handleVisasMenuClose = () => {
    if (!isMenuOpening) {
      setAnchorEl(null);
    }
    setIsMenuOpening(false);
  };

  const textColor = themeMode === IThemeMode.DARK ? "#FFFFFF" : "inherit";

  return (
    <Toolbar sx={headerStyles.toolbar}>
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <Link to="/">
          <img
            src="https://extras.com.ua/wp-content/themes/slick-red/images/red/logo.gif"
            alt="extras.com.ua"
            style={{ height: 40, marginRight: 10 }}
          />
        </Link>
      </Box>
      <Box sx={headerStyles.box}>
        {!isMobile &&
          menuItems.map((item, index) => (
            <Button
              id="demo-positioned-button"
              aria-controls={open ? "demo-positioned-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
              key={index}
              color={"inherit"}
              component={Link}
              to={item.link}
              onMouseEnter={(event) => {
                event.preventDefault();
                if (item.label === t("visas")) {
                  handleVisasMenuOpen(event);
                }
              }}
              onMouseLeave={handleVisasMenuClose}
              sx={{
                ...headerStyles.button,
                color: { textColor },
                fontWeight: location.pathname === item.link ? "bold" : "normal",
              }}
            >
              {item.label}
              {item.label === t("visas") && <DownIcon sx={{ ml: 1 }} />}
            </Button>
          ))}
        <Menu
          id="demo-positioned-menu"
          aria-labelledby="demo-positioned-button"
          anchorEl={anchorEl}
          open={open}
          onClose={handleVisasMenuClose}
          onMouseLeave={handleVisasMenuClose}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "center",
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "center",
          }}
        >
          {visaMenuItems.map((menuItem) => (
            <MenuItem
              key={menuItem.label}
              component={Link}
              to={menuItem.link}
              onClick={handleVisasMenuClose}
            >
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
