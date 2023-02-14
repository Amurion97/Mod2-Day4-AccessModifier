export class Employee {
    private _surname: string;
    private _firstname: string;
    private _dateOfBirth: string;
    private _address: string;
    private _role: string;

    constructor(surname: string, firstname: string, dateOfBirth: string, address: string, role: string) {
        this._surname = surname;
        this._firstname = firstname;
        this._dateOfBirth = dateOfBirth;
        this._address = address;
        this._role = role;
    }

    get surname(): string {
        return this._surname;
    }

    set surname(value: string) {
        this._surname = value;
    }

    get dateOfBirth(): string {
        return this._dateOfBirth;
    }

    set dateOfBirth(value: string) {
        this._dateOfBirth = value;
    }

    get address(): string {
        return this._address;
    }

    set address(value: string) {
        this._address = value;
    }

    get role(): string {
        return this._role;
    }

    set role(value: string) {
        this._role = value;
    }

    get firstname(): string {
        return this._firstname;
    }

    set firstname(value: string) {
        this._firstname = value;
    }
}
