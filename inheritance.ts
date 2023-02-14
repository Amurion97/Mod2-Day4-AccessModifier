class Human {
    name: string;
    age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    getOlder(){
        this.age ++;
    }
}
let aMan: Human = new Human("Giang", 25);
aMan.getOlder();
console.log(aMan);
class Boy extends Human {
    dog: string = "";
    static GENDER = "MALE"

    // constructor(name: string, age: number, dog: string) {
    //     // super(name, age);
    //     this.dog = dog;
    // }

    haveADog(dogName: string) {
        this.dog = dogName;
    }
}
let aBoy: Boy = new Boy("Hung", 10);
aBoy.getOlder();
aBoy.haveADog("Milu");
console.log(Boy.GENDER)
