function solution(my_string) {
    var answer = '';
    for(let i = 0; i <= my_string.length-1; i++){
          let z =my_string.length;
        answer[i] = my_string[z-i-1]
    }
    return answer;
};
let st = "limg"
console.log(st.length);
console.log(solution("imgmg"));