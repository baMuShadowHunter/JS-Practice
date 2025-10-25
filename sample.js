// alert("Hii da!!")
// alert("Hii da!!")
// console.log("Hii da Bala! Started Successfully..")

// let a="25"
// let b=10

// console.log(a+b)

// let a =typeof(Number)

// console.log(a+b)

// Arithmetic Operation

// let a = 100;
// let b = 20;
// let c;
// c = a - b;
// c = a + b;
// c = a * b;
// c = a / b;
// c = a % b;
// c = a ** b; //2016 to this standard 
// c = ++a 
// c = --a
// console.log(c)


// Assignment Operation
// let a=10;

// a+=5;
// a-=5;
// a*=5;
// a/=5;
// a%=5;
// console.log(a)

// Comparison Operation
/*
let a=10;
let b="10";
console.log(a==b); // Check the values are same
console.log(a===b); //check the both values and datatypes
console.log(a!=b); //check the both are not same to result true
*/

// Relational Operation

/*
> greater than
< less than
>= greater than equal to
<= less than equal to
*/

// let a=10;
// let b=20;
// console.log("greater than : ",a>b);
// console.log("Less than : ",a<b);
// console.log("Grater than Equalto : ",a>=b);
// console.log("Less than Equalto : ",a<=b);


// var a = 10;
// console.log(a);
// {
//     var a = 20;
//     console.log(a);
// }
// console.log(a);

// let a = 10;
// console.log(a);
// {
//     let a = 20;
//     console.log(a);
// }
// console.log(a);

/*
console.log("5" + 5); //55
console.log("5" - 5); //0
console.log("5" * 5); //25
console.log("5" / 5); //1
console.log("5" % 5); //0
*/

// Correct: Uses backticks
// const language = "JavaScript";
// console.log(`this is the language ${language}`);
// Output: this is the language JavaScript


// let age = prompt("Enter your age: ");
// console.log(Number(age)+10);

// let age = 10;
// let bn=20;
// a=age
// age=bn
// bn=a
// console.log("Age is : ",age);
// console.log("Bn is : ",bn);


/*
//write an expression to calculate simple interest using P,T,R
const principalAmount = 10000;
const annualRate = 8;
const timeInYears = 2;
const simpleInterest = (principalAmount * annualRate * timeInYears) / 100;
console.log("The simple interest is: " + simpleInterest); // Answer : 1600
*/
/*
// Created a Simple Calculator/
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
console.log(`${a} ${operator} ${b} = ${result}`);
console.log("The result is: " + result);
*/
/*
//Type Checking user input

// let a = prompt("Enter any numbers or words : ");

// if (isNaN(a)) {
//     console.log("This is a string");
// }
// else {
//     console.log("This is a number");
// }
*/

// ternary operator

// function welcome(name)  {
//         const result = name ? name : "No Name";
//         console.log("Welcome " + result);       
// }
// welcome("Bala");
// welcome();  
// welcome("null");
/*
// vote eligibility
const age = 20;
const vote = (age>=18) ? "Eligible to vote" : "Not eligible to vote";
console.log(vote)
*/

// student grade    
// const mark = 85;
// const grade = mark >= 90 ? "A Grade" : mark >= 80 ? "B Grade" : "C Grade";
// console.log("grade : ",grade)

//Bitwise Operators
//  & (AND)  | (OR)  ^ (XOR)  ~ (NOT)  << (Left Shift)  >> (Right Shift)  >>> (Zero Fill Right Shift)

// ------------------------------------------day 3------------------------------------------

// Control Statements
// let score = 95;

// if (score >= 90) {
//     console.log("A Grade");
// } else {
//     console.log("B Grade");
// }


// let score = 95;

// if (score >= 90) {
//     console.log("A Grade");
// }
// else if (score >= 80) {
//     console.log("B Grade");
// }
// else {
//     console.log("C Grade");
// }


// switch case
// let day = 3;
// let dayName;

// switch (day) {
//     case 1:
//         dayName = "Monday";
//         break;
//     case 2:
//         dayName = "Tuesday";
//         break;
//     case 3:
//         dayName = "Wednesday";
//         break;
//     case 4:
//         dayName = "Thursday";
//         break;
//     case 5:
//         dayName = "Friday";
//         break;
//     case 6:
//         dayName = "Saturday";
//         break;
//     case 7:
//         dayName = "Sunday";
//         break;
//     default:
//         dayName = "Invalid day";
// }
// console.log(dayName);    


