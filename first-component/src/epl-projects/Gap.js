import { h } from "preact";

import { range } from "../util/range";

const Gap = ({ level }) => {
  let gaps = range(level);

  return (
    <div>
      {gaps.map((e) => {
        return <div class="gap"></div>;
      })}
    </div>
  );
};

export default Gap;
