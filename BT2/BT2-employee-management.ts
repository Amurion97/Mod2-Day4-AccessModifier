import {Employee} from "./Employee";

const readline = require('readline')

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

class EmployeeManager {
    private static employeeList: Employee[] = [];

    static show() {
        console.log(`There are total ${this.employeeList.length} employees:`);
        this.employeeList.forEach(function (value, index, array) {
            console.log(`No: ${index}| Ho va ten: ${value.surname} ${value.firstname}| Vi tri: ${value.role}`);
        })
    }

    static addEmployee(people: Employee): void {
        this.employeeList.push(people);
    }

    static showDetail(index: number): void {
        let value = this.employeeList[index];
        console.log(`No: ${index}. Ho va ten: ${value.surname} ${value.firstname}. Ngay sinh: ${value.dateOfBirth}. Dia chi: ${value.address}. Vi tri: ${value.role}`);
    }

    static deleteEmployee(index: number): void {
        this.employeeList.splice(index, 1);
    }

    static getIndexToEdit(): number {
        let index: number = -1;
        const question1 = () => {
            return new Promise((resolve, reject) => {
                rl.question('Enter user ID (index) to change: ', (answer: string) => {
                    // console.log(`Thank you for your valuable feedback: ${answer}`)
                    index = Number(answer);
                    resolve(Promise);
                })
            })
        }
        const main = async () => {
            await question1();
        }
        main();
        return index;
    }


    static editEmployee(index: number) {
        // let index:number;
        // const question1 = () => {
        //     return new Promise((resolve, reject) => {
        //         rl.question('Enter user ID (index) to change: ', (answer: string) => {
        //             // console.log(`Thank you for your valuable feedback: ${answer}`)
        //             index = Number(answer);
        //             resolve(Promise);
        //         })
        //     })
        // }
        const question2 = () => {
            return new Promise((resolve, reject) => {
                rl.question('Enter new surname: ', (answer: string) => {
                    // console.log(`Thank you for your valuable feedback: ${answer}`)
                    EmployeeManager.employeeList[index].surname = answer;
                    resolve(Promise)
                })
            })
        }
        const question3 = () => {
            return new Promise((resolve, reject) => {
                rl.question('Enter new firstname: ', (answer: string) => {
                    // console.log(`Thank you for your valuable feedback: ${answer}`)
                    EmployeeManager.employeeList[index].firstname = answer;
                    resolve(Promise)
                })
            })
        }
        const question4 = () => {
            return new Promise((resolve, reject) => {
                rl.question('Enter new DoB: ', (answer: string) => {
                    // console.log(`Thank you for your valuable feedback: ${answer}`)
                    EmployeeManager.employeeList[index].dateOfBirth = answer;
                    resolve(Promise)
                })
            })
        }
        const question5 = () => {
            return new Promise((resolve, reject) => {
                rl.question('Enter new address: ', (answer: string) => {
                    // console.log(`Thank you for your valuable feedback: ${answer}`)
                    EmployeeManager.employeeList[index].address = answer;
                    resolve(Promise)
                })
            })
        }
        const question6 = () => {
            return new Promise((resolve, reject) => {
                rl.question('Enter new role: ', (answer: string) => {
                    // console.log(`Thank you for your valuable feedback: ${answer}`)
                    EmployeeManager.employeeList[index].role = answer;
                    resolve(Promise)
                })
            })
        }

        const main = async () => {
            // await question1();
            console.log("Thong tin ban dau: ")
            EmployeeManager.showDetail(index);
            await question2();
            await question3();
            await question4();
            await question5();
            await question6();
            console.log("Thong tin sau khi sua: ")
            EmployeeManager.showDetail(index);
            // this.show();
            await this.showMenu();
        }
        main()
    }

    static showMenu(): void {
        let index: number = -1;
        rl.question(`${"-".repeat(20)}
        Menu:
        1. Show all employees
        2. Add an employee
        3. Edit an employee
        4. Remove an employee
        5. Quit
        Your option: `, (answer: string) => {
            console.log("=".repeat(20))
            switch (answer) {
                case "1":
                    this.show();
                    this.showMenu();
                    break;
                case "2":
                    this.employeeList.push(new Employee("<none>", "<none>", "<none>", "<none>", "<none>"));
                    this.editEmployee(this.employeeList.length - 1);
                    break;
                case "3":

                    const questionEdit = () => {
                        return new Promise((resolve, reject) => {
                            rl.question('Enter user ID (index) to change: ', (answer: string) => {
                                // console.log(`Thank you for your valuable feedback: ${answer}`)
                                index = Number(answer);
                                resolve(Promise);
                            })
                        })
                    }
                    const edit = async () => {
                        await questionEdit();
                        // console.log(index);
                        if (isNaN(index) || index < 0 || index >= EmployeeManager.employeeList.length) {
                            console.log("wrong input");
                            this.showMenu();
                        } else {
                            this.editEmployee(index);
                        }
                    }
                    edit();
                    break;
                case "4":
                    const questionRemove = () => {
                        return new Promise((resolve, reject) => {
                            rl.question('Enter user ID (index) to remove: ', (answer: string) => {
                                // console.log(`Thank you for your valuable feedback: ${answer}`)
                                index = Number(answer);
                                resolve(Promise);
                            })
                        })
                    }
                    const remove = async () => {
                        await questionRemove();
                        if (isNaN(index) || index < 0 || index >= EmployeeManager.employeeList.length) {
                            console.log("wrong input");
                            this.showMenu();
                        } else {
                            this.deleteEmployee(index);
                        }
                        await this.showMenu();
                    }
                    remove();
                    break;
                case "5":
                    rl.close();
                    // this.endInput();
                    break;
            }
            // this.showMenu();
        });
    }

}

let staff1: Employee = new Employee("Nguyen", "Giang", "1997-10-22", "Ha Noi", "Dev");
EmployeeManager.addEmployee(staff1);
// EmployeeManager.show();
EmployeeManager.showMenu();
// EmployeeManager.editEmployee();