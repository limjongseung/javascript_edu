let string ='Hello World';
let search = 'l';
var index;
// 문자열은 유사 배열이므로 for 문으로 순회할 수 있다. 
for(let i = 0; i < string.length; i++){
    if (string[i] === search){
        index = i;
        break;
    }
}
console.log(index);