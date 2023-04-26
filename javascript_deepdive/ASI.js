function foo (){
    return
    {}
}
//ASI동작 결과 => return; {};
// 개발자의 예측 => return {};

console.log(foo()); // undefined

var bar = function(){}
(function(){})();
//ASI 동작 결과 => var bar = function(){function(){}}();
//개발자의 예측 => var bar = function(){}; (fucntion(){})();

// ?  문에는 표현식인 문과 표현식이 아닌 문이 있다. 표현식인 문은 값으로 평가 될 수 있는 문이며,
// 표현식이 아닌 문은 값으로 평가 될 수 없는 문을 말하낟. 예를 들어, 변수 선언문은 값으로 평가 될 수 없다.
//따라서 표현식이 아닌 문이다. 하지만 할당문은 값으로 평가될 수 있다. 따라서 표현식인 문이다.