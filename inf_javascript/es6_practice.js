//?  let name="noona's fruit store"
//?  let fruits = ["banana","apple","mango"]
//?  let location="Seoul"
//?  let store = {    
//?      name:name,   
//?       fruits:fruits,  
//?         location:location}
//?  console.log(store)

//! 1. 다음의 코드를 es6 문법을 이용하여 재작성 하시오
//* let name = "noona's fruit store"
//* let fruits = ["banana","apple","mango"]
//* let location = "Seoul"
//* let store = {name, fruits, location}
//* console.log(store);

//! 2. es6 문법을 이용하여 다음과 같이 출력하시오
//? 제 가게 이름은 noona's fruit store 입니다. 위치는 Seoul 에 있습니다
//*  let name = "noona's fruit store";
//*  let location = "Seoul";
//*  console.log(`제 가게 이름은 ${name} 입니다. 위치는 ${location}에 있습니다. `)

//! 3. 다음 코드를 Destructoring을 이용하여 해결하시오
//* function calculate(obj){    // 함수 안을 바꾸시오
//*     return a+b+c}
//* calculate({a:1,b:2,c:3})

// ! 4. 다음 문제에 정답이 true가 나오게 하시오
  let name="noona store"
  let fruits = ["banana","apple","mango"]
  let address={
      country:"Korea",
      city:"Seoul"}
      function findStore(obj){
        let {name,address:{city}} = obj
        console.log(obj);
         return name=="noona store" && city=="Seoul"
     }
     //!오브젝트 안에 오브젝트는 address:{city} 다음과 같이 선택이 가능하다
    //  findStore(name, address);
//   console.log(findStore({name,fruits,address}))s

//! 5. 다음과같이 프린트되게 코드를 바꾸시오
// let getNumber = ()=>{
//     let array = [1,2,3,4,5,6];
//     let [first,,third,fourth] = array;
    // 참고 어레이에 건너뛰고싶은 부분이 있다면 , 를 이용해 그자리를 비울 수 있다.
//     return { first,third,fourth};
// }
// console.log(getNumber());

// ! 6. 다음의 결과가 true가 되게 하시오
//  function getCalendar(first, ...rest) {
//      return (
//        first === "January" &&
//        rest[0] === "February" &&
//        rest[1] === "March" &&
//        rest[2] === undefined
//      );}
//      console.log(getCalendar("January","February","March")); // 여기를 바꾸시오

//! 7. 두 어레이들중 최소값을 찾는 함수를 완성하시오
// function getMinimum(){
//     let a= [45,23,78]
//     let b = [54,11,9]
//     return Math.min(...a,...b)}
//     // getMinimum();
//     console.log(getMinimum());

//! 8. 다음의 함수를 화살표 함수로 바꾸시오
// function sumNumber() {
//     // 여기서부터 바꾸시오
//     const sum = function (a, b) {
//       return a + b;
//     };
//     return sum(40, 10);}

//  let sumNumber = () => {
//      const sum = (a, b) => a+b ;
//      return sum(40,10);
//  }
//  console.log(sumNumber());

//! 9. 다음함수를 화살표 함수로 바꾸시오
// function sumNumber() {
//     //여기를 바꾸시오
//     return addNumber(1)(2)(3);
//     function addNumber(a) {
//       return function (b) {
//         return function (c) {
//           return a + b + c;
//         };
//       }; 
//     }} 



// let sumNumber = ()=> {
//         addNumber(1)(2)(3);
//         let addNumber = (a)=>{
//                 (b)=>{
//                         (c)=>{
//                                 a+b+c;
//                             }
//                         }
//                     }
//                 }
//                 console.log(sumNumber());




