/* function CheckString(arr, val) {
    let ar = []
    let nval = val.toLowerCase()
    for (let i = 0; i < arr.length; i++) {
        let nar = arr[i].toLowerCase()
        ar.push(nar)
    }
    for (i = 0; i<ar.length; i++){
        if(ar[i] == nval){
            // console.log(`True ${i}`)
            return `True ${i}`
        }
        // else{
        //     console.log(`False -1`)
        //     continue
        // }
    }
    return `False -1`
}

console.log(CheckString(["org","hii"],"abc")) */

// -----------------------------------------------------------
// 2. Array [2,6,4,1] above three true or false
// function checking odd numbers

/* function CheckingOdd(arr){
    let count = 0  
    for (let i=0; i<arr.length; i++){
        if (arr[i]%2==1){
            count++
        }
    }
    if(count>3){
        return true
    }else{
        return false
    }
    
}
console.log(CheckingOdd([2,6,4,1,3,5,7])) */

// ----------------------------------------
/* function differtwoarray(ar,arr){
    for(let i=0;i<ar.length;i++){
        for(let j=0;j<arr.length;j++){
            if (ar[i] == arr[j]){
                ar.splice(i,1)
                arr.splice(j,1)
                i--
            }
        }
    }
   console.log(ar,arr)
}

differtwoarray([1,2,3],[2,5,3,4]); //[1],[5,4] */
