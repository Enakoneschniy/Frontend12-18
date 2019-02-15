'use strict';
function generateId() {
    return `f${(new Date().getTime()).toString(16)}`;
}
class Product {
    constructor(title, price) {
        this.title = title;
        this.price = price;
        this.id = generateId();
        this.img = 'https://placeimg.com/278/180/any'
    }
    get formattedPrice() {
        return `$${this.price}`;
    }
    get renderedProduct() {
        return `
        <div class="col-sm">
            <div class="card" style="width: 18rem;">
              <img src="${this.img}" class="card-img-top" alt="${this.title}">
              <div class="card-body">
                <h5 class="card-title">${this.title}</h5>
                <p class="card-text"><strong>${this.formattedPrice}</strong></p>
                <button class="btn btn-primary">Buy</button>
              </div>
            </div>
        </div>`;
    }
}

class Catalog {
    constructor(selector) {
        this.selector = selector;
        this.products = [];
    }
    add(product) {
        this.products.push(product);
        this.render()
    }
    get count() {
        return this.products.length
    }
    render() {
        const container = document.querySelector(this.selector);
        let productsHtml = this.products.reduce((html, product) => html + product.renderedProduct, '');
        container.innerHTML = `
            <div class="container">
              <div class="row">
                ${productsHtml}
              </div>
            </div>
        `;
    }
}
const catalog = new Catalog('#app');

class Cart {
    constructor(options) {
        this.items = [];
    }
    add(product) {
        if (!!this.items.find(item => item.id === product.id)) {
            this.items = this.items.map(item => {
                if (item.id === product.id) {
                    ++item.quantity;
                }
                return item;
            })
        } else {
            this.items.push(Object.assign(product, {
                quantity: 1
            }));
        }
    }
    remove(productId) {

    }
}



