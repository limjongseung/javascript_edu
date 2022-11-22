//!첫 번째 분수의 분자와 분모를 뜻하는 denum1, num1, 두 번째 분수의 분자와 분모를 뜻하는 denum2, num2가 매개변수로 주어집니다. 두 분수를 더한 값을 기약 분수로 나타냈을 때 분자와 분모를 순서대로 담은 배열을 return 하도록 solution 함수를 완성해보세요.

function solution(denum1, num1, denum2, num2) {
    let answer = []
    
    answer[0] = denum1*num2 + denum2*num1;
    answer[1] = num1*num2;
    let min = Math.min(answer[0],answer[1]);
    let max = 1;
    for(let i= 1; i<=min; i++){
        if(answer[0]%i==0 && answer[1]%i ==0){
            max = i;
        }
    }
    answer[0] /=max;
    answer[1]/=max;
    return answer;
}

console.log(solution(1,2,3,4))