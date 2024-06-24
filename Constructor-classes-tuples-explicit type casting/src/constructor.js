function User(fName, lName, age){
    this.fName = fName;
    this.lName = lName;
    this.age = age;

    this.getAge = function(){
        return this.age
    }
};

const user1 = new User("Ghulam","Mustafa", 21)
const user2 = new User("Ahmed", "Raza", 42)
console.log(user1);
console.log("user 2:", user2.getAge());