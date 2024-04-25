const Person = require("./Person.js")

class Bag {
    constructor(weight, id) {
        this.weight = weight;
        this.id = id;
        this.owner = null;
    }

    getOwner() {
        return this.owner;
    }

    assignOwner(Person) {
        this.owner = Person.name;
    }

}


module.exports = Bag;