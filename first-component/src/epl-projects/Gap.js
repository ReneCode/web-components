import { h } from "preact";

import { range } from "../util/range";

const Gap = ({ level }) => {
  let gaps = range(level);

  return (
    <div class="flex-row">
      {gaps.map((e) => {
        return <div class="gap"></div>;
      })}
    </div>
  );
};

export default Gap;
