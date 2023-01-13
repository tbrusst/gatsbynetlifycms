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
<div style={{background:"#EDECE8"}}>


    <Container id="index-header">
      <div>
        <Row id="index-header_main-row">
          <Col id="brendan-russo" xs={12} sm={7} xl={6}>
            <div id="brendan-wrapper">
              <h1 id="brendan" class="tight-line">Brendan</h1>

            </div>
            <div id="russo-wrapper">
              <h1 id="russo" class="tight-line">Russo</h1>

            </div>


          </Col>
          <Col xs={{ span: 4, offset: 8 }} sm={{span:4, offset:1}} xl={{ span: 3, offset: 2 }}>
            <div id="digital-designer">
              <div id="digital-designer-line"></div>
              <div id="digital-designer-text">
                <div id="digital-wrapper">
                  <h3 id="digital" >Digital</h3>

                </div>
                <div id="designer-wrapper">
                  <h3 id="designer" >Designer</h3>

                </div>



              </div>


            </div>

          </Col>
        </Row>
        <Row id="index-header_secondary-row">
          <Col xs={4} sm={{span: 4}} md={{ span: 3, offset: 4 }} id="index-header_secondary-row_1">
            <div className="index-header_secondary-row_item-wrap">
              
                <p class="caps">Currently looking</p>
                <p class="caps">for work</p>
              
            </div>

          </Col>
          <Col xs={4} sm={{span: 4}} md={{ span: 3 }} id="index-header_secondary-row_2">
            <div className="index-header_secondary-row_item-wrap">
              <a href="mailto:russobrendanm@gmail.com">
                <p class="caps">Send me an</p>
                <p class="caps">Email</p>
              </a>
            </div>
            
          </Col>
          <Col xs={4} sm={{span: 4}} md={{ span: 2 }} id="index-header_secondary-row_3">
            <div className="index-header_secondary-row_item-wrap">
                <a target="_blank" href="https://www.linkedin.com/in/brendanrus/">
                  <div className="contact-link">
                    <p class="caps">LinkedIn</p>
                  </div>
                </a>
            </div>

          </Col>
        </Row>
        <div id="header-gradient"></div>
      </div>




    </Container>

    <Container id="index-about">
      <div id="index-about_main-row">
      <Row>
        <Col xs={12} md={2}>
          <h5
          data-sal="slide-up"
          data-sal-delay="300"
          data-sal-easing="ease"
          
          >
            About
          </h5>
        </Col>
        <Col id="about-desc" xs={12} md={8} lg={7} xl={6} xxl={5}>
          <p   
            data-sal="slide-up"
            data-sal-delay="500"
            data-sal-easing="ease"
            data-sal-duration="700"
          >
            I’m a designer with experience in visual design, UX/UI, and front-end development. Currently looking for work in the San Francisco are or flexible remote opportunities in the US.</p>
          <p   
            data-sal="slide-up"
            data-sal-delay="600"
            data-sal-easing="ease"
            data-sal-duration="700"
          >
            I am passionate about the role art and design play in the digital world. I love to create products that are both beautiful and functional.
          </p>

        </Col>
      </Row>

      </div>


      <div id="about-skill-wrap"             
            data-sal="fade"
            data-sal-delay="500"
            data-sal-easing="ease"
            data-sal-duration="100">
      <Row>
        
        <Col xs={12} md={4}>
          <div className="about-skill" id="skill-1">
            <h4 className="skill-name">Visual Design</h4>
            <p>I have been a student of visual design my whole life. I believe everything can be made to look aeshetically beautiful, so why shouldn't it be? </p>
          </div>
        </Col>
        <Col xs={12} md={4}>
          <div className="about-skill" id="skill-2">
            <h4 className="skill-name">UX/UI</h4>
            <p>I am a formally trained UX/UI designer and I have worked for several years in product/software design. The functionality of a digital product is equally, if not more, important than its visual appearance. </p>
          </div>
        </Col>
        <Col xs={12} md={4}>
          <div className="about-skill" id="skill-3">
            <h4 className="skill-name">Frontend Development</h4>
            <p>I have worked as a frontend developer on a variety of projects ranging from simple CMS sites to digital exhibits. As a designer, this experience allows me to protoype things quickly in code as well as empathize with development teams. </p>
          </div>
        </Col>

  


    </Row>

      </div>

      {/* <div id="about-skill-wrap-mobile"             
>
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

      </div> */}


    </Container>

    <BlogRoll />

    </div>

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
