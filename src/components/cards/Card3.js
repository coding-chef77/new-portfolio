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
import Image from "./images/react.png";

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
      <Card sx={{ minWidth: "250px", backgroundColor: "#ddeeff" }}>
        <CardHeader title="JS/React Project" subheader="January 8, 2023" />
        <CardMedia
          component="img"
          height="auto"
          image={Image}
          alt="screenshot website"
        />
        <CardContent>
          <Typography variant="body1" color="text.secondary">
            This is a React framework project that incorporates Bootstrap to
            deliver a functional yet simple interface. The main goal of this
            project is to establish seamless routing for easy navigation, and to
            ensure proper form validation and login form functionality. For a
            more in-depth understanding, you can take a look at the details via
            the Github link provided. Alternatively, click on the button below
            for a brief overview.
          </Typography>
          <CardActions>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: "20px",
                marginTop: "10px",
              }}
            >
              <Link
                href="https://github.com/Noroff-FEU-Assignments/js-frameworks-course-assignment-heine5150.git"
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
            </Box>
          </CardActions>
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
