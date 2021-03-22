import { h } from "preact";

import FolderNode from "./FolderNode";
import ProjectNode from "./ProjectNode";

const TreeNodes = ({
  level,
  folders,
  projects,
  onSelectFolder,
  onSelectProject,
}) => {
  return (
    <div>
      {folders.map((folder) => {
        return (
          <FolderNode
            level={level}
            folder={folder}
            onSelectFolder={onSelectFolder}
            onSelectProject={onSelectProject}
          ></FolderNode>
        );
      })}
      {projects.map((project) => {
        return (
          <ProjectNode
            level={level}
            project={project}
            onSelectProject={onSelectProject}
          ></ProjectNode>
        );
      })}
    </div>
  );
};

export default TreeNodes;
