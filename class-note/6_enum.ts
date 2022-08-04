//이넘:  특정 값들의 집합을 의미하는 자료형
// 서비스 개발시 드롭다운이나 정해져있는 목록의 값들을 지정할때 사용하기 좋음
// 숫자형 이넘 & 문자형 이넘

enum Shoes{
  Nike='나이키',
  Adidas='아디다스'
}

let myShoes =  Shoes.Nike;
console.log(myShoes) // result:0
//숫자형 이넘
//결과는 0 1씩 자동증가하게 된다 별도의 값을 지정하지 않으면 숫자형 이넘으로 취급한다!!
// 10을 지정하게 되면 10부터 1씩 증가

//문자형 이넘
//

enum Answer {
  Yes = "Y",
  No = 'N'
}

const askQuestion = (answer: Answer) => {
  if(answer === Answer.Yes){ 
    console.log('정답') 
  }
  if(answer === Answer.No){
    console.log('오답')
  }
}

 askQuestion(Answer.Yes)