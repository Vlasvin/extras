import { Theme, createTheme } from "@mui/material";

export const AppLightTheme: Theme = createTheme({
  palette: {
    mode: "light",
    background: {
      default: "#eaeaea",
      paper: "#eaeaea",
    },
  },
  components: {
    MuiToolbar: {
      styleOverrides: {
        root: {
          backgroundColor: "rgb(32, 19, 226)",
        },
      },
    },

    MuiTypography: {
      styleOverrides: {
        root: {
          fontFamily: "GothamPro, sans-serif",
          fontSize: "clamp(16px,4.375vw,20px)",
          fontWeightRegular: 400,
          letterSpacing: "0.1em",
          "@media (max-width:600px)": {
            letterSpacing: "0.01em",
          },
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          fontFamily: "GothamPro, sans-serif",
          fontSize: "clamp(14px,3.75vw,20px)",
          fontWeightRegular: 400,
          letterSpacing: "0.1em",
          color: "#eaeaea",
          "@media (max-width:600px)": {
            letterSpacing: "0.01em",
          },
        },
      },
    },
  },
});

export const AppDarkTheme: Theme = createTheme({
  palette: {
    mode: "dark",
    background: {
      default: "rgb(14, 14, 14)",
      paper: "rgb(11, 15, 21)",
    },

    text: {
      primary: "rgb(226, 226, 226)",
    },
  },
  components: {
    MuiToolbar: {
      styleOverrides: {
        root: {
          backgroundColor: "rgb(14, 14, 14)",
        },
      },
    },

    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundColor: "rgb(16, 16, 16)",
        },
      },
    },
    MuiTypography: {
      styleOverrides: {
        root: {
          color: "rgb(226, 226, 226)",
          fontFamily: "GothamPro, sans-serif",
          fontSize: "clamp(16px,4.375vw,20px)",
          fontWeightRegular: 400,
          letterSpacing: "0.1em",
          "@media (max-width:600px)": {
            letterSpacing: "0.01em",
          },
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          color: "rgb(244, 229, 220)",
          fontFamily: "GothamPro, sans-serif",
          fontSize: "clamp(14px,3.75vw,20px)",
          fontWeightRegular: 400,
          letterSpacing: "0.1em",
          "@media (max-width:600px)": {
            letterSpacing: "0.01em",
          },
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          '& input[type="date"]::-webkit-calendar-picker-indicator': {
            filter: "invert(1)",
          },
        },
      },
    },
  },
});
