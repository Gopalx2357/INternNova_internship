// Task 4: Conditional Statements

// 1. Positive, negative, or zero (if...else if...else)
let number = -7;
if (number > 0) {
    console.log(number, "is positive");
} else if (number < 0) {
    console.log(number, "is negative");
} else {
    console.log("The number is zero");
}

// 2. Even or odd (if...else)
let evenOddNumber = 14;
if (evenOddNumber % 2 === 0) {
    console.log(evenOddNumber, "is even");
} else {
    console.log(evenOddNumber, "is odd");
}

// 3. Age eligibility (logical condition)
let age = 20;
let hasIdentityProof = true;
if (age >= 18 && hasIdentityProof) {
    console.log("Eligible");
} else {
    console.log("Not eligible");
}

// 4. Greatest of three numbers (nested if)
let first = 25;
let second = 40;
let third = 30;
if (first > second) {
    if (first > third) {
        console.log("Greatest number is:", first);
    } else {
        console.log("Greatest number is:", third);
    }
} else {
    if (second > third) {
        console.log("Greatest number is:", second);
    } else {
        console.log("Greatest number is:", third);
    }
}

// 5. Grade based on marks (else if ladder)
let marks = 82;
if (marks >= 90) {
    console.log("Grade: A+");
} else if (marks >= 80) {
    console.log("Grade: A");
} else if (marks >= 70) {
    console.log("Grade: B");
} else if (marks >= 60) {
    console.log("Grade: C");
} else if (marks >= 40) {
    console.log("Grade: D");
} else {
    console.log("Grade: Fail");
}
