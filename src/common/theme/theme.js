import { createTheme } from "@mui/material";

export const theme = createTheme({
  palette: {
    primary: { main: "#f27735", dark: "#A6522d", contrastText: "#fff" },
    // background: { main: "hsl(19, 57%, 98%)", dark: "#5E4E46" },
  },
  typography: {
    fontFamily: "'M PLUS 1 Code', 'Open Sans', sans-serif",
    h1: { fontWeight: 600 },
    h2: { fontWeight: 600 },
    h3: { fontWeight: 600 },
    h4: { fontWeight: 600 },
    h5: { fontWeight: 600 },
    h6: { fontWeight: 600 },
    subtitle1: { fontWeight: 500 },
    subtitle2: { fontWeight: 500 },
    body1: {
      fontFamily: "'Sofia Sans Semi Condensed', 'Open Sans', sans-serif",
      fontWeight: 400,
    },
    body2: {
      fontFamily: "'Sofia Sans Semi Condensed', 'Open Sans', sans-serif",
      fontWeight: 400,
    },
    button: {
      fontFamily: "'Sofia Sans Semi Condensed', 'Open Sans', sans-serif",
    },
  },

  // components: {},
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
