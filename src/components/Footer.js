import React from "react";
import { Link } from "gatsby";
import ContactButton from "../components/ContactButton";

import styled from "styled-components";
import { theme } from "../styles/GlobalStyle";

import {Row, Col, Container, Form, Button} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';

const Footer = class extends React.Component {
  render() {
    return (
      <div id="footer">
        <div id="footer-wrap">
          <Row id="footer-top-row">
            <Col>
              <h2>Let's get in touch.</h2>
            </Col>
           
            
          </Row>
          <Row id="footer-contact-row">
            <Col xs={12} sm={3}>
              <a href="mailto:russobrendanm@gmail.com">
                <p class="caps">Email Me</p>
              </a>
            </Col>
            <Col xs={12} sm={3}>
              <a target="_blank" href="https://www.linkedin.com/in/brendanrus/">
                <p class="caps">LinkedIn</p>
              </a>
            </Col>
            <Col id="footer-brendan" xs={12} sm={{span: 6}}>
              
                <p>Brendan Russo - 2023</p>
              
            </Col>


          </Row>
          
          
        </div>

      </div>
    );
  }
};

export default Footer;
