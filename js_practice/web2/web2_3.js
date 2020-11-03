//참조 타입의 특성

//==================================
//동일한 객체를 참조하는 두 변수

var objA = {
    val: 40
};
var objB = objA;

console.log(objA.val);  // 40
console.log(objB.val);  // 40

objB.val = 50;
console.log(objA.val);  // 50
console.log(objB.val);  // 50

//==================================
//기본 타입과 참조 타입의 비교 연산

var a = 100;
var b = 100;

var objA = { value: 100 };
var objB = { value: 100 };
var objC = objB;

console.log(a == b);    // true
console.log(objA == objB);  // false
console.log(objB == objC);  // true

//==================================
//Call by Reference와 Call by Value의 차이

var a = 100;
var objA = { value: 100 };

function changeArg(num, obj) {
    num = 200;
    obj.value = 200;

    console.log(num);   // 200
    console.log(obj);   // {value: 200}
}

changeArg(a, objA)

console.log(a); // 100
console.log(objA);  // {value: 200}

// 값만 복사하는거랑 해당 주소에 가서 직접 바꾸는것은 다르다.
// 모든 변수에는 주소가 있고 이 주소가 변경되어야 어디가서도 계속 변경된 상태로 있을 수 있는 것이다.