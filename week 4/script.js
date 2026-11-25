// ---------------- Task 1: Functions ----------------

// Function declaration with parameters and a return value.
function calculateTotal(mark1, mark2, mark3) {
    return mark1 + mark2 + mark3;
}

// Function that uses the returned value.
function calculateAverage(total) {
    return total / 3;
}

// Arrow function example.
const generateGreeting = (name) => {
    return "Hello " + name + "! Welcome to JavaScript.";
};

document.getElementById("calculateMarks").addEventListener("click", function () {
    const mark1 = Number(document.getElementById("marks1").value);
    const mark2 = Number(document.getElementById("marks2").value);
    const mark3 = Number(document.getElementById("marks3").value);

    if ([mark1, mark2, mark3].some(mark => mark < 0 || mark > 100) ||
        document.getElementById("marks1").value === "" ||
        document.getElementById("marks2").value === "" ||
        document.getElementById("marks3").value === "") {
        document.getElementById("functionResult").textContent = "Please enter marks between 0 and 100.";
        return;
    }

    const total = calculateTotal(mark1, mark2, mark3);
    const average = calculateAverage(total);
    document.getElementById("functionResult").textContent =
        "Total Marks: " + total + " / 300 | Average: " + average.toFixed(2) + "%";
});

document.getElementById("greetButton").addEventListener("click", function () {
    document.getElementById("greetingResult").textContent = generateGreeting("Student");
});


// ---------------- Task 2: Arrays ----------------

// Creating an array and accessing its elements.
let students = ["Gopal", "Rahul", "Aman"];

function displayStudents() {
    const list = document.getElementById("studentList");
    list.innerHTML = "";

    // Iterating through an array using a for loop.
    for (let i = 0; i < students.length; i++) {
        const item = document.createElement("li");
        item.textContent = students[i];
        list.appendChild(item);
    }

    document.getElementById("arrayResult").textContent =
        "Total students: " + students.length;
}

document.getElementById("addStudent").addEventListener("click", function () {
    const name = document.getElementById("studentName").value.trim();

    if (name === "") {
        alert("Please enter a student name.");
        return;
    }

    students.push(name); // Adding an element.
    document.getElementById("studentName").value = "";
    displayStudents();
});

document.getElementById("updateStudent").addEventListener("click", function () {
    const oldName = document.getElementById("oldStudentName").value.trim();
    const newName = document.getElementById("newStudentName").value.trim();
    const index = students.indexOf(oldName);

    if (index === -1 || newName === "") {
        alert("Enter an existing name and a new name.");
        return;
    }

    students[index] = newName; // Updating an element.
    displayStudents();
});

document.getElementById("removeStudent").addEventListener("click", function () {
    const name = document.getElementById("oldStudentName").value.trim();
    const index = students.indexOf(name);

    if (index === -1) {
        alert("Student not found.");
        return;
    }

    students.splice(index, 1); // Removing an element.
    displayStudents();
});

document.getElementById("showStudents").addEventListener("click", displayStudents);
displayStudents();


// ---------------- Task 3: Objects ----------------

// Creating three objects with properties and values.
let studentOne = { name: "Gopal", age: 20, branch: "CSE" };
let studentTwo = { name: "Rahul", age: 21, branch: "CSE" };
let studentThree = { name: "Aman", age: 19, branch: "IT" };

let studentRecords = [studentOne, studentTwo, studentThree];

function displayObjects() {
    const output = document.getElementById("objectOutput");
    output.innerHTML = "";

    for (let i = 0; i < studentRecords.length; i++) {
        const student = studentRecords[i];
        const paragraph = document.createElement("p");
        paragraph.textContent =
            "Name: " + student.name +
            " | Age: " + (student.age === undefined ? "Not available" : student.age) +
            " | Branch: " + student.branch +
            " | Course: " + (student.course || "Not added");
        output.appendChild(paragraph);
    }
}

