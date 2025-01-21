// let str = "SOME random stRinG";

// const arr = str.split(" ");
// console.log(arr);

// arr[1] = arr[1].toUpperCase();
// console.log(arr);

// str = arr.join(" ");
// console.log(str);

// Функции

// function sayHi(username) {
// 	console.log(`hello, ${username} !`);
// }

// sayHi("darya");
// sayHi("dfkgjdfg");
// const login = prompt();
// sayHi(login);

// function sum(a, b) {
// 	console.log("a+b=", a + b);
// }

// sum(10, 20);
// sum(40, 260);
// sum(5, 48);

// function pr(a, b, c) {
// 	console.log("a+b*c=", a + b * c);
// }
// pr(10, 20, 3);
// pr(2, 2, 2);
// pr(10, 20, 3);
// pr(20, 10, 3);
// pr(3, 10, 20);

// function f(a, ...rest) {
// 	console.log(a);
// 	console.log(arguments);
// 	console.log(rest);
// }

// f(1, 2, 3, 4, 54, 5, 6, 67, 7);

// function f(...rest) {
// 	console.log(rest);
// 	console.log(...rest);
// }

// f(1, 2, 3, 4, 54, 5, 6, 67, 7);

// console.log(...[9, 8, 7, 6, 5, 4, 3, 2, 1, 0]);

// const arr = [1, 2, 3];
// const arr2 = [4, 5, 6];
// // arr.push(arr2);
// // console.log(arr);
// arr.push(...arr2);
// console.log(arr);

// Функция declaration

// function sum(a, b) {
// 	return a + b;
// }
// console.log(sum(1, 2));

// Функция Expression

// const sumVar = sum(4, 5);
// console.log(sumVar);

// const sum = function (a, b = 0) {
// 	return a + b;
// };

// console.log(sum(2));
// console.log(sum(2, 10));

// Стрелочные функции

// const sum = (a, b = 0) => {
// 	c = a + b;
// 	return c;
// };
// console.log(sum(2));
// console.log(sum(2, 10));

// const sum1 = (a, b = 0) => a + b;

// console.log(sum1(2));
// console.log(sum1(2, 10));

// Анонимная функция

// function () {
// console.log('Hello world!');
// }

// Самовызывающая функция

// (function () {
// 	console.log("Hello world!");
// })();

let str = "qwerty";
let arr = str.split("");
function strUp(str) {
	let arr = str.split("");

	for (let i = 0; i < arr.length; i++) {
		if (i % 2 === 0) {
			arr[i] = arr[i].toLowerCase();
		} else {
			arr[i] = arr[i].toUpperCase();
		}
	}
	return arr.join("");
}
str = strUp(str);
console.log(str);

const a = 5;
console.log("document", a);

// if (true) {
// 	const a = 6;
// 	const b = 6;
// 	console.log("if", a);
// 	console.log("if", b);
// }

// for (let i = 0; i < 1; i++) console.log("for ", a);
// const c = 7;
// console.log("for ", c);

// if (true) {
// 	const a = 6;
// 	const b = 6;
// 	console.log("if", a);
// 	console.log("if", b);
// 	console.log("if", c);
// }

// function f(fa) {
// 	console.log("function", a);
// 	for (let i = 0; i < 1; i++) console.log("for ", a);
// 	{
// 		const c = 7;
// 		console.log("for ", c);
// 		if (true) {
// 			// const a = 6;
// 			const b = 6;
// 			console.log("if", a);
// 			console.log("if", b);
// 			console.log("if", c);
// 		}
// 	}
// }

// f(8);

// const people = [
// 	{ name: "John", age: 20 },
// 	{ name: "Nick", age: 11 },
// 	{ name: "Mark", age: 48 },
// 	{ name: "Dasha", age: 29 },
// 	{ name: "Roma", age: 15 },
// 	{ name: "Roma", age: 10 },
// ];

// function isAdult(arr) {
// 	const names = [];
// 	for (const element of arr) {
// 		if (element.age >= 18) {
// 			names.push(element.name);
// 		}
// 	}
// 	return names;
// }
// console.log(isAdult(people));

let d = 13564351;

function num1(params) {}
