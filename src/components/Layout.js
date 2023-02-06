import "../styles/typography.scss";

import React from "react";
import { Helmet } from "react-helmet";
import Footer from "../components/Footer";

import useSiteMetadata from "./SiteMetadata";
import { withPrefix } from "gatsby";

//styles
import GlobalStyle from "../styles/GlobalStyle";
import "../styles/fonts.scss";

import "../styles/animations.scss";
import "../styles/header.scss";
import "../styles/blog-post.scss";
import "../styles/blogroll.scss";
import "../styles/footer.scss";
import "../styles/about.scss";

const TemplateWrapper = ({ children }) => {
  const { title, description } = useSiteMetadata();
  return (
    <div>
      <Helmet>
        <html lang="en" />
        <title>{title}</title>
        <meta name="description" content={description} />

        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href={`${withPrefix("/")}img/apple-touch-icon.png`}
        />
        <link
          rel="icon"
          type="image/png"
          href={`${withPrefix("/")}img/favicon-32x32.png`}
          sizes="32x32"
        />
        <link
          rel="icon"
          type="image/png"
          href={`${withPrefix("/")}img/favicon-16x16.png`}
          sizes="16x16"
        />

        <link
          rel="mask-icon"
          href={`${withPrefix("/")}img/safari-pinned-tab.svg`}
          color="#6CF542"
        />
        <meta name="theme-color" content="#EDECE8" />

        <meta property="og:type" content="business.business" />
        <meta property="og:title" content={title} />
        <meta property="og:url" content="/" />
        <meta
          property="og:image"
          content={`${withPrefix("/")}img/seo-image.jpg`}
        />
        <link
          rel="stylesheet"
          href="https://use.typekit.net/nrn2zoj.css"
        ></link>
        <link rel="stylesheet" href="https://use.typekit.net/prl4uby.css"></link>


      </Helmet>
      <GlobalStyle />

      <div>{children}</div>
      <Footer />
    </div>
  );
};

export default TemplateWrapper;
