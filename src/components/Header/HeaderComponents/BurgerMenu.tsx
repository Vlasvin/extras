import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import {
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  useMediaQuery,
  Box,
  CssBaseline,
  useTheme,
  Collapse,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import PersonIcon from "@mui/icons-material/Person";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import SocialMediaIcons from "components/Footer/FooterComponents/SocialMediaIcons";
import ThemeSwitch from "./ThemeSwitch";
import LanguageSelector from "./LanguageSelector";
import { useMenuItems, useVisaMenuItems } from "hooks/menuHooks";

interface BurgerMenuProps {
  menuItems?: { label: string; link: string }[];
  handleRegisterButtonClick: () => void;
}

const BurgerMenu: React.FC<BurgerMenuProps> = ({
  handleRegisterButtonClick,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const { t } = useTranslation();
  const isMobile = useMediaQuery("(max-width:1024px)");
  const theme = useTheme();
  const menuItems = useMenuItems();
  const visaMenuItems = useVisaMenuItems();

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
        <Collapse in={isOpen} timeout={drawerTransition.duration}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "right",
              alignItems: "center",
              padding: "16px",
              borderBottom: "1px solid #ddd",
            }}
          >
            <LanguageSelector iconColor="primary" />
            <ThemeSwitch />
            <IconButton
              onClick={toggleDrawer(false)}
              component={Link}
              to="/auth"
              aria-label="account"
            >
              <PersonIcon />
            </IconButton>
            <IconButton onClick={toggleDrawer(false)} aria-label="close">
              <CloseIcon />
            </IconButton>
          </Box>

          <Box
            sx={{
              display: "flex",
              padding: "20px 0",
              marginLeft: 5,
              flexDirection: "column",
              height: "140%",
            }}
          >
            <List sx={{ flex: 1 }}>
              {menuItems.map((item, index) => (
                <React.Fragment key={index}>
                  {item.label === t("visas") ? (
                    <Accordion
                      sx={{
                        backgroundColor: "transparent",
                        boxShadow: "none",
                        backgroundImage: "none",
                      }}
                    >
                      <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="visas-menu-content"
                        id="visas-menu-header"
                      >
                        <ListItemText primary={t("visas")} />
                      </AccordionSummary>
                      <AccordionDetails>
                        <List>
                          {visaMenuItems.map((subItem, subIndex) => (
                            <ListItem
                              button
                              key={subIndex}
                              component={Link}
                              to={subItem.link}
                              onClick={toggleDrawer(false)}
                            >
                              <ListItemText primary={t(subItem.label)} />
                            </ListItem>
                          ))}
                        </List>
                      </AccordionDetails>
                    </Accordion>
                  ) : (
                    <ListItem
                      button
                      component={Link}
                      to={item.link}
                      onClick={toggleDrawer(false)}
                    >
                      <ListItemText primary={t(item.label)} />
                    </ListItem>
                  )}
                </React.Fragment>
              ))}
            </List>
          </Box>
          <Box
            sx={{
              borderTop: "1px solid #ddd",
              maxWidth: 320,
              paddingLeft: "16px",
              margin: "0 auto",
            }}
          >
            <SocialMediaIcons />
          </Box>
        </Collapse>
      </Drawer>
    </>
  );
};

export default BurgerMenu;
