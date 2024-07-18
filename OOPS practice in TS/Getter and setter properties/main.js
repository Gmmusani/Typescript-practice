// getter vs setter
// getter me parameter nai hota or setter me 1 parameter hota he just.
var Person = /** @class */ (function () {
    function Person(name, hobbies) {
        this.name = name;
        this.hobbies = hobbies;
    }
    ;
    Object.defineProperty(Person.prototype, "age", {
        get: function () {
            return this._age;
        },
        // ye properties hen getter and setter
        set: function (age) {
            if (age > 150 || age < 0) {
                throw new Error("Age is not valid");
            }
            this._age = age;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Person.prototype.introduce = function () {
        return "Hello, i am ".concat(this.name, ", i am ").concat(this._age, " years old and i love ").concat(this.hobbies.join(", "), ".");
    };
    ;
    return Person;
}());
;
var person1 = new Person("Ghulam Mustafa", ["Cricket", "Travelling"]);
person1.age = 16;
console.log(person1);
console.log(person1.introduce());
console.log(person1.age);
