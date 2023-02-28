import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  CardMedia,
  Container,
  Link,
  Typography,
} from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import React from "react";

function Card1() {
  return (
    <Container sx={{ marginBottom: 2 }}>
      <Card sx={{ maxWidth: "250px" }}>
        <CardHeader title="Project one" subheader="September 14, 2021" />
        <CardMedia
          component="img"
          height="194"
          image="https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
          alt="Paella dish"
        />
        <CardContent>
          <Typography variant="body1" color="text.secondary">
            Hi from projects! Lorem ipsum dolor sit amet, consectetuer
            adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum
            sociis natoque penatibus et magnis dis parturient montes, nascetur
            ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu,
            pretium quis, sem. Nulla consequat massa quis enim. Donec pede
            justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim
            justo, rhoncus ut,
          </Typography>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: "20px",
              marginTop: "10px",
            }}
          >
            <Link
              href="https://github.com/heine5150"
              underline="none"
              target="_blank"
              rel="noopener"
            >
              <GitHubIcon sx={{ fontSize: "34px" }} />
            </Link>
            <Button variant="contained">See More!</Button>
          </Box>
        </CardContent>
      </Card>
    </Container>
  );
}

export default Card1;
