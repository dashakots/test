// const arr = [1, 3, 4, 563, 54, 547, 5444, 86, 6, 5];

// let max = arr[0];
// let min = arr[0];

// for (let i = 1; i < arr.length; i++) {
// 	if (arr[i] > max) {
// 		max = arr[i];
// 	}
// 	if (arr[i] < min) {
// 		min = arr[i];
// 	}
// }
// console.log(max);
// console.log(min);

// Коллбэк

// function hello(name) {
// 	console.log(`hello ${name}`);
// }

// function input(callback) {
// 	const name = prompt("Enter your name");
// 	callback(name);
// }

// input(hello);

// function AtoB(callback) {
// 	const transport = "bus";
// 	const friend = "john doe";
// 	callback(transport, friend);
// }

// function BtoC(transport, friend) {
// 	console.log(`we are traveling on ${transport} with ${friend}`);
// }

// AtoB(BtoC);

// Замыкание

// const createPlayer = initialScore => {
// 	let score = initialScore; //приватная переменная
// 	return {
// 		gerScore: function () {
// 			return score;
// 		},
// 		addScore: function (amount) {
// 			score += amount;
// 		},
// 	};
// };

// const player1 = createPlayer(100);
// console.log(player1.gerScore()); // 100
// player1.addScore(50);
// console.log(player1.gerScore()); // 150

// методы работы с массивами
// метод some

// const arr = [31, 54, 8, 73, 4, 74, 38, 54, 83, 37];
// const resultSome = arr.some(el => el % 3 === 0);
// console.log(resultSome);

// const resultSome2 = arr.some(function (el) {
// 	return el % 3 === 0;
// });

// let res = false;
// for (let i = 0; i < arr.length; i++) {
// 	if (f(arr[i]) === true) {
// 		res = true;
// 		break;
// 	}
// }

// function f(element) {
// 	if (element % 3 === 0) {
// 		return true;
// 	} else {
// 		return false;
// 	}
// }
// console.log(res);

// const arrowF = el => true;

// МЕТОД EVERY

// const resultEvery = arr.every(el => el > 0);
// console.log(resultEvery);

// МЕТОД FILTER

// const resultFilter = arr.filter(el => el % 3 === 0);
// console.log(resultFilter);

// МЕТОД SORT

// const resultSort = arr.sort((curr, next) => curr - next); // по возрастанию
// console.log(resultSort);
// const resultSort2 = arr.sort((curr, next) => next - curr); // поубыванию
// console.log(resultSort2);
// const resultSort3 = arr.toSorted((curr, next) => next - curr); // поубыванию
// console.log(resultSort3);
// console.log(arr);

// МЕТОД FLAT

// const toFlatArr = [[1, 3, 4], [5, 6], 7];
// const flatArr = toFlatArr.flat();
// console.log(flatArr);

// МЕТОД FOREACH

// const arr = [31, 54, 8, 73, 4, 74, 38, 54, 83, 37];
// const arr = [31, 54, 8];
// arr.forEach((el, i, arr) => {
// 	console.log(el);
// 	console.log(i);
// 	console.log(arr);
// });

// arr.map((el, i, arr) => {
// 	console.log(el);
// 	console.log(i);
// 	console.log(arr);
// });

// arr.forEach(el => {
// 	console.log(el * 2);
// });

// МЕТОД MAP

// const resultMap = arr.map(el => el * 2);
// console.log(resultMap);

// МЕТОД FLATMAP
// const flatMapArr = [[1], [5], [3], [6]];

// const resultFlatMap = flatMapArr.flatMap(el => el * 8);
// console.log(resultFlatMap);

// МЕТОД FIND

const arr = [31, 54, 8, 73, 4, 74, 38, 54, 83, 37];
// const resultFind = arr.find(el => el === 8);
// console.log(resultFind);

// МЕТОД FINDINDEX

// const resultFindIndex = arr.findIndex(el => el === 8);
// console.log(resultFindIndex);

// МЕТОД REDUCE

const sum = arr.reduce((acc, el) => acc + el, 0);
console.log(sum);
