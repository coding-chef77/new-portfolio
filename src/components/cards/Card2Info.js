import { Box, Button, Paper, Typography } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import React from "react";

function Card2Info({ handleClose }) {
  const technologies = ["HTML", "CSS", "Javascript", "Bootstrap", "SASS"];
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
        <Typography variant="subtitle1">E-Commerce Project</Typography>
        <Button onClick={handleClose}>
          <CloseIcon />
        </Button>
      </Box>
      <Box padding={2} paddingTop={0}>
        <Typography variant="body1">
          This e-commerce site provides users with an easy-to-use interface to
          browse and purchase products online. The site features a responsive
          design that adapts to different screen sizes and devices.
        </Typography>
        <br />
        <Typography variant="h6">Technologies:</Typography>
        <Typography variant="body1">{technologies.join(", ")}</Typography>
      </Box>
    </Paper>
  );
}

export default Card2Info;
