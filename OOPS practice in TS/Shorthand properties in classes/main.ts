// shorthand properties // 
// class kw properties dene ki zaroorat nai parhti br br bs constructor k parameter me denge.
// constructor me b this.something nai likhna parhta.
// lkn parameters me access modifiers dene parhenge wrna property me error ajaega.

class Person {
    constructor(
        public name: string,
        public age: string,
        private hobbies: string[]
    ){};

    introduce(): string{
        return `Hello, i am ${this.name}, i am ${this.age} years old and i love ${this.hobbies.join(", ")}.`;
    }
}

class Student extends Person {
    constructor(name: string, age: string, hobbies: string[], public grade: string){
        // child class me super keyword k bd zaroori nai this.something
        super(name, age, hobbies);
    };

    introduce(): string {
        return `${super.introduce()} i am in grade ${this.grade}`
    };
};

const person1: Person = new Person("Ghulam Mustafa", "21", ["Cricket", "Travelling"]);
const student1: Student = new Student("Ahmed", "18", ["Eating","Football", "Gaming"], "10th");

console.log(student1.introduce());