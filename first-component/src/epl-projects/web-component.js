import { h, render } from "preact";

import Projects from "./Projects";

import styles from "./styles.css";
const styleSheet = new CSSStyleSheet();
styleSheet.replace(styles[0][1]);

class WebComponent extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });

    this.shadowRoot.adoptedStyleSheets = [styleSheet];
    const name = "rene";
    render(<Projects name={name}></Projects>, this.shadowRoot);
  }

  connectedCallback() {}
}

customElements.define("epl-projects", WebComponent);
