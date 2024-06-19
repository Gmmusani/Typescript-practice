// Type vs Interface

// syntax
// type abc = {}
// interface abc2 {}

// you can use type in interface:
type nam = string;
type age = number;
// interface nam2 string ; error//

interface person {
    name: nam;
    age: age;
    id: age;
};

// you can use interface multiple times
// you cannot reuse type definition multiple times as you can with interfaces.

interface abc {
    name: string
}

interface abc {
    age: number;
}

let person2 : abc = {
    name: "GM",
    age: 21
};

// type abc2 = {
//     id: number
// };

// type abc2 = {
//     email: string
// }; // error

// interface me extend kw use krskte hen lkn type me use nai kr skte.

// interface with extends
interface abc2 {
    name: string;
};
interface obj extends abc2 {
    age: number;
};

let test: obj = {
    name: "GM",
    age: 21
};

// type me extends use nai hota
type a = {
    year: number;
};
type b extends a = {}; // error;







