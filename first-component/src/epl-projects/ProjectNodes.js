import { h } from "preact";

const ProjectNodes = ({ folders, projects }) => {
  return (
    <div>
      {folder.map((folder) => {
        return <div>{folder.name}</div>;
      })}
    </div>
  );
};

export default ProjectNodes;
