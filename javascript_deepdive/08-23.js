let string = 'Hello World';
let search = 'l';
let count = 0;

//문자열은 유사 배열이므로 for 문으로 순회할 수 있다.
for(let i =0; i < string.length; i++){
    //'l'이 아니면 현 지점에서 실행을 중단하고 반복문의 증감식으로 이동한다.
    if(string[i] !== search) continue;;
    count++// continue 문이 실행되면 이문은 실행되지 않는다.
}

console.log(count)//3




const regxp = new RegExp(search, 'g');
console.log(string.match(regxp).length);

//9-01
 let x = 10;
 //명시적 타입 변환
 //수자를 문자열 타입 캐스팅한다.
 let str = x.toString();
 console.log(typeof str, str);

 x= 10;
 console.log(typeof x, x);
//암묵적 타입 변환
//문자열 연결 연산자는 숫자 타입 x의 값을 바탕으로 새로운 문자열을 생성한다.

let str2 = x+'';
console.log(typeof str2, str2);

// x변수의 값이 변경되 것은 아니다.
console.log(typeof x, x);
//명시적 타입 변화이나 암묵적 타입 변화이 기존 원시값을 변경하는 것은 
//아니다. 원시값은 변경 불가능한 값이므로 변경할 수 없다. 타입 변화이란 기존 원시
//값을 사용해 다른 타입의 새로운 원시 값을 생성하는 것이다.

//때로는 명시적 타입 변환보다 암묵적 타입 변환이 가독성 측면에서 더 좋을 수도 있다.
//자바스크립트 문법을 잘 이해하고 있는 개발자에게는 (10).toString() 보다 10 + ''
//더욱 간결하고 이해하기 쉽다. 


var person = {
    name: 'Lee',
    sayHello:function(){
        console.log(`Hello My name is ${this.name}`);
    }
};
console.log(typeof person); //object
console.log(person); //{name:"Lee",sayHello:f}
//만약 중괄호 내에 프로퍼티를 정의하지 않으면 빈 객체가 생성



//10-06
let obj ={};
let key = 'hello';

//ES5: 프로퍼티 키 동적 생성
obj[key] = 'world';
//ES6: 계산된 프로퍼티 이름
// var obj = {[key]:"world"}  
console.log(obj); // {hello : "world"}
//var, function과 같은 예약어를 프로퍼티 키로 사용해도 에러가 발생하지 않는다. 하지만
//예상치 목한 에러가 발생할 여지가 있으므로 권장하지 않는다.
//10-09
var foo ={
    var : '',
    function: ''
}
console.log(foo);

//이미 존재하는 프로퍼티 키를 중복 선언하면 나주엥 선언한 프로퍼티가 먼저 선언한 
//프로퍼티를 덮어쓴다.
let foo1 ={
    name : 'Lee',
    name:'lim'
};
console.log(foo1);

//10-11
let circle ={
    radius : 5, //<-프로퍼티
    //원의 지름
    getDiameter : function(){
        return 2 * this.radius; //this는 circle을 가리킨다.
    }
};
console.log(circle.getDiameter());

//프로퍼티에 접근하는 방법은 다음과 같이 두가지다.
//마침표 프로퍼티 접근 연산자를 사용하는 마침표 표기법
//대괄호 프로퍼티 접근연산자를 사용하는 대괄호 표기법
//프로퍼티 키가 식별자 네이밍 규칙을 준수하는 이음, 

let person1 = {
    name:'Lee'
}
console.log(person1.name);
console.log(person1['name']);
//대괄호 표기법을 사용하는 경우 대괄호 프로퍼티 접근 연산자 내부에 지정하는 프로퍼티키
//반드시 따옴표로 감싼 문자열이어야한다. 
//대괄호 프로퍼티 접근 연산자 내에 따옴표로 감싸지 않은 이름을 프로퍼티 키로 사용하면 
//자바스크립트 엔진은 식별자로 해석한다.
console.log(person1[name];)





