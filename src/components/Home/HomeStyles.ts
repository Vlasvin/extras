import { Box, Button, ListItem, Typography } from "@mui/material";
import { styled } from "@mui/system";

export const ImageTextContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  marginBottom: 0,
  paddingTop: "24px",
  gap: "24px",

  [theme.breakpoints.up("md")]: {
    flexDirection: "row",
    gap: "16px",
    paddingTop: theme.spacing(4),
    marginBottom: theme.spacing(4),
  },
}));

export const HomeImageWrap = styled("div")(({ theme }) => ({
  display: "flex",
  width: "100%",
  height: "calc(100vw - 82px)",
  borderRadius: "20px",
  overflow: "hidden",
  [theme.breakpoints.up("md")]: {
    width: "43.62vw",
    height: "43.62vw",
  },
  [theme.breakpoints.up("lg")]: {
    width: "556px",
    height: "556px",
  },
}));

export const HomeImage = styled("img")(({ theme }) => ({
  width: "100%",
  height: "100%",
  objectFit: "cover",
  objectPosition: "center -60px",
  [theme.breakpoints.down("sm")]: {
    marginRight: 0,
  },
}));

export const Intro = styled(Typography)(({ theme }) => ({
  fontSize: "clamp(20px,5.55vw,28px)",
  marginBottom: 48,
  textAlign: "center",
}));
export const ListItemTranslation = styled(ListItem)(({ theme }) => ({
  fontSize: "clamp(16px,4.375vw, 20px)",
  fontFamily: "GothamPro, sans-serif",
  letterSpacing: "0.1em",
  [theme.breakpoints.down("sm")]: {
    letterSpacing: "0.01em",
  },
}));

export const HomeBtn = styled(Button)(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === "light" ? "rgb(32, 19, 226)" : "rgb(244, 229, 220)",
  color: theme.palette.mode === "light" ? "#eaeaea" : "rgb(32, 19, 226)",
  fontSize: "smaller",
  borderRadius: "10px",
  "&:hover": {
    backgroundColor:
      theme.palette.mode === "light"
        ? "rgba(32, 19, 226, 0.8)"
        : "rgba(244, 229, 220, 0.8)",
  },
}));
