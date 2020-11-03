//배열
// C나 자바와는 다르게 기능은 같지만, 크기를 지정하지 않아도 되며, 어떤 위치에 어느 타입의 데이터를 저장해도 에러가 발생하지 않는다.

//==================================
//배열 리터럴을 통한 배열 생성

var colorArr = ['orange', 'yellow', 'blue', 'green', 'red'];
console.log(colorArr[0]);   // orange
console.log(colorArr[1]);   // yellow
console.log(colorArr[4]);   // red

//==================================
//배열 요소의 동적 생성

var emptyArr = [];
console.log(emptyArr[0]);   // undefined

emptyArr[0] = 100;
emptyArr[3] = 'eight';
emptyArr[7] = true;

console.log(emptyArr);
// [100, undefined, undefined, "eight", undefined, undefined, undefined, true]
console.log(emptyArr.length)    // 8

//==================================
//배열의 length 프로퍼티 변경

var arr = [ ];
console.log(arr.length);    // 0

arr[0] = 0;
arr[1] = 1;
arr[2] = 2;
arr[100] = 100;

console.log(arr.length);    // 101

//==================================
//배열 length 프로퍼티의 명시적 변경

var arr = [0, 1, 2];
console.log(arr.length) // 3

arr.length = 5;
console.log(arr)    // [0, 1, 2, undefined, undefined]

arr.length = 2;
console.log(arr)    // [0, 1]
console.log(arr[2]) // undefined

//==================================
//push()메소드와 length 프로퍼티

var arr = ['zero', 'one', 'two'];

arr.push('three');
console.log(arr);   // ['zero', 'one', 'two', 'three']

arr.length = 5;
arr.push('four');
console.log(arr);   // ['zero', 'one', 'two', 'three', undefined, 'four']

//==================================
//배열과 객체의 유사점과 차이점

var colorsArray = ['orange', 'yellow', 'green'];    // 배열
console.log(colorsArray[0]);    // orange
console.log(colorsArray[1]);    // yellow
console.log(colorsArray[2]);    // green

var colorsObj = {
    '0': 'orange',
    '1': 'yellow',
    '2': 'green'
};
console.log(colorsObj[0]);  // orange
console.log(colorsObj[1]);  // yellow
console.log(colorsObj[2]);  // green

console.log(typeof colorsArray);    // object (not array)
console.log(typeof colorsObj);  // object

console.log(colorsArray.length);    // 3
console.log(colorsObj.length);  // undefined

colorsArray.push('red');    // ['orange', 'yellow', 'green', 'red']
// colorsObj.push('red');  // Uncaught TypeError: Object #<Object> has no method 'push'

// 객체의 부모는 Object.prototype 이고
// 배열의 부모는 Array.prototype이다. 그리고 Array.prototype의 부모는 Object.prototype이다.
// push와 pop이라는 메소드는 Array.prototype에 있으므로 배열에서는 실행이 되지만, 객체에서는 실행이 되지 않는다.

//==================================
//배열의 동적 프로퍼티 생성

var arr = ['zero', 'one', 'two'];
console.log(arr.length);    // 3

arr.color = 'blue';
arr.name = 'number_array';
console.log(arr.length);    // 3

arr[3] = 'red';
console.log(arr.length) // 4

console.dir(arr);

//==================================
//배열의 프로퍼티 열거

// arr 배열은 동적 프로퍼티 생성을 할 때 사용했던 배열을 활용한다.
for (var prop in arr) {
    console.log(prop, arr[prop]);
}

/*
0 zero
1 one
2 two
3 red
color blue
name number_array
*/

for (var i = 0; i < arr.length; i++) {
    console.log(i, arr[i]);
}

/*
0 zero
1 one
2 two
3 red
*/

//==================================
//delete 연산자를 이용한 배열 프로퍼티 삭제

var arr = ['zero', 'one', 'two', 'three'];
delete arr[2];
console.log(arr);   // ['zero', 'one', undefined, 'three']
console.log(arr.length);    // 4

//==================================
//splice() 메소드를 이용한 배열 프로퍼티 삭제

var arr = ['zero', 'one', 'two', 'three'];

arr.splice(2, 1);   // 2번째 요소를 시작점으로 1개의 원소를 제거한다.
console.log(arr);   // ['zero', 'one', 'three']
console.log(arr.length);    // 3

//==================================
//Array() 생성자 함수를 통한 배열 생성

var foo = new Array(3);
console.log(foo);   // [undefined, undefined, undefined]
console.log(foo.length);    // 3

var bar = new Array(1, 2, 3);
console.log(bar);   // [1, 2, 3]
console.log(bar.length);    // 3

//==================================
//유사 배열 객체의 배열 메소드 호출

var arr = ['bar'];
var obj = {
    name: 'foo',
    length: 1
};

arr.push('baz');
console.log(arr);   // ['bar', 'baz']

// obj.push('baz');    // Uncaught TypeError: obj.push is not a function

//==================================
//유사 배열 객체의 apply()를 활용한 배열 메소드 호출

var arr = ['bar'];
var obj = {
    name: 'foo',
    length: 1
};

arr.push('baz');
console.log(arr);   // ['bar', 'baz']

Array.prototype.push.apply(obj, ['baz']);
console.log(obj);   // ['1': 'baz', name: 'foo', length: 2]