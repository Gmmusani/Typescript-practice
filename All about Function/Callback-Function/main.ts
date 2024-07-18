// Callback Function

// Function k argument k andar function dena call back function kehlata he.

// function hello(callback: (name: string)=> void){
//     callback("GM");
// };

// // arrowFunc call ho rha he hello function me 
// let arrowFunc = (name: string)=>{
//     console.log(`hellow ${name}`);
// }

// hello(arrowFunc)

//// new example

// function getName(par1: any, par2: string){
//     par1(par2);
// };

// function myCallBack(name: string){
//     console.log(`My name is ${name}`)
// };

// getName(myCallBack, "Ausaf")


//

// function cuttingSuit(callback: ()=> void){
//     console.log('Cutting started...');
//     setTimeout(()=>{
//         console.log("Cutting Done");
//         callback();
//     }, 3000);
// };

// function stitching(callback: ()=> void){
//     console.log("Stitching Started...");
//     setTimeout(()=>{
//         console.log("Stitching Done");
//         callback();
//     }, 5000);
// };

// function suitpress(){
//     console.log("suit press started...")
//     setTimeout(()=>{
//         console.log("Suit press done")
//         console.log("Congratulations, Suit is ready!!!");
//     }, 2000);
// };

// cuttingSuit(()=>{
//     stitching(()=>{
//         suitpress();
//     });
// });

////

function getData(dataid: number, callback: ()=> void){
    console.log("getting data")
    setTimeout(()=>{
        console.log("Data", dataid);
        callback();
    }, 2000);
};

getData(1, ()=>{
    getData(2, ()=>{
        getData(3, ()=>{
            console.log("done");            
        });
    });
});


// function myCallBack(text: string) {
//     console.log("inside myCallback " + text);
// }

// function callingFunction(initialText: string, callback: (text: string) => void)
// {
//     callback(initialText);
// }

// callingFunction("myText", myCallBack);