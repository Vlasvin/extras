import { Button, Typography } from "@mui/material";
import { styled } from "@mui/system";

export const Intro = styled(Typography)(({ theme }) => ({
  fontSize: "clamp(20px,5.55vw,28px)",
  marginBottom: 48,
  textAlign: "center",
}));

export const HomeBtn = styled(Button)(({ theme }) => ({
  backgroundColor: "transparent",
  fontSize: "smaller",
  borderRadius: "10px",
}));
