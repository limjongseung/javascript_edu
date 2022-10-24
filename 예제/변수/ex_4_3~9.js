var result  = 10 + 20;

console.log(result);

//!4.3 변수 선언
// var키워드는 여러 단점이 있다
// block-level-scope 를 지원하지 않고 함수 레벨 스코프 (function-level-scope)를 지원한다는 점
// 이로 인해 의도치 않게 전역변수가 선언된다.

//!4_4
var score; //변수선언 (변수선언문)
//키워드
//키원드는 자바스크립트 코드를 해석하고 실행하는 자바스크립트 엔진이 수행할 동작을 규정한 일종의 명령어다. 자바스크립트 엔진은 키원드를 만나면 자신이 수행해야 할 약속된 동작을 수행한다. 예를 들어 var 키워드를 만나면 자바스크립트 엔진은 뒤에 오는 변수이름으로 새로운변수를 선언한다.
score = 80; //값의 할당

//!4_7
var score = 80; //변수 선언과 값의 할당
//!4_8
console.log(score);// undefined
 var score; //변수 선언
 score = 80; //값의 할당
 console.log(score); //80

 //!4_9
 console.log(score); //undefined
 var score = 80; // 변수 선언과 값의 할당
console.log(score); //80
//변수의 선언과 값의 할당을 하나의 문장으로 단축 표현해도 자바스크립트 엔진은 변수의 선언과 값의 할당을 2개의 문으로 나누어 각각 실행한다.