// for loop
//  for (let i = 5; i <= 50; i=i+5) {
//      console.log("Hello Bala",i);
//  }

// for in loop
// const person = {fname:"John", lname:"Doe", age:25};

// for (let x in person) {
//   console.log(x + ": " + person[x]);
// }

// for of loop
// const cars = ["BMW", "Volvo", "Mini"];

// for (let x of cars) {
//   console.log(x);
// }

// nested for loop
// for (let i = 1; i <= 3; i++) {
//     for (let j = 1; j <= 3; j++) {
//         console.log(i, j);
//     }
// }

//outer loop

// outerLoop:
// for (let i = 0; i < 3; i++) {
//     //inner loop
//     for (let j = 0; j < 3; j++) {
//         if (i === 1 && j === 1) {
//             break outerLoop;
//         }
//         console.log(i, j);
//     }
// }

// continue  
// outerLoop:
// for (let i = 1; i <= 3; i++) {
//     for (let j = 1; j <=3; j++) {
//         if (j === 2) {
//             continue outerLoop;
//         }
//         console.log(i, j);
//     }
// }

// pattern printing
// let n = 5;
// let pattern = "";
// for (let i = 1; i <= n; i++) {
//     for (let j = 1; j <= i; j++) {
//         pattern += "* ";
//     }
//     pattern += "\n";
// }
// console.log(pattern);

// left triangle
// let n = 5;
// let pattern = "";
// for (let i = 1; i <= n; i++) {
//     for (let j = i; j <= n; j++) {
//         pattern += "  ";
//     }
//     for (let k = 1; k <= i; k++) {
//         pattern += "* ";
//     }
//     pattern += "\n";
// }
// console.log(pattern);


// Number Gussing Game

// const number = 5;
// let guessingNumber;
// let attempts = 0;

// while(true) {
//     guessingNumber = parseInt(prompt("Guess a number between 1 to 10: "));
//     attempts++;
//     if (guessingNumber === number) {
//         alert(`Congratulations! You guessed the number ${number} in ${attempts} attempts.`);
//         break;
//     } else if (guessingNumber < number) {
//         alert("Too low! Try again.");
//     } else {
//         alert("Too high! Try again.");
//     }
// }

// Practice set

// Print all numbers  1-50, but skip multiple 5.

// for (let i = 1; i <= 50; i++) {
//     if (i % 5 === 0) {
//         continue;
//     }
//     console.log(i);
// }

// print multiplication table of 7
// let num = 7;
// for (let i  = 1; i<=10; i++){
//     console.log(`${num} x ${i} = ${num*i}`);
// }

// find the sum of all odd numbers upto 100

    // let sum = 0;
    // for(let i = 1; i <=100; i++){
    //     if( i % 2 !=0){
    //         sum+=i;
    //     console.log(i)
    //     }
       
    // }
    //  console.log("sum of odd numbers:",sum)


// Display characters of a string one by one using for...of.
// one way default 
// for (let char of "BaMu"){
// console.log(char);
// }
// another one way user input
// let name = prompt("Enter your name i print the all characters! : ")
// for (let char of name){
// console.log(char);
// }

// Use switch to print month name based on month number.
// let monthNumber = parseInt (prompt("Enter the number 1 yo 12 i show the month : "));
// let month;
// switch (monthNumber){
//     case 1:
//         month = "January"
//         break;
//     case 2:
//         month = "February"
//         break;
//     case 3:
//         month = "March"
//         break;  
//     case 4:
//         month = "April"
//         break;
//     case 5:
//         month = "May"
//         break;
//     case 6:
//         month = "June"
//         break;  
//     case 7:
//         month = "July"
//         break;
//     case 8:
//         month = "August"
//         break;  
//     case 9:
//         month = "September"
//         break;
//     case 10:
//         month = "October"
//         break;  
//     case 11:
//         month = "November"
//         break;
//     case 12:
//         month = "December"
//         break;  
//     default:
//         month = "Invalid month number"
//         break;
// }
// console.log(month)



