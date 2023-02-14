enum Role {
    Admin = 1,
    User
}
class User {
    private _name: string;
    private _email: string;
    public _role: number;

    constructor(name: string, email: string, role: number) {
        this._name = name;
        this._email = email;
        this._role = role;
    }
    get name(): string {
        return this._name;
    }

    set name(value: string) {
        this._name = value;
    }

    get email(): string {
        return this._email;
    }

    set email(value: string) {
        this._email = value;
    }

    get role(): number {
        return this._role;
    }

    set role(value: number) {
        this._role = value;
    }

    getInfo () {
        console.log(`Username: ${this.name} has an email ${this.email}.`);
    }

    isAdmin () {
        if (this.role === 1) {
            console.log("This user is an admin.");
        } else {
            console.log("This user is an user.");
        }
    }
}

let user1: User = new User("Giang", "giang@123", Role.User);
user1.getInfo();
user1.isAdmin();