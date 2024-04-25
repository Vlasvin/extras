import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Toolbar, Button, Box, IconButton } from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";

import BurgerMenu from "./BurgerMenu";
import { ThemeContext } from "../../redux/ThemeContext";
import { IThemeContext, IThemeMode } from "../../redux/ThemeContext/types";
import ThemeSwitch from "./ThemeSwitch";

interface HeaderProps {
  onRegisterClick: () => void;
}

const Header: React.FC<HeaderProps> = ({ onRegisterClick }) => {
  const { t } = useTranslation();
  const { themeMode } = useContext(ThemeContext) as IThemeContext;

  const handleRegisterButtonClick = () => {
    onRegisterClick();
  };

  const iconColor = themeMode === IThemeMode.DARK ? "primary" : "inherit";
  const textColor = themeMode === IThemeMode.DARK ? "#FFFFFF" : "inherit";

  const menuItems = [
    { label: t("visas"), link: "/visas" },
    { label: t("translations"), link: "/translations" },
    { label: t("services"), link: "/services" },
    { label: t("about us"), link: "/about-us" },
  ];

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
          display: { xs: "none", md: "flex" },
          gap: 4,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {menuItems.map((item, index) => (
          <Button
            key={index}
            color="inherit"
            component={Link}
            to={item.link}
            sx={{ color: textColor, textTransform: "none", fontSize: 18 }}
          >
            {item.label}
          </Button>
        ))}
      </Box>
      <div>
        <ThemeSwitch />
        <IconButton onClick={handleRegisterButtonClick} aria-label="account">
          <PersonIcon />
        </IconButton>
      </div>
      <BurgerMenu menuItems={menuItems} />
    </Toolbar>
  );
};

export default Header;
