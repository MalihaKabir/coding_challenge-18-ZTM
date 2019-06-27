// 0
var result = (function (a) {
	return a * a;
})(5.5);
console.log(result); //guess the output

// Answer:
// here 5.5 is in a parenthesis. That means it's a function call. So, the function will take the argument: 5.5
// that means, a * a = 5.5 * 5.5 = 30.25.

// 1
const b = [ 1, 2, 3 ];
const f = (a, ...b) => a + b;

console.log(f(1));
// Answer: It's 1. Let me explain. First of all, "...b" is clearly an array according to rest parameter syntax. And initially "b" is a variable though it's value is given as an array, yet here "b" is a global variable.
// Now, b from the function scope:(a + b) can access the global one but as we're already defining b(...b) as an argument which can be anything, e.g. c or d or x, y, z, anything, this means,
// a + b = a + ...b(the param b, not the variable b) and this is why, the variable 'b' and the parameter '...b' are definitely not the same. If you say -
const b = [ 1, 2, 3 ];
const f = (a, ...k) => a + k;

console.log(f(1)); // the answer will remain the same, 1.
// Now comes to the second part. In the function, '...k' or "...b" parameter means it's an array. And we're giving only the value of 'a' which is 1(console.log(f(1))) .
// But where is the value of b ? Yes, we didn't pass it. And that means "...b" is an empty array. If you add anything with an empty array, it'll render the number as a string. Which means, 1 + [] = "1". And the log of the function - 'console.log(f(1));' renders 1.

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
// Answer: The second one is 10, for sure because here, x is defined and defined as 10. So, the answer is 10. And the first one is undefined but unable to describe the real explanation.
// if I do -
// var x = 5;
// (function () {
//     console.log(x);
//     var x = 10;
//     console.log(x);
// })(x);
// it still shows undefined.

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
function foo1 () {
	return {
		bar : 'bar',
	};
}

function foo2 () {
	return;
	{
		'bar';
	}
}


console.log(foo1()); // ans: {bar: "bar"}.
// Explanation: As it's returning an object in the scope, so it'll return an object in the log as well.
console.log(foo2()); // ans: undefined because of syntax error.


// 7.
// Answers:
console.log(0.1 + 0.2); // 0.30000000000000004
console.log(0.1 + 0.2 === 0.3); // false
// "===" is very sensitive and as their identities are different, so the ans is false. "===" means same identity from both sides has to match identically.
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
// Answer:

// 9.
for (var i = 0; i < 5; i++) {
	setTimeout(function () {
		console.log(i);
	}, i * 1000);
}

for (let i = 0; i < 5; i++) {
	setTimeout(function () {
		console.log(i);
	}, i * 1000);
}
// Answer:

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
