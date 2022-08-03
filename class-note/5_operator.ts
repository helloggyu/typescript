// function logMessage (value:any){
//   console.log(value);
// }
// logMessage('hello');
// logMessage(100);

//any로 하면 어떤 타입이든 소화를 할 수 있지만 
// 하나의 타입 이상을 쓸수 있다.

// function logMessage(value:string|number){
//   console.log(value);
// }
// logMessage('hello');

//Union Type 장점: 타입가드(특정타입으로 타입의 범위를 좁혀나가는 (필터링하는)과정)

let uniontest: string|number|boolean;

function logMessage(value: string|number){
  if(typeof value==='number'){
    value.toLocaleString();
  }

  if(typeof value==='string'){
    value.toString();

  
  }
  throw new TypeError('error');
}

// logMessage('hello');

interface Person1{
  name: string;
  age: number
}

interface Developer1{
  name: string;
  skill: string;
}
//공통된 속성에 대해서만 제공 보장된 속성에 대해서만 제공
function askSomeone(someone: Developer1 | Person1){
  someone.name
  someone.age
  someone.skill
}

askSomeone({name:'디벨로퍼', skill:'웹개발'});
askSomeone({name:'캡틴', age:100});

// 타입가드에 대한 추가처리가 필요한 반면에, 
// 인터섹션: &연산자로 타입을 연결
var capt1: string & number & boolean;


function askSomeone1(someone: Developer1 & Person1){
  someone.name
  someone.age
  someone.skill
}

askSomeone1({name:'디벨로퍼', skill:'웹개발',age:10});
askSomeone1({name:'캡틴', age:100});

