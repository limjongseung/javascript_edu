// !"안녕 내 이름은 제시카야"라는 문장을 프린트하는 함수 'greet’를 만드시오
// function CallJessica(){
//     console.log("안녕 내 이름은 제시카야")
// }
// CallJessica()
// !이름을 매개변수로 전달받아 다양한 이름을 프린트 할 수 있게 함수를 수정하시오 예) “안녕 내 이름은 에밀리야”, “안녕 내 이름은 할리야”
// function CallName(name){
//     console.log("안녕 내이름은", name,"이야")
// }
// CallName("병신")
// !매개변수로 전달받은 이름을 반환하게 함수를 수정하시오
// function CallName(name){
//     console.log("안녕 내이름은", name,"이야")
//     return name
// }
// const name = CallName("지영")
// console.log("안녕", name, "이야")
// function CallName(name){
//     console.log("안녕",name)
//     return name
// }
// console.log(CallName("지영"))
// ! meetAt 함수를 만들어주세요.
// 인자를 세개 받습니다.
//  첫번째 인자는 년도에 해당하는 숫자입니다.
//  두번째 인자는 월에 해당하는 숫자입니다.
//  세번째 인자는 일에 해당하는 숫자입니다.
//  년도 인자만 받았을 경우 → "1234년" 과 같은 형식의 문자열을 리턴 해주세요.
//  년도,월 인자를 받았을 경우 → 년도와 월을 조합해서 "1234년 5월" 과 같은 형식의 문자열을
//  리턴 해주세요.
//  년도,월,일 인자를 전부 받았을 경우 → 년도,월,일을 조합해서 "1234/5/6" 과 같은 형식의 문자열을
//  리턴 해주세요.
// function meetAt(year,month,date){
//     let todayYear = year;
//     let todayMonth = month;
//     let todayDate = date;
//     if(todayDate){
//         return `${todayYear}/ ${todayMonth}/${todayDate}`;
//     }
//     if(todayMonth){
//         return `${todayYear}년 ${todayMonth}월`;
//     }
//     if(todayYear){
//         return `${todayYear}년`;
//     }
// }
// console.log(meetAt(1234))

// findSmallestElement 함수를 구현해 주세요.
// findSmallestElement 의 arr 인자는 숫자 값으로만 이루어진 배열입니다.
// arr 의 값들 중 가장 작은 값을 리턴 해주세요.
// 만일 arr 가 비어있으면 0을 리턴 해주세요.
// 예를 들어, 다음과 같은 배열이 인자(input)으로 들어왔다면 0이 리턴 되어야 합니다.
// 이용되는 배열
// [100,200,3,0,2,1]
// function findSmallestElement(arr){
//     let result = arr[0];
//     if(arr.length ===0){
//         return 0
//     }
//     for(i=1; i<arr.length; i++){
//         if(result > arr[i]){
//             result = arr[i]
//         }
//     }
//     return result
// }
// let arrEX =[100,200,3,0,2,1];
// console.log(findSmallestElement(arrEX))

// 돈을 매개변수로 받으면 몇개의 지폐와 동전이 필요한지 최소 개수를 계산해주는 함수를 만드시오
// 출력예 )
// 12300인 경우
//  50000 X 0
//  10000 X 1
//  5000  X 0
//  1000 X 2
//  500 X 0
//  100 X 3
// console.log(10 ** (moneyString.length - i -1) +"X" + moneyString[i])
function CalcMoney(money){
    let moneyString = money.toString();
    for(i=0; i<moneyString.length -2; i++){
        if(moneyString[i]>=5){
            console.log(10 ** (moneyString.length - i -1) *5 +"X" +parseInt(moneyString[i]/5))
            console.log(10 ** (moneyString.length - i -1)  +"X" +moneyString[i] % 5)
        }
        else (console.log(10 ** (moneyString.length - i -1) +"X" + moneyString[i]))
    }
}
CalcMoney(57000)





