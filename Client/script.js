// Hello();

const onClick = (val) => {
  console.log("GOT CLICK", val);
};

window.onload = () => {
  const projects = document.getElementById("projects");
  projects.addEventListener("select", onClick);

  console.log("init");
};
