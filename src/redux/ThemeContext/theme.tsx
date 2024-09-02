import { Theme, createTheme } from "@mui/material";

export const AppLightTheme: Theme = createTheme({
  palette: {
    mode: "light",
    background: {
      default: "rgb(244, 229, 220)",
      paper: "rgb(244, 229, 220)",
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
          fontFamily: "Montserrat, sans-serif",
          fontSize: "clamp(18px,4.375vw,20px)",
          fontWeightRegular: 400,
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          fontFamily: "Montserrat, sans-serif",
          fontSize: "clamp(14px,3.75vw,20px)",
          fontWeightRegular: 400,
          color: "rgb(244, 229, 220)",
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
          fontFamily: "Montserrat, sans-serif",
          fontSize: "clamp(18px,4.375vw,20px)",
          fontWeightRegular: 400,
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          color: "rgb(244, 229, 220)",
          fontFamily: "Montserrat, sans-serif",
          fontSize: "clamp(14px,3.75vw,20px)",
          fontWeightRegular: 400,
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
