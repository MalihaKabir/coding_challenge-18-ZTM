// [11 Questions in total]
// 0
var result = (function (a) {
	return a * a;
})(5.5);
console.log(result); // output is 30.25

// Answer:
// here 5.5 is in a parenthesis. That means it's a function call. So, the function will take the argument: 5.5
// that means, a * a = 5.5 * 5.5 = 30.25.

// 1
const b = [ 1, 2, 3 ];
const f = (a, ...b) => a + b;

console.log(f(1));
// Answer: It's 1. Let me explain. First of all, "...b" is clearly an array according to rest parameter syntax. And initially "b" is a variable though it's value is given as an array, yet here "b" is a global variable.
// Now, b from the function scope:(a + b) can access the global one but as we're already defining b(...b) as a parameter which can be anything, e.g. c or d or x, y, z, anything, this means,
// a + b = a + ...b(the param b, not the variable b) and this is why, the variable 'b' and the parameter '...b' are definitely not the same. If you say -
const b = [ 1, 2, 3 ];
const f = (a, ...k) => a + k;

console.log(f(1)); // the answer will remain the same, 1.
// Now comes to the second part. In the function, '...k' or "...b" parameter means it's an array. And we're giving only the argument of 'a' which is 1(in console.log(f(1))) .
// But where is the argument of 'b' or '...b' parameter? Yes, we didn't pass it. And that means "...b" is an empty array. If you add anything with an empty array, it'll render the number as a string. Which means, 1 + [] = "1". And the log of the function - 'console.log(f(1));' renders 1.

// 2.1:
let f = (...f) => f;
console.log(f(10));
// Answer: as (...f) is an array of f; hence, (...f) = [f] = [10]. Ans is [10].

// 2.2:
f = (...f) => f.reduce((f) => f);
console.log(f(10));
// Answer: well, reduce() method just reduce the array and give the value only in a single output value. In other words, the reduce() method executes a reducer function (that you provide) on each element of the array, resulting in a single output value.
// So, (...f) = [10] => [10].reduce([10] => 10) and answer is 10.

// 2.3:
function ff () {
	return arguments;
}
console.log(ff(10)); // ans: [10]
// Here, function is passing 10 as an argument. And all the arguments are rendered as an array because 'arguments' is an array-like object.
// Output is an argument array - Argument[10].
// Let's explain a little bit more. In function, 'arguments' is an array-like object accessible inside functions that contains the values of the arguments passed to that function. It is an object but it appears like an array.
// Here, 'arguments' is gathering all the elements you're passing and rendering them as an array.
// For instance: if you pass it in the below way:
function ff () {
	return arguments;
}
console.log(ff(10, 12, 13));
// You'll get:
Arguments(3)[(10, 12, 13)] / [ 10, 12, 13 ];
// Note: “Array - like” means that arguments has a length property and properties indexed from zero, but it doesn't have Array's built -in methods like forEach() and map().

// 2.4:
f = (f) => f;
console.log(f(10));
// answer: 10.(simple function)

// 3.
let foo = 10;
bar = 3;
(function () {
	let foo = 2;
	bar = 1;
})();
bar = bar + foo;
console.log(bar);
// Answer: foo = 10 is a global variable and foo = 2 is a local one as it is in a function's scope. But 'bar' is always a global variable. Because in the function's scope, bar isn't redefined, rather it's reassigned.
// That means, when, out of the scope, "bar = bar + foo" is calling, bar = 1 + 10 = 11.
// So, the answer is 11.

// 4.
var x = 5;

(function () {
	console.log(x);
	var x = 10;
	console.log(x);
})();
// Answer: The second one is 10, for sure because here, x is defined and defined as 10. So, the answer of second console-log is 10. But the first one is `undefined`. Which means this will print out `undefined` and 10 rather than 5 and 10 since JavaScript always moves variable declarations(not initializations) to the top of the scope, making the code equivalent to:
var x = 5;
(function () {
	var x; // it's the same, `x` is not defined or `x` is undefined.
	console.log(x);
	x = 10;
	console.log(x);
})();

// To get 5 and 10 as our answers, we have to write this code in the way given below:
var x = 5;
(function () {
	x; // here, `x` is reassigned.
	console.log(x);
	x = 10;
	console.log(x);
})();
// it will render 5 and 10.

// 5.
(function () {
	var a = (b = 3); // or
	// var a = b = 3;
})();

console.log(typeof a); // undefined
console.log(typeof b); // number
// Answer: First, we get a = b and we've to identify the type of a. As 'b' is still not defined, so type of 'b' is undefined.
// But then the value of b is assigned as a number which is 3. That means type of b is a number.

// 6.
function foo1() {
    return {
        bar: 'bar',
    };
}

function foo2() {
    return
    {
        'bar';
    }
}

console.log(foo1()); // ans: {bar: "bar"}.
// Explanation: As it's returning an object in the scope, so it'll return an object in the log as well.
console.log(foo2()); // ans: undefined because of syntax error.
// Let's explain. When a 'continue', 'break', 'return', 'throw', or 'yield' token is encountered and a "LineTerminator" is encountered before the next token, a semicolon is automatically inserted after the 'continue', 'break', 'return', 'throw', or 'yield' token.

