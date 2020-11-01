//Object()를 이용해서 foo 빈 객체 생성
var foo = new Object();

//foo 객체 프로퍼티 생성
foo.name = 'foo';
foo.age = 30;
foo.gender = 'male';

console.log(typeof foo); // object
console.log(foo); //{name: 'foo', age: 30, gender: 'male'}

//==================================

//객체의 프로퍼티 접근하기
var too = new Object();

too.name = 'too';
too.major = 'computer sicence';

//객체 프로퍼티 읽기
console.log(too.name);  // too
console.log(too['name']);   // too
console.log(too.nickname) // undefined

//객체 프로퍼티 갱신
too.major = 'electronics engineering';
console.log(too.major)  // electronics engineering
console.log(too['major']); // electronics engineering

// 객체 프로퍼티 동적 생성
too.age = 30;
console.log(too.age) // 30

//대괄호 표기법만을 사용해야 할 경우 (접근하려는 프로퍼티가 표현식이거나 예약어일 경우. 다시말해 .하고 이어지는 경우를 쓰지 못 하는 경우이다.)
too['full-name'] = 'too bar';
console.log(too['full-name']);  // too bar
console.log(too.full-name) // NaN
console.log(too.full) // undefined
console.log(name) // 아무것도 안 나옴 ㅠ

//==================================

//객체 리터럴을 이용해서 객체 생성
var foo = {
    name: 'foo',
    age: 30,
    major: 'computer science'
};

// for in 문을 이용한 객체 프로퍼티 출력
var prop;
for (prop in foo) {
    console.log(prop, foo[prop]);
}

//==================================

//객체 프로퍼티 삭제
var foo = {
    name: 'foo',
    nickname: 'babo'
};

console.log(foo.nickname);  // babo
delete foo.nickname;    // nickname 프로퍼티 삭제
console.log(foo.nickname);  // undefined

delete foo; // foo 객체 삭제 시도
console.log(foo.name)   // foo

// 객체의 프로퍼티는 삭제가 가능하지만, 객체 자체 삭제는 불가능하다.