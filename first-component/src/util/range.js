export const range = (count) => {
  if (!count) {
    return [];
  }
  return new Array(count).fill(0).map((_, idx) => idx);
};
