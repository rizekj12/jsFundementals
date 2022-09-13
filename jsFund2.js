// .map method 


const colors = ['red', 'green', 'blue']


// let items = colors.map(function(color){
//     return '<li>' + color + '</li>'
// })

let items2 = colors.map(color => `<li>${color}</li>`)

let nums = [2, 3, 4, 5]

let added = nums.map(number => number + 1)

// console.log(items2)



// object desstructering 

const address = {
    street: '1 blue st',
    city: 'Midgar',
    country: 'Westoros'
}

// const street = address.street
// const city = address.city
// const country = address.country

// instead of using the method above use object destructering as
// demonsrated below 

// street is an example of how to give the variable 
// an entirley new name

const { street: st, city , country } = address

// console.log(st)

 // spread operator 

 const first = [1,2,3]
 const second = [4,5,6]

 const combined = first.concat(second)
 // combined using the spread operator 
 // the spread operator makes it much easier to add items
 // to an array as exemplified with the 'b' variable
 const combined2 = [...first,'b',...second]

//  console.log(combined2)

 // this works for objects as well 

 let one = { name: 'Josh' }
 let two = { job: 'Software Engineer' }

 let oneAndTwo = {...one, ...two}

//  console.log(oneAndTwo)

// Classes


class Person {
    constructor(name){
        this.name = name
    }
    walk(){
        console.log('hello there')
    }
    
    }

    const person = new Person('Pam')

    // console.log(person.walk())

    // Inheritance 

    class Teacher extends Person {
        constructor(name, degree){
            super(name)
            this.degree = degree

        }
        teach(){
            console.log("teach123")
        }
    }

    const teacher1 = new Teacher('Miyagi', "BS")

    console.log(teacher1.degree)