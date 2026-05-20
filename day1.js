// Primitive data types (Stack)
// boolean, string, number, null, bigInt, undefined, symbol
// null VS undefined
// typeof ""
// Reference data types (Heap)
// object, Array, Function, Date, Regex

// Pass by Reference / Pass by value
// const a = {num: 10};
// const b = a; // copying the refence
// b.num = 12;
// console.log(a)
// let a = 10;
// let b = a; 
// b = 12;
// console.log(a);

// Mutable / Immutable
// let a = 10;
// a = 12;
// console.log(a);
// let b = {num: 10};
// b.num = 12;
// console.log(b)

// loosely typed
// let a = 10;
// a = 'hello';
// Type Coercion: +, ==, Number("123"), Boolean(""), String(123)
// let res = +"1"
// let res = 1 + "1"; 
// let res = null + "5";
// let res = undefined + "5";
// console.log(res, typeof res);

// console.log(1 == "1");
// console.log(1 === "1");

// Truthy VS Falsy
// Boolean()
// 0, -0, "", null, undefined, NaN
// console.log(NaN == NaN);
// const arr = [];
// if (arr.length) {
//     // logic
// }


// Declare vairables in JS
// let, const, var
// var num1 = 12
// function foo(){
//     var num = 10;
// }
// console.log(num1);

// Hoisting
// Variable declaration is lifed up
// console.log(a);
//  Not the initilaziton
// var a = "hello"
// foo()
// console.log("outside function", b);
// function foo(){
//     // var b;
//     console.log("in function",b);
//     // b = "hello";
//     var b = "hello";
//     console.log("hello")
// }

// Objects
// Create object
// const obj1 = { name: "Miranda"};
// const obj2 = Object.create({name: "Miranda"});
// const obj3 = new Object({name: "Miranda"})
// Access properties
// console.log(obj1.name);
// console.log(obj2["name"])
// let prop = "name";
// console.log(obj3[prop]);
// Static Methods
// console.log(Object.keys(obj1));
// console.log(Object.values(obj1))
// console.log(Object.entries(obj1))


// Class
// class Person{
//     constructor(name, age){
//         this.name = name;
//         this.age = age;
//     }
//     sayHello(){
//         console.log("Hello, ", this.name)
//     }
// }
// const obj = new Person("Miranda", 20);
// // console.log(obj);
// obj.sayHello();

//  Object Oriented Programming features
// Abstraction
// class Person{
//     constructor(){
//         if(this.constructor == Person) {
//             throw new Error("Cannot create instance of Abstract class")
//         }
//     }
//     sayHello(){
//         throw new Error("Implementation required")
//     }
// }
// class Student extends Person{
//     sayHello(){
//         // super.sayHello();
//         console.log("Here is a student");
//     }
// }
// const obj = new Student();
// obj.sayHello();
// const obj1 = new Person();

// Encapsulation
// class Person{
//     #name;
//     #age;
//     constructor(name, age){
//         this.#name = name;
//         this.#age = age;
//     }
//     get name(){
//         console.log("Getter")
//         return this.#name;
//     }
//     set name(newName){
//         if (newName){
//             console.log("Setter");
//         this.#name = newName;
//         }   
//     }
// }
// const obj = new Person("Miranda", 20);
// obj.name = "Tom";
// console.log(obj.name);

// Inheritance
// extends, super()
// class Person{
//     constructor(name, age){
//         this.name = name;
//         this.age = age;
//     }
//     sayHello(){
//         console.log("Hello, ", this.name)
//     }
// }
// class Student extends Person{
//     constructor(name, age, year){
//         super(name, age);
//         this.year = year;
//     }
//     sayHello(time){
//         console.log("Hello, "+ this.name+". I am a "+this.year)
//         console.log("curent time is"+time)
//     }
// }
// const Tom = new Student("Tom", 20, "Senior");
// Tom.sayHello('Wed');

// // Polymorphsim
// const M = new Person("Miranda", 20);
// M.sayHello();

// constructor function
// function Person(){
//     // this.name = "Miranda";
//     this.age = 20;
// }
// Person.prototype.name = "tom";
// const p = new Person();

// const p2 = new Person();
// console.log(p, p2)
// console.log(p.name, p2.name)
// console.log(p.year);

// Prototype-based
const arr = [1, 2, 3, 4,5];
console.log(arr);
 Array.prototype.myMap = function(){
    console.log("This is my custom map fn")
 }
arr.myMap();