import { createGlobalStyle } from "styled-components";

const bodyfont = "signo,sans-serif";
const headingfont = "Monument Extended, sans-serif";

const Typography = createGlobalStyle`

@font-face {
  font-family: "Monument Extended";
  src: local('Monument Extended'), url("~src/fonts/MonumentExtended-Regular.woff2") format("woff2"),
    url("~src/fonts/MonumentExtended-Regular.woff") format("woff");
  font-style: normal;
}


h1,
h2,
h3,
h4,
h5,
h6,
p {
  margin: 0;
  color: ${props => props.theme.black};
}

a {
  text-decoration: none;
}

h1 {
  font-family: ${headingfont};
  font-size: 3rem;
  text-transform: uppercase;

  
  font-weight: normal;
  @media only screen and (min-width: 768px) {
    font-size: 5rem;
    line-height: 4.5rem;
  }
  @media only screen and (min-width: 950px) {
    font-size: 6rem;
    line-height: 5.5rem;
  }
  @media only screen and (min-width: 1100px) {
    font-size: 7rem;
    line-height: 6rem;
  }
  @media only screen and (min-width: 1280px) {
    font-size: 7rem !important;
    line-height: 6rem !important;
  }
  @media only screen and (min-width: 1800px) {
    font-size: 9rem !important;
    line-height: 8rem !important;
  }
}

h2 {
  font-family: ${headingfont};
  font-size: 1.5rem;
  @media only screen and (min-width: 768px) {
    font-size: 2.5rem;
  }
  @media only screen and (min-width: 1280px) {
    font-size: 3.5rem;
  }
}

h3 {
  font-family: ${bodyfont};
  font-size: 1.25rem;
  font-weight: normal;
  @media only screen and (min-width: 768px) {
    font-size: 1.5rem;
  }
  @media only screen and (min-width: 1280px) {
    font-size: 1.8rem;
  }
}

h4 {
  color: ${props => props.theme.primary};
  font-family: ${bodyfont};
  font-size: 1rem;
  font-weight: 400 !important;
  @media only screen and (min-width: 768px) {

    font-size: 1.2rem;
  }
  @media only screen and (min-width: 1280px) {

    font-size: 1.25rem !important;
  }
}

p {
  font-family: ${bodyfont};
  font-size: 1rem;
  font-weight: 200;
  color: ${props => props.theme.black};
  @media only screen and (min-width: 768px) {
    font-size: .9rem;
  }
  @media only screen and (min-width: 1100px) {
    font-size: 1rem;
  }

  @media only screen and (min-width: 1800px) {
    font-size: 1.25rem;
  }
}
`;
export default Typography;
