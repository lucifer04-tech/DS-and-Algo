// Given an array of integers arr, return true if and only if it is a valid mountain array.

// Recall that arr is a mountain array if and only if:

// arr.length >= 3
// There exists some i with 0 < i < arr.length - 1 such that:
// arr[0] < arr[1] < ... < arr[i - 1] < arr[i]
// arr[i] > arr[i + 1] > ... > arr[arr.length - 1]

// Solution

// var validMountainArray = function(arr){

//     if(arr.length < 3){
//         return false
//     }

//     let maxValue = Math.max(...arr);
    
//         let count = 0
//         arr.forEach(val =>  {
//             if(val === maxValue){
//                 count++
//             }
            
//         })
//         console.log(count)
//         if(count > 1){
//             return false
//         }

    
//     let firstArray = arr.splice(0, arr.indexOf(maxValue));
//     let secondArray = arr.splice(arr.indexOf(maxValue) + 1, arr.length + 1);
   

//     let increasing = function(first){
//         if(first.length === 0){
//             return false
//         }
//         if(first.length === 1){
//             return true
//         }

//         for(let i =0;i < first.length;i++){
//             console.log(first[i], first[i+1])
//             if(first[i] < first[i+1] || i === first.length - 1){
//                  continue;
//             }else{
//                 console.log('First loop', false)
//                 return false
//             }
//         }
//         return true
//     }

//     let decreasing = function(second){
//         if(second.length === 0){
//             return false
//         }
//         if(second.length === 1){
//             return true
//         }
//         for(let i = 0; i < second.length-1;i++){
//             console.log(` i is ${i}`, second[i], `i+1 is ${i+1}`, second[i+1])
//             if(second[i] > second[i+1]){
//                 continue;
//            }else{
//             console.log(' Second loop',false)
//                return false
//            }
//        }
//        return true
//     }
    
//     if(increasing(firstArray) === decreasing(secondArray)){
//         return true
//     }else{
//         return false
//     }
// }

// console.log(validMountainArray([1,7,9,5,4,1,2]))
// console.log(validMountainArray([1,7,9,5,4,2]))
// console.log(validMountainArray([3,0,3]))
// console.log(validMountainArray([0,3,2,1]))
// console.log(validMountainArray([0,1,2,3,4,5,6,7,8,9]))
// console.log(validMountainArray([9,8,7,6,5,4,3,2,1,0]))