// So the code will become like this:
function foo2() {
    return;          // Note the `;` after `return`
    {
		'bar';
    };
}
// The `return` statement terminates and after that there is an object, which is basically unreachable code. Since the `return` statement doesn't return anything explicitly, `undefined` will be returned.
// No error is thrown since the remainder of the code is perfectly valid, even though it doesn’t ever get invoked or do anything (it is simply an unused code block that defines a property 'bar' which is equal to the string "hello").
// This behavior also argues for following the convention of placing an opening curly brace at the end of a line in JavaScript, rather than on the beginning of a new line. As shown here, this becomes more than just a stylistic preference in JavaScript.

// 7.
// Answers:
console.log(0.1 + 0.2); // 0.30000000000000004
console.log(0.1 + 0.2 === 0.3); // false
// "===" is very sensitive and as their identities are different, so the ans is false. "===" means same identity from both sides has to match identically. Numbers in JavaScript are all treated with floating point precision and as such, may not always yield the expected results.
// The example provided above is classic case that demonstrates this issue. Surprisingly, it prints out:
0.30000000000000004 // false
// A typical solution is to compare the absolute difference between two numbers with the special constant Number.EPSILON:
function areTheNumbersAlmostEqual(num1, num2) {
	return Math.abs(num1 - num2) < Number.EPSILON;
}
console.log(areTheNumbersAlmostEqual(0.1 + 0.2, 0.3));
// Note:The Number.EPSILON property represents the difference between 1 and the smallest floating point number greater than 1.

console.log(9007199254740993 === 9007199254740992); // true
// Though it was supposed to false but it's true because while Math.pow(2, 53) is the largest directly representable integer, it's unsafe in that. It's also the first value who's representation is also an approximation of another value.

// In other words, All numbers in JavaScript are internally represented by 64-bit floating point numbers. That means it can exactly represent every integer from 0 up to 9007199254740992 (hex value 0x20000000000000). Any integers greater than that (or less than it's negative counterpart) may need to be rounded to the closest approximate value.
// Observe:
// 9007199254740992 === 9007199254740993
// > true
// However, two numbers that are rounded to sufficiently different approximate values still evaluate to different values when you compare them.For example:
// 9007199254740992 === 9007199254740994
// > false.

// 8.
const a = {},
	b = { c: 'b' },
	c = { b: 'c' };

a[b] = 111;
a[c] = 333;

console.log(a[b]);
// Answer: The output is 333(not 111).
// The reason for this is as follows: When setting an object property, JavaScript will implicitly stringify the parameter value. In this case, since b and c are both objects, they will both be converted to "[object Object]". As a result, a[b] and a[c] are both equivalent to a["[object Object]" and can be used interchangeably. Therefore, setting or referencing a[c] is precisely the same as setting or referencing a[b].
// If you even use it in the below way:
var a = {},
	b = { key: 'b' },
	c = { key: 'c' };

a[b] = 123;
a[c] = 456;

console.log(a[b]);
// you'll get 456 instead of 123. And even if you declare a[b] later, after declaring a[c], you'll get the latest declared value:
const a = {},
	b = { c: 'b' },
	c = { b: 'c' };

a[c] = 333;
a[b] = 111;

console.log(a[b]);
// now it is 111.

// 9.
for (var i = 0; i < 5; i++) {
	setTimeout(function () {
		console.log(i);
	}, i * 1000);
}
// Answer: Output is 5 and five times 5. `setTimeout` is executed asynchronously. After 1000 milliseconds, a task is added to the task queue. Only when all the main lines are executed, the task in the task queue will be executed.
// In other words, "i" is a global variable, the loop will be executed first as js is a single-threaded mechanism, the synchronization code is executed first, the asynchronous code is executed last, and `setTimeout` is asynchronously called.
// Therefore, when the main thread for loop is executed, the value of i is already 5, and the function that was put into the asynchronous queue each time before will print out the value of i in sequence, that is, print 5 times in succession 5.
// `setTimeout` will be executed every time the for loop, but the function inside will not be put into the task queue, so it is put 5 times; less than 1000 milliseconds after 5 executions of the for loop.
// After 1000 milliseconds, all the functions in the task queue are executed, so the output is five.

for (let i = 0; i < 5; i++) {
	setTimeout(function () {
		console.log(i);
	}, i * 1000);
}
// Ans.: If you replace `var` with `let`, the output is 5 and 0, 1, 2, 3, 4.
// Because `let i` is a block variable, each `i` can only survive to the end of the braces and does not assign the `i` value of the following for loop to the `i` in the previous `setTimeout`; `var i` is a local variable, this `i` The life cycle is not limited by the braces of the for loop.
// Using `let` is the best option. In this case, `i` will not be stored as a reference variable in `setTimeout`. It is passed by value - the exact value will be stored.

// In other words, this happens because with each iteration of the loop, let creates a new copy of "i" and initializes to value it was assigned at the beginning of the loop. So basically each setTimeout() gets a copy of the variable "i".


// 10.
// Answers:
console.log(1 < 2 < 2); // true
// Here, bring  if you add parentheses to show how JavaScript is interpreting it, it gets much clearer: (1 < 2 ) < 2
// 1 < 2 = true and we know in javascript, 'true' is coerced into a number.
// Hence, (1 < 2 ) < 2 = true < 2 = 1 < 2 = true.

console.log(3 > 2 > 1); // false
// If you do the same and add parentheses it'll also get clearer in the above way: (3 > 2 )> 1.
// (3 > 2) = true. Yes, three is greater than two. Now, true = 1.
// That means, 3 > 2 > 1 = true > 1 = 1 > 1 = false.
