import React from "react";
import Box from "../src/components/Box";
import Menu from "../src/components/commons/Menu";
import SEO from "../src/components/commons/SEO";
import Header from "../src/components/commons/Header";
import { Carousel } from "../src/components/commons/Carousel";
import SessionDesc from "../src/components/commons/session/Desc";

export default function Home() {
  return (
    <Box>
      <SEO headTitle="Home" />
      <Menu />
      <Header />
      <Carousel />
      <SessionDesc />
    </Box>
  );
}
