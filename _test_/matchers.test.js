 describe("Comparadores comounes", () => {
     const user = {
         name : "Marco",
         lastName : "Macias"
     }
     const user2 = {
        name : "Marco",
        lastName : "Macias"
     }
     test("igualdad de elementos", () => {
         expect(user).toEqual(user2)
     })
     test("No son exactamente iguales", () => {
         expect(user).not.toEqual(user2)
     })
 })
