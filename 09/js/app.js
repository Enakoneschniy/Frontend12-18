'use strict';
Array.prototype.max = function () {
    return Math.max(...this);
};
let user = {
    firstName: 'Vasya',
    lastName: 'Pupkin',
    fullName() {
        return `${this.lastName} ${this.firstName}`;
    }
};

function User(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.fullName = () => {
        return `${this.firstName} ${this.lastName}`;
    }
}

const users = [
    new User('firstName1', 'lastName1'),
    new User('firstName2', 'lastName2'),
    new User('firstName3', 'lastName3'),
    new User('firstName4', 'lastName4'),
];

function Basket() {
    //const items = [];
    this.items = [];
    this.add = function (product) {
        this.items.push(product)
    };
    this.remove = function (id) {
        // code
    };
    this.getItems = function () {
        return this.items;
    };
    return Object.freeze(this);
}

const basket = new Basket();
function generateId() {
    return `f${(new Date().getTime()).toString(16)}`;
}

class Product {
    constructor(title, price) {
        this.title = title;
        this.price = price;
        this.id = generateId()
    }
    getPrice() {
        return `$${this.price}`;
    }
}


