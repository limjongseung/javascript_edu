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
