import { Container, Grid } from "@mui/material";
import React from "react";
import ResponsiveAppBar from "../components/ResponsiveAppBar";
import { Herosection } from "../components/Herosection";
import { HowItWorks } from "../components/HowItWorks";
import ScorllToTopButton from "../components/atoms/ScrollToTopButton";
import ChatApp from "./ChatApp";
import { SignLanguage } from "@mui/icons-material";
import SignInSide from "../components/SingInSide";
import { About } from "../components/About";
import TestimonialsSection from "../components/TestimonialsSection";
import Newsletter from "../components/atoms/Newsletter";
import Footer from "../components/Footer";

export const Home = () => {
  return (
    <>
      <Container
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          height: "100vh",
        }}
      >
        <Herosection />
        <HowItWorks />
        <About />
        <TestimonialsSection />
        <Footer />
        <ScorllToTopButton />
      </Container>
    </>
  );
};
