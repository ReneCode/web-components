import { h } from "preact";
import { useEffect, useState } from "preact/hooks";

import TreeNodes from "./TreeNodes";

const FolderNode = ({ folder }) => {
  const [showChildren, setShowChildren] = useState(false);

  useEffect(() => {
    setShowChildren(folder.showChildren);
  }, [folder]);

  const clickFolder = () => {
    console.log("folder-click", folder);
    setShowChildren(!showChildren);
  };

  return (
    <div>
      <div class="folder" onClick={clickFolder}>
        <span>{showChildren ? "-" : ">"}</span>
        <span>{folder.name}</span>
      </div>
      {showChildren && (
        <TreeNodes
          folders={folder.childFolders}
          projects={folder.projects}
        ></TreeNodes>
      )}
    </div>
  );
};

export default FolderNode;
