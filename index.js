// //Rest Parameter dan Spread Operator

// //Tanpa Rest Parameter
// const func1 = (param1, param2, param3, param4, param5) => {
//   console.log(param1, param2, param3, param4, param5);
// };

// func1(1, 2, 3, 4, 5);

// //Dengan Rest Parameter tipenya adalah array
// //Rest Parameter harus di akhir
// const func2 = (...params) => {
//   console.log(params);
// };

// func2(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);

//Spread Operator
//Spread digunakan pada array dan object
// const numbers = [1, 2, 3, 4, 5];
// console.log(numbers);
// //Spread digunakan tidak menggunakan array
// console.log(...numbers);

// //1. Duplikasi Array
// // Cara yang salah
// // const number2 = numbers;
// // numbers.push(6);
// // console.log(numbers);
// // console.log(number2);

// const number2 = [...numbers, 6, 7, 8];
// console.log(number2);

//Pada Array
//2. Menggabungkan Array
// const numbers1 = [1, 2, 3];
// const numbers2 = [6, 7, 8];
// const numbers3 = [9, 10, 11];

// //Cara Sebelumnya
// //const numbersCombine = numbers1.concat(4, 5, numbers2, numbers3);
// //Cara yang menggunakan Spread operator
// const numbersCombine = [...numbers1, 4, 5, ...numbers2, ...numbers3];
// console.log(numbersCombine);

// //Pada Object
// const john = {
//   fullname: "John Doe",
//   age: 30,
// };

// //1. Duplikasi Object
// const john2 = { ...john, address: "airmadidi" };
// console.log(john2);

// //2. Menggabungkan Object
// const obj1 = { a: 1, b: 2 };
// const obj2 = { c: 3, d: 4 };
// const combineObj = { ...obj1, ...obj2 };

// console.log(combineObj);

//Destructuring Array & Object
const numbers = [1, 2, 3, 4, 5];

//Tanpa destructing ES6
// const num1 = numbers[0];
// const num2 = numbers[1];
// const num3 = numbers[2];
// const num4 = numbers[3];
// const num5 = numbers[4];

//Pada Array
//Dengan Destructing ES6
// const [num1, num2, num3, num4, num5] = numbers;
// console.log(num1);

//Jika ingin mengambil beberapa saja
// const [num1, , num3, , num5] = numbers;
// console.log(num1);

//Destructing di gabung dengan Rest
const [num1, ...rest] = numbers;
console.log(num1);
console.log(rest);

//Pada Object
//harus sesuai dari nama properti di dalam object
const john = {
  fullName: "John Doe",
  age: 30,
  status: "active",
  address: "airmadidi",
};

// const fullName = john.fullName; Tanpa Destructuring
//Dengan Destructuring
const { fullName, age, address } = john;
console.log(fullName, age, address);

// //Contoh ingin mengganti langsung nama propertinya
// const { fullName, age, address:alamat } = john;
// console.log(fullName, age, alamat)

//cara 1
// const sayGreetings = (obj) => {
//   console.log(obj.fullName);
//   console.log(obj.age);
// };
// sayGreetings(john);

//cara 2
const sayGreetings = ({ fullName, age }) => {
  console.log(fullName);
  console.log(age);
};
sayGreetings(john);
