/**
 * Created by Administrator on 2017-06-28.
 */

// 변수 선언부
var hap = 0;
var gop = 0;
var calType = '';

// 함수 선언부
/**
 *
 * function 함수이름(){
 *
 *    실행문
 *
 * }
 *
 *
 *
 * */

function tenHap(){

  for( var i=0; i<=10; i++ ){ // i : iterate, integer  단어의 첫글자

    hap = hap + i;

  }
  console.log(hap);
}

function gugudan(){

  for ( var i=2; i<10; i++ ){

    for ( var j=1; j<10; j++ ){

      gop = i * j;
      console.log( i + 'x' + j + '=' + gop );

    }
  }

}

//calType = '곱';

// 실행부
if(calType == '합'){
  tenHap();
} else{
  gugudan();
}