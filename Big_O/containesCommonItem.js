const array1 = ['a','b','c','x'];
const array2 = ['z','y','i'];

const array3 = ['a','b','c','x'];
const array4 = ['z','y','x'];

function containsCommonItem(data1, data2){
    //loop through firsy aaray and create object where properties === items in the array

    let map = {};
    for(let i = 0; i< data1.length; i++){
        if(!map[data1[i]]){
            const item = data1[i];
            map[item] = true
        }
    }
    //loop through second array and check if the item in second array exists on created object

    for(let j = 0; j< data2.length; j++){
        if(map[data2[j]]){
            return true
        }
    }
    return false

}

containsCommonItem(array3, array4);
