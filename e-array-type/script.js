// Array Type
// Normal Arrays
var colors = ["red", "blue", "green", "orange"];
var numbers = [1, 2, 3, 4, 5];
// numbers[0] = "Hi"; // Error: Type 'string' is not assignable 
// to type 'number'.
numbers.push(6);
console.log(numbers);
// numbers.push("Hi"); // Error: Argument of type 'string' is not 
// assignable to parameter of type 'number'.
// Array of Type Any
var values;
values = [
    1,
    "Hello",
    true,
    {
        name: "John",
        age: 25,
        hobbies: ["Football", "Basketball", "Golf"],
    }
];
// Array of Type String and Number
// Type Inference
var strNumArrayInference = ["Hello", 10, true];
strNumArrayInference.push("World");
console.log(strNumArrayInference);
strNumArrayInference.push(100);
console.log(strNumArrayInference);
strNumArrayInference.push(200, 29, true, "John");
console.log(strNumArrayInference);
strNumArrayInference[0] = "Hi";
console.log(strNumArrayInference);
strNumArrayInference[6] = 300;
console.log(strNumArrayInference);
// Type Assignation
var strNumArrayAssignation;
strNumArrayAssignation = ["Hello", 10];
console.log(strNumArrayAssignation[0]);
console.log(strNumArrayAssignation[1]);
strNumArrayAssignation.push(100);
console.log(strNumArrayAssignation);
// strNumArrayAssignation.push(200, 29, true, "John"); // Error: Argument 
// of type 'boolean' is not assignable to parameter of type 'string | number'.
strNumArrayAssignation.push(200, 29, "John");
console.log(strNumArrayAssignation);
strNumArrayAssignation[0] = "Hi";
console.log("ICI : " + strNumArrayAssignation);
// strNumArrayAssignation[6] = 300; // Error: Type '300' is not 
// assignable to type 'undefined'.
strNumArrayAssignation[6] = "Jane";
console.log("ICI : " + strNumArrayAssignation);
// Generic Array Types
var vehicles = ["Honda", "Toyota", "BMW", "Mercedes"];
var scores = [100, 90, 80, 250, 500, 1000];
// scores = ["Hello"]; // Error: Type 'string' is not assignable 
// to type 'number'.
vehicles.push("Mazda");
// vehicles.push(1000); // Error: Argument of type 'number' is not 
// assignable to parameter of type 'string'.
