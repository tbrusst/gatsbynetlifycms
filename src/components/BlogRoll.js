import React from "react";
import PropTypes from "prop-types";
import { Link, graphql, StaticQuery } from "gatsby";
import PreviewCompatibleImage from "./PreviewCompatibleImage";

import arrow from "../img/arrow-link.svg";

class BlogRoll extends React.Component {
  componentWillUnmount() {
    console.log("yolo");
    document.getElementById("blog-roll").style.animation = "none";
    console.log(document.querySelector("#blog-roll"), ":before");
  }
  render() {
    const { data } = this.props;
    const { edges: posts } = data.allMarkdownRemark;

    return (
      <div>
        <h5 id="work-title">Work</h5>
        <div id="blog-roll">
        
        {posts &&
          posts.map(({ node: post }) => (
            <div id="blog-preview" key={post.id}           
            data-sal="slide-up"
            data-sal-delay="500"
            data-sal-easing="ease"
            data-sal-duration="700">
              <div>
                <Link
                  className="title has-text-primary is-size-4"
                  to={post.fields.slug}
                >
                  {post.frontmatter.featuredimage ? (
                    <div className="featured-thumbnail">
                      <PreviewCompatibleImage
                        imageInfo={{
                          image: post.frontmatter.featuredimage,
                          alt: `featured image thumbnail for post ${post.frontmatter.title}`,
                        }}
                      />
                    </div>
                  ) : null}

                  <div className="blog-thumb-title">
                    <h4 data-content={post.frontmatter.title}>
                      {post.frontmatter.title}
                    </h4>
                    <img src={arrow} alt="Arrow Icon" />
                  </div>

                  <p id="project-type">{post.frontmatter.description}</p>
                </Link>
              </div>
            </div>
          ))}
      </div>
      </div>

    );
  }
}

BlogRoll.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
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
                description
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
