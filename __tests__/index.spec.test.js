const ArrayChunkEquals = require("../index");
describe("Array Chunk Equals Tests", () => {
  test("should chunk equals works on 2 length array with 2 divide", () => {
    expect(ArrayChunkEquals([1, 2], 2)).toEqual([[1], [2]]);
  });

  test("should chunk equals works on 3 length array 2 divide", () => {
    expect(ArrayChunkEquals([1, 2, 3], 2)).toEqual([[1, 3], [2]]);
  });

  test("should chunk equals works on 4 length array with 3 divide", () => {
    expect(ArrayChunkEquals([1, 2, 3, 4], 3)).toEqual([[1, 4], [2], [3]]);
  });
});
