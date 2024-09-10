import { Box, Button, ListItem, Typography } from "@mui/material";
import { styled } from "@mui/system";

export const ImageTextContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  marginBottom: theme.spacing(4),
  [theme.breakpoints.down("sm")]: {
    flexDirection: "column",
    marginBottom: 0,
    gap: "24px",
  },
}));

export const HomeImage = styled("img")(({ theme }) => ({
  width: "50%",
  height: "auto",
  marginRight: theme.spacing(2),
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
  color:
    theme.palette.mode === "light" ? "rgb(244, 229, 220)" : "rgb(32, 19, 226)",
  fontSize: "smaller",
  borderRadius: "10px",
  "&:hover": {
    backgroundColor:
      theme.palette.mode === "light"
        ? "rgba(32, 19, 226, 0.8)"
        : "rgba(244, 229, 220, 0.8)",
  },
}));
