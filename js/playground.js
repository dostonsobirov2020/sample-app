let arrHobbies = ['Reading', 'Computer Games', 'Jogging', 'Football'];

arrHobbies.foo = 'foo';

let objHobbies = {
    0: 'Swimming',
    1: 'Reading',
    2: 'Computer Games',
    3: 'Joggin',
    4: 'Football',
    length: 5
    // 'foo': 'Foo',
    // 'bar': 'Bar'
}

let objRange = {
    from: 1,
    to: 5
}


objRange[Symbol.iterator] = function() {

    return {
        current: this.from,
        last: this.to,
        next() {
            if (this.current <= this.last) {
                return { done: false, value: this.current++ };
            } else {
                return { done: true };
            }
        }
    };
};

for (let prop of objRange) {
    console.log(prop);
}

let arrFromObj = Array.from(objHobbies);

// for (let prop in objHobbies) {
//     console.log(prop);
// }

// for (let prop of arrFromObj) {
//     console.log(prop);
// }

console.log(arrFromObj);