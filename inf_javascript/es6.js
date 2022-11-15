// let name = "noona";
// let age = 17;
// let person = {name:name, age: age}
// let person = {name, age};
// let person1 = {nameValue : name, ageValue : age};
// console.log(person);
// console.log(person1);

// let bts = {
//     name : "방탄소년단" ,
//     num : 7
// }
//? let name = bts.name
//? let num = bts.num
//!bts의 객체정보를 키값을 통해서 쉽게 분리해낼수 있다.
//? let {name, num} = bts
// console.log(name,num);
// ! 백틱
// let name = "noona"
// let age = 18
// console.log("제이름은", name,"입니다. 제 나이는" + age+ "입니다.")
// console.log(`제이름은 ${name}입니다. 제나이는 ${age}입니다.`)

let array = [1,2,3];

// let a = array[0]
// let b = array[1]
// let c = array[2]
// ?let [a,...rest] = array;
// ?console.log(a);
// ?console.log(rest);

// let person= {
//     name : "noona",
//     age : 19,
//     cute : true
// }

// let {name, ...restInfo} = person;
// console.log(name, restInfo);

// ?let a = [1,2]
// ?let b = [3,4]
// ?let c = [5,6]
// ?let result = [...a,...b,...c] 
// ?console.log(result);

//! 함수 만들기 

// !let foo = ()=> {
//     console.log("hello")
// }

let age = 17
let person = {
    name : "hege",
    age : 20,
    getInfo : function(){
        console.log(this.age)
        // 함수를 부르는 객체
    }
}

person.getInfo()








