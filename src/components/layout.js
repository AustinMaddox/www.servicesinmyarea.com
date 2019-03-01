import React from "react";
import PropTypes from "prop-types";
import { StaticQuery, graphql } from "gatsby";

import { Helmet } from "react-helmet";
import Header from "./header";
import "./layout.css";

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <Helmet bodyAttributes={{ class: "antialiased font-sans" }} />
        <Header siteTitle={data.site.siteMetadata.title} />
        <main>{children}</main>
        <footer className="fixed pin-b pin-x text-center">
          <div className="text-grey-dark text-sm">
            Copyright &copy; {new Date().getFullYear()} Services In My Area,
            LLC. All rights reserved.
          </div>
          <div className="mb-4 mt-2 text-grey text-xs">
            Made with
            <span aria-label="Love" className="mx-1 opacity-25" role="img">
              ❤️
            </span>
            for Rafiq by Mr. Austin Maddox
          </div>
        </footer>
      </>
    )}
  />
);

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default Layout;
