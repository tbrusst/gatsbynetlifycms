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

const LogoDiv = styled.div`
  background: no-repeat center;
  background-size: contain;
  height: 20rem;

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
  }
`;
const ImageDiv = styled.div`
  background: no-repeat center;
  background-size: cover;
  height: 17rem;
  width: 60%;
  z-index: 10;
  left: 20%;
  bottom: 5%;
  position: relative;
  border-radius: 20px;
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
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: repeat(3, 1fr);
  grid-column-gap: 30px;
  grid-row-gap: 30px;
  grid-template-rows: 10rem auto auto;
  margin-bottom: 5rem;
  @media (min-width: 500px) {
    padding: 0 2rem;
  }

  @media (min-width: 768px) {
    grid-row-gap: 0px;
    grid-column-gap: 60px;
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
  z-index: 11;
  @media (min-width: 768px) {
    grid-area: 1 / 1 / 2 / 8;
  }
  @media (min-width: 1100px) {
    grid-area: 1 / 2 / 2 / 8;
  }
`;

const ImageLogoHold = styled.div`
  grid-area: 2 / 1 / 3 / 12;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-top: 0rem;

  @media (min-width: 768px) {
    grid-area: 2 / 1 / 3 / 7;
  }
  @media (min-width: 1100px) {
    grid-area: 2 / 3 / 3 / 7;
  }
`;

const TextSection = styled.div`
  grid-area: 3 / 1 / 4 / 12;
  display: flex;
  flex-direction: column;
  z-index: 100;
  p {
    padding-bottom: 15px;
  }

  @media (min-width: 768px) {
    p {
      padding-bottom: 20px;
    }

    margin-top: -3rem;

    grid-area: 2 / 7 / 3 / 12;
  }
  @media (min-width: 950px) {
    grid-area: 2 / 7 / 3 / 12;
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
      <Title id="header-title">
        <h4 id="title">{heading}</h4>
        <div id="brendan-wrap" className="text-title-wrap">
          <h1 id="brendan">Brendan</h1>
        </div>
        <div id="russo-wrap" className="text-title-wrap">
          <h1 id="russo">Russo</h1>
        </div>
      </Title>

      <ImageLogoHold>
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
