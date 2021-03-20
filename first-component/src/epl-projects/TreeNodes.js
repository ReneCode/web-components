import { h } from "preact";

import FolderNode from "./FolderNode";

const TreeNodes = ({ folders, projects }) => {
  return (
    <div>
      {folders.map((folder) => {
        return <FolderNode folder={folder}></FolderNode>;
      })}
      {projects.map((project) => {
        return <div class="project">{project.name}</div>;
      })}
    </div>
  );
};

export default TreeNodes;
