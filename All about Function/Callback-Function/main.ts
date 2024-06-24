// Callback Function

// Function k argument k andar function dena call back function kehlata he.

function hello(callback: any){
    callback("GM");
};

// arrowFunc call ho rha he hello function me 
let arrowFunc = (name: string)=>{
    console.log(`hellow ${name}`);
}

hello(arrowFunc)

//// new example

function getName(par1: any, par2: string){
    par1(par2);
};

function myCallBack(name: string){
    console.log(`My name is ${name}`)
};

getName(myCallBack, "Ausaf")