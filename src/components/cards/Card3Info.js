import { Box, Button, Paper, Typography } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import React from "react";

function Card3Info({ handleClose }) {
  const technologies = ["React", "MUI", "Javascript", "HTML", "CSS"];
  return (
    <Paper sx={{ maxWidth: 400, backgroundColor: "#ddeeff" }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: 2,
          paddingBottom: 0,
        }}
      >
        <Typography variant="subtitle1">JS/React Project</Typography>
        <Button onClick={handleClose}>
          <CloseIcon />
        </Button>
      </Box>
      <Box padding={2} paddingTop={0}>
        <Typography variant="body1">
          This project is a React application that includes various paths such
          as home, detail, contact, login, and admin. The login functionality is
          implemented using a WordPress installation with the JWT plugin
          installed, and REST API is used for API calls.
        </Typography>
        <br />
        <Typography variant="h6">Technologies:</Typography>
        <Typography variant="body1">{technologies.join(", ")}</Typography>
      </Box>
    </Paper>
  );
}

export default Card3Info;
