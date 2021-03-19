class BasicComponent extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.shadowRoot.innerHTML = `
      <style>:host{display:block}</style>
      This is the basic component
    `;
  }

  // connectedCallback() {
  //   this.innerHTML = "<h1>Hello Project</h1>";
  //   // const template = document.getElementById("project-component");
  // }
}

customElements.define("x-basic", BasicComponent);
