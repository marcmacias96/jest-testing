describe("Comprobar cadenas de texto", () => {
  const txt = "un bonito dia para todos";

  test("Debe contener el siguiente Texto", () => {
    expect(txt).toMatch("bonito");
  });
  test("No debe contener el siguiente Texto", () => {
    expect(txt).not.toMatch("feo");
  });
  test("Comprobar el tama;o de la cadena", () => {
    expect(txt).toHaveLength(24);
  });
});
