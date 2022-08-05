//타입별칭: 특정타입이나 인터페이스를 참조할 수 있는 타입변수

interface Person {
  name:string;
  age:number;
}

// type Person = {
//   name:string;
//   age:number;
// }

const person1: Person={
  name:'세호',
  age:30
}

type StringType = string;
const str:StringType = 'ggyu';

type Todo ={id: string, title: string, done:boolean}

const getTodo=(todo:Todo)=>{
  
}


//타입과 인터페이스의 차이
//타입별칭은 타입값을 하나 생성하는게 아니라 타입에 대해 이름을 부여하는 것
// VScode상 미리보기 생태로 보게되면 
// 가장큰 차이점은 타입은 확장이 되지 않는다!! 공식문서상에는 가능한 interface로 사용하는게 좋다고 되어있다
//