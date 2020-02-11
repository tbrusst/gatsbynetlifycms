import React from "react";
import PropTypes from "prop-types";
import { Link, graphql } from "gatsby";

import Layout from "../components/Layout";
import BlogRoll from "../components/BlogRoll";

import headshot from "../img/brendanrusso_headshot.jpg";
import logo from "../img/brendanrusso_logo.svg";
import styled from "styled-components";
import { theme } from "../styles/GlobalStyle";
import circle from "../img/circle.svg";
import doubleCircle from "../img/double-circle.svg";
import bigCirlce from "../img/big-circle.svg";
import "../styles/index.scss";
import "../styles/typography.scss";

setTimeout(function() {
  document.body.style.overflow = "hidden visible";
}, 5000);

export const IndexPageTemplate = ({
  image,
  title,
  heading,
  subheading,
  mainpitch,
  description,
  intro
}) => (
  <>
    <div id="big-circle-wrap">
      <img src={bigCirlce} alt="" />
    </div>
    <div id="index-grid">
      <div id="header-title" className="leftSide">
        <h4 id="title">{heading}</h4>
        <div id="brendan-wrap" className="text-title-wrap">
          <h1 id="brendan">Brendan</h1>
        </div>
        <div id="russo-wrap" className="text-title-wrap">
          <h1 id="russo">Russo</h1>
        </div>
      </div>

      <div id="image-logo-hold" className="leftSide">
        <div
          id="header-image"
          style={{ backgroundImage: "url(" + headshot + ")" }}
        ></div>
        <div
          id="header-logo"
          style={{ backgroundImage: "url(" + logo + ")" }}
        ></div>
      </div>
      <div id="header-text-section">
        <p>
          I am currently working part-time as a UX Designer at a software
          startup called Setvi . I studied Interactive Digital Media at Drexel
          University and am currently seeking full time opportunities in and
          around Philadelphia.
        </p>
        <p>
          My training and experience in digital media have allowed me to become
          well accomplished in UX/UI, motion design, and frontend development.
          As a Creative Technologist I am able to design beautifully functional
          products and then bring them to life in code.
        </p>
        <p>
          Please contact me with any questions you may have or with any
          information regarding opportunities in related fields.
        </p>
        <a href="mailto:russobrendanm@gmail.com">
          <div id="main-button" class="button">
            Contact Me
          </div>
        </a>
      </div>
    </div>
    <div id="circle-wrapper">
      <div className="circle-hold" id="double-circle">
        <img src={doubleCircle} alt="" />
      </div>
      <div className="circle-hold" id="circle">
        <img src={circle} alt="" />
      </div>
    </div>
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
    blurbs: PropTypes.array
  })
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
      frontmatter: PropTypes.object
    })
  })
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
