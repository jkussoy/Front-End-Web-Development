// //Javascript ES6
// //String Literal

// const john = {
//   name: "John Doe",
//   age: 30,
// };

// //Hi, Nama Saya John Doe. Umur Saya 30 Tahun.
// //Menggunakan ES5
// let kalimat5 =
//   "Hi, Nama Saya " + john.name + ". Umur Saya " + john.age + " Tahun.";
// console.log(kalimat5);

// //Menggunakan ES6
// let kalimat6 = `Hi, Nama Saya ${john.name}. Umur saya ${john.age} Tahun.`;
// console.log(kalimat6);

//Arrow Function
//Pakai Cara Lama
// function greetings(name) {
//   return `My Name ${name}`;
// }
// console.log(greetings("John Doe"));

// //Menggunakan ES6
// const greetings6 = (name) => {
//   return `Hi, My Name Is ${name}`;
// };
// console.log(greetings6("Bob"));

// //Implicit return value
// const greetings7 = (name) => `Hi, My Name Is ${name}`;

// console.log(greetings7("Bob"));

// //contoh penggunaan arrow function pada fungsi callback
// const array = [1, 2, 3, 4, 5];
// array.forEach((item) => {
//   console.log(item);
// });

// //contoh penggunaan arrow function pada fungsi callback
// const array2 = [1, 2, 3, 4, 5];
// let output = array.map((item) => item);
// console.log(output);

//Default Parameter
const greetings = (fullName = "John", age = 30) =>
  `Hi, Nama saya ${fullName}. Umur saya ${age} tahun.`;
console.log(greetings("Bob", 25));
