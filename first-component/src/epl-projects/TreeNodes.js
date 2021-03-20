import { h } from "preact";

import FolderNode from "./FolderNode";
import ProjectNode from "./ProjectNode";

const TreeNodes = ({ level, folders, projects, onSelect }) => {
  return (
    <div>
      {folders.map((folder) => {
        return (
          <FolderNode
            level={level}
            folder={folder}
            onSelect={onSelect}
          ></FolderNode>
        );
      })}
      {projects.map((project) => {
        return (
          <ProjectNode
            level={level}
            project={project}
            onSelect={onSelect}
          ></ProjectNode>
        );
      })}
    </div>
  );
};

export default TreeNodes;
