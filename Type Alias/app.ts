// Type Alias // 

// 1 ya 1 se zyada types kw as a variable declare krte hen or bd me us variable kw re use krte hen type k tor pr.

type myTypes = string | number | boolean;

let myName: myTypes = "Ausaf";
let data: myTypes[] = ["GHulam Mustafa", 21, true, "Cricket"]

// you can even combine them

type rawData = myTypes | null | undefined;

let data2: rawData = "Ausaf"

////

type color = "red" | "green" | "blue";

function setColor (clr: color){
    console.log(`color set to ${clr}`)
};

setColor("green");
setColor("blue");
setColor("red");
// setColor("Yellow"); error 
