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
  bannerimage,
  externallink,
}) => {
  const PostContent = contentComponent || Content;

  const bgImg = bannerimage.childImageSharp.fluid;


  

  return (
    <section>
      {helmet || ""}

      <div id="blog-post">


      <div id="blog-post-wrapper">
        <div id="blog-post-header-wrapper">

        <BackgroundImage
          Tag="section"
          id="blog-post-banner"
          
          fluid={bgImg}
          backgroundColor={`#040e18`}
        >
          
        </BackgroundImage>



        <div id="blog-post-header">
          <div class="caps" id="back-button">
            <Link to="/">
              <p>Home</p>
            </Link>
          </div>

          {/* <button onClick={() => history.goBack()}>Back</button> */}
          {/* <button onClick={() => window.history.back()}>Back</button>  */}

          <div id="blog-post-header-info">
          <h2>{title}</h2>
          <h5>{description}</h5>
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

                </div>
              </a>
            </div>
          ) : null}

          </div>


        </div>

        </div>




        <PostContent className="blog-content-wrapper" content={content} />
      </div>

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
        bannerimage={post.frontmatter.bannerimage}
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
        bannerimage={post.frontmatter.bannerimage}
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
        bannerimage {
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
