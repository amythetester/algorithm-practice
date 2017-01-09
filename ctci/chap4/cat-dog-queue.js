'use strict';

let count = 0;

function Shelter(shelterName) {
  this.shelterName = shelterName,
  this.cats = [],
  this.dogs = [];
}

function Cat(name) {
  this.id = count,
  this.name = name;
}

function Dog(name) {
  this.id = count,
  this.name = name;
}

let paws = new Shelter();

Shelter.prototype.enqueue = function(type, name) {
  if (type !== 'cat' && type !== 'dog') throw new Error('Must enqueue a cat or dog.');
  count = count+=1;
  if (type === 'cat') {
    let tempCat = new Cat(name);
    this.cats.push(tempCat);
  }

  if (type === 'dog') {
    let tempDog = new Dog(name);
    this.dogs.push(tempDog);
  }
};

Shelter.prototype.dequeueAny = function() {
  return (this.cats[0].id < this.dogs[0].id) ? this.cats.shift() : this.dogs.shift();
};

Shelter.prototype.dequeueCat = function() {
  if (this.cats.length < 1) throw new Error('No cats left in the shelter.');
  return this.cats.shift();
};

Shelter.prototype.dequeueDog = function() {
  if (this.dogs.length < 1) throw new Error('No dogs left in the shelter.');
  return this.dogs.shift();
};

paws.enqueue('dog', 'Rover');
paws.enqueue('cat', 'Thomas');
console.log(paws);
paws.enqueue('dog', 'Spot');
paws.enqueue('dog', 'Rex');
console.log(paws);
paws.dequeueAny();
console.log(paws);
