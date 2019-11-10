import { getDataFromApi } from "../promise";

describe("Probando promesas", () => {
  test("Haciendo una peticion get a una api", done => {
    getDataFromApi("http://rickandmortyapi.com/api/character").then(data => {
      expect(data.results.length).toBeGreaterThan(0);
      done();
    });
  });
  test("Resuleve un hola", () => {
    return expect(Promise.resolve("hola")).resolves.toBe("hola");
  });

  test("Rechaza con un error", () => {
    return expect(Promise.reject("Error")).reject.toBe("Error");
  });
});
