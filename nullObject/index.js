/**
 * @param type
 * @param name
 */
const Animal = function(type, name) {
  this.type = type;
  this.name = name;
};

/**
 * @constructor
 */
const NullAnimal = function() {
  this.type = 'unknown animal';
  this.name = 'Animal Not Found';
};

const getAnimalByName = function(name) {
  let animal = allAnimals.find((animal) => animal.name === name);

  if (!animal) {
    animal = new NullAnimal();
  }

  return animal.type;
};

let allAnimals = [];

function run() {
  const scoobyDoo = new Animal('dog', 'Scooby Doo');
  const nemo = new Animal('fish', 'Nemo');
  const simba = new Animal('lion', 'Simba');

  allAnimals = [scoobyDoo, nemo];

  console.log(`Scooby doo is a ${getAnimalByName(scoobyDoo.name)}.`);
  console.log(`Nemo is a ${getAnimalByName(nemo.name)}.`);
  console.log(`Simba is a ${getAnimalByName(simba.name)}.`);
}

run();
