import React from "react";
import ContentLoader from "react-content-loader";

const FilterLoader = (props) => (
  <ContentLoader
    speed={1}
    width={300}
    height={150}
    viewBox="0 0 300 150"
    backgroundColor="#cccccc"
    foregroundColor="#5bd774"
    {...props}
  >
    <rect x="43" y="17" rx="5" ry="5" width="220" height="10" />
    <rect x="43" y="47" rx="5" ry="5" width="220" height="10" />
    <rect x="43" y="77" rx="5" ry="5" width="220" height="10" />
    <rect x="43" y="107" rx="5" ry="5" width="220" height="10" />
    <rect x="44" y="136" rx="5" ry="5" width="220" height="10" />
  </ContentLoader>
);

export default FilterLoader;
