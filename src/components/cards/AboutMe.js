import {
  Avatar,
  Card,
  CardContent,
  CardHeader,
  Container,
  Typography,
} from "@mui/material";
import React from "react";
import heine from "./images/heine-portrait.png";

export default function AboutMe() {
  const skillsets = [
    "React",
    "MUI",
    "Javascript",
    "HTML",
    "CSS",
    "Bootstrap",
    "Wordpress",
  ];
  const projectManagementTools = ["Trello", "Gantt"];

  return (
    <Container
      sx={{
        display: "flex",
        justifyContent: "center",
        marginBottom: 6,
        marginTop: 6,
      }}
    >
      <Card
        elevation={24}
        style={{
          display: "inline-block",
          backgroundColor: "#363636",
          border: "2px solid #f27735",
        }}
      >
        <div
          style={{
            paddingTop: "16px",
          }}
        >
          <CardHeader
            avatar={
              <Avatar
                src={heine}
                sx={{
                  width: 80,
                  height: 80,
                  backgroundColor: "primary.main",
                }}
              />
            }
            title={
              <Typography variant="h5" component="h3">
                Litt om meg - the coding chef!
              </Typography>
            }
          />
        </div>
        <CardContent sx={{ maxWidth: "450px" }}>
          <Typography variant="body1">
            Hei, jeg heter Heine Günther. Etter en variert karriere innen mat og
            logistikk, bestemte jeg meg for å bytte karrierevei og har nylig
            fullført utdannelsen min som Front End Developer. Selv om det kan
            virke som et stort hopp, ser jeg likhetstrekk som kreativitet,
            nysgjerrighet for å kontinuerlig lære og prøve nye metoder, godt
            samarbeid, presisjon, tidsstyring og å holde kundene fornøyde.
            Gjennom å bygge de ulike elementene sammen, skaper jeg nå nettsider,
            i stedet for matretter!
          </Typography>
          <br />
          <Typography variant="body1">
            Jeg ser etter å bli med i et team der jeg kan bidra med mine
            ferdigheter og fortsette å lære mer fra andre
          </Typography>
          <br />
          <Typography variant="body1">
            Sjekk ut noen av prosjektene mine og ta kontakt i kontaktskjemaet
            nedenfor. Jeg ser fra til å høre fra deg!.
          </Typography>
          <br />
          <Typography variant="h6">Ferdigheter:</Typography>
          <Typography variant="body1">{skillsets.join(", ")}</Typography>
          <br />
          <Typography variant="h6">Verktøy for prosjektstyring:</Typography>
          <Typography variant="body1">
            {projectManagementTools.join(", ")}
          </Typography>
        </CardContent>
      </Card>
    </Container>
  );
}
