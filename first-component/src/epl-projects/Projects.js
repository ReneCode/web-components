import { h } from "preact";

import Header from "./Header";
import Navigator from "./Navigator";

// import "./style.css";
// const style = `div {
//   background-color: aquamarine;
// }`;

const Projects = ({ name }) => {
  return (
    <div>
      <Header name={name}></Header>
      <Navigator></Navigator>
    </div>
  );
};

export default Projects;
