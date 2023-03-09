import { Box, Button, Paper, Typography } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import React from "react";

export default function Card1Info({ handleClose }) {
  const technologies = ["React", "MUI", "Javascript", "HTML", "CSS"];
  return (
    <Paper elevation={4} sx={{ maxWidth: 600, backgroundColor: "#ddeeff" }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: 2,
          paddingBottom: 0,
        }}
      >
        <Typography variant="subtitle1">SoMe Project</Typography>
        <Button onClick={handleClose}>
          <CloseIcon />
        </Button>
      </Box>
      <Box padding={2} paddingTop={0}>
        <Typography variant="body1">
          This project aims to create a modern front-end social media
          application for an existing social media company. This project targets
          a new niche audience of twin families. The project is based on the API
          documentation provided by Noroff and includes various features such as
          user registration, login, profile management, post creation, comment
          creation, and more.
        </Typography>
        <br />
        <Typography variant="h6">Technologies:</Typography>
        <Typography variant="body1">{technologies.join(", ")}</Typography>
      </Box>
    </Paper>
  );
}
