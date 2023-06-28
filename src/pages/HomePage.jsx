import React from "react";
import AboutMe from "../components/cards/AboutMe";
import Card1 from "../components/cards/card1/Card1";
import Card2 from "../components/cards/card2/Card2";
import Card3 from "../components/cards/card3/Card3";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import { Grid } from "@mui/material";

export default function HomePage() {
  return (
    <>
      <AboutMe />
      <Grid container>
        <Grid item xs={12} md={6} lg={4}>
          <Card1 />
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
          <Card2 />
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
          <Card3 />
        </Grid>
      </Grid>
      <Contact />
      <Footer />
    </>
  );
}
