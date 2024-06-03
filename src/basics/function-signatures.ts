// -- FUNCTION SIGNATURES -- //
// described the structure of a function, args types and return types

type Calculator = (numOne: number, numTwo: number) => number // args name don't matter

function addTwoNumbers(a: number, b: number) {
  return a + b
}

function multiplyTwoNumbers(first: number, second: number) {
  return first * second
}

function squareNumber(num: number) {
  return num * num
}

function joinTwoNumbers(numOne: number, numTwo: number) {
  return `${numOne}${numTwo}`
}

let calcs: Calculator[] = [] // array of type Calculator (functions)
calcs.push(addTwoNumbers)
calcs.push(multiplyTwoNumbers)
calcs.push(squareNumber) // works because args don't matter, return type matters
// calcs.push(joinTwoNumbers) // error - function does not match type Calculator

//  FUNCTION SIGNATURES ON INTERFACES  //

interface HasArea {
  name: string
  calcArea(a: number): number // short way of defining function in interface
}

const shapeOne: HasArea = {
  name: 'square',
  calcArea(l: number) {
    return l * l
  },
}
const shapeTwo: HasArea = {
  name: 'circle',
  calcArea(r: number) {
    return (Math.PI * r) ^ 2
  },
}

shapeOne.calcArea(5)
shapeTwo.calcArea(4)
