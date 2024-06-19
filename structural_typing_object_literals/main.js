// structural typing
var circle = {
    radius: 10
};
var disk = {
    radius: 20
};
circle = disk; // ok
disk = circle; // ok
var ball = { diameter: 10 };
var sphere = {
    diameter: 20,
    length: 20
};
// Ball ki jw requirement he wo sphere puri kr rha he lkn sphere ki requirement ball puri nai kr rha isi lie error aya. 
// sphere = ball; // error;
ball = sphere;
console.log(ball);
// Fresh Object //
// fresh object me na hi ap property ka name change kr skte hw or naw hi us me property add kr skte hw.
var myType = {
    name: "GM",
    age: 21
};
myType = {
    name: "Ausaf",
    age: 18
};
myType = {
    fullName: "Ausaf",
    age: 18
};
myType = {
    name: "Jamshed",
    age: 21,
    cnic: 0
};