// Advanced: Print a triangle pattern using nested loops.

// let n=5;
// let pattern = "";
// for (let i=1;i<=n;i++){
//     for(let j=i;j<=n;j++){
//         pattern+=" ";
//     }
//     for(let k=1;k<=i;k++){
//         pattern+="* "
//     }
//     pattern+="\n"
// }
// console.log(pattern)



// user have 3 input number and find the largest number

// let num1 = parseInt (prompt("Enter first number: "));
// let num2 = parseInt (prompt("Enter second number: "));
// let num3 = parseInt (prompt("Enter third number: "));

// if (num1 >= num2 && num1 >= num3){
//     console.log("Largest number is: ",num1);
// }
// else if (num2 >= num1 && num2 >= num3){
//     console.log("Largest number is: ",num2);
// }
// else{
//     console.log("Largest number is: ",num3);
// }

// -----------------------------------Bala------------------------------------------

//1. Get a number as input from the user. Check whether the number is odd number or even number.

// let number = parseInt(prompt("Enter the number :"));
// if(number % 2 == 0){
//     console.log(`It's Even Number : ${number} `)
// }else{
//     console.log(`It's odd Number : ${number} `)
// }

//2. Get 3 numbers from the users as num1, num2, num3. Check which one is the largest number.

// let a = parseInt (prompt("Enter first number: "));
// let b = parseInt (prompt("Enter second number: "));
// let c = parseInt (prompt("Enter third number: "));

// if (a > b && a > c){
//     console.log("Largest number is: ",a);
// }
// else if (b > a && b > c){
//     console.log("Largest number is: ",b);
// }
// else{
//     console.log("Largest number is: ",c);
// }

//3. Get a number from the users. Check whether the number is divisible by 8.

// let a = parseFloat(prompt("Enter the Number : "));
// if( a % 8 == 0){
//     console.log(a,"It's divisible by 8")
// }else{
//      console.log(a,"It's not divisible by 8")
// }

//4. Get a number from the users. Check whether the number is divisible by both 3 and 5.

// let b = Number(prompt("Enter The Number :"));
// if (b % 3 == 0 && b % 5 == 0 ){
//     console.log(b,"Is divisible by both 3 and 5")
// }else if(b % 3 == 0){
//      console.log(b,"Its divisible by 3 but not divisible by 5")
// }else if(b % 5 == 0 ){
//      console.log(b,"Its divisible by 5 but not divisible by 3")
// }else{
//     console.log(b,"It is neither divisible by 3 nor divisible by 5")
// }

// 5. Get 5 numbers as input from user and store it in the variable a, b, c, d, e. Execute the following operation and display the result a + b - c * d / e
// let a=1;
// let b=2 ;
// let c=3;
// let d=4;
// let e=5;
// second input
// let a=10
// let b= 20
// let c = 3
// let d = 5
// let e= 2
// second input
// let a=1
// let b= 1
// let c = 1
// let d = 1
// let e= 1
// console.log(a + b - c * d / e)

// 6. Write a program that gets a number n from the user. The task is to print the number from 1 to n by mentioning it as odd or even number.
// array = []
// let n = prompt("Enter The Number:") ;

// for (i=1;i<=n;i++)
// if (i%2==0){
//     array.push(`${i} EVEN`)
// }
// else{
//     array.push(`${i} ODD`)
// }
// console.log(array)

// 7. Get a number input n from the user. Print the numbers 1 to n with the
// following conditions:
// ● Print Fizz - if the number is divisible by 3
// ● Print Buzz - if the number is divisible by 5
// ● Print FizzBuzz - if the number is divisible by both 3 and 5
// ● Print the number itself - if all the above condition fails
// let b = parseInt(prompt("Enter The Number :"));
// let a = []
// let c;
// for (let i = 1; i <= b; i++) {
//     if (i % 3 == 0 && i % 5 == 0) {
//         c = "FizzBuzz"
//         // a += c
//         a.push(c)
//     } else if (i % 3 == 0) {
//         c = "Fizz"
//         // a += c
//         a.push(c)
//     } else if (i % 5 == 0) {
//         c = "Buzz"
//         // a += c
//         a.push(c)
//     } else {
//         c = i
//         // a += c
//         a.push(c)
//     }
// }
// console.log(a)