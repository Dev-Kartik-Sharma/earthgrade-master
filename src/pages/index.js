import React from "react";
import "../styles/style.global.css";
import { ThemeProvider } from "@mui/material";
import theme from "../themes/theme";
import NavBar from "../components/NavBar";
import HeroSection from "../components/HeroSection";
import NotifyMeSection from "../components/NotifyMeSection";
import ProductCardsDisplaySection from "../components/ProductCardsDisplaySection";
const index = () => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <NavBar />
        <HeroSection />
        <NotifyMeSection />
        <ProductCardsDisplaySection />
      </ThemeProvider>
    </>
  );
};

export default index;
