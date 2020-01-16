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
  height: 35rem;
  width: 100%;
  position: absolute;
`;
const ImageDiv = styled.div`
  background: no-repeat center;
  background-size: cover;
  height: 25rem;
  width: 50%;
  z-index: 10;
  left: 25%;
  bottom: 15%;

  position: relative;
  border-radius: 20px;
`;
const MainButton = styled.button`
  font-family: signo, sans-serif;
  background: ${theme.primary};

  border-radius: 50px;
  border: none;
  padding: 10px 50px;
  max-width: 50%;
`;

const Grid = styled.div`
  padding: 0 5rem;
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: repeat(2, 1fr);
  grid-column-gap: 60px;
  grid-row-gap: 0px;
  max-height: 100vh;
`;

const Title = styled.div`
  grid-area: 1 / 2 / 2 / 9;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  z-index: 11;
`;

const ImageLogoHold = styled.div`
  grid-area: 2 / 3 / 3 / 8;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-top: 0rem;
`;

const TextSection = styled.div`
  grid-area: 2 / 8 / 3 / 12;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  margin-top: -6rem;
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
      <Title>
        <h4>{heading}</h4>
        <h1>{title}</h1>
      </Title>

      <ImageLogoHold>
        <ImageDiv
          style={{ backgroundImage: "url(" + headshot + ")" }}
        ></ImageDiv>
        <LogoDiv style={{ backgroundImage: "url(" + logo + ")" }}></LogoDiv>
      </ImageLogoHold>
      <TextSection>
        {description}

        <MainButton>Contact Me</MainButton>
      </TextSection>
    </Grid>
    {/* <div
      className="full-width-image margin-top-0"
      style={{
        backgroundImage: `url(${
          !!image.childImageSharp ? image.childImageSharp.fluid.src : image
        })`,
        backgroundPosition: `top left`,
        backgroundAttachment: `fixed`
      }}
    >
      <div
        style={{
          display: "flex",
          height: "150px",
          lineHeight: "1",
          justifyContent: "space-around",
          alignItems: "left",
          flexDirection: "column"
        }}
      >
        <h1
          className="has-text-weight-bold is-size-3-mobile is-size-2-tablet is-size-1-widescreen"
          style={{
            boxShadow:
              "rgb(255, 68, 0) 0.5rem 0px 0px, rgb(255, 68, 0) -0.5rem 0px 0px",
            backgroundColor: "rgb(255, 68, 0)",
            color: "white",
            lineHeight: "1",
            padding: "0.25em"
          }}
        >
          {title}
        </h1>
        <h3
          className="has-text-weight-bold is-size-5-mobile is-size-5-tablet is-size-4-widescreen"
          style={{
            boxShadow:
              "rgb(255, 68, 0) 0.5rem 0px 0px, rgb(255, 68, 0) -0.5rem 0px 0px",
            backgroundColor: "rgb(255, 68, 0)",
            color: "white",
            lineHeight: "1",
            padding: "0.25em"
          }}
        >
          {subheading}
        </h3>
      </div>
    </div>
    <section className="section section--gradient">
      <div className="container">
        <div className="section">
          <div className="columns">
            <div className="column is-10 is-offset-1">
              <div className="content">
                <div className="content">
                  <div className="tile">
                    <h1 className="title">{mainpitch.title}</h1>
                  </div>
                  <div className="tile">
                    <h3 className="subtitle">{mainpitch.description}</h3>
                  </div>
                </div>
                <div className="columns">
                  <div className="column is-12">
                    <h3 className="has-text-weight-semibold is-size-2">
                      {heading}
                    </h3>
                    <p>{description}</p>
                  </div>
                </div>
                <Features gridItems={intro.blurbs} />
                <div className="columns">
                  <div className="column is-12 has-text-centered">
                    <Link className="btn" to="/products">
                      See all products
                    </Link>
                  </div>
                </div>
                <div className="column is-12">
                  <h3 className="has-text-weight-semibold is-size-2">
                    Latest stories
                  </h3>
                  <BlogRoll />
                  <div className="column is-12 has-text-centered">
                    <Link className="btn" to="/blog">
                      Read more
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section> */}
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
