import React from "react";
import PropTypes from "prop-types";
import { Link, graphql } from "gatsby";

import Layout from "../components/Layout";
import BlogRoll from "../components/BlogRoll";
import ContactButton from "../components/ContactButton";
import AboutMe from "../components/AboutMe";
import Nav from "../components/Nav";

import headshot from "../img/brendanrusso_portfolio_portrait.jpg";
import "../styles/index.scss";
import "../styles/typography.scss";

import {Row, Col, Container, Form, Button} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';

import Clock from 'react-live-clock';

import video from "../img/brendanrusso_portfolio_video.mp4";


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
        <div id="index-header_top-row">
          {/* <Clock format={'MMMM Mo YYYY'}
          ticking={true}
          /> */}
          <Clock format={'h:mm:ss A'}
          ticking={true}
          />
        </div>
        <Row id="index-header_main-row">
          <Col className="send-to-bottom" id="brendan-russo" xs={12} sm={8} xl={8}>
            <div id="brendan-wrapper">
              <h1 id="brendan">Brendan Russo</h1>

            </div>
            {/* <div id="russo-wrapper">
              <h1 id="russo" class="tight-line">Russo</h1>

            </div> */}
            <div id="header-video-wrapper">
              <video id="header-video" autoPlay muted loop playsInline>
                <source src={video} type="video/mp4" />
                Your browser does not support the video element.
              </video>

            </div>


          </Col>
          <Col className="send-to-bottom" id="main-header-2" xs={{ span: 12, offset: 0 }} sm={{span:4, offset:0}} xl={{ span: 4, offset: 0 }}>
            <div id="digital-designer">
              
              <div id="digital-designer-text">
                <div id="digital-wrapper">
                  <h3 id="digital" >Interaction</h3>

                </div>
                <div id="designer-wrapper">
                  <h3 id="designer" >Designer</h3>

                </div>



              </div>


            </div>
            <div id="portrait-wrapper" style={{backgroundImage: `url(${headshot})`}}>
              
              

            </div>

          </Col>
        </Row>
        {/* <div id="index-header_secondary-row">
          <div id="index-header_secondary-row_1">
            <div className="index-header_secondary-row_item-wrap">
                <p id="keep-scrolling">Keep scrolling</p>
            </div>

          </div>
          <div id="index-header_secondary-row_2">
            <div className="index-header_secondary-row_item-wrap">
              <a href="mailto:russobrendanm@gmail.com">
                <div class="contact-button">
                  <p class="caps">Let's Talk</p>

                </div>
                
              </a>
            </div>
            
          </div>
        </div> */}
        {/* <div id="header-gradient"></div> */}
      </div>




    </Container>

    <div id="index-about-wrapper">
        
        

    <Container id="index-about">

      <div id="index-about_main-row">
      <Row>
        <Col xs={12} md={3} xl={3}>
          <h5
          data-sal="slide-up"
          data-sal-delay="300"
          data-sal-easing="ease"
          >
            About
          </h5>
        </Col>
        <Col xs={12} md={9}>
          
          <h2
            data-sal="slide-up"
            data-sal-delay="300"
            data-sal-easing="ease"
            data-sal-duration="700"
          >
            I am passionate about crafting digital experiences that are both beautiful and functional.
          </h2>


        </Col>
      </Row>
      <Row>
        <Col id="about-desc" xs={{ span: 12, offset: 0 }} md={{span: 8, offset: 3}} lg={{span: 7, offset: 3}} xl={{span: 6, offset: 3}} xxl={{span: 5, offset: 3}}>
        <p
             
            data-sal="slide-up"
            data-sal-delay="500"
            data-sal-easing="ease"
            data-sal-duration="700"
          >
            I'm an interaction designer with 5 years of experience delivering outstanding digital experiences. I bring together design and technology to create innovative solutions that exceed client expectations. My portfolio showcases websites and mobile apps that demonstrate my skills in user-centered design and problem-solving. I'm dedicated to delivering high-quality and impactful digital products.</p>
          {/* <p   
            
            data-sal="slide-up"
            data-sal-delay="600"
            data-sal-easing="ease"
            data-sal-duration="700"
          >
            I have a B.S. in Interactive Digital Media from Drexel University and have worked in the industry for 5 years building next level digital products. 
          </p> */}

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
    </div>

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
