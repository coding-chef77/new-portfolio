import { Box, Typography } from "@mui/material";
import React from "react";

function Footer() {
  return (
    <Box
      sx={{
        backgroundColor: "inherit",
        position: "relative",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "14px 0 10px 0",
        textAlign: "center",
      }}
    >
      <Typography variant="subtitle2" sx={{ color: "primary.main" }}>
        Coded by Heine Günther {new Date().getFullYear()}
      </Typography>
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "4px",
          backgroundColor: "rgba(0, 0, 0, 0.1)",
          boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
          zIndex: -1,
        }}
      />
    </Box>
  );
}

export default Footer;
