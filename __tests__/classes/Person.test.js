const Person = require("../../classes/Person")

describe("A test suite for the Person class", () => {
    let Nicole;

    beforeEach(() => {
        Nicole= new Person("Nicole", "Brazil", [])
    })

    test("Can create an instance of the `Person` class", () => {
        expect(Nicole instanceof Person).toBe(true)
    })

    test("`name` and `destination` have been assigned correctly", () => {
        expect(Nicole.name).toBe("Nicole");
        expect(Nicole.destination).toBe("Brazil")
    })

    test("`bags` initializes as an empty array", () => {
        expect(Nicole.bags).toStrictEqual([]);
    })

    test("`addBags()` adds a bag to the `bags` array", () => {
        Nicole.addBags();
        expect(Nicole.bags.length).toBe(1)
    })
})