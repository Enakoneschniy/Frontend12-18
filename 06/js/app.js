(() => {
    'use strict';
    foo();
    function foo(x, y = 6) {
        return x + 5 + y;
    }
    const res = foo(3, 0);
    console.log(res);

    const fuc = function () {
        return 2 + 5;
    };
    console.log(foo(fuc(), 4));

    const bar = (a, b) => a + b;
    console.log(bar(3, 7));

    const inc = (num) => num + 1;
    console.log(inc(3));
    console.log(inc(10));

    const random = () => Math.floor(Math.random() * 100);
    console.log(random());

    function forEach(array, callback) {
        for (let item of array)  {
            callback(item);
        }
    }

    forEach([1, 2, 3, 4, 5], function (item) {
        console.log(item);
    });

    [1, 2, 3, 4, 5].forEach(item => console.log(item));

    console.log([1, 2, 3, 4, 5].reduce((acc, item) => acc += item, 0));
    let array = [1, 2, 3, 4, 5].map(item => Math.pow(item, 3));
    console.log(array);

    function isEven(item) {
        return item % 2 === 0;
    }

    array = array.filter(isEven);
    console.log(array);

    function test(a, b) {
        console.log(this, a, b);
    }
    const testContext = test.bind('Hello');
    testContext(1, 3);
    test.apply('Apply', [12, 1]);
    test.call('Call', 12, 1);
    function asyncRandom(callback) {
        console.log('asyncRandom', callback);
        callback(Math.floor(Math.random() * 100), 45);
    }
    function debounce(method, seconds) {
        console.log('Debounce 1');
        return function(...args) {
            console.log('newFunc', args);
            setTimeout(function () {
                console.log('setTimeout', args, method, seconds);
                method(...args);
            }, seconds * 1000);
        }
    }

    const newFunc = debounce(asyncRandom, 5);

    newFunc(function (res) {
        console.log('RESULT:', res);
    });
    console.log('jsdfhkjshfkjsdhf');
})();








