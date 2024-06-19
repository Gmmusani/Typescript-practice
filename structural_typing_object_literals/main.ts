// structural typing

// structure same hona chaie yani object ki properties match honi chaie tw wo 1 doosre me assign kie ja skte hen
interface Circle {
    radius : number;
}
interface Disk {
    radius: number;
}

let circle: Circle = {
    radius: 10
}
let disk: Disk = {
    radius: 20
}

circle = disk // ok
disk = circle // ok

// Additional Properties

interface Ball {
    diameter: number;
}

interface Sphere {
    diameter: number;
    length: number;
}
  
  let ball: Ball = { diameter: 10 };
  let sphere: Sphere = {
     diameter: 20,
     length: 20 
};

// Ball ki jw requirement he wo sphere puri kr rha he lkn sphere ki requirement ball puri nai kr rha isi lie error aya. 
// sphere = ball; // error;
ball = sphere;

console.log(ball)

// Fresh Object //

// fresh object me na hi ap property ka name change kr skte hw or naw hi us me property add kr skte hw.

let myType = {
    name: "GM",
    age: 21
}  // ok

myType = {
    name: "Ausaf",
    age: 18
}  // ok

myType = {
    fullName: "Ausaf",
    age: 18
}  // error;

myType = {
    name: "Jamshed",
    age: 21,
    cnic: 0000
}  // error;

// Stale object //

// Stale object me b wohi sb same cheezen hen jw hmne structural typing or additional properties me parhi.
// stale object simple object hota he lkn jb hm usme 1 or simple object assign krdete hen tw wo stale object bn jata he.