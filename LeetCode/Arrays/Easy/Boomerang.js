// Given an array points where points[i] = [xi, yi] represents a point on the X-Y plane, return true if these points are a boomerang.

// A boomerang is a set of three points that are all distinct and not in a straight line.

// Input: points = [[1,1],[2,3],[3,2]]
// Output: true


// var isBoomerang = function(points) {
//     const f = points.flat();
//     const pointA = [f[2] - f[0], f[3] - f[1]]
//     const pointB = [f[4] - f[2], f[5] - f[3]]
//     const pointC = [f[4] - f[0], f[5] - f[1]]
//     const allPoints = [...pointA, ...pointB, ...pointC]

//     console.log(allPoints)
//     if (
//       f[4] - f[2] - f[0] !== 0 ||
//       f[5] - f[3] - f[1] !== 0
//     ) {
//       if (true) {
//         return true;
//       } else {
//         // console.log('Loop second hit');
//         return false;
//       }
//     } else {
//       return false;
//     }

// };

//REAL SOLUTION

// var isBoomerang = function([[ax,ay],[bx,by],[cx,cy]]) {
//   return ((by-ay)*(cx-bx)!==(cy-by)*(bx-ax));
// };

// console.log(isBoomerang([[1,1],[2,2],[3,3]]))
// console.log(isBoomerang([[0,1],[0,1],[2,1]]))
// console.log(isBoomerang([[0,1],[1,0],[1,1]]))

//f[0] !== f[2] || f[1] !== f[3]) && (f[2] !== f[4] || f[3] !== f[5]) && (f[0] !== f[4] || f[1] !== f[5]