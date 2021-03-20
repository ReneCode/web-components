import { h, render } from "preact";

import Projects from "./Projects";

// const styles = require("./styles.css");
// const styleSheet = new CSSStyleSheet();
// console.log(">>>", styles);
// styleSheet.replace(styles[0][1]);

class WebComponent extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });

    // this.shadowRoot.adoptedStyleSheets = [styleSheet];
    const name = "Reinhard";
    render(<Projects name={name}></Projects>, this.shadowRoot);
  }

  connectedCallback() {}
}

export default WebComponent;
