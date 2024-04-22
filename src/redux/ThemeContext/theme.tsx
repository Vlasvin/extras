import { Theme, createTheme } from "@mui/material";

export const AppLightTheme: Theme = createTheme({
  palette: {
    background: {
      default: "rgb(253, 255, 255))",
      paper: "rgb(255,255,255)",
    },
  },
  components: {
    MuiToolbar: {
      styleOverrides: {
        root: {
          backgroundColor: "rgb(253, 255, 255))",
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
      paper: "rgb(41,44,49)",
    },
    text: {
      primary: "rgb(226, 226, 226);",
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
    MuiTypography: {
      styleOverrides: {
        root: {
          color: "rgb(226, 226, 226)",
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          color: "rgb(226, 226, 226)",
        },
      },
    },
  },
});
