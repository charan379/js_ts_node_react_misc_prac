function Animal(name) {
  this.name = name;
}

Animal.prototype.speak = function() {
  return this.name + " makes a noise.";
};

function Dog(name) {
  Animal.call(this, name); // Call parent constructor
}

// Inherit from Animal
Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog;

// Add Dog-specific method
Dog.prototype.bark = function() {
  return this.name + " barks!";
};

const d = new Dog("Rex");
console.log(d.speak()); // Rex makes a noise.
console.log(d.bark());  // Rex barks!