import { h } from "preact";
import { useEffect, useState } from "preact/hooks";

import TreeNodes from "./TreeNodes";
import Gap from "./Gap";
import OpenClose from "./OpenClose";

const FolderNode = ({ level, folder, onSelect }) => {
  const [showChildren, setShowChildren] = useState(false);

  useEffect(() => {
    setShowChildren(folder.showChildren);
  }, [folder]);

  const clickFolder = () => {
    setShowChildren(!showChildren);
    onSelect(folder);
  };

  return (
    <div>
      <div class="folder" onClick={clickFolder}>
        <Gap level={level}></Gap>
        <OpenClose close={showChildren}></OpenClose>
        <div>{folder.name}</div>
      </div>
      {showChildren && (
        <TreeNodes
          level={level + 1}
          onSelect={onSelect}
          folders={folder.childFolders}
          projects={folder.projects}
        ></TreeNodes>
      )}
    </div>
  );
};

export default FolderNode;
