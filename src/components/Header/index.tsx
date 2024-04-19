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

interface HeaderProps {
  onRegisterClick: () => void;
}

const Header: React.FC<HeaderProps> = ({ onRegisterClick }) => {
  const { t } = useTranslation();

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
          <Button color="inherit" component={Link} to="/page1">
            {t("page1")}
          </Button>
          <Button color="inherit" component={Link} to="/page2">
            {t("page2")}
          </Button>
          <Button color="inherit" component={Link} to="/page3">
            {t("page3")}
          </Button>
          <Button color="inherit" component={Link} to="/page4">
            {t("page4")}
          </Button>
          <Button color="inherit" onClick={handleRegisterButtonClick}>
            {t("register")}
          </Button>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
