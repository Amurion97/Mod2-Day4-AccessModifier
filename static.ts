class Human {
    static population: number = 0;
    name: string;
    constructor(name: string) {
        this.name = name;
        Human.population ++;
    }

    breed () {
        Human.population ++;
    }
}

let Giang = new Human("Giang");
let Hieu = new Human("Hieu")

Giang.breed();
console.log(Human.population);