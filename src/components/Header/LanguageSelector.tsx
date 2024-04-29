import React, { useState } from "react";
import { IconButton, Menu, MenuItem } from "@mui/material";
import i18next from "i18next";

import ukraineIcon from "../../assets/pictures/svg/ukraine.svg";
import russiaIcon from "../../assets/pictures/svg/russia.svg";
import usaIcon from "../../assets/pictures/svg/usa.svg";

interface LanguageSelectorProps {
  iconColor: string;
}

const LanguageSelector: React.FC<LanguageSelectorProps> = ({ iconColor }) => {
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);
  const open = Boolean(anchorEl);

  const handleMenuOpen = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const changeLanguage = (language: string) => {
    i18next.changeLanguage(language);
    handleMenuClose();
  };

  const getIcon = () => {
    const currentLanguage = i18next.language;
    switch (currentLanguage) {
      case "en":
        return usaIcon;
      case "uk":
        return ukraineIcon;
      case "ru":
        return russiaIcon;
      default:
        return usaIcon;
    }
  };

  return (
    <>
      <IconButton
        aria-label="select language"
        aria-controls="language-menu"
        aria-haspopup="true"
        onClick={handleMenuOpen}
        color={iconColor === "primary" ? "primary" : "inherit"}
      >
        <img src={getIcon()} alt="Language Flag" />
      </IconButton>
      <Menu
        id="language-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleMenuClose}
      >
        <MenuItem onClick={() => changeLanguage("en")}>English</MenuItem>
        <MenuItem onClick={() => changeLanguage("uk")}>Українська</MenuItem>
        <MenuItem onClick={() => changeLanguage("ru")}>Русский</MenuItem>
      </Menu>
    </>
  );
};

export default LanguageSelector;
