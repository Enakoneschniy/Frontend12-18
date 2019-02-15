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

function existsProduct(item) {
    return item.id === this;
}

class Cart {
    constructor(options) {
        this.smallCartSelector = options.smallCartSelector;
        this.fullCartSelector = options.fullCartSelector;
        this.items = [];
    }
    add(product) {
        const index = this.items.findIndex(existsProduct.bind(product.id));
        if (index !== -1) {
            ++this.items[index].quantity;
        } else {
            this.items.push(Object.assign(product, {
                quantity: 1
            }));
        }
        /*if (!!this.items.find(item => item.id === product.id)) {
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
        }*/
    }
    remove(id) {
        const index = this.items.findIndex(existsProduct.bind(id));
        this.items.splice(index, 1)
    }
    renderSmallCart() {

    }
    renderFullCart() {

    }
}

const cart = new Cart({
    smallCartSelector: '#small-cart',
    fullCartSelector: '#full-cart'
});

function loading(disk, func) {
    console.log(`Loading from ${disk} disk`);
    setTimeout(func, 2000);
}
function injectDisk(disk, func) {
    console.log(`Please inject ${disk} disk`);
    setTimeout(() => {
        func(disk)
    }, 1000);
}

/*injectDisk('d1', function (disk) {
    loading(disk, function () {
        injectDisk('d2', function (disk) {
            loading(disk, function () {
                injectDisk('d3', function (disk) {
                    loading(disk, function () {
                        injectDisk('d4', function (disk) {
                            loading(disk, function () {
                                console.log('Done!');
                            });
                        });
                    });
                });
            });
        });
    });
});*/
function loadingPromise(disk) {
    return new Promise(function (resolve, reject) {
        console.log(`Loading from ${disk} disk`);
        setTimeout(function () {
            if (Math.random() < 0.5) {
                reject('Loading error');
            }
            resolve();
        }, 2000);
    });
}
/*function resolve() {

}
function reject() {

}
class Promise {
    constructor(func){
        func(resolve, reject)
    }
}*/
function injectDiskPromise(disk) {
    return new Promise(function (resolve) {
        console.log(`Please inject ${disk} disk`);
        setTimeout(() => {
            resolve(disk)
        }, 1000);
    });
}

/*injectDiskPromise('d1')
    .then(loadingPromise)
    .then(() => injectDiskPromise('d2'))
    .then(loadingPromise)
    .then(() => injectDiskPromise('d3'))
    .then(loadingPromise)
    .then(() => injectDiskPromise('d4'))
    .then(loadingPromise)
    .then(() => console.log('Done!'))
    .catch(() => {
        console.log('loading error!');
    });*/

/*fetch('google.com',{email, password})
.then(function (response) {
    console.log(response);
})
.catch(function (error) {
    console.log(error);
});*/

async function loadingPromise1(disk) {
     console.log(`Loading from ${disk} disk`);
     if (Math.random() < 0.5) {
         throw 'Error';
     }
     return disk;
}
(async () => {
    try {
        await loadingPromise(await injectDiskPromise('d1'));
        await loadingPromise(await injectDiskPromise('d2'));
        await loadingPromise(await injectDiskPromise('d3'));
        await loadingPromise(await injectDiskPromise('d4'));
    } catch (error) {
        console.log(error);
    }

})();




