//1.	Создайте ФК Animal, которая будет создавать объекты с такими полями:
//type (‘cat’, ‘dog’, ‘snake’ etc)
//age
//метод greet, который будет выводить приветствие, в котором будет содержаться информация о типе и возрасте животного,
//метод eat (выводит информацию о том, что животное может есть)
//isMammal (доступно только через геттер)

function Animal(type, age , isMammal = false) {
    this.type = type;
    this.age = age;
    this.getIsMammal = function() {
        return isMammal;
    };
};

Animal.prototype.greet = function() {
    console.log(`Type of animal ${this.type}, age ${this.age} years`);
};

Animal.prototype.eat = function() {
    console.log(`Animal can eat`);
};

const jinger = new Animal("cat", 1, true);
console.log("1 Task =>  FC Animal");
console.log("isMammal? " + jinger.getIsMammal());
jinger.greet();
jinger.eat();

//2.	Создайте ФК Mammal (наследует Animal), которая будет создавать объекты (по умолчанию свойство isMammal = true, и его невозможно поменять), которые дополнительно будут иметь методы:
//eat - должен выводить информацию, что животное может пить молоко

function Mammal(type, age) {
    Object.assign(this, new Animal(type, age, true));
};

Mammal.prototype = Object.create(Animal.prototype);
Mammal.prototype.constructor = Mammal;
Mammal.prototype.eat = function() {
    console.log(`Animal can drink milk`);
};

const burenka = new Mammal("caw", 5);

console.log("2 Task =>  FC Mammal");
console.log("isMammal? " + burenka.getIsMammal());
burenka.greet();
burenka.eat();

////3.	Создайте ФК Reptile (наследует Animal), которая будет создавать объекты (по умолчанию свойство isMammal = false, и его невозможно поменять), которые дополнительно будут иметь методы:
////eat - должен выводить информацию, что животное не пьет молоко.

function Reptile(type, age) {
    Object.assign(this, new Animal(type, age, false));
};

Reptile.prototype = Object.create(Animal.prototype);
Reptile.prototype.constructor = Reptile;

Reptile.prototype.eat = function() {
    console.log(`The animal can not drink milk`);
};

const nag = new Reptile("snake", 10);
console.log("3 Task =>  FC Reptile");
console.log("isMammal? " + nag.getIsMammal());
nag.greet();
nag.eat();

////4.	Создайте ФК Dog (наследует Mammal), которая будет создавать объекты, которые дополнительно будут иметь методы:
////canRoar - реализация на ваше усмотрение
//
function Dog(age) {
    Object.assign(this, new Mammal("dog", age));
};

Dog.prototype = Object.create(Mammal.prototype);
Dog.prototype.constructor = Dog;

Dog.prototype.canRoar = function() {
    console.log(`Animal can Roar`);
};

const rex = new Dog(7);
console.log("4 Task => FC Dog");
console.log("isMammal? " + rex.getIsMammal());
rex.eat();
rex.greet();
rex.canRoar();
console.log(rex instanceof Dog);
console.log(rex instanceof Mammal);
console.log(rex instanceof Animal);
console.log(rex instanceof Reptile);
console.log(rex instanceof Object);

