import { getCharacter } from "../snapshot";
import rick from "../rick.json";

describe("Prueba de snapshots ", () => {
  test("Snapshot", () => {
    expect(getCharacter(rick)).toMatchSnapshot();
  });
  test("Siempre fallara la instantanea", () => {
    const user = {
      createAt: new Date(),
      id: Math.floor(Math.random() * 20)
    };
    expect(user).toMatchSnapshot();
  });
  test("Tenemos una excepcion dentro del codigo", () => {
    const user = {
      id: Math.floor(Math.random() * 20),
      name: "Oscar Bargas"
    };
    expect(user).toMatchSnapshot({
      id: expect.any(Number)
    });
  });
});
