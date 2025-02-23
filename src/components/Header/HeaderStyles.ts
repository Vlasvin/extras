import { Button } from "@mui/material";
import { styled } from "@mui/system";

export const headerStyles = {
  toolbar: {
    justifyContent: "space-between",
    alignItems: "center",
    borderBottom: "1px solid #ddd",
  },
  box: {
    display: "flex",
    alignItems: "center",
    gap: 4,
    justifyContent: "center",
  },
  button: {
    fontFamily: "Montserrat, sans-serif",
    fontSize: 18,
    fontWeight: "normal",
    textTransform: "none",
    position: "relative",
    display: "flex",
    alignItems: "center",
    padding: "0 8px",
    height: "64px",
    color: "#eaeaea",
  },
};

export const DialogBtn = styled(Button)(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === "light" ? "rgb(32, 19, 226)" : "rgb(244, 229, 220)",
  color:
    theme.palette.mode === "light" ? "rgb(244, 229, 220)" : "rgb(32, 19, 226)",
  "&:hover": {
    backgroundColor:
      theme.palette.mode === "light"
        ? "rgba(32, 19, 226, 0.8)"
        : "rgba(244, 229, 220, 0.8)",
  },
  fontSize: "smaller",
  borderRadius: "10px",
  padding: "2px 10px",
}));

export const PhoneLink = styled("a")(({ theme }) => ({
  fontFamily: "Montserrat, sans-serif",
  fontSize: 18,
  fontWeight: "normal",
  textTransform: "none",
  position: "relative",
  display: "flex",
  alignItems: "center",
  padding: "0 8px",
  height: "64px",
}));
