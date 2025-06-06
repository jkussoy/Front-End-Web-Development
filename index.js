//Array dan Object
//Deklarasi Array

//Cara 1. Array Literals
let numbers = [1, 2, 3, 4, 5];

//Cara 2. Kata New
let numbers2 = new Array(1, 2, 3, 4, 5);

//Tipe data dalam array
let number3 = [1, 2, 3, 4, 5]; //Numbers
let students = ["John", "Jane", "Bob"]; //String
let john = ["John", 30, true, [80, 90, 100]]; //Campuran

console.log(number3);
console.log(students);
console.log(john);

//Mengakses Element dalam array
//Melalui Index
console.log(students[1]);
console.log(john[3]);
console.log(john[3][1]);

//Mengganti data/ update data
john[1] = 31;
console.log(john);

//Mengakses element terakhir di array
console.log(students.length); //menampilkan isi dari Array
console.log(students[students.length - 1]); //Mengakses element terakhir

//Array Method
let array = [1, 2, 3, "halo", false, true];
console.log(array); //output [ 1, 2, 3, 'halo', false, true ]
console.log(array.toString()); //output 1,2,3,halo,false,true
console.log(array.join("-")); //output 1-2-3-halo-false-true

//Pop = Menghapus Element Terakhir
array.pop();
console.log(array);

//Push = Menambah Element Terakhir
array.push("Selamat Pagi");
console.log(array);

//Shift = Menghapus element pertama
array.shift();
console.log(array);

//Unsift = menambah element pertama
array.unshift("Selamat pagi");
console.log(array);

//splice = menambah atau menggurangi array yang ditengah
array.splice(3, 0, 4, 5);
console.log(array);

//slice = mengambil beberapa element pada array
let arrAngka = array.slice(1, 5);
console.log(arrAngka);

//concatination = penggabungan angka
let angka1 = [1, 2, 3, 4, 5];
let angka2 = [6, 7, 8, 9, 10];
let gabungAngka = angka1.concat(angka2);
console.log(gabungAngka);

//Object
let john1 = {
  fullName: "John Doe",
  age: 31,
  isMarried: true,
  grade: [80, 90, 100],
  address: {
    street: "Jl. Arnold Mononutu",
    city: "Minahasa Utara",
    postalCode: "95371",
  },
  sayGreetings: function () {
    console.log("Hello");
  },
};
console.log(john1);
// cara mengakses element dalam object
//1. dot Notatiom
console.log(john1.fullName);
//2. Bracket notation
console.log(john["address"]["city"]);

john.status = "active";

//Object Method
john.sayGreetings();

delete john.grade;
console.log(john);

//Array Object
let students1 = [
  {
    id: 1,
    name: "John",
    status: "active",
  },
  {
    id: 2,
    name: "Bob",
    status: "non active",
  },
  {
    id: 3,
    name: "Jane",
    status: "active",
  },
];

for (let i = 0; i < students1.length; i++) {
  console.log(students1[i].name);
}

//Built-in method Array
students1.forEach(function (item, index) {
  console.log(index);
});

let output = students1.map(function (item) {
  return item.name;
});

console.log(output);
