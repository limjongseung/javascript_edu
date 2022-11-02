//! 1 부터 100까지 더하는 for문을 만들고 결과를 출력하시오.
// sum = 0
// for( let i = 1; i<=100; i++){
//     sum +=i
// }
// console.log(sum)

//! 1부터 100까지 홀수만 출력하자

// for(let i = 1;i <=100; i+2){
//     console.log(i)
// }
// for(let i = 1; i<=100; i+=2){
//         console.log(i)
// }

//!1부터 50까지 369결과를 프린트하자
// for(let i = 1; i<=50; i++){
//     let Stringi = i.toString()
//     let result =""
//     for(let j = 0; j<Stringi.length; j++){
//         if(Stringi[j]== "3" || Stringi[j]=="6"|| Stringi[j]=="9"){
//             result +="짝"
//         }
//     }
//     console.log(result.length>0?result:i)
// }

//주어진 숫자가 소수이면 true 아니면 flase를 출력하는 프로그램을 짜시오
let num = 20
let IsPrime = true
if(num ===1){
    IsPrime = false
} 
for(let i = 2;i<num; i++){
    if(num % i ==0){
        IsPrime = false
    }
}
console.log(IsPrime)








