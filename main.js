/* ******************************************************************************************** */
var people = {
    friends: [],
};
// 2. Create three separate objects, each representing a friend, with properties like firstName, lastName, and optionally id.
var friends1 = {
    firstName: "Arsalan",
    lastName: "Khan",
    id: 813,
};
var friends2 = {
    firstName: "Rafay",
    lastName: "Khan",
    id: 713,
};
var friends3 = {
    firstName: "Ayan",
    lastName: "Khan",
};
// 3. Add these friend objects to the friends array within the people object.
people.friends.push(friends1);
people.friends.push(friends2);
people.friends.push(friends3);
// 4. Output the entire people object to the console, displaying your information and your friend list.
console.log(people);
/* ******************************************************************************************** */
// Assignment 2: Manipulating an Array/Rearranging Words
// Objective: Rearrange an array using array methods to form the sentence "I am a student of GIAIC".
// 1. Scrambled Array: Start with an array of elements in a scrambled order, like:
var scrambledArray = [
    "student",
    "of",
    true,
    123,
    "am",
    "a",
    "GIAIC",
    "I",
];
// 2. Convert non-strings (booleans, numbers) to strings if needed.
scrambledArray[2] = String(scrambledArray[2]);
scrambledArray[3] = String(scrambledArray[3]);
// 3. Split elements into character arrays (optional).
scrambledArray[5] = scrambledArray[7].split("");
scrambledArray[7] = scrambledArray[7].split("");
// 4. Rearrange characters or elements in the desired order (modify original array or create temporary arrays).
scrambledArray = ["I", "am", "a", "student", "of", "GIAIC"];
// 5. Use join() to combine elements back into a single string: "I am a student of GIAIC".
var result = scrambledArray.join(" ");
console.log(result);
var inventory = [];
// 2. Create three separate objects, each representing a product, with properties like name, model, cost, and quantity.
var product1 = {
    name: "IPhone",
    model: "14 Pro",
    cost: 1500,
    quantity: 5,
};
var product2 = {
    name: "Vivo",
    model: "Y83",
    cost: 999,
    quantity: 8,
};
var product3 = {
    name: "Techno",
    model: "Spark 20",
    cost: 657,
    quantity: 20,
};
// 3. Add these product objects to the inventory array using an appropriate array method.
inventory.push(product1, product2, product3);
// 4. Access and log the quantity property of a specific product (e.g., third product) in the inventory array.
console.log(inventory[0].name);
// 5. Access and log the quantity property of a specific product (e.g., third product) in the inventory array.
console.log(inventory[1].quantity);
// 2. Student List:
// An array named students stores information about several students using the
// Student template. Think of this array as your class list!
var students = [
    {
        name: "Arsalan",
        isSenior: true,
        isAssignmentsCompleted: false,
    },
    {
        name: "Rafay",
        isSenior: true,
        isAssignmentsCompleted: true,
    },
    {
        name: "Ayan",
        isSenior: false,
        isAssignmentsCompleted: false,
    },
    {
        name: "Ahmed",
        isSenior: true,
        isAssignmentsCompleted: true,
    },
    {
        name: "Hassan",
        isSenior: true,
        isAssignmentsCompleted: true,
    },
    {
        name: "Kashif",
        isSenior: true,
        isAssignmentsCompleted: false,
    },
    {
        name: "Arshad",
        isSenior: false,
        isAssignmentsCompleted: true,
    },
    {
        name: "Kamran",
        isSenior: false,
        isAssignmentsCompleted: false,
    },
    {
        name: "Naeem",
        isSenior: true,
        isAssignmentsCompleted: true,
    },
];
// 3. Find Senior Students with Assignments (Optional):
// The code (not shown here) has a function that might find students who are seniors
// and have completed their assignments.
// Can you guess why this information might be helpful?
// Ans: This information helps the school make sure seniors are ready to graduate and plan the graduation ceremony. It also lets teachers know which students need extra help and can motivate students by recognizing their hard work.
var assignmentsCompletedStudents = function (students) {
    return students.filter(function (students) { return students.isSenior && students.isAssignmentsCompleted; });
};
// 4. Class List Update:
// Imagine you need to update your class list! The code (not shown here) might have
// a function that removes students who haven't completed their assignments
// (assuming only seniors are responsible).
// Can you think of any reasons why this might be useful (consider limitations)?
// Ans: Removing students who haven't completed their assignments can keep the class list accurate and focused on active, engaged students. However, this might overlook those who need extra support, leading to unfair exclusion. It can also cause data loss if students complete assignments later. Thus, it's useful for keeping track but should be used carefully.
var updatedClassList = function (students) {
    return students.filter(function (students) { return students.isAssignmentsCompleted; });
};
console.log(assignmentsCompletedStudents(students));
console.log(updatedClassList(students));
