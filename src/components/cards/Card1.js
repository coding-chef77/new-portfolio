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
import Card1Info from "./Card1Info";
import React, { useState } from "react";
import image from "./images/twinChat.png";

export default function Card1() {
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
        <CardHeader
          title="SoMe Project"
          subheader={
            <a
              href="https://twin-chat.netlify.app/"
              target="_blank"
              rel="noreferrer"
              style={{ textDecoration: "none" }}
            >
              https://twin-chat.netlify.app/
            </a>
          }
        />

        <CardMedia
          component="img"
          height="auto"
          image={image}
          alt="Twin Chat homepage screenshot"
        />
        <CardContent>
          <Typography variant="body1" color="text.secondary">
            This project represents my final exam, in which my objective was to
            design a social media platform catering specifically to parents of
            twins. As a parent of twins myself, I was inspired to create a
            solution that would address the unique challenges faced by this
            group. Please click on the button below for additional information.
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
                href="https://github.com/Noroff-FEU-Assignments/project-exam-2-heine5150.git"
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
          <Card1Info handleClose={handleCloseClick} />
        </Box>
      )}
    </Container>
  );
}
