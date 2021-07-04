/**
 * @param noiseStrategy
 * @param eatStrategy
 * @constructor
 */
const Animal = function(noiseStrategy, eatStrategy) {
  this.noiseStrategy = noiseStrategy;
  this.eatStrategy = eatStrategy;
};

/**
 * @returns {*}
 */
Animal.prototype.noise = function() {
  return this.noiseStrategy();
};

/**
 * @returns {*}
 */
Animal.prototype.eat = function() {
  return this.eatStrategy();
};

/**
 * @return {string}
 */
const barkStrategy = function() {
  return 'bark';
};

/**
 * @return {string}
 */
const meowStrategy = function() {
  return 'meow';
};

/**
 * @return {string}
 */
const roarStrategy = function() {
  return 'roar';
};

/**
 * @return {string}
 */
const chickenStrategy = function() {
  return 'chicken';
};

/**
 * @return {string}
 */
const fishStrategy = function() {
  return 'fish';
};

const dogFoodStrategy = function() {
  return 'dog food';
};

/**
 * @return void
 */
function run() {
  const dog = new Animal(barkStrategy, chickenStrategy);
  const cat = new Animal(meowStrategy, fishStrategy);
  const bear = new Animal(roarStrategy, fishStrategy);
  const houseDog = new Animal(barkStrategy, dogFoodStrategy);

  console.log(`dog makes ${dog.noise()} sound and eats ${dog.eat()}`);
  console.log(`cat makes ${cat.noise()} sound and eats ${cat.eat()}`);
  console.log(`cat makes ${bear.noise()} sound and eats ${bear.eat()}`);
  console.log(`house dog makes ${houseDog.noise()} sound and eats ${houseDog.eat()}`);
}

run();
