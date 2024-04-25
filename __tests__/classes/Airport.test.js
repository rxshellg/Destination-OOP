const Airport = require("../../classes/Airport");
const Plane = require("../../classes/Plane");

describe("A test suite for the Airport class", () => {
    let JFK;

    beforeEach(() => {
        JFK = new Airport("John F. Kennedy", "JFK");
    })

    test("`name` has been assigned correctly", () => {
        expect(JFK.name).toBe("John F. Kennedy");
    })

    test("`airportCode` is the correct value", () => {
        expect(JFK.airportCode).toBe("JFK");
    })

    test("`planes` array initializes as an empty array", () => {
        expect(JFK.planes).toStrictEqual([]);
    })

    test("`addPlane()` adds a plane to the `plane` array", () => {
        let plany = new Plane("Jet Blue", "Brazil", "New York");
        JFK.addPlane(plany);
        expect(JFK.planes.length).toBe(1);
    })
})