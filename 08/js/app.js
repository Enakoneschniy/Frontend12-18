(() => {
    function getMaxOfArray(array) {
        return Math.max(...array);
    }

    function max(matrix) {
        return getMaxOfArray(matrix.map(item => item.length));
    }

    function maxObj(obj) {
        return max(Object.values(obj));
    }

    const matrix = [
        [1, 2, 3, 4], // 4
        [1, 4], // 2
        [1, 2, 3, 4, 6, 75], // 6
        [1], // 1
        [1, 2, 3, 4, 4] // 5
    ];
    console.log(matrix.map(item => item.length));
    const lengthArray = matrix.map(item => item.length);

    Math.max(...lengthArray);
    // console.log(max(matrix)); // 6
    const matrixObj = {
        "Earned Social Media": [5.09, 1.389, 4],
        test2: [1, 4],
        test3: [1, 2, 3, 4, 6, 75],
        test4: [1],
        test5: [1, 2, 3, 4, 4]
    };
    maxObj(matrixObj);
    const data = [
        { chanel: "Earned Social Media", ratio: 5.09 },
        { chanel: "Print", ratio: 0 },
        { chanel: "Earned Social Media", ratio: 1.389 },
        { chanel: "Affiliates", ratio: 1.967 },
        { chanel: "Direct", ratio: 7.556 },
        { chanel: "Affiliates", ratio: 1.662 },
        { chanel: "Public Relation", ratio: 0 },
        { chanel: "Launcher", ratio: 0.465 },
        { chanel: "Email", ratio: 0.571 },
        { chanel: "Natural Search", ratio: 1.029 },
        { chanel: "Paid Video Channels", ratio: 0 },
        { chanel: "Launcher", ratio: 0 },
        { chanel: "Affiliates", ratio: 0.485 },
        { chanel: "Internal Display", ratio: 1.422 },
        { chanel: "Natural Search", ratio: 0.78 },
        { chanel: "TV", ratio: 0 },
        { chanel: "Influencers", ratio: 0 },
        { chanel: "Paid Video Channels", ratio: 0.286 },
        { chanel: "Earned Social Media", ratio: 4 },
        { chanel: "External Display", ratio: 0 },
        { chanel: "Consoles", ratio: 0 },
        { chanel: "Referring Domains", ratio: 1.574 },
        { chanel: "TV", ratio: 0.217 },
        { chanel: "Public Relation", ratio: 0 },
        { chanel: "Internal Display", ratio: 0.585 },
        { chanel: "Paid Social Media", ratio: 6.2 },
        { chanel: "Owned Social Media", ratio: 1 },
        { chanel: "Launcher", ratio: 0.111 },
        { chanel: "Direct", ratio: 4.138 },
        { chanel: "Paid Social Media", ratio: 0.615 },
        { chanel: "Earned Social Media", ratio: 0.615 },
    ];
    const res = {};

    data.forEach(item => {
        if (res[item.chanel] === undefined) {
            res[item.chanel] = [];
        }
        res[item.chanel].push(item.ratio);
    });

    function groupBy(array, property) {
        const res = {};
        array.forEach(item => {
            //if (res[item[property]] === undefined) {
            if (!res.hasOwnProperty(item[property])) {
                res[item[property]] = [];
            }
            res[item[property]].push(item);
        });
        return res;
    }
    const res1 = groupBy(data, 'chanel');
    const res2 = groupBy(data, 'ratio');
    console.log(res1);
    console.log(res2);

    let user = {
        firstName: 'Vasya',
        lastName: 'Pupkin',
        /*fullName() {
            return `${this.firstName} ${this.lastName}`;
        }*/
    };
    user.fullName = function() {
        return `${this.firstName} ${this.lastName}`;
    };
    console.log(user.fullName());
    user.firstName = 'Petya';
    const testUser = user;
    user = '';
    console.log(testUser.fullName())
})();
