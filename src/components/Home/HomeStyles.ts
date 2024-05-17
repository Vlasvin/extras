import { CSSProperties } from "react";

export const homeStyles = {
  buttonBox: {
    position: "absolute",
    bottom: "16px",
    right: "16px",
  },

  button: {
    fontFamily: "Montserrat, sans-serif",
    backgroundColor: "transparent",
    fontSize: "smaller",
    borderRadius: "10px",
  },

  title: {
    margin: "30px 0",
    paddingLeft: "40px",
    fontSize: "clamp(24px,5.5vw,28px)",
  },

  img: {
    borderRadius: "20px",
    width: "clamp(340px,100%,420px)",
    height: "420px",
    marginBottom: "48px",
  },

  svgUsa: { position: "absolute", right: 16, bottom: 54 } as CSSProperties,
  svgCanada: { position: "absolute", right: 0, bottom: 54 } as CSSProperties,
};
