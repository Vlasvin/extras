import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Menu,
  MenuItem,
} from "@mui/material";
import { Link } from "react-router-dom";
import LanguageIcon from "@mui/icons-material/Language";
import { useTranslation } from "react-i18next";
import { useTheme } from "../../redux/ThemeManager";

interface HeaderProps {
  onRegisterClick: () => void;
}

const Header: React.FC<HeaderProps> = ({ onRegisterClick }) => {
  const { t } = useTranslation();
  const { theme, toggleTheme } = useTheme();

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleLanguageMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleLanguageMenuClose = () => {
    setAnchorEl(null);
  };

  const handleRegisterButtonClick = () => {
    onRegisterClick();
  };

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          <Link to="/">
            <img
              src="/logo.png"
              alt="Logo"
              style={{ height: 30, marginRight: 10 }}
            />
          </Link>
          {t("appTitle")}
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
          <Button color="inherit" component={Link} to="/about us">
            {t("about us")}
          </Button>
          <Button color="inherit" onClick={toggleTheme}>
            {theme === "light" ? "Dark Theme" : "Light Theme"}
          </Button>
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
    </AppBar>
  );
};

export default Header;
