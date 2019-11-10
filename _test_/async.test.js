import { getDataFromApi } from "../promise";

describe("Testing using promises with async/await", () => {
  test("Calling an API", async () => {
    const { results } = await getDataFromApi(
      "https://rickandmortyapi.com/api/character/"
    );
    expect(results.length).toBeGreaterThan(0);

    const { name } = await getDataFromApi(
      "https://rickandmortyapi.com/api/character/1"
    );
    expect(name).toEqual("Rick Sanchez");
  });

  test("Peticion a una api con error", async () => {
    const apiError = "http://httpstat.us/404";
    const peticion = getDataFromApi(apiError);
    await expect(peticion).rejects.toEqual(
      Error("Request failed with status code 404")
    );
  });
  test("Resulve un hola", async () => {
    await expect(Promise.resolve("hola")).resolves.toBe("hola");
    await expect(Promise.reject("Error")).rejects.toBe("Error");
  });
});
