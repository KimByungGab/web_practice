//프로토타입
//모든 객체는 자신의 부모 역할을 하는 객체와 연결되어 있다.
//그리고 마치 객체지향의 상속 개념과 같이 부모 객체의 프로퍼티를 마치 자신의 것처럼 쓸 수 있는 것 같은 특징이 있다.
//이런 부모 객체를 '프로토타입'이라고 부른다.

//==================================
//객체 생성 및 출력

var foo = {
    name: 'foo',
    age: 30
};

console.log(foo.toString());    // foo 객체는 tostring()이라는 메소드가 없지만 정상출력된다. 상속처럼 메소드를 호출했기 때문이다.
console.dir(foo);
//크롬 브라우저로 돌리면 _proto_ 프로퍼티가 있는데 이것이 프로토타입 프로퍼티다.
//즉, foo 객체는 자신의 부모 객체를 _proto_ 라는 프로퍼티로 연결하고 있는 것이다.
//프로토타입에 포함된 메소드들은 자바스크립트 표준 메소드로서, ECMAScript 명세서에 정의되어 있다.