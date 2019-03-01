import PropTypes from "prop-types";
import React from "react";

const Header = ({ siteTitle }) => (
  <header className="flex justify-center mb-8 mt-32">
    <h1 className="text-5xl">
      <span className="font-black text-teal-dark">Find</span> {siteTitle}
    </h1>
  </header>
);

Header.propTypes = {
  siteTitle: PropTypes.string
};

Header.defaultProps = {
  siteTitle: ``
};

export default Header;
