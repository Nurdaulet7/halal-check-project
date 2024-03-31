import React from "react";
import ContentLoader from "react-content-loader";

const AdditiveCardLoader = (props) => (
  <ContentLoader
    speed={1}
    width={250}
    height={250}
    viewBox="0 0 250 250"
    backgroundColor="#cccccc"
    foregroundColor="#5bd774"
    {...props}
  >
    <rect x="0" y="0" rx="19" ry="19" width="250" height="250" />
  </ContentLoader>
);

export default AdditiveCardLoader;
