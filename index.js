//javascript Function

//1. Func. Declaration
function sayHello(fullName) {
  console.log("Hello " + fullName);
}

sayHello("John");

//Penggunaan return
// function sayHello(fullName) {
//   return "Hello " + fullName;
// }
// let output = sayHello("John"); //Call / Invoke
// console.log(output);

// sayHello("John");

//2. Func. Expression
let sayHello2 = function (fullName) {
  console.log("Hello " + fullName);
};
sayHello2("Bob");

// Penggunaan Return
// let sayHello2 = function (fullname){
//     return "Hello " + fullName;
// };
// let output2 = sayHello2("Bob"){  //Call / Invoke
//     console.log(output);
// }
// sayHello2("Bob")

//3. IIFE (Immediately Invoked Function Expressions)
// Self -executing Anonymous Function
(function () {
  console.log("Hello IIFE");
})();

//Menambahkan Argumen
(function (fullName) {
  console.log("Hello " + fullName);
})("IIFE");

//Return
let output3 = (function (fullName) {
  return "Hello " + fullName;
})("IIFE");

console.log(output3);

//4. Callback Function
//is a function passed as an argument to another function
function sayHello3(callback) {
  callback();
}
// Cara Pertama
// function hello() {
//   console.log("Hello Callback");
// }
// sayHello3(hello);

// Cara kedua
sayHello3(function () {
  console.log("Hello Callback");
});

// Callback ada parameter
function sayHello3(callback) {
  callback("Callback Function");
}

//Callback ada return
function sayHello3(callback) {
  let result = callback("callback function");
  return result;
}
let output4 = sayHello3(function (fullName) {
  return "hello" + fullName;
});
console.log(output4);
