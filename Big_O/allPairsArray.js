//Log all pairs of an arrray
const boxes = [1,2,3,4,5]

function logAllPairsOfArray(boxes){
    boxes.forEach(box => {
        boxes.forEach(boxer => {
            if(box !== boxer){
                console.log(`[${box},${boxer}]`)
            }
        })
    }) 
}

logAllPairsOfArray(boxes) 