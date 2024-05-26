import React from "react";
import { ListItem, ListItemText, useMediaQuery, useTheme } from "@mui/material";
import { IconWrapper, TextWrapper } from "../ServicesStyles";

interface ServiceListItemProps {
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  text: string;
  fill: string;
}

const ServiceListItem: React.FC<ServiceListItemProps> = ({
  icon: Icon,
  text,
  fill,
}) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <ListItem
      style={{
        flexDirection: isMobile ? "column" : "row",
        alignItems: "center",
      }}
    >
      <IconWrapper>
        <Icon width="40" height="40" fill={fill} />
      </IconWrapper>
      <TextWrapper>
        <ListItemText primary={text} />
      </TextWrapper>
    </ListItem>
  );
};

export default ServiceListItem;
