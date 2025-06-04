//Exercise #01

//Buatlah fungsi untuk menghitung BMI (Body Mass Index)
//Rumus : BMI = berat / (tinggi * tinggi),
//berat dalam kg dan tinggi dalam meter
//170 cm = 1.7 m
//Fungsi tersebut menerima 2 parameter yaitu berat dan tinggi
//Dan mengembalikan output berupa BMI
//Buat fungsi menggunakan IIFE & Callback Function

//IIFE
let bmi = (function (berat, tinggiCm) {
  let tinggiMeter = tinggiCm / 100;
  return berat / (tinggiMeter * tinggiMeter);
})(70, 175);

console.log("Bmi IIFE : " + bmi.toFixed(2));

//Callback
function bmi1(callback) {
  return callback(70, 175);
}

let bmi2 = bmi1(function (berat, tinggiCm) {
  let tinggiMeter = tinggiCm / 100;
  return berat / (tinggiMeter * tinggiMeter);
});

console.log("BMI Callback: " + bmi2.toFixed(2));
