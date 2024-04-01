import React from "react";
import ContentLoader from "react-content-loader";

const EnterpriseCardLoader = (props) => (
  <ContentLoader
    speed={1}
    width={350}
    height={250}
    viewBox="0 0 450 250"
    backgroundColor="#cccccc"
    foregroundColor="#5bd774"
    {...props}
  >
    <rect x="249" y="12" rx="15" ry="15" width="128" height="83" />
    <rect x="26" y="15" rx="5" ry="5" width="68" height="11" />
    <rect x="26" y="34" rx="5" ry="5" width="155" height="12" />
    <rect x="267" y="124" rx="9" ry="9" width="111" height="26" />
    <rect x="87" y="138" rx="0" ry="0" width="2" height="0" />
    <rect x="19" y="106" rx="0" ry="0" width="399" height="0" />
    <rect x="28" y="116" rx="0" ry="0" width="348" height="2" />
    <rect x="27" y="74" rx="5" ry="5" width="87" height="10" />
    <rect x="27" y="92" rx="5" ry="5" width="143" height="11" />
    <rect x="27" y="127" rx="5" ry="5" width="93" height="18" />
  </ContentLoader>
);

export default EnterpriseCardLoader;
