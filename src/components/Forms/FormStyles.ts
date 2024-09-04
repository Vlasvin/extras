import { Button, DialogTitle, styled } from "@mui/material";

export const FormBtn = styled(Button)(({ theme }) => ({
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

export const CustomDialogTitle = styled(DialogTitle)(({ theme }) => ({
  color:
    theme.palette.mode === "light" ? "rgb(32, 19, 226)" : "rgb(244, 229, 220)",
}));

export const UploadBtn = styled(Button)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  padding: " 9px",
  borderRadius: "4px",
  fontFamily: "GothamPro, sans-serif",
  fontSize: "clamp(14px,3.75vw,20px)",
  fontWeightRegular: 400,
  letterSpacing: "0.1em",
  textTransform: "uppercase",
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
