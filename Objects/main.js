// Object //
// simple object:
var student = {
    fName: "Ghulam Mustafa",
    id: "GIAIC1234",
    age: 21
};
// print an object:
console.log(student);
// you can console the properties of object in two ways:
console.log(student.id);
console.log(student["age"]);
// anonymous type
// An anonymous type does not have a name;
var student2 = {
    name: "Ausaf",
    age: 18,
    id: 2000
};
console.log(student2);
var car = {
    brand: "Corolla",
    model: "Toyota",
    year: 2020,
    color: "black",
    mileAge: 10000
};
console.log(car);
var car2 = {
    brand: "Corrola",
    modelYear: 2024,
    color: "Silver",
};
console.log(car2);
;
var employees = [
    {
        name: "Ausaf",
        id: 2000,
        age: 18
    },
    {
        name: "Jamshed",
        age: 21,
        id: 2001
    }
];
console.log(employees);
console.log(employees[0]);
console.log(employees[1].name);
