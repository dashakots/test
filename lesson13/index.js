"use strict";

// const userName = "Nidfghdfhgf";

// switch (userName) {
// 	case "John":
// 		console.log("Welcome John");
// 		break;
// 	case "Nick":
// 		console.log("Welcome Nick");
// 		break;
// 	case "Jack":
// 		console.log("Welcome Jack");
// 		break;
// 	case "Mike":
// 		console.log("Welcome Mike");
// 		break;
// 	default:
// 		console.log("Unknown user");
// 		break;
// }

// i = i + 1
// i += 1
// i++

// i = i - 1
// i -= 1
// i--

// let i = 0;

// while (true) {
// 	alert(i);
// 	i++;
// 	if (i === 5) {
// 		break;
// 	}
// }

// do {
// 	alert(i);
// 	i++;
// } while (i < 5);

// for (let i = 0; i < 10; i++) {
// 	if (i % 2 === 0) {
// 		console.log(i);
// 	}
// }

// const arr = [351, 154, 284, 36, 874, 43, 685];

// for (let i = 0; i < arr.length; i++) {
// 	for (let j = 0; j < arr.length; j++) {
// 		if (arr[j] > arr[j + 1]) {
// 			const temp = arr[j];
// 			arr[j] = arr[j + 1];
// 			arr[j + 1] = temp;
// 		}
// 	}
// }
// console.log(arr);

// for (let i = 0; i < arr.length; i++) {
// 	// if (arr[i] % 2 === 0 && i % 2 !== 0) {
// 	// 	console.log(arr[i]);
// 	// }
// 	console.log("*2", arr[i] * 2);
// 	console.log("*3", arr[i] * 3);
// 	if (arr[i] % 6 === 0) {
// 		console.log("continue");
// 		continue;
// 	}
// 	console.log("*4", arr[i] * 4);
// 	console.log("--------");
// }

// for (const i in arr) {
// 	console.log(i, arr[i]);
// }

// for (const el of arr) {
// 	console.log(el);
// }

// const obj = {
// 	name: "Dasha",
// };
// obj.age = 100;
// obj.name = "dgfgfg";

// console.log(obj);

// const cat = {
// 	name: "cat",
// 	age: 8,
// 	kittens: ["barsik"],
// };

// const cat2 = Object.create(cat);
// cat2.kittens = ["barsik"];
// console.log(cat2);
// console.log(cat2.kittens);

// const keys = Object.keys(cat);
// console.log(keys);

// const values = Object.values(cat);
// console.log(values);

// const entries = Object.entries(cat);
// console.log(entries);

// const person = {
// 	name: "John",
// 	age: 30,
// 	gender: "male",
// };

// const person2 = person;

// // console.log("person", person);
// // console.log("person2", person2);

// person.age = 33;
// person2.name = "Jane Doe";
// // console.log("person", person);
// // console.log("person2", person2);

// const person3 = Object.assign({}, person);
// person3.name = "fkjdghdfkjg";
// // person.name = "yanush";
// console.log("person", person);
// console.log("person2", person2);
// console.log("person3", person3);

// const person4 = Object.freeze(person);
// person4.name = "lol";
// person4.lol = true;

// console.log("person", person);
// console.log("person4", person4);

// const person5 = Object.seal(person);
// person5.name = "lol";
// person5.lol = true;

// console.log("person", person);
// console.log("person5", person5);

const person6 = {
	name: "John",
	age: 30,
	gender: "male",
};

console.log(person6.name);
console.log(person6["name"]);

for (const key in person6) {
	console.log(key, person6[key]);
}
