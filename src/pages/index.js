import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import Search from "../components/search";
import Brands from "../components/brands";

const IndexPage = () => (
  <Layout>
    <SEO
      title="Satellite TV Services In My Area"
      keywords={[
        "services",
        "cable",
        "tv",
        "satellite",
        "internet",
        "direct",
        "dish"
      ]}
    />
    <Search />
    <Brands />
  </Layout>
);

export default IndexPage;
