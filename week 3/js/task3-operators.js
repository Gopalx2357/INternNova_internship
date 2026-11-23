// Task 3: JavaScript Operators

let a = 12;
let b = 5;

console.log("Arithmetic Operators");
console.log("Addition:", a + b);
console.log("Subtraction:", a - b);
console.log("Multiplication:", a * b);
console.log("Division:", a / b);
console.log("Remainder:", a % b);
console.log("Exponent:", a ** b);

console.log("Assignment Operators");
let value = 10;
value += 5;
console.log("After += 5:", value);
value -= 3;
console.log("After -= 3:", value);
value *= 2;
console.log("After *= 2:", value);
value /= 4;
console.log("After /= 4:", value);

console.log("Comparison Operators");
console.log("12 > 5:", a > b);
console.log("12 < 5:", a < b);
console.log("12 === 12:", a === 12);
console.log("12 !== 5:", a !== b);
console.log("12 >= 5:", a >= b);
console.log("5 <= 12:", b <= a);

console.log("Logical Operators");
let hasId = true;
let isRegistered = false;
console.log("AND:", hasId && isRegistered);
console.log("OR:", hasId || isRegistered);
console.log("NOT:", !hasId);

console.log("Increment and Decrement");
let count = 5;
count++;
console.log("After increment:", count);
count--;
console.log("After decrement:", count);
