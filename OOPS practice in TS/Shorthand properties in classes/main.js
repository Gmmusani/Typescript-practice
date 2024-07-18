// shorthand properties // 
// class kw properties dene ki zaroorat nai parhti br br bs constructor k parameter me denge.
// constructor me b this.something nai likhna parhta.
// lkn parameters me access modifiers dene parhenge wrna property me error ajaega.
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Person = /** @class */ (function () {
    function Person(name, age, hobbies) {
        this.name = name;
        this.age = age;
        this.hobbies = hobbies;
    }
    ;
    Person.prototype.introduce = function () {
        return "Hello, i am ".concat(this.name, ", i am ").concat(this.age, " years old and i love ").concat(this.hobbies.join(", "), ".");
    };
    return Person;
}());
var Student = /** @class */ (function (_super) {
    __extends(Student, _super);
    function Student(name, age, hobbies, grade) {
        // child class me super keyword zaroori nai this.something
        var _this = _super.call(this, name, age, hobbies) || this;
        _this.grade = grade;
        return _this;
    }
    ;
    Student.prototype.introduce = function () {
        return "".concat(_super.prototype.introduce.call(this), " i am in grade ").concat(this.grade);
    };
    ;
    return Student;
}(Person));
;
var person1 = new Person("Ghulam Mustafa", "21", ["Cricket", "Travelling"]);
var student1 = new Student("Ahmed", "18", ["Eating", "Football", "Gaming"], "10th");
console.log(student1.introduce());
