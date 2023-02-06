import React from "react";
import PropTypes from "prop-types";
import { Link, graphql, StaticQuery } from "gatsby";
import PreviewCompatibleImage from "./PreviewCompatibleImage";

import arrow from "../img/arrow-link.svg";

import {Row, Col, Container, Form, Button} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';

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
          posts.map(({ node: post }, index) => {

            if(index%2==1){
              return (

                <Link
                className="title has-text-primary is-size-4"
                to={post.fields.slug}
              >
                <Row 
                  className="blog-preview" id="blog-right-align" key={post.id}
                  // data-sal="slide-up"
                  
                  // data-sal-easing="ease"
                  // data-sal-duration="500"
                >
              
                    {post.frontmatter.featuredimage ? (
                      <Col xs={12} md={6} className="featured-thumbnail">
                        <PreviewCompatibleImage
                          imageInfo={{
                            image: post.frontmatter.featuredimage,
                            alt: `featured image thumbnail for post ${post.frontmatter.title}`,
                          }}
                        />
                      </Col>
                    ) : null}
  
                    <Col xs={12} md={6} className="blog-thumb-title">
                      <div id="blog-thumb-title-main">
                        <h2 data-content={post.frontmatter.title}>
                          {post.frontmatter.title}
                        </h2>
                        <img src={arrow} alt="Arrow Icon" />
                      </div>
                      <p id="project-type">{post.frontmatter.description}</p>
                    </Col>
  
                   
                  
                
                </Row>
              </Link>
               
           ); 
             } return (
              <Link
              className="title has-text-primary is-size-4"
              to={post.fields.slug}
            >
              <Row 
                className="blog-preview" id="blog-left-align" key={post.id}
                // data-sal="slide-up"
                // data-sal-delay="500"
                // data-sal-easing="ease"
                // data-sal-duration="700"
              >
            
                  {post.frontmatter.featuredimage ? (
                    <Col xs={12} md={6} className="featured-thumbnail">
                      <PreviewCompatibleImage
                        imageInfo={{
                          image: post.frontmatter.featuredimage,
                          alt: `featured image thumbnail for post ${post.frontmatter.title}`,
                        }}
                      />
                    </Col>
                  ) : null}

                  <Col xs={12} md={6} className="blog-thumb-title">
                    <div id="blog-thumb-title-main">
                      <h2 data-content={post.frontmatter.title}>
                        {post.frontmatter.title}
                      </h2>
                      <img src={arrow} alt="Arrow Icon" />
                    </div>
                    <p id="project-type">{post.frontmatter.description}</p>
                  </Col>

                 
                
              
              </Row>
            </Link>

             );
            

        })}
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
