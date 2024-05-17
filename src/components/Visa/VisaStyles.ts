import { styled } from "@mui/system";
import { Box, ListItem, Typography } from "@mui/material";

export const VisaContainer = styled(Box)(({ theme }) => ({
  padding: theme.spacing(2),
}));

export const VisaTitle = styled(Typography)(({ theme }) => ({
  fontSize: "clamp(34px, 5.55vw, 54px)",
  fontWeight: 800,
  lineHeight: 1.25,
  letterSpacing: ".01em",
  marginBottom: 48,
  [theme.breakpoints.down("sm")]: {
    fontSize: "2rem",
  },
}));

export const VisaBanner = styled("img")(({ theme }) => ({
  width: "100%",
  borderRadius: "20px",
  marginBottom: 48,
  marginTop: 0,
}));

export const VisaTitleList = styled(Typography)(({ theme }) => ({
  marginBottom: "48px",
  fontSize: "clamp(26px, 5.55vw, 42px)",
  lineHeight: 1.08,
  fontWeight: 500,
  letterSpacing: ".01em",
  [theme.breakpoints.down("sm")]: {
    fontSize: "1.5rem",
  },
}));

export const VisaListItem = styled(ListItem)(({ theme }) => ({
  [theme.breakpoints.down("sm")]: {
    padding: "8px 0",
  },
}));

export const CountryContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "space-around",
  marginTop: theme.spacing(2),
  [theme.breakpoints.down("sm")]: {
    flexDirection: "column",
    alignItems: "center",
  },
}));

export const CountryBox = styled(Box)(({ theme }) => ({
  textAlign: "center",
  cursor: "pointer",
  marginBottom: theme.spacing(2),
}));
