import ContentLoader from "react-content-loader";

const MyLoader = (props) => (
  <ContentLoader
    speed={1}
    width={280}
    height={360}
    viewBox="0 0 280 360"
    backgroundColor="#cccccc"
    foregroundColor="#6dd582"
    {...props}
  >
    <rect x="16" y="222" rx="5" ry="5" width="220" height="14" />
    <rect x="16" y="241" rx="5" ry="5" width="220" height="14" />
    <rect x="14" y="4" rx="15" ry="15" width="223" height="184" />
    <rect x="15" y="195" rx="6" ry="6" width="140" height="20" />
    <rect x="17" y="264" rx="5" ry="5" width="214" height="2" />
    <rect x="130" y="275" rx="6" ry="6" width="106" height="20" />
    <circle cx="33" cy="285" r="12" />
  </ContentLoader>
);

export default MyLoader;
