import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { IconButton, Menu, MenuItem } from "@mui/material";
import LanguageIcon from "@mui/icons-material/Language";
import i18next from "i18next";

interface LanguageSelectorProps {
  iconColor: string;
}

const LanguageSelector: React.FC<LanguageSelectorProps> = ({ iconColor }) => {
  const { i18n } = useTranslation();
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

  return (
    <>
      <IconButton
        aria-label="select language"
        aria-controls="language-menu"
        aria-haspopup="true"
        onClick={handleMenuOpen}
        color={iconColor === "primary" ? "primary" : "inherit"}
      >
        <LanguageIcon />
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
