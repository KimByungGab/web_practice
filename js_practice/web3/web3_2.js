// 함수 객체.
// 자바스크립트에서는 함수가 기본 기능인 코드 실행뿐만 아니라, 일반 객체처럼 프로퍼티도 가질 수 있다.

//==================================
// add() 함수도 객체처럼 프로퍼티를 가질 수 있다.

function add(x, y) {
    return x + y;
}

add.result = add(3, 2)
add.status = 'OK';

console.log(add.result);    // 5
console.log(add.status);    // OK

// 이렇게 될 수 있는 이유는 함수 코드는 함수 객체의 [[Code]] 내부 프로퍼티에 자동으로 저장되기 때문이다.(ECMAScript 명세서 참조)

//==================================
// 변수나 프로퍼티 값으로 할당

var foo = 100;
var bar = function() {
    return 100;
};
console.log(bar()); // 100

var obj = {};
obj.baz = function() {
    return 200;
};
console.log(obj.baz()); // 200

//==================================
// 함수를 다른 함수의 인자로 넘긴 코드

var foo = function(func) {
    func();
};

foo(function() {
    console.log('Function can be used as the argument.');
});

//==================================
// 함수를 다른 함수의 리턴값으로 활용한 코드

var foo = function() {
    return function() {
        console.log('this function is the return value.');
    };
};

var bar = foo();
bar();

//===================================