/**
 *
 * @param {Array} input
 * @param {Number} size
 */
const chunkEquals = function(input, size) {
  const res = [];
  const itemSize = Math.floor(input.length / size);

  for (let i = 0; i < size; i++) {
    res.push(input.splice(0, itemSize));
  }

  if (input.length) {
    for (let key in input) {
      res[key] = [].concat(res[key], input[key]).filter(Boolean);
    }
  }

  return res;
};

module.exports = chunkEquals;
