import { h } from "preact";

import Header from "./Header";
import Navigator from "./Navigator";

// import "./style.css";
// const style = `div {
//   background-color: aquamarine;
// }`;

const Projects = ({ host, token, onSelect }) => {
  return (
    <div>
      {/* <Header name={name}></Header> */}
      {/* <button onClick={onClick}>CLICK HERE</button> */}
      <Navigator host={host} token={token} onSelect={onSelect}></Navigator>
    </div>
  );
};

export default Projects;
