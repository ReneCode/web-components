import { h } from "preact";
import { useEffect, useState } from "preact/hooks";

import Gap from "./Gap";
import IconButton from "./icon/IconButton";

const ProjectNode = ({ level, project, onSelectProject }) => {
  const clickProject = () => {
    onSelectProject(project);
  };

  return (
    <div class="project show-hover" onClick={clickProject}>
      <Gap level={level}></Gap>
      <IconButton icon="document"></IconButton>
      <div>{project.name}</div>
    </div>
  );
};

export default ProjectNode;
