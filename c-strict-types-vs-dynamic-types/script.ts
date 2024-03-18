// TYPE INFERENCE
// Any
let firstName;
firstName = true;
firstName = "Red";
firstName = 20;

// Other Types
let lastName = "Doe";
lastName = "Dora";
// lastName = 20; // Error ==> Type 'number' is not 
// assignable to type'string'.

let age = 18;
age = 25;
// age = true; // Type 'boolean' is not assignable to type 
// 'number'.

let isLoggedIn = true;
isLoggedIn = false;
// isLoggedIn = "Dupond"; // Error ==> Type'string' is not assignable to type 'boolean'

// TYPE ASSIGNATION
let alien: string = "Roger";
// alien = true; // Error ==> Type 'boolean' is not assignable to type'string'.

let width: number = 100;
// width = "Hello !"; // Error ==> Type'string' is not assignable to type 'number'.

const sum = (val1: number, val2: number) => val1 + val2;
sum(10, 20);
// sum("Toto", 10); // Error ==> Argument of type'string' is not assignable to parameter of type 'number'.
