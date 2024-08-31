import { Button, Typography } from "@mui/material";
import { styled } from "@mui/system";

export const Intro = styled(Typography)(({ theme }) => ({
  fontSize: "clamp(20px,5.55vw,28px)",
  marginBottom: 48,
  textAlign: "center",
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
