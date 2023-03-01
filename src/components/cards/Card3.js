import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Container,
  Link,
  Typography,
} from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import Card3Info from "./Card3Info";
import React, { useState } from "react";

export default function Card3() {
  const [showCard1Info, setShowCard1Info] = useState(false);

  const handleSeeMoreClick = (e) => {
    e.preventDefault();
    setShowCard1Info(true);
  };

  const handleCloseClick = () => {
    setShowCard1Info(false);
  };

  return (
    <Container sx={{ marginBottom: 2, position: "relative" }}>
      <Card sx={{ minWidth: "250px" }}>
        <CardHeader title="Project three" subheader="Aufust 14, 2022" />
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
            <CardActions>
              <Link
                href="https://github.com/heine5150"
                underline="none"
                target="_blank"
                rel="noopener"
              >
                <GitHubIcon sx={{ fontSize: "34px" }} />
              </Link>
              <Link href="./Card1Info.js">
                <Button variant="contained" onClick={handleSeeMoreClick}>
                  See More!
                </Button>
              </Link>
            </CardActions>
          </Box>
        </CardContent>
      </Card>
      {showCard1Info && (
        <Box
          sx={{
            position: "absolute",
            zIndex: 1,
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
          }}
        >
          <Card3Info handleClose={handleCloseClick} />
        </Box>
      )}
    </Container>
  );
}
