import React from "react";
import PropTypes from "prop-types";
import { kebabCase } from "lodash";
import Helmet from "react-helmet";
import { graphql, Link } from "gatsby";
import Layout from "../components/Layout";
import PreviewCompatibleImage from "../components/PreviewCompatibleImage";
import Content, { HTMLContent } from "../components/Content";
import arrow from "../img/arrow.svg";
import BackgroundImage from 'gatsby-background-image';

export const BlogPostTemplate = ({
  content,
  contentComponent,
  description,
  tags,
  title,
  helmet,
  featuredimage,
  externallink,
}) => {
  const PostContent = contentComponent || Content;

  console.log(featuredimage.childImageSharp.fluid.srcSet);

  return (
    <section>
      {helmet || ""}

      <div id="blog-post-wrapper">
        {/* <div id="blog-post-banner" style ={{ backgroundImage: `url(${featuredimage.childImageSharp.fluid.src})`}}></div> */}
        <BackgroundImage
          Tag="section"
          id="blog-post-banner"
          
          fluid={featuredimage.childImageSharp.fluid}
          backgroundColor={`#040e18`}
        >
          
        </BackgroundImage>

        <div id="back-button">
          <Link to="/">
            <p>Back</p>
          </Link>
        </div>
        <div id="blog-post-header">
          <h2>{title}</h2>
          <h4>{description}</h4>
          {tags && tags.length ? (
            <div id="taglist">
              <ul>
                {tags.map((tag) => (
                  <li key={tag + `tag`}>
                    <p>{tag}</p>
                  </li>
                ))}
              </ul>

              <a target="_blank" href={externallink}>
                <div className="contact-button">
                  <p className="caps">View Site</p>
                  {/* <img src={arrow} alt="Arrow to link to another page" /> */}
                </div>
              </a>
            </div>
          ) : null}

          {/* {featuredimage ? (
            <div id="main-image">
              <PreviewCompatibleImage
                imageInfo={{
                  image: featuredimage,
                  alt: `featured image thumbnail for post ${title}`,
                }}
              />
            </div>
          ) : null} */}
        </div>

        <PostContent className="blog-content-wrapper" content={content} />
      </div>
    </section>
  );
};

BlogPostTemplate.propTypes = {
  content: PropTypes.node.isRequired,
  contentComponent: PropTypes.func,
  description: PropTypes.string,
  title: PropTypes.string,
  helmet: PropTypes.object,
};

const BlogPost = ({ data }) => {
  const { markdownRemark: post } = data;

  return (
    <Layout>
      <BlogPostTemplate
        content={post.html}
        contentComponent={HTMLContent}
        description={post.frontmatter.description}
        featuredimage={post.frontmatter.featuredimage}
        externallink={post.frontmatter.externallink}
        helmet={
          <Helmet titleTemplate="%s | Brendan Russo">
            <title>{`${post.frontmatter.title}`}</title>
            <meta
              name="description"
              content={`${post.frontmatter.description}`}
            />
          </Helmet>
        }
        tags={post.frontmatter.tags}
        title={post.frontmatter.title}
        featuredimage={post.frontmatter.featuredimage}
        externallink={post.frontmatter.externallink}
      />
    </Layout>
  );
};

BlogPost.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object,
  }),
};

export default BlogPost;

export const pageQuery = graphql`
  query BlogPostByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
        description
        tags
        externallink
        featuredimage {
          childImageSharp {
            fluid(quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`;
