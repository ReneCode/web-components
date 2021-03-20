import { h } from "preact";

const OpenClose = ({ close }) => {
  return <div class="open-close">{close ? " - " : " > "}</div>;
};

export default OpenClose;
