class Animal {
  #name;

  constructor(name, age) {
    this.#name = name;
    this.age = age; 
  }

  // Returns the animal's name
  getName() {
    return this.#name;
  }

  // Returns a general animal sound
  makeSound() {
    return "Some generic animal sound";
  }

  // Returns a description of the animal
  describe() {
    return `${this.getName()} is ${this.age} years old.`;
  }

  // Checks if the animal is a senior
  isSenior() {
    return this.age > 5;
  }

  // Returns complete animal details
  getDetails() {
    return `${this.getName()} - ${this.age} years old`;
  }
}


class Dog extends Animal {
  constructor(name, age, breed) {
    super(name, age); 
    this.breed = breed;
  }

  makeSound() {
    return `${this.getName()} says: Woof!`;
  }

  // Returns information about the dog's breed
  getBreed() {
    return `${this.getName()} is a ${this.breed}.`;
  }
}

class Cat extends Animal {
  constructor(name, age, indoor) {
    super(name, age);
    this.indoor = indoor;
  }

  makeSound() {
    return `${this.getName()} says: Meow!`;
  }

  // Returns the cat's living type
  getCatType() {
    if (this.indoor) {
      return `${this.getName()} is an indoor cat.`;
    } else {
      return `${this.getName()} is an outdoor cat.`; 
    }
  }
}

class Shelter {
  #animals;

  constructor(shelterName) {
    this.shelterName = shelterName;
    this.#animals = [];
  }

  addAnimal(animal) {
    this.#animals.push(animal);
  }

  countAnimals() {
    return this.#animals.length;
  }

  listAnimals() {
    return this.#animals;
  }
}

const shelterName = "Pet House";
let totalSounds = 0;
let checkedCount = 0;

const petFood = { type: "kibble", amount: 2 };
const vetInfo = { name: "Dr. Felices", phone: "0946-155-6428" };

const dog1 = new Dog("Blacky", 3, "Labrador");
const dog2 = new Dog("Whity", 7, "Beagle");
const cat1 = new Cat("Jaguar", 2, true);
const shelter = new Shelter(shelterName);

const animalList = [dog1, dog2, cat1];
const foodTypes = ["kibble", "wet food", "treats"];
const shelterTasks = ["feed", "clean", "walk"];

console.log(`Today's tasks: ${shelterTasks.join(", ")}`);


for (const animal of animalList) {
  shelter.addAnimal(animal);
}

if (shelter.countAnimals() > 0) {
  console.log(`${shelterName} has animals ready for adoption!`);
} else {
  console.log(`${shelterName} is empty right now.`);
}

if (dog1.isSenior()) {
  console.log(`${dog1.getName()} is a senior dog.`);
} else {
  console.log(`${dog1.getName()} is still young.`);
}

if (cat1.indoor) {
  console.log(`${cat1.getName()} is an indoor cat.`);
} else {
  console.log(`${cat1.getName()} likes to go outside.`);
}

console.log(cat1.getCatType());

console.log(dog1.getBreed());
console.log(dog2.getBreed());

for (let i = 0; i < foodTypes.length; i++) {
  console.log(`Food option ${i + 1}: ${foodTypes[i]}`);
}


let index = 0;
while (index < animalList.length) {
  const animal = animalList[index];
  console.log(animal.makeSound());
  totalSounds++;
  index++;
}


console.log(`--- ${shelterName} Summary ---`);
console.log(`Total animals: ${shelter.countAnimals()}`);
console.log(`Total sounds made: ${totalSounds}`);
console.log(`Vet on call: ${vetInfo.name}, phone: ${vetInfo.phone}`);
console.log(`Food we have: ${petFood.amount} bags of ${petFood.type}`);

for (const animal of shelter.listAnimals()) {
  console.log(animal.describe());
  console.log(animal.getDetails());
  checkedCount++;
}
console.log(`Checked ${checkedCount} animals in total.`);