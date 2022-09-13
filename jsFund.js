function maxOfTwo(firstNum, secondNum){
    return Math.max(firstNum, secondNum)
}
function isLandscape(width, height){
  return (width > height)
}
function checkSpeed(speed){
let speedLimit = 70
let aboveSpeed = speed - speedLimit
let pointsPerMile = 5
const points = Math.floor(aboveSpeed / pointsPerMile)  
if (speed <= speedLimit){
  return "Ok"
}else if (points >= 12){
    return "license suspended"
  }else{
    return `Points: ${points}`
  }
}
function countNums(limit){
 for(i=0;i<=limit;i++){
   if (i % 2 === 0){
     console.log(i, "even")
   }else{
     console.log(i, "odd")
   }
 } 
}
function countTruthy(array){
  let truthCount = 0;
  for(i=0;i<array.length;i++){
    if(array[i]){
      truthCount++;
    }
  }
  return truthCount
}
function showProperties(obj){
  for (let key in obj){
    if(typeof obj[key] === "string"){
      console.log(`${key}: ${obj[key]}`)
    }
  }
}
function sumOf3and5(limit){
  let sum = 0
  for(i=0;i<=limit;i++){
    if(i % 3 === 0 || i % 5 === 0){
      sum += i
    }
  }
  return sum
}
function showStars(num){
  for(i=1;i<=num;i++){
    let pattern = ''
    for(j=0;j<i;j++){
      pattern += '*'
    }
    console.log(pattern)
  }
}

function checkPrime(number){
   let isPrime = true 
  
    for (let factor = 2; factor < number; factor++){

   
      
      if (number % factor === 0){
        isPrime = false
      }
      
    }
  return isPrime
}




function showPrimes(limit){
  for (i=2;i<limit;i++){
    if (checkPrime(i)){
      console.log(i)
    }
  } 
}

// console.log(showPrimes(10))


function Circle (radius){
    this.radius = radius
    this.draw = function (){
        console.log(draw)
    }
}

const newCircle = new Circle(7)


let person = {
  name: "Josh",
  height: "511",
  favColor: "red",
  age:"29"
}

let personKeys = Object.keys(person)

let entries = Object.entries(person)

// console.log(entries)


//copy an object by interating through all its key value pairs 

// const personCopy = {}

// for (let key in person)
//   personCopy[key] = person[key]

//quicker method for cloning an object (what is done from lines 121 - 124) (above)

// let personCopy2 = Object.assign({},person)

//simplest way to clone an object

// let personCopy3 = {...person}
// console.log(personCopy3)

let now = new Date()

// let address1 = {
//   street: "100 S Reynolds St",
//   city: "Alexandria",
//   state: "VA",
//   zip: 22304
// }

function showAddress(address){
  for (let key in address)
  console.log(key,address[key])

  // console.log(Object.entries(address))
}



// showAddress(address1)


function createAdressObj(street, city, state, zip){
return {
  street,
  city,
  state,
  zip
}
}

let joshAdd = createAdressObj("100 S Reynolds St", "Alexandria", "VA",22304)

// console.log(joshAdd)

function createAddressObj2(street,city,state,zip){
  this.street = street
  this.city = city
  this.state = state
  this.zip = zip 
}

const joshAdd2 = new createAddressObj2("11 Green St", "New Haven", "VA", 11204)

// binding this 

const josh3 = {
  name: "Josh",
  speak(){
    console.log(this)
  }
}

const speak = josh3.speak.bind(josh3)


// josh3.speak()

// console.log(speak)

// speak()

//arrow functions 

const square = number => number * number 

// if there is only one parameter, no need for paratheses, if there is
// no parameter function must have empty parathesis
// if body of code is one line and returns a value, you can remove
// return statements

// filter method 

const employees = [ 
  {id:1, isActive: true},
  {id:2, isActive: true},
  {id:3, isActive: false}
]

const activeEmps = employees.filter(employee => employee.isActive)

console.log(activeEmps)

//arrow functions are also used because they do not rebind "this" where
// regular functions would require you to rebind "this" if its re-
// defined for some reason inside an object
