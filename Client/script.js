// Hello();

const onSelectFolder = (val) => {
  console.log("GOT Folder", val.detail);
};

const onSelectProject = (val) => {
  console.log("GOT Project", val.detail);
};

window.onload = () => {
  const projects = document.getElementById("projects");
  projects.addEventListener("selectFolder", onSelectFolder);
  projects.addEventListener("selectProject", onSelectProject);

  console.log("init");
};
