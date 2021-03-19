import { h, render } from "preact";

import Projects from "./Projects";

class WebComponent extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });

    const name = "rene";
    render(<Projects name={name}></Projects>, this.shadowRoot);
  }

  connectedCallback() {}
}

customElements.define("epl-projects", WebComponent);
