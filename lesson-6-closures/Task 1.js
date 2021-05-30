////Первый вариант////
function Sum(a) {
    return function (b) {
        return a + b;
    }
}

console.log(Sum(4)(-2));

////Второй вариант////
function currying(fn) {
    return function (a) {
        return function (b) {
            return fn (a, b);
        };
    };
}

function protoSum(a,b) {
    return a + b;
}

var sum = currying(protoSum);

console.log(sum(5)(-1));



