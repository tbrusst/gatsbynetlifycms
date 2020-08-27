import React from "react";
import Layout from "../components/Layout";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import headshot from "../img/brendan-headshot.png";
import ContactButton from "../components/ContactButton";

const NotFoundPage = () => (
  <Layout>
    <div id="index-header">
      <Nav />
      <div id="header-wrap">
        <div id="header-name">
          <h1 id="brendan">Page Not</h1>

          <div id="header-bottom">
            <div id="headshot">
              <img
                src="https://media.giphy.com/media/R1pBmosKaq97q/source.gif"
                alt="404 Gif"
              />
            </div>

            <div id="lastname">
              <h1 id="russo">Found</h1>
              <div id="header-info">
                <h4></h4>
                {/* <ContactButton id="header-contact" /> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Layout>
);

export default NotFoundPage;
