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

console.log(showPrimes(10))


function Circle (radius){
    this.radius = radius
    this.draw = function (){
        console.log(draw)
    }
}

const newCircle = new Circle(7)

console.log(newCircle)


let person = {
  name: "Josh",
  height: "511",
  favColor: "red",
  age:"29"
}

let personKeys = Object.keys(person)

let entries = Object.entries(person)

console.log(entries)