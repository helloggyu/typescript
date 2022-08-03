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

interface Person{
  name: string;
  age: number
}

interface Developer{
  name: string;
  skill: string;
}

function askSomeone(someone: Developer | Person){
  someone.skill
}