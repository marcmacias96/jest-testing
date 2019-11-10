import { arrayFruits, arrayColors } from "../arrays";

describe("Comprobar que existe un elemento", () => {
  test("Contiene una banana?", () => {
    expect(arrayFruits()).toContain("banana");
  });
  test("Comprobar que no contiene un platano", () => {
    expect(arrayFruits()).not.toContain("platano");
  });
  test("Comprobar el tam;o de un arreglo", () => {
    expect(arrayFruits()).toHaveLength(6);
  });
  test("Comprobar que existe un color", () => {
    expect(arrayColors()).toContain("azul");
  });
});
