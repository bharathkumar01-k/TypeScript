var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
function identity(item) {
    return item;
}
console.log(identity("bharath"));
function getRandomElement(arr) {
    var arrLength = arr.length;
    var randomNumber = Math.floor(Math.random() * arrLength);
    return arr[randomNumber];
}
console.log(getRandomElement([1, 3, 4, 56, 7, 8, 9, 95]));
console.log(getRandomElement(["kdsf", "kdhjfgs", "djfds", "fksgkg", "sdgv"]));
console.log(getRandomElement([
    true,
    false,
    false,
    true,
    false,
    true,
    true,
    true,
]));
var identityFunction = function (item) {
    return item;
};
var merge = function (object1, object2) {
    return __assign(__assign({}, object1), object2);
};
var person1 = {
    name: "Bharath kumar",
    age: 22,
};
var areaPerson1 = {
    area: "Rajapalayam",
};
var bharath = merge(person1, areaPerson1);
console.log("-------------------");
console.log(bharath);
