//!object = 사전과 같이 하나의 객체안에 여러 데이터를 넣을 수 있다.
//oop = Object Oriented Programming
//! 객체지향형 프로그램밍은 프로그램밍의 방식중 하나 이다.
let patient = {
    name : "jimin",
    age : 17,
    disease : "cold"
}
console.log(patient)
console.log(patient.name)
console.log(patient.disease)
console.log(patient.age)
//다른표현법
console.log(patient["age"])
console.log(patient["name"])
patient.name = "jk"
console.log(patient)
patient.age = 25
console.log(patient)
let patientList = [{name : "jimin", age : 13},{name : "jk", age : 25},{name : "jhope", age : 40}]
console.log(patientList)
console.log("첫번째 환자 : " , patientList[0])
console.log("첫번째 환자의 나이는 " ,patientList[0].age, "입니다.")
console.log("첫번째 환자의 나이는 " ,patientList[0]["name"] , "입니다.")
console.log("두번째 환자의 이름:" , patientList[1].name)