document.getElementById("updateObject").addEventListener("click", function () {
    const name = document.getElementById("objectName").value.trim();
    const age = Number(document.getElementById("objectAge").value);

    if (name === "" || age <= 0) {
        alert("Enter a name and valid age.");
        return;
    }

    studentOne.name = name; // Updating existing properties.
    studentOne.age = age;
    displayObjects();
});

document.getElementById("addObjectProperty").addEventListener("click", function () {
    studentOne.course = "JavaScript"; // Adding a new property.
    displayObjects();
});

document.getElementById("deleteObjectProperty").addEventListener("click", function () {
    delete studentOne.age; // Removing a property.
    displayObjects();
});

displayObjects();


// ---------------- Task 4: DOM Manipulation ----------------

document.getElementById("changeText").addEventListener("click", function () {
    // Selecting an element and changing its text content.
    document.getElementById("domText").textContent = "The text has been changed using JavaScript DOM.";
    // Changing HTML content.
    document.getElementById("dynamicContent").innerHTML = "<strong>HTML content updated successfully!</strong>";
});

document.getElementById("changeStyle").addEventListener("click", function () {
    const paragraph = document.getElementById("domText");
    paragraph.style.color = "blue";
    paragraph.style.fontSize = "20px";
    paragraph.style.fontWeight = "bold";
});

document.getElementById("addItem").addEventListener("click", function () {
    const item = document.createElement("li");
    item.textContent = "New item added";
    document.getElementById("domList").appendChild(item);
});

document.getElementById("removeItem").addEventListener("click", function () {
    const list = document.getElementById("domList");
    if (list.lastElementChild) {
        list.removeChild(list.lastElementChild);
    }
});


// ---------------- Task 5: Events ----------------

// Input event.
document.getElementById("liveInput").addEventListener("input", function (event) {
    document.getElementById("inputOutput").textContent =
        "You typed: " + event.target.value;
});

// Change event.
document.getElementById("courseSelect").addEventListener("change", function (event) {
    document.getElementById("changeOutput").textContent =
        "Selected course: " + event.target.value;
});

// Submit event.
document.getElementById("simpleForm").addEventListener("submit", function (event) {
    event.preventDefault();
    const name = document.getElementById("formName").value.trim();
    document.getElementById("formOutput").textContent = "Form submitted. Welcome, " + name + "!";
});

// Mouse event.
document.getElementById("mouseButton").addEventListener("mouseover", function () {
    this.textContent = "Mouse is over the button!";
});

document.getElementById("mouseButton").addEventListener("mouseout", function () {
    this.textContent = "Move Mouse Over Me";
});

// Keyboard event.
document.addEventListener("keydown", function (event) {
    document.getElementById("keyOutput").textContent =
        "You pressed: " + event.key;
});


// ---------------- Task 6: Mini Project - To-Do List ----------------

// Array of objects for storing tasks.
let tasks = [];

function updateTaskCount() {
    document.getElementById("todoCount").textContent = "Total tasks: " + tasks.length;
}

function displayTasks() {
    const list = document.getElementById("todoList");
    list.innerHTML = "";

    for (let i = 0; i < tasks.length; i++) {
        const item = document.createElement("li");
        const taskText = document.createElement("span");
        taskText.textContent = tasks[i].text;

        if (tasks[i].completed) {
            taskText.classList.add("completed");
        }

        // Click on task text to mark it completed or pending.
        taskText.addEventListener("click", function () {
            tasks[i].completed = !tasks[i].completed;
            displayTasks();
        });

        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";
        deleteButton.className = "delete-button";
        deleteButton.addEventListener("click", function () {
            tasks.splice(i, 1);
            displayTasks();
        });

        item.appendChild(taskText);
        item.appendChild(deleteButton);
        list.appendChild(item);
    }

    updateTaskCount();
}

document.getElementById("todoForm").addEventListener("submit", function (event) {
    event.preventDefault();

    const input = document.getElementById("todoInput");
    const taskText = input.value.trim();

    if (taskText === "") {
        return;
    }

    tasks.push({
        text: taskText,
        completed: false
    });

    input.value = "";
    displayTasks();
});

displayTasks();
