(() => {
    'use strict';
/*
    const a = [1, 2];
    const b = [1, 2];

    console.log(a === b);*/

    function factorial(num) {
        if (num === 1) {
           return 1;
        }
        return num * factorial(num - 1);
    }
    console.log(factorial(5));

    const user = {
        firstName: 'Vasya',
        lastName: 'Pupkin',
        age: 45
    };
    console.log(user);
    console.log(user.firstName);
    user.firstName = user.firstName + ' Petya';
    console.log(user.firstName);
    user.email = 'petya@gmail.com';
    user.age++;
    console.log(user);
    const friends = [
        {
            firstName: 'Vasya1',
            lastName: 'Pupkin1',
            age: 12
        },
        {
            firstName: 'Vasya2',
            lastName: 'Pupkin2',
            age: 45
        },
        {
            firstName: 'Vasya3',
            lastName: 'Pupkin3',
            age: 18
        }
    ];

    const avgFriendsAge = friends.reduce((sumAges, user) => sumAges + user.age, 0) / friends.length;
    console.log(avgFriendsAge);

    const user1 = {
        'first-name': 'Vasya',
        lastName: 'Pupkin',
        age: 45
    };
    console.log(user1['first-name']);
    user1['first-name'] = 'Petya';
    console.log(user1['first-name']);

    console.log(Object.keys(user1));
    console.log(Object.values(user1));

    const [c, g] = [1, 3];
    let { lastName } = user1;
    console.log(lastName);
    lastName = 'Blanko';
    const firstName = 'Galina';
    const user2 = { lastName, firstName };

    console.log(user2);

    function sumArgs({ a, b }) {
        return {
            sum: a + b,
            mult: a * b
        }
    }
    const [a, b] = [2, 3];

    const { sum, mult } = sumArgs({ a, b });
    console.log(sum, mult);
})();
