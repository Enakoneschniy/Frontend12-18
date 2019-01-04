"use strict";
/*

 */
let a = 34; // number
let str = 'I am string'; // string
let str1 = "I am string"; // string
let str2 = `I am string`; // string
let x = undefined; // undefined
let c = null; // null
let obj = {}; // Object
let bol = true; // boolean
const PI = 3.14;
a = 56;
let userName = 'Eugene';
let result = 4 + 5;
console.log('Hello world');

let y = 2;
y++;
console.log(y++);
console.log(++y);

a = 4;
c = 2;
let b = 8;
let z = a++ + ++b + --c - ++b;
console.log(z, b);

z += 4; // z = z + 4
let age = 19;
if (age >= 18) {
    console.log('можно продать сигареты');
} else {
    let years = 18 - age;
    console.log(`Подождать ${years} лет`);
}

if (age >= 18) {
    if (age < 21) {
        console.log('бери пиво и уходи!!!');
    } else {
        console.log('продаем водку');
    }
} else {
    console.log('уходи!!!');
}

if (age >= 18 && age < 21) {
    console.log('бери пиво и уходи!!!');
} else if (age >= 21) {
    console.log('продаем водку');
} else {
    console.log('уходи!!!');
}

if (age === 18 || age === 21 && age <= 19) {
    console.log('продаем все что угодно!');
}

switch (age) {
    case 13:
        console.log('продаем сок!');
        break;
    case 18:
        console.log('продаем не сок!');
        break;
    default:
        console.log('действие по умолчанию!');
}

switch (true) {
    case a < b:
        // code
        break;
}







