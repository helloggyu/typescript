//js 문자열
// var str='hello';
//TS 문자열 선언
const str: string = 'hello';
//TS 숫자
let num: number = 10;
// TS 배열
let arr: Array<number>=[1,2,3];

let heros :Array<string>=['caption','Thor','Tulk','10'];

let item: number[]=[1,2,3];


//TS 튜플: 배열의 각각 인덱스에 타입 지정
let address: [string, number] = ['gangnam', 100];

//TS 객체
//let obj: object = {};
// let person: object={
//   name:'capt',
//   age:100
// };
let person: { name:string, age:number }={
  name:'thor',
  age:1000
}

//TS 진위값
let show:boolean =true;
