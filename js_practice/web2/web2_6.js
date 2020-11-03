//기본 타입 변수에서의 표준 메소드 호출

var num = 0.5;
console.log(num.toExponential(1));  // '5.0e-1'
console.log("test".charAt(2))   // s

//toExponential() : 표준 숫자형 메소드, 지수 형태의 문자열로 변환. 인자는 소수점 아래 몇 번쨰 자리까지 표시할 것인지 지정.

//이렇게 정의된 표준 메소드들을 객체처럼 호출할 수 있다.
//자세하게 알고싶을때는 ECMAScript 명세서를 보자.