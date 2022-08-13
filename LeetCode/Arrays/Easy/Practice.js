// var mostWordsFound = function(sentences) {

//   const count = [];
//   sentences.forEach(sentence => {
//       count.push(sentence.split(' '))
//   })
//   const counter = [];
//   count.forEach(array=> {
//       counter.push(array.length)
//   })
//   let max = 0;
//   for(let i =0; i<counter.length;i++){
//       if(counter[i]>max){
//           max = counter[i]
//       }
//   }
//   console.log(max)

//   // Second Method 
//   const reduce = sentences.reduce(
//     (a, e) => (e.split(" ").length > a ? e.split(" ").length : a),
//     0
//   );
//   console.log(reduce);

// };


//mostWordsFound(["alice and bob love leetcode","i think so too","this is great thanks very much"])

// var shuffle = function(nums, n) {
//     let newArray = [];
//     let start = 0;
    
//     // for(let i =0 ; i < n; i++){
//         while(start < n){
//             newArray.push(nums[start])
//             newArray.push(nums[start+n])
//             start++;
        
//         }
//     //     newArray.push(nums[i]);
//     //     newArray.push(nums[i+n]);
//     // }
//     console.log(newArray)
// };

// shuffle([1,2,3,4,4,3,2,1],4)

// var canBeIncreasing = function(nums) {
    // let deletedElement;
    // let start = 0;
    // let newArray = [];
    // for(let i = 0; i<nums.length;i++){
    //     deletedElement = nums[i];
    //     console.log('At the start of loop',start)
    //     if(nums[start] < nums[start+1] && nums[start] !== deletedElement){
    //         console.log(nums[start] !== deletedElement)
    //         newArray.push(nums[start])
    //         start++;
    //         console.log('At the end of loop',start)
    //     }else{
    //         newArray = [];
    //         start = 0;
    //     }
        
    // }

//     let newnums = nums.slice(0).sort((a,b)=>a-b)
//     //check if all numbers are the same
//     //check if there are only 2 elements in nums
//     if(nums.length===2){
//         return true
//     }
//     //checks if every element in the array is the same number
//     if(nums.every(t=>t===nums[0])===true){
//         return false
//     }else if(nums===newnums){
//         return true
//     }
    
//     //looking for the unique large element
//     let ind = 0;
//     for(let i = 0; i <nums.length;i++){
//         //checks for low outlier
//         if(i===nums.length-1 && nums[i]<nums[i-1] ){
//             ind = i
//             break;
//         }
//         if(nums[i]<nums[i-1] && nums[i+1]>nums[i-1] ){
//             ind = i
//             console.log(ind)
//             break;
//         }
//         //checks for high outlier
//         if(nums[i]>nums[i+1] && nums[i+1]>nums[i-1]){
//             ind = i
//             break;
//         }
//     }
//     let strictly = nums.slice(0,ind).concat(nums.slice(ind+1))
//     let sorted = strictly.slice(0).sort((a,b)=>a-b)
//     console.log(strictly)
//     console.log(sorted)
//     if(duplicates(strictly)===false && strictly.toString()===sorted.toString()){
//         return true
//     }
//     return false
    
// };

// function duplicates(arr){
//     let obj = {};
//     for(let i = 0; i < arr.length ; i++){
//         if(obj[arr[i]]===undefined){
//             obj[arr[i]] = 1
//         }else{
//             return true
//         }
//     }
//     return false
// };

// const result = canBeIncreasing([10,7])
// console.log(result)

var thirdMax = function(newNums) {

    var newNums = [...new Set(newNums)]

    if(newNums.length === 2){
        return newNums[0] > newNums[1] ?  newNums[0] : newNums[1];
        
    } 
    if(newNums.length > 2){
        const firstMax = newNums.sort(function(a,b){return b-a});
        return firstMax[2]
    }

};

const max = thirdMax([1,2,2,3])
console.log(max)