import React from "react";
import { Link } from "gatsby";
import ContactButton from "../components/ContactButton";

import styled from "styled-components";
import { theme } from "../styles/GlobalStyle";

const Footer = class extends React.Component {
  render() {
    return (
      <div id="footer">
        <div id="footer-wrap">
        <p>Brendan Russo - 2023</p>
        
        <a href="mailto:@russobrendanm@gmail.com">
                <div className="contact-button">
                  <p className="caps">Let's Talk</p>
                </div>
        </a>
          
        </div>

      </div>
    );
  }
};

export default Footer;
