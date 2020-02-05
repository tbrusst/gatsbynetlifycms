import React from "react";
import Typography from "../styles/Typography";
import GridLayout from "../styles/GridLayout";

const theme = {
  primary: "#FF9D01",
  gray: "#979797",
  black: "#2e2e2e"
};

const GlobalStyle = () => (
  <>
    <style>
      {
        "\
        *{\
          box-sizing: border-box; margin: 0px;\
        }\
      "
      }
    </style>
    <Typography theme={theme} />
    <GridLayout />
  </>
);
export default GlobalStyle;
export { theme };
