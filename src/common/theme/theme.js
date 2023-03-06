import { createTheme } from "@mui/material";

export const theme = createTheme({
  palette: {
    primary: { main: "#f27735", dark: "#A6522d", contrastText: "#fff" },
    // background: { main: "hsl(19, 57%, 98%)", dark: "#5E4E46" },
  },
  typography: {
    fontFamily:
      "'Fira Code', monospace, 'Sofia Sans Semi Condensed', sans-serif",
    h1: {
      fontFamily: "'Fira Code', monospace",
      fontWeight: 600,
      letterSpacing: "-0.02em",
      lineHeight: 1.2,
    },
    h2: {
      fontFamily: "'Fira Code', monospace",
      fontWeight: 600,
      letterSpacing: "-0.01em",
      lineHeight: 1.2,
    },
    h3: {
      fontFamily: "'Fira Code', monospace",
      fontWeight: 600,
      lineHeight: 1.2,
    },
    h4: {
      fontFamily: "'Fira Code', monospace",
      fontWeight: 600,
      lineHeight: 1.2,
    },
    h5: {
      fontFamily: "'Fira Code', monospace",
      fontWeight: 600,
      letterSpacing: "-0.08em",
      lineHeight: 1.2,
    },
    h6: {
      fontFamily: "'Fira Code', monospace",
      fontWeight: 600,
      lineHeight: 1.2,
    },
    subtitle1: {
      fontFamily: "'Fira Code', monospace",
      fontWeight: 500,
      lineHeight: 1.2,
    },
    subtitle2: {
      fontFamily: "'Fira Code', monospace",
      fontWeight: 500,
      lineHeight: 1.2,
    },
    body1: {
      fontFamily: "'Sofia Sans Semi Condensed', sans-serif",
      fontWeight: 400,
      lineHeight: 1.5,
    },
    body2: {
      fontFamily: "'Sofia Sans Semi Condensed', sans-serif",
      fontWeight: 400,
      lineHeight: 1.5,
    },
  },

  components: {},
  breakpoints: {
    values: {
      xs: 0,
      sm: 500,
      md: 580,
      lg: 1200,
      xl: 1536,
    },
  },
});
