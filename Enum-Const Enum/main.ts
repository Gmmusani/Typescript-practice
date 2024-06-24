// Enum //
// Enum object or array ka mixup he, is ka hm use krte hen searching k lie,
// just like hmen index number search krwana he ya phr name sprint krwana he tw hm us men enum kw use krenge.

enum students{Ausaf, GM, Mudassir};// index starts with 0;
let student: students = students.Mudassir;
console.log(student);

enum students2{Jamshed = 2, GM, Ahmed}; // index by default 0 se start hota he lkn hmne yahn 2 se start kia he.
let a: string = students2[4];
console.log(a);

enum colors{Red = 3, Green = 5, Blue = 12}; // sbki values kw assign bhi kr skte hen.
let colorIndex: number = colors["Blue"];
console.log(colorIndex);

// const Enum
// const enum me b wohi sb he jw enum me he lkn const enum logical searching allow nai krta.
// jesa k example 2 me Error he.

const enum Color {Red, Green, Blue};//starts with 0
var c: Color = Color.Green;

const enum Color1 {Red = 1, Green, Blue};
var colorName: string = Color[2]; //Not allowed with const enums
console.log(colorName);

const enum Color2 {Red = 1, Green = 2, Blue = 4};//can assign values to all
var colorIndex2 = Color2["Blue"];
console.log(colorIndex);


