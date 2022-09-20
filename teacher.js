// Inheritance 

import { Person } from './person.js'

export class Teacher extends Person {
    constructor(name, degree) {
        super(name)
        this.degree = degree

    }
    teach() {
        console.log("teach123")
    }
}

const teacher1 = new Teacher('Miyagi', "BS")

console.log(teacher1.degree)