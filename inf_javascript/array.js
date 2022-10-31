// let fruit = "banana";
// let fruit2 = "apple";
// let fruit3 = "mango";
// let fruit4 = "grape";


let fruit = ["banana","apple","grape","mango"]
console.log(fruit);
console.log(fruit[0]); //index는 0부터 시작임

fruit[0] = "cherry"
console.log(fruit)

fruit[2] = "tomato"
console.log(fruit)
//!pop() : 마지막에 있는 아이템을 뺌
fruit.pop()
console.log(fruit)
// ! 마지막 아이템 추가
fruit.push("pineapple")
console.log(fruit)

//! includes : 아이테이 있는지 없는 지 확인
console.log(fruit.includes("apple"))
console.log(fruit.includes("pear"))

//! indexOf : 아이템에 인덱스번호 알려줌
console.log(fruit.indexOf("apple"))

// ! slice : 배열 아이템을 잘라내는 역할 (시작점, 끝점-끝점 미포함)
fruit.slice(1,3)
console.log(fruit)
//slice는 기존은 배열을 건들지 않음
console.log(fruit.slice(1,3))

// ! splice : 배열아이템 잘라내는 역함 (시작점, 개수)
fruit.splice(0,2)
console.log(fruit)
//진짜 짤림 기존 배열을 수정하는 결과가 나옴 








