abstract class Geometric {
    private name: string;
    constructor(name: string) {
        this.name = name;
    }
    getName() {
        return this.name;
    }
    abstract getArea():number;
    abstract getPerimeter():number;
}