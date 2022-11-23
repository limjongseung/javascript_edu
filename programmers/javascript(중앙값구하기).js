function solution(array) {
    array.sort((a,b)=>{
     if(a>b) return 1;
     if(a === b) return 0;
     if(a<b) return -1;
 })
let answer = array[Math.floor(array.length/2)]
 return answer;
}