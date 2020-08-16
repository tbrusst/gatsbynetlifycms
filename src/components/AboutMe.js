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
              I am a designer and developer based in Philadelphia. I specialize
              in web, user experience, and motion design as well as frontend
              development. I am currently working part-time as a UX Designer at
              a startup called Setvi.
            </p>
            <p className="about-p">
              My training and experience in digital media have allowed me to
              become well accomplished in both design and frontend development.
              I am capable of designing beautifully functional products and then
              bringing them to life in code.
            </p>
            <p className="about-p">
              I am currently open to freelance projects as well as full-time
              opportunities. Please contact me with any questions you may have
              or with any information regarding opportunities in related fields.
            </p>
            <ContactButton />
          </div>
        </div>
      </div>
    );
  }
};

export default Footer;
