import React from "react";
import { Link } from "gatsby";
import ContactButton from "../components/ContactButton";

import styled from "styled-components";
import { theme } from "../styles/GlobalStyle";

const Footer = class extends React.Component {
  render() {
    return (
      <div id="footer-wrap">
        <p>Brendan Russo - 2020</p>
        <ContactButton />
      </div>
    );
  }
};

export default Footer;
