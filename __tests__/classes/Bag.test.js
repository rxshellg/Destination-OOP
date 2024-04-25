const Bag = require("../../classes/Bag");

describe("A test suite for the Bag class", () => {
    let baggy;

    beforeEach(() => {
        baggy = new Bag(51, 101)
    })

    test("Can create an instance of the `Bag` class", () => {
        expect(baggy.weight).toBe(51);
        expect(baggy.id).toBe(101);
    })

    test("The `weight` and `id` have been assigned correctly", () => {
        expect(typeof baggy.weight).toBe("number");
        expect(typeof baggy.id).toBe("number");
    })

    test("The person assigned to a `Bag` is initialized with a value of `null`", () => {
        expect(baggy.getOwner()).toBe(null)
    })
    
    /*test("Can get the initial `owner` using `getOwner`", () => {
        
        expect(baggy.)
    })*/
})