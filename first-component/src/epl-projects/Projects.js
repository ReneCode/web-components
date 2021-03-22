import { h } from "preact";

import Header from "./Header";
import Navigator from "./Navigator";

// import "./style.css";
// const style = `div {
//   background-color: aquamarine;
// }`;

const Projects = ({ host, token, onSelectFolder, onSelectProject }) => {
  return (
    <Navigator
      host={host}
      token={token}
      onSelectFolder={onSelectFolder}
      onSelectProject={onSelectProject}
    ></Navigator>
  );
};

export default Projects;
