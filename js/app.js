// import Car from "./car.js";
// OOP => Object Oriented Programming

// let fName = "John";

// let age = new Number(71.3347467);

// console.log(fName.toLowerCase());

// let person = {
//   fName: "John",
//   email: "john@gmail.com",
//   age: 71,
//   address: {
//     city: "Tashkent",
//     district: "Shayxontoxur",
//     street: "Sebzor",
//     full: "lorem ipsum dolor sit amet.",
//     displayAddress: function () {
//       console.log(this);
//       console.log("My name is John");
//     },
//   },
//   displayName: function () {
//     console.log(`My name is ${this.fName}`);
//   },
// };

// let personTwo = {
//   fName: "Jane",
//   email: "jane@gmail.com",
//   age: 71,
//   address: {
//     city: "Tashkent",
//     district: "Shayxontoxur",
//     street: "Sebzor",
//     full: "lorem ipsum dolor sit amet.",
//     displayAddress() {
//       console.log(this);
//       console.log("My name is John");
//     },
//   },
//   displayName: () => {
//     console.log(`My email is ${this.email}`);
//   },
// };

// (function () {
//   console.log(this);
// })();

// console.log(person.address);

// let userOneName = "John";
// let userOneEmail = "john@gmail.com";
// let userOneAge = 71;

// let userTwoName = "John";
// let userTwoEmail = "john@gmail.com";
// let userTwoAge = 71;

// function displayUserOneName() {
//   console.log(userOneName);
// }

// displayUserOneName();

// console.log({} === {});

// let a = "Salom";

// let b = a;

// console.log(a);
// console.log(b);

// b = "Hayr";

// console.log(a);
// console.log(b);

// let a = { name: "John", age: 71 };

// let b = a;
// let c = a;

// console.log(a);
// console.log(b);

// b.age = 72;

// console.log(a);
// console.log(b);

// Factory Functions

// function user(fName, email, age) {
//   return {
//     fName,
//     age,
//     email,
//     displayName() {
//       console.log(`My name is ${this.fName}`);
//     },
//   };
// }

// let userOne = user("john", "john@gmail.com", 71);
// let userTwo = user("jane", "jane@gmail.com", 68);

// userOne.displayName();
// userTwo.displayName();

// console.log(function () {} === function () {});

// Constructor Functions

// function User(fName, email, age) {
//   this.fName = fName;
//   this.email = email;
//   this.age = age;
// }

// User.prototype.displayName = function () {
//   console.log(`My name is ${this.fName}`);
// };

// let userOne = new User("John", "john@gmail.com", 71);
// let userTwo = new User("Jane", "jane@gmail.com", 68);

// class User {
//   constructor(fName, email, age) {
//     this.fName = fName;
//     this.email = email;
//     this.age = age;
//   }
//   displayName() {
//     console.log(`My name is ${this.fName}`);
//   }
// }

// let userOne = new User("John");
// let userTwo = new User();

// let tesla = new Car("Chopar", "Model X", 2023, "Black");
// let BMW = new Car("Uchqur", "M8", 2023, "White");

// tesla.startEngine();

// document.addEventListener("DOMContentLoaded", () => {
//   const btn = document.querySelector("button");

//   btn.addEventListener("click", () => alert("Clicked"));
// });
