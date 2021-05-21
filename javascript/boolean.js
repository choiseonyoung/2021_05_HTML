// JS에서의 true, false
console.log("a" == "b");
console.log("a" == "a");

let num = 3;

/* Java와 같은 경우는 if() 문에서 Single EQ(=)를 사용하면 syntax error가 난다
    if( num = 3 ) {}
    하지만 다음과 같은 코드는 논리적으로 문제가 없다
    if(  (num = method()) == 3 ) {}
*/
/*
while(  (reader = buffer.readLine()) != null  )
    while(true) {
        reader = buffer.readLine();
        if(reader == null) break;
    }
*/
// js에서는 다음과 같은 코드가 논리적으로는 문제가 될 수 있지만 문법적으로는 정당하다
// if( (num = 5) == true )
if ((num = 5)) {
  console.log("같은 값");
}

// js에서는
// 숫자 0, 문자열 "", false, null, undefined, NaN (다 flase란 의미)를 제외한 모든 것은 boolean에서 true로 취급된다
// if(값) 명령을 사용할 때 값에 위에 나열한 type 데이터가 나타나면
// 논리적으로 false 인식되고 그 외는 무조건 true이다

if (0) {
  console.log(true);
} else {
  console.log(false);
}

if (null) {
} else {
  console.log(false);
}

if ("") {
  console.log(false);
}

let num1 = 3;
let num2 = "3";
/*
두 값이 같이 비교를 하는 연산자 
주고 if, while 등에서 사용

동등연산자( == )
    자동으로 형변환이 발생한다
    0 == '0'을 비교하면 문자열 '0'을 숫자 0으로 자동형변환을 해버린다
    문자열과 숫자의 비교지만 내용만 같으면 같은 것으로 true값이 된다
일치연산자( === )
    무조건 자신의 형(type)을 유지하면서 비교
    0 === '0'을 비교하면
    1. 두 값의 type이 일치하는지 비교
        같으면 true, 다르면 무조건 false
    2. 두 값의 type이 같으면
        실제 값을 비교하여
        같으면 true, 다르면 false
*/
console.log(num1 == num2);
console.log(num1 === num2);

// 문자열 ""과 문자열 "0"을 비교 => false
console.log("" == "0"); // false

// 문자열 ""을 숫자 0으로 변환하고
// 0 == 0으로 비교 => true
console.log("" == 0);

// boolean true를 문자열 ""
console.log("true" == true);
console.log("false" == false);

// 문자열 "0"을 숫자 0으로 변환
console.log("0" == false);

// 숫자 0은 당연히 false 이므로 결과는 true
// 숫자 0이 false 냐? => true
console.log(0 == false);

// 동등연산자에서는 null하고, undefined를
// null == undefined 할 때만 true로 인식하고
// 다른 이외의 값과 비교할 때는 무조건 false
// 숫자 0, null, undefined 등은
// if에서 false로 인식을 하지만
// 동등연산자를 사용할 때는 주의를 해야 한다
console.log(null == undefined);
console.log(null == false);
console.log(undefined == false);
console.log(null == 0);
console.log(undefined == 0);
console.log(NaN == false); // NaN > Not a Number 숫자가 아니다

// 어떤 변수에 담긴 값이 null인가 확인하고 싶을 때
// 1번이나 2번처럼 코드를 사용해야만 한다
// 3번처럼 사용하면 논리적 오류를 낼 수 있다
let un1 = null;

// 1번코드
if (un1) {
  console.log(true);
} else {
  console.log(false);
}
// 2번코드
if (un1 == null) {
}
// 3번코드
if (un1 == false) {
}

// 일반적으로 숫자형, 문자형의 데이터가 같은지(일치하는지) 알아보고 싶을 때는
// 일치 연산자를 사용하는 것이 좋다

console.log("3" === 3);

// parseInt()
// 문자열형 숫자를 실제 숫자로 변환하는 JS 함수
// type이 다른 두 값을 비교하고자 할 때는
// 코드가 다소 복잡해지지만
// 강제 형변환을 하고 일치연산자로 비교하는 것이 논리적 오류를 막을 수 있다
console.log(parseInt("3") === 3);

// isNaN(값)
// 값이 숫자로 변환할 수 없냐 ?
//      할 수 없으면 true
//      할 수 있으면 false
console.log(isNaN("3")); // false
console.log(isNaN(3)); // false
if ("3" == NaN) {
  console.log(true);
} else {
  console.log(false);
}

// "A"가 숫자로 바꿀 수 없냐 ?
console.log(isNaN("A")); // true
// 값 비교가 아니고 type 비교이므로 false
console.log("A" == NaN); // false
