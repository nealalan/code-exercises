/* eslint-disable no-unused-vars */

class Mammal {
    constructor(name = ``) {
        this.name = name;
        this.offspring = [];
        this.animal = `Mammal`;
        this.breed = ``;
        this.says = ``;
        this.color = `transparent`;
    }
    sayHello() { return `My name is ${this.name}, I'm a ${this.animal}`; }
    haveBaby() {
        //expect(child.name).toEqual('Baby Joe');
        let child = new Mammal(`Baby ${this.name}`); 
        //expect(myMammal.offspring).toEqual([child]);
        this.offspring.push(child);
        // let child = myMammal.haveBaby(); // what is returned from have baby?
        return child;
    }
}
class Cat extends Mammal {
    constructor(name, color) {
        // call the parents constructor
        super(name);
        this.color = color;
        this.animal = `Cat`;
        this.says = `meow`;
    }
    meow() { return this.says; }
    haveBaby(color) {
        let child = new Cat(`Baby ${this.name}`, color);

        this.offspring.push(child);
        return child;
    }
}
class Dog extends Mammal {
    constructor(name, breed) {
        super(name);
        this.breed = breed;
        this.animal = `Dog`;
        this.says = `RUFF RUFF`;
    }
    bark() { return this.says; }
    haveBaby(breed) {
        let child = new Dog(`Baby ${this.name}`, breed);
        this.offspring.push(child);
        return child;
    }
}
