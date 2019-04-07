const tutorial = require('./sum');

console.log(new tutorial.something());
console.log(tutorial.sub(4,5));

function closure(one,two) {
    return function (three) {
        return one + two + three;
    }
}

console.log(closure(1,3)(4));