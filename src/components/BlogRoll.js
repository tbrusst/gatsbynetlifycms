import React from "react";
import PropTypes from "prop-types";
import { Link, graphql, StaticQuery } from "gatsby";
import PreviewCompatibleImage from "./PreviewCompatibleImage";
import styled from "styled-components";

const BlogRollWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: wrap;

  @media (min-width: 500px) {
    padding: 0 2rem;
  }
  @media (min-width: 768px) {
    padding: 0 4rem;
  }
  @media (min-width: 1100px) {
    padding: 0 12rem;
  }
  @media (min-width: 1280px) {
    padding: 0 10rem;
  }
  @media (min-width: 1800px) {
    padding: 0 20rem;
  }
`;

const BlogPreview = styled.div`
  width: 100%;
  margin: 0 0 30px 0;
  @media (min-width: 500px) {
  }
  @media (min-width: 768px) {
    width: 50%;
    padding: 0 20px;
  }
  @media (min-width: 1100px) {
    padding: 0 25px;
  }
  @media (min-width: 1280px) {
    width: 33%;
  }
`;
const PreviewHead = styled.div``;
const PreviewLink = styled.div`
  padding: 15px 0 0 0;
  margin: 15px 0 0 0;
  border-top: 1px solid black;
`;

class BlogRoll extends React.Component {
  render() {
    const { data } = this.props;
    const { edges: posts } = data.allMarkdownRemark;

    return (
      <BlogRollWrapper>
        {posts &&
          posts.map(({ node: post }) => (
            <BlogPreview key={post.id}>
              <PreviewHead>
                {post.frontmatter.featuredimage ? (
                  <div className="featured-thumbnail">
                    <PreviewCompatibleImage
                      imageInfo={{
                        image: post.frontmatter.featuredimage,
                        alt: `featured image thumbnail for post ${post.frontmatter.title}`
                      }}
                    />
                  </div>
                ) : null}
                {post.frontmatter.featuredimage ? (
                  <div className="featured-thumbnail">
                    <img src={post.frontmatter.featuredimage} alt="" />
                  </div>
                ) : null}
                <img src={post.frontmatter.featuredimage} alt="" />

                <Link
                  className="title has-text-primary is-size-4"
                  to={post.fields.slug}
                >
                  <h3>{post.frontmatter.title}</h3>
                </Link>

                <p>{post.frontmatter.title}</p>
              </PreviewHead>
              <PreviewLink>
                <Link to={post.fields.slug}>View Project</Link>
              </PreviewLink>
            </BlogPreview>
          ))}
      </BlogRollWrapper>
    );
  }
}

BlogRoll.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array
    })
  })
};

export default () => (
  <StaticQuery
    query={graphql`
      query BlogRollQuery {
        allMarkdownRemark(
          sort: { order: DESC, fields: [frontmatter___date] }
          filter: { frontmatter: { templateKey: { eq: "blog-post" } } }
        ) {
          edges {
            node {
              excerpt(pruneLength: 400)
              id
              fields {
                slug
              }
              frontmatter {
                title
                templateKey
                date(formatString: "MMMM DD, YYYY")
                featuredpost
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
        }
      }
    `}
    render={(data, count) => <BlogRoll data={data} count={count} />}
  />
);
