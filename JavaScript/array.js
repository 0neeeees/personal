'use strict';

// Array

// 1. Declaration 배열 선언
const arr1 = new Array();
const arr2 = [1, 2];

// 2. Index position 
const fruits = ['🍎', '🍌'];
console.log(fruits);
console.log(fruits.length);
console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]);
console.log(fruits[fruits.length-1]);

// 3. Looping over an array
// print all fruits

// a. for 
for (let i=0; i < fruits.length; i++) {
    console.log(fruits[i]);
}

// b. for of
for ( let fruit of fruits) {
    console.log(fruit);
}

// c. forEach
fruits.forEach((fruit, index) => console.log(fruit, index));


// 4. Addition, deletion, copy
// push: add an item to the end 뒤에서부터 추가
fruits.push('🍓','🍑');
console.log(fruits);

// pop: remove an item from the end // 뒤에서부터 삭제
fruits.pop();
console.log(fruits);

// unshift: add an item to the benigging 앞에서부터 추가
fruits.unshift('🍓', '🍋');
console.log(fruits);

// shift: remove an item from to the benigging 앞에서부터 삭제
fruits.shift();
console.log(fruits);


// note!! shift, unshift are slower than pop, push
// splice: remove an item by index position
fruits.push('🍑');
console.log(fruits);
fruits.splice(1,1);
console.log(fruits);
fruits.splice(1,1,'🫐','🍍');
console.log(fruits);

// combine two arrays
const fruits2 = ['🍏','🍅'];
const newFruits = fruits.concat(fruits2);
console.log(newFruits);

// 5. Searching
// indexOf: find the index
console.clear();
console.log(fruits);
console.log(fruits.indexOf('🫐'));
console.log(fruits.indexOf('🍑'));

// includes 배열에 있는지 확인- true, false로 반환
console.log(fruits.includes('🍓'));
console.log(fruits.includes('🍅'));


// lastIndexOf
console.clear();
fruits.push('🫐');
console.log(fruits);
console.log(fruits.indexOf('🫐'));
console.log(fruits.lastIndexOf('🫐'));


// practice
console.log(fruits);
console.log(fruits.length);

console.log(fruits.toString());
console.log(fruits);



