import { h } from "preact";
import { useEffect, useState } from "preact/hooks";

import Gap from "./Gap";

const ProjectNode = ({ level, project, onSelect }) => {
  const clickProject = () => {
    onSelect(project);
  };

  return (
    <div class="project" onClick={clickProject}>
      <Gap level={level}></Gap>
      <div>{project.name}</div>
    </div>
  );
};

export default ProjectNode;
