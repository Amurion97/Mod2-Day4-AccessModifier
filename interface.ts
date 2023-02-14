interface Human {
    name: string,
    age: number
}
interface Animal {
    species: string,
    legs: number
}
class Dog {
    bark () {
        console.log("Woof Woff")
    }
}
class Boy extends Dog implements Human,Animal {
    name:string;
    age: number;
    species: string;
    legs: number;
    constructor(name: string, age: number, species: string,legs:number) {
        super();
        this.name = name;
        this.age = age;
        this.species = species;
        this.legs = legs;
    }

}
let Ling = new Boy("Ling", 25, "Homo", 2);
Ling.bark();
let aDog = new Dog();
aDog.bark();