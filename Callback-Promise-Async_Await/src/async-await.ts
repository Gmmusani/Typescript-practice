// // async function promise return krta he.

// async function test(){
//     return "Hello";
// };

// console.log(test());


// // await async function k andar use hota he.
// let awaitTest = async function test2(){
//     console.log(1);
//     await console.log(2);
//     console.log(3);
// };

// console.log(0);
// awaitTest()

// console.log(5)

// try Catch

// async function myFunc(){
//     try{
//         console.log(1);
//         await console.log(2);
//         console.log(3);
//     } 
//     catch(error){
//         console.log("error")
//     };
// };

// console.log(0);
// myFunc()

// console.log(5)

// new example

// function api(){
//     return new Promise((resolve, reject)=>{
//         setTimeout(()=>{
//             console.log("Weather Data");
//             resolve(200);
//         }, 3000);
//     });
// };

// async function getWeatherData(){
//     await api();
//     await api();
// };

// getWeatherData();

//

function getData(getId: number){
    return new Promise((resolve, reject)=>{
        setTimeout(() => {
            console.log("Data", getId);
            resolve("success");
        }, 3000);
    });
};

async function getAllData(){
    console.log("Getting Data 1...");
    await getData(1);
    console.log("Getting Data 2...");
    await getData(2);
    console.log("Getting Data 3...");
    await getData(3);
};

getAllData();