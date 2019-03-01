import { graphql } from "gatsby";

const brandImage = graphql`
  fragment brandImage on File {
    childImageSharp {
      fluid(maxWidth: 200, maxHeight: 200) {
        ...GatsbyImageSharpFluid
      }
    }
  }
`;

export default brandImage;
