/**
 *
 * @param {Array} input
 * @param {Number} size
 */
const chunkEquals = function(input, size) {
  const arr = input.slice();
  const res = [];
  const itemSize = Math.floor(arr.length / size);

  for (let i = 0; i < size; i++) {
    res.push(arr.splice(0, itemSize));
  }

  if (arr.length) {
    for (let key in arr) {
      res[key] = [].concat(res[key], arr[key]).filter(Boolean);
    }
  }

  return res;
};

module.exports = chunkEquals;
