// var intersect = function(nums1, nums2) {
//     let result = []
//     for(let i = 0;i<nums1.length;i++){
//         if(nums2.includes(nums1[i])){
//             result.push(nums1[i])
//             let index = nums2.indexOf(nums1[i])
//             nums2.splice(index,1)
//         }
//     }
//     let set = new Set([...result])
//     return typeof([...set])
// };


var intersect = function (nums1, nums2) {
    let hash = {};
    let arr = [];
    for (let num of nums1) {
      hash[num] = true;
    }
    for (let i = 0; i < nums2.length; i++) {
      if (hash[nums2[i]]) {
        arr.push(nums2[i]);
      }
    }
    return [...new Set(arr)];
  };

console.log(intersect([1,2,2,1],[2,2]))
console.log(intersect([4,9,5],[9,4,9,8,4]))