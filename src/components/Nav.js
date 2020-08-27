import React from "react";
import { Link } from "gatsby";

import styled from "styled-components";
import { theme } from "../styles/GlobalStyle";

const Nav = class extends React.Component {
  render() {
    return (
      <div id="nav-wrap">
        <a href="/#about-wrap">
          <p data-content="About">About</p>
        </a>
        <a href="/#blog-roll">
          <p data-content="Projects">Projects</p>
        </a>
      </div>
    );
  }
};

export default Nav;
