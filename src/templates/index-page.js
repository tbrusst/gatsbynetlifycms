import React from "react";
import PropTypes from "prop-types";
import { Link, graphql } from "gatsby";

import Layout from "../components/Layout";
import BlogRoll from "../components/BlogRoll";
import ContactButton from "../components/ContactButton";
import AboutMe from "../components/AboutMe";
import Nav from "../components/Nav";

import headshot from "../img/brendan-headshot.png";
import "../styles/index.scss";
import "../styles/typography.scss";

import {Row, Col, Container, Form, Button} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';

export const IndexPageTemplate = ({
  image,
  title,
  heading,
  subheading,
  mainpitch,
  description,
  intro,
}) => (
  <>

    <Container id="index-header">
      <div id="gradient-header">
        <div id="gradient-up">
        <div id="gradient-circle"></div>

        </div>
        

      </div>

      <Row>
        <Col>
            <div id="nav-wrap">
              <a href="/#index-about">
                <p class="caps" data-content="About">About</p>
              </a>
              <a href="/#blog-roll">
                <p class="caps" data-content="Projects">Work</p>
              </a>
              <a href="mailto:@russobrendanm@gmail.com">
                <div className="contact-button">
                  <p className="caps">Let's Talk</p>
                </div>
              </a>

            </div>
        </Col>

        {/* <Col xs="auto" >
          <a href="/#index-about">
              <p class="caps" data-content="About">About</p>
            </a>
        </Col>
        <Col xs="auto">
        <a href="/#blog-roll">
                <p class="caps" data-content="Projects">Work</p>
              </a>
        </Col>
        <Col xs="auto">
        <a href="mailto:@russobrendanm@gmail.com">
                <div className="contact-button">
                  <p className="caps">Let's Talk</p>
                </div>
              </a>
        </Col> */}
      </Row>

      <div>
        <Row id="index-header_main-row">
          <Col xs={12} md={6} xl={7}>
            <h1 id="brendan" class="caps">Brendan</h1>
            <h1 id="russo" class="caps">Russo</h1>
          </Col>
          {/* <Col id="index-header_main-desc" xs={12} md={6} xl={5}>
            <p>I’m a designer based in Philadelphia with experience in UX/UI, visual design, and front-end development. Currently working as a Digital Designer at Defy. </p>


          </Col> */}
        </Row>
        <Row id="index-header_secondary-row">
          <Col id="index-header_secondary-row_1">
            <p>2022</p>
          </Col>
          <Col id="index-header_secondary-row_2">
            <div id="index-header_scroll-to-discover">
              <p class="caps">Keep Scrolling Please</p>
            </div>
            
          </Col>
          <Col id="index-header_secondary-row_3">
                <a target="_blank" href="https://www.instagram.com/brendanrusso.design/">
                  <div className="contact-link">
                    <p class="caps">Instagram</p>
                  </div>
                </a>
                <a target="_blank" href="https://www.linkedin.com/in/brendanrus/">
                  <div className="contact-link">
                    <p class="caps">LinkedIn</p>
                  </div>
                </a>
          </Col>
        </Row>
      </div>


    </Container>

    <Container id="index-about">
      <div id="index-about_main-row">
      <Row>
        <Col xs={12} md={3}>
          <h5   data-sal="slide-up"
  data-sal-delay="300"
  data-sal-easing="ease" className="caps">About</h5>
        </Col>
        <Col id="about-desc" xs={12} md={9} lg={8} xl={6}>
          <h4>I’m a designer with experience in visual design, UX/UI, and front-end development. Currently working as a digital designer at <a href="https://wedefy.com/about/">Defy.</a></h4>
          <h4>
I am passionate about the role art and design play in the digital world. I love to create products that are both beautiful and functional.</h4>

        </Col>
      </Row>

      </div>
      <div id="about-skill-wrap">
      <Row>
        
        <Col xs={12} md={4}>
          <div className="about-skill" id="skill-1">
            <h5 className="skill-name">Visual Design</h5>
            <p>I have been a student of visual design my whole life. I believe everything can be made to look aeshetically beautiful, so why shouldn't it be? </p>
          </div>
        </Col>
        <Col xs={12} md={4}>
          <div className="about-skill" id="skill-2">
            <h5 className="skill-name">UX/UI</h5>
            <p>I am a formally trained UX/UI designer and I have worked for several years in product/software design. The functionality of a digital product is equally, if not more, important than its visual appearance. </p>
          </div>
        </Col>
        <Col xs={12} md={4}>
          <div className="about-skill" id="skill-3">
            <h5 className="skill-name">Frontend Development</h5>
            <p>I have worked as a frontend developer on a variety of projects ranging from simple CMS sites to digital exhibits. As a designer, this experience allows me to protoype things quickly in code as well as empathize with development teams. </p>
          </div>
        </Col>

  


    </Row>

      </div>


    </Container>

    <BlogRoll />

  </>
);

IndexPageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  heading: PropTypes.string,
  subheading: PropTypes.string,
  mainpitch: PropTypes.object,
  description: PropTypes.string,
  intro: PropTypes.shape({
    blurbs: PropTypes.array,
  }),
};

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;

  return (
    <Layout>
      <IndexPageTemplate
        image={frontmatter.image}
        title={frontmatter.title}
        heading={frontmatter.heading}
        subheading={frontmatter.subheading}
        mainpitch={frontmatter.mainpitch}
        description={frontmatter.description}
        intro={frontmatter.intro}
      />
    </Layout>
  );
};

IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
};

export default IndexPage;

export const pageQuery = graphql`
  query IndexPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      frontmatter {
        title
        image {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        heading
        subheading
        mainpitch {
          title
          description
        }
        description
        intro {
          blurbs {
            image {
              childImageSharp {
                fluid(maxWidth: 240, quality: 64) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            text
          }
          heading
          description
        }
      }
    }
  }
`;
