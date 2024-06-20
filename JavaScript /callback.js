'use strict';

// JavaScript is synchronous. (동기)
// Execute the code block by orger after hoisting.
// hoisting: var, function declaration(선언들이 제일 위로 올라감.)
console.log('1');
setTimeout(() => console.log('2'), 1000);
console.log('3');

// Synchronous callback
function printImmediately(print) {
    print();
}
printImmediately(()=> console.log('hello'));

// Asynchronous callback
function printWithDelay(print, timeout) {
    setTimeout(print, timeout);
}
printWithDelay(()=> console.log('async callback'),2000);
