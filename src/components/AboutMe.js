import React from "react";
import { Link } from "gatsby";
import ContactButton from "../components/ContactButton";
import headshot from "../img/headshot-variant.png";

import styled from "styled-components";
import { theme } from "../styles/GlobalStyle";

const Footer = class extends React.Component {
  render() {
    return (
      <div id="about-wrap">
        <h2>About Me</h2>
        <div id="about-container">
          <img id="about-headshot" src={headshot} alt="" />
          <div id="about-info">
            <p className="about-p">
              I am currently working part-time as a UX Designer at a software
              startup called Setvi . I studied Interactive Digital Media at
              Drexel University and am currently seeking full time opportunities
              in and around Philadelphia.
            </p>
            <p className="about-p">
              My training and experience in digital media have allowed me to
              become well accomplished in UX/UI, motion design, and frontend
              development. As a Creative Technologist I am able to design
              beautifully functional products and then bring them to life in
              code.
            </p>
            <p className="about-p">
              Please contact me with any questions you may have or with any
              information regarding opportunities in related fields.
            </p>
            <ContactButton />
          </div>
        </div>
      </div>
    );
  }
};

export default Footer;
