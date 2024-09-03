import { Typography, styled } from "@mui/material";

export const Title = styled(Typography)(({ theme }) => ({
  fontFamily: "Unbounded, sans-serif",
  color:
    theme.palette.mode === "light" ? "rgb(32, 19, 226)" : "rgb(244, 229, 220)",
  fontSize: "clamp(34px,5.55vw,54px)",
  fontWeight: 800,
  lineHeight: 1.25,
  letterSpacing: "0.1em",
  marginBottom: 48,
  display: "flex",
  justifyContent: "center",
}));

export const aboutUsStyles = {
  root: { paddingRight: 0 },

  content: {
    lineHeight: 1.6,
  },
  section: {
    background: "transparent",
    marginBottom: 20,
    borderRadius: 20,
    boxShadow: "0px 8px 24px 0px rgba(0, 0, 0, 0.2)",
    animation: `fadeIn 1s ease-in-out forwards`,
  },
  "@keyframes fadeIn": {
    from: {
      opacity: 0,
      transform: "translateY(20px)",
    },
    to: {
      opacity: 1,
      transform: "translateY(0)",
    },
  },
  serviceItem: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginBottom: 16,
    borderRadius: 24,
    padding: 18,
    height: "390px",
  },
  serviceIcon: {
    marginTop: "8px",
    marginBottom: "24px",
  },
  serviceTitle: {
    fontWeight: "bold",
    paddingLeft: "22px",
  },
  serviceDescription: {
    margin: "16px 22px",
  },

  li: {
    fontSize: "clamp(18px,4.375vw,20px)",
    fontFamily: "Montserrat, sans-serif",
    fontWeightRegular: 400,
  },

  boxWhyUs: { marginBottom: 8 },

  h2: {
    margin: "48px 0",
    display: "flex",
    justifyContent: "center",
    fontSize: "clamp(34px,5.55vw,54px)",
    lineHeight: 1.08,
    fontWeight: 500,
    letterSpacing: ".01em",
  },
  h6: {
    fontSize: "clamp(24px,5.55vw,28px)",
    marginBottom: 10,
  },

  titleWhyUs: {
    fontSize: "clamp(26px,5.55vw,42px)",
    lineHeight: 1.08,
    fontWeight: 500,
    letterSpacing: ".01em",
    marginLeft: 24,
  },
  headerImg: {
    maxWidth: "clamp(300px, 50vw, 360px)",
    maxHeight: "100%",
    marginBottom: "48px",
    borderRadius: "20px",
  },
};
