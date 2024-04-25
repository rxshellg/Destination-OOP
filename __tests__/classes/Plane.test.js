const Plane = require("../../classes/Plane");
const Person = require("../../classes/Person");

describe("A test suite for the plane class", () => {
    let jetBluePlane;

    beforeEach(() => {
        jetBluePlane = new Plane("Jet Blue", "New York", "Brazil");
    })

        test("Test that `company`, `origin`, and `destination` are assigned to the correct value", () => {
            expect(jetBluePlane.company).toBe("Jet Blue");
            expect(jetBluePlane.origin).toBe("New York");
            expect(jetBluePlane.destination).toBe("Brazil");
        })

        test("`passengers` initializes as an empty array", () => {
            expect(jetBluePlane.passengers).toStrictEqual([]);
        })

        test("`addPassenger` adds a passenger to the `passengers` array", () => {
            let Rashell = new Person("Rashell", "Boston");
            jetBluePlane.addPassenger();
            expect(jetBluePlane.passengers.length).toBe(1);
        })
})
