//(ES6) class
class Person {
  //클래스 로직
  constructor(name, age) {
    console.log('생성되었습니다.');
    this.name = name;
    this.age = age;
  }
}

new Person(); // 생성 되었습니다.

let seho = new Person('세호', 30);
console.log(seho);

//자바스크립트 프로토타입
//객체정보를 확장하는것뿐만아니라 정의되어있는 기능들을 활용

//프로토타입과 클래스
//