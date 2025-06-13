//1. Module in JS
//cara import dari sisi backend
// const fullName = require("./data"); //dari sisi backend

import { fullName, numbers, john } from "./data.js";
import sayGreetings from "./data.js";

console.log(fullName, numbers, john);
sayGreetings();

//2. Asynchronous JS
// //lawan dari Asynchronous itu adalah synchronous -> single thread atau blocking
// console.log("Proses 1");
// console.log("Proses 2");
// console.log("Proses 3");
// console.log("Proses 4");

//Asynchronous ->multi thread -> non-blocking
//1. Parallel
// console.log("Proses 1");
// setTimeout(() => console.log("Proses 2"), 5000);
// console.log("Proses 3");
// setTimeout(() => console.log("Proses 4"), 3000);
//2. Concurrent
// setTimeout(() => {
//   console.log("Proses 1");
//   setTimeout(() => {
//     console.log("Proses 2");
//     setTimeout(() => {
//       console.log("Proses 3");
//       setTimeout(() => {
//         console.log("Proses 4");
//         setTimeout(() => {
//           console.log("Proses 5");
//           setTimeout(() => {
//             console.log("Proses 6");
//           }, 3000);
//         }, 3000);
//       }, 3000);
//     }, 3000);
//   }, 3000);
// }, 3000);

let condition = true;
let newPromise = new Promise((resolve, reject) => {
  if (condition) {
    setTimeout(() => resolve("Promise Berhasil"), 3000);
  } else {
    reject("Promise Gagal");
  }
});

//Cara Pakai Promise
//1. then - catch
// newPromise
//   .then((result) => {
//     console.log("Proses 1");
//     return result;
//   }) //Jika berhasil
//   .then((result2) => {
//     console.log("Proses 2");
//     console.log(result2);
//   })
//   .catch((error) => console.log(error)); //Jika Gagal

//2. Async - Await
// const getData = async () => {
//   const result = await newPromise;
//   console.log(result);
// };

// getData();

// fetch("https://jsonplaceholder.typicode.com/users")
//   .then((response) => response.json())
//   .then((json) => console.log(json));

const getDataJSONPlaceholder = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const json = await response.json();
  console.log(json);
};

getDataJSONPlaceholder();
