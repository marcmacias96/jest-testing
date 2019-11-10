//despues de cada prueba
afterEach(() => console.log("despues de cada prueba"));
afterAll(() => console.log("despues de todas las pruebas"));

//antes de cada prueba
beforeEach(() => console.log("despues de cada prueba"));
beforeAll(() => console.log("despues de todas la pruebas"));

describe("Preparar para antes de ejecutar", () => {
  test("es verdader", () => {
    expect(true).toBeTruthy();
  });
});
