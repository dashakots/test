"use strict";
// console.log(this);

// function f() {
// 	console.log(this);
// }
// f();

// const obj = {
// 	name: "foo",
// 	age: 30,
// 	greet: function () {
// 		console.log(`Hello ${this.name}`);
// 	},
// };

// obj.greet();

// const objArr = {
// 	name: "John",
// 	age: 30,
// 	greet: () => {
// 		return this;
// 	},
// };

// console.log(objArr.greet());

// const obj = {
// 	name: "John",
// 	age: 30,
// 	greet: function (a = 5) {
// 		console.log(`Hello ${this.name}`);
// 		console.log(a);
// 	},
// };

// obj.greet.bind({ name: "bind", age: 30 })();
// obj.greet.call({ name: "call", age: 30 });
// obj.greet.apply({ name: "apply", age: 30 }, [10]);
