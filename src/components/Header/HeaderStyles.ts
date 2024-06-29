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
  },
};

export const DialogBtn = styled(Button)(({ theme }) => ({
  backgroundColor: "transparent",
  fontSize: "smaller",
  borderRadius: "10px",
  padding: "2px 10px",
}));
