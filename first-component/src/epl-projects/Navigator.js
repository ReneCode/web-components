import { h } from "preact";
import { useEffect, useState } from "preact/hooks";

import { ProjectNodes } from "./ProjectNodes";
import { apiGetProjects, apiGetFolder } from "./api";

const Navigator = () => {
  const [projects, setProjects] = useState([]);
  const [root, setRoot] = useState({ folders: [] });

  useEffect(() => {
    const loadProjects = async () => {
      const result = await apiGetProjects();
      // console.log(result);

      setProjects(result);
    };
    const loadFolders = async () => {
      const result = await apiGetFolder();
      console.log(result);
      const a = {
        folders: result.childFolders.sort((a, b) =>
          a.name.toLowerCase() < b.name.toLowerCase() ? -1 : 1
        ),
      };

      setRoot(a);
    };

    loadProjects();
    loadFolders();
  }, []);

  return (
    <div>
      <ProjectNodes folders={root.childFolders}></ProjectNodes>
      {root.folders.map((folder) => {
        return <div>{folder.name}</div>;
      })}
    </div>
  );
};

export default Navigator;
