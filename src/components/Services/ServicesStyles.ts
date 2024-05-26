import { Box, List, Typography } from "@mui/material";
import { styled } from "@mui/system";

export const Title = styled(Typography)(({ theme }) => ({
  fontSize: "clamp(34px, 5.55vw, 54px)",
  fontWeight: 800,
  lineHeight: 1.25,
  letterSpacing: ".01em",
  marginBottom: "24px",
  textAlign: "center",
}));

export const SectionTitle = styled(Typography)(({ theme }) => ({
  fontSize: "clamp(26px, 5.55vw, 42px)",
  lineHeight: 1.08,
  fontWeight: 500,
  letterSpacing: ".01em",
  marginBottom: "24px",
  textAlign: "center",
}));

export const DescriptionBox = styled(Box)(({ theme }) => ({
  marginBottom: "48px",
  textIndent: "1em",
}));

export const CustomList = styled(List)(({ theme }) => ({
  marginBottom: "48px",
}));

export const IconWrapper = styled(Box)(({ theme }) => ({
  minWidth: "40px",
  minHeight: "40px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  marginRight: theme.spacing(2),
  [theme.breakpoints.down("sm")]: {
    marginRight: 0,
    marginBottom: theme.spacing(1),
  },
}));

export const TextWrapper = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  textAlign: "center",
  marginLeft: "16px",
}));
