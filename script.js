// complete this js code
function Person(name, age) {
	this.name = name;
  this.age = age;
}

// Method to greet the person
Person.prototype.greet = function() {
  console.log(`Hello, my name is ${this.name}, I am ${this.age} years old.`);
};

function Employee(name, age, jobTitle) {

	Person.call(this, name, age);
  this.jobTitle = jobTitle;
}

// Inherit the Person prototype
Employee.prototype = Object.create(Person.prototype);
Employee.prototype.constructor = Employee;

// Example usage:
const person1 = new Person("Alice", 25);
person1.greet(); // Output: Hello, my name is Alice, I am 25 years old.

const employee1 = new Employee("Bob", 30, "Engineer");
employee1.greet(); // Output: Hello, my name is Bob, I am 30 years old.
console.log(employee1.jobTitle); // Output: Engineer

// Do not change code below this line
window.Person = Person;
window.Employee = Employee;
