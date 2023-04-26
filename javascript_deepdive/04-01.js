//성공적으로 연산이 끝났고 연산 결과도 메모리에 정장되었지만 문제가 있다. Cpu가 연산해서 만들어낸 수자 값 30
//을 재사용 할 수 없다는 것이다.
//10+20이라는 연산을 했다는 것은 그 연산 결과가 필요하고 이를 사용해 무언가 를 하겠다는 의도가 있었을 것이다. 
//연산 결과를 단 한 번 만 사용한다면 문제가 없겠지만 만약 연산 결과 30을 재사용하고 싶다면 메모리 주소를 통해
//연산결과30이 저장된 메모리 공간에 직접 접근하는 것 외에는 방법이 없다.


//? 변수는 하나의 값을 저장하기 위해 확보한 메모리 공간 자체 또는 그 메모리 공간을 식별하기 위해 붙인 이름을 말한다.
//변수에 여러 개의 값을 저장하는 방법
//변수는 하나의 값을 저장하기 위한 매커니즘이다. 여러개의 값을 저장하려면 여러개의 변수를 사용해야한다. 단, 배열이나 객체
//같은 자료구조를 사용하면 관련이 있는 여러 개의 값을 그룹화해서 하나의 값처럼 사용할 수 있다.

var userId = 1;
var userName = 'Lee' ;
//객체나 배열 같은 자료구조를 사용하면  여러 개의 값을 하나로 그룹화해서 하나의 값처럼 사용할 수 있다. 
var user = {id:1, name : 'Lee'};

var user = [
    {id:1, name:"Lee"},
    {id:2, name:"Kim"}
]
var result = 10 + 20;
//10+20은 연산을 통해 새로운 값 30을 생성한다. 그리고 연산을 통해 생성된 값 30은 메모리 공간에 저장된다.
//이때 메모리 공간에 저장된 값 30을 다시 읽어 들여 재사용 할 수 있도록 값이 저장된 메모리 공간에 상징적인 이름을 붙인 것이 바로 변수다.
