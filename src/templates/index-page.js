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
    <div id="index-header">
      <Nav />
      <div id="header-wrap">
        <div id="header-name">
          <h1 id="brendan">Brendan</h1>

          <div id="header-bottom">
            <div id="headshot">
              <img src={headshot} alt="Brendan Russo Headshot" />
            </div>

            <div id="lastname">
              <h1 id="russo">Russo</h1>
              <div id="header-info">
                <h4>{heading}</h4>
                <ContactButton id="header-contact" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div id="about-work">
      <div id="contact-links">
        <a target="_blank" href="https://www.instagram.com/brendanrusso.design/">
          <div className="contact-link">
            <p>INSTAGRAM</p>
            <p>@brendanrusso.design</p>
          </div>
        </a>
        <a target="_blank" href="https://www.linkedin.com/in/brendanrus/">
          <div className="contact-link">
            <p>LINKEDIN</p>
            <p>/brendanr.us</p>
          </div>
        </a>
      </div>
      <AboutMe />
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
