// getter vs setter
// getter me parameter nai hota or setter me 1 parameter hota he just.

class Person {
    private _age: number;
    constructor(
        public name: string,
        private hobbies: string[]
    ){};

    // ye properties hen getter and setter
    public set age(age: number){
        if(age>150 || age<0){
            throw new Error("Age is not valid");    
        }
        this._age = age;
    };

    public get age(): number{
        return this._age
    }

    introduce(): string{
        return `Hello, i am ${this.name}, i am ${this._age} years old and i love ${this.hobbies.join(", ")}.`;
    };
};

const person1: Person = new Person("Ghulam Mustafa", ["Cricket", "Travelling"]);

person1.age = 16;

console.log(person1);
console.log(person1.introduce());

console.log(person1.age);
