// Task 2: Variables and Data Types

// let: value can be changed later
let studentName = "Gopal";
studentName = "Sri Krishna Gopal Yadav";

// const: value cannot be reassigned
const collegeCourse = "B.Tech CSE";

// Variable declaration and assignment
let semester;
semester = 3;

// Different JavaScript data types
let name = "Rahul";              // String
let age = 20;                    // Number
let isStudent = true;            // Boolean
let result;                      // Undefined
let selectedSubject = null;      // Null

console.log("Student Name:", studentName);
console.log("Course:", collegeCourse);
console.log("Semester:", semester);

console.log("String value:", name, "| Type:", typeof name);
console.log("Number value:", age, "| Type:", typeof age);
console.log("Boolean value:", isStudent, "| Type:", typeof isStudent);
console.log("Undefined value:", result, "| Type:", typeof result);
console.log("Null value:", selectedSubject, "| Type:", typeof selectedSubject);

// Note: typeof null returns "object" in JavaScript due to a historical behavior.
