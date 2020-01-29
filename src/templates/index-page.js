import React from "react";
import PropTypes from "prop-types";
import { Link, graphql } from "gatsby";

import Layout from "../components/Layout";
import Features from "../components/Features";
import BlogRoll from "../components/BlogRoll";

import headshot from "../img/brendanrusso_headshot.jpg";
import logo from "../img/brendanrusso_logo.svg";
import styled from "styled-components";
import { theme } from "../styles/GlobalStyle";
import circle from "../img/circle.png";
import doubleCircle from "../img/double-circle.png";

setTimeout(function() {
  document.body.style.overflow = "hidden visible";
}, 5000);

const LogoDiv = styled.div`
  background: no-repeat center;
  background-size: contain;
  height: 20rem;
  z-index: 550;
  width: 90%;
  position: absolute;

  @media (min-width: 768px) {
    height: 20rem;
    right: auto;
  }
  @media (min-width: 950px) {
    height: 25rem;
  }
  @media (min-width: 1100px) {
    height: 30rem;
    width: 120%;
  }
  @media (min-width: 1400px) {
    height: 30rem;
    width: 90%;
  }
`;
const ImageDiv = styled.div`
  background: no-repeat center;
  background-size: cover;
  height: 17rem;
  width: 60%;
  z-index: 600;
  left: 20%;
  bottom: 5%;
  position: relative;
  border-radius: 20px;
  @media (min-width: 400px) {
    width: 50%;
  }
  @media (min-width: 768px) {
    height: 18rem;
    width: 65%;
    left: 20%;
    bottom: 15%;
  }
  @media (min-width: 950px) {
    height: 20rem;
    width: 60%;
    left: 25%;
  }
  @media (min-width: 1100px) {
    height: 25rem;
    width: 80%;

    left: 40%;
  }
  @media (min-width: 1440px) {
    width: 65%;
  }
  @media (min-width: 1800px) {
    width: 50%;
  }
`;
const MainButton = styled.button`
  font-family: signo, sans-serif;
  background: ${theme.primary};

  border-radius: 50px;
  border: none;
  padding: 10px 50px;
  max-width: 100%;
  margin-top: 15px;
  @media (min-width: 500px) {
    max-width: 40%;
  }

  @media (min-width: 768px) {
    max-width: 50%;
  }
  @media (min-width: 950px) {
    padding: 12px 30px;
  }
  @media (min-width: 1100px) {
    max-width: 60%;
  }
  @media (min-width: 1280px) {
    max-width: 50%;
  }
  @media (min-width: 1440px) {
    padding: 15px 30px;
    max-width: 40%;
  }

  @media (min-width: 1800px) {
    max-width: 30%;
  }
`;

const Grid = styled.div`
  z-index: 400;
  display: flex;
  flex-direction: column;

  margin-bottom: 5rem;
  position: relative;
  @media (min-width: 500px) {
    padding: 0 2rem;
  }

  @media (min-width: 768px) {
    display: grid;
    grid-row-gap: 0px;
    grid-column-gap: 60px;
    grid-template-columns: repeat(12, 1fr);
    grid-template-rows: repeat(2, 1fr);
    padding: 0 1rem;
    max-height: 100vh;
    grid-template-rows: 30vh auto;

    margin-bottom: 10rem;
  }
  @media (min-width: 1280px) {
    padding: 0 5rem;

    max-height: 100vh;
    grid-template-rows: 40vh auto;
  }
`;

const Title = styled.div`
  grid-area: 1 / 1 / 2 / 12;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  z-index: 900;
  @media (min-width: 768px) {
    grid-area: 1 / 1 / 2 / 8;
  }
  @media (min-width: 1100px) {
    grid-area: 1 / 2 / 2 / 8;
  }
`;

const ImageLogoHold = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin: 2rem 0;

  @media (min-width: 768px) {
    grid-area: 2 / 1 / 3 / 7;
    margin: 0;
  }
  @media (min-width: 1100px) {
    grid-area: 2 / 3 / 3 / 7;
  }
`;

const TextSection = styled.div`
  grid-area: 3 / 1 / 4 / 12;
  display: flex;
  flex-direction: column;
  z-index: 500;
  p {
    padding-bottom: 15px;
  }

  @media (min-width: 768px) {
    p {
      padding-bottom: 20px;
    }

    margin-top: -3rem;

    grid-area: 2 / 7 / 3 / 13;
  }
  @media (min-width: 950px) {
    grid-area: 2 / 7 / 3 / 13;
    p {
      padding-bottom: 30px;
    }
  }
  @media (min-width: 1100px) {
    grid-area: 2 / 8 / 3 / 12;
  }
`;

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
    <Grid>
      <Title id="header-title" className="leftSide">
        <h4 id="title">{heading}</h4>
        <div id="brendan-wrap" className="text-title-wrap">
          <h1 id="brendan">Brendan</h1>
        </div>
        <div id="russo-wrap" className="text-title-wrap">
          <h1 id="russo">Russo</h1>
        </div>
      </Title>

      <ImageLogoHold className="leftSide">
        <ImageDiv
          id="header-image"
          style={{ backgroundImage: "url(" + headshot + ")" }}
        ></ImageDiv>
        <LogoDiv
          id="header-logo"
          style={{ backgroundImage: "url(" + logo + ")" }}
        ></LogoDiv>
      </ImageLogoHold>
      <TextSection id="header-text-section">
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

        <MainButton>Contact Me</MainButton>
      </TextSection>
    </Grid>
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
