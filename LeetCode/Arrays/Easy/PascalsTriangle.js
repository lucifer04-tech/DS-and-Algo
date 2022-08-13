var generate = function(n) {
//     arr = a = Array(n).fill(0).map(x => Array(n).fill(0));
  
// // Iterate through every line and print integer(s) in it
// for (line = 0; line < n; line++)
// {
//     // Every line has number of integers equal to line number
//     for (i = 0; i <= line; i++)
//     {
//     // First and last values in every row are 1
//     if (line == i || i == 0)
//         arr[line][i] = 1;
//     else 
//     // Other values are sum of values just above and left of above
//         arr[line][i] = arr[line-1][i-1] + arr[line-1][i];
//     }
    
// }

const arr = [];

for(let i = 0; i < n; i++){
        let row = [1]
        
        for(let j = 1; j < i;j++){
            row.push(arr[i-1][j-1]+arr[i-1][j])
        }
        if(i > 0) row.push(1)

        arr.push(row)
    }
    return arr
    
};

console.log(generate(5))