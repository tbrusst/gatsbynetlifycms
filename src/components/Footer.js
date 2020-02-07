import React from "react";
import { Link } from "gatsby";

import styled from "styled-components";
import { theme } from "../styles/GlobalStyle";

const Footer = class extends React.Component {
  render() {
    return (
      <div id="footer-wrap">
        <div>
          <h4>Any Questions?</h4>
          <a href="mailto:russobrendanm@gmail.com">
            <div id="footer-button">Contact Me</div>
          </a>
        </div>

        <h4>Brendan Russo - 2020</h4>
      </div>
    );
  }
};

export default Footer;
