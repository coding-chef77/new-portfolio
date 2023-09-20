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
import image from "../images/twinChat.png";

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
      <Card
        sx={{
          minWidth: "250px",
          backgroundColor: "#363636",
          border: "2px solid #f27735",
        }}
      >
        <CardMedia
          component="img"
          height="auto"
          image={image}
          alt="Twin Chat homepage screenshot"
        />
        <CardHeader
          title="SoMe Project"
          subheader={
            <a
              href="https://exam-2-twin-chat.vercel.app/"
              target="_blank"
              rel="noreferrer"
              style={{
                textDecoration: "none",
                color: "#ddeeff",
              }}
            >
              https://twin-chat.netlify.app/
            </a>
          }
        />

        <CardContent>
          <Typography variant="body1">
            This project was my final exam where the goal was to create a social
            media platform. Having twins myself I thought it would be a good
            idea to create a solution that would target twin parents. This is my
            first project using Material UI and really enjoyed the flexibility
            of it. Please click on either the github link for full details or
            the button below for a brief overview.
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
                href="https://github.com/Noroff-FEU-Assignments/project-exam-2-heine5150.git"
                underline="none"
                target="_blank"
                rel="noopener"
              >
                <GitHubIcon
                  sx={{
                    fontSize: "34px",
                  }}
                />
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
          <Card1Info handleClose={handleCloseClick} />
        </Box>
      )}
    </Container>
  );
}
