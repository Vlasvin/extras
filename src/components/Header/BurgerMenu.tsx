import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import {
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  useMediaQuery,
  Box,
  CssBaseline,
  useTheme,
  Collapse,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import PersonIcon from "@mui/icons-material/Person";

import SocialMediaIcons from "../Footer/SocialMediaIcons";
import ThemeSwitch from "./ThemeSwitch";
import LanguageSelector from "./LanguageSelector";

interface BurgerMenuProps {
  menuItems: { label: string; link: string }[];
  handleRegisterButtonClick: () => void;
}

const BurgerMenu: React.FC<BurgerMenuProps> = ({
  menuItems,
  handleRegisterButtonClick,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const { t } = useTranslation();
  const isMobile = useMediaQuery("(max-width:1024px)");
  const theme = useTheme();

  const toggleDrawer = (open: boolean) => () => {
    setIsOpen(open);
  };

  const drawerTransition = {
    enter: theme.transitions.duration.enteringScreen,
    duration: 200,
  };

  const drawerStyles = {
    width: "100%",
    "& .MuiDrawer-paper": {
      width: "100%",
      backgroundColor: theme.palette.background.default,
      transition: theme.transitions.create("transform", {
        easing: theme.transitions.easing.sharp,
        duration: drawerTransition.duration,
      }),
      transform: `translate(${isOpen ? 0 : "100%"}%)`,
      height: "100vh",
    },
  };

  return (
    <>
      {isMobile && (
        <IconButton onClick={toggleDrawer(true)} aria-label="menu">
          <MenuIcon />
        </IconButton>
      )}
      <CssBaseline />
      <Drawer
        anchor="top"
        open={isOpen}
        onClose={toggleDrawer(false)}
        sx={drawerStyles}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "right",
            alignItems: "center",
            padding: "16px",
          }}
        >
          <ThemeSwitch />
          <LanguageSelector iconColor="primary" />
          <IconButton onClick={handleRegisterButtonClick} aria-label="account">
            <PersonIcon />
          </IconButton>
          <IconButton onClick={toggleDrawer(false)} aria-label="close">
            <CloseIcon />
          </IconButton>
        </Box>
        <Collapse in={isOpen} timeout={drawerTransition.duration}>
          <List>
            {menuItems.map((item, index) => (
              <ListItem
                button
                key={index}
                component={Link}
                to={item.link}
                onClick={toggleDrawer(false)}
              >
                <ListItemText primary={t(item.label)} />
              </ListItem>
            ))}
          </List>
          <SocialMediaIcons />
        </Collapse>
      </Drawer>
    </>
  );
};

export default BurgerMenu;
