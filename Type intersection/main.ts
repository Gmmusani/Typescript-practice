type PersonType = {
    name: string;
    age: number;
    id: number;
};

type PersonType2 = {
    name: string;
    age: number;
    isMale: boolean;
};

// syntax 
type myType = PersonType & PersonType2

let personDetail: myType = {
    name: "Ghulam Mustafa",
    age: 21,
    isMale: true,
    id: 1234
};

console.log(personDetail)