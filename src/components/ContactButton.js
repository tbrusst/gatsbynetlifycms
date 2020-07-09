import React from "react";
import { Link } from "gatsby";
import arrow from "../img/arrow.svg";

import styled from "styled-components";
import { theme } from "../styles/GlobalStyle";

const ContactButton = class extends React.Component {
  render() {
    return (
      <a id="button-link" href="mailto:russobrendanm@gmail.com">
        <div id="contact-button" className={this.props.id}>
          <p data-content="Contact Me">Contact Me</p>
          <img src={arrow} alt="Arrow to link to another page" />
        </div>
      </a>
    );
  }
};

export default ContactButton;
