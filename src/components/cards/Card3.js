import {
  Card,
  CardContent,
  CardHeader,
  Container,
  Typography,
} from "@mui/material";
import React from "react";

function Card3() {
  return (
    <Container sx={{ marginBottom: 2 }}>
      <Card>
        <CardContent>
          <CardHeader></CardHeader>
          <Typography variant="body1">Hi from card three!</Typography>
        </CardContent>
      </Card>
    </Container>
  );
}

export default Card3;
