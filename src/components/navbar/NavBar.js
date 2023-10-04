import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
import Logo from "./logo/logo.png";

function ResponsiveAppBar() {
  return (
    <AppBar
      position="static"
      sx={{
        backgroundColor: "inherit",
        boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.2)",
      }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <img
            src={Logo}
            alt="logo"
            style={{ height: "35px", margin: "auto" }}
          />
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;
