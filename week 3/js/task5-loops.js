// Task 5: Loops

// 1. for loop: print numbers from 1 to 10
console.log("Numbers from 1 to 10:");
for (let i = 1; i <= 10; i++) {
    console.log(i);
}

// 2. while loop: even numbers from 2 to 20
console.log("Even numbers from 2 to 20:");
let evenNumber = 2;
while (evenNumber <= 20) {
    console.log(evenNumber);
    evenNumber += 2;
}

// 3. do...while loop: odd numbers from 1 to 9
console.log("Odd numbers from 1 to 9:");
let oddNumber = 1;
do {
    console.log(oddNumber);
    oddNumber += 2;
} while (oddNumber <= 9);

// 4. Multiplication table
let tableNumber = 5;
console.log("Multiplication table of", tableNumber);
for (let i = 1; i <= 10; i++) {
    console.log(tableNumber + " x " + i + " = " + (tableNumber * i));
}

// 5. Sum of numbers from 1 to 10
let sum = 0;
for (let i = 1; i <= 10; i++) {
    sum += i;
}
console.log("Sum from 1 to 10:", sum);

// 6. Reverse order from 10 to 1
console.log("Reverse order:");
for (let i = 10; i >= 1; i--) {
    console.log(i);
}
