var findDifference = function(nums1, nums2) {
    let answer = [];
    let distinct1 = nums1.filter(num => !nums2.includes(num))
    let distinct2 = nums2.filter(num => !nums1.includes(num))
    answer.push(distinct1,distinct2)
    return answer
    
};

console.log(findDifference([1,2,3],[2,4,6]))