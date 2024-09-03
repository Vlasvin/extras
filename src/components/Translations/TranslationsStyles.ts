import { styled } from "@mui/system";
import { Typography, Card, Box, Button } from "@mui/material";

export const Title = styled(Typography)(({ theme }) => ({
  fontFamily: "Unbounded, sans-serif",
  color:
    theme.palette.mode === "light" ? "rgb(32, 19, 226)" : "rgb(244, 229, 220)",
  fontSize: "clamp(34px, 5.55vw, 54px)",
  fontWeight: 800,
  lineHeight: 1.25,
  letterSpacing: "0.1em",
  marginBottom: "24px",
  textAlign: "center",
}));

export const SectionTitle = styled(Typography)(({ theme }) => ({
  fontSize: "clamp(26px, 5.55vw, 42px)",
  lineHeight: 1.08,
  fontWeight: 500,
  letterSpacing: "0.25em",
  marginBottom: "24px",
  textAlign: "center",
  color:
    theme.palette.mode === "light" ? "rgb(32, 19, 226)" : "rgb(244, 229, 220)",
}));

export const DescriptionBox = styled(Box)(({ theme }) => ({
  marginBottom: "48px",
  textIndent: "1em",
}));

export const CustomCard = styled(Card)(({ theme }) => ({
  width: "clamp(300px, 50vw, 380px)",
  height: "auto",
  borderRadius: "20px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  textAlign: "center",
  marginBottom: "48px",
  padding: "20px",
}));

export const CustomList = styled(Box)(({ theme }) => ({
  marginBottom: "48px",
}));

export const CustomImage = styled("img")(({ theme }) => ({
  height: "280px",
  width: "clamp(300px, 50vw, 400px)",
  objectFit: "cover",
  borderRadius: "20px",
  marginBottom: "24px",
}));

export const TranslationBtn = styled(Button)(({ theme }) => ({
  borderRadius: "20px",
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
