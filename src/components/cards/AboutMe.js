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

function AboutMe() {
  const skillsets = ["React", "Javascript", "HTML", "CSS", "Rest API"];
  const projectManagementTools = ["Trello", "Gantt", "Kanban"];

  return (
    <Container
      sx={{
        display: "flex",
        justifyContent: "center",
        marginBottom: 6,
        marginTop: 6,
      }}
    >
      <Card elevation={10} style={{ display: "inline-block" }}>
        <div
          style={{
            paddingTop: "16px",
            paddingLeft: "16px",
          }}
        >
          <Avatar
            src={heine}
            sx={{ width: 60, height: 60, backgroundColor: "primary.main" }}
          />
        </div>
        <CardHeader title="A bit about me - the coding chef!" />
        <CardContent sx={{ maxWidth: "450px" }}>
          <Typography variant="body1">
            After a varied international career in food & logistics, I decided
            to change career paths and am about to graduate as a Front End
            Developer. Although it might seem like a big jump, I see similar
            traits including creativity, curiosity to continually learn and try
            new methods, good team work, precision, time management and keeping
            customers happy. Through building the different elements together, I
            now create sites, instead of dishes!
          </Typography>
          <br />
          <Typography variant="body1">
            I'm looking to join a team where I can contribute my skills and
            continue to learn more from others as we go.
          </Typography>
          <br />
          <Typography variant="body1">
            Check out some of my projects and reach out in the Contact Form
            below, it would be great to hear from you!
          </Typography>
          <br />
          <Typography variant="h6">Skillsets:</Typography>
          <Typography variant="body1">{skillsets.join(", ")}</Typography>
          <br />
          <Typography variant="h6">Project Management Tools:</Typography>
          <Typography variant="body1">
            {projectManagementTools.join(", ")}
          </Typography>
        </CardContent>
      </Card>
    </Container>
  );
}

export default AboutMe;
