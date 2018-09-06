function Animal(type) {
	this.type = type;
}

Animal.prototype.setName = function(name) {
	this.name = name;
}


var cat = new Animal("cat");
cat.setName("Hong");

console.log(cat);


class Animal2 {
	constructor(type) {
		this.type = type;
	}

	setName(name) {
		this.name = name;
	}
}

let dog = new Animal2("dog");
dog.setName("Gi Lim");
console.log(dog);
