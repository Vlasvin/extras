import { Typography, Button, styled, ButtonProps } from "@mui/material";

export const Title = styled(Typography)(({ theme }) => ({
  margin: "30px 0",
  paddingLeft: "40px",
  fontSize: "clamp(24px,5.5vw,28px)",
  color:
    theme.palette.mode === "light" ? "rgb(32, 19, 226)" : "rgb(244, 229, 220)",
}));

export const VisaButton = styled(Button)<ButtonProps>(({ theme }) => ({
  fontSize: "smaller",
  borderRadius: "10px",
  backgroundColor:
    theme.palette.mode === "light" ? "rgb(32, 19, 226)" : "rgb(244, 229, 220)",
  color:
    theme.palette.mode === "light" ? "rgb(244, 229, 220)" : "rgb(32, 19, 226)",
  textTransform: "none",
  "&:hover": {
    backgroundColor:
      theme.palette.mode === "light"
        ? "rgba(32, 19, 226, 0.8)"
        : "rgba(244, 229, 220, 0.8)",
  },
}));

export const VisaImage = styled("img")({
  borderRadius: "20px",
  width: "clamp(340px,100%,420px)",
  height: "420px",
  marginBottom: "48px",
});

export const SvgUsa = styled("div")({
  position: "absolute",
  right: 16,
  bottom: 54,
});

export const SvgCanada = styled("div")({
  position: "absolute",
  right: 0,
  bottom: 54,
});
