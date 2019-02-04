'use strict';

class Animal {
    constructor(name, age, gender) {
        this.name = name;
        this.age = age;
        this.gender = gender;
    }
    sayHello() {
        alert(`Hello! I\'m Animal!`);
    }
}

class Cat extends Animal {
    constructor(name, age, gender, tail, color) {
        super(name, age, gender);
        this.tail = tail;
        this.color = color;
    }
    sayHello() {
        alert(`Meow! I am ${this.name}`);
    }
}

class LittleCat extends Cat {

}

/*
function Animal() {
    this.name = 'sdf'
}
*/

const animal = new Cat('Petya', 2, 'male');
