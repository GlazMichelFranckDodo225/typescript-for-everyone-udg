// Array Type
// Normal Arrays
let colors: string[] = ["red", "blue", "green", "orange"];
let numbers: number[] = [1, 2, 3, 4, 5];
// numbers[0] = "Hi"; // Error: Type 'string' is not assignable 
// to type 'number'.
numbers.push(6);
console.log(numbers);
// numbers.push("Hi"); // Error: Argument of type 'string' is not 
// assignable to parameter of type 'number'.

// Array of Type Any
let values: any[];
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
let strNumArrayInference = ["Hello", 10, true];
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
let strNumArrayAssignation: [string, number];
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
console.log(strNumArrayAssignation);
// strNumArrayAssignation[6] = "Jane"; // Error: Tuple type '[string, 
// number]' of length '2' has no element at index '6'.
console.log(strNumArrayAssignation);

// Generic Array Types
let vehicles: Array<string> = ["Honda", "Toyota", "BMW", "Mercedes"];
let scores: Array<number> = [100, 90, 80, 250, 500, 1000];
// scores = ["Hello"]; // Error: Type 'string' is not assignable 
// to type 'number'.
vehicles.push("Mazda");
// vehicles.push(1000); // Error: Argument of type 'number' is not 
// assignable to parameter of type 'string'.