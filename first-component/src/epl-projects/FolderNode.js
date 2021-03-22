import { h } from "preact";
import { useEffect, useState } from "preact/hooks";

import TreeNodes from "./TreeNodes";
import Gap from "./Gap";
import OpenClose from "./OpenClose";
import IconButton from "./icon/IconButton";

const FolderNode = ({ level, folder, onSelectFolder, onSelectProject }) => {
  const [showChildren, setShowChildren] = useState(false);

  useEffect(() => {
    setShowChildren(folder.showChildren);
  }, [folder]);

  const clickFolder = () => {
    setShowChildren(!showChildren);
    onSelectFolder(folder);
  };

  return (
    <div>
      <div class="folder show-hover" onClick={clickFolder}>
        <Gap level={level}></Gap>
        <OpenClose close={showChildren}></OpenClose>
        <IconButton icon="folder"></IconButton>
        <div>{folder.name}</div>
      </div>
      {showChildren && (
        <TreeNodes
          level={level + 1}
          onSelectFolder={onSelectFolder}
          onSelectProject={onSelectProject}
          folders={folder.childFolders}
          projects={folder.projects}
        ></TreeNodes>
      )}
    </div>
  );
};

export default FolderNode;
