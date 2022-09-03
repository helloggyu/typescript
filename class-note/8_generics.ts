// function logText(text){
//   console.log(text);
//   return text;
// }

// logText(10); // 숫자 

// logText('안녕하세요'); // 문자 

// logText(true); // 진위 값


// 제네릭(Generics)
// 재사용이 높은 컴포넌트 만들때 가장많이 사용되는 문법

// function logText<T>(text:T):T{
//   console.log(text);
//   return text;
// }


// 호출하는 시점에 타입을 넘겨줄 수 있음
//logText<string>('하이');

//인터페이스에 제네릭을 선언하는 방법
//기본적으로는 이렇게 쓰지만, 제네릭을 선언하고 싶다면
// interface Dropdown {
//   value: string;
//   selected: boolean;
// }

// const obj:Dropdown={value:'string',selected:false}

interface Dropdown<T> {
  value: T;
  selected: boolean;
}

const obj:Dropdown<number>={value:10,selected:false}

//타입을 선언하는 시점에 타입을 넘겨서 인터페이스안의 타입을 바꾸고 싶으면
//차이점은: 제네릭을 사용하지 않으면 당연히 정해진 타입만 사용해야하고
//위와같이만 써준다면 문제없이 선언이 된다.
//인터페이스에 제네릭을 이용한 경우에 위와 같이 쓴다면 에러가 나게 되는데 제네릭타입을 위와같이 선언해주어야한다!!

//3. 기존타입 정의방식
//3-1 
// 동일한 코드를 단순히 타입을 받기 위해서 중복으로 선언해 나가는 문제점이 발생한다
// 유지보수 측면에서 매우 안좋아 보인다
// function logText(text:string){
//   console.log(text);
//   return text;
// }

// function logNumber(num:number){
//   console.log(num);
//   return num;
// }
// logText('a');
// logNumber(10);

//3-2
//유니온타입을 이용한다면?
// function logText(text:string | number){
//   console.log(text);
//   //타입을 받은 상황에서는?
//   // string 과 number 공통으로 사용할수 있는 속성에 대해서만 자동완성 기능 제공 되는 문제점
//   return (text);
// }

// 함수 호출시 들어가는 타입의 문제에 대해서는 해결이 되었다!
// const a=logText('a');
//  //a.split();
// // 문자를 넣었음에도 split메서드에서 에러가뜬다. 타입이 정확하게 string이라고 선언되어야만 사용할수 있다
// logText(10);


//4 제네릭의 장점과 타입추론에서의 이점

function logText<T>(text:T):T{
  console.log(text);
  //타입을 받은 상황에서는?
  // string 과 number 공통으로 사용할수 있는 속성에 대해서만 자동완성 기능 제공 되는 문제점
  return (text);
}
const str = logText<string>('abc');
// 타입을 호출할때 위와 같이 정의

const login = logText<boolean>(true);
//동일한 함수를 호출할때도 타입을 자유롭게 정의할 수 있게 되었다!

// logText('a');
// logText(10);