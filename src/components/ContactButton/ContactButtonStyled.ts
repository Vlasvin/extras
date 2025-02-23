import { styled } from "@mui/system";

export const PhoneLink = styled("a")(({ theme }) => ({
  position: "fixed",
  right: "42px",
  bottom: "47px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: "70px",
  height: "70px",
  backgroundColor: " #53f941",
  borderRadius: "50%",
  boxShadow: "0px 0px 8px 0px #53f941",
  [theme.breakpoints.up("lg")]: {
    display: "none",
  },
}));

export const Image = styled("img")(({ theme }) => ({
  width: "45px",
  height: "45px",
}));
