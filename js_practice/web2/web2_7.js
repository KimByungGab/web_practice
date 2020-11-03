//연산자
//자바스크립트의 연산자는 대부분 다른 언어와 유사하다.

//==================================
// + 연산자 예제

var add1 = 1 + 2;
var add2 = 'my ' + 'string';
var add3 = 1 + 'string';
var add4 = 'string' + 2;

console.log(add1);  // 3
console.log(add2);  // my string
console.log(add3);  // 1string
console.log(add4);  // string2

//==================================
/*
typeof 연산자는 피연산자의 타입을 문자열 형태로 리턴.
null과 배열은 'object', 함수는 'function'이라는 점에 유의해야한다.

//각 타입별 typeof 연산자 결과
기본 타입 / 숫자 / 'number'
기본 타입 / 문자열 / 'string'
기본 타입 / 불린값 / 'boolean'
기본 타입 / null / 'object'
기본 타입 / undefined / 'undefined'
참조 타입 / 객체 / 'object'
참조 타입 / 배열 / 'object'
참조 타입 / 함수 / 'function'
*/

//==================================
// ==(동등) 연산자와 ===(일치) 연산자의 차이점

console.log(1 == '1')   // true
console.log(1 === '1')  // false

// 동등 연산자는 타입이 일치하지 않아도 같은 값이면 처리되지만, 일치 연산자는 타입까지 완전히 똑같아야 되기 때문에 다른 결과를 부르게 되었다.
// 대부분의 자바스크립트 코딩 가이드에서는 == 연산자로 비교하는것을 추천하지 않는다.
// 가령 jQuery 코딩 가이드 라인에서도 가급적이면 === 연산자로 비교하기를 권하고 있다.

//==================================
//!! 연산자 활용을 통한 불린값 변환

console.log(!!0);   // false
console.log(!!1);   // true
console.log(!!'string');    // true
console.log(!!'');  // false
console.log(!!true);    // true
console.log(!!false);   // false
console.log(!!null);    // false
console.log(!!undefined);   // false
console.log(!!{});  // true
console.log(!![1, 2, 3]); // true