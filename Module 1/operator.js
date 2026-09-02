//Arithmetic operators  + - * / % ()
// Assignment operators = += -= *= /=
// Comparison operators === == > < >= =<
// logical operators && || !


const a = 10;
const b = 3;

const sum = a + b;
console.log(sum);

const divition = a / b;
console.log(divition);

const div = a / b;
console.log(div.toFixed(2));

const reminder = a % b;
console.log(reminder);

console.log(typeof sum, typeof divition, typeof div);  // use for veriable type checking

const c = a > b;
console.log(c);

const d = a > b && 11;
console.log(d);

const e = a == b && 11;
console.log(e);

const f = !(a == b) && 11;
console.log(f);