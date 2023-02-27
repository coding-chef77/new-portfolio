import React from "react";
import AboutMe from "../components/cards/AboutMe";
import Card1 from "../components/cards/Card1";
import Card2 from "../components/cards/Card2";
import Card3 from "../components/cards/Card3";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

function HomePage() {
  return (
    <>
      <AboutMe />
      <Card1 />
      <Card2 />
      <Card3 />
      <Contact />
      <Footer />
    </>
  );
}

export default HomePage;
