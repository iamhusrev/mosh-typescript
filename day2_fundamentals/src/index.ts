//! Typescript Types

let sales = 123_123_123;
let course = "TypeScript";
let isBeginner = true;
let total = 0;

function render(document: any) {
  console.log(document);
}

//! Arrays

let numbers: number[] = [1, 2, 3];
numbers.forEach((number) => console.log(number));


//! Tuples

let person: [string, number] = ["John", 25];
console.log(person);