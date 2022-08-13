
// Given an array arr of integers, check if there exists two integers N and M such that N is the double of M ( i.e. N = 2 * M).

// More formally check if there exists two indices i and j such that :

// i != j
// 0 <= i, j < arr.length
// arr[i] == 2 * arr[j]

//Example
// Input: arr = [10,2,5,3]
// Output: true
// Explanation: N = 10 is the double of M = 5,that is, 10 = 2 * 5.

var checkIfExist = function(arr) {
    let double;
    if(arr.length === 1){
        return false;
    }
    let count = 0;
    arr.forEach(val => {
        if(val === 0){
            count ++;
        }
    })
    if(count > 1){
        return true
    }
    for(let i = 0; i< arr.length; i++){
        if(arr[i] !== 0){  
            double = 2 * arr[i];
        } else{ 
            double = 1
        }
        for(let j = 0; j< arr.length; j++){
            console.log(`Double = ${double} and arr[i] is ${arr[i]}`)
            if(double === arr[j]){
                return true;
            }else{
                continue
            }
        }
    }
    return false

};

// console.log(checkIfExist([10,2,7,3]))
// console.log(checkIfExist([-2,0,10,-19,4,6,-8]))
// console.log(checkIfExist([0,0]))
console.log(checkIfExist([-10,12,-20,-8,15]))


//20,4,10,6