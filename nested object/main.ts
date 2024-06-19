// Nested object // 

const student = {
    name: "Ghulam Mustafa",
    id: 10,
    age: 21,
    qualification: {
        grade: "10th",
        result: "A+"
    }
};

console.log(student)

// print the nested object
console.log(student.qualification.grade)
console.log(student["qualification"].result)
console.log(student["qualification"]["grade"])