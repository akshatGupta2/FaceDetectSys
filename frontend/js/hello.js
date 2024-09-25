// Creating Object through object literal
let person = {
    name: "Akshat Gupta",
    class: "Class XII",
    section: 'B',
    age: 30,
    greet: function () {
        console.log("Hello, World!");
    }
}

// 
console.log(person);
person['greet']();

// using new object constructor
let car = new Object();
car.name = "Maruti Suzuki 800";
car.wheelCount = 4;
car.whroom = () => console.log('whroom whroom');

car.whroom();

// using Object.create()
let animal = {
    type: "Mammal"
}
let dog = Object.create(animal)
console.log(dog.type);

//  using a constructor function
function Person (firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
} 
let p1 = new Person("Akshat", "Gupta", 21);
console.log(p1);

//  Using Es6 Classes
class Danda {
    constructor(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }
    greet() {
        console.log('Hello Ji');
    }
}
let d = new Danda("sdadasdds", "dfsdfsdfsd", 45);
console.log(d);
