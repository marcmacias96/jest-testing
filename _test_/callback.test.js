import { callbackMe } from "../callback";

describe("Pruebas de callback", () => {
  test("Callback", done => {
    function otherCallback(data) {
      expect(data).toBe("hola pelado");
      done();
    }
    callbackMe(otherCallback);
  });
});
