// class Person {
// 	constructor(name, age) {
// 		this.name = name;
// 		this.name = age;
// 	}
// 	greet() {
// 		console.log(`Hello, my name is ${this.name}`);
// 		console.log(this.age);
// 	}

// 	static getClassName() {
// 		return "Person";
// 	}
// }

// const alice = new Person("Alice");
// alice.greet();
// console.log(Person.getClassName());

class Animal {
	constructor(name) {
		this.name = name;
	}
	greet() {
		console.log(` my name is ${this.name}`);
	}
}

class Dog extends Animal {
	constructor(name, type) {
		super(name);
		this.type = type;
	}
	bark() {
		console.log(`${this.type} ${this.name} barks!`);
	}
}

const myDog = new Dog("Buddy", "taksa");
myDog.greet();
myDog.bark();

console.log(myDog);
