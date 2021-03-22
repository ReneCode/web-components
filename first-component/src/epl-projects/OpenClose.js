import { h } from "preact";
import IconButton from "./icon/IconButton";

const OpenClose = ({ close }) => {
  return <IconButton icon={close ? "arrow-down" : "arrow-right"}></IconButton>;
  // return <div class="open-close">{close ? " - " : " > "}</div>;
};

export default OpenClose;
