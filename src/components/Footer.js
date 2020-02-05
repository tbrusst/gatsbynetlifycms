import React from "react";
import { Link } from "gatsby";

import logo from "../img/logo.svg";
import facebook from "../img/social/facebook.svg";
import instagram from "../img/social/instagram.svg";
import twitter from "../img/social/twitter.svg";
import vimeo from "../img/social/vimeo.svg";
import styled from "styled-components";
import { theme } from "../styles/GlobalStyle";

const MainButton = styled.button`
  font-family: signo, sans-serif;
  background: ${theme.primary};

  border-radius: 50px;
  border: none;
  padding: 10px 40px;
  max-width: 100%;
  margin-top: 15px;
  @media (min-width: 500px) {
  }

  @media (min-width: 768px) {
    padding: 10px 40px;
    margin-top: 0;
  }
  @media (min-width: 950px) {
    padding: 12px 30px;
  }
  @media (min-width: 1100px) {
  }
  @media (min-width: 1280px) {
  }
  @media (min-width: 1440px) {
    padding: 15px 50px;
  }

  @media (min-width: 1800px) {
  }
`;

const FooterWrap = styled.div`
  width: 100%;
  height: 10rem;
  background: #d8d8d8;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;

  padding: 0 1rem;

  @media (min-width: 500px) {
    padding: 0 2rem;
  }
  @media (min-width: 768px) {
    padding: 0 4rem;
    flex-direction: row-reverse;
    justify-content: space-between;
    align-items: center;
  }
  @media (min-width: 1100px) {
    padding: 0 12rem;
  }
  @media (min-width: 1280px) {
    padding: 0 10rem;
  }
  @media (min-width: 1800px) {
    padding: 0 20rem;
  }

  div {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-end;
    @media (min-width: 768px) {
      width: 50%;
      flex-direction: row;
      align-items: center;
      justify-content: flex-end;
    }

    h4 {
      text-align: center;
      @media (min-width: 768px) {
        text-align: left;
        margin-right: 2rem;
      }
    }
  }
  h4 {
    color: #2e2e2e !important;
  }
`;

const Footer = class extends React.Component {
  render() {
    return (
      <FooterWrap>
        <div>
          <h4>Any Questions?</h4>
          <a href="mailto:russobrendanm@gmail.com">
            <MainButton>Contact Me</MainButton>
          </a>
        </div>

        <h4>Brendan Russo - 2020</h4>
      </FooterWrap>
    );
  }
};

export default Footer;
