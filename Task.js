/*1. Greeting Function
Write a function greet(name) that takes a name and prints:
 Hello, <name>! Welcome to JavaScript.*/

//  function greet(name){
//     console.log("Hello, " + name + "! Welcome to JavaScript.");
//  }
//  greet("Deepan");

// Refferd by -----> Self Coded

/*2. Sum of Two Numbers
Write a function add(a, b) that returns the sum of two numbers.*/

// function add(a,b){
//     return a+b
// }
// console.log(add(5, 7));

// Refferd by -----> Self Coded

/* 3. Default Parameters
Create a function multiply(a, b = 2) that multiplies two numbers.
 If b is not passed, it should use the default value 2. */

//  function multiply(a,b = 2){
//     return a*b
// }
// console.log(multiply(5));
// console.log(multiply(5, 3));

// Refferd by -----> Self Coded

/* 4. Find Maximum of Three Numbers
Write a function findMax(a, b, c) that returns the largest of three numbers.*/

// function findMax(a, b, c){
//     if(a>b && a>c){
//         console.log(a);
//     }else if(b>a && b>c){
//         console.log(b);
//     }else{
//         console.log(c);
//     }
// }
// findMax(10, 25, 20)

// Refferd by -----> Self Coded


/* 5. Count Words in a Sentence
Write a function countWords(sentence) that returns how many words are in a sentence.*/

// function countWords(wordss){
//     let words = wordss.split(" ");
//     return words.length
// }
// console.log(countWords("JavaScript is fun to learn"));

// Refferd by -----> Self Coded

/* 6. Check Even or Odd
Write an arrow function isEven(num) that returns true if a number is even, otherwise false. */

// function isEven(num){
//     if(num%2 == 0){
//         return true        
//     }else{
//         return false
//     }
// }
// console.log(isEven(8));
// console.log(isEven(13));

// Refferd by -----> Self Coded

/* 7. Calculate Factorial
Write a function factorial(n) that returns the factorial of a number. */

// function factorial(n) {
//     if (n===0){
//         return 1
//     }else{
//         return n*factorial(n - 1)
//     }
// }
// console.log(factorial(5));

// Refferd by -----> Self Coded then used Google slides for formula help

// 8. Count Vowels in a String
// Write a function countVowels(str) that counts how many vowels (a, e, i, o, u) are in a string.
/*
function countVowels(str) {
    count = 0;
    let vowel = "AEIOUaeiou"
    for (i = 0; i < str.length; i++) {
         let ii = str[i];
        if (vowel.includes(ii)) {
            count += 1
        } 
    }

    console.log(str,`The vowels count is ${count}`)
}
countVowels("JavaScript");
*/

// Refferd by -----> Self Coded

// 9. Create a function to check prime number
// Write a function isPrime(num) that returns true if the number is prime, otherwise false.

/*
function isPrime(num){
    if(num <= 1){
        return false;
    }else if(num <= 3){
        return true;
    }
    else if (num % 2 === 0 || num % 3 === 0){
    return false;
    }
    return true;
}
console.log(isPrime(2));
console.log(isPrime(10));
console.log(isPrime(7));
console.log(isPrime(15));
*/

// Refferd by -----> Self Coded then "num % 3 === 0" part used Google for syntax help

// 10. Closure Counter
// Write a function createCounter() that returns another function.
//  Every time the inner function is called, it should return the next count (1, 2, 3...).

// function createCounter(){
//     let counter = 0;
//     return function createCounterr(){
//         counter+=1
//         return counter;
//     }
// } 
// const counter = createCounter();
// console.log(counter());
// console.log(counter());
// console.log(counter());
// console.log(counter());
// console.log(counter());

// Refferd by -----> Self Coded then used the Slides for the syntax help
// ==================================Reffered the Slide====================

// =======================🎯 Mini Project=============================
//  1 – Simple Calculator
// Concepts Covered:
// Functions, parameters, return values, conditionals, switch-case.
// Objective:
// Build a calculator that performs addition, subtraction, multiplication, and division using functions.

// Requirements:
//1. Create a function calculate(num1, num2, operator)
//2. Use switch or if-else to perform the selected operation.
//3. Print the result in the console or webpage.

/*
function calculate(){
let a = parseFloat(prompt("Enter first number: "));
let b = parseFloat(prompt("Enter second number: "));
let operator = prompt("Enter operator (+, -, *, /): ");
let result;
if (operator == "+") {
    result = a + b;
}
else if (operator == "-") {
    result = a - b;
}
else if (operator == "*") {
    result = a * b;
}
else if (operator == "/") {
    result = a / b;
}
else {
    result = "Invalid operator";
}
// return result;
console.log(`${a} ${operator} ${b} = ${result}`);
console.log("The result is: " + result);
}

calculate();
*/

// Refferd by -----> Self Coded


// -------------------------------Student Grade Evaluator-02----------------

// Concepts Covered:
// Function declaration, return values, conditional statements, arrow functions.
// Objective:
// Create a function that takes marks and returns the student’s grade.
// Requirements:
// Function getGrade(marks) returns a grade based on score.

// Logic:
// >=90: A
// >=80: B
// >=70: C
// >=60: D
// Else: Fail

// let ip=Number(prompt("Enter mark:"))
// function getGrade(marks){
//     if (isNaN (marks)){
//         return "Enter Valid Number!"
//     }else if (marks <= 100 && marks >= 90){
//         return "A"
//     }else if(marks <= 89 && marks >= 80){
//         return "B"
//     }else if(marks <= 79 && marks >= 70){
//         return "C"
//     }else if(marks <= 69 && marks >= 60){
//         return "D"
//     }else{
//         return "FAIL"
//     }
// }
// console.log(getGrade(ip))

