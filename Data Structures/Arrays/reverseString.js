
function revString(str){
    const newArr = str.split('')
    const revArr = [];
    for(let i = newArr.length -1; i >= 0; i--){
        revArr.push(newArr[i])
    }
    const revStr = revArr.join('')
    return revStr
}
// inputData = document.querySelector('input').value;

const str = revString('this is my home');
console.log(str)
