import "./styles.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from "react";
import Header from "./Header";
import Hero from "./Hero";
import BackToTopButton from "./BackToTopButton";
import Skills from "./Skills";
import Projects from "./Projects";
import Certificates from "./Certificates";
import Blog from "./Blog";
import Contact from "./Contact";
import Footer from "./Footer";

export default function App() {
  return (
    <>
      <Header />
      <Hero />
      <BackToTopButton />
      <Skills />
      <Projects />
      <Certificates />
      <Blog />
      <Contact />
      <Footer />
    </>
  );
}
