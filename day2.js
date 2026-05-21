// for ... of / Array.forEach
// const arr = [1, 2, 3, 4,5];
// for (let elem of arr){
//     console.log(elem);
// }
// for ... in / key in object
// const obj = { name: 'Tom', age:20};
// for (let k in obj){
//     console.log(k, obj[k]);
// }
// for (let x in arr){
//     console.log(x);
// }

// ...: rest parameter VS spread operator
// function foo(a, b, ...c){
//     console.log(a, b);
//     console.log(c);
// }
// foo(1, 2, 3, 4, 5, 'hello');

// const objA = { name: 'Tom', age:20};
// const objB = {id: 1, ...objA};
// objB.name = 'Miranda';
// console.log(objA);
// console.log(objB);
// deep copy: JSON.stringify(obj) / JSON.parse(jsonString)
// const arr1 = [1, 2, 3, 4,5];
// const arr2 = [...arr1];
// arr2.push(6)
// console.log(arr1);
// console.log(arr2);
// shallow copy
// const obj1 = {
//     content: {name: "Tom"}
// }
// const obj2 = {...obj1};
// console.log(obj1 === obj2)
// console.log(obj1.content === obj2.content)
// obj1.content.name = "Miranda";
// console.log(obj2);

// Destructure
// const arr = [1, 2, 3];
// let [a, b, c] = arr;
// console.log(a)
// console.log(b)
// console.log(c)

// const obj = {x: 1,y:2};
// // let {x, y} = obj;
// let {x: a, y: b} = obj
// console.log(a)
// console.log(b)

// Arrow function
// module.exports.x = 10;
// console.log("global", this) //module.exports
// function add(a, b){
//     console.log("traditional fn",this);
//     console.log(a+b)
// }
// // add(1,2);
// const add2 = (a, b)=>{
//     console.log("arrow fn", this);  //module.exports
//     console.log("arrow fn",a+b)
// }
// add2(1,2);
// don't have its own value of this, inherit from surronding env
// function Person(){
//     this.name = "Miranda";
//     this.age = 20;
//     console.log("contructor fn", this)
// }
// const M = new Person();
// console.log(M);

// the value of this

// IIFE: Immediately Inoked Function Expression
// (function greet(str){
//     console.log(str)
// })("hello ");
// (()=>{
//     console.log("hello from arrow")
// })();
// const result = (()=>{
//     let count = 0;
//     function increment(){
//         count++;
//         console.log(count);
//     }
//     return increment;
// })();
// console.log(result);
// result();

// Callback fn
// [1, 2, 3].forEach((v)=>{console.log(v)})
// Array.forEach VS Array.map
// Array.filter VS Array.find
// Array.reduce
// const res = [1, 2, 3, 4].reduce((acc, num)=>{
//     console.log("Prev result", acc)
//     console.log("Curren Elemnt", num)
//     return acc + num;
// }, 10);
// console.log(res);

// Closure
// function counter(){
//     let count = 0;
//     function increment(){
//         count++;
//         console.log(count)
//     }
//     return increment;
// }
// const addCount = counter();
// addCount();
// addCount();
// addCount();

// single-thread: JS only has one Call stack
// sync / async
// JS runtime: engine + web API + callback queue + event loop

// Callback hell
// const authA = setTimeout(()=>{}, 1000)
// const authB = setTimeout(()=>{}, 5000)
// const authTogether = ()=>{
//     setTimeout(()=>{
//         setTimeout(()=>{}, 5000)
//     }, 1000)
// }

// Promise: pending, fullfilled, rejected
let cond = 1;
const newP = new Promise((resolve, reject) => {
  setTimeout(() => {
    if (cond) resolve(100);
    reject("not valid");
  }, 2000);
});
newP
  .then(
    (v) => {
      console.log(v);
      return v;
    },
    (err) => {
      console.log(err);
      throw new Error(err);
    },
  )
  .then((v) => {
    console.log("succeed");
  })
  .catch((err) => {
    console.log(err);
  });
console.log("end of File");
// Promise chain
