import {
  Avatar,
  Card,
  CardContent,
  CardHeader,
  Container,
  Typography,
} from "@mui/material";
import React from "react";

function AboutMe() {
  return (
    <Container
      sx={{
        display: "flex",
        justifyContent: "center",
        marginBottom: 6,
        marginTop: 6,
      }}
    >
      <Card style={{ display: "inline-block" }}>
        <div
          style={{
            paddingTop: "16px",
            paddingLeft: "16px",
          }}
        >
          <Avatar sx={{ bgcolor: "#fe3546" }}>HG</Avatar>
        </div>
        <CardHeader title="Get to know me!" />
        <CardContent sx={{ maxWidth: "450px" }}>
          <Typography variant="body1">
            Originally qualified as a chef I took the decision to change career
            paths to Front End. Although it might seem like a big jump, I see
            similar core traits including creativity, curiousity to continually
            develop and learn new methods, good team work, attention to detail
            and customer focus.
          </Typography>
          <Typography variant="body1">
            I believe my past 20 years experience help me to work well with
            different teams and clients across a broad variety of projects. I`ve
            always maintained a strong customer focus whether I worked offshore
            (under some extreme circumstances!), internationally, and in the
            public sector.
          </Typography>
          <Typography variant="body1">
            I`ve already learned a lot of new core skills and very much look
            forward to starting to use these in a professional setting and to
            continuing to learn a lot more from new colleagues.
          </Typography>
        </CardContent>
      </Card>
    </Container>
  );
}

export default AboutMe;
