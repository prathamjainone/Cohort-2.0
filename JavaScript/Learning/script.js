// /*Practice Zone
// . Declare your name and city using const , and your age using let .
// . Try this and observe the result:
// . Guess the output:
// . Create a const object and add a new key to it — does it work?
// . Try accessing a let variable before declaring it — what error do you see?
// . Change a const array by pushing a value. Will it throw an error?
// */

// const name="pratham jain";
// const city="gwalior";
// let age=21;

// console.log(count);
// var count=22;

// const obje={name:"pratham"}

// console.log(obje);

// obje.age=21;
// console.log(obje);

// const arr=[1,2,3,4,5]
// console.log(arr);

// arr.push(6);
// console.log(arr);

// console.log(null + 1);
// console.log("5" + 3);
// console.log("5" - 3);
// console.log(true + false);

// console.log(typeof []);
// console.log(typeof null);
// console.log(typeof 123n);


// function isEmpty(a) {
//     if (a == null || a === "") { //or a===null||a===""||a===undefined
//         return true;
//     }
//     return false;
// }

// console.log(isEmpty(""));

// console.log("10" + 1);
// console.log("10" - 1);
// console.log(true + false);
// console.log(!!"Sheryians");

// let str = "42";
// let num = +str;
// console.log(num); 

// let msg = age >= 18 ? "Adult" : "Minor";

// console.log(msg);

// function calc(a,b,operation){
//     switch(operation){
//         case "add":
//             return a+b;
//         case "subtract":
//             return a-b;
//         case "multiply":
//             return a*b;
//         case "divide":
//             return a/b;
//         default:
//             return "Invalid operation";
//     }
// }

// console.log(calc(1,2,"add"));

// for(let char of "pratham"){
//     console.log(char);
// }

// let numss=[1,2,3,4]
// numss.forEach((num)=>{
//     num=num*2;
//     console.log(num);
// })
// console.log(numss);

// let obja={name:"pj",profile:"baller"}
// for(let ob in obja){
//     console.log(`${ob}:${obja[ob]}`);
// }

/*Practice Zone
. Print 1 to 10 using for
. Print even numbers between 1 to 20
. Reverse a string using loop
. Sum of all numbers in an array
. Print all characters of a name using for-of
. Print all object keys and values using for-in
. Use continue to skip a specific number
. Guess number game – use while to ask until correct
. Pattern: Print triangle using *
. Sum of even numbers in an array using forEach*/

// for(let i=1;i<11;i++)console.log(i);
// for(let i=1;i<21;i++){
//     if(i%2==0){
//         console.log(i);
//     }
// }

// let nums=[1,2,3,4,6]
//     let sum=0;
// nums.forEach((num)=>{
//     if(num%2==0)sum+=num;  
// })
// console.log(sum);


// for(let row=0;row<4;row++){
//     let triangle=""
//     for(let col=0;col<=row;col++){
//         triangle+="*"
//     }
//     console.log(triangle);
// }
// let box=[1,2,3]
// console.log(...box);

// // Closure Counter Function
// function createCounter() {
//     let count = 0; // This is the "backpack" variable

//     return function() {
//         count++; // Remembers and updates 'count'
//         return count;
//     };
// }

// const counter = createCounter();

// console.log(counter()); // 1
// console.log(counter()); // 2
// console.log(counter()); // 3

// // Discount Calculator (HOF Style)

// function createDiscountCalculator(discountPercent) {
//     return function(price) {
//         return price - (price * (discountPercent / 100));
//     };
// }

// const tenPercentOff = createDiscountCalculator(10);
// const halfPrice = createDiscountCalculator(50);

// console.log(tenPercentOff(1000)); // 900
// console.log(halfPrice(1000));    // 500

// Make a toUpperCase transformer using HOF

// function uC(a){
//     return a.toUpperCase();
// }

// function ans(str,transformer){
//     return transformer(str);
// }

// console.log(ans("sam",uC));

let nums = [1, 2, 3, 4];
let total=nums.reduce((acc, num) => acc + num, 0);
console.log(total);
console.log(nums.find(n => n > 2));// First match
console.log(nums.some(n => n > 3)); // At least one true
console.log(nums.every(n => n > 1))

console.log([10, 2, 3].sort());