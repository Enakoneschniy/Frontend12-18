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
let $title;
let $price;
let $id;

class Product {
    constructor(title, price) {
        $title = title;
        $price = price;
        $id = generateId()
    }
    setPrice(value) {
        $price = !isNaN(value) ? value : $price;
        return this;
    }
    static getPrice() {
        return $price;
    }
    getFormattedPrice() {
        return `$${$price}`;
    }
    get formattedPrice() {
        return `GET: $${$price}`;
    }
    set formattedPrice(value) {
        if(!isNaN(value)) {
            $price = value;
        } else {
            const tmpValue = parseFloat(value.replace('$',''));
            $price = !isNaN(tmpValue) ? tmpValue : $price;
        }
    }
}
const product = new Product('iPhone XS Max', 1500);
console.log(product.getFormattedPrice());
product.setPrice(1000);
console.log(product.getFormattedPrice());
product.setPrice('a,nsdgfhj.k');
console.log(product.getFormattedPrice());
console.log(product.setPrice(56756).formattedPrice);
product.formattedPrice = '$787878';
console.log(product.formattedPrice);





