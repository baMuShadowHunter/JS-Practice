//----------------------------------------------Task 1-------------------------------------------------//
//  Create an object named car with properties:
//  brand, model, year, and color.
//  Display each property value in the console.

/* const car = {
  brand: "Toyota",
  model: "Camry",
  year: 2022,
  color: "Blue"
};

// console.log(car)
for (let keys in car){
    console.log(car[keys])
} */

// Output:
// Toyota
// Camry
// 2022
// Blue

//---------> Not reffered by any sources

// ----------------------------------------------Task 2-------------------------------------------------//
//Create an object person with name and age.
// Add a new property country.
// Update the age.
// Delete the name property.
// Then log the final object.

/* let person = { age: 19, name : "Bala",}
person.country = "India"
person.age = 26
delete person.name;
console.log(person) */

// Output: { age: 26, country: 'India' }

//----------> Not reffered by any sources

//----------------------------------------------Task 3-------------------------------------------------//
// Create an object calculator with methods:
// add(a, b) → returns sum
// subtract(a, b) → returns difference
// multiply(a, b) → returns product

/* const calculator = {
    add : function(a,b){
        return a+b
    },
    
    subtract : function(a,b){
        return a-b
    },
    
    multiply : function(a,b){
        return a*b
    }
}

console.log(calculator.add(4, 2));      // 6
console.log(calculator.subtract(4, 2)); // 2
console.log(calculator.multiply(4, 2)); // 8 */

// Output:
// 6
// 2
// 8

//--------> Not reffered by any sources

//----------------------------------------------Task 4-------------------------------------------------//
//  Create an object student with nested details:

/* const student = {
  name: "Anu",
  grade: "A",
  marks: {
    math: 90,
    english: 88,
    science: 92
  }
};
// for (key in student){
console.log("Student Name", ":", student.name)
console.log("Math Marks", ":", student.marks.math)
console.log("Science Marks", ":", student.marks.science)
// } */

//Output:
// Student Name : Anu
// Math Marks : 90
// Science Marks : 92

//------------------> Not reffered by any sources

//----------------------------------------------Task 5-------------------------------------------------//
// Write a program to count how many properties are inside an object.

/* const laptop = {
  brand: "HP",
  processor: "i5",
  ram: "16GB",
  storage: "512GB SSD"
};

let count = Object.keys(laptop).length
console.log("Property Count:",count) */

// Output: Property Count: 4

//---------------> Not reffered by any sources

//----------------------------------------------Task 6-------------------------------------------------//
//  Create a shallow copy of an object using Object.assign().

// 1.Create a shallow copy using Object.assign().
// 2.Change marks.math to 100 in the copied object.
// 3.Print both original and copied objects.
// 4.Observe what happens and explain why.


/* const student = {
  name: "John",
  marks: { math: 90, science: 85 }
};


let Cstudent = Object.assign({}, student)
console.log("Original :", student)
console.log("Copied :", Cstudent)

Cstudent.marks.math = 100;
console.log("Original 2:", student)
console.log("Copied 2:", Cstudent) */

// Output:
// Original : { name: 'John', marks: { math: 90, science: 85 } }
// Copied : { name: 'John', marks: { math: 90, science: 85 } }
// Original 2: { name: 'John', marks: { math: 100, science: 85 } }
// Copied 2: { name: 'John', marks: { math: 100, science: 85 } }

// Explanation:
// Object.assign() creates a shallow copy.This means it copies the values of the top - level properties.
// For nested objects, only the reference is copied in memory, not the actual object itself.
// So I modify the nested object in the copied object, it also affects the original object since both objects point to the same nested object in memory.

//---------> Reffered by google search for shallow copy differ deepcopy explanation

//----------------------------------------------Task 7-------------------------------------------------//
// Combine the following objects into one single object:
// const obj1 = { id: 101, name: "Alice" };
// const obj2 = { age: 25 };
// const obj3 = { country: "India", department: "IT" };

// Use both:
// 1.Object.assign()
// 2.Spread operator ({...obj1, ...obj2, ...obj3})

/* const obj1 = { id: 101, name: "Alice" };
const obj2 = { age: 25 };
const obj3 = { country: "India", department: "IT" };
//Object.assign()
const Merge =Object.assign({},obj1,obj2,obj3)
console.log("Merged Using Object.asign() :",Merge)
//Spread Operator
const Merge2 ={...obj1,...obj2,...obj3}
console.log("Merged Using Spred Operator :",Merge2) */

// Output:
// Merged Using Object.asign() : { id: 101, name: 'Alice', age: 25, country: 'India', department: 'IT' }
// Merged Using Spred Operator : { id: 101, name: 'Alice', age: 25, country: 'India', department: 'IT' }

//---------> Not reffered by any sources

//----------------------------------------------Task 8-------------------------------------------------//
// Create an object and make it immutable using Object.freeze().
 
// Try to:
// 1.Add a new property
// 2.Modify an existing property
// 3.Delete a property

