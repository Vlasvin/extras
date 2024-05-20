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
  width: 300,
  height: 120,
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
  height: "640px",
  overflow: "hidden",
  borderRadius: "20px",
  marginBottom: "48px",
}));

export const CustomDivider = styled(Divider)(({ theme }) => ({
  height: "100%",
  backgroundColor: "#000",
}));
