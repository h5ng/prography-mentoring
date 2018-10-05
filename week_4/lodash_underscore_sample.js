// lodash
const ld = require('lodash');

// underscore
const us = require('underscore');

const users = [
    {'user': 'barney', 'age': 36, 'active': true},
    {'user': 'fred', 'age': 40, 'active': false},
    {'user': 'pebbles', 'age': 1, 'active': true}
];
const object = {'a': 1, 'b': '2', 'c': 3};

/////////////////////////
// lodash              //
// https://lodash.com  //
/////////////////////////

// find
let result = ld.find(users, function (o) {
    return o.age < 40;
});
console.log(result);

result = ld.find(users, {'age': 1, 'active': true});
console.log(result);

// pick
result = ld.pick(object, ['a', 'c']);
console.log(result);


//////////////////////////////
// underscore               //
// https://underscorejs.org //
//////////////////////////////

// where
result = us.where(users, {'age': 36});
console.log(result);

// allKeys
result = us.allKeys(object);
console.log(result);

// range
const arr = us.range(8);
console.log(arr);
