import { styled } from "@mui/system";
import { Typography, Card, Box, Divider } from "@mui/material";

export const USATitle = styled(Typography)(({ theme }) => ({
  fontSize: "clamp(34px, 5.55vw, 54px)",
  fontWeight: 800,
  lineHeight: 1.25,
  letterSpacing: ".01em",
  marginBottom: 48,
  [theme.breakpoints.down("sm")]: {
    fontSize: "2rem",
    marginBottom: "24px",
  },
}));

export const CustomTypography = styled(Typography)(({ theme }) => ({
  fontSize: "clamp(26px, 5.55vw, 42px)",
  lineHeight: 1.08,
  fontWeight: 500,
  letterSpacing: ".01em",
  marginBottom: "24px",
  textAlign: "center",
}));

export const CenteredCard = styled(Card)(({ theme }) => ({
  width: 300,
  height: 240,
  borderRadius: "20px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  textAlign: "center",
  boxShadow: "0px 8px 24px 0px rgba(0, 0, 0, 0.2)",
  marginBottom: 48,
}));

export const CostsTitle = styled(Typography)(({ theme }) => ({
  fontSize: "clamp(26px, 5.55vw, 42px)",
  lineHeight: 1.08,
  fontWeight: 500,
  letterSpacing: ".01em",
  marginBottom: "24px",
  textAlign: "center",
}));

export const CenteredCostCard = styled(Card)(({ theme }) => ({
  width: "clamp(300px, 50vw, 380px)",
  height: 160,
  borderRadius: "20px",
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
