// Array Exercises

// For each of the exercises below, assume you are starting with the following people array.
// let people = ["Greg", "Mary", "Devon", "James"];

// Using a for-loop, iterate through this array and console.log all of the people.
// Using a forEach(),  iterate through this array and console.log all of the people.
// Write the command to remove "Greg" from the array.
// Write the command to remove "James" from the array.
// Write the command to add "Matt" to the front of the array.
// Write the command to add your name to the end of the array.
// Using a for-loop, iterate through this array and after console.log-ing "Mary", exit from the loop. (hint: use break keyword to exit loop)
// Write the command to make a copy of the array using slice. The copy should NOT include "Mary" or "Matt".
// Redefine the people variable with the value you started with. Using the splice command, remove "Devon" from the array and add "Elizabeth" and "Artie". Your array should look like this when you are done ["Matt", "Mary", "Elizabeth", "Artie", "Your Name"].
// Create a new variable called withBob and set it equal to the people array concatenated with the string of "Bob".
// Final Result =  ["Matt", "Mary", "Elizabeth", "Artie", "Your Name", "Bob"].
// Object Exercises

// For each of the exercises below, assume you are starting with the following programming object.
// let programming = {
//     languages: ["JavaScript", "Python", "Ruby"],
//     isChallenging: true,
//     isRewarding: true,
//     difficulty: 8,
//     jokes: "http://stackoverflow.com/questions/234075/what-is-your-best-programmer-joke"
// };

// Write the command to add the language "Go" to the end of the languages array.
// By using the bracket notation, change the difficulty to the value of 7.
// Using the delete keyword, write the command to remove the jokes key from the programming object.
// By using the dot notation, write the command to add a new key called isFun and a value of true to the programming object.
// Using a map(), iterate through the languages array and update each element to be “0 - JavaScript, 1 - Python, … ”, where 0 represents the index of the array, and console.log the output.

//1. using for-loop, iterate through this array and console.log all of the people.
let people = ["Greg", "Mary", "Devon", "James"];
for (let i = 0; i < people.length; i++) {
  console.log(people[i] + " Using for-loop");
}

//2. Using forEach(), iterate through this array and console.log all of the people.
people.forEach(function (person) {
  console.log(person + " Using forEach()");
});

//3. Write the command to remove "Greg" from the array.
people.shift();
console.log(people);

//4. Write the command to remove "James" from the array.
people.pop();
console.log(people);

//5. Write the command to add "Matt" to the front of the array.
people.unshift("Matt");
console.log(people);

//6. Write the command to add your name to the end of the array.
people.push("Joshua");
console.log(people);

//7. Using a for-loop, iterate through this array and after console.log-ing "Mary"
for (let i = 0; i < people.length; i++) {
  console.log(people[i]);
  if (people[i] === "Mary") break;
}

//8.  Make a copy of the array using slice. Exclude "Mary" and "Matt".
let newPeople = people.slice(2);
console.log(newPeople);

//9. Redefine people and modify using splice
people = ["Greg", "Mary", "Devon", "James"];
console.log(people);
people.splice(2, 1, "Elizabeth", "Artie");
console.log(people);
people.pop();
console.log(people);
people.push("Joshua");
console.log(people);
people.shift();
console.log(people);
people.unshift("Matt");
console.log(people);

//10. Create new variable withBob
let withBob = people.concat("Bob");
console.log(withBob);
