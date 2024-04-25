import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

interface BurgerMenuProps {
  menuItems: { label: string; link: string }[];
}

const BurgerMenu: React.FC<BurgerMenuProps> = ({ menuItems }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDrawer = (open: boolean) => () => {
    setIsOpen(open);
  };

  return (
    <div>
      <IconButton onClick={toggleDrawer(true)} aria-label="menu">
        <MenuIcon />
      </IconButton>
      <Drawer anchor="left" open={isOpen} onClose={toggleDrawer(false)}>
        <List>
          {menuItems.map((item, index) => (
            <ListItem
              button
              key={index}
              component={Link}
              to={item.link}
              onClick={toggleDrawer(false)}
            >
              <ListItemText primary={item.label} />
            </ListItem>
          ))}
        </List>
      </Drawer>
    </div>
  );
};

export default BurgerMenu;
