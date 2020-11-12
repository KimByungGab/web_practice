// 함수 호출과 this

// 함수의 기본적인 기능은 당연히 함수를 호출하여 코드를 실행하는 것이다.
// 하지만 자바스크립트 언어 자체가 C/C++ 같은 엄격한 문법 체크를 하지 않는 자유로운 특성의 언어이므로 함수 호출 또한 다른 언어와는 달리 자유롭다.

//==================================
// 함수 형식에 맞춰 인자를 넘기지 않더라도 함수 호출이 가능.

function func(arg1, arg2) {
    console.log(arg1, arg2);
}

func();             // undefined undefined
func(1);            // 1 undefined
func(1, 2);         // 1 2
func(1, 2, 3);      // 1 2

//==================================
// arguments 객체 예제 코드

function add(a, b) {
    console.dir(arguments);
    return a + b;
}

console.log(add(1));            // NaN
console.log(add(1, 2));         // 3
console.log(add(1, 2, 3));      // 3

// 호출 시에 넘긴 인자를 배열 형태로 저장하기 때문에, 호출 시에 넘긴 인자 개수는 받은 만큼 늘어난다.

// 함수를 호출할 때 넘겨진 인자 (배열 형태) : 함수를 호출할 때 첫 번째 인자는 0번 인덱스, 두 번째 인자는 1번 인덱스, ...
// length 프로퍼티 : 호출할 때 넘겨진 인자의 개수를 의미
// callee 프로퍼티 : 현재 실행중인 함수의 참조값(예제에서는 add() 함수)

//==================================
// 함수에서 인자의 개수를 명시하지 않고 개발할 수도 있다.

function sum() {
    var result = 0;

    for(var i = 0; i < arguments.length; i++) {
        result += arguments[i];
    }

    return result;
}

console.log(sum(1, 2, 3));                       // 6
console.log(sum(1, 2, 3, 4, 5, 6, 7, 8, 9));     // 45

//==================================
// 메소드 호출 사용 시 this 바인딩

var myObject = {
    name: 'foo',
    sayName: function() {
        console.log(this.name);
    }
};

var otherObject = {
    name: 'bar'
};

otherObject.sayName = myObject.sayName;

myObject.sayName()          // foo
otherObject.sayName();      // bar

// 객체의 프로퍼티가 함수일 경우, 이 함수를 메소드라고 부른다.
// 이러한 메소드를 호출할 때, 메소드 내부 코드에서 사용된 this는 해당 메소드를 호출한 객체로 바인딩된다. (자신을 부른 객체를 바라본다는 것)

//==================================
// 전역 객체와 전역 변수의 관계를 보여주는 예제 코드

var foo = "I'm foo.";

console.log(foo);           // I'm foo.
console.log(window.foo);    // I'm foo.

// 따라서 전역 변수는 전역 객체(window)의 프로퍼티로도 접근할 수가 있다.

//==================================
// 함수를 호출할 때 this 바인딩을 보여주는 예제 코드

var test = 'This is test';
console.log(window.test);       // This is test.

var sayFoo = function() {
    console.log(this.test);
}

sayFoo();                       // This is test.

//==================================
// 내부 함수의 this 바인딩 동작을 보여주는 예제 코드

var value = 100;

var myObject = {
    value: 1,
    func1: function() {
        this.value += 1;
        console.log('func1() called, this.value : ' + this.value);

        func2 = function() {
            this.value += 1;
            console.log('func2() called, this.value : ' + this.value);

            func3 = function() {
                this.value += 1;
                console.log('func3() called, this.value : ' + this.value);
            }

            func3();
        }

        func2();
    }
};

myObject.func1();

// 예상
// func1() called, this.value : 2
// func2() called, this.value : 3
// func3() called, this.value : 4

// 실제
// func1() called, this.value : 2
// func2() called, this.value : 101
// func3() called, this.value : 102

// 이유는 내부 함수 호출 패턴을 정의하지 않았기 때문에 func2()와 func3()은 전역객체(window)를 바라보게 되어서 this가 애꿎은 변수에게 갔다.
// 이렇게 내부 함수가 this를 참조하는 자바스크립트의 한계를 극복하려면 부모함수의 this를 내부 함수가 접근 가능한 다른 변수에 저장해야 된다.

//==================================
// 내부 함수의 this 바인딩 문제를 해결한 예제 코드

var value = 100;

var myObject = {
    value: 1,
    func1: function() {
        var that = this;

        this.value += 1;
        console.log('func1() called, this.value : ' + this.value);

        func2 = function() {
            that.value += 1;
            console.log('func2() called, this.value : ' + that.value);

            func3 = function() {
                that.value += 1;
                console.log('func3() called, this.value : ' + that.value);
            }

            func3();
        }

        func2();
    }
};

myObject.func1();

//==================================
// 생성자 함수의 동작 방식

var Person = function(name) {
    this.name = name;
};

var foo = new Person('foo');
console.log(foo.name);          // foo

// 생성자 함수는 기존 함수에 new 연산자를 붙여서 호출하면 해당 함수는 생성자 함수로 동작한다.
// 함수 이름의 첫 문자를 대문자로 써야한다.

// 생성자 함수의 동작 순서
// 1. 빈 객체 생성 및 this 바인딩
// 2. this를 통한 프로퍼티 생성
// 3. 생성된 객체 리턴

//==================================
// 객체 생성 두 가지 방법 (객체 리터럴 vs 생성자 함수)

var foo = {
    name: 'foo',
    age: 35,
    gender: 'man'
};
console.dir(foo);

function Person(name, age, gender, position) {
    this.name = name;
    this.age = age;
    this.gender = gender;
}

var bar = new Person('bar', 33, 'woman');
console.dir(bar);

var baz = new Person('baz', 25, 'woman');
console.dir(baz);

// 객체 리터럴 방식과, 생성자 함수 방식의 차이는 프로토타입 객체에 있다.
// 객체 리터럴 방식은 자신의 프토토타입 객체가 Object.prototype이다.
// 생성자 함수 방식의 경우는 Person.prototype으로 서로 다르다.

// 이 차이의 이유는 객체 생성 규칙 때문이다.
// 자바스크립트의 객체는 자신을 생성한 생성자 함수의 프로토타입 프로퍼티가 가리키는 객체를 자신의 프로토타입 객체로 설정하기 때문이다.
// 객체 리터럴 방식에서 객체 생성자 함수는 Object()이다.
// 생성자 함수 방식의 경우는 생성자 함수 자체(Person())이다.

//==================================
// new를 붙이지 않고 생성자 함수 호출 시의 오류

var qux = Person('qux', 20, 'man');
console.log(qux);               // undefined

console.log(window.name);       // qux
console.log(window.age);        // 20
console.log(window.gender);     // man

// 이렇게 자바스크립트는 일반 함수와 생성자 함수의 구분이 별도로 없으므로 생성자 함수의 이름은 대문자 표기를 네이밍 규칙으로 권장한다.
// 하지만 이렇게 해도 new를 사용해서 호출하지 않을 경우, 코드에서 에러가 발생할 수 있다.
// 때문에 더글라스 크락포드와 같은 자바스크립트 전문가들은 객체를 생성하는 다음과 같은 별도의 코드 패턴을 사용하기도 한다.

// if (!(this instanceof arguments.callee))
// arguments.callee가 곧 호출된 함수를 가리킨다.
// 이와 같이 하면, 특정 함수 이름과 상관없이 패턴을 공통으로 사용하는 모듈을 작성할 수 있다는 장점이 있다.