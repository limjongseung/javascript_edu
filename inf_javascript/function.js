function makeBurger(type,size,num) {
	console.log("빵두기");
	console.log("상추두기");
    if(num <1){
        return "버거개수가 0개 입니다."
    }
    if(type =="불고기"){
        console.log("고기패티두기")
    } else if(type =="새우"){
        console.log("새우패티두기")
    }
	console.log("뚜껑덥기");
    console.log(type, "버거", size,"사이즈",num,"개 준비완료")
    return  "완료되었습니다."
}
function severCoke() {
	console.log("콜라통 선택");
	console.log("얼음담기");
	console.log("콜라담기");
}
function servefrenchFries() {
	console.log("감튀박스선택");
	console.log("감튀 담기");
}
// makeBurger("불고기","M",1)
//!return이 나오면 해당 함수는 종료됩니다.

let result = makeBurger("불고기","M",0)
console.log("버거프로세스 결과", result)

function makeSet(){
    makeBurger("새우","M",1)
    servefrenchFries()
    severCoke()
}
makeSet()






