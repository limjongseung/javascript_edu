let menu = 8

// if (menu ==1){
//     console.log("물건 사기")
// } else if (menu==2){
//     console.log("잔고확인")
// } else if (menu ==3){
//     console.log("히스토리확인")
// } else {
//     console.log("홈으로 돌아가기")
// }

switch(menu){
    case 1 :
    console.log("물건사기")
    break;
    case 2: 
    console.log("잔고확인")
    break;
    case 3 :
    console.log("히스토리확인")
    break;
    default :
    console.log("홈으로 돌아가기")
}
//!하나로만 떨어지는 경우 사용가능 (범위로는 사용 불가)

let menu1 = 8
// if (menu <=3){
//     console.log("범위안에 숫자입니다")
// } else {
//     console.log("범위밖에 숫자입니다.")
// }
//! 삼항연사식 조건? true : flase일때 
let answer = menu1 <= 3 ? "범위안에 숫자입니다." : "범위 밖의 숫자입니다."
console.log(answer)
