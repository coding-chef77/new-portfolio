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

import Card2Info from "./Card2Info";
import React, { useState } from "react";
import Image from "../images/heine-gpt.png";

export default function Card2() {
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
          image={Image}
          alt="Screenshot of project landingpage"
        />
        <CardHeader
          title="Tekstanalytiker"
          subheader="April, 2023"
          subheaderTypographyProps={{ color: "#ddeeff" }}
        />

        <CardContent>
          <Typography variant="body1">
            Det er en modell som er trent på et datasett med filmanmeldelser og
            brukes til å klassifisere tekst som enten positiv eller negativ.
            Modellen bruker en variant av BERT-arkitekturen kalt DistilBERT, som
            er designet for å være mer ressurseffektiv og mindre i størrelse enn
            den originale BERT-modellen. Denne modellen kan være nyttig for
            oppgaver som involverer å identifisere eller filtrere ut tekst som
            er positiv eller negativ i tone. Modellen er fra HuggingFace.
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
              <Link href="./Card1Info.js">
                <Button variant="contained" onClick={handleSeeMoreClick}>
                  Test den!
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
          <Card2Info handleClose={handleCloseClick} />
        </Box>
      )}
    </Container>
  );
}
