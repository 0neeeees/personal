'use strict';
// Object-oriendted programming
// class: template
// object: instance of a class
// JavaScript classed
// - introduced in ES6
// - syntactical sugar over prototype-based inheritance

// 1. Class declarations
class Person {
    // constructor
    constructor(name, age) {
        // fields
        this.name = name;
        this.age = age;
    }

// methods
speak() {
    console.log(`${this.name}: hello!`);
    }
}

const ellie = new Person('ellie', 20);
console.log(ellie.name);
console.log(ellie.age);
ellie.speak();

// 2. Getter and setters
class User {
    constructor(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }

    get age() {
        return this._age;

    }

    set age(value) {
        // if (value < 0) {
        //  throw Error('age can not be negative');
        // }
        this._age = value < 0 ? 0 : value;
        }
    }

const user1 = new User('Steve', 'Job', -1);
console.log(user1.age);    
