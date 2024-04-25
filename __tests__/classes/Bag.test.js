const Bag = require("../../classes/Bag");
const Person = require("../../classes/Person")

describe("A test suite for the Bag class", () => {
    let baggy;

    beforeEach(() => {
        baggy = new Bag(51, 101)
    })

    test("Can create an instance of the `Bag` class", () => {
        expect(baggy instanceof Bag).toBe(true);
    })

    test("The `weight` and `id` have been assigned correctly", () => {
        expect(baggy.weight).toBe(51);
        expect(baggy.id).toBe(101);
    })

    test("The person assigned to a `Bag` is initialized with a value of `null`", () => {
        expect(baggy.getOwner()).toBe(null)
    })
    
    test("Can get the initial `owner` using `getOwner`", () => {
        const Nicole = new Person("Nicole", "Brazil")
        baggy.assignOwner(Nicole)
        expect(baggy.getOwner()).toBe("Nicole")
    })

    test("Can update `owner` with a `Person` assigned to a `Bag` using `assignOwner()`", () => {
        const Nicole = new Person("Nicole", "Brazil")
        baggy.assignOwner(Nicole)
        expect(baggy.owner).toBe("Nicole")
    })

})