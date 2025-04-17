console.log('==================== Mixins ====================');

function mixin(target, ...sources) {
    Object.assign(target, ...sources);
}

const canEat = {
    eat: function () {
        this.hunger--;
        console.log('Eating...');
    }       
};

const canWalk = {
    walk: function () {
        console.log('Walking...');
    }   
};

const canSwim = {
    swim: function () {
        console.log('Swimming...');
    }
};

function Person() {

}

// Object.assign(Person.prototype, canEat, canWalk, canSwim);
mixin(Person.prototype, canEat, canWalk, canSwim);

// const person = Object.assign({}, canEat, canWalk);

const person = new Person();

console.log(person);

function Goldfish() {

}
// Object.assign(Goldfish.prototype, canEat, canSwim);
mixin(Goldfish.prototype, canEat, canSwim);
const goldfish = new Goldfish();
console.log(goldfish);


