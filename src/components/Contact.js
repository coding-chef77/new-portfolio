import { Container, Button, TextField, Box, Grid } from "@mui/material";
import React from "react";

function Contact() {
  return (
    <Container component="main" maxWidth="xs">
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 1,
        }}
      >
        <Grid item xs={12} sm={6}>
          <TextField required label="Name" />
        </Grid>
        <Grid item xs={12}>
          <TextField required label="Email" />
        </Grid>
        <Grid item xs={12}>
          <TextField required label="Subject" />
        </Grid>
        <Grid item xs={12}>
          <TextField required label="Message" />
        </Grid>
        <Button type="submit" variant="contained" sx={{ mt: 3, mb: 2 }}>
          Contact Me!
        </Button>
      </Box>
    </Container>
  );
}

export default Contact;
