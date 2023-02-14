var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Human = /** @class */ (function () {
    function Human(name, age) {
        this.name = name;
        this.age = age;
    }
    Human.prototype.getOlder = function () {
        this.age++;
    };
    return Human;
}());
var aMan = new Human("Giang", 25);
aMan.getOlder();
console.log(aMan);
var Boy = /** @class */ (function (_super) {
    __extends(Boy, _super);
    function Boy() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.dog = "";
        return _this;
    }
    // constructor(name: string, age: number, dog: string) {
    //     // super(name, age);
    //     this.dog = dog;
    // }
    Boy.prototype.haveADog = function (dogName) {
        this.dog = dogName;
    };
    Boy.GENDER = "MALE";
    return Boy;
}(Human));
var aBoy = new Boy("Hung", 10);
aBoy.getOlder();
aBoy.haveADog("Milu");
console.log(Boy.GENDER);
