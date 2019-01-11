'use strict';

let num = 1;

while(num <= 10) {
    console.log(num++);
}

console.log('Done!');

// num = 1;
do {
    console.log(num++);
} while(num <= 10);

console.log('Done!');
let numberOne, numberTwo;

// numberTwo = prompt('Input Y');
/*do {
    numberOne = parseFloat(prompt('Input X'));
    if (isNaN(numberOne)) {
        alert('Input error!');
    }
} while(isNaN(numberOne));

do {
    numberTwo = parseFloat(prompt('Input Y'));
    if (isNaN(numberTwo)) {
        alert('Input error!');
    }
} while(isNaN(numberTwo));

console.log(numberOne + numberTwo);*/


for (let num = 1; num <= 5; num++) {
    console.log(num);
}
num = 1;
while (true) {
    console.log(num++);
    if (num > 10) {
        break;
    }
}

for (let num = 1; num <= 20; num++) {
    if (num % 2 !== 0) {
        continue;
    }
    console.log(num);
}
console.log('--------------------');

for(let a = 1; a <= 10; a++) {
    for(let b = 1; b <= 10; b++) {
        console.log(a * b);
    }
}

const numArray = [11, 0, 34, 56, 5];
console.log(numArray);






