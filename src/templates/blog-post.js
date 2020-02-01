import React from "react";
import PropTypes from "prop-types";
import { kebabCase } from "lodash";
import Helmet from "react-helmet";
import { graphql, Link } from "gatsby";
import Layout from "../components/Layout";
import PreviewCompatibleImage from "../components/PreviewCompatibleImage";
import Content, { HTMLContent } from "../components/Content";

export const BlogPostTemplate = ({
  content,
  contentComponent,
  description,
  tags,
  title,
  helmet,
  featuredimage,
  externallink
}) => {
  const PostContent = contentComponent || Content;

  return (
    <section>
      {helmet || ""}

      <div id="blog-post-wrapper">
        <div id="back-button">
          <Link to="//">
            <p>Back</p>
          </Link>
        </div>
        <div id="blog-post-header">
          <h1>{title}</h1>
          <h3>{description}</h3>
          {tags && tags.length ? (
            <div id="taglist">
              <ul>
                {tags.map(tag => (
                  <li key={tag + `tag`}>
                    <p>{tag}</p>
                  </li>
                ))}
              </ul>
            </div>
          ) : null}
          {featuredimage ? (
            <div>
              <PreviewCompatibleImage
                imageInfo={{
                  image: featuredimage,
                  alt: `featured image thumbnail for post ${title}`
                }}
              />
            </div>
          ) : null}

          <a target="_blank" href={externallink}>
            <div id="main-button">
              <p>View Site</p>
            </div>
          </a>
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
  helmet: PropTypes.object
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
    markdownRemark: PropTypes.object
  })
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
