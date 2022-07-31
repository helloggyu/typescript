//함수의 파라미터의 타입을 정의하는 방식
// function sum(a:number, b:number){
//   return a + b;
// }
// sum(10, 20);


//함수의 반환값에 타입을 정의하는 방식
// function add(): number{
//   //return 10;
// }

//함수에 타입을 정의하는 방식
//파라미터를 제한하는 특성
function sum(a:number, b:number): number{
  return a + b;
}
sum(10,20);

// 함수의 옵셔널 파라미터

function log(a:string, b?:string){

}
log('hello world');
log('hello world','abc');

