const template = document.createElement("template");
// <style>
//   div {
//     background-color: lightgray;
//   }
// </style>

template.innerHTML = `
<div>Hello from Shadow-component</div>
`;

const bgRed = new CSSStyleSheet();
bgRed.replace("div { background: purple; }");

class ShadowComponent extends HTMLElement {
  constructor() {
    super();

    const root = this.attachShadow({ mode: "open" });
    root.adoptedStyleSheets = [bgRed];
    root.appendChild(template.content.cloneNode(true));
  }
}

customElements.define("x-shadow", ShadowComponent);