/* const settings = {
  theme: "dark",
  fontSize: 14
};
Object.freeze(settings);
settings.theme = "light";
settings.mode = "compact";
delete settings.fontSize;
console.log(settings); */

// Yeah, (No change occurs because object is frozen) 

// Output: { theme: 'dark', fontSize: 14 }

//----------> Not reffered by any sources

//----------------------------------------------Task 9-------------------------------------------------//
//  Use destructuring to extract values from this object and rename them:

// const user = {
//   name: "Ravi",
//   age: 28,
//   address: {
//     city: "Chennai",
//     country: "India"
//   }
// };

// const {
//     name : userName,
//     age : userAge,
//     address : {
//         city, country
//     }
// } = user;
// console.log("Name :",userName)
// console.log("Age :",userAge)
// console.log("City :",city)
// console.log("Country :",country)

// Output:
// Name : Ravi
// Age : 28
// City : Chennai
// Country : India

//--------> Not reffered by any sources

//----------------------------------------------Task 10-------------------------------------------------//
// Write a function countProperties(obj) that counts all properties in a nested object (including nested levels).

/* function countProperties(obj){
  let count = 0;

  for (let key in obj) {
      count++; 
    if (typeof obj[key] === "object"){
        count+=countProperties(obj[key])
    }
    }
return count;
}

const obj = {
  name: "Kumar",
  details: {
    age: 30,
    contact: { phone: "12345", email: "test@mail.com" }
  }
};

console.log("Total Properties:",countProperties(obj)) */

// Output: Total Properties: 6

//-----> Refferd by Objects Slides for recursive function
//----------------------------------------------Mini Project-------------------------------------------------//
//Student Management System (Using JavaScript Objects)

/* <!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<body>
    <script>

        let student = []
        // Function to add a new student
        function addStudent(id, name, age, grade, course) {
            let studentId = student.find(s => s.id === id)
            if (!studentId) {
                student.push({ id, name, age, grade, course })
                alert(`Student ${name} added successfully.`)
            }
            else {
                alert(`Student with ID ${id} already exists.`)
            }
        }
        //Function For update the Student
        function updateStudent(uid, newGrade, newCourse) {
            let updated = student.find(u => u.id === uid)
            if (updated) {
                if (newGrade) updated.grade = newGrade
                if (newCourse) updated.course = newCourse
                alert(`The ${uid} id was updated!!`)
            } else {
                alert(`Student with ID ${uid} is not found!!.`)
            }
        }
        //Function for View the Student 
        function displayAll() {
            if (student.length === 0) {
                alert("No Students are avaliable!")
                return;
            } else {
                let stu = "Student Lists Are!! \n"
                student.map(d => { stu += `\n ID : ${d.id} \n Name : ${d.name} \n Age : ${d.age} \n Grade : ${d.grade} \n Course : ${d.course}` })
                alert(stu)
            }

        }

        //Function for Delete a student
        function studentDelete(did) {
            let deleted = student.find(d => d.id === did)
            if (!deleted) {
                alert(`${did} ID did't found the recrd!!`)
            } else {
                let index = student.indexOf(deleted)
                student.splice(index, 1)
                alert(`The Student with ID ${did} has been deleted!!`)
            }
        }

        //Function for Search for a student

        function studentSearch(sid) {
            let Search = student.find(d => d.id === sid)
            if (!Search) {
                alert(`${sid} ID did't found the recrd!!`)
                return;
            } else {
                alert(`Student Found : ID : ${Search.id} \n Name : ${Search.name} \n Age : ${Search.age} \n Grade : ${Search.grade} \n Course : ${Search.course} `)
            }
        }

        startApp();

        function startApp() {
            while (true) {
                let choice = prompt(
                    `Student Management System
1. Add Student
2. View All Students
3. Update Student
4. Delete Student         
5. Search Student
6. Exit
Enter your choice (1-6):`
                );

                if (choice === null || choice === "6") {
                    alert("Exiting Program. Goodbye!");
                    break;
                }
                switch (choice) {
                    case "1":
                        let id = parseInt(prompt("Enter Student ID:"));
                        let name = prompt("Enter Name:");
                        let age = parseInt(prompt("Enter Age:"));
                        let grade = prompt("Enter Grade:");
                        let course = prompt("Enter Course:");
                        addStudent(id, name, age, grade, course);
                        break;

                    case "2":
                        displayAll();
                        break;

                    case "3":
                        let uid = parseInt(prompt("Enter ID to update:"));
                        let newGrade = prompt("Enter new Grade (leave blank to skip):");
                        let newCourse = prompt("Enter new Course (leave blank to skip):");
                        updateStudent(uid, newGrade, newCourse);
                        break;

                    case "4":
                        let did = parseInt(prompt("Enter ID to delete:"));
                        studentDelete(did);
                        break;

                    case "5":
                        let sid = parseInt(prompt("Enter ID to search:"));
                        studentSearch(sid);
                        break;

                    default:
                        alert("Invalid choice. Please enter 1–6.");
                }
            }
        }
    </script>
</body>

</html> */

//reffered by google search for methods syntax