//데이터 타입, 연산자 실습

1+1
// 2
1+"만원"
// '1만원'
1+"1"
// '11'
1-"1"
// 0
"코드"+"캠프"
// '코드캠프'
"123"==123
// true
"123"===123
// false
true && true
// true
true && FileSystemWritableFileStream
// ƒ FileSystemWritableFileStream() { [native code] }
true && false
// false
!false
// true
!true
// false


//조건문 실습1
if(1+1 ==2){
    console.log("정답입니다.")
} else {
    console.log("틀렸습니다.")
}
// VM855:2 정답입니다.
// undefined
if(true){
    console.log("정답입니다.")
} else {
    console.log("틀렸습니다.")
}
// VM930:2 정답입니다.
// undefined
if(!true){
    console.log("정답입니다.")
} else {
    console.log("틀렸습니다.")
}
// VM958:4 틀렸습니다.
// undefined
//! 거짓같은 값 javascript
if(0){
    console.log("정답입니다.")
} else {
    console.log("틀렸습니다.")
}
// VM973:4 틀렸습니다.
// undefined