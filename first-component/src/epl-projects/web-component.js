import { h, render } from "preact";

import Projects from "./Projects";

// will be raw-loaded by webpack
import styles from "./styles.scss";
const styleSheet = new CSSStyleSheet();
styleSheet.replace(styles);

class WebComponent extends HTMLElement {
  // _token = "";

  constructor() {
    super();
    this.attachShadow({ mode: "open" });

    // this.selectEvent = new CustomEvent("select", {
    //   bubbles: true,
    //   cancelable: false,
    //   composed: true,
    // });

    this.shadowRoot.adoptedStyleSheets = [styleSheet];
    const name = "rene";
    // render(<Projects token={this.token}></Projects>, this.shadowRoot);
  }

  static get observedAttributes() {
    return ["host", "token"];
  }
  attributeChangedCallback(name, oldValue, newValue) {
    switch (name) {
      case "token":
      case "host":
        break;
    }
    if (this.host && this.token) {
      this.render();
    }
  }
  get token() {
    return this.getAttribute("token");
  }
  set token(value) {
    this.setAttribute("token", value);
  }

  get host() {
    return this.getAttribute("host");
  }
  set host(value) {
    this.setAttribute("host", value);
  }

  connectedCallback() {
    console.log("connect");
    this.render();
  }

  render() {
    render(
      <Projects
        host={this.host}
        token={this.token}
        onSelectFolder={(e) =>
          this.dispatchEvent(new CustomEvent("selectFolder", { detail: e }))
        }
        onSelectProject={(e) =>
          this.dispatchEvent(new CustomEvent("selectProject", { detail: e }))
        }
      ></Projects>,
      this.shadowRoot
    );
  }
}

customElements.define("epl-projects", WebComponent);
