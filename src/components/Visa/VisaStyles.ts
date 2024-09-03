import { styled } from "@mui/system";
import { Typography, Card, Box, Divider, Button } from "@mui/material";

export const USATitle = styled(Typography)(({ theme }) => ({
  fontSize: "clamp(34px, 5.55vw, 54px)",
  fontFamily: "Unbounded, sans-serif",
  fontWeight: 800,
  lineHeight: 1.25,
  letterSpacing: "0.1em",
  color:
    theme.palette.mode === "light" ? "rgb(32, 19, 226)" : "rgb(244, 229, 220)",
  marginBottom: 48,
  [theme.breakpoints.down("sm")]: {
    fontSize: "2rem",
    marginBottom: "24px",
  },
}));

export const CenteredCard = styled(Card)(({ theme }) => ({
  width: 300,
  height: 240,
  borderRadius: "20px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  textAlign: "center",
  boxShadow:
    theme.palette.mode === "light"
      ? "0px 0px 24px 0px rgba(32, 19, 226, 0.2)"
      : "none",
  border:
    theme.palette.mode === "dark" ? "0.5px solid rgba(83, 249, 65, 1)" : "none",
  marginBottom: 48,
}));

export const CenteredCostCard = styled(Card)(({ theme }) => ({
  width: "clamp(300px, 50vw, 380px)",
  height: 160,
  borderRadius: "20px",
  boxShadow:
    theme.palette.mode === "light"
      ? "0px 0px 24px 0px rgba(32, 19, 226, 0.2)"
      : "none",
  border:
    theme.palette.mode === "dark" ? "0.5px solid rgba(83, 249, 65, 1)" : "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  textAlign: "center",
  marginBottom: 48,
}));

export const CustomBox = styled(Box)(({ theme }) => ({
  position: "relative",
  width: "100%",
  height: "clamp(340px, 50vw, 640px)",
  overflow: "hidden",
  borderRadius: "20px",
  marginBottom: "48px",
}));

export const CustomDivider = styled(Divider)(({ theme }) => ({
  height: "100%",
  backgroundColor: "#000",
}));

export const CardWrap = styled(Box)(({ theme }) => ({
  width: "clamp(300px, 50vw, 380px)",
  height: 200,
  cursor: "pointer",
  position: "relative",
  marginTop: "24px",
}));

export const VisaUsaBtn = styled(Button)(({ theme }) => ({
  color:
    theme.palette.mode === "light" ? "rgb(244, 229, 220)" : "rgb(32, 19, 226)",
  backgroundColor:
    theme.palette.mode === "light" ? "rgb(32, 19, 226)" : "rgb(244, 229, 220)",
  "&:hover": {
    backgroundColor:
      theme.palette.mode === "light"
        ? "rgba(32, 19, 226, 0.8)"
        : "rgba(244, 229, 220, 0.8)",
  },
}));
