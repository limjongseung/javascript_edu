// !if(조건문){
// !    조건이 충족하면 할일들
// !}

if(false){
    console.log("조건은 참입니다.")
} else {
    console.log("조건이 거짓입니다.")
}

let age = 21
//&& : 그리고
// || : or 연산자
// == : 같냐
// = : 오른쪽 값을 왼쪽에 할당
let licence = false
if(age >20){
    if(licence != true){
        console.log("운전이 가능합니다.")
    } else{
        console.log("면허를 따세요")
    }    
} else { 
    console.log("운전이 불가능합니다.")
}



