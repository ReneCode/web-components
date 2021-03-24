import { h } from "preact";
import { useEffect, useState } from "preact/hooks";

import TreeNodes from "./TreeNodes";
import { apiGetProjects, apiGetFolder } from "./api";

const Navigator = ({ host, token, onSelectFolder, onSelectProject }) => {
  const [projects, setProjects] = useState([]);
  const [root, setRoot] = useState({ folders: [], projects: [] });

  useEffect(() => {
    const loadProjects = async () => {
      const result = await apiGetProjects({ host, token });
      // console.log(result);

      setProjects(result);
    };
    const loadFolders = async () => {
      const result = await apiGetFolder({ host, token });

      const a = {
        folders: result.childFolders
          .map((folder) => {
            return {
              ...folder,
              level: 0,
              showChildren: false,
            };
          })
          .sort((a, b) => {
            return a.name.toLowerCase() < b.name.toLowerCase() ? -1 : 1;
          }),
        projects: result.projects
          // .map((project) => {
          //   return { name: project.name };
          // })
          .sort((a, b) => {
            return a.name.toLowerCase() < b.name.toLowerCase() ? -1 : 1;
          }),
      };

      setRoot(a);
    };

    loadProjects();
    loadFolders();
  }, []);

  return (
    <div class="navigator">
      <p>Navigator for projects</p>
      <TreeNodes
        level={0}
        folders={root.folders}
        projects={root.projects}
        onSelectFolder={onSelectFolder}
        onSelectProject={onSelectProject}
      ></TreeNodes>
    </div>
  );
};

export default Navigator;
