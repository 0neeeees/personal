// 1. Use strict
// added in ES 5
// use this for Valina Javascript.

'use strict';
console.log(age);
// 2. Variabl, rw(read/write)
// let ( added in ES6 ) : 변수 만들 때
let globalName = 'global name';
{
let name = 'youngeun';
console.log(name);
name = 'hello';
console.log(name);
console.log(globalName);
}
console.log(name);
console.log(globalName);


// var (don't ever use this!)
// var hoisting ( move declaration from bottom to top) 어디에 선언했는지와 상관없이 제일 위로 끌어올려줌.
// has no block scope
{ age =4;
    var age;
}
console.log(age);

// Note !
// Immutable data types: premitive types, frozen objects (i.e. object.freeze())
// Mutable data types: all objects by default are mutable in JS

// 3. Constant, r(read only)
// use const whenever possible.
// favor immutable data type always for a few reasons:
// - security 보안상의 이유
// - thread safety 
// - reduce human mistakes
// 한 번 선언하면 값이 바뀌지 않음
const daysInWeek = 7;
const maxNumber =5;


// 자바스크립트에서의 변수 선언
// Mutable type : let, Immutable : const

// 4. Variable types
// primitive, single item : number, string. boolean, null, undefiedn, symbol ( 더 이상 작은 단위로 나눠질 수 없는 아이템 )
// object, box container ( 싱글 아이템을 여러 개로 묶어서 박스로 관리 )
// function, first-class function ( function 변수에 할당 가능 )

const count = 17;
const size = 17.1;
console.log(`value: ${count}, type: ${typeof count}`);
console.log(`value: ${size}, type: ${typeof size}`);


// 자바 스크립트에서는 number 라고 따로 선언할 필요 없이 그냥 let 변수 = 숫자; 이렇게 변수 선언하면 끝!
let a = 10;
let b = 20;
console.log(`value: ${a}, type: ${typeof a}`);
console.log(`value: ${b}, type: ${typeof b}`);



// number - speicla numeric values: Infinity, -Infinity, NaN
const infinity = 1 / 0;
const negativeInfinity = -1 / 0;
const nAn = 'not a number' / 2;
console.log(infinity);
console.log(negativeInfinity);
console.log(nAn);

// bigInt ( fairly new, don't use it yet) 아직 흔하게 쓰이진 않음, 큰 숫자를 사용할 때
const bigInt = 1234567890123456789012345678901234567890n; // over 
console.log(`value: ${bigInt}, type: ${typeof bigInt}`);
Number.MAX_SAFE_INTEGER;

// string
const char = 'c';
const brendan = 'brendan';
const greeting = 'hello ' + brendan;
console.log(`value: ${greeting}, type: ${typeof greeting}`);
const helloBob = `hi ${brendan}!`;

// + 를 사용하여 여러 개의 변수를 출력할 경우 '문자열'+변수+'문자열'+변수 .. 처럼 번거롭지만,
// ` 를 사용하여 그 안에 내용을 그대로 출력할 수 있음 변수는 ${변수} 형태로 입력
console.log(`value: ${helloBob}, type: ${typeof helloBob}`);
console.log('value: ' + helloBob + ' type: ' + typeof helloBob);

// boolean 참 or 거짓
// false : 0, null, undefined, NaN, ' '
// true : any other value
const canRead = true;
const test = 3 < 1; // false
const abc = 0==1; // false
console.log(`value: ${canRead}, type: ${typeof canRead}`);
console.log(`value: ${test}, type: ${typeof test}`);
console.log(`value: ${abc}, type: ${typeof abc}`);

// null
let nothing = null;
console.log(`value: ${nothing}, type: ${typeof nothing}`);

// undefined
let x;
console.log(`value: ${x}, type: ${typeof x}`);

// symbol, create unique identifiers for objects
const Symbol1 = Symbol('id');
const Symbol2 = Symbol('id');
console.log(Symbol1 === Symbol2); //false
const gSymbol1 = Symbol.for('id'); // 주어진 string(id)에 맞는 심볼을 만듬
const gSymbol2 = Symbol.for('id');
console.log(gSymbol1 === gSymbol2); //true 
console.log(`value: ${Symbol1.description}, type: ${typeof Symbol1}`)
// symbol은 일반적인 형태 ${변수이름} 로 출력하면 오류 발생, ${symbol.description}으로 출력해야 함.

// object, real-life object, data structure
const ellie = { name: 'ellie', age: 20};
console.log(ellie);


// 5. Dynamic typing : dynamically typed language
// 선언할 때 어떤 타입인지 선언하지 않고, 프로그램이 동작할 때(run time) 할당된 값에 따라 타입이 변경될 수 있음
let text = 'hello';
console.log(text.charAt(0)); //h 배열은 0부터 시작
console.log(`value: ${text}, type: ${typeof text}`);
text = 1;
console.log(`value: ${text}, type: ${typeof text}`);
text = '7' + 5; // 숫자 5도 string으로 취급함.
console.log(`value: ${text}, type: ${typeof text}`);
text = '8' / '2'; // 산술연산자로 인해 8과 2를 숫자 취급함.
console.log(`value: ${text}, type: ${typeof text}`);
console.log(text.charAt(0)); // 중간에 타입이 숫자로 바꿀 경우 오류 발생

