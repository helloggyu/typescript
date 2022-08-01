interface User{
  age:number;
  name:string;
}
//변수에 인터페이스 활용
var seho: User={
  age:33,
  name:'세호'
}

//함수에 인터페이스 활용
// function getUser(user:User){
//   console.log(user);
// }

const getUser=(user:User)=>{
  console.log(user);
}

const capt={
  age: 31,
  name:'캡틴'
}

getUser(capt);

//함수의 스펙(구조)에 인터페이스 활용
interface SumFunction{
  (a:number,b:number):number;
}
// let sum: SumFunction;

// sum=function(a,b){
//   return a+b;
// }

const sum2=(a:number, b:number):number=>{
  return a+b;
}


//인덱싱
interface StringArray {
  [index: number]: string;
}

let array: StringArray = ['a','b','c'];
//array[0]=10;

//인터페이스 딕셔너리 패턴
interface StringRegexDictionary{
  [key:string]:RegExp;
}

const obj:StringRegexDictionary={
  cssFile: /\.css$/,
  jsFile: /\.js$/,
}

// obj['cssFile']='a'



//인터페이스 확장(상속)
// interface Person {
//   name:string;
//   age:number;
// }

// interface Developer {
//   name:string;
//   age:number;
//   language: string;
// }

interface Developer extends Person{
  language: string;
}

const me : Developer ={
  language: 'ts',
  name: 'ggyu',
  age: 12
}