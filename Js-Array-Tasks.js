// Write a program to calculate the sum of all numbers in an array.

/* let nums = [5, 10, 15, 20];
let sum = 0
for (key of nums){
    sum+=key
}
console.log(sum) */

//output: 50

// --------------> Self Coded

//----------------------------------------------Task 2-------------------------------------------------//
//Find the largest and smallest numbers in an array without using Math.max() or Math.min().

/* let arr = [12, 7, 45, 22, 9];
let min = arr[0];
let max = arr[0]
for (let i=0; i<arr.length; i++){
    if (arr[i]<min){
        min = arr[i]
    }
     if (arr[i]>max){
        max = arr[i]
    }
}
console.log("The Minimum :",min)
console.log("The Max :",max) */

//output: The Minimum : 7
//output: The Max : 45

//------------> Self Coded i used "min = 0" but  "min = arr[0];" debugging helped jayalakshmi"
//----------------------------------------------Task 3-------------------------------------------------//
//  Reverse the array elements manually using a loop.

/* let arr = [1, 2, 3, 4, 5];
let arrr = []
for(i=arr.length; i>0; i--){
    arrr.push(i)
}
console.log(arrr) */

//output: [5, 4, 3, 2, 1]

//-------------> self coded 
//----------------------------------------------Task 4-------------------------------------------------//
//  Remove duplicate elements and return only unique values.

// let arr = [1, 2, 2, 3, 4, 4, 5,2];
// let narr = [...new Set(arr)];
// console.log(narr)

//output: [1, 2, 3, 4, 5]

//-------------> self coded
//----------------------------------------------Task 5-------------------------------------------------//
// Display how many times each element appears in an array.

/* let arr = ["apple", "banana", "apple", "cherry", "banana", "apple"];
let counts = []
for (i=0; i<arr.length; i++){
    if(counts[arr[i]]){
        counts[arr[i]]+=1
    }else{
        counts[arr[i]] = 1
    }
}
console.log(counts) */

//output: { apple: 3, banana: 2, cherry: 1 }

//-------------> self coded 

//----------------------------------------------Task 6-------------------------------------------------//
// Return a new array containing only even numbers.

/* let arr = [10, 15, 20, 25, 30,35,32,10];
let narr = []
for (i=0; i<arr.length; i++){
    if(arr[i]%2===0){
        narr.push(arr[i])
    }
}
console.log(narr) */

//output: [10, 20, 30, 32, 10]

//-------------> self coded

//----------------------------------------------Task 7-------------------------------------------------//
// Combine two arrays and remove duplicates.

/* let a = [1, 2, 3];
let b = [3, 4, 5];

console.log(...new Set(a.concat(b))) */

//output: [1, 2, 3, 4, 5]

//-------------> self coded

//----------------------------------------------Task 8-------------------------------------------------//
// Sort an array in both ascending and descending order using .sort().

/* let nums = [42, 7, 19, 3, 25];
let asc = [...nums].sort((a, b) => a - b)
let des = [...nums].sort((a, b) => b - a)
console.log("Ascending :",asc)
console.log("Descending :",des) */

//output: Ascending : [ 3, 7, 19, 25, 42 ]
//output: Descending : [ 42, 25, 19, 7, 3 ]

//-------------> self coded and refer the sort method syntax in github link
//----------------------------------------------Task 9-------------------------------------------------//
// Find the second largest element in an array.

/* let arr = [10, 25, 5, 30, 20];
let des = [...arr].sort((a, b) => b - a)
console.log("Second Largest Number is :",des[1]) */

//output: Second Largest Number is : 25

//-------------> self coded
//----------------------------------------------Task 10-------------------------------------------------//
// Convert a nested array into a single-level array.

/* let arr = [1, [2, [3, 4]], 5];

const a2 = arr.flat(Infinity);
console.log(a2); */

//output: [ 1, 2, 3, 4, 5 ]

//-------------> self coded
//----------------------------------------------Task 11-------------------------------------------------//
// Create a new array where each element is the square of the numbers in the original array.

/* let nums = [2, 4, 6, 8];
let v = nums.map(num => num**2)
console.log(v) */

//output: [ 4, 16, 36, 64 ]

//-------------> self coded
//----------------------------------------------Task 12-------------------------------------------------//
// Return only the words that have more than 4 characters.

/* let words = ["sun", "planet", "moon", "star", "galaxy"];
let v = words.filter(num => num.length > 4)
console.log(v) */

//output: [ 'planet', 'galaxy' ]

//-------------> self coded
//----------------------------------------------Task 13-------------------------------------------------//
//  Find the sum of all numbers in the array using the reduce() method.

/* let numbers = [5, 10, 15, 20];
let sum = numbers.reduce((a,b) => a+b)
console.log(sum) */

//output: 50

//-------------> self coded
//----------------------------------------------Task 14-------------------------------------------------//
// Find the first negative number from the array.

/* let arr = [4, 8, -3, 9, -6];
let FirstNegative = arr.find(num => num < 0)
console.log(FirstNegative) */

//output: -3

//-------------> self coded
//----------------------------------------------Task 15-------------------------------------------------//
// Sort the given array of objects in ascending order of age.

/* let users = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 19 },
  { name: "Charlie", age: 30 }
];
console.log(users.sort((a,b) => a.age - b.age)) */

//output: [ { name: 'Bob', age: 19 }, { name: 'Alice', age: 25 }, { name: 'Charlie', age: 30 } ]

//-------------> self coded
//----------------------------------------------Task 16-------------------------------------------------//
// Return an object showing the count of even and odd numbers.

/* let nums = [1, 2, 3, 4, 5, 6];
let count = {even:0,odd:0}
    let num = nums.reduce((a, b) => {
        if (b % 2 === 0){
            count.even ++
        }else{
            count.odd ++
        }

    }, 0)
    console.log(count) */

//output: { even: 3, odd: 3 }

//-------------> self coded 
//----------------------------------------------Task 17-------------------------------------------------//
//  Remove null, undefined, false, 0, "", and NaN values from the array.

/* let arr = [0, "hello", false, 42, "", null, "JS", undefined];
let narr = []
console.log( arr.filter(Boolean)) //One way
for (i=0;i<arr.length;i++){       // another way
    if(arr[i]){
        narr.push(arr[i])
    }
}
console.log(narr) */

//output: [ 'hello', 42, 'JS' ]

//-------------> self coded
//----------------------------------------------Task 18-------------------------------------------------//
// Capitalize the first letter of each word in an array.

/* let words = ["apple", "banana", "cherry"];
let cw = words.map(a => a.charAt(0).toUpperCase()+ a.slice(1))
console.log(cw) */

//output: [ 'Apple', 'Banana', 'Cherry' ]

//-------------> self coded
//----------------------------------------------Task 19-------------------------------------------------//
// Split the array into two arrays — one with even numbers and one with odd numbers.

/* let numbers = [10, 15, 20, 25, 30];
let odd = []
let even = []
for (i=0;i<numbers.length;i++){
    if (numbers[i]%2==0){
        even.push(numbers[i])
    }else{
        odd.push(numbers[i])
    }
}
console.log("Even :", even)
console.log("Odd :", odd) */

//output: Even : [ 10, 20, 30 ]
//output: Odd : [ 15, 25 ]

//-------------> self coded
//----------------------------------------------Task 20-------------------------------------------------//
// Given an array of student marks, find the average.

/* let marks = [75, 80, 90, 85];
let total = marks.reduce((a,b) => a + b);
let average = total / marks.length
console.log("Average :",average) */

//output: Average : 82.5

//-------------> self coded
//=====================================Student Marks Analyzer==================================//

/* let students = [
  { name: "Alice", marks: 85 },
  { name: "Bob", marks: 58 },
  { name: "Charlie", marks: 92 },
  { name: "David", marks: 37 },
  { name: "Eva", marks: 76 }
];

// Display All Students
console.log("All Students: ")
students.forEach(students => {
    console.log(` ${students.name} - ${students.marks}`)
})

//Use the reduce() method to find:
let total = students.reduce((a,b) => a+b.marks,0)
let Avg = total / students.length
console.log("\nTotal & Average Marks :")
console.log("The total marks of all students :",total)
console.log("The average marks of the class :",Avg)

//Find Highest and Lowest Marks
let high = [...students].sort((a,b) => b.marks - a.marks )
console.log("\nHighest and Lowest Marks :")
console.log(`Highest mark is ${high[0].name} - ${high[0].marks}`)
console.log(`Highest mark is ${high[high.length-1].name} - ${high[high.length-1].marks}`)

// Filter Passing Students
console.log("\nFilter Passing Students")
let pass = [...students].filter((a) => a.marks>=40)
pass.map(function(stn){
  console.log(stn.name+" - "+stn.marks)
})

//Sort Students by Marks
console.log(`\nHighest to Lowest mark is :`)
let sor = [...students].sort((a,b) => b.marks - a.marks)
sor.forEach(students => {
    console.log(` ${students.name} - ${students.marks}`)
})

//Display Top 3 Performers
console.log(`\nTop 3 performars are :`)
let sliced = sor.slice(0,3)
sliced.forEach(students => {
     console.log(` ${students.name} - ${students.marks}`)
}) */


//output:
// All Students: 
//  Alice - 85
//  Bob - 58
//  Charlie - 92
//  David - 37
//  Eva - 76

// Total & Average Marks :
// The total marks of all students : 348
// The average marks of the class : 69.6

// Highest and Lowest Marks :
// Highest mark is Charlie - 92
// Highest mark is David - 37

// Filter Passing Students
// Alice - 85
// Bob - 58
// Charlie - 92
// Eva - 76

// Highest to Lowest mark is :
//  Charlie - 92
//  Alice - 85
//  Eva - 76
//  Bob - 58
//  David - 37

// Top 3 performars are :
//  Charlie - 92
//  Alice - 85
//  Eva - 76     

//-------------> self coded it's easy whihch means completed all 20 tasks