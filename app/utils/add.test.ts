import { add, multi } from "./add";

test("Test functions that import server-only", () => {
  expect(add(1, 2)).toBe(3);
});

test("Test functions that import server-only", () => {
  expect(multi(2, 2)).toBe(4);
});
