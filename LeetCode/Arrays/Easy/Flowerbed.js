// You have a long flowerbed in which some of the plots are planted, and some are not. However, flowers cannot be planted in adjacent plots.

// Given an integer array flowerbed containing 0's and 1's, where 0 means empty and 1 means not empty, and an integer n, return if n new flowers can be planted in the flowerbed without violating the no-adjacent-flowers rule.

//Input: flowerbed = [1,0,0,0,1], n = 1
// Output: true

// var canPlaceFlowers = function(flowerbed, n) {

    // if(flowerbed.length === 1 && n === 1 && flowerbed[0] === 0){
    //     n--;
    // }
    // for(let i = 0; i < flowerbed.length; i++){
    //     if(n > 0 && flowerbed[i] === 0){
    //         console.log(flowerbed)
    //         if((flowerbed[i-1] === 0 && flowerbed[i+1] === 0) || (flowerbed[0] === 0 && flowerbed[1] === 0) || (flowerbed[flowerbed.length-1] === 0 && flowerbed[flowerbed.length-2] === 0)){
    //             flowerbed[i] = 1;
    //             n--;
    //         }
    //     }
    // }

    // console.log(n)
    // if(n === 0 ){
    //     return true;
    // }else{
    //     return false
    // }
//     let amount = 0;
//   flowerbed.push(0);
//   flowerbed.unshift(0);

//   for (let i = 1; i < flowerbed.length - 1; i++) {
//     if (flowerbed[i] === 0) {
      

//     if (flowerbed[i - 1] === 0 && flowerbed[i + 1] === 0) {
//       flowerbed[i] = 1;
//       amount += 1;
//     }
//   }
// }

//   return amount >= n;
// };

// console.log(canPlaceFlowers([0],1))


