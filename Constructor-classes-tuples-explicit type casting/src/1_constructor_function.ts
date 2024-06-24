interface IUser {
    firstName: string,
    lastName: string,
    age: number,
    getAge: () => number;
}

function User(this: IUser, fName: string, lName: string, age: number){
    this.firstName = fName;
    this.lastName = lName
    this.age = age;

    this.getAge = function(){
        return this.age
    }
};

const user1 = new (User as any)("Ghulam","Mustafa", 21)
const user2 = new (User as any)("Ahmed", "Raza", 42)
console.log(user1);
console.log("user 2:", user2.getAge());