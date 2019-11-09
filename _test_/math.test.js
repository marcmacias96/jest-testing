import { sumar , multi, restar , div } from "./../math"

describe("Calculos matematicos ", () =>{
    test("Prueba de sumas", () => {
        expect(sumar(1,1)).toBe(2)
    })
    test("Prueba de multiplicaciones", () => {
        expect(multi(5,5)).toBe(25)
    })
    test("Prueba de divisiones", () => {
        expect(div(5,5)).toBe(1)
    })
    test("Prueba de restas", () => {
        expect(restar(25,5)).toBe(20)
    })
})