// Refferd by -----> Self Coded 

// ========================3.Random Quote Generator=======================
// Arrow functions, arrays, random number generation, callback functions.
// Objective:
// Display a random motivational quote each time the user clicks a button.
// Requirements:
// 1. Store 5–10 quotes in an array.
// 2. Create a function getRandomQuote() that returns a random quote.
// 3. Display the result on the page (in console or innerHTML).

// <!DOCTYPE html>
// <html lang="en">

// <head>
//     <meta charset="UTF-8">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <title>js</title>
// </head>

// <body>
//     <center>
//         <h1>Random Quote Generator created By BaMu</h1>
//         <p id="quoteDisplay"></p>
//         <button id="quoteButton">Get Random Quote</button>
//     </center>
//     <script>
//         let quotes = [
//             "Every scar tells a story — not of pain, but of survival. -BaMu",
//             "Silence speaks louder when your heart knows the truth. -BaMu",
//             "Rise, even when the world thinks you fell. -BaMu",
//             "Some journeys begin with heartbreak but end with destiny. -BaMu",
//             "Your path is yours — even if it moves slow, it still moves. -BaMu",
//             "The fire inside you will always burn louder than their doubts. -BaMu",
//             "Feel the storm, but never forget you are the thunder. -BaMu",
//             "Don’t stop until your dream becomes your life. -BaMu",
//             "Broken moments create unbreakable souls. -BaMu",
//             "One day, every struggle will make sense — trust your journey. -BaMu"
//         ];

//         document.getElementById("quoteButton").addEventListener("click", function () {
//             let randomIndex = Math.floor(Math.random() * quotes.length);
//             document.getElementById("quoteDisplay").innerText = quotes[randomIndex];
//         });
//     </script>
// </body>

// </html>

// Refferd by -----> used Google for syntax help

// ========================4.Temperature Converter=======================

// Functions, parameters, return values, conditionals, arrow functions (optional)
// Objective:
// Build a temperature converter that converts between Celsius and Fahrenheit.
// Requirements:
    // 1.Create a function convertTemperature(value, scale)
// 2.If scale is "C", convert to Fahrenheit → (value * 9/5) + 32
// 3.If scale is "F", convert to Celsius → (value - 32) * 5/9
// 4.Return the converted value.

/* function convertTemperature(value, scale){
    if (scale == "C"){
       let f = (value * 9/5) + 32
       return `Temperature in Fahrenheit: ${f}°F`
    }else if(scale == "F"){
         let c = (value - 32) * 5/9
         return `Temperature in Celsius: ${c}°C`
    }else{
        return "Enter a Valid inputs"
    }
}
console.log(convertTemperature(25, "C"))
console.log(convertTemperature(100, "F")) */

// Refferd by -----> Self Coded 


// -----------------------------------------------Bala Anna------------------------------------------------

/* let str ="Bamu"
count = 0
// for (i=0; i<str; i++){
//     count+=1
// }
for (let b of str){
    count+=1
}

 console.log(str)
console.log(count)
*/




3.

/*
let str ="programming is fun"
count = 0
// let vowel = "AEIOUaeiou"
for (i=0; i<str.length; i++){
    let ii = str[i];
    //  if (vowel.includes(ii)){
    if (ii == 'a' || ii == 'e' || ii == 'i' || ii == 'o' || ii == 'u'){
    count+=1
    console.log(count)
    }else{
        console.log("No Vowels in the line")
    }
}

console.log(str)
console.log(`The vowels count is ${count}`)
*/

//4. Use a loop to reverse the string "javascript" and store the result in a new string.

// let str = "javascript"
// let ns = ""
// for (let i = str.length-1; i>=0; i--){
//      ns = str[i]
//     console.log(ns)
// }

// 5. Uppercase Each Character:
// Loop through the string "loop" and create a new string with all letters in uppercase (without using .toUpperCase() directly on the whole string).

// let str = "javascript"
// let ns = ""

// for (i=0; i<str.length; i++){
//     let charcode = str.charCodeAt(i)
//     if (charcode >= 97 && charcode <= 122) {
//     charcode=charcode-32
//     }
//       ns += String.fromCharCode(charcode);
   
// }
//  console.log(ns)






// ==================Additional==============
// -----------------------------1--------------------
/*
let a = ["bala","bamu","bagn"]
// Push
let b=12;
if (b%2==0){
    a.push("even")
}else{
    a.push("odd")
}
console.log(a)
// POP
a.pop()
console.log(a)
// SHIFT
a.shift()
console.log(a)
// UNSHIFT
a.unshift("Lemon");
console.log(a)
// SLICE
let bala = a.slice(1);
a.push(bala)
console.log(a)
// SPLICE
bala  = a.splice(2, 0, "Lemon", "Kiwi");
console.log(a)
*/

// -----------------------------2--------------------
/*
let up = ["boat", "boult", "sony"];
let mark = 82;

// PUSH 
if (mark > 30) {
    up.push("pass");
} else {
    up.push("Fail");
}
console.log("push:", up);

// POP 
up.pop();
console.log("pop:", up);

// SHIFT
up.shift();
console.log("shift:", up);

// UNSHIFT 
up.unshift("Skullcandy");
console.log("unshift:", up);

// SLICE
let newpod = up.slice(0, 2);
up.push(newpod);
console.log("slice:", up);

// SPLICE 
up.splice(1, 0, "mustang", "amzonBasis");
console.log("splice:", up);
*/