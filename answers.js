// 0
var result = (function (a) {
    return a * a;
}(5.5));
console.log(result); //guess the output

// Answer:
// here 5.5 is in a parenthesis. That means it's a function call. So, 5.5 * 5.5 = 30.25.

// 1
// const b = [1, 2, 3];
// const f = (a, ...b) => a + b;

// console.log(f(1));
// Answer:

// 2.1:
let f = (...f) => f;
console.log(f(10));
// Answer: as (...f) is an array of f; hence, (...f) = [f] = [10]. Ans is [10].

// 2.2
f = (...f) => f.reduce(f => f);
console.log(f(10));
// Answer: well, reduce just reduce the array and give the value only.
// So, (...f) = [10] => [10].reduce([10] => 10) and answer is 10.

// 2.3
function ff() {
    return arguments;
}
console.log(ff(10));
// Answer:

// 2.4
f = f => f;
console.log(f(10));
// answer: 10.

// 3.
let foo = 10;
bar = 3;
(function () {
    let foo = 2;
    bar = 1;
}())
bar = bar + foo;
console.log(bar);
// Answer: foo = 10 is a global variable and foo = 2 is a local one as it is in a (function's) scope. But bar is always a global variable. Because in the func's scope, bar isn't redefined, rather it's reassigned. That means, when out of the scope, "bar = bar + foo" is calling, that means bar = 1 + 10 = 11. So, the answer is 11.

// 4.
var x = 5;

(function () {
    console.log(x);
    var x = 10;
    console.log(x);
})();
// Answer: The second one is 10, for sure, but still not getting why the first answer is undefined instead of 5.

// 5.
(function () {
    var a = b = 3;
})();   

console.log(typeof a);
console.log(typeof b);
// Answer: First, we get a = b and we've to identify the type of a. As 'b' is still not defined, so type of b is undefined. But then b's value is assigned as a number which is 3. That means type of b is a number.