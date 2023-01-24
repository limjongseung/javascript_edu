
let presons =[

{name :"철수", age : 17},
]
// undefined
{name :"철수", age : 17},
// VM3255:1 Uncaught SyntaxError: Unexpected token ':'
let presons =[

{name :"철수", age : 17},
{name :"병수", age : 147},
{name :"윤수", age : 171},
{name :"박수", age : 174},
{name :"가수", age : 127},
]
// undefined
for(let count = 0; count <persons.length; count++){
if(persons[count].age >= 19){
console.log("성인입니다.");
}
}
// VM3750:1 Uncaught ReferenceError: persons is not defined
// at <anonymous>:1:27
// (anonymous) @ VM3750:1
for(let count = 0; count <persons.length; count++){
if(persons[count].age >= 19){
console.log("성인입니다.")
} else {
console.log("미성년자입니다.");
}
}
// VM3925:1 Uncaught ReferenceError: persons is not defined
// at <anonymous>:1:27
// (anonymous) @ VM3925:1
for(let count = 0; count <persons.length; count++){
if(presonssons[count].age >= 19){
console.log("성인입니다.")
} else {
console.log("미성년자입니다.")
}
}
// VM3948:1 Uncaught ReferenceError: persons is not defined
// at <anonymous>:1:27
// (anonymous) @ VM3948:1
for(let count = 0; count <presons.length; count++){
if(presons[count].age >= 19){
console.log("성인입니다.")
} else {
console.log("미성년자입니다.")
}
}
// VM3996:5 미성년자입니다.
// 4VM3996:3 성인입니다.
// undefined
for(let count = 0; count <presons.length; count++){
if(presons[count].age >= 19){
console.log(presons[count].name + "님은 성인입니다.")
} else {
console.log(presons[count].name + "님은 미성년자입니다.")
}
}
// VM4500:5 철수님은 미성년자입니다.
// VM4500:3 병수님은 성인입니다.
// VM4500:3 윤수님은 성인입니다.
// VM4500:3 박수님은 성인입니다.
// VM4500:3 가수님은 성인입니다.
// undefined