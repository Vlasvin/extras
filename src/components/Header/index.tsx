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
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Tooltip,
} from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import LogoutIcon from "@mui/icons-material/Logout";
import DownIcon from "@mui/icons-material/KeyboardArrowDown";

import { ThemeContext } from "redux/ThemeContext";
import { IThemeContext } from "redux/ThemeContext/types";
import { useAuth } from "context/AuthContext";
import ThemeSwitch from "components/Header/HeaderComponents/ThemeSwitch";
import LanguageSelector from "components/Header/HeaderComponents/LanguageSelector";
import BurgerMenu from "components/Header/HeaderComponents/BurgerMenu";

import { DialogBtn, headerStyles } from "./HeaderStyles";
import { useMenuItems, useVisaMenuItems } from "hooks/menuHooks";
import LogoDark from "assets/pictures/jpg/Logo_dark.png";
import LogoLight from "assets/pictures/jpg/Logo_light.jpg";

interface HeaderProps {
  onRegisterClick: () => void;
}

const Header: React.FC<HeaderProps> = ({ onRegisterClick }) => {
  const { t } = useTranslation();
  const { themeMode } = useContext(ThemeContext) as IThemeContext;
  const authContext = useAuth();
  const isMobile = useMediaQuery("(max-width:900px)");
  const location = useLocation();

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [openDialog, setOpenDialog] = useState(false);
  const [isVisasMenuOpen, setIsVisasMenuOpen] = useState(false);

  const handleDialogOpen = () => setOpenDialog(true);
  const handleDialogClose = () => setOpenDialog(false);

  const handleLogout = () => {
    logout();
    handleDialogClose();
  };

  const menuItems = useMenuItems() || [];
  const visaMenuItems = useVisaMenuItems() || [];

  if (!authContext || !themeMode) {
    return null;
  }
  const { user, logout } = authContext;

  const handleVisasMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
    setIsVisasMenuOpen(true);
  };

  const handleVisasMenuClose = () => {
    setAnchorEl(null);
    setIsVisasMenuOpen(false);
  };

  const logo = themeMode === "dark" ? LogoDark : LogoLight;

  return (
    <Toolbar sx={headerStyles.toolbar}>
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <Link to="/">
          <img
            src={logo}
            alt="extras.com.ua"
            style={{ height: 40, marginRight: 10 }}
          />
        </Link>
      </Box>
      <Box sx={headerStyles.box}>
        {!isMobile &&
          menuItems.length &&
          menuItems.map((item, index) => (
            <Button
              id="demo-positioned-button"
              aria-controls={
                isVisasMenuOpen ? "demo-positioned-menu" : undefined
              }
              aria-haspopup="true"
              aria-expanded={isVisasMenuOpen ? "true" : undefined}
              key={index}
              color={"inherit"}
              component={Link}
              to={item.link}
              onMouseEnter={(event) => {
                if (item.label === t("visas")) {
                  handleVisasMenuOpen(event);
                }
              }}
              sx={{
                ...headerStyles.button,
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
          open={isVisasMenuOpen}
          onClose={handleVisasMenuClose}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "center",
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "center",
          }}
          onMouseLeave={handleVisasMenuClose}
        >
          {visaMenuItems.length &&
            visaMenuItems.map((menuItem) => (
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
          {user ? (
            <Tooltip title={t("auth.logout")} arrow>
              <IconButton
                onClick={handleDialogOpen}
                aria-label="logout"
                sx={{
                  color: "rgb(244, 229, 220)",
                }}
              >
                <LogoutIcon />
              </IconButton>
            </Tooltip>
          ) : (
            <Tooltip title={t("auth.login")} arrow>
              <IconButton
                component={Link}
                to="/auth"
                aria-label="account"
                sx={{
                  color: "rgb(244, 229, 220)",
                }}
              >
                <PersonIcon />
              </IconButton>
            </Tooltip>
          )}
        </Box>
      )}
      <BurgerMenu handleRegisterButtonClick={onRegisterClick} />
      <Dialog
        open={openDialog}
        onClose={handleDialogClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        sx={{ "& .MuiPaper-root": { borderRadius: "10px" } }}
      >
        <DialogTitle id="alert-dialog-title" sx={{ textAlign: "center" }}>
          {t("auth.logout_confirm")}
        </DialogTitle>
        <DialogContent sx={{ paddingBottom: "10px" }}>
          <DialogContentText
            id="alert-dialog-description"
            sx={{ textAlign: "center" }}
          >
            {t("auth.logout_message")}
          </DialogContentText>
        </DialogContent>
        <DialogActions sx={{ justifyContent: "center", paddingBottom: "16px" }}>
          <DialogBtn
            onClick={handleDialogClose}
            variant="outlined"
            color="primary"
          >
            {t("auth.cancel")}
          </DialogBtn>
          <DialogBtn
            onClick={handleLogout}
            variant="outlined"
            color="primary"
            autoFocus
          >
            {t("auth.logout")}
          </DialogBtn>
        </DialogActions>
      </Dialog>
    </Toolbar>
  );
};

export default Header;
