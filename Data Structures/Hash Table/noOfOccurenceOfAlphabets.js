function numberOfOccurence(input){

    let map = {};
  
    for(let i = 0; i < input.length;i++){
        if(map[input[i]]){
            map[input[i]]++
        }else{
            map[input[i]] = 1
        }
    }
    return map;
}

const result = numberOfOccurence('shikharsaxena')
console.log(result);

//expected output: [a:4, b:4, c:2]