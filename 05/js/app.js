'use strict';

let numArray = [1, 2, 3, 4, 5, 6];

const lastNum = numArray.pop();

numArray.length = numArray.length - 1;

numArray = numArray.slice(0, numArray.length - 1);

numArray = numArray.concat([34, 45, 54]);

const matrix = [
    [1, 2, 3, 4],
    [11, 22, 33, 44],
    [12, 22, 32, 42]
];

const randomMatrix = [];
const size = 10;

for (let row = 0; row < size; row++) {
    randomMatrix[row] = [];
    for (let cell = 0; cell < size; cell++) {
        randomMatrix[row][cell] = (row + 1) * (cell + 1);
    }
}

for(let row of randomMatrix) {
    for(let cell of row) {
        console.log(cell);
    }
}

let [a, b, y, ...x] = [34, 56, 68, 897];

console.log(a, b, y, x);

let arr1 = [1, 2, 3, 4];
let arrTemp = arr1.slice();
let arr2 = [45, 56, 75, 86];
arr1.push(...arr2, a);

function getRandomMatrix(size = 10, value = undefined) {
    const randomMatrix = [];
    for (let row = 0; row < size; row++) {
        randomMatrix[row] = [];
        for (let cell = 0; cell < size; cell++) {
            randomMatrix[row][cell] = value ? value : (row + 1) * (cell + 1);
        }
    }
    return randomMatrix;
}
let mt = getRandomMatrix(6, 3, 56, 57);

function sum(...args) {
    return args.reduce((sum, item) => sum += item, 0);
}

[1, 2, 3, 4].forEach(item => console.log(item));

function forEach(array, callback) {
    for(let item of array) {
        callback(item);
    }
}

forEach([11, 22, 33, 44], function (element) {
    console.log(element);
});

const fn = function (element) {
    console.log(element);
};
fn(45);
forEach([11, 22, 33, 44], fn);
