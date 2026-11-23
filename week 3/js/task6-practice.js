// Task 6: Five JavaScript Practice Programs

// Program 1: Calculate simple interest
let principal = 5000;
let rate = 5;
let time = 2;
let simpleInterest = (principal * rate * time) / 100;
console.log("Program 1 - Simple Interest:", simpleInterest);

// Program 2: Find the largest of two numbers
let numberOne = 45;
let numberTwo = 30;
if (numberOne > numberTwo) {
    console.log("Program 2 - Largest number:", numberOne);
} else if (numberTwo > numberOne) {
    console.log("Program 2 - Largest number:", numberTwo);
} else {
    console.log("Program 2 - Both numbers are equal");
}

// Program 3: Check whether a year is a leap year
let year = 2024;
if ((year % 400 === 0) || (year % 4 === 0 && year % 100 !== 0)) {
    console.log("Program 3 -", year, "is a leap year");
} else {
    console.log("Program 3 -", year, "is not a leap year");
}

// Program 4: Find the factorial of a number
let factorialNumber = 5;
let factorial = 1;
for (let i = 1; i <= factorialNumber; i++) {
    factorial *= i;
}
console.log("Program 4 - Factorial of", factorialNumber, "is", factorial);

// Program 5: Count digits in a number
let digitNumber = 58321;
let digitCount = 0;
let tempNumber = digitNumber;
while (tempNumber > 0) {
    digitCount++;
    tempNumber = Math.floor(tempNumber / 10);
}
console.log("Program 5 - Number of digits in", digitNumber, "is", digitCount);
