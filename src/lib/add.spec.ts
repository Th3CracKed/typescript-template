import { add } from "./add";

describe('test add', () => {
  it('should return correct sum', () => {
    expect(add(1, 2)).toEqual(3);
  });
});
