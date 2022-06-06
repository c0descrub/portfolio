import React from "react";
import { Button } from "@mui/material";
const Hero = () => {
  return (
    <>
      <section className="hero-container" id="home">
        <div className="hero-content-container content-container">
          <h1 className="hero-main-title title">Jordan Smith, UK </h1>
          <h2 className="hero-sub-title sub-title">
            Dad, husband, and aspiring front-end developer.
          </h2>

          <a className="button-link" href="#projects">
            <Button variant="contained" className="button hero-button">
              See my projects
            </Button>
          </a>
        </div>
      </section>
    </>
  );
};

export default Hero;
