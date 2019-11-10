import { numbers } from "../numbers";

describe("Compareacion de numeros", () => {
  test("Mayor que", () => {
    expect(numbers(2, 2)).toBeGreaterThan(3);
  });
  test("Mayor que o igual", () => {
    expect(numbers(2, 2)).toBeGreaterThanOrEqual(4);
  });
  test("Menor que o igual", () => {
    expect(numbers(2, 2)).toBeLessThanOrEqual(4);
  });
  test("numeros flotantes", () => {
    expect(numbers(0.2, 0.2)).toBeCloseTo(0.4);
  });
});
