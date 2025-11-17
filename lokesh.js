// ----------------------------------------------------------------
// Find the missing number in the array 
/* let a = [2,3,4,10]
let b = a[0]
let c = []
for (let i=0; i<a.length; i++){
    while (a[i] > b ){
        // console.log(b)
        c.push(b)
        b++
    }
b++
}
console.log(c) */

// output: [ 1, 5, 6, 7, 8, 9 ]

//----------------------------------------------------------------
// sum of the elements let a = [1,2,3,4,5,true] 
/* let a = [1,2,3,4,5,true]
let sum = 0
for (let i=0; i<a.length; i++){
    if (typeof a[i] === "number"){
    sum+=a[i]
}
}
console.log("The sum of the Number is :",sum) */

// output: The sum of the Number is : 15


// ----------------------------------------------------------------
// Let string = “Dckap123” how many objects and numbers in the string.
/* let string = "Dckap 123"
let str = 0
let num = 0
for (let i=0; i<string.length; i++){
    if ( string[i] >= "0" && string[i] <= "9" ){
    num++
}else if ( (string[i] >= "A" && string[i] <= "Z") || (string[i] >= "a" && string[i] <= "z")){
    str++
}
}
console.log("The sum of the Number is :",num)
console.log("The sum of the String is :",str) */

// output: The sum of the Number is : 3
// The sum of the String is : 5

// ----------------------------------------------------------------
// Count positive and negative values in the array // positives are sum and negative are count
/* let sum = 0
let ncount = 0
let a = [1,2,-3,-4,5,6,-7,8]
for (let i=0; i<a.length; i++){
    if (a[i]>0){
         sum+=a[i]
    }else{

        ncount++
    }
}
console.log("The sum of the positive number is :",sum)
console.log("The neagative count is :",ncount) */


// output: The sum of the positive number is : 22
// The neagative count is : 3

// ----------------------------------------------------------------
// assigning ascending and descending order to the given array
/* function asds(a,b){
    if ( b == "asc"){
        for (let i=0; i<a.length; i++){
            for(let j=0; j<a.length; j++){
                if (a[i] < a[j]){
                    let ase = a[i]
                    a[i] = a[j]
                    a[j] = ase
                }
            }
        }
    }

      if ( b == "dsc"){
        for (let i=0; i<a.length; i++){
            for(let j=0; j<a.length; j++){
                if (a[i] > a[j]){
                    let dse = a[i]
                    a[i] = a[j]
                    a[j] = dse
                }
            }
        }
    }
    console.log(a)
}
asds([2,3,4,1,6],"asc") */

// output: [1,2,3,4,6]
// output: [6,4,3,2,1]


// ----------------------------------------------------------------
//second largest number in the array

/*  let a = [1,2,3,4,5,6]
for (let i=0; i<a.length; i++){
            for(let j=0; j<a.length; j++){
                if (a[i] > a[j]){
                    let dse = a[i]
                    a[i] = a[j]
                    a[j] = dse
                }
            }
        }
console.log("The second largest number is :",a[1])  */

// output: The second largest number is : 5