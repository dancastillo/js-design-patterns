/**
 * @constructor
 */
const Observer = function() {
  this.observers = [];
};

/**
 * @param {function} fn
 */
Observer.prototype.subscribe = function(fn) {
  this.observers.push(fn);
};

/**
 * @param {function} removeFn
 */
Observer.prototype.unsubscribe = function(removeFn) {
  this.observers = this.observers.filter((fn) => fn !== removeFn);
};

/**
 * @return void
 */
Observer.prototype.notify = function() {
  this.observers.forEach((fn) => fn.update());
};

/**
 * @param {string} type
 * @param {string} name
 * @constructor
 */
const Animal = function(type, name) {
  this.type = type;
  this.name = name;
  this.hungry = true;
  this.ate = false;
};

/**
 * @return void
 */
Animal.prototype.update = function() {
  this.hungry = false;
  this.ate = true;
};

/**
 * @return void
 */
Animal.prototype.status = function() {
  console.log(`${this.name} is ${this.hungry ? 'hungry' : 'not hungry'} he has ${this.ate ? 'eaten' : 'not eaten'}`);
};

/**
 * @return void
 */
function run() {
  const vet = new Observer();
  const scoobyDoo = new Animal('dog', 'Scooby Doo');
  const garfield = new Animal('cat', 'Garfield');

  vet.subscribe(scoobyDoo);
  scoobyDoo.status();
  garfield.status();
  console.log('\n');

  vet.notify();
  scoobyDoo.status();
  garfield.status();
  vet.unsubscribe(scoobyDoo);
}

run();









