// Tuple Type
// A Tuple Type is Another Sort of Array Type that Knows Exactly :
//  - How Many Elements It Contains,
//  - Which Types It Contains at Specific Positions.
var myTuple;
myTuple = ["Hello", 123];
console.log(typeof myTuple);
console.log(typeof myTuple[0]); // string
console.log(typeof myTuple[1]); // number
// console.log(typeof myTuple[2]); // Error
console.log(myTuple);
// myTuple = ["Hello", 123, true]; // Error
// myTuple = [15, "world"]; // Error
myTuple.push("world");
console.log(myTuple);
console.log(myTuple[0].substring(1)); // ello
// console.log(myTuple[1].substring(1)); // Error
console.log(myTuple[1].toString().substring(1)); // 23
console.log(myTuple[0].length); // 5
// Object Type
/* const member = {
  firstName: "John",
  lastName: "Doe",
  age: 25,
  level: ["Admin", 1],
};
console.log(member);
console.log(member.level[0]);
console.log(member.level[1]);
console.log(typeof member); // object
console.log(typeof member.level[0]); // string
member.level[0] = 200;
console.log(member);
member.level[0] = "Moderator"; */
// Setting Types for all Properties
var member = {
    firstName: "John",
    lastName: "Doe",
    age: 25,
    level: ["Admin", 1],
};
console.log(member);
console.log(member.level[0]);
console.log(member.level[1]);
console.log(typeof member); // object
console.log(typeof member.level[0]); // string
// member.level[0] = 200; // Error
console.log(member);
member.level[0] = "Moderator";
member.level.push("Hi " + member.firstName + " ! Your are a " + member.level[0] + " now !");
console.log(member);
