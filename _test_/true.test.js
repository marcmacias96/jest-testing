import { isTrue, isFalse, isNull, isUndefined } from "../true";

describe("Probar resultados nulos, falsos, indefinidos y verdaderos", () => {
  test("null", () => {
    expect(isNull()).toBeNull();
  });
  test("falsos", () => {
    expect(isFalse()).toBeFalsy();
  });
  test("verdades", () => {
    expect(isTrue()).toBeTruthy();
  });
  test("indefinidos", () => {
    expect(isUndefined()).toBeUndefined();
  });
});
