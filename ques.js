0;
var result = (function (a) {
	return a * a;
})(5.5);
console.log(result); //guess the output

1;
const b = [ 1, 2, 3 ];
const f = (a, ...b) => a + b;

console.log(f(1));

2;
let f = (...f) => f;
console.log(f(10));

f = (...f) => f.reduce((f) => f);
console.log(f(10));

function ff () {
	return arguments;
}
console.log(ff(10));

f = (f) => f;
console.log(f(10));

3;
var foo = 10;
bar = 3;
(function () {
	var foo = 2;
	bar = 1;
})();
bar = bar + foo;
console.log(bar);

4;
var x = 5;

(function () {
	console.log(x);
	var x = 10;
	console.log(x);
})();

5(function () {
	var a = (b = 3);
})();

console.log(typeof a);
console.log(typeof b);

6;
function foo1 () {
	return {
		bar : 'bar',
	};
}

function foo2 () {
	return;
	{
		('bar');
	}
}

console.log(foo1());
console.log(foo2());

7;
console.log(0.1 + 0.2);
console.log(0.1 + 0.2 === 0.3);
console.log(9007199254740993 === 9007199254740992);

8;
const a = {},
	b = { c: 'b' },
	c = { b: 'c' };

a[b] = 111;
a[c] = 333;

console.log(a[b]);

9;
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

10;
console.log(1 < 2 < 2);
console.log(3 > 2 > 1);
