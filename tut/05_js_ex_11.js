/**
 * Created by Administrator on 2017-06-29.
 */

// 매개변수를 사용하는 함수 연습

/*

  매개변수 함수를 사용하는 경우

  1. 전역변수, 지역변수의 적용 범위를 개선하기 위해 사용

  2. 함수의 재사용성을 높이기 위해 사용

 */

// 두 수의 합을 계산하는 코딩

// 1) 매개변수 를 사용하지 않는 경우
(function(){

  var a = 10;
  var b = 20;
  var c = 40;
  var d = 50;

  function sum1(){
    console.log(a + b);
  }

  function sum2(){
    console.log(b + c);
  }

  function sum3(){
    console.log( (a + b) + d);
  }

  sum1();
  sum2();
  sum3();

})();

// 2) 매개변수 를 사용하는 경우
(function(){

  // 매개변수는 var을 사용해서 변수 선언을 할 필요가 없음
  // 함수 선언
  function sumArg(arg1, arg2){
    console.log( arg1 + arg2 );
  }

  // 함수 실행
  sumArg( 10, 20 );
  sumArg( 20, 40 );
  sumArg( 30, 50 );

})();

(function(){

  function insa(arg1){
    console.log( '안녕하세요~ ' + arg1 + '님!' );
  }

  insa('지환');
  insa('조이');
  insa('헤르에스');
  insa('아니라');
  insa('뷔라');

})();

(function(){

  function i(arg1, arg2, arg3, arg4, arg5){
    console.log( '이름 : ' + arg1 );
    console.log( '나이 : ' + arg2 );
    console.log( '성별 : ' + arg3 );
    console.log( '신장 : ' + arg4 );
    console.log( '지역 : ' + arg5 );
  }

  i('지환', '22', '남', '170cm', '서울' );
  i('헤르에스', '27', '여', '168cm', '아일스트 왕국' );
  i('지팡', '22', '남', '170com', '서울' );

})();