import React from "react";
import { Link } from "gatsby";

import Layout from "../components/layout";
import Image from "../components/image";
import SEO from "../components/seo";

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
    <h1 className="text-red">Hi people</h1>
    <p>Welcome to our new site.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
);

export default IndexPage;